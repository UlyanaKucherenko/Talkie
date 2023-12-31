import { ChangeEvent, useState } from 'react';
import { debounce } from 'lodash';

import { IconSearch } from '../icons/IconSearch';
import styles from './index.module.css';

type Props = {
  onChange: (value: string) => void;
};
export const Search = ({ onChange }: Props) => {
  const [value, setValue] = useState<string>('');

  const debouncedChange = debounce(onChange, 500);

  const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const enteredValue = event.target.value;
    setValue(enteredValue);
    debouncedChange(enteredValue);
  };
  const resetHandler = () => {
    setValue('');
    onChange('');
  };
  return (
    <div className={styles.searchWrap}>
      <input
        className={styles.searchInput}
        type="text"
        placeholder="Search ..."
        onChange={changeHandler}
        value={value}
      />
      {value.length > 0 && (
        <button
          type="button"
          onClick={resetHandler}
          className={styles.resetBtn}
        >
          ×
        </button>
      )}
      <div className={styles.searchIcon}>
        <IconSearch />
      </div>
    </div>
  );
};
