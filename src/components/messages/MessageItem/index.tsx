import { useDispatch } from 'react-redux';
import { getFormatTime } from '../../../utils/format-time';
import styles from './index.module.css';
import { AppDispatch } from '../../../store';
import { roomsThunks } from '../../../store/rooms';

type Props = {
  id: string;
  username: string;
  avatarUrl: string;
  message: string;
  time: string;
  isSent?: boolean;
};

export const MessageItem = ({
  id,
  username,
  avatarUrl,
  message,
  time,
  isSent = false,
}: Props) => {
  const messageStatusClassName = isSent ? styles.sent : styles.received;
  const dispatch: AppDispatch = useDispatch();

  const test = async () => {
    await dispatch(roomsThunks.createPrivateRoom(id));
  };

  return (
    <div className={`${styles.message} ${messageStatusClassName}`}>
      <div className={styles.messageBody}>
        <div className={styles.username}>{username}</div>
        <div className={styles.messageText}>{message}</div>
        <div className={styles.messageTime}>{getFormatTime(time)}</div>
        <div className={styles.messageText}>{id}</div>
      </div>
      <button type="button" onClick={() => test()}>
        <img className={styles.avatar} src={avatarUrl} alt={username} />
      </button>
    </div>
  );
};
