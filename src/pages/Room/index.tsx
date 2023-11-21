import { RoomBody } from '../../components/room/RoomBody';
import { RoomHeader } from '../../components/room/RoomHeader';

const Room = () => (
  <div>
    <RoomHeader name="Room" membersNum={10} />
    <RoomBody />
  </div>
);

export default Room;
