import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { userSelector } from '../../store/user';
import { Status } from '../../utils/enums/status.enum';
import { SectionPublicRooms } from '../../components/sections/SectionPublicRooms';
import { SectionPrivateRooms } from '../../components/sections/SectionPrivateRooms';
import { SectionMyPublicRooms } from '../../components/sections/SectionMyPublicRooms';
import styles from './index.module.css';

const Home = () => {
  const { status, userData } = useSelector(userSelector);
  const location = useLocation();
  const { t } = useTranslation();
  const publicRooms = useRef<HTMLDivElement>(null);
  const myPublicRooms = useRef<HTMLDivElement>(null);
  const privateRooms = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (location.hash === '#public-rooms' && publicRooms.current) {
      publicRooms.current.scrollIntoView({ behavior: 'smooth' });
    }

    if (location.hash === '#private-rooms' && privateRooms.current) {
      privateRooms.current.scrollIntoView({ behavior: 'smooth' });
    }
    if (location.hash === '#my-public-rooms' && myPublicRooms.current) {
      myPublicRooms.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [location]);

  return (
    <div className={`container ${styles.homeContainer}`}>
      <section className={styles.sectionHero}>
        <h1>{t('main.title')}</h1>
        <h3>{t('main.description')}</h3>
      </section>

      <SectionPublicRooms ref={publicRooms} />

      {userData && status === Status.Succeeded && (
        <SectionMyPublicRooms ref={myPublicRooms} />
      )}

      {userData && status === Status.Succeeded && (
        <SectionPrivateRooms ref={privateRooms} />
      )}
    </div>
  );
};

export default Home;
