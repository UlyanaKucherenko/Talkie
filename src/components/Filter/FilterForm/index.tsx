import React, { forwardRef } from 'react';

import { Topic } from '../../../utils/enums/topic.enum';
import styles from './index.module.css';
import { RButton } from '../../RButton';

type Topics = Record<Topic, string>;

const TopicsValue: Topics = {
  HEALTHY_HABITS: 'Healthy habits',
  EXERCISES: 'Exercises',
  MENTAL_HEALTH: 'Mental Health',
  NUTRITION: 'Nutrition',
  PREVENTION: 'Prevention',
};

type Ref = HTMLFormElement;

export const FilterForm = forwardRef<Ref>((_, ref) => {
  const filterChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
  };
  return (
    <form className={styles.filterMenu} ref={ref}>
      {Object.entries(TopicsValue).map(([key, value]) => (
        <div key={key} className={styles.filterItem}>
          <label htmlFor={key}>
            <input
              type="radio"
              value={key}
              name="topic"
              id={key}
              onChange={filterChangeHandler}
            />
            {value}
          </label>
        </div>
      ))}
      <div className={styles.formAction}>
        <RButton color="secondary">Apply</RButton>
      </div>
    </form>
  );
});
