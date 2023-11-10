import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import styles from './index.module.css';
import { userSelector } from '../../store/user';
import { Status } from '../../utils/enums/status.enum';
import { AuthPopup } from '../../components/auth/signup/authPopup';

const publicList = [
  {
    id: 1,
    title: 'Room 1',
    descr: 'short description of this room',
  },
  {
    id: 2,
    title: 'Room 2',
    descr: 'short description of this room',
  },
  {
    id: 3,
    title: 'Room 3',
    descr: 'short description of this room',
  },
  {
    id: 4,
    title: 'Room 4',
    descr: 'short description of this room',
  },
  {
    id: 5,
    title: 'Room 5',
    descr: 'short description of this room',
  },
  {
    id: 6,
    title: 'Room 6',
    descr: 'short description of this room',
  },
];

const Home = () => {
  const { status, userData } = useSelector(userSelector);

  const [openPopup, setOpenPopup] = useState<boolean>(false);

  const { t } = useTranslation();

  return (
    <>
      <AuthPopup open={openPopup} setIsOpen={setOpenPopup} />
      <div className={`container ${styles.homeContainer}`}>
        <section className={styles.sectionHero}>
          <h1>{t('main.title')}</h1>
          <h3>{t('main.description')}</h3>
        </section>
        <section>
          <div>
            <input type="text" placeholder="search..." />
          </div>

          <div>
            <h2>{t('rooms.public')}</h2>
            <div className={styles.list}>
              {userData && status === Status.Succeeded
                ? publicList.map((item) => (
                    <NavLink
                      to={`/public-chat/${item.id}`}
                      className={styles.listItem}
                      key={item.id}
                    >
                      <div>{item.title}</div>
                      <div>{item.descr}</div>
                    </NavLink>
                  ))
                : publicList.map((item) => (
                    <div className={styles.listItem} key={item.id}>
                      <div>{item.title}</div>
                      <div>{item.descr}</div>
                      <button type="button" onClick={() => setOpenPopup(true)}>
                        Join
                      </button>
                    </div>
                  ))}
            </div>
          </div>
          {userData && status === Status.Succeeded && (
            <h2>{t('rooms.private')}</h2>
          )}
        </section>
      </div>
    </>
  );
};

export default Home;
