import { ReactNode, useEffect, useState } from 'react';

import styles from './index.module.css';
import { IconArrowUp } from '../icons/IconArrowUp';

type RAccordionProps = {
  title: string;
  children: ReactNode;
  storageKey?: string;
  initialState?: boolean;
};

export const RAccordion = ({
  title,
  children,
  storageKey,
  initialState = true,
}: RAccordionProps) => {
  const [isOpen, setOpen] = useState<boolean>(() => {
    if (storageKey) {
      const storedState = localStorage.getItem(storageKey);
      return storedState ? JSON.parse(storedState) : initialState;
    }
    return initialState;
  });

  useEffect(() => {
    if (storageKey) {
      localStorage.setItem(storageKey, JSON.stringify(isOpen));
    }
  }, [isOpen, storageKey]);

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
