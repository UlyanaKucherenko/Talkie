import { MouseEventHandler } from 'react';
import style from './style.module.css';

type AuthGreetingsProps = {
  okOnClick: MouseEventHandler<HTMLButtonElement>;
  exitOnClick: MouseEventHandler<HTMLButtonElement>;
};

export const AuthGreetings = ({
  okOnClick,
  exitOnClick,
}: AuthGreetingsProps) => (
  <div className={style.greetings}>
    <div className={style.greetingsText}>Thank you for joining Talkie</div>
    <div className={style.greetingsAction}>
      <button type="button" onClick={okOnClick}>
        Ok
      </button>
      <button type="button" onClick={exitOnClick}>
        Exit
      </button>
    </div>
  </div>
);
