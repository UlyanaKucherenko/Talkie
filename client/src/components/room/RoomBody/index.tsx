import { MessagesList } from '../../messages/MessagesList';
import { NewMessage } from '../../messages/NewMessageForm';
import { Chat } from '../../messages/Chat';
// import { MessagesList } from '../../messages/MessagesList';
// import { NewMessage } from '../../messages/NewMessage';

export const RoomBody = () => (
  <div className="container">
    <Chat />
    {/* <MessagesList />
    <NewMessage /> */}
  </div>
);
