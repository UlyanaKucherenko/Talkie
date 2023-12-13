type IconMenuProps = {
  state: 'hover' | 'active' | 'default';
};

export const IconMenu = ({ state = 'default' }: IconMenuProps) => {
  let iconFill = 'var(--dark-white)';

  switch (state) {
    case 'hover': {
      iconFill = 'var(--clean-pool)';
      break;
    }
    case 'active': {
      iconFill = 'var(--clean-pool)';
      break;
    }
    default: {
      iconFill = 'var(--dark-white)';
      break;
    }
  }

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M17.8933 6H1.40479"
        stroke={iconFill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.8933 12H1.40479"
        stroke={iconFill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.8933 18H1.40479"
        stroke={iconFill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
