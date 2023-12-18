import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import { userSelector } from '../../store/user';
import styles from './index.module.css';
import { Status } from '../../utils/enums/status.enum';

type Props = {
  closeMenu?: () => void;
  className?: string;
};

export const Navigation = ({ closeMenu, className }: Props) => {
  const { status, userData } = useSelector(userSelector);
  const { t } = useTranslation();

  return (
    <nav className={className}>
      <NavLink
        to="/#public-rooms"
        onClick={closeMenu}
        className={styles.navLink}
      >
        <span>{t('sidebar.publicRooms')}</span>
      </NavLink>

      {userData && status === Status.Succeeded && (
        <>
          <NavLink
            to="/#my-public-rooms"
            onClick={closeMenu}
            className={styles.navLink}
          >
            <span>{t('sidebar.myPublicRooms')}</span>
          </NavLink>
          <NavLink
            to="/#private-rooms"
            onClick={closeMenu}
            className={styles.navLink}
          >
            <span>{t('sidebar.privateRooms')}</span>
          </NavLink>
          <a
            href="/#create-room"
            onClick={closeMenu}
            className={styles.navLink}
          >
            <span>{t('sidebar.createRoom')}</span>
          </a>
        </>
      )}
    </nav>
  );
};
