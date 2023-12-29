/* eslint-disable no-underscore-dangle */

import type { PrivateRoom } from '../../../../utils/types/rooms.type';
import styles from './index.module.css';
import { PrivateRoomsListItem } from '../PrivateRoomsListItem';

type PrivateRoomsListProps = {
  rooms: PrivateRoom[];
};

export const PrivateRoomsList = ({ rooms }: PrivateRoomsListProps) => (
  <div className={styles.list}>
    {rooms &&
      rooms.map((item) => <PrivateRoomsListItem key={item._id} item={item} />)}
  </div>
);
