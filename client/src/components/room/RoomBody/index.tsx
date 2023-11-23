import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import io, { Socket } from 'socket.io-client';

import { MessagesList } from '../../messages/MessagesList';
import { NewMessageForm } from '../../messages/NewMessageForm';
// import { Chat } from '../../messages/Chat';
import { chatSelector, chatThunks } from '../../../store/chat';
import { AppDispatch } from '../../../store';

const socket: Socket = io('http://localhost:3001');

export const RoomBody = () => {
  const { messages, messagesStatus } = useSelector(chatSelector);
  const [inputMessage, setInputMessage] = useState<string>('');

  const params = useParams();
  const dispatch: AppDispatch = useDispatch();

  const roomId = params.roomId!;
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

  const inputChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const message = event.target.value;
    setInputMessage(message);
  };

  const formSubmitHandler = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!inputMessage || inputMessage.trim() === '') {
      return;
    }
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
    <div className="container">
      {/* <Chat /> */}

      <MessagesList messages={messages} status={messagesStatus} />

      <NewMessageForm
        value={inputMessage}
        onSubmit={formSubmitHandler}
        onChange={inputChangeHandler}
      />
    </div>
  );
};
