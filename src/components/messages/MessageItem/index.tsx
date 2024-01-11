import { getFormatTime } from '../../../utils/format-time';
import styles from './index.module.css';
import { CreatePrivateRoom } from '../CreatePrivateRoom';

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

  return (
    <div className={`${styles.message} ${messageStatusClassName}`}>
      <div className={styles.messageBody}>
        <div className={styles.username}>{username}</div>
        <div className={styles.messageText}>{message}</div>
        <div className={styles.messageTime}>{getFormatTime(time)}</div>
      </div>
      <CreatePrivateRoom
        id={id}
        avatarUrl={avatarUrl}
        username={username}
        roomType={roomType}
        isSent={isSent}
      />
    </div>
  );
};
