import { MouseEventHandler } from 'react';
import { useTranslation } from 'react-i18next';

import style from './style.module.css';
import { RButton } from '../../../RButton';

type AuthGreetingsProps = {
  okOnClick: MouseEventHandler<HTMLButtonElement>;
};

export const AuthGreetings = ({ okOnClick }: AuthGreetingsProps) => {
  const { t } = useTranslation();
  return (
    <div className={style.greetings}>
      <div className={style.greetingsText}>{t('auth.greetingText')}</div>
      <div className={style.greetingsAction}>
        <RButton size="large" onClick={okOnClick}>
          Ok
        </RButton>
      </div>
    </div>
  );
};
