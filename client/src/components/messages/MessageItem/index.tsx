import styles from './index.module.css';

type Props = {
  username: string;
  avatarUrl: string;
  message: string;
  time: string;
  isSent?: boolean;
};

export const MessageItem = ({
  username,
  avatarUrl,
  message,
  time,
  isSent = false,
}: Props) => {
  const messageStatusClassName = isSent ? styles.sent : styles.received;
  const date = new Date(time);
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const messageTime = `${hours}:${String(minutes).padStart(2, '0')}`;
  return (
    <div className={`${styles.message} ${messageStatusClassName}`}>
      <div className={styles.messageBody}>
        <div className={styles.username}>{username}</div>
        <div className={styles.messageText}>{message}</div>
        <div className={styles.messageTime}>{messageTime}</div>
      </div>
      <div>
        <img className={styles.avatar} src={avatarUrl} alt={username} />
      </div>
    </div>
  );
};
