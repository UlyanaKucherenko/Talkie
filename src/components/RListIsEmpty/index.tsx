import { useTranslation } from 'react-i18next';
import styles from './index.module.css';

type RListIsEmptyProps = {
  children?: React.ReactNode;
};

export const RListIsEmpty = ({ children }: RListIsEmptyProps) => {
  const { t } = useTranslation();
  return (
    <div className={styles.wrap}>{children || t('rooms.listIsEmpty')}</div>
  );
};
