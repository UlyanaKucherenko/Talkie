import { useState } from 'react';

import { AuthPopup } from '../../auth/signup/authPopup';
import style from './style.module.css';

const Header = () => {
  const [openPopup, setOpenPopup] = useState<boolean>(false);
  return (
    <>
      <AuthPopup open={openPopup} setIsOpen={setOpenPopup} />
      <header className={style.header}>
        <div className="container">
          <div className={style.headerContent}>
            <div>Menu</div>
            <div>Logo</div>
            <div>
              <button type="button" onClick={() => setOpenPopup(true)}>
                Join
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
export default Header;
