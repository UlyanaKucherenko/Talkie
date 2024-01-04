/* eslint-disable no-underscore-dangle */
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { PrivateRoom } from '../../../../utils/types/rooms.type';
import styles from './index.module.css';
import { AppDispatch } from '../../../../store';
import { roomsThunks } from '../../../../store/rooms';
import { RButtonIcon } from '../../../ui/RButtonIcon';
import { IconClose } from '../../../icons/IconClose';
import { themeSelector } from '../../../../store/theme';
import { ThemeEnum } from '../../../../utils/const';
import { userSelector } from '../../../../store/user';

type PrivateRoomsListItemProps = {
  item: PrivateRoom;
};

export const PrivateRoomsListItem = ({ item }: PrivateRoomsListItemProps) => {
  const { _id: id, title, img, owner } = item;
  const dispatch: AppDispatch = useDispatch();
  const { mode } = useSelector(themeSelector);
  const { userData } = useSelector(userSelector);

  const roomDelete = async () => {
    await dispatch(roomsThunks.deleteRoom(id));
    await dispatch(roomsThunks.getPrivateRooms({ page: 1 }));
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
        <RButtonIcon
          icon={IconClose}
          defaultColorIcon={mode === ThemeEnum.LIGHT ? 'dark' : 'light'}
          onClick={() => roomDelete()}
          className={styles.btnDelete}
        />
      )}
    </div>
  );
};
