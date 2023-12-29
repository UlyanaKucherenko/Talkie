import { useState } from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
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
            <NavLink className={styles.logoLink} to="/">
              <Logo />
            </NavLink>
            <div className={styles.headerAction}>
              {status === Status.Idle && (
                <RButton onClick={() => setOpenPopup(true)}>
                  {t('auth.join')}
                </RButton>
              )}
              <div className={styles.desctopSwitcher}>
                <ThemeLangSwitcher colorIcon="light" />
              </div>
              {userData && status === Status.Succeeded && (
                <div className={styles.user}>
                  <div className={styles.mobileSwitcher}>
                    <ThemeLangSwitcher colorIcon="light" />
                  </div>
                  <div className={styles.username}>{userData.user.name}</div>
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
