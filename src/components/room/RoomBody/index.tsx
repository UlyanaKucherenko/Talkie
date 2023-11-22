import { MessagesList } from '../../messages/MessagesList';
import { NewMessage } from '../../messages/NewMessage';

export const RoomBody = () => (
  <div className="container">
    <MessagesList />
    <NewMessage />
  </div>
);
