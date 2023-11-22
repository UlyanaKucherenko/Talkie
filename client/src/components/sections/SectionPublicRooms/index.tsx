import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import { Status } from '../../../utils/enums/status.enum';
import { AppDispatch } from '../../../store';
import { roomsSelector, roomsThunks } from '../../../store/rooms';
import { PublicRoomsList } from './PublicRoomsList';
import { RLoader } from '../../RLoader';
import styles from './index.module.css';

export const SectionPublicRooms = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch<AppDispatch>();
  const { publicRoomsData, status } = useSelector(roomsSelector);

  useEffect(() => {
    const getPublicRooms = async () => {
      await dispatch(roomsThunks.getPublicRooms());
    };

    getPublicRooms();
  }, [dispatch]);

  return (
    <section id="public-rooms" className={styles.sectionPublic}>
      <h2>{t('rooms.public')}</h2>

      {status === Status.Loading && <RLoader />}

      {publicRoomsData && status === Status.Succeeded && (
        <PublicRoomsList rooms={publicRoomsData.rooms} />
      )}
    </section>
  );
};
