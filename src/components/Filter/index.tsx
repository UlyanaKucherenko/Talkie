import { useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { IconFilter } from '../icons/IconFilter';
import { IconSearch } from '../icons/IconSearch';
import { RButtonIcon } from '../ui/RButtonIcon';
import { FilterForm } from './FilterForm';
import styles from './index.module.css';
import { useClickOutside } from '../../hooks/use-click-outside';
import { AppDispatch } from '../../store';
import { userSelector } from '../../store/user';
import { Status } from '../../utils/enums/status.enum';
import { roomsThunks } from '../../store/rooms';
import { Topic } from '../../utils/enums/topic.enum';

export const Filter = () => {
  const [showFilter, setShowFilter] = useState(false);
  const [topicFilter, setTopicFilter] = useState<typeof Topic | ''>('');
  const [isFilterApplied, setIsFilterApplied] = useState(false);

  const filterRef = useRef<HTMLFormElement>(null);

  const dispatch = useDispatch<AppDispatch>();
  const { userData, status: userStatus } = useSelector(userSelector);

  useClickOutside(filterRef, () => setShowFilter(false));

  const dispatchFilters = async () => {
    if (userData && userStatus === Status.Succeeded) {
      await dispatch(
        roomsThunks.getPublicRoomsWithoutOwn({
          currentPage: 1,
          topic: topicFilter,
        })
      );
      return;
    }
    await dispatch(
      roomsThunks.getPublicRooms({ currentPage: 1, topic: topicFilter })
    );
  };

  const filterChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTopicFilter(event.target.value as any as typeof Topic);
  };

  const filterFormHandler = (event: React.FormEvent) => {
    event.preventDefault();
    dispatchFilters();
    setIsFilterApplied(true);
  };

  const filterResetHandler = () => {
    setTopicFilter('');
    setIsFilterApplied(false);
    dispatchFilters();
  };

  return (
    <div className={styles.filter}>
      <div className={styles.searchWrap}>
        <input
          className={styles.searchInput}
          type="search"
          placeholder="Search ..."
        />
        <div className={styles.searchIcon}>
          <IconSearch />
        </div>
      </div>
      <RButtonIcon icon={IconFilter} onClick={() => setShowFilter(true)} />
      {showFilter && (
        <FilterForm
          onFilterChange={filterChangeHandler}
          onFilterSubmit={filterFormHandler}
          onFilterReset={filterResetHandler}
          isFilterApplied={isFilterApplied}
          ref={filterRef}
        />
      )}
    </div>
  );
};
