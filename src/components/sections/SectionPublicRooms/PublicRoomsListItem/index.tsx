import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { Room } from '../../../../utils/types/rooms.type';
import styles from './index.module.css';
import { userSelector } from '../../../../store/user';

type Props = {
  item: Room;
  onUnauthorized: () => void;
};
export const PublicRoomsListItem = ({ item, onUnauthorized }: Props) => {
  const { userData } = useSelector(userSelector);

  return (
    <NavLink
      onClick={(event) => {
        if (!userData) {
          event.preventDefault();
          onUnauthorized();
        }
      }}
      // eslint-disable-next-line no-underscore-dangle
      to={`/public-chat/${item._id}`}
      className={styles.listItem}
      // eslint-disable-next-line no-underscore-dangle
      key={item._id}
    >
      <div>{item.title}</div>
      <div>{item.description}</div>
      <div>{item.topic}</div>
    </NavLink>
  );
};
