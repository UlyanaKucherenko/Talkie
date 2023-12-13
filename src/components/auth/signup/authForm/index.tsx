import { FormEvent, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { authThunks, userSelector } from '../../../../store/user';
import type { UserRequest } from '../../../../utils/types/user.type';
import type { AppDispatch } from '../../../../store';
import styles from './style.module.css';
import { Status } from '../../../../utils/enums/status.enum';
import { RButton } from '../../../RButton';

export const AuthForm = () => {
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [userName, setUserName] = useState('');

  const dispatch = useDispatch<AppDispatch>();
  const { status, error: responseError } = useSelector(userSelector);
  const { t } = useTranslation();

  const nameInputChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { value } = event.target;

    if (value.length > 30) {
      setErrorMessage(t('errors.userNameLengthValidation'));
      return;
    }
    if (!value.match(/^[A-Za-zА-Яа-яЁёЇїІіЄєҐґ\d\s'’._-]*$/)) {
      setErrorMessage(t('errors.userNameCharacterValidation'));
    } else if (value.length < 2) {
      setErrorMessage(t('errors.userNameLengthValidation'));
    } else {
      setErrorMessage(null);
    }
    setUserName(value);
  };
  const signupSubmitHandler = async (event: FormEvent) => {
    event.preventDefault();

    if (errorMessage) {
      return;
    }

    if (!userName) {
      setErrorMessage(t('errors.userNameLengthValidation'));
      return;
    }
    const request: UserRequest = {
      name: userName,
    };

    await dispatch(authThunks.register(request));
  };
  return (
    <form className={styles.form} onSubmit={signupSubmitHandler}>
      <div className={styles.formText}>{t('auth.formText')}</div>
      <div className={styles.formDesc}>{t('auth.formDesc')}</div>
      <div className={styles.formControl}>
        <input
          className={
            errorMessage || responseError
              ? `${styles.input} ${styles.warning}`
              : styles.input
          }
          type="name"
          placeholder={t('auth.inputPlaceholder')}
          value={userName}
          onChange={nameInputChangeHandler}
          disabled={status === Status.Loading}
        />
        <div className={styles.error}>{errorMessage || responseError}</div>
      </div>
      <div className={styles.formActions}>
        <RButton
          type="submit"
          size="large"
          disabled={
            status === Status.Loading || !!errorMessage || userName.length < 2
          }
        >
          {status === Status.Loading ? 'Loading...' : t('auth.join')}
        </RButton>
      </div>
    </form>
  );
};
