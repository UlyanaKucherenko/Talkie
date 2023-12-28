/* eslint-disable no-underscore-dangle */
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { PrivateRoom } from '../../../../utils/types/rooms.type';
import styles from './index.module.css';
import { AppDispatch } from '../../../../store';
import { roomsThunks } from '../../../../store/rooms';
import { RButtonIcon } from '../../../ui/RButtonIcon';
import { IconClose } from '../../../icons/IconClose';

type PrivateRoomsListItemProps = {
  item: PrivateRoom;
};
type TypeUser = {
  avatarURL: string;
  name: string;
  _id: string;
};
export const PrivateRoomsListItem = ({ item }: PrivateRoomsListItemProps) => {
  const { _id: id, title, users } = item;
  const dispatch: AppDispatch = useDispatch();
  // @ts-ignore
  const guest = users.find((user) => user._id !== id) as TypeUser | undefined;

  if (!guest) {
    return null;
  }

  const roomDelete = async () => {
    await dispatch(roomsThunks.deleteRoom(id));
    await dispatch(roomsThunks.getPrivateRooms({ page: 1 }));
  };

  return (
    <div className={styles.listItem}>
      <NavLink to={`/private-chat/${id}`} className={styles.listItemLink}>
        <div className={styles.avatar}>
          <img src={guest.avatarURL} alt={guest.name} />
        </div>
        <div className={styles.title}>{title}</div>
      </NavLink>
      <RButtonIcon
        icon={IconClose}
        defaultColorIcon="dark"
        onClick={() => roomDelete()}
        className={styles.btnDelete}
      />
    </div>
  );
};
