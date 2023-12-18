import { useState } from 'react';
import styles from './style.module.css';

type IconProps = {
  state: 'hover' | 'active' | 'default';
  defaultColor: 'light' | 'dark';
};

type RButtonIconProps = {
  children?: React.ReactNode;
  icon?: React.ComponentType<IconProps>;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  type?: 'submit' | 'button';
  disabled?: boolean;
  className?: string;
  defaultColorIcon?: 'light' | 'dark';
};

export const RButtonIcon = ({
  children,
  icon: Icon,
  onClick,
  type = 'button',
  disabled = false,
  className,
  defaultColorIcon = 'light',
}: RButtonIconProps) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  let classNameRButton = styles.button;
  if (className) {
    classNameRButton = `${classNameRButton} ${className}`;
  }
  return (
    <button
      className={classNameRButton}
      type={type === 'submit' ? 'submit' : 'button'}
      onClick={onClick}
      disabled={disabled}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {Icon && (
        <Icon
          state={isHovered ? 'hover' : 'default'}
          defaultColor={defaultColorIcon}
        />
      )}
      {children}
    </button>
  );
};
