import { useDispatch, useSelector } from 'react-redux';
import { useEffect, forwardRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { debounce } from 'lodash';

import { Status } from '../../../utils/enums/status.enum';
import { AppDispatch } from '../../../store';
import { roomsSelector, roomsThunks } from '../../../store/rooms';
import { PublicRoomsList } from './PublicRoomsList';
import { RLoader } from '../../RLoader';
import styles from './index.module.css';
import { userSelector } from '../../../store/user';
import { Pagination } from '../../ui/Pagination';
import { SearchFilter } from '../../SearchFilter';
import { Topic } from '../../../utils/enums/topic.enum';

type TopicState = typeof Topic | '';

export const SectionPublicRooms = forwardRef<HTMLDivElement>((_, ref) => {
  const { t } = useTranslation();
  const dispatch = useDispatch<AppDispatch>();
  const { publicRoomsData, status } = useSelector(roomsSelector);
  const { userData, status: userStatus } = useSelector(userSelector);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const [filter, setFilter] = useState<TopicState>();
  const [searchQuery, setSearchQuery] = useState('');

  const searchHandler = (value: string) => {
    if (value.length > 2) {
      setSearchQuery(value);
    } else {
      setSearchQuery('');
    }
  };
  const debounced = debounce(searchHandler, 500);

  useEffect(() => {
    const getPublicRooms = async () => {
      let page = currentPage;

      if (filter || searchQuery) {
        page = 1;
        setCurrentPage(1);
      }
      if (userData && userStatus === Status.Succeeded) {
        await dispatch(
          roomsThunks.getPublicRoomsWithoutOwn({
            currentPage: page,
            topic: filter,
            query: searchQuery,
          })
        );
        return;
      }
      if (!userData && userStatus === Status.Idle) {
        await dispatch(
          roomsThunks.getPublicRooms({
            currentPage: page,
            topic: filter,
            query: searchQuery,
          })
        );
      }
    };

    getPublicRooms();
  }, [dispatch, userData, userStatus, currentPage, filter, searchQuery]);
  return (
    <section id="public-rooms" className={styles.sectionPublic} ref={ref}>
      <h2 className={styles.titleSection}>{t('rooms.publicRoom')}</h2>
      <div className={styles.searchFilter}>
        <SearchFilter
          onFilterSubmit={(value) => setFilter(value)}
          onSearchChange={debounced}
        />
      </div>
      <div className={styles.content}>
        {status === Status.Loading && <RLoader />}

        {publicRoomsData && status === Status.Succeeded && (
          <PublicRoomsList rooms={publicRoomsData.rooms} />
        )}
        {searchQuery && publicRoomsData?.rooms.length === 0 && (
          <p>{t('search.notFound')}</p>
        )}
      </div>
      <Pagination
        pageCount={publicRoomsData?.totalPages}
        handlePageClick={(paginationState) =>
          setCurrentPage(paginationState.selected + 1)
        }
      />
    </section>
  );
});
