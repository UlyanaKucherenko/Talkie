import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { AuthPopup } from '../../auth/signup/authPopup';
import { AppDispatch } from '../../../store';
import { TOGGLE_THEME } from '../../../store/theme';
import styles from './style.module.css';
import { userSelector } from '../../../store/user';
import { Status } from '../../../utils/enums/status.enum';
import { Logo } from '../../Logo';
import { RButton } from '../../RButton';
import { IconMenu } from '../../icons/IconMenu';
import { RButtonIcon } from '../../ui/RButtonIcon';
import { IconLightTheme } from '../../icons/IconLightTheme';
import { IconUA } from '../../icons/IconUA';
import { IconEN } from '../../icons/IconEN';
import { Navigation } from '../../Navigation';

type HeaderProps = {
  openMenu: () => void;
};

const Header = ({ openMenu }: HeaderProps) => {
  const [openPopup, setOpenPopup] = useState<boolean>(false);
  const { status, userData } = useSelector(userSelector);
  const dispatch = useDispatch<AppDispatch>();

  const { t, i18n } = useTranslation();

  const onSwitchTheme = (): void => {
    dispatch(TOGGLE_THEME());
  };

  return (
    <>
      <AuthPopup open={openPopup} setIsOpen={setOpenPopup} />
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
            <div>
              {status === Status.Idle && (
                <RButton onClick={() => setOpenPopup(true)}>
                  {t('auth.join')}
                </RButton>
              )}
              {userData && status === Status.Succeeded && (
                <div className={styles.wrapThemLang}>
                  <RButtonIcon
                    icon={i18n.language === 'en' ? IconUA : IconEN}
                    type="button"
                    defaultColorIcon="light"
                    onClick={() =>
                      i18n.changeLanguage(i18n.language === 'en' ? 'ua' : 'en')
                    }
                  />
                  <RButtonIcon
                    icon={IconLightTheme}
                    type="button"
                    onClick={() => onSwitchTheme()}
                    className={styles.themeButton}
                  />
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
