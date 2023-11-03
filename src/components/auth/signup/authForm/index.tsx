import { FormEvent, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';

import { authThunks } from '../../../../store/user';
import type { UserRequest } from '../../../../utils/types/user.type';
import type { AppDispatch } from '../../../../store';

type AuthFormProps = {
  onSubmit: () => void;
};

export const AuthForm = ({ onSubmit }: AuthFormProps) => {
  const [error, setError] = useState<string | null>(null);
  const userNameRef = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch<AppDispatch>();

  const signupSubmitHandler = async (event: FormEvent) => {
    event.preventDefault();
    const userName = userNameRef.current?.value;
    if (!userName) {
      setError('Enter you name');
      return;
    }
    const request: UserRequest = {
      name: userName,
    };
    await dispatch(authThunks.register(request));
    onSubmit();
  };
  return (
    <form onSubmit={signupSubmitHandler}>
      <input type="name" ref={userNameRef} />
      {error && <p>{error}</p>}
      <button type="submit">SignUp</button>
    </form>
  );
};
