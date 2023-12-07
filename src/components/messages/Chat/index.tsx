import { useParams } from 'react-router-dom';
import io, { Socket } from 'socket.io-client';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

// import { userSelector } from '../../../store/user';
import { /* IMessage, */ chatSelector, chatThunks } from '../../../store/chat';
import { AppDispatch } from '../../../store';
import { Status } from '../../../utils/enums/status.enum';
import { RLoader } from '../../RLoader';

const socket: Socket = io('http://localhost:3001');

export const Chat = () => {
  const params = useParams();
  // const { userData } = useSelector(userSelector);
  const { messages, messagesStatus } = useSelector(chatSelector);
  // const [messages, setMessages] = useState<IMessage[]>([]);

  const [inputMessage, setInputMessage] = useState<string>('');
  const roomId = params.roomId!;

  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    //   // Subscribe to the new message event
    //   socket.on('message', (message: IMessage) => {
    //     setMessages((prevMessages) => [...prevMessages, message]);
    //   });

    //   // Subscribe to the event of receiving the list of messages
    //   socket.on('messageList', (messageList: IMessage[]) => {
    //     setMessages(messageList);
    //   });

    // Send a request to enter the room
    socket.emit('joinRoom', roomId);

    //   // Unsubscribe from events when unmounting the component
    //   return () => {
    //     socket.off('message');
    //     socket.off('messageList');
    //   };
  }, [roomId]);

  useEffect(() => {
    const getMessages = async () => {
      await dispatch(chatThunks.getMessages(roomId));
    };

    getMessages();
  }, [dispatch, roomId]);

  const sendMessage = async () => {
    const message = {
      roomId,
      content: inputMessage,
    };

    await dispatch(chatThunks.createMessage(message));

    await dispatch(chatThunks.getMessages(roomId));

    //  const messageSocket = {
    //   id: Date.now(),
    //   msg: inputMessage,
    //   roomId,
    //   nick: userData?.user.name,
    //   date: Date.now(),
    // };

    // socket.emit('sendMessage', messageSocket);

    setInputMessage('');
  };

  return (
    <div>
      <h3>Room-ID: {roomId}</h3>
      <hr />

      <div
        style={{
          display: 'flex',
          flexDirection: 'column-reverse',
          height: '400px',
          overflow: 'scroll',
          overflowX: 'hidden',
        }}
      >
        {messagesStatus === Status.Loading && <RLoader />}

        {messages &&
          messagesStatus === Status.Succeeded &&
          messages.map((item) => (
            <p key={item._id}>
              <span>
                <b>{item.owner.name}</b>: {item.content}
              </span>
            </p>
          ))}
      </div>
      <hr />
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <input
          type="text"
          placeholder="massage.."
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
        />
        <button type="button" onClick={sendMessage}>
          send
        </button>
      </div>
    </div>
  );
};
