import { useCallback, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { userSelector } from '../../../store/user';
import { Status } from '../../../utils/enums/status.enum';
import { Logo } from '../../Logo';
import { RButton } from '../../RButton';
import { IconMenu } from '../../icons/IconMenu';
import { RButtonIcon } from '../../ui/RButtonIcon';
import { Navigation } from '../../Navigation';
import styles from './style.module.css';
import { Logout } from '../../auth/logout';
import { AuthPopup } from '../../auth/signup/authPopup';
import { ThemeLangSwitcher } from '../../ThemeLangSwitcher';

type HeaderProps = {
  openMenu: () => void;
};

const Header = ({ openMenu }: HeaderProps) => {
  const [openPopup, setOpenPopup] = useState<boolean>(false);
  const { status, userData } = useSelector(userSelector);

  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleLogoClick = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    navigate('/');
  }, [navigate]);

  return (
    <>
      <AuthPopup show={openPopup} setIsShow={() => setOpenPopup(false)} />
      <header className={styles.header}>
        <div className="container">
          <div className={styles.headerContent}>
            <RButtonIcon
              className={styles.burgerBtn}
              type="button"
              onClick={openMenu}
              icon={IconMenu}
            />
            <Navigation className={styles.headerNav} />
            <RButtonIcon
              icon={Logo}
              className={styles.logoLink}
              onClick={handleLogoClick}
            />
            <div className={styles.headerAction}>
              {status === Status.Idle && (
                <RButton onClick={() => setOpenPopup(true)}>
                  {t('auth.join')}
                </RButton>
              )}
              <div className={styles.desctopSwitcher}>
                <ThemeLangSwitcher />
              </div>
              {userData && status === Status.Succeeded && (
                <div className={styles.user}>
                  <div className={styles.mobileSwitcher}>
                    <ThemeLangSwitcher />
                  </div>
                  <div className={styles.usernameWrap}>
                    <div className={styles.avatar}>
                      <img
                        src={userData.user.avatarURL}
                        alt={userData.user.name}
                      />
                    </div>
                    <div className={styles.username}>{userData.user.name}</div>
                  </div>

                  <Logout className={styles.logoutBtn} variant="icon" />
                </div>
              )}
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
export default Header;
