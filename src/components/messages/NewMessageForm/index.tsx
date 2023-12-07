import { useTranslation } from 'react-i18next';
import TextareaAutosize from 'react-textarea-autosize';

import styles from './index.module.css';
import { IconSend } from '../../icons/IconSend';

type Props = {
  value: string;
  onSubmit: React.FormEventHandler<HTMLFormElement>;
  onChange: React.ChangeEventHandler<HTMLTextAreaElement>;
  onKeyDown?: React.KeyboardEventHandler<HTMLTextAreaElement>;
  usersTypingList: string[];
};

export const NewMessageForm = ({
  value,
  onSubmit,
  onChange,
  onKeyDown,
  usersTypingList,
}: Props) => {
  const { t } = useTranslation();
  return (
    <form className={styles.messageForm} onSubmit={onSubmit}>
      {usersTypingList.length > 0 && (
        <div className={styles.textUsersTyping}>
          {usersTypingList.map((user, idx) => (
            // eslint-disable-next-line react/no-array-index-key
            <span key={idx}>{user}</span>
          ))}
          is typing...
        </div>
      )}

      <div className={styles.formWrap}>
        <TextareaAutosize
          onKeyDown={onKeyDown}
          maxRows={3}
          className={styles.messageInput}
          placeholder={t('chat.placeholder')}
          onChange={onChange}
          value={value}
          maxLength={1000}
        />
        <button type="submit" className={styles.send}>
          <IconSend />
        </button>
      </div>
    </form>
  );
};
