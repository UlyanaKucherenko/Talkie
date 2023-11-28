import styles from './style.module.css';

type JButtonProps = {
  size?: 'large' | 'medium' | 'small';
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  type?: 'submit' | 'button';
  disabled?: boolean;
  className?: string;
  color?: 'primary' | 'secondary';
};

export const RButton = ({
  size = 'small',
  children,
  onClick,
  className,
  type,
  disabled = false,
  color = 'primary',
}: JButtonProps) => {
  let classNameRButton = styles.button;

  if (size) {
    classNameRButton = `${classNameRButton} ${styles[size]}`;
  }

  if (color) {
    classNameRButton = `${classNameRButton} ${styles[color]}`;
  }

  if (className) {
    classNameRButton = `${classNameRButton} ${className}`;
  }

  return (
    <button
      className={classNameRButton}
      type={type === 'submit' ? 'submit' : 'button'}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
