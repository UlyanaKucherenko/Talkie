import styles from './index.module.css';

type Props = {
  username: string;
  avatarUrl: string;
  message: string;
  time: string;
  status?: 'sent' | 'received';
};

export const MessageItem = ({
  username,
  avatarUrl,
  message,
  time,
  status = 'sent',
}: Props) => {
  const messageStatusClassName =
    status === 'received' ? styles.received : styles.sent;
  return (
    <div className={`${styles.message} ${messageStatusClassName}`}>
      <div className={styles.messageBody}>
        <div className={styles.username}>{username}</div>
        <div className={styles.messageText}>{message}</div>
        <div className={styles.messageDate}>{time}</div>
      </div>
      <div className={styles.avatar}>
        <img src={avatarUrl} alt={username} />
      </div>
    </div>
  );
};
