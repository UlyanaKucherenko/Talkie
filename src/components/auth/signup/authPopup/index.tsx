import { createPortal } from 'react-dom';
import { Dispatch, SetStateAction } from 'react';
import { useSelector } from 'react-redux';

import { Backdrop } from '../../../backdrop/Backdrop';
import { AuthForm } from '../authForm';
import { userSelector } from '../../../../store/user';
import { Status } from '../../../../utils/enums/status.enum';
import { AuthGreetings } from '../authGreetings';
import style from './style.module.css';

type AuthPopupProps = {
  open: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};

export const AuthPopup = ({ open = false, setIsOpen }: AuthPopupProps) => {
  const { status } = useSelector(userSelector);

  return (
    open &&
    createPortal(
      <>
        <div className={style.authPopup}>
          <button
            type="button"
            className={style.exitButton}
            onClick={() => setIsOpen(false)}
          >
            ✖
          </button>
          {status !== Status.Succeeded && <AuthForm />}
          {status === Status.Succeeded && (
            <AuthGreetings okOnClick={() => setIsOpen(false)} />
          )}
        </div>
        <Backdrop onClick={() => setIsOpen(false)} />
      </>,
      document.querySelector('.app')!
    )
  );
};
