import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';

import type { Room } from '../../../../utils/types/rooms.type';
import { userSelector } from '../../../../store/user';
import { AuthPopup } from '../../../auth/signup/authPopup';
import { Status } from '../../../../utils/enums/status.enum';
import styles from './index.module.css';

type PublicRoomsListProps = {
  rooms: Room[];
};

export const PublicRoomsList = ({ rooms }: PublicRoomsListProps) => {
  const { status, userData } = useSelector(userSelector);
  const [openPopup, setOpenPopup] = useState<boolean>(false);

  return (
    <>
      <AuthPopup show={openPopup} setIsShow={setOpenPopup} />
      <div className={styles.list}>
        {userData && status === Status.Succeeded
          ? rooms.map((item) => (
              <NavLink
                // eslint-disable-next-line no-underscore-dangle
                to={`/public-chat/${item._id}`}
                className={styles.listItem}
                // eslint-disable-next-line no-underscore-dangle
                key={item._id}
              >
                <div>{item.title}</div>
                <div>{item.description}</div>
                <div>{item.topic}</div>
              </NavLink>
            ))
          : rooms.map((item) => (
              <button
                type="button"
                className={styles.listItem}
                // eslint-disable-next-line no-underscore-dangle
                key={item._id}
                onClick={() => setOpenPopup(true)}
              >
                <div>{item.title}</div>
                <div>{item.description}</div>
                <div>{item.topic}</div>
              </button>
            ))}
      </div>
    </>
  );
};
