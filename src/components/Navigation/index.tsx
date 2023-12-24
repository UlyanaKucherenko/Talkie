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

  const { t } = useTranslation();

  const showCreateRoomHandler = () => {
    if (closeMenu) closeMenu();
    setShowPopup(true);
  };
  return (
    <nav className={className}>
      <CreateRoomPopup show={showPopup} setIsShow={() => setShowPopup(false)} />
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
          <button
            type="button"
            onClick={showCreateRoomHandler}
            className={styles.navLink}
          >
            <span>{t('sidebar.createRoom')}</span>
          </button>
        </>
      )}
    </nav>
  );
};
