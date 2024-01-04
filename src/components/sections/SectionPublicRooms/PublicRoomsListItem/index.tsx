/* eslint-disable no-underscore-dangle */
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { Room } from '../../../../utils/types/rooms.type';
import styles from './index.module.css';
import { userSelector } from '../../../../store/user';
import { Topics } from '../../../../utils/constants/topic';
import { RButtonIcon } from '../../../ui/RButtonIcon';
import { IconClose } from '../../../icons/IconClose';
import { AppDispatch } from '../../../../store';
import { roomsThunks } from '../../../../store/rooms';
import { ThemeEnum } from '../../../../utils/const';
import { themeSelector } from '../../../../store/theme';

type Props = {
  item: Room;
  onUnauthorized?: () => void;
};
export const PublicRoomsListItem = ({ item, onUnauthorized }: Props) => {
  const { userData } = useSelector(userSelector);
  const { mode } = useSelector(themeSelector);

  const dispatch: AppDispatch = useDispatch();
  const roomDelete = async () => {
    await dispatch(roomsThunks.deleteRoom(item._id));
    await dispatch(roomsThunks.getOwnPublicRooms({ currentPage: 1 }));
  };
  return (
    <div className={styles.listItem}>
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
        <div className={styles.title}>{item.title}</div>
        <div className={styles.description}>{item.description}</div>
        <div className={styles.topic}>{Topics[item.topic]}</div>
      </NavLink>
      {userData?.user._id && item?.owner === userData?.user._id && (
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
