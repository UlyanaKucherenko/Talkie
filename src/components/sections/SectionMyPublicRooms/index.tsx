import { useDispatch, useSelector } from 'react-redux';
import { useEffect, forwardRef, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { Status } from '../../../utils/enums/status.enum';
import { AppDispatch } from '../../../store';
import { roomsSelector, roomsThunks } from '../../../store/rooms';
import { PublicRoomsList } from '../SectionPublicRooms/PublicRoomsList';
import { RLoader } from '../../RLoader';
import styles from '../SectionPublicRooms/index.module.css';
import { IconArrowUp } from '../../icons/IconArrowUp';
import { IconArrowDown } from '../../icons/IconArrowDown';

export const SectionMyPublicRooms = forwardRef<HTMLDivElement>((_, ref) => {
  const [isShow, setIsShow] = useState(false);
  const { t } = useTranslation();
  const dispatch = useDispatch<AppDispatch>();
  const { myPublicRoomsData, status } = useSelector(roomsSelector);

  useEffect(() => {
    const getPublicRooms = async () => {
      await dispatch(roomsThunks.getOwnPublicRooms());
    };
    getPublicRooms();
  }, [dispatch]);

  return (
    <section id="public-rooms" className={styles.sectionPublic} ref={ref}>
      <h2>
        <button
          type="button"
          onClick={() => setIsShow((prevState) => !prevState)}
        >
          <span>{t('rooms.myPublicRooms')}</span>
          {isShow ? <IconArrowUp /> : <IconArrowDown />}
        </button>
      </h2>

      {isShow && (
        <div className={styles.content}>
          {status === Status.Loading && <RLoader />}

          {myPublicRoomsData && status === Status.Succeeded && (
            <PublicRoomsList rooms={myPublicRoomsData.rooms} />
          )}
        </div>
      )}
    </section>
  );
});
