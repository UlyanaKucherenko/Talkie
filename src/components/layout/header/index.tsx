import { useState } from 'react';
import { useSelector } from 'react-redux';

import { AuthPopup } from '../../auth/signup/authPopup';
import style from './style.module.css';
import { userSelector } from '../../../store/user';
import { Status } from '../../../utils/enums/status.enum';
import { Logout } from '../../auth/logout';

const Header = () => {
  const [openPopup, setOpenPopup] = useState<boolean>(false);
  const { status, userData } = useSelector(userSelector);

  return (
    <>
      <AuthPopup open={openPopup} setIsOpen={setOpenPopup} />
      <header className={style.header}>
        <div className="container">
          <div className={style.headerContent}>
            <div>Menu</div>
            <div>Logo</div>
            <div>
              {status === Status.Idle && (
                <button type="button" onClick={() => setOpenPopup(true)}>
                  Join
                </button>
              )}
              {userData && status === Status.Succeeded && (
                <div>
                  {userData.user.name} <Logout />
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
