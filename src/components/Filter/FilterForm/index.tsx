import { forwardRef } from 'react';
import { Topics } from '../../../utils/constants/topic';
import { RButton } from '../../RButton';
import styles from './index.module.css';

type Ref = HTMLFormElement;
type Props = {
  value: string;
  onChange: (value: string) => void;
  onFilterSubmit: (event: React.FormEvent) => void;
  onFilterReset: () => void;
  isFilterApplied: boolean;
};
export const FilterForm = forwardRef<Ref, Props>(
  (
    { value, onFilterSubmit, onFilterReset, isFilterApplied, onChange },
    ref
  ) => (
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
      {Object.entries(Topics).map(([key, title]) => (
        <div key={key} className={styles.filterItem}>
          <label htmlFor={key}>
            <input
              type="radio"
              value={key}
              name="topic"
              id={key}
              onChange={onChange.bind(null, key)}
              checked={value === key}
            />
            {title}
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
