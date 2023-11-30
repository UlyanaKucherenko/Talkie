import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import styles from './index.module.css';
import { userSelector } from '../../store/user';
import { Status } from '../../utils/enums/status.enum';
import { SectionPublicRooms } from '../../components/sections/SectionPublicRooms';

const Home = () => {
  const { status, userData } = useSelector(userSelector);

  const { t } = useTranslation();

  return (
    <div className={`container ${styles.homeContainer}`}>
      <section className={styles.sectionHero}>
        <h1>{t('main.title')}</h1>
        <h3>{t('main.description')}</h3>
        <div>
          <input type="text" placeholder="search..." />
        </div>
      </section>

      <SectionPublicRooms />

      {userData && status === Status.Succeeded && (
        <section id="private-rooms" style={{ marginTop: '50px' }}>
          <h2>{t('rooms.private')}</h2>
        </section>
      )}
    </div>
  );
};

export default Home;
