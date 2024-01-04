import { useDispatch, useSelector } from 'react-redux';
import { useEffect, forwardRef, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { Status } from '../../../utils/enums/status.enum';
import { AppDispatch } from '../../../store';
import { roomsSelector, roomsThunks } from '../../../store/rooms';
import { PublicRoomsList } from '../SectionPublicRooms/PublicRoomsList';
import { RLoader } from '../../RLoader';
import styles from '../SectionPublicRooms/index.module.css';
import { Pagination } from '../../ui/Pagination';
import { RListIsEmpty } from '../../RListIsEmpty';
import { RAccordion } from '../../RAccordion';

export const SectionMyPublicRooms = forwardRef<HTMLDivElement>((_, ref) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const { t } = useTranslation();
  const dispatch = useDispatch<AppDispatch>();
  const { myPublicRoomsData, myPublicRoomsStatus } = useSelector(roomsSelector);

  useEffect(() => {
    const getPublicRooms = async () => {
      await dispatch(roomsThunks.getOwnPublicRooms({ currentPage }));
    };
    getPublicRooms();
  }, [dispatch, currentPage]);

  return (
    <section id="public-rooms" className={styles.sectionPublic} ref={ref}>
      <RAccordion title={t('rooms.myPublicRooms')}>
        <div className={styles.content}>
          {myPublicRoomsStatus === Status.Loading && <RLoader />}

          {myPublicRoomsData && myPublicRoomsStatus === Status.Succeeded && (
            <>
              {myPublicRoomsData.rooms.length === 0 && <RListIsEmpty />}
              {myPublicRoomsData.rooms.length > 0 && (
                <PublicRoomsList rooms={myPublicRoomsData.rooms} />
              )}
            </>
          )}
        </div>

        <Pagination
          pageCount={myPublicRoomsData?.totalPages}
          handlePageClick={(paginationState) =>
            setCurrentPage(paginationState.selected + 1)
          }
        />
      </RAccordion>
    </section>
  );
});
