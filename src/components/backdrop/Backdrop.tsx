import { useEffect } from 'react';

import style from './style.module.css';

type BackdropProps = {
  onClick: () => void;
};

export const Backdrop = ({ onClick }: BackdropProps) => {
  useEffect(() => {
    function handleEscapeKey(event: KeyboardEvent) {
      if (event.code === 'Escape') {
        onClick();
      }
    }

    document.addEventListener('keydown', handleEscapeKey);
    return () => document.removeEventListener('keydown', handleEscapeKey);
  }, [onClick]);

  return (
    <div
      role="presentation"
      className={style.backdrop}
      onClick={() => onClick()}
    />
  );
};
