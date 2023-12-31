import { useDispatch, useSelector } from 'react-redux';
import { useEffect, forwardRef, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { Status } from '../../../utils/enums/status.enum';
import { AppDispatch } from '../../../store';
import { roomsSelector, roomsThunks } from '../../../store/rooms';
import { FoundRoomsList } from './FoundRoomsList';
import { RLoader } from '../../RLoader';
import { Pagination } from '../../ui/Pagination';
import styles from './index.module.css';

type Props = {
  searchQuery: string;
};
export const SectionFoundRooms = forwardRef<HTMLDivElement, Props>(
  ({ searchQuery }, ref) => {
    const { t } = useTranslation();
    const dispatch = useDispatch<AppDispatch>();
    const { foundRoomsData, foundRoomsStatus } = useSelector(roomsSelector);
    const [currentPage, setCurrentPage] = useState<number>(1);

    useEffect(() => {
      const searchRooms = async () => {
        await dispatch(
          roomsThunks.searchRooms({ currentPage, query: searchQuery })
        );
      };

      searchRooms();
    }, [dispatch, currentPage, searchQuery]);
    return (
      <section id="found-rooms" className={styles.sectionFound} ref={ref}>
        <h2>{t('search.title')}</h2>

        <div className={styles.content}>
          {foundRoomsStatus === Status.Loading && <RLoader />}

          {foundRoomsData &&
            foundRoomsStatus === Status.Succeeded &&
            foundRoomsData.rooms.length > 0 && (
              <FoundRoomsList rooms={foundRoomsData.rooms} />
            )}
          {foundRoomsData &&
            foundRoomsStatus === Status.Succeeded &&
            foundRoomsData.rooms.length === 0 && <p>Результатів не знайдено</p>}
        </div>
        <Pagination
          pageCount={foundRoomsData?.totalPages}
          handlePageClick={(paginationState) =>
            setCurrentPage(paginationState.selected + 1)
          }
        />
      </section>
    );
  }
);
