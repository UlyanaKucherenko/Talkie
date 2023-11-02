import style from './style.module.css';

export default function Header() {
  return (
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
}
