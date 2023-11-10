import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { authThunks } from '../../../store/user';
import type { AppDispatch } from '../../../store';

export const Logout = () => {
  const dispatch = useDispatch<AppDispatch>();
  const logoutClickHanlder = () => {
    dispatch(authThunks.logout());
  };

  const { t } = useTranslation();

  return (
    <button type="button" onClick={logoutClickHanlder}>
      {t('auth.logout')}
    </button>
  );
};
