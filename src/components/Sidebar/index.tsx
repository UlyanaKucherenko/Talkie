import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { useEffect, forwardRef } from 'react';

import styles from './index.module.css';
import { themeSelector } from '../../store/theme';
import { userSelector } from '../../store/user';
import { IconClose } from '../icons/IconClose';
import { Status } from '../../utils/enums/status.enum';
import { Logout } from '../auth/logout';
import imgDefaultAvatar from '../../assets/image/avatar.png';
import { RButtonIcon } from '../ui/RButtonIcon';
import { Navigation } from '../Navigation';
import { ThemeEnum } from '../../utils/const';
import { ThemeLangSwitcher } from '../ThemeLangSwitcher';

type SidebarProps = {
  menuOpen: boolean;
  closeMenu: () => void;
};
export type Ref = HTMLDivElement;

const Sidebar = forwardRef<Ref, SidebarProps>(
  ({ menuOpen, closeMenu }, ref) => {
    const { status, userData } = useSelector(userSelector);
    const { t } = useTranslation();
    const { mode } = useSelector(themeSelector);

    const sidebarStyle = {
      transform: menuOpen ? 'translate(0, 0)' : ' translate(-102%, 0)',
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
      <div className={styles.sidebar} style={sidebarStyle} ref={ref}>
        <RButtonIcon
          icon={IconClose}
          type="button"
          onClick={closeMenu}
          aria-label="close"
          className={styles.btnClose}
          defaultColorIcon={mode === ThemeEnum.LIGHT ? 'dark' : 'light'}
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

        <div className={styles.navWrap}>
          <Navigation className={styles.navigation} closeMenu={closeMenu} />
          <ThemeLangSwitcher
            colorIcon={mode === ThemeEnum.LIGHT ? 'dark' : 'light'}
            className={styles.wrapThemLang}
          />
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
  }
);

export default Sidebar;
