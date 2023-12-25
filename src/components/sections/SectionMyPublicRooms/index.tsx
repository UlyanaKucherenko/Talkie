import { useDispatch, useSelector } from 'react-redux';
import { useEffect, forwardRef } from 'react';
import { useTranslation } from 'react-i18next';

import { Status } from '../../../utils/enums/status.enum';
import { AppDispatch } from '../../../store';
import { roomsSelector, roomsThunks } from '../../../store/rooms';
import { PublicRoomsList } from '../SectionPublicRooms/PublicRoomsList';
import { RLoader } from '../../RLoader';
import styles from '../SectionPublicRooms/index.module.css';

export const SectionMyPublicRooms = forwardRef<HTMLDivElement>((_, ref) => {
  const { t } = useTranslation();
  const dispatch = useDispatch<AppDispatch>();
  const { myPublicRoomsData, status } = useSelector(roomsSelector);

  useEffect(() => {
    const getPublicRooms = async () => {
      await dispatch(roomsThunks.getOwnPublicRooms());
    };
    getPublicRooms();
  }, [dispatch]);

  return (
    <section id="public-rooms" className={styles.sectionPublic} ref={ref}>
      <h2>{t('rooms.myPublicRooms')}</h2>

      <div className={styles.content}>
        {status === Status.Loading && <RLoader />}

        {myPublicRoomsData && status === Status.Succeeded && (
          <PublicRoomsList rooms={myPublicRoomsData.rooms} />
        )}
      </div>
    </section>
  );
});
