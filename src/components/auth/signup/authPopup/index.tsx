import { createPortal } from 'react-dom';
import { Dispatch, SetStateAction } from 'react';

import { Backdrop } from '../../../backdrop/Backdrop';
import { AuthForm } from '../authForm';
import style from './style.module.css';

type AuthPopupProps = {
  open: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};

export const AuthPopup = ({ open = false, setIsOpen }: AuthPopupProps) =>
  open &&
  createPortal(
    <>
      <div className={style.authPopup}>
        <AuthForm onSubmit={() => setIsOpen(false)} />
      </div>
      <Backdrop onClick={() => setIsOpen(false)} />
    </>,
    document.body
  );
