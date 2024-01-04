import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { debounce } from 'lodash';
import { AppDispatch } from '../../store';
import { userSelector } from '../../store/user';
import { Status } from '../../utils/enums/status.enum';
import { roomsThunks } from '../../store/rooms';
import { Search } from '../Search';
import { Filter } from '../Filter';
import { Topic } from '../../utils/enums/topic.enum';
import styles from './index.module.css';

type TopicState = typeof Topic | '';

export const SearchFilter = () => {
  const [filter, setFilter] = useState<TopicState>();
  const [searchQuery, setSearchQuery] = useState('');

  const dispatch = useDispatch<AppDispatch>();
  const { userData, status: userStatus } = useSelector(userSelector);

  const dispatchFilters = async ({
    topic,
    query,
  }: {
    topic?: TopicState;
    query?: string;
  }) => {
    if (userData && userStatus === Status.Succeeded) {
      await dispatch(
        roomsThunks.getPublicRoomsWithoutOwn({
          currentPage: 1,
          topic,
          query,
        })
      );
      await dispatch(roomsThunks.getOwnPublicRooms({ currentPage: 1, query }));
      return;
    }
    await dispatch(
      roomsThunks.getPublicRooms({ currentPage: 1, topic, query })
    );
  };

  const searchHandler = (value: string) => {
    if (value.length > 2) {
      setSearchQuery(value);
    }
  };
  const debounced = debounce(searchHandler, 1000);

  dispatchFilters({ topic: filter, query: searchQuery });
  return (
    <div className={styles.searchFilter}>
      <Search onChange={debounced} />
      <Filter onSubmit={(value) => setFilter(value)} />
    </div>
  );
};
