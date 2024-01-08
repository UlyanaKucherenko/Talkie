/* eslint-disable no-underscore-dangle */
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useRef, useState } from 'react';

import { AppDispatch } from '../../../store';
import { useClickOutside } from '../../../hooks/use-click-outside';
import { roomsThunks } from '../../../store/rooms';
import styles from './index.module.css';

type CreatePrivateRoomProps = {
  isSent: boolean;
  roomType: string;
  avatarUrl: string;
  username: string;
  id: string;
  className?: string;
  onClose?: () => void;
};
export const CreatePrivateRoom = ({
  isSent = false,
  roomType = 'public',
  avatarUrl,
  username,
  id,
  className,
  onClose,
}: CreatePrivateRoomProps) => {
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();
  const [showBtnSendPrivateMsg, setShowBtnSendPrivateMsg] = useState(false);
  const btnSendMsgRef = useRef<HTMLButtonElement>(null);
  let classNameAvatar = styles.avatarWrap;
  if (className) {
    classNameAvatar = `${classNameAvatar} ${className}`;
  }

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
          if (onClose) {
            onClose();
          }
          return;
        }
      }

      console.warn('Invalid response payload:', res.payload);
    } catch (error) {
      console.error('Error executing createPrivateRoom thunk:', error);
    }
  };
  return (
    <>
      <button
        type="button"
        onClick={() => setShowBtnSendPrivateMsg(!showBtnSendPrivateMsg)}
        className={`${classNameAvatar} ${
          roomType === 'public' && showBtnSendPrivateMsg ? styles.active : ''
        }  ${roomType === 'private' || isSent === true ? styles.noActive : ''}`}
      >
        <img className={`${styles.avatar}`} src={avatarUrl} alt={username} />
      </button>
      {showBtnSendPrivateMsg && roomType === 'public' && isSent === false && (
        <button
          ref={btnSendMsgRef}
          type="button"
          onClick={() => createPrivateRoom()}
          className={styles.btnSendPrivateMsg}
        >
          send a private message
        </button>
      )}
    </>
  );
};
