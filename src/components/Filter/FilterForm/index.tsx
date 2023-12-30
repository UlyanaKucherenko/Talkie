import { forwardRef } from 'react';
import { Topics } from '../../../utils/constants/topic';
import { RButton } from '../../RButton';
import styles from './index.module.css';

type Ref = HTMLFormElement;
type Props = {
  onFilterChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onFilterSubmit: (event: React.FormEvent) => void;
  onFilterReset: () => void;
  isFilterApplied: boolean;
};
export const FilterForm = forwardRef<Ref, Props>(
  ({ onFilterChange, onFilterSubmit, onFilterReset, isFilterApplied }, ref) => (
    <form className={styles.filterMenu} ref={ref} onSubmit={onFilterSubmit}>
      {isFilterApplied && (
        <button
          className={styles.resetForm}
          type="submit"
          onClick={onFilterReset}
        >
          Cancel
        </button>
      )}
      {Object.entries(Topics).map(([key, value]) => (
        <div key={key} className={styles.filterItem}>
          <label htmlFor={key}>
            <input
              type="radio"
              value={key}
              name="topic"
              id={key}
              onChange={onFilterChange}
            />
            {value}
          </label>
        </div>
      ))}
      <div className={styles.formAction}>
        <RButton type="submit" color="secondary">
          Apply
        </RButton>
      </div>
    </form>
  )
);
