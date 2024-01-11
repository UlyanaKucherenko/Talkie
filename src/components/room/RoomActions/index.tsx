/* eslint-disable no-underscore-dangle */
/* eslint-disable react/no-unescaped-entities */
import { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { RButtonIcon } from '../../ui/RButtonIcon';
import styles from './index.module.css';
import { IconDetails } from '../../icons/IconDetails';
import { IconEdit } from '../../icons/IconEdit';
import { IconDelete } from '../../icons/IconDelete';
import { Popup } from '../../Popup';
import { RButton } from '../../RButton';
import { useClickOutside } from '../../../hooks/use-click-outside';
import { Room } from '../../../utils/types/rooms.type';
import EditRoomPopup from '../EditRoom';

type RoomActionsProps = {
  id: string;
  roomData?: Room;
  roomTitle?: string;
  roomType: string;
  className?: string;
  isEdit?: boolean;
  roomDelete: () => void;
};

export const RoomActions = ({
  id,
  roomData,
  className,
  roomType = 'private',
  isEdit = false,
  roomTitle = 'room 1',
  roomDelete,
}: RoomActionsProps) => {
  const [showEditPopup, setShowEditPopup] = useState(false);
  const [showDeletePopup, setShowDeletePopup] = useState(false);
  const [showActions, setShowActions] = useState(false);
  const actionsBlock = useRef(null);

  const { t } = useTranslation();

  let classNameRoomActions = styles.wrap;
  if (className) {
    classNameRoomActions = `${classNameRoomActions} ${className}`;
  }

  const roomEdit = async () => {
    setShowEditPopup(true);
  };

  useClickOutside(actionsBlock, () => setShowActions(false));

  return (
    <>
      <EditRoomPopup
        show={showEditPopup}
        setIsShow={() => setShowEditPopup(false)}
        roomId={id}
        roomData={roomData}
      />
      <Popup show={showDeletePopup} setIsShow={() => setShowDeletePopup(false)}>
        <div className={styles.logoutWarning}>
          <div className={styles.popupTitle}>
            {t('rooms.delete')}{' '}
            {roomType === 'private' ? t('rooms.private') : t('rooms.public')}{' '}
            {t('rooms.room')}
          </div>
          <div className={styles.popupDescription}>
            {t('rooms.doYouWantToDelete')}{' '}
            {roomType === 'private' ? t('rooms.private') : t('rooms.public')}
            {t('rooms.room')} "{roomTitle}" ?
          </div>
          <div className={styles.popupActions}>
            <RButton
              onClick={() => setShowDeletePopup(false)}
              color="secondary"
            >
              {t('auth.logoutWarningCloseButton')}
            </RButton>
            <RButton onClick={roomDelete} color="warning">
              {t('rooms.yes')}
            </RButton>
          </div>
        </div>
      </Popup>
      <div className={classNameRoomActions}>
        <div className={styles.wrapActions} ref={actionsBlock}>
          <RButtonIcon
            onClick={() => setShowActions(!showActions)}
            icon={IconDetails}
            className={`${styles.roomActions}       ${
              showActions ? styles.activeBtn : ''
            }
            `}
          />
          <div
            className={`${styles.listActions} ${
              showActions ? styles.actionsOpen : ''
            }`}
          >
            <button
              type="button"
              onClick={() => setShowDeletePopup(true)}
              className={styles.listActionsItem}
            >
              <IconDelete />
              <span>{t('rooms.delete')}</span>
            </button>
            {isEdit && (
              <button
                type="button"
                onClick={() => roomEdit()}
                className={styles.listActionsItem}
              >
                <IconEdit />
                <span>{t('rooms.edit')}</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
