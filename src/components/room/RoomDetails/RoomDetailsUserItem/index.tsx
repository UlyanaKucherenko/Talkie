import { useTranslation } from 'react-i18next';
import type { User } from '../../../../utils/types/user.type';
import styles from './index.module.css';

type Props = {
  user: User;
  isOwner?: boolean;
};

export const RoomDetailsUserItem = ({ user, isOwner = false }: Props) => {
  const { t } = useTranslation();
  return (
    <li className={styles.user}>
      <img className={styles.userAvatar} src={user.avatarURL} alt={user.name} />
      <span className={styles.userName}>{user.name}</span>
      {isOwner && <span className={styles.owner}>{t('chat.owner')}</span>}
    </li>
  );
};
