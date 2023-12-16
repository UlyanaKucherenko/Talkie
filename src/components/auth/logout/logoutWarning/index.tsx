import { RButton } from '../../../RButton';

import styles from './index.module.css';

type Props = {
  onClose: () => void;
  onConfirm: () => void;
};
export const LogoutWarning = ({ onClose, onConfirm }: Props) => (
  <div className={styles.logoutWarning}>
    <div className={styles.title}>Are you sure you want to log out? </div>
    <div className={styles.description}>
      You will not be able to log in with this account
    </div>
    <div className={styles.actions}>
      <RButton onClick={onClose} color="secondary">
        Close
      </RButton>
      <RButton onClick={onConfirm} color="secondary">
        Сonfirm
      </RButton>
    </div>
  </div>
);
