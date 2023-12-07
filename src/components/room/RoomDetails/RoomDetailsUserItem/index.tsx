import type { User } from '../../../../utils/types/user.type';
import styles from './index.module.css';

type Props = {
  user: User;
  isOwner?: boolean;
};

export const RoomDetailsUserItem = ({ user, isOwner = false }: Props) => (
  <li className={styles.user}>
    <img className={styles.userAvatar} src={user.avatarURL} alt={user.name} />
    {user.name}
    {isOwner && <span className={styles.owner}>Owner</span>}
  </li>
);
