/* eslint-disable no-underscore-dangle */
import { useState } from 'react';

import type {
  PublicRoomForRegisteredUser,
  Room,
} from '../../../../utils/types/rooms.type';
import { AuthPopup } from '../../../auth/signup/authPopup';
import styles from './index.module.css';
import { PublicRoomsListItem } from '../PublicRoomsListItem';

type PublicRoomsListProps = {
  rooms: Room[] | PublicRoomForRegisteredUser[];
};

export const PublicRoomsList = ({ rooms }: PublicRoomsListProps) => {
  const [openPopup, setOpenPopup] = useState<boolean>(false);
  return (
    <>
      <AuthPopup show={openPopup} setIsShow={setOpenPopup} />
      <div className={styles.list}>
        {rooms.map((item) => {
          if ((item as PublicRoomForRegisteredUser)?.room) {
            return (
              <PublicRoomsListItem
                key={(item as PublicRoomForRegisteredUser).room._id}
                item={(item as PublicRoomForRegisteredUser).room}
                isMember={(item as PublicRoomForRegisteredUser).member}
              />
            );
          }
          return (
            <PublicRoomsListItem
              key={(item as Room)?._id}
              item={item as Room}
              onUnauthorized={() => setOpenPopup(true)}
            />
          );
        })}
      </div>
    </>
  );
};
