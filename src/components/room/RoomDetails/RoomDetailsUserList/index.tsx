/* eslint-disable no-underscore-dangle */
import { RoomDetailsUserItem } from '../RoomDetailsUserItem';
import type { User } from '../../../../utils/types/user.type';
import styles from './index.module.css';

type Props = {
  owner: User;
  members: User[];
};

export const RoomDetailsUserList = ({ owner, members }: Props) => (
  <ul className={styles.users}>
    <RoomDetailsUserItem user={owner} isOwner />
    {members.map((member) => (
      <RoomDetailsUserItem key={member._id} user={member} />
    ))}
  </ul>
);
