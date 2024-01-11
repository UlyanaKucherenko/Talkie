/* eslint-disable no-underscore-dangle */
import { useCallback, useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { debounce } from 'lodash';

import io, { Socket } from 'socket.io-client';

import { MessagesList } from '../../messages/MessagesList';
import { NewMessageForm } from '../../messages/NewMessageForm';
import {
  RESET_MESSAGES,
  SET_MESSAGES,
  chatSelector,
  chatThunks,
} from '../../../store/chat';
import { AppDispatch } from '../../../store';
import styles from './index.module.css';
import { userSelector } from '../../../store/user';
import { Message } from '../../../utils/types/chat.type';
import { RLoader } from '../../RLoader';

// const socket: Socket = io('http://localhost:3001');
const server = `${import.meta.env.VITE_SERVER_HOST}`;
const socket: Socket = io(`${server}/roomNameSpace`, {
  transports: ['websocket'],
  withCredentials: true,
});

type TypeEventUsersType = {
  id: string;
  nick: string;
};

type TypeEventMessage = {
  data: Message;
};

type RoomBodyProps = {
  roomType: string;
};

export const RoomBody = ({ roomType }: RoomBodyProps) => {
  const { messages, messagesStatus, pagination } = useSelector(chatSelector);
  const [inputMessage, setInputMessage] = useState<string>('');
  const [inputErrorMessage, setInputErrorMessage] = useState<string | null>(
    null
  );
  const { userData } = useSelector(userSelector);
  const [isTyping, setIsTyping] = useState(false);
  const [userTyping, setUserTyping] = useState<string>('');
  const typingTimeout = useRef<NodeJS.Timeout | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const chatBoxRef = useRef<HTMLDivElement>(null);
  const [loadingMoreMessages, setLoadingMoreMessages] = useState(false);
  const { t } = useTranslation();
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
    const handleMessage = (message: TypeEventMessage) => {
      if (message) {
        dispatch(SET_MESSAGES(message.data));
      }
    };
    socket.on('message', handleMessage);

    // Unsubscribe from events when unmounting the component
    return () => {
      socket.off('message', handleMessage);
      socket.emit('leave', { roomId });
      dispatch(RESET_MESSAGES());
    };
  }, [dispatch, roomId, userData]);

  useEffect(() => {
    const getMessages = async () => {
      await dispatch(chatThunks.getMessages({ roomId }));
    };

    getMessages();
  }, [dispatch, roomId]);

  useEffect(() => {
    const handleTyping = (data: TypeEventUsersType) => {
      // eslint-disable-next-line no-underscore-dangle
      if (data.id !== userData?.user._id) {
        setUserTyping(data.id);
      }

      setIsTyping(true);
      typingTimeout.current = setTimeout(() => setIsTyping(false), 4000);
    };

    const handleStopTyping = () => {
      setUserTyping('');
      setIsTyping(false);
    };

    // Listen for 'typing'  events
    socket.on('user-start-write', handleTyping);
    socket.on('user-end-write', handleStopTyping);

    // Clean up event listenerss
    return () => {
      socket.off('user-start-write', handleTyping);
      socket.off('user-end-write', handleStopTyping);
      if (typingTimeout.current) {
        clearTimeout(typingTimeout.current);
      }
    };
  }, [userData, typingTimeout]);

  const inputChangeHandler = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const message = event.target.value;

    if (message.length >= 1001) {
      setInputErrorMessage(t('errors.messageLengthValidation'));
      return;
    }
    if (
      !message.match(/^[A-Za-zА-Яа-яЁёЇїІіЄєҐґ\d\s.,&@'’():;!?"$*+/%-=_]*$/g)
    ) {
      setInputErrorMessage(t('errors.messageCharacterValidation'));
    } else {
      setInputErrorMessage(null);
    }
    setInputMessage(message);

    // event user starts typing
    if (!isTyping) {
      socket.emit('user-start-write', {
        // eslint-disable-next-line no-underscore-dangle
        userId: userData?.user._id,
        nick: userData?.user.name,
        room: roomId,
      });
    }

    clearTimeout(typingTimeout.current!);
    typingTimeout.current = setTimeout(() => {
      socket.emit('user-end-write', {
        // eslint-disable-next-line no-underscore-dangle
        userId: userData?.user._id,
        nick: userData?.user.name,
        room: roomId,
      });
    }, 2000);
  };

  // ---- SCROLL TO TOP ---

  const loadMoreMessages = useCallback(async () => {
    if (currentPage >= pagination.totalPages) {
      setLoadingMoreMessages(false);
      return;
    }
    setLoadingMoreMessages(true);

    const page = currentPage + 1;
    await dispatch(chatThunks.getMessages({ roomId, page }));
    setCurrentPage(page);
    setLoadingMoreMessages(false);
    console.log('Load more messages for page:', currentPage);
  }, [currentPage, dispatch, roomId, pagination]);

  const scrollToTop = useCallback(() => {
    const boxRef = chatBoxRef?.current;
    if (boxRef) {
      const isScrolledToTop =
        boxRef.scrollHeight + boxRef.scrollTop === boxRef.clientHeight;
      setLoadingMoreMessages(isScrolledToTop);

      if (currentPage >= pagination.totalPages) {
        setLoadingMoreMessages(false);
        return;
      }
      if (isScrolledToTop) {
        loadMoreMessages();
      }
    }
  }, [chatBoxRef, loadMoreMessages, currentPage, pagination]);

  useEffect(() => {
    const boxRef = chatBoxRef?.current;
    const debouncedScrollToTop = debounce(scrollToTop, 200);
    if (boxRef) {
      boxRef.addEventListener('scroll', debouncedScrollToTop);
    }
    return () => {
      boxRef?.removeEventListener('scroll', debouncedScrollToTop);
    };
  }, [chatBoxRef, scrollToTop]);

  /// ---- END SCROLL TO TOP ---

  const scrollToBottom = () => {
    if (chatBoxRef.current) {
      chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
    }
  };

  const sendMessage = async () => {
    if (
      !inputMessage ||
      inputMessage.trim() === '' ||
      inputMessage.length >= 1001
    ) {
      setInputErrorMessage(t('errors.messageLengthValidation'));
      return;
    }

    const message = {
      roomId,
      content: inputMessage,
    };
    setInputMessage('');

    const res = await dispatch(chatThunks.createMessage(message));
    const { msg } = res.payload as any;

    const messageSocket = {
      msg,
      room: roomId,
    };

    if (msg) socket.emit('message', messageSocket);

    setTimeout(() => {
      scrollToBottom();
    }, 500);
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
    <div
      className={`${styles.chatRoom} ${
        roomType === 'private' ? styles.chatRoomPrivate : ''
      }`}
    >
      {loadingMoreMessages && (
        <div className={styles.loadMore}>
          <RLoader css={{ top: '8px' }} size="sm" />
        </div>
      )}

      <MessagesList
        divRef={chatBoxRef}
        messages={messages}
        status={messagesStatus}
        roomType={roomType}
      />
      <NewMessageForm
        value={inputMessage}
        errorMessage={inputErrorMessage}
        onSubmit={formSubmitHandler}
        onChange={inputChangeHandler}
        onKeyDown={keyDownHandler}
        userTypingData={userTyping}
        roomType={roomType}
      />
    </div>
  );
};
