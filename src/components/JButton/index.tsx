import styles from './style.module.css';

type JButtonProps = {
  size?: 'large' | 'small';
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  type?: 'submit' | 'button';
  disabled?: boolean;
};

export const JButton = ({
  size,
  children,
  onClick,
  type,
  disabled = false,
}: JButtonProps) => (
  <button
    className={
      size === 'large' ? `${styles.button} ${styles.large}` : styles.button
    }
    type={type === 'submit' ? 'submit' : 'button'}
    onClick={onClick}
    disabled={disabled}
  >
    {children}
  </button>
);
