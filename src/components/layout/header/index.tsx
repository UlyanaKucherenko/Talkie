import { useState } from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { AuthPopup } from '../../auth/signup/authPopup';
import style from './style.module.css';
import { userSelector } from '../../../store/user';
import { Status } from '../../../utils/enums/status.enum';
import { Logo } from '../../Logo';
import { JButton } from '../../JButton';

const Header = () => {
  const [openPopup, setOpenPopup] = useState<boolean>(false);
  const { status, userData } = useSelector(userSelector);

  const { t } = useTranslation();
  return (
    <>
      <AuthPopup open={openPopup} setIsOpen={setOpenPopup} />
      <header className={style.header}>
        <div className="container">
          <div className={style.headerContent}>
            <div style={{ opacity: 0, width: '30px' }}>Menu</div>
            <NavLink className={style.logoLink} to="/">
              <Logo />
            </NavLink>
            <div>
              {status === Status.Idle && (
                <JButton onClick={() => setOpenPopup(true)}>
                  {t('auth.join')}
                </JButton>
              )}
              {userData && status === Status.Succeeded && (
                <div>{userData.user.name}</div>
              )}
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
export default Header;
