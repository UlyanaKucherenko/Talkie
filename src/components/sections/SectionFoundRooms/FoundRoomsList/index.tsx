import { useState } from 'react';

import type { PrivateRoom, Room } from '../../../../utils/types/rooms.type';
import { AuthPopup } from '../../../auth/signup/authPopup';
import styles from './index.module.css';
import { PrivateRoomsListItem } from '../../SectionPrivateRooms/PrivateRoomsListItem';
import { PublicRoomsListItem } from '../../SectionPublicRooms/PublicRoomsListItem';

type FoundRoomsListProps = {
  rooms: Room[] | PrivateRoom[];
};

export const FoundRoomsList = ({ rooms }: FoundRoomsListProps) => {
  const [openPopup, setOpenPopup] = useState<boolean>(false);

  return (
    <>
      <AuthPopup show={openPopup} setIsShow={setOpenPopup} />
      <div className={styles.list}>
        {rooms.map((item) => {
          if (item.type === 'private') {
            return <PrivateRoomsListItem item={item as PrivateRoom} />;
          }
          return (
            <PublicRoomsListItem
              item={item as Room}
              onUnauthorized={() => setOpenPopup(true)}
            />
          );
        })}
      </div>
    </>
  );
};
