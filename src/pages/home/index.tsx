import { useSelector } from 'react-redux';
import SingUp from '../../components/signup';
import { userSelector } from '../../store/user';

export default function Home() {
  const { user, status, error } = useSelector(userSelector);

  return (
    <div>
      <SingUp />
      {status === 'loading' && <p>Loading...</p>}
      {status === 'succeeded' && (
        <div>
          <div>Name: {user?.user.name}</div>
          <div>token: {user?.token}</div>
        </div>
      )}
      {status === 'failed' && <p>{error}</p>}
    </div>
  );
}
