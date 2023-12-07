import { useLoaderData } from 'react-router-dom';

import { RoomBody } from '../../components/room/RoomBody';
import { RoomHeader } from '../../components/room/RoomHeader';
import type { Room as RoomType } from '../../utils/types/rooms.type';

const Room = () => {
  const room = useLoaderData() as RoomType;
  return (
    <>
      <RoomHeader name={room.title} membersNum={room.users.length} />
      <RoomBody />
    </>
  );
};

export default Room;
