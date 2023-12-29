import styles from './index.module.css';

type RListIsEmptyProps = {
  children?: React.ReactNode;
};

export const RListIsEmpty = ({ children }: RListIsEmptyProps) => (
  <div className={styles.wrap}>{children || 'List is empty'}</div>
);
