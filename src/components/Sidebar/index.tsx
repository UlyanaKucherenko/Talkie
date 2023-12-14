import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { useEffect, forwardRef } from 'react';

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
import { IconUA } from '../icons/IconUA';
import { IconEN } from '../icons/IconEN';

type SidebarProps = {
  menuOpen: boolean;
  closeMenu: () => void;
};
export type Ref = HTMLDivElement;

const Sidebar = forwardRef<Ref, SidebarProps>(({ menuOpen, closeMenu }) => {
  const dispatch = useDispatch<AppDispatch>();
  const { status, userData } = useSelector(userSelector);
  const { t, i18n } = useTranslation();

  const sidebarStyle = {
    transform: menuOpen ? 'translate(0, 0)' : ' translate(-102%, 0)',
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
      <RButtonIcon
        icon={IconClose}
        type="button"
        onClick={closeMenu}
        aria-label="close"
        className={styles.btnClose}
      />

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
            <div className={styles.userNick}>{userData.user.name}</div>
          </div>
        )}
      </div>

      <div>
        <nav>
          <a
            href="/#public-rooms"
            onClick={closeMenu}
            className={styles.navLink}
          >
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
          <a
            href="/#create-room"
            onClick={closeMenu}
            className={styles.navLink}
          >
            <span>{t('sidebar.createRoom')}</span>
          </a>
        </nav>
        <div className={styles.wrapThemLang}>
          <RButtonIcon
            icon={i18n.language === 'en' ? IconUA : IconEN}
            type="button"
            defaultColorIcon="dark"
            onClick={() =>
              i18n.changeLanguage(i18n.language === 'en' ? 'ua' : 'en')
            }
          />
          <RButtonIcon
            icon={IconLightTheme}
            type="button"
            onClick={() => onSwitchTheme()}
          />
        </div>
      </div>

      <div className={styles.bottomWrap}>
        <div className={styles.bottomList}>
          {userData && status === Status.Succeeded && <Logout />}
          <a
            className={styles.linkOurTeam}
            href="https://teamchallenge.io/team/46/public"
            target="_blank"
            rel="noreferrer"
          >
            {t('main.ourTeem')}
          </a>
        </div>
      </div>
    </div>
  );
});

export default Sidebar;
