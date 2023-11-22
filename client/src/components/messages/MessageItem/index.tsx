import styles from './index.module.css';

export const MessageItem = () => (
  <div className={styles.message}>
    <div className={styles.avatar}>Avatar</div>
    <div className={styles.messageBody}>
      <div className={styles.username}>Name</div>
      <div className={styles.messageText}>Text</div>
      <div className={styles.messageDate}>date</div>
    </div>
  </div>
);
