import { useDispatch, useSelector } from 'react-redux';
import { useEffect, forwardRef } from 'react';
import { useTranslation } from 'react-i18next';

import { Status } from '../../../utils/enums/status.enum';
import { AppDispatch } from '../../../store';
import { roomsSelector, roomsThunks } from '../../../store/rooms';
import { PublicRoomsList } from './PublicRoomsList';
import { RLoader } from '../../RLoader';
import styles from './index.module.css';
import { userSelector } from '../../../store/user';

export const SectionPublicRooms = forwardRef<HTMLDivElement>((_, ref) => {
  const { t } = useTranslation();
  const dispatch = useDispatch<AppDispatch>();
  const { publicRoomsData, status } = useSelector(roomsSelector);
  const { userData, status: userStatus } = useSelector(userSelector);

  useEffect(() => {
    const getPublicRooms = async () => {
      if (userData && userStatus === Status.Succeeded) {
        await dispatch(roomsThunks.getPublicRoomsWithoutOwn());
        return;
      }
      await dispatch(roomsThunks.getPublicRooms());
    };

    getPublicRooms();
  }, [dispatch, userData, userStatus]);

  return (
    <section id="public-rooms" className={styles.sectionPublic} ref={ref}>
      <h2>{t('rooms.public')}</h2>

      <div className={styles.content}>
        {status === Status.Loading && <RLoader />}

        {publicRoomsData && status === Status.Succeeded && (
          <PublicRoomsList rooms={publicRoomsData.rooms} />
        )}
      </div>
    </section>
  );
});
