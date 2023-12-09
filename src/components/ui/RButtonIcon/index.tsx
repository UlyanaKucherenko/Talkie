import { useState } from 'react';
import styles from './style.module.css';

type IconProps = {
  state: 'hover' | 'active' | 'default';
};

type RButtonIconProps = {
  children?: React.ReactNode;
  icon?: React.ComponentType<IconProps>;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  type?: 'submit' | 'button';
  disabled?: boolean;
};

export const RButtonIcon = ({
  children,
  icon: Icon,
  onClick,
  type = 'button',
  disabled = false,
}: RButtonIconProps) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  return (
    <button
      className={styles.button}
      type={type === 'submit' ? 'submit' : 'button'}
      onClick={onClick}
      disabled={disabled}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {Icon && <Icon state={isHovered ? 'hover' : 'default'} />}
      {children}
    </button>
  );
};
