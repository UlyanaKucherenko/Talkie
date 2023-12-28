import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import styles from './index.module.css';
import Image404 from '../../assets/image/404.svg';

const Page404 = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.wrap}>
      <h2 className={styles.title}>{t('pageError.pageNotFound')}</h2>
      <img src={Image404} alt="404" className={styles.image} />
      <NavLink className={styles.btn} to="/">
        {t('pageError.returnHome')}
      </NavLink>
    </div>
  );
};

export default Page404;
