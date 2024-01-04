import { ReactNode, useState } from 'react';

import styles from './index.module.css';
import { IconArrowUp } from '../icons/IconArrowUp';

type RAccordionProps = {
  title: string;
  children: ReactNode;
};

export const RAccordion = ({ title, children }: RAccordionProps) => {
  const [isOpen, setOpen] = useState<boolean>(true);

  const toggleAccordion = () => {
    setOpen(!isOpen);
  };

  const iconRotationStyle = {
    transform: isOpen ? 'rotate(0deg)' : 'rotate(180deg)',
    transition: 'transform 0.5s ease',
    color: 'var(--font-main-color)',
  };

  return (
    <div className="accordionWrapper">
      <button
        type="button"
        className={`${styles.accordionTitle} ${isOpen ? styles.open : ''}`}
        onClick={toggleAccordion}
        aria-expanded={isOpen}
      >
        <h2>{title}</h2>
        <div style={iconRotationStyle}>
          <IconArrowUp />
        </div>
      </button>
      <div
        className={`${styles.accordionBody} ${!isOpen ? styles.collapsed : ''}`}
      >
        {children}
      </div>
    </div>
  );
};
