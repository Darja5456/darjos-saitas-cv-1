import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useLang } from '../../i18n/LangContext';
import './Navbar.css';

const LANGS = ['lt', 'ru', 'en'];

export default function Navbar() {
  const { lang, setLang, t } = useLang();
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar">
      <NavLink to="/" className="nav-logo" onClick={() => setOpen(false)}>
        <span className="logo-script">Darja</span>
        <span className="logo-sub">NAIL MASTER</span>
      </NavLink>

      <nav className={`nav-links ${open ? 'is-open' : ''}`}>
        <NavLink to="/" end onClick={() => setOpen(false)}>{t.nav.home}</NavLink>
        <NavLink to="/about" onClick={() => setOpen(false)}>{t.nav.about}</NavLink>
        <NavLink to="/contact" onClick={() => setOpen(false)}>{t.nav.contact}</NavLink>
      </nav>

      <div className="navbar-right">
        <div className="lang-switcher">
          {LANGS.map(l => (
            <button
              key={l}
              className={`lang-btn ${lang === l ? 'active' : ''}`}
              onClick={() => setLang(l)}
            >
              {l.toUpperCase()}
            </button>
          ))}
        </div>
        <button
          className={`burger ${open ? 'is-open' : ''}`}
          onClick={() => setOpen(o => !o)}
          aria-label="Meniu"
        >
          <span /><span /><span />
        </button>
      </div>
    </header>
  );
}