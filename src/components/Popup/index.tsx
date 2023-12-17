import { Dispatch, SetStateAction } from 'react';
import { createPortal } from 'react-dom';
import { Backdrop } from '../backdrop/Backdrop';

import style from './style.module.css';
import { IconClose } from '../icons/IconClose';
import { RButtonIcon } from '../ui/RButtonIcon';

type Props = {
  show: boolean;
  children: React.ReactNode;
  setIsShow: Dispatch<SetStateAction<boolean>>;
};

export const Popup = ({ show = false, setIsShow, children }: Props) =>
  show &&
  createPortal(
    <>
      <div className={style.popup}>
        <RButtonIcon
          className={style.exitButton}
          onClick={() => setIsShow(false)}
          icon={IconClose}
        />
        {children}
      </div>
      <Backdrop onClick={() => setIsShow(false)} />
    </>,
    document.querySelector('.app')!
  );
