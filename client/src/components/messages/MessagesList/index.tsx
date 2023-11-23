import { MessageItem } from '../MessageItem';
import styles from './index.module.css';

export const MessagesList = () => (
  <div className={styles.messageList}>
    <MessageItem username="test" message="Привіт" avatarUrl="/" time="14:05" />
    <MessageItem
      username="test 2"
      message="Привіт, як справи?"
      avatarUrl="/"
      time="14:06"
      status="received"
    />
    <MessageItem
      username="test"
      message="добре, а в тебе?"
      avatarUrl="/"
      time="14:07"
    />
  </div>
);
