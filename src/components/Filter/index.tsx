import { useState, useRef } from 'react';

import { IconFilter } from '../icons/IconFilter';
import { IconSearch } from '../icons/IconSearch';
import { RButtonIcon } from '../ui/RButtonIcon';
import { FilterForm } from './FilterForm';
import styles from './index.module.css';
import { useClickOutside } from '../../hooks/use-click-outside';

export const Filter = () => {
  const [showFilter, setShowFilter] = useState(false);
  const filterRef = useRef<HTMLFormElement>(null);

  useClickOutside(filterRef, () => setShowFilter(false));
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
      {showFilter && <FilterForm ref={filterRef} />}
    </div>
  );
};
