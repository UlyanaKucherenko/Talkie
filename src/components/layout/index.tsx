import Header from './header';
import Footer from './footer';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => (
  <>
    <Header />
    <main>
      <div className="container">{children}</div>
    </main>
    <Footer />
  </>
);

export default Layout;
