import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';

import { userSelector } from '../../store/user';
import { Status } from '../../utils/enums/status.enum';
import styles from './index.module.css';
import CreateRoomPopup from '../room/CreateRoom';

type Props = {
  closeMenu?: () => void;
  className?: string;
};

export const Navigation = ({ closeMenu, className }: Props) => {
  const { status, userData } = useSelector(userSelector);
  const [showPopup, setShowPopup] = useState(false);
  const disabledLink = !(userData && status === Status.Succeeded);

  const { t } = useTranslation();

  const showCreateRoomHandler = () => {
    if (closeMenu) closeMenu();
    setShowPopup(true);
  };
  return (
    <nav className={className}>
      <CreateRoomPopup show={showPopup} setIsShow={() => setShowPopup(false)} />
      <NavLink
        end
        to="/#public-rooms"
        onClick={closeMenu}
        className={styles.navLink}
      >
        <span>{t('sidebar.publicRooms')}</span>
      </NavLink>

      <NavLink
        to={disabledLink ? '' : '/#my-public-rooms'}
        onClick={disabledLink ? undefined : closeMenu}
        className={`${styles.navLink} ${
          disabledLink ? styles.navLinkDisabled : ''
        }`}
      >
        <span>{t('sidebar.myPublicRooms')}</span>
      </NavLink>
      <NavLink
        to={disabledLink ? '' : '/#private-rooms'}
        onClick={disabledLink ? undefined : closeMenu}
        className={`${styles.navLink} ${
          disabledLink ? styles.navLinkDisabled : ''
        }`}
      >
        <span>{t('sidebar.privateRooms')}</span>
      </NavLink>
      {userData && status === Status.Succeeded && (
        <button
          type="button"
          onClick={showCreateRoomHandler}
          className={`${styles.navLink} ${
            disabledLink ? styles.navLinkDisabled : ''
          }`}
        >
          <span>{t('sidebar.createRoom')}</span>
        </button>
      )}
    </nav>
  );
};
