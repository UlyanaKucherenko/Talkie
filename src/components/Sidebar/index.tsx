import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import styles from './index.module.css';
import { AppDispatch } from '../../store';
import { TOGGLE_THEME } from '../../store/theme';
import { userSelector } from '../../store/user';
import { IconLightTheme } from '../icons/IconLightTheme';
import { IconClose } from '../icons/IconClose';
import { IconMenu } from '../icons/IconMenu';
import { Status } from '../../utils/enums/status.enum';
import { Logout } from '../auth/logout';
import imgDefaultAvatar from '../../assets/image/avatar.png';

const Sidebar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const dispatch = useDispatch<AppDispatch>();
  const { status, userData } = useSelector(userSelector);
  const { t, i18n } = useTranslation();
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const sidebarStyle = {
    transform: menuOpen ? 'translate(0, 0)' : ' translate(-100%, 0)',
  };
  const closeSidebarMenu = () => {
    setMenuOpen(false);
  };

  const onSwitchTheme = (): void => {
    dispatch(TOGGLE_THEME());
  };

  return (
    <div className={styles.sidebar} style={sidebarStyle}>
      {menuOpen ? (
        <button type="button" className={styles.btnClose} onClick={toggleMenu}>
          <IconClose />
        </button>
      ) : (
        <button type="button" className={styles.btnMenu} onClick={toggleMenu}>
          <IconMenu />
        </button>
      )}

      <div className={styles.userWrap}>
        {userData && status === Status.Succeeded && (
          <div className={styles.user}>
            <div className={styles.userAvatarWrap}>
              <img
                className={styles.userAvatar}
                src={userData?.user.avatarURL || imgDefaultAvatar}
                alt={userData.user.name}
              />
            </div>
            <div>{userData.user.name}</div>
          </div>
        )}
      </div>

      <nav>
        <a
          href="#public-rooms"
          onClick={closeSidebarMenu}
          className={styles.navLink}
        >
          <span>{t('sidebar.publicRooms')}</span>
        </a>
        <a
          href="#private-rooms"
          onClick={closeSidebarMenu}
          className={styles.navLink}
        >
          <span>{t('sidebar.privateRooms')}</span>
        </a>
        <a
          href="#create-room"
          onClick={closeSidebarMenu}
          className={styles.navLink}
        >
          <span>{t('sidebar.createRoom')}</span>
        </a>
      </nav>
      <div className={styles.wrapThemLang}>
        <button
          type="button"
          onClick={() =>
            i18n.changeLanguage(i18n.language === 'en' ? 'ua' : 'en')
          }
        >
          {i18n.language === 'en' ? 'UA >' : 'EN >'}
        </button>
        <button type="button" onClick={() => onSwitchTheme()}>
          <IconLightTheme />
        </button>
      </div>
      <div className={styles.bottomWrap}>
        <div className={styles.bottomList}>
          {userData && status === Status.Succeeded && <Logout />}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
