/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-underscore-dangle */
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { useTranslation } from 'react-i18next';

import { Room } from '../../../../utils/types/rooms.type';
import styles from './index.module.css';
import { userSelector } from '../../../../store/user';
import { Topics } from '../../../../utils/constants/topic';
import { AppDispatch } from '../../../../store';
import { roomsThunks } from '../../../../store/rooms';
import { IconWrite } from '../../../icons/IconWrite';
import { RoomActions } from '../../../room/RoomActions';

type Props = {
  item: Room;
  onUnauthorized?: () => void;
  isMember?: boolean;
};
export const PublicRoomsListItem = ({
  item,
  onUnauthorized,
  isMember,
}: Props) => {
  const { userData } = useSelector(userSelector);
  const dispatch: AppDispatch = useDispatch();
  const { t } = useTranslation();

  const roomDelete = async () => {
    try {
      await dispatch(roomsThunks.deleteRoom(item._id));
      toast.success(t('success.publicRoomDeleted'));
      await dispatch(roomsThunks.getOwnPublicRooms({ currentPage: 1 }));
    } catch (error) {
      console.error('Error deleting room', error);
      toast.error(t('errors.publicRoomDeleted'));
    }
  };
  return (
    <div className={styles.listItem}>
      {isMember && (
        <div className={styles.member}>
          <IconWrite />
        </div>
      )}
      <NavLink
        onClick={(event) => {
          if (!userData) {
            event.preventDefault();
            if (onUnauthorized) {
              onUnauthorized();
            }
          }
        }}
        // eslint-disable-next-line no-underscore-dangle
        to={`/public-chat/${item._id}`}
        // className={styles.listItem}
        // eslint-disable-next-line no-underscore-dangle
        key={item._id}
      >
        <div className={styles.image}>
          {item?.img && <img src={item.img} alt={item.title} />}
        </div>
        <div className={styles.title}>{item.title}</div>
        <div className={styles.description}>{item.description}</div>
        <div className={styles.topic}>{Topics[item.topic]}</div>
      </NavLink>
      {userData?.user._id && item?.owner === userData?.user._id && (
        <RoomActions
          id={item._id}
          roomTitle={item.title}
          roomType="public"
          className={styles.btnDelete}
          roomDelete={roomDelete}
          isEdit
          roomData={item}
        />
      )}
    </div>
  );
};
