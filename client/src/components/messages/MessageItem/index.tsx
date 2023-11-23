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
  const messageTime = `${new Date(time).getHours()}:${new Date(
    time
  ).getMinutes()}`;
  return (
    <div className={`${styles.message} ${messageStatusClassName}`}>
      <div className={styles.messageBody}>
        <div className={styles.username}>{username}</div>
        <div className={styles.messageText}>{message}</div>
        <div className={styles.messageTime}>{messageTime}</div>
      </div>
      <div className={styles.avatar}>
        <img src={avatarUrl} alt={username} />
      </div>
    </div>
  );
};
