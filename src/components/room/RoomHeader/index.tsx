import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { IconBack } from '../../icons/IconBack';
import { IconDetails } from '../../icons/IconDetails';
import { RoomDetails } from '../RoomDetails';
import { useClickOutside } from '../../../hooks/use-click-outside';
import styles from './index.module.css';
import { RButtonIcon } from '../../ui/RButtonIcon';

type Props = {
  name: string;
  membersNum: number;
  roomType: string;
  image?: string;
};

export const RoomHeader = ({ name, membersNum, roomType, image }: Props) => {
  const [showDetails, setShowDetails] = useState(false);
  const detailsRef = useRef<HTMLDivElement>(null);
  const { t } = useTranslation();
  const navigate = useNavigate();

  useClickOutside(detailsRef, () => setShowDetails(false));

  return (
    <div
      className={`${styles.header} ${
        roomType === 'private' ? styles.headerPrivate : ''
      }`}
    >
      <div className={styles.headerWrap}>
        <div className={styles.button}>
          <RButtonIcon icon={IconBack} onClick={() => navigate(-1)} />
        </div>
        <div className={styles.title}>
          <div className={styles.name}>
            {roomType === 'private' && (
              <div className={styles.avatar}>
                <img src={image} alt={name} />
              </div>
            )}
            {name}
          </div>
          {roomType === 'public' && (
            <div className={styles.members}>
              {membersNum} {t('chat.members')}
            </div>
          )}
        </div>
        {roomType === 'public' && (
          <RButtonIcon
            icon={IconDetails}
            type="button"
            aria-label="details"
            className={styles.button}
            onClick={() => setShowDetails(true)}
          />
        )}

        {showDetails && (
          <RoomDetails ref={detailsRef} onClose={() => setShowDetails(false)} />
        )}
      </div>
    </div>
  );
};
