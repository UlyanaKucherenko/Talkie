import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import { authThunks } from '../../../store/user';
import type { AppDispatch } from '../../../store';
import { RButton } from '../../RButton';

export const Logout = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const logoutClickHanlder = () => {
    dispatch(authThunks.logout());
    navigate('/');
  };

  const { t } = useTranslation();

  return (
    <RButton color="text" type="button" onClick={logoutClickHanlder}>
      {t('auth.logout')}
    </RButton>
  );
};
