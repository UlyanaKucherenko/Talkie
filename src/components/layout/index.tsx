import Header from './header';
import Footer from './footer';
import style from './style.module.css';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => (
  <>
    <Header />
    <main className={style.main}>
      <div className="container">{children}</div>
    </main>
    <Footer />
  </>
);

export default Layout;
