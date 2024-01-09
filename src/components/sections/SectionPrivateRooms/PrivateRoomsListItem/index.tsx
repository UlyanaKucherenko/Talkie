/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-underscore-dangle */
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { useTranslation } from 'react-i18next';

import { PrivateRoom } from '../../../../utils/types/rooms.type';
import styles from './index.module.css';
import { AppDispatch } from '../../../../store';
import { roomsThunks } from '../../../../store/rooms';
import { userSelector } from '../../../../store/user';
import { RoomActions } from '../../../room/RoomActions';

type PrivateRoomsListItemProps = {
  item: PrivateRoom;
};

export const PrivateRoomsListItem = ({ item }: PrivateRoomsListItemProps) => {
  const { _id: id, title, img, owner } = item;
  const dispatch: AppDispatch = useDispatch();
  const { userData } = useSelector(userSelector);
  const { t } = useTranslation();

  const roomDelete = async () => {
    try {
      await dispatch(roomsThunks.deleteRoom(id));
      toast.success(t('success.privateRoomDeleted'));
      await dispatch(roomsThunks.getPrivateRooms({ page: 1 }));
    } catch (error) {
      console.error('Error deleting room', error);
      toast.error(t('errors.privateRoomDeleted'));
    }
  };

  return (
    <div className={styles.listItem}>
      <NavLink to={`/private-chat/${id}`} className={styles.listItemLink}>
        <div className={styles.avatar}>
          <img src={img} alt={title} />
        </div>
        <div className={styles.title}>{title}</div>
      </NavLink>
      {owner._id === userData?.user._id && (
        <RoomActions
          id={id}
          roomTitle={title}
          roomType="private"
          className={styles.btnActions}
          roomDelete={roomDelete}
        />
      )}
    </div>
  );
};
