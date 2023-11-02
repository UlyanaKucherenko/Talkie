import style from './style.module.css';

const Header = () => (
  <header className={style.header}>
    <div className="container">
      <div className={style.header__content}>
        <div>Menu</div>
        <div>Logo</div>
        <div>Join</div>
      </div>
    </div>
  </header>
);

export default Header;
