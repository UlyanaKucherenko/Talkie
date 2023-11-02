import { useSelector } from 'react-redux';

import { SingUp } from '../../components/auth/signup';
import { Logout } from '../../components/auth/logout';
import { userSelector } from '../../store/user';
import { Status } from '../../utils/enums/status.enum';

const Home = () => {
  const { userData, status, error } = useSelector(userSelector);
  return (
    <div>
      {status === Status.Idle && <SingUp />}
      {status === Status.Loading && <p>Loading...</p>}
      {status === Status.Succeeded && (
        <div>
          <div>Name: {userData?.user.name}</div>
          <div>token: {userData?.token}</div>
          <Logout />
        </div>
      )}
      {status === Status.Failed && <p>{error}</p>}
    </div>
  );
};

export default Home;
