import styles from './index.module.css';

type Props = {
  value: string;
  onSubmit: React.FormEventHandler<HTMLFormElement>;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
};

export const NewMessageForm = ({ value, onSubmit, onChange }: Props) => (
  <form className={styles.messageForm} onSubmit={onSubmit}>
    <input
      className={styles.messageInput}
      type="text"
      placeholder="Write a message..."
      onChange={onChange}
      value={value}
      maxLength={1000}
    />
    <button type="submit">Send</button>
  </form>
);
