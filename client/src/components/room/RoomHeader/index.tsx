import { useState } from 'react';
import { NavLink } from 'react-router-dom';

import { IconBack } from '../../icons/IconBack';
import { IconDetails } from '../../icons/IconDetails';
import { RoomDetails } from '../RoomDetails';
import styles from './index.module.css';

type Props = {
  name: string;
  membersNum: number;
};

export const RoomHeader = ({ name, membersNum }: Props) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className={styles.header}>
      <div className={`container ${styles.headerWrap}`}>
        <NavLink to="/" className={styles.button}>
          <IconBack />
        </NavLink>
        <div className={styles.title}>
          <div className={styles.name}>{name}</div>
          <div className={styles.members}>{membersNum} members</div>
        </div>
        <button
          type="button"
          aria-label="details"
          className={styles.button}
          onClick={() => setShowDetails(true)}
        >
          <IconDetails />
        </button>
      </div>
      {showDetails && <RoomDetails onClose={() => setShowDetails(false)} />}
    </div>
  );
};
