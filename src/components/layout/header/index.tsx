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
            <RButtonIcon type="button" onClick={openMenu} icon={IconMenu} />
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
