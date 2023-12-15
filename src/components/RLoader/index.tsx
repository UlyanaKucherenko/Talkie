import styles from './index.module.css';

type RLoaderProps = {
  className?: string;
  css?: {};
  size?: 'sm' | 'md';
};

const sizeLoader = {
  sm: '24px',
  md: '48px',
};

function RLoader({ className, css, size = 'md' }: RLoaderProps) {
  let classNameRButton = styles.loader;
  if (className) {
    classNameRButton = `${classNameRButton} ${className}`;
  }
  const stylesLouder = {
    ...css,
    width: sizeLoader[size],
    height: sizeLoader[size],
  };
  return <div className={classNameRButton} style={stylesLouder} />;
}

export { RLoader };
