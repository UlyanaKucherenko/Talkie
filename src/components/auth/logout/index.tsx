import { useDispatch } from 'react-redux';

import { authThunks } from '../../../store/user';
import type { AppDispatch } from '../../../store';

export const Logout = () => {
  const dispatch = useDispatch<AppDispatch>();
  const logoutClickHanlder = () => {
    dispatch(authThunks.logout());
  };
  return (
    <button type="button" onClick={logoutClickHanlder}>
      Logout
    </button>
  );
};
