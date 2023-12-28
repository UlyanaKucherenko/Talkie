import { useDispatch, useSelector } from 'react-redux';
import { useEffect, forwardRef } from 'react';
import { useTranslation } from 'react-i18next';

import { AppDispatch } from '../../../store';
import { roomsSelector, roomsThunks } from '../../../store/rooms';
import styles from './index.module.css';
import { PrivateRoomsList } from './PrivateRoomsList';
import { Status } from '../../../utils/enums/status.enum';
import { RLoader } from '../../RLoader';
// import { IconEdit } from '../../icons/IconEdit';
// import { RButtonIcon } from '../../ui/RButtonIcon';
// import { ThemeEnum } from '../../../utils/const';
// import { themeSelector } from '../../../store/theme';

export const SectionPrivateRooms = forwardRef<HTMLDivElement>((_, ref) => {
  const { t } = useTranslation();
  const dispatch = useDispatch<AppDispatch>();
  // const [currentPage, setCurrentPage] = useState<number>(1);
  // const { mode } = useSelector(themeSelector);

  const { privateRoomsData, privateRoomsStatus } = useSelector(roomsSelector);

  useEffect(() => {
    const getPrivateRooms = async () => {
      await dispatch(roomsThunks.getPrivateRooms({ page: 1 }));
    };

    getPrivateRooms();
  }, [dispatch]);

  return (
    <section id="private-rooms" className={styles.sectionPrivate} ref={ref}>
      <h2 className={styles.title}>{t('rooms.private')}</h2>

      <div className={styles.content}>
        {/* <RButtonIcon
          icon={IconEdit}
          defaultColorIcon={mode === ThemeEnum.LIGHT ? 'dark' : 'light'}
          className={styles.btnEdit}
        /> */}

        {privateRoomsStatus === Status.Loading && <RLoader />}

        {privateRoomsData && privateRoomsStatus === Status.Succeeded && (
          <PrivateRoomsList rooms={privateRoomsData.rooms} />
        )}
      </div>
    </section>
  );
});
