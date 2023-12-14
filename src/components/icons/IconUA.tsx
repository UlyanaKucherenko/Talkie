type IconUAProps = {
  state: 'hover' | 'active' | 'default';
  defaultColor?: 'light' | 'dark';
};

export const IconUA = ({
  state = 'default',
  defaultColor = 'light',
}: IconUAProps) => {
  const iconFillDefault =
    defaultColor === 'light'
      ? 'var( --icon-theme-light)'
      : 'var(--icon-theme-dark)';
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
      width="44"
      height="24"
      viewBox="0 0 44 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.988 5.454V13.392C2.988 14.508 3.258 15.336 3.798 15.876C4.35 16.416 5.112 16.686 6.084 16.686C7.044 16.686 7.794 16.416 8.334 15.876C8.886 15.336 9.162 14.508 9.162 13.392V5.454H10.8V13.374C10.8 14.418 10.59 15.3 10.17 16.02C9.75 16.728 9.18 17.256 8.46 17.604C7.752 17.952 6.954 18.126 6.066 18.126C5.178 18.126 4.374 17.952 3.654 17.604C2.946 17.256 2.382 16.728 1.962 16.02C1.554 15.3 1.35 14.418 1.35 13.374V5.454H2.988ZM20.9485 15.21H15.4765L14.4685 18H12.7405L17.2765 5.526H19.1665L23.6845 18H21.9565L20.9485 15.21ZM20.4805 13.878L18.2125 7.542L15.9445 13.878H20.4805Z"
        fill={iconFill}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M31.7052 5.14266C31.937 4.91078 32.313 4.91078 32.5448 5.14266L38.4823 11.0802C38.7142 11.312 38.7142 11.688 38.4823 11.9198L32.5448 17.8573C32.313 18.0892 31.937 18.0892 31.7052 17.8573C31.4733 17.6255 31.4733 17.2495 31.7052 17.0177L37.2228 11.5L31.7052 5.98234C31.4733 5.75047 31.4733 5.37453 31.7052 5.14266Z"
        fill={iconFill}
      />
    </svg>
  );
};
