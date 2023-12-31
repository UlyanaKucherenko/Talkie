import { IconSearch } from '../icons/IconSearch';
import styles from './index.module.css';

type Props = {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};
export const Search = ({ onChange }: Props) => (
  <div className={styles.searchWrap}>
    <input
      className={styles.searchInput}
      type="text"
      placeholder="Search ..."
      onChange={onChange}
    />
    <div className={styles.searchIcon}>
      <IconSearch />
    </div>
  </div>
);
