import { Outlet } from 'react-router-dom';

import { useState } from 'react';
import Header from './header';
import Footer from './footer';
import Sidebar from '../Sidebar';
import style from './style.module.css';

const Layout = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const openMenu = () => {
    setMenuOpen(true);
  };
  const closeMenu = () => {
    setMenuOpen(false);
  };
  return (
    <div className={style.layout}>
      <Header openMenu={openMenu} />
      <Sidebar menuOpen={menuOpen} closeMenu={closeMenu} />
      <main className={style.main}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
