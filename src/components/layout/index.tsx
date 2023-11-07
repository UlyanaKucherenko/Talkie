import { Outlet } from 'react-router-dom';

import Header from './header';
import Footer from './footer';
import style from './style.module.css';
import Sidebar from '../Sidebar';

const Layout = () => (
  <div className="layout">
    <Header />
    <Sidebar />
    <main className={style.main}>
      <Outlet />
    </main>
    <Footer />
  </div>
);

export default Layout;
