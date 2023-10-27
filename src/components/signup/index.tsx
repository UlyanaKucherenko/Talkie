import { FormEvent, useRef } from 'react';

export default function SingUp() {
  const userNameRef = useRef<HTMLInputElement>(null);

  const signupSubmitHandler = async (event: FormEvent) => {
    event.preventDefault();
    const userName = userNameRef.current?.value;
    console.log(userName);
  };
  return (
    <form onSubmit={signupSubmitHandler}>
      <input type="name" ref={userNameRef} />
      <button type="submit">SignUp</button>
    </form>
  );
}
