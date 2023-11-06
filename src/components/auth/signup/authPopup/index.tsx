import { createPortal } from 'react-dom';
import { Dispatch, SetStateAction } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Backdrop } from '../../../backdrop/Backdrop';
import { AuthForm } from '../authForm';
import { authThunks, userSelector } from '../../../../store/user';
import { Status } from '../../../../utils/enums/status.enum';
import { AuthGreetings } from '../authGreetings';
import { AppDispatch } from '../../../../store';
import style from './style.module.css';

type AuthPopupProps = {
  open: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};

export const AuthPopup = ({ open = false, setIsOpen }: AuthPopupProps) => {
  const { status } = useSelector(userSelector);
  const dispatch = useDispatch<AppDispatch>();

  const exitClickHandler = () => {
    dispatch(authThunks.logout());
    setIsOpen(false);
  };

  return (
    open &&
    createPortal(
      <>
        <div className={style.authPopup}>
          {status !== Status.Succeeded && <AuthForm />}
          {status === Status.Succeeded && (
            <AuthGreetings
              okOnClick={() => setIsOpen(false)}
              exitOnClick={exitClickHandler}
            />
          )}
        </div>
        <Backdrop onClick={() => setIsOpen(false)} />
      </>,
      document.body
    )
  );
};
