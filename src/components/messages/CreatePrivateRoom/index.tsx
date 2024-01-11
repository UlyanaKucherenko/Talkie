/* eslint-disable no-underscore-dangle */
/* eslint-disable import/no-extraneous-dependencies */
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { toast } from 'react-toastify';
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
  const { t } = useTranslation();
  let classNameAvatar = styles.avatarWrap;
  if (className) {
    classNameAvatar = `${classNameAvatar} ${className}`;
  }

  useClickOutside(btnSendMsgRef, () => setShowBtnSendPrivateMsg(false));

  const redirectToPrivateChat = (roomId: string, newRoom: boolean) => {
    navigate(`/private-chat/${roomId}`);
    if (newRoom) toast.success(t('success.privateRoomCreated'));
  };

  const createPrivateRoom = async () => {
    try {
      const res = await dispatch(roomsThunks.createPrivateRoom(id));
      if (res.payload) {
        // @ts-ignore
        const roomId = res.payload._id || res.payload?.roomId;
        // @ts-ignore
        const newRoom = !!res.payload._id;
        if (roomId) {
          redirectToPrivateChat(roomId, newRoom);
          if (onClose) {
            onClose();
          }
          return;
        }
      }

      toast.success(t('success.privateRoomCreated'));
    } catch (error) {
      console.error('Error executing createPrivateRoom thunk:', error);
      toast.error(t('errors.privateRoomCreated'));
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
