import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { useEffect } from 'react';
import styles from './index.module.css';
import { AppDispatch } from '../../store';
import { TOGGLE_THEME } from '../../store/theme';
import { userSelector } from '../../store/user';
import { IconLightTheme } from '../icons/IconLightTheme';
import { IconClose } from '../icons/IconClose';
import { Status } from '../../utils/enums/status.enum';
import { Logout } from '../auth/logout';
import imgDefaultAvatar from '../../assets/image/avatar.png';
import { RButtonIcon } from '../ui/RButtonIcon';
import { RButton } from '../RButton';

type SidebarProps = {
  menuOpen: boolean;
  closeMenu: () => void;
};

const Sidebar = ({ menuOpen, closeMenu }: SidebarProps) => {
  const dispatch = useDispatch<AppDispatch>();
  const { status, userData } = useSelector(userSelector);
  const { t, i18n } = useTranslation();

  const sidebarStyle = {
    transform: menuOpen ? 'translate(0, 0)' : ' translate(-100%, 0)',
  };

  const onSwitchTheme = (): void => {
    dispatch(TOGGLE_THEME());
  };

  useEffect(() => {
    const handleWindowResize = () => {
      if (window.innerWidth <= 480 && menuOpen) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = 'visible';
      }
    };

    window.addEventListener('resize', handleWindowResize);
    handleWindowResize();

    return () => {
      window.removeEventListener('resize', handleWindowResize);
      document.body.style.overflow = 'visible';
    };
  }, [menuOpen]);

  return (
    <div className={styles.sidebar} style={sidebarStyle}>
      <div className={styles.btnClose}>
        <RButtonIcon icon={IconClose} type="button" onClick={closeMenu} />
      </div>

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
        <a href="/#public-rooms" onClick={closeMenu} className={styles.navLink}>
          <span>{t('sidebar.publicRooms')}</span>
        </a>
        {userData && status === Status.Succeeded && (
          <a
            href="/#private-rooms"
            onClick={closeMenu}
            className={styles.navLink}
          >
            <span>{t('sidebar.privateRooms')}</span>
          </a>
        )}
        <a href="/#create-room" onClick={closeMenu} className={styles.navLink}>
          <span>{t('sidebar.createRoom')}</span>
        </a>
      </nav>
      <div className={styles.wrapThemLang}>
        <RButton
          type="button"
          color="text"
          onClick={() =>
            i18n.changeLanguage(i18n.language === 'en' ? 'ua' : 'en')
          }
        >
          {i18n.language === 'en' ? 'UA >' : 'EN >'}
        </RButton>
        <RButtonIcon
          icon={IconLightTheme}
          type="button"
          onClick={() => onSwitchTheme()}
        />
      </div>
      <div className={styles.bottomWrap}>
        <div className={styles.bottomList}>
          {userData && status === Status.Succeeded && <Logout />}
          <a href="/">Our Team</a>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
