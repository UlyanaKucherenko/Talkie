import { FormEvent, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { auth } from '../../../store/user';
import { UserRequest } from '../../../utils/types/user.type';
import type { AppDispatch } from '../../../store';

export default function SingUp() {
  const userNameRef = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch<AppDispatch>();

  const signupSubmitHandler = async (event: FormEvent) => {
    event.preventDefault();
    const userName = userNameRef.current?.value;
    if (!userName) {
      return;
    }
    const request: UserRequest = {
      name: userName,
    };
    await dispatch(auth.register(request));
  };
  return (
    <form onSubmit={signupSubmitHandler}>
      <input type="name" ref={userNameRef} />
      <button type="submit">SignUp</button>
    </form>
  );
}
