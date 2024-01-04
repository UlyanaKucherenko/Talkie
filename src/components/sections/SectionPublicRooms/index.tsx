import { useDispatch, useSelector } from 'react-redux';
import { useEffect, forwardRef, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { Status } from '../../../utils/enums/status.enum';
import { AppDispatch } from '../../../store';
import { roomsSelector, roomsThunks } from '../../../store/rooms';
import { PublicRoomsList } from './PublicRoomsList';
import { RLoader } from '../../RLoader';
import styles from './index.module.css';
import { userSelector } from '../../../store/user';
import { Pagination } from '../../ui/Pagination';

export const SectionPublicRooms = forwardRef<HTMLDivElement>((_, ref) => {
  const { t } = useTranslation();
  const dispatch = useDispatch<AppDispatch>();
  const { publicRoomsData, status } = useSelector(roomsSelector);
  const { userData, status: userStatus } = useSelector(userSelector);
  const [currentPage, setCurrentPage] = useState<number>(1);

  useEffect(() => {
    const getPublicRooms = async () => {
      if (userData && userStatus === Status.Succeeded) {
        await dispatch(roomsThunks.getPublicRoomsWithoutOwn({ currentPage }));
        return;
      }
      if (!userData && userStatus === Status.Idle) {
        await dispatch(roomsThunks.getPublicRooms({ currentPage }));
      }
    };

    getPublicRooms();
  }, [dispatch, userData, userStatus, currentPage]);
  return (
    <section id="public-rooms" className={styles.sectionPublic} ref={ref}>
      <h2>{t('rooms.public')}</h2>

      <div className={styles.content}>
        {status === Status.Loading && <RLoader />}

        {publicRoomsData && status === Status.Succeeded && (
          <PublicRoomsList rooms={publicRoomsData.rooms} />
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
