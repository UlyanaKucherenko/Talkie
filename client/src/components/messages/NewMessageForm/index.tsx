import styles from './index.module.css';

export const NewMessage = () => {
  const formSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();
  };
  return (
    <form className={styles.messageForm} onSubmit={formSubmitHandler}>
      <input
        className={styles.messageInput}
        type="text"
        placeholder="Write a message..."
      />
      <button type="submit">Send</button>
    </form>
  );
};
