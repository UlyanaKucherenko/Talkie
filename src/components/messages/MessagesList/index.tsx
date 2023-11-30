/* eslint-disable no-underscore-dangle */
import { useSelector } from 'react-redux';

import { MessageItem } from '../MessageItem';
import type { Message } from '../../../utils/types/chat.type';
import { userSelector } from '../../../store/user';
import styles from './index.module.css';
import { Status } from '../../../utils/enums/status.enum';

type Props = {
  messages: Message[];
  status: Status;
};

export const MessagesList = ({ messages, status }: Props) => {
  const { userData } = useSelector(userSelector);
  return (
    <div className={styles.messageList}>
      {status === Status.Loading && (
        <div className={styles.loading}>Loading ...</div>
      )}
      {status === Status.Succeeded && messages.length === 0 && (
        <div className={styles.noMessages}>No messages yet</div>
      )}
      {status === Status.Succeeded &&
        messages.length > 0 &&
        messages.map((message) => (
          <MessageItem
            key={message._id}
            username={message.owner.name}
            message={message.content}
            avatarUrl={message.owner.avatarURL}
            time={message.createdAt}
            isSent={message.owner._id === userData?.user._id}
          />
        ))}
    </div>
  );
};
