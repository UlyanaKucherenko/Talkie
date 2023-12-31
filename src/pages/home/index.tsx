import { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { userSelector } from '../../store/user';
import { Status } from '../../utils/enums/status.enum';
import { SectionPublicRooms } from '../../components/sections/SectionPublicRooms';
import { SectionPrivateRooms } from '../../components/sections/SectionPrivateRooms';
import { RButton } from '../../components/RButton';
import { IconPlus } from '../../components/icons/IconPlus';
import CreateRoomPopup from '../../components/room/CreateRoom';
import { SectionMyPublicRooms } from '../../components/sections/SectionMyPublicRooms';
import { Filter } from '../../components/Filter';
import { Search } from '../../components/Search';
import { SectionFoundRooms } from '../../components/sections/SectionFoundRooms';
import styles from './index.module.css';

const Home = () => {
  const { status, userData } = useSelector(userSelector);
  const [showPopup, setShowPopup] = useState(false);
  const [searchQuery, setSearchQuery] = useState<string>('');
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

  const searchHandler = (value: string) => {
    setSearchQuery(value);
  };
  return (
    <div className={`container ${styles.homeContainer}`}>
      <CreateRoomPopup show={showPopup} setIsShow={() => setShowPopup(false)} />
      <section className={styles.sectionHero}>
        <h1>{t('main.title')}</h1>
        <h3>{t('main.description')}</h3>
        <div className={styles.searchFilter}>
          <Search onChange={searchHandler} />
          <Filter />
        </div>
      </section>

      {searchQuery.trim().length >= 2 && (
        <SectionFoundRooms searchQuery={searchQuery} />
      )}
      {searchQuery.trim().length < 2 && (
        <>
          <SectionPublicRooms ref={publicRooms} />

          {userData && status === Status.Succeeded && (
            <>
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
              <SectionMyPublicRooms ref={myPublicRooms} />
            </>
          )}

          {userData && status === Status.Succeeded && (
            <SectionPrivateRooms ref={privateRooms} />
          )}
        </>
      )}
    </div>
  );
};

export default Home;
