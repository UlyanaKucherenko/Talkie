import { useLoaderData } from 'react-router-dom';

import styles from './index.module.css';
import { Room } from '../../../utils/types/rooms.type';
import { IconClose } from '../../icons/IconClose';
import { RoomDetailsUserList } from './RoomDetailsUserList';

type Props = {
  onClose: () => void;
};

export const RoomDetails = ({ onClose }: Props) => {
  const room = useLoaderData() as Room;
  console.log(room);
  return (
    <div className={styles.roomDetails}>
      <button
        className={styles.close}
        type="button"
        aria-label="close"
        onClick={onClose}
      >
        <IconClose />
      </button>
      {!room && <p>No data</p>}
      {room && (
        <>
          <h2 className={styles.roomTitle}>{room.title}</h2>
          <div className={styles.roomCreatedAt}>
            {new Date(room.createdAt).toLocaleDateString('uk-UA')}
          </div>
          <div className={styles.roomDescription}>{room.description}</div>
          <div className={styles.members}>
            <div className={styles.membersTitle}>Members</div>
            <RoomDetailsUserList owner={room.owner} members={room.users} />
          </div>
        </>
      )}
    </div>
  );
};
