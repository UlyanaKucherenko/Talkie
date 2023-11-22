import { MessageItem } from '../MessageItem';
import styles from './index.module.css';

export const MessagesList = () => (
  <div className={styles.messageList}>
    <MessageItem />
    <MessageItem />
    <MessageItem />
  </div>
);
