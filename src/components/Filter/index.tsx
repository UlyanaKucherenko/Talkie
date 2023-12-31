import { useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { IconFilter } from '../icons/IconFilter';
import { RButtonIcon } from '../ui/RButtonIcon';
import { FilterForm } from './FilterForm';
import styles from './index.module.css';
import { useClickOutside } from '../../hooks/use-click-outside';
import { AppDispatch } from '../../store';
import { userSelector } from '../../store/user';
import { Status } from '../../utils/enums/status.enum';
import { roomsThunks } from '../../store/rooms';
import { Topic } from '../../utils/enums/topic.enum';

type TopicState = typeof Topic | '';

export const Filter = () => {
  const [showFilter, setShowFilter] = useState(false);
  const [topicFilter, setTopicFilter] = useState<string>('');
  const [filterTitle, setFilterTitle] = useState<string | null>(null);
  const [isFilterApplied, setIsFilterApplied] = useState(false);

  const filterRef = useRef<HTMLFormElement>(null);

  const dispatch = useDispatch<AppDispatch>();
  const { userData, status: userStatus } = useSelector(userSelector);

  useClickOutside(filterRef, () => setShowFilter(false));

  const dispatchFilters = async ({ topic }: { topic: TopicState }) => {
    if (userData && userStatus === Status.Succeeded) {
      await dispatch(
        roomsThunks.getPublicRoomsWithoutOwn({
          currentPage: 1,
          topic,
        })
      );
      return;
    }
    await dispatch(roomsThunks.getPublicRooms({ currentPage: 1, topic }));
  };

  const filterChangeHandler = ({
    key,
    title,
  }: {
    key: string;
    title: string;
  }) => {
    setTopicFilter(key);
    setFilterTitle(title);
  };

  const filterFormHandler = (event: React.FormEvent) => {
    event.preventDefault();
    dispatchFilters({ topic: topicFilter as TopicState });
    setIsFilterApplied(true);
    setShowFilter(false);
  };

  const filterResetHandler = () => {
    setTopicFilter('');
    setFilterTitle('');
    setIsFilterApplied(false);
    setShowFilter(false);
    dispatchFilters({ topic: '' });
  };

  return (
    <div className={styles.filter}>
      <RButtonIcon icon={IconFilter} onClick={() => setShowFilter(true)} />
      <div className={styles.filters}>
        {filterTitle && (
          <>
            {filterTitle}
            <button
              type="button"
              onClick={filterResetHandler}
              className={styles.resetBtn}
            >
              ×
            </button>
          </>
        )}
      </div>
      {showFilter && (
        <FilterForm
          value={topicFilter}
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
