import { useState, useRef } from 'react';

import { IconFilter } from '../icons/IconFilter';
import { RButtonIcon } from '../ui/RButtonIcon';
import { FilterForm } from './FilterForm';
import styles from './index.module.css';
import { useClickOutside } from '../../hooks/use-click-outside';

import { Topic } from '../../utils/enums/topic.enum';
import { Topics } from '../../utils/constants/topic';

type TopicState = typeof Topic | '';

type Props = {
  onSubmit: (filter: TopicState) => void;
};
export const Filter = ({ onSubmit }: Props) => {
  const [showFilter, setShowFilter] = useState(false);
  const [topicFilter, setTopicFilter] = useState<string>('');
  const [isFilterApplied, setIsFilterApplied] = useState(false);

  const filterRef = useRef<HTMLDivElement>(null);

  useClickOutside(filterRef, () => setShowFilter(false));

  const filterFormHandler = (event: React.FormEvent) => {
    event.preventDefault();
    onSubmit(topicFilter as TopicState);
    setIsFilterApplied(true);
    setShowFilter(false);
  };

  const filterResetHandler = () => {
    onSubmit('');
    setTopicFilter('');
    setIsFilterApplied(false);
    setShowFilter(false);
  };

  return (
    <div className={styles.filter} ref={filterRef}>
      <RButtonIcon
        className={`${styles.filterBtn} ${showFilter && styles.active}`}
        icon={IconFilter}
        onClick={() => setShowFilter(!showFilter)}
      />
      <div className={styles.filters}>
        {topicFilter && isFilterApplied && (
          <>
            {Topics[topicFilter as Topic]}
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
          onChange={(value) => setTopicFilter(value)}
          onFilterSubmit={filterFormHandler}
          onFilterReset={filterResetHandler}
          isFilterApplied={isFilterApplied}
        />
      )}
    </div>
  );
};
