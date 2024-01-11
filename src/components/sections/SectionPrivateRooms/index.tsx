import { useDispatch, useSelector } from 'react-redux';
import { useEffect, forwardRef, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { AppDispatch } from '../../../store';
import { roomsSelector, roomsThunks } from '../../../store/rooms';
import styles from './index.module.css';
import { PrivateRoomsList } from './PrivateRoomsList';
import { Status } from '../../../utils/enums/status.enum';
import { RLoader } from '../../RLoader';
import { Pagination } from '../../ui/Pagination';
import { RListIsEmpty } from '../../RListIsEmpty';
import { RAccordion } from '../../RAccordion';
import { Search } from '../../Search';

export const SectionPrivateRooms = forwardRef<HTMLDivElement>((_, ref) => {
  const { t } = useTranslation();
  const dispatch = useDispatch<AppDispatch>();
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [searchQuery, setSearchQuery] = useState<string>('');

  const { privateRoomsData, privateRoomsStatus } = useSelector(roomsSelector);

  const searchHandler = (value: string) => {
    if (value.length > 2) {
      setSearchQuery(value);
    } else {
      setSearchQuery('');
    }
  };

  useEffect(() => {
    const getPrivateRooms = async () => {
      let page = currentPage;

      if (searchQuery) {
        page = 1;
        setCurrentPage(1);
      }

      await dispatch(roomsThunks.getPrivateRooms({ page, query: searchQuery }));
    };

    getPrivateRooms();
  }, [dispatch, currentPage, searchQuery]);

  return (
    <section id="private-rooms" className={styles.sectionPrivate} ref={ref}>
      <RAccordion
        title={t('rooms.privateRoom')}
        storageKey="privateRoomsSection"
      >
        <div className={styles.filtersWrap}>
          <div>
            <Search onChange={searchHandler} />
          </div>
        </div>
        <div className={styles.content}>
          {privateRoomsStatus === Status.Loading && <RLoader />}
          {searchQuery && privateRoomsData?.rooms.length === 0 && (
            <span className={styles.textResults}>{t('search.notFound')}</span>
          )}
          {!searchQuery &&
            privateRoomsData?.rooms.length === 0 &&
            privateRoomsStatus === Status.Succeeded && <RListIsEmpty />}
          {privateRoomsData &&
            privateRoomsData?.rooms.length > 0 &&
            privateRoomsStatus === Status.Succeeded && (
              <PrivateRoomsList rooms={privateRoomsData.rooms} />
            )}
        </div>

        <Pagination
          pageCount={privateRoomsData?.totalPages}
          handlePageClick={(paginationState) =>
            setCurrentPage(paginationState.selected + 1)
          }
        />
      </RAccordion>
    </section>
  );
});
