import SiteNav from './SiteNav';
import Footer from './Footer';
import './Layout.css';

export default function Layout({ children }) {
  return (
    <div className="layout">
      <SiteNav />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
