import { Dispatch, SetStateAction } from 'react';
import { createPortal } from 'react-dom';
import { Backdrop } from '../backdrop/Backdrop';

import style from './style.module.css';

type Props = {
  show: boolean;
  children: React.ReactNode;
  setIsShow: Dispatch<SetStateAction<boolean>>;
  showCloseButton?: boolean;
};

export const Popup = ({
  show = false,
  setIsShow,
  children,
  showCloseButton = false,
}: Props) =>
  show &&
  createPortal(
    <>
      <div className={style.popup}>
        {showCloseButton && (
          <button
            type="button"
            className={style.exitButton}
            onClick={() => setIsShow(false)}
          >
            ✖
          </button>
        )}
        {children}
      </div>
      <Backdrop onClick={() => setIsShow(false)} />
    </>,
    document.querySelector('.app')!
  );
