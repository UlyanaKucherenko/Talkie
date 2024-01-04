import { useLoaderData } from 'react-router-dom';

import { RoomBody } from '../../components/room/RoomBody';
import { RoomHeader } from '../../components/room/RoomHeader';
import type { Room as RoomType } from '../../utils/types/rooms.type';
import styles from './index.module.css';

const Room = () => {
  const room = useLoaderData() as RoomType;
  return (
    <div className={styles.wrap}>
      <RoomHeader
        name={room.title}
        membersNum={room.users.length}
        roomType={room.type}
        image={room.img}
      />
      <RoomBody roomType={room.type} />
    </div>
  );
};

export default Room;
