import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { userSelector } from '../../store/user';

import styles from './index.module.css';
import { Status } from '../../utils/enums/status.enum';

type Props = {
  closeMenu?: () => void;
};

export const Navigation = ({ closeMenu }: Props) => {
  const { status, userData } = useSelector(userSelector);
  const { t } = useTranslation();

  return (
    <nav>
      <a href="/#public-rooms" onClick={closeMenu} className={styles.navLink}>
        <span>{t('sidebar.publicRooms')}</span>
      </a>

      {userData && status === Status.Succeeded && (
        <>
          <a
            href="/#my-public-rooms"
            onClick={closeMenu}
            className={styles.navLink}
          >
            <span>{t('sidebar.myPublicRooms')}</span>
          </a>
          <a
            href="/#private-rooms"
            onClick={closeMenu}
            className={styles.navLink}
          >
            <span>{t('sidebar.privateRooms')}</span>
          </a>
        </>
      )}
      <a href="/#create-room" onClick={closeMenu} className={styles.navLink}>
        <span>{t('sidebar.createRoom')}</span>
      </a>
    </nav>
  );
};
