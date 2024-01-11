import { useTranslation } from 'react-i18next';
import TextareaAutosize from 'react-textarea-autosize';

import styles from './index.module.css';
import { IconSend } from '../../icons/IconSend';
import { RButtonIcon } from '../../ui/RButtonIcon';

type Props = {
  value: string;
  errorMessage?: string | null;
  onSubmit: React.FormEventHandler<HTMLFormElement>;
  onChange: React.ChangeEventHandler<HTMLTextAreaElement>;
  onKeyDown?: React.KeyboardEventHandler<HTMLTextAreaElement>;
  userTypingData: string;
  roomType: string;
};

export const NewMessageForm = ({
  value,
  errorMessage,
  onSubmit,
  onChange,
  onKeyDown,
  userTypingData,
  roomType,
}: Props) => {
  const { t } = useTranslation();
  return (
    <form className={styles.messageForm} onSubmit={onSubmit}>
      {userTypingData && roomType === 'public' && (
        <div className={styles.textUsersTyping}>Smb is typing...</div>
      )}
      {userTypingData && roomType === 'private' && (
        <div className={styles.textUsersTyping}>Typing...</div>
      )}

      <div className={styles.formWrap}>
        <TextareaAutosize
          onKeyDown={onKeyDown}
          maxRows={3}
          className={`${styles.messageInput} ${
            errorMessage ? styles.inputError : ''
          }`}
          placeholder={t('chat.placeholder')}
          onChange={onChange}
          value={value}
          maxLength={1000}
        />
        <RButtonIcon icon={IconSend} type="submit" className={styles.send} />

        {(errorMessage || value.length > 980) && (
          <div className={styles.textValidError}>
            {errorMessage || `${value.length} / 1000`}
          </div>
        )}
      </div>
    </form>
  );
};
