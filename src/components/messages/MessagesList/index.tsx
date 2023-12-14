/* eslint-disable no-underscore-dangle */
import { useSelector } from 'react-redux';

import { MessageItem } from '../MessageItem';
import type { Message } from '../../../utils/types/chat.type';
import { userSelector } from '../../../store/user';
import styles from './index.module.css';
import { groupMessagesByDate } from '../../../utils/groupMessagesByDate';
import { getFormattedDate } from '../../../utils/getFormattedDate';

type Props = {
  messages: Message[];
};

export const MessagesList = ({ messages }: Props) => {
  const { userData } = useSelector(userSelector);
  const groupedMessages = groupMessagesByDate(messages);

  return (
    <div className={styles.messageListWrap}>
      {/* {status === Status.Loading && <RLoader />} */}

      {messages.length === 0 ? (
        <div className={styles.noMessages}>No messages yet</div>
      ) : (
        Object.keys(groupedMessages).map((date) => (
          <div key={date} className={styles.messageList}>
            {groupedMessages[date].map((message, idx) => (
              <MessageItem
                // eslint-disable-next-line react/no-array-index-key
                key={`${message._id}-${idx}`}
                username={message.owner.name}
                message={message.content}
                avatarUrl={message.owner.avatarURL}
                time={message.createdAt}
                isSent={message.owner._id === userData?.user._id}
              />
            ))}
            <h3 className={styles.dayDate}>{getFormattedDate(date)}</h3>
          </div>
        ))
      )}
    </div>
  );
};
