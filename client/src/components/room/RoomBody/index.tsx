import { MessagesList } from '../../messages/MessagesList';
import { NewMessage } from '../../messages/NewMessageForm';

export const RoomBody = () => (
  <div className="container">
    <MessagesList />
    <NewMessage />
  </div>
);
