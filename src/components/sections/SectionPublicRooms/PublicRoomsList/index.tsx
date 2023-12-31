/* eslint-disable no-underscore-dangle */
import { useState } from 'react';

import type { Room } from '../../../../utils/types/rooms.type';
import { AuthPopup } from '../../../auth/signup/authPopup';
import styles from './index.module.css';
import { PublicRoomsListItem } from '../PublicRoomsListItem';

type PublicRoomsListProps = {
  rooms: Room[];
};

export const PublicRoomsList = ({ rooms }: PublicRoomsListProps) => {
  const [openPopup, setOpenPopup] = useState<boolean>(false);

  return (
    <>
      <AuthPopup show={openPopup} setIsShow={setOpenPopup} />
      <div className={styles.list}>
        {rooms.map((item) => (
          <PublicRoomsListItem
            key={item._id}
            item={item}
            onUnauthorized={() => setOpenPopup(true)}
          />
        ))}
      </div>
    </>
  );
};
