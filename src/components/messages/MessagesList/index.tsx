/* eslint-disable no-underscore-dangle */
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { MessageItem } from '../MessageItem';
import type { Message } from '../../../utils/types/chat.type';
import { userSelector } from '../../../store/user';
import styles from './index.module.css';
import { groupMessagesByDate } from '../../../utils/groupMessagesByDate';
import { getFormattedDate } from '../../../utils/getFormattedDate';
import { Status } from '../../../utils/enums/status.enum';
import { RLoader } from '../../RLoader';

type Props = {
  messages: Message[];
  status: Status;
  divRef?: React.RefObject<HTMLDivElement>;
  roomType: string;
};

export const MessagesList = ({ messages, status, divRef, roomType }: Props) => {
  const { userData } = useSelector(userSelector);
  const groupedMessages = groupMessagesByDate(messages);
  const { t } = useTranslation();

  return (
    <div className={`${styles.messageListWrap} custom-scroll`} ref={divRef}>
      {status === Status.Loading && <RLoader css={{ top: '10px' }} size="sm" />}

      {status !== Status.Loading && messages.length === 0 && (
        <div className={styles.noMessages}> {t('chat.noMessagesYet')}</div>
      )}

      {messages.length > 0 &&
        Object.keys(groupedMessages).map((date) => (
          <div key={date} className={styles.messageList}>
            {groupedMessages[date].map((message, idx) => (
              <MessageItem
                // eslint-disable-next-line react/no-array-index-key
                key={`${message._id}-${idx}`}
                id={message.owner._id}
                username={message.owner.name}
                message={message.content}
                avatarUrl={message.owner.avatarURL}
                time={message.createdAt}
                isSent={message.owner._id === userData?.user._id}
                roomType={roomType}
              />
            ))}
            <p className={styles.dayDate}>{getFormattedDate(date)}</p>
          </div>
        ))}
    </div>
  );
};
