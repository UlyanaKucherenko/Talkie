import { useTranslation } from 'react-i18next';

import { NavLink } from 'react-router-dom';
import styles from './index.module.css';
import Main from '../../../assets/image/main.png';
import { Rulles } from '../../Rules';
import { ScrollDown } from '../../ScrollDown';

export const Hero = () => {
  const { t } = useTranslation();
  return (
    <section className={styles.wrap} id="hero">
      <div className={styles.container}>
        <div className={styles.info} id="hero">
          <h1>
            {t('main.title')}
            <span>{t('main.siteName')}</span>
          </h1>
          <h3>{t('main.description')}</h3>
          <Rulles />
        </div>
        <div className={styles.imgHero}>
          <img src={Main} alt="" />
        </div>
        <NavLink to="/#public-rooms">
          <ScrollDown />
        </NavLink>
      </div>
    </section>
  );
};
