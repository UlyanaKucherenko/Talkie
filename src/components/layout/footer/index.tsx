import { useTranslation } from 'react-i18next';

import styles from './style.module.css';

const version = '0.1';

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerContainer}`}>
        <div className={styles.version}>
          {t('main.version')} {version}
        </div>
        <div>{new Date().getFullYear()}</div>
      </div>
    </footer>
  );
};

export default Footer;
