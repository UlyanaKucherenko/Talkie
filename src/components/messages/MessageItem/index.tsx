/* eslint-disable no-underscore-dangle */
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { useRef, useState } from 'react';
import { getFormatTime } from '../../../utils/format-time';
import styles from './index.module.css';
import { AppDispatch } from '../../../store';
import { roomsThunks } from '../../../store/rooms';
import { useClickOutside } from '../../../hooks/use-click-outside';

type Props = {
  id: string;
  username: string;
  avatarUrl: string;
  message: string;
  time: string;
  isSent?: boolean;
  roomType: string;
};

export const MessageItem = ({
  id,
  username,
  avatarUrl,
  message,
  time,
  isSent = false,
  roomType,
}: Props) => {
  const messageStatusClassName = isSent ? styles.sent : styles.received;
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();
  const [showBtnSendPrivateMsg, setShowBtnSendPrivateMsg] = useState(false);
  const btnSendMsgRef = useRef<HTMLButtonElement>(null);

  useClickOutside(btnSendMsgRef, () => setShowBtnSendPrivateMsg(false));

  const redirectToPrivateChat = (roomId: string) => {
    navigate(`/private-chat/${roomId}`);
  };

  const createPrivateRoom = async () => {
    try {
      const res = await dispatch(roomsThunks.createPrivateRoom(id));
      if (res.payload) {
        // @ts-ignore
        const roomId = res.payload._id || res.payload?.roomId;
        if (roomId) {
          redirectToPrivateChat(roomId);
          return;
        }
      }

      console.warn('Invalid response payload:', res.payload);
    } catch (error) {
      console.error('Error executing createPrivateRoom thunk:', error);
    }
  };

  return (
    <div className={`${styles.message} ${messageStatusClassName}`}>
      <div className={styles.messageBody}>
        <div className={styles.username}>{username}</div>
        <div className={styles.messageText}>{message}</div>
        <div className={styles.messageTime}>{getFormatTime(time)}</div>
      </div>
      <button
        type="button"
        onClick={() => setShowBtnSendPrivateMsg(!showBtnSendPrivateMsg)}
        className={`${styles.avatarWrap} ${
          roomType === 'public' && showBtnSendPrivateMsg ? styles.active : ''
        }  ${roomType === 'private' && styles.noActive}`}
      >
        <img className={styles.avatar} src={avatarUrl} alt={username} />
      </button>
      {showBtnSendPrivateMsg && roomType === 'public' && (
        <button
          ref={btnSendMsgRef}
          type="button"
          onClick={() => createPrivateRoom()}
          className={styles.btnSendPrivateMsg}
        >
          send a private message
        </button>
      )}
    </div>
  );
};
