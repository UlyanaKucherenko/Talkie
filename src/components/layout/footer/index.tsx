import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import styles from './style.module.css';

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerContainer}`}>
        <NavLink to="/">Logo</NavLink>
        <NavLink to="/">{t('main.ourTeem')}</NavLink>
        <span>2023</span>
      </div>
    </footer>
  );
};

export default Footer;
