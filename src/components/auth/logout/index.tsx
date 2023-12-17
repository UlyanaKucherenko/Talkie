import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import { authThunks } from '../../../store/user';
import type { AppDispatch } from '../../../store';
import { RButton } from '../../RButton';
import { RButtonIcon } from '../../ui/RButtonIcon';
import { IconLogout } from '../../icons/iconLogout';
import { Popup } from '../../Popup';
import { LogoutWarning } from './logoutWarning';

type Props = {
  className?: string;
  variant?: 'icon' | 'default';
};

export const Logout = ({ className, variant = 'default' }: Props) => {
  const [showPopup, setIsShowPopup] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const logoutClickHanlder = () => {
    dispatch(authThunks.logout());
    navigate('/');
  };

  const { t } = useTranslation();

  return (
    <>
      <Popup show={showPopup} setIsShow={setIsShowPopup}>
        <LogoutWarning
          onClose={() => setIsShowPopup(false)}
          onConfirm={logoutClickHanlder}
        />
      </Popup>
      {variant === 'icon' && (
        <RButtonIcon
          className={className}
          icon={IconLogout}
          onClick={() => setIsShowPopup(true)}
        />
      )}
      {variant === 'default' && (
        <RButton
          className={className}
          color="text"
          type="button"
          onClick={() => setIsShowPopup(true)}
        >
          {t('auth.logout')}
        </RButton>
      )}
    </>
  );
};
