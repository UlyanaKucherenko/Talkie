import { Outlet } from 'react-router-dom';

import Header from './header';
import Footer from './footer';
import Sidebar from '../Sidebar';
import style from './style.module.css';

const Layout = () => (
  <div className={style.layout}>
    <Header />
    <Sidebar />
    <main className={style.main}>
      <Outlet />
    </main>
    <Footer />
  </div>
);

export default Layout;
