import { useState, useRef } from 'react';
import { NavLink } from 'react-router-dom';

import { IconBack } from '../../icons/IconBack';
import { IconDetails } from '../../icons/IconDetails';
import { RoomDetails } from '../RoomDetails';
import { useClickOutside } from '../../../hooks/use-click-outside';
import styles from './index.module.css';
import { RButtonIcon } from '../../ui/RButtonIcon';

type Props = {
  name: string;
  membersNum: number;
};

export const RoomHeader = ({ name, membersNum }: Props) => {
  const [showDetails, setShowDetails] = useState(false);
  const detailsRef = useRef<HTMLDivElement>(null);

  useClickOutside(detailsRef, () => setShowDetails(false));

  return (
    <div className={styles.header}>
      <div className={styles.headerWrap}>
        <NavLink to="/" className={styles.button}>
          <RButtonIcon icon={IconBack} />
        </NavLink>
        <div className={styles.title}>
          <div className={styles.name}>{name}</div>
          <div className={styles.members}>{membersNum} members</div>
        </div>
        <RButtonIcon
          icon={IconDetails}
          type="button"
          aria-label="details"
          className={styles.button}
          onClick={() => setShowDetails(true)}
        />

        {showDetails && (
          <RoomDetails ref={detailsRef} onClose={() => setShowDetails(false)} />
        )}
      </div>
    </div>
  );
};
