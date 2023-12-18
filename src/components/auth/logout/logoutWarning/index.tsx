import { useTranslation } from 'react-i18next';
import { RButton } from '../../../RButton';

import styles from './index.module.css';

type Props = {
  onClose: () => void;
  onConfirm: () => void;
};
export const LogoutWarning = ({ onClose, onConfirm }: Props) => {
  const { t } = useTranslation();

  return (
    <div className={styles.logoutWarning}>
      <div className={styles.title}>{t('auth.logoutWarningTitle')}</div>
      <div className={styles.description}>
        {t('auth.logoutWarningDescription')}
      </div>
      <div className={styles.actions}>
        <RButton onClick={onClose} color="secondary">
          {t('auth.logoutWarningCloseButton')}
        </RButton>
        <RButton onClick={onConfirm} color="secondary">
          {t('auth.logoutWarningConfirmButton')}
        </RButton>
      </div>
    </div>
  );
};
