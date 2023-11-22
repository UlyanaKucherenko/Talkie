import { NavLink } from 'react-router-dom';

import { IconBack } from '../../icons/IconBack';
import { IconDetails } from '../../icons/IconDetails';
import styles from './index.module.css';

type Props = {
  name: string;
  membersNum: number;
};

export const RoomHeader = ({ name, membersNum }: Props) => (
  <div className={styles.header}>
    <NavLink to="/" className={styles.button}>
      <IconBack />
    </NavLink>
    <div className={styles.title}>
      <div className={styles.name}>{name}</div>
      <div className={styles.members}>{membersNum} members</div>
    </div>
    <button type="button" className={styles.button}>
      <IconDetails />
    </button>
  </div>
);
