import { forwardRef, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import styles from './index.module.css';
import { Room } from '../../../utils/types/rooms.type';
import { IconClose } from '../../icons/IconClose';
import { RoomDetailsUserList } from './RoomDetailsUserList';
import { RButtonIcon } from '../../ui/RButtonIcon';
import { ThemeEnum } from '../../../utils/const';
import { themeSelector } from '../../../store/theme';
import { User } from '../../../utils/types/user.type';

type Props = {
  onClose: () => void;
};

export type Ref = HTMLDivElement;

export const RoomDetails = forwardRef<Ref, Props>(({ onClose }, ref) => {
  const room = useLoaderData() as Room;
  const { mode } = useSelector(themeSelector);
  const { t } = useTranslation();
  const [showFullText, setShowFullText] = useState(false);

  let displayedText = '';

  if (room) {
    displayedText = showFullText
      ? room.description ?? ''
      : (room.description ?? '').slice(0, 100);
  }
  return (
    <div className={`${styles.roomDetails}`} ref={ref}>
      <div className={styles.roomImage}>
        <img src={room.img} alt={room.title} />
      </div>
      <RButtonIcon
        className={styles.close}
        icon={IconClose}
        type="button"
        aria-label="close"
        onClick={onClose}
        defaultColorIcon={mode === ThemeEnum.LIGHT ? 'dark' : 'light'}
      />
      <div className={`${styles.container} custom-scroll`}>
        {!room && <p>No data</p>}
        {room && (
          <>
            <h2 className={styles.roomTitle}>{room.title}</h2>
            <div className={styles.roomCreatedAt}>
              {new Date(room.createdAt).toLocaleDateString('uk-UA')}
            </div>
            <div className={styles.roomDescription}>
              {displayedText}
              {!showFullText &&
                room.description &&
                room.description.length >= 100 && (
                  <button
                    type="button"
                    className={styles.btnMore}
                    onClick={() => setShowFullText(true)}
                  >
                    ...{t('rooms.more')}
                  </button>
                )}
            </div>
            <div className={styles.members}>
              <div className={styles.membersTitle}>{t('chat.members')}</div>
              <RoomDetailsUserList
                owner={room.owner as User}
                members={room.users}
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
});
