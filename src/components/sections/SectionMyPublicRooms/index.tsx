import { useDispatch, useSelector } from 'react-redux';
import { useEffect, forwardRef, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { Status } from '../../../utils/enums/status.enum';
import { AppDispatch } from '../../../store';
import { roomsSelector, roomsThunks } from '../../../store/rooms';
import { PublicRoomsList } from '../SectionPublicRooms/PublicRoomsList';
import { RLoader } from '../../RLoader';
import { Pagination } from '../../ui/Pagination';
import { RListIsEmpty } from '../../RListIsEmpty';
import { RAccordion } from '../../RAccordion';
import CreateRoomPopup from '../../room/CreateRoom';
import { RButton } from '../../RButton';
import { IconPlus } from '../../icons/IconPlus';
import styles from './index.module.css';

export const SectionMyPublicRooms = forwardRef<HTMLDivElement>((_, ref) => {
  const [showPopup, setShowPopup] = useState(false);
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
      <CreateRoomPopup show={showPopup} setIsShow={() => setShowPopup(false)} />

      <RAccordion title={t('rooms.myPublicRooms')}>
        <div className={styles.content}>
          {myPublicRoomsStatus === Status.Loading && <RLoader />}

          {myPublicRoomsData && myPublicRoomsStatus === Status.Succeeded && (
            <>
              <div className={styles.roomsCreated}>
                {t('rooms.createdRooms')}: {myPublicRoomsData.rooms.length}/6
              </div>
              {myPublicRoomsData.rooms.length === 0 && <RListIsEmpty />}
              {myPublicRoomsData.rooms.length > 0 && (
                <PublicRoomsList rooms={myPublicRoomsData.rooms} />
              )}
              <div className={styles.createRoom}>
                <RButton
                  type="submit"
                  color="secondary"
                  onClick={() => setShowPopup(true)}
                  disabled={myPublicRoomsData.rooms.length >= 6}
                >
                  <IconPlus />
                  {t('sidebar.createRoom')}
                </RButton>
              </div>
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
