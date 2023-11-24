import TextareaAutosize from 'react-textarea-autosize';

import styles from './index.module.css';

type Props = {
  value: string;
  onSubmit: React.FormEventHandler<HTMLFormElement>;
  onChange: React.ChangeEventHandler<HTMLTextAreaElement>;
  onKeyDown?: React.KeyboardEventHandler<HTMLTextAreaElement>;
};

export const NewMessageForm = ({
  value,
  onSubmit,
  onChange,
  onKeyDown,
}: Props) => (
  <form className={styles.messageForm} onSubmit={onSubmit}>
    <TextareaAutosize
      onKeyDown={onKeyDown}
      maxRows={5}
      className={styles.messageInput}
      placeholder="Write a message..."
      onChange={onChange}
      value={value}
      maxLength={1000}
    />
    <button type="submit">Send</button>
  </form>
);
