import { useLoaderData } from 'react-router-dom';

import { RoomBody } from '../../components/room/RoomBody';
import { RoomHeader } from '../../components/room/RoomHeader';
import type { Room as RoomType } from '../../utils/types/rooms.type';

const Room = () => {
  const room = useLoaderData() as RoomType;
  return (
    <div>
      <RoomHeader name={room.title} membersNum={room.users.length} />
      <RoomBody />
    </div>
  );
};

export default Room;
