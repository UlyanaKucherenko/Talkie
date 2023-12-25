import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import styles from './index.module.css';
import { userSelector } from '../../store/user';
import { Status } from '../../utils/enums/status.enum';
import { SectionPublicRooms } from '../../components/sections/SectionPublicRooms';
import { SectionPrivateRooms } from '../../components/sections/SectionPrivateRooms';

const Home = () => {
  const { status, userData } = useSelector(userSelector);
  const location = useLocation();
  const { t } = useTranslation();
  const publicRooms = useRef<HTMLDivElement>(null);
  const privateRooms = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (location.hash === '#public-rooms' && publicRooms.current) {
      publicRooms.current.scrollIntoView({ behavior: 'smooth' });
    }

    if (location.hash === '#private-rooms' && privateRooms.current) {
      privateRooms.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [location]);

  return (
    <div className={`container ${styles.homeContainer}`}>
      <section className={styles.sectionHero}>
        <h1>{t('main.title')}</h1>
        <h3>{t('main.description')}</h3>
        <div>
          <input type="text" placeholder="search..." />
        </div>
      </section>

      <SectionPublicRooms ref={publicRooms} />

      {userData && status === Status.Succeeded && <SectionPrivateRooms />}
    </div>
  );
};

export default Home;
