import { useTranslation } from 'react-i18next';
import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import styles from './style.module.css';
import { RButtonIcon } from '../../ui/RButtonIcon';
import { Logo } from '../../Logo';

const version = '1.0';

const Footer = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleLogoClick = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    navigate('/');
  }, [navigate]);

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerContainer}`}>
        <div className={styles.version}>
          <RButtonIcon
            icon={Logo}
            className={styles.logoLink}
            onClick={handleLogoClick}
          />
          <span>v. {version}</span>
        </div>
        <div>
          <a
            className={styles.linkOurTeam}
            href="https://teamchallenge.io/team/46/public"
            target="_blank"
            rel="noreferrer"
          >
            {t('main.ourTeem')}
          </a>
        </div>
        <div>&copy; 2024</div>
      </div>
    </footer>
  );
};

export default Footer;
