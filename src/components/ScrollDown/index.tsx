import { useTranslation } from 'react-i18next';

import styles from './index.module.css';

export const ScrollDown = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.wrap}>
      <div className={styles.box}>
        <span />
        <span />
        <span />
      </div>
      <div className={styles.text}>{t('main.scrollDown')}</div>
    </div>
  );
};
