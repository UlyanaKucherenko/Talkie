import { useSelector } from 'react-redux';
import SingUp from '../../components/auth/signup';
import { userSelector } from '../../store/user';
import Logout from '../../components/auth/logout';

export default function Home() {
  const { user, status, error } = useSelector(userSelector);
  return (
    <div>
      {status === 'idle' && <SingUp />}
      {status === 'loading' && <p>Loading...</p>}
      {status === 'succeeded' && (
        <div>
          <div>Name: {user?.user.name}</div>
          <div>token: {user?.token}</div>
          <Logout />
        </div>
      )}
      {status === 'failed' && <p>{error}</p>}
    </div>
  );
}
