type IconENProps = {
  state: 'hover' | 'active' | 'default';
  defaultColor?: 'light' | 'dark';
};

export const IconEN = ({
  state = 'default',
  defaultColor = 'light',
}: IconENProps) => {
  const iconFillDefault =
    defaultColor === 'light'
      ? 'var( --icon-lang-light)'
      : 'var(--icon-lang-dark)';
  let iconFill = iconFillDefault;

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
      iconFill = iconFillDefault;
      break;
    }
  }

  return (
    <svg
      width="42"
      height="24"
      viewBox="0 0 42 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.024 6.786V10.98H7.596V12.33H3.024V16.65H8.136V18H1.386V5.436H8.136V6.786H3.024ZM20.4785 18H18.8405L12.2525 8.01V18H10.6145V5.436H12.2525L18.8405 15.408V5.436H20.4785V18Z"
        fill={iconFill}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M29.7052 5.22127C29.937 4.98939 30.313 4.98939 30.5448 5.22127L36.4823 11.1588C36.7142 11.3906 36.7142 11.7666 36.4823 11.9985L30.5448 17.936C30.313 18.1678 29.937 18.1678 29.7052 17.936C29.4733 17.7041 29.4733 17.3281 29.7052 17.0963L35.2228 11.5786L29.7052 6.06096C29.4733 5.82908 29.4733 5.45314 29.7052 5.22127Z"
        fill={iconFill}
      />
    </svg>
  );
};
