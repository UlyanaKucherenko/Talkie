import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { NavLink, useLocation } from 'react-router-dom';

import { userSelector } from '../../store/user';
import { Status } from '../../utils/enums/status.enum';
import styles from './index.module.css';
import CreateRoomPopup from '../room/CreateRoom';
import { RButton } from '../RButton';
import { IconPlus } from '../icons/IconPlus';

type Props = {
  closeMenu?: () => void;
  className?: string;
};

export const Navigation = ({ closeMenu, className }: Props) => {
  const { status, userData } = useSelector(userSelector);
  const [showPopup, setShowPopup] = useState(false);
  const disabledLink = !(userData && status === Status.Succeeded);

  const { t } = useTranslation();
  const location = useLocation();
  const tag = location.hash.replace('#', '');

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
        className={`${styles.navLink} ${
          tag === 'public-rooms' ? styles.navLinkActive : ''
        }`}
      >
        <span>{t('sidebar.publicRooms')}</span>
      </NavLink>

      <NavLink
        to={disabledLink ? '' : '/#my-public-rooms'}
        onClick={disabledLink ? undefined : closeMenu}
        className={`${styles.navLink} ${
          disabledLink ? styles.navLinkDisabled : ''
        } ${tag === 'my-public-rooms' ? styles.navLinkActive : ''}`}
      >
        <span>{t('sidebar.myPublicRooms')}</span>
      </NavLink>
      <NavLink
        to={disabledLink ? '' : '/#private-rooms'}
        onClick={disabledLink ? undefined : closeMenu}
        className={`${styles.navLink} ${
          disabledLink ? styles.navLinkDisabled : ''
        } ${tag === 'private-rooms' ? styles.navLinkActive : ''}`}
      >
        <span>{t('sidebar.privateRooms')}</span>
      </NavLink>
      {userData && status === Status.Succeeded && (
        <RButton
          color="secondary"
          onClick={showCreateRoomHandler}
          className={styles.createRoom}
        >
          <IconPlus />
          {t('sidebar.createRoom')}
        </RButton>
      )}
    </nav>
  );
};
