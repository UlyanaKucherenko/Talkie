import { Search } from '../Search';
import { Filter } from '../Filter';
import { Topic } from '../../utils/enums/topic.enum';
import styles from './index.module.css';

type TopicState = typeof Topic | '';
type Props = {
  onFilterSubmit: (value: TopicState) => void;
  onSearchChange: (value: string) => void;
};

export const SearchFilter = ({ onFilterSubmit, onSearchChange }: Props) => (
  <div className={styles.searchFilter}>
    <Search onChange={onSearchChange} />
    <Filter onSubmit={onFilterSubmit} />
  </div>
);
