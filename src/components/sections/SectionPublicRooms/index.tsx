import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { userSelector } from '../../../store/user';
import { Status } from '../../../utils/enums/status.enum';
import styles from './index.module.css';
import { AuthPopup } from '../../auth/signup/authPopup';

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

export const SectionPublicRooms = () => {
  const { status, userData } = useSelector(userSelector);
  const [openPopup, setOpenPopup] = useState<boolean>(false);
  const { t } = useTranslation();

  return (
    <section id="public-rooms" className={styles.sectionPublic}>
      <AuthPopup open={openPopup} setIsOpen={setOpenPopup} />

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
              <button
                type="button"
                className={styles.listItem}
                key={item.id}
                onClick={() => setOpenPopup(true)}
              >
                <div>{item.title}</div>
                <div>{item.descr}</div>
              </button>
            ))}
      </div>
    </section>
  );
};
