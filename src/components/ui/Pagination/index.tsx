import ReactPaginate from 'react-paginate';
import styles from './index.module.css';
import { IconPrevious } from '../../icons/IconPrevious';
import { IconNext } from '../../icons/IconNext';

type Selected = {
  selected: number;
};

type Props = {
  pageCount?: number;
  handlePageClick: (paginationData: Selected) => void;
};

export const Pagination = ({ pageCount = 0, handlePageClick }: Props) => (
  <div>
    {pageCount > 1 && (
      <ReactPaginate
        containerClassName={styles.pagination}
        activeClassName={styles.active}
        pageClassName={styles.pageItem}
        breakLabel="..."
        previousLabel={
          <button type="button" className={styles.arrowButton}>
            <IconPrevious />
          </button>
        }
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        nextLabel={
          <button type="button" className={styles.arrowButton}>
            <IconNext />
          </button>
        }
        renderOnZeroPageCount={null}
      />
    )}
  </div>
);
