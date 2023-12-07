import { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import io, { Socket } from 'socket.io-client';

import { MessagesList } from '../../messages/MessagesList';
import { NewMessageForm } from '../../messages/NewMessageForm';
import { INewMessage, chatSelector, chatThunks } from '../../../store/chat';
import { AppDispatch } from '../../../store';
import styles from './index.module.css';
import { userSelector } from '../../../store/user';

// const socket: Socket = io('http://localhost:3001');
const server = `${import.meta.env.VITE_SERVER_HOST}`;
const socket: Socket = io(`${server}/roomNameSpace`, {
  transports: ['websocket'],
  withCredentials: true,
});

export type TypeEventUserType = {
  nick: string;
  room: string;
};

// export type NewTypeEventUserType = {
//   typingUsers: string[];
//   room: string;
// };

export const RoomBody = () => {
  const { messages, messagesStatus } = useSelector(chatSelector);
  const [inputMessage, setInputMessage] = useState<string>('');
  const { userData } = useSelector(userSelector);
  const [isTyping, setIsTyping] = useState(false);
  // const [userTyping, setUserTyping] = useState<string>('');
  // const [usersTyping, setUsersTyping] = useState<string[]>([]);

  const typingTimeout = useRef<NodeJS.Timeout | null>(null);

  const params = useParams();
  const dispatch: AppDispatch = useDispatch();

  const roomId = params.roomId!;
  useEffect(() => {
    // Send a request to enter the room
    socket.emit('join', {
      room: roomId,
      nick: userData?.user.name,
      date: Date.now(),
    });

    // Subscribe to the new message event
    const handleMessage = (message: INewMessage) => {
      if (message) dispatch(chatThunks.getMessages(roomId));
    };
    socket.on('message', handleMessage);

    // Unsubscribe from events when unmounting the component
    return () => {
      socket.off('message', handleMessage);
    };
  }, [dispatch, roomId, userData]);

  useEffect(() => {
    const getMessages = async () => {
      await dispatch(chatThunks.getMessages(roomId));
    };

    getMessages();
  }, [dispatch, roomId]);

  useEffect(() => {
    const handleTyping = (/* nick : TypeEventUserType */) => {
      // setUserTyping(nick);
      setIsTyping(true);
      typingTimeout.current = setTimeout(() => setIsTyping(false), 2000);
    };

    // const handleTyping = ({ typingUsers, room }: NewTypeEventUserType) => {
    //   // setUserTyping(typingUsers);
    //   setUsersTyping(typingUsers);
    //   setIsTyping(true);
    //   typingTimeout.current = setTimeout(() => setIsTyping(false), 2000);
    // };

    const handleStopTyping = () => {
      setIsTyping(false);
    };

    // const handleStopTyping = ({ typingUsers }: NewTypeEventUserType) => {
    //   setUsersTyping(typingUsers);
    // };

    // Listen for 'typing'  events
    socket.on('user-start-write', handleTyping);
    socket.on('user-end-write', handleStopTyping);

    // Clean up event listeners
    return () => {
      socket.off('user-start-write', handleTyping);
      socket.off('user-end-write', handleStopTyping);
      clearTimeout(typingTimeout.current!);
    };
  }, [typingTimeout]);

  const inputChangeHandler = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const message = event.target.value;
    setInputMessage(message);

    // event user starts typing
    if (!isTyping) {
      socket.emit('user-start-write', {
        nick: userData?.user.name,
        room: roomId,
      });
    }

    clearTimeout(typingTimeout.current!);
    typingTimeout.current = setTimeout(() => {
      socket.emit('user-end-write', {
        nick: userData?.user.name,
        room: roomId,
      });
    }, 2000);
  };

  const sendMessage = async () => {
    if (!inputMessage || inputMessage.trim() === '') {
      return;
    }
    const message = {
      roomId,
      content: inputMessage,
    };

    const res = await dispatch(chatThunks.createMessage(message));

    const messageSocket = {
      msg: inputMessage,
      room: roomId,
      nick: userData?.user.name,
      date: Date.now(),
    };

    if (res) socket.emit('message', messageSocket);

    setInputMessage('');
  };

  const formSubmitHandler = async (event: React.FormEvent) => {
    event.preventDefault();
    await sendMessage();
  };

  const keyDownHandler = async (event: React.KeyboardEvent) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      await sendMessage();
    }
  };

  return (
    <div className={`container ${styles.chatRoom}`}>
      <MessagesList messages={messages} status={messagesStatus} />

      {/* {isTyping && <div>{userTyping} is typing..</div>} */}
      {/* {usersTyping &&
        isTyping &&
        usersTyping.map((user, idx) => <div key={idx}>{user} is typing..</div>)} */}

      <NewMessageForm
        value={inputMessage}
        onSubmit={formSubmitHandler}
        onChange={inputChangeHandler}
        onKeyDown={keyDownHandler}
      />
    </div>
  );
};
