import { Outlet } from 'react-router-dom';

import { useState, useRef } from 'react';
import Header from './header';
import Footer from './footer';
import Sidebar from '../Sidebar';
import { useClickOutside } from '../../hooks/use-click-outside';

import style from './style.module.css';

const Layout = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const sidebarRef = useRef(null);
  const openMenu = () => {
    setMenuOpen(true);
  };
  const closeMenu = () => {
    setMenuOpen(false);
  };

  useClickOutside(sidebarRef, closeMenu);

  return (
    <div className={style.layout}>
      <Header openMenu={openMenu} />
      <Sidebar menuOpen={menuOpen} closeMenu={closeMenu} ref={sidebarRef} />
      <main className={style.main}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
