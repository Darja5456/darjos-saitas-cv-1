import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar/Navbar.jsx';
import { useLang } from '../../i18n/LangContext';
import './Layout.css';

export default function Layout() {
  const { t } = useLang();
  return (
    <div className="site-wrapper">
      <Navbar />
      <main><Outlet /></main>
      <footer className="site-footer">
        <span className="footer-script">Darja</span>
        <p>© 2026 · {t.footer}</p>
      </footer>
    </div>
  );
}