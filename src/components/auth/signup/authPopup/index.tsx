import { createPortal } from 'react-dom';
import { Dispatch, SetStateAction, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { Backdrop } from '../../../backdrop/Backdrop';
import { AuthForm } from '../authForm';
import style from './style.module.css';
import { userSelector } from '../../../../store/user';
import { Status } from '../../../../utils/enums/status.enum';

type AuthPopupProps = {
  open: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};

export const AuthPopup = ({ open = false, setIsOpen }: AuthPopupProps) => {
  const { status } = useSelector(userSelector);

  useEffect(() => {
    if (status === Status.Succeeded) {
      setIsOpen(false);
    }
  }, [setIsOpen, status]);

  return (
    open &&
    createPortal(
      <>
        <div className={style.authPopup}>
          <AuthForm />
        </div>
        <Backdrop onClick={() => setIsOpen(false)} />
      </>,
      document.body
    )
  );
};
