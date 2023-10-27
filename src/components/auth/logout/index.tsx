import { useDispatch } from 'react-redux';
import { auth } from '../../../store/user';
import type { AppDispatch } from '../../../store';

export default function Logout() {
  const dispatch = useDispatch<AppDispatch>();
  const logoutClickHanlder = () => {
    dispatch(auth.logout());
  };
  return (
    <button type="button" onClick={logoutClickHanlder}>
      Logout
    </button>
  );
}
