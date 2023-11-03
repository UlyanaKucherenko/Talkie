import { FormEvent, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { authThunks, userSelector } from '../../../../store/user';
import type { UserRequest } from '../../../../utils/types/user.type';
import type { AppDispatch } from '../../../../store';
import style from './style.module.css';
import { Status } from '../../../../utils/enums/status.enum';

export const AuthForm = () => {
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const userNameRef = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch<AppDispatch>();
  const { status, error: responseError } = useSelector(userSelector);

  const signupSubmitHandler = async (event: FormEvent) => {
    event.preventDefault();
    const userName = userNameRef.current?.value;
    if (!userName) {
      setErrorMessage('Enter you name');
      return;
    }
    const request: UserRequest = {
      name: userName,
    };

    await dispatch(authThunks.register(request));
  };
  return (
    <form className={style.form} onSubmit={signupSubmitHandler}>
      <div className={style.greeting}>enter your name to start</div>
      <input
        className={style.input}
        type="name"
        placeholder="Name"
        ref={userNameRef}
      />
      <div className={style.error}>{errorMessage || responseError}</div>
      <button
        className={style.submit}
        type="submit"
        disabled={status === Status.Loading}
      >
        {status === Status.Loading ? 'Loading...' : 'SignUp'}
      </button>
    </form>
  );
};