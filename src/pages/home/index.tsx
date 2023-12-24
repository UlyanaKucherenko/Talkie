import { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import styles from './index.module.css';
import { userSelector } from '../../store/user';
import { Status } from '../../utils/enums/status.enum';
import { SectionPublicRooms } from '../../components/sections/SectionPublicRooms';
import { RButton } from '../../components/RButton';
import { IconPlus } from '../../components/icons/IconPlus';
import CreateRoomPopup from '../../components/room/CreateRoom';

const Home = () => {
  const { status, userData } = useSelector(userSelector);
  const [showPopup, setShowPopup] = useState(false);
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
      <CreateRoomPopup show={showPopup} setIsShow={() => setShowPopup(false)} />
      <section className={styles.sectionHero}>
        <h1>{t('main.title')}</h1>
        <h3>{t('main.description')}</h3>
        <div>
          <input type="text" placeholder="search..." />
        </div>
      </section>

      <SectionPublicRooms ref={publicRooms} />
      {userData && status === Status.Succeeded && (
        <div className={styles.createRoom}>
          <RButton
            type="submit"
            color="secondary"
            onClick={() => setShowPopup(true)}
          >
            <IconPlus />
            Create room
          </RButton>
        </div>
      )}

      {userData && status === Status.Succeeded && (
        <section
          id="private-rooms"
          style={{ marginTop: '50px' }}
          ref={privateRooms}
        >
          <h2>{t('rooms.private')}</h2>
        </section>
      )}
    </div>
  );
};

export default Home;
