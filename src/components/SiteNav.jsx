import { useState } from 'react';
import { Link } from 'react-router-dom';
import './SiteNav.css';

const LINKS = [
  { to: '/#home', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/#services', label: 'Services' },
  { to: '/portfolio', label: 'Portfolio' },
  { to: '/contact', label: 'Contact' },
];

// Hash anchors (homepage sections) and real page routes both go through
// <Link> so navigation is client-side from anywhere on the site; ScrollToTop
// handles jumping to the right section once the homepage has rendered.
function NavItem({ to, label, className, onClick }) {
  return (
    <Link to={to} className={className} onClick={onClick}>
      {label}
    </Link>
  );
}

export default function SiteNav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-nav">
      <NavItem
        to="/#home"
        className="site-nav-logo"
        label={
          <>
            <span className="site-nav-logo-name">Charlotte Siemianowicz</span>
            <span className="site-nav-logo-tagline">Social &middot; Strategy &middot; Story</span>
          </>
        }
      />

      <nav className="site-nav-links">
        {LINKS.map((link) => (
          <NavItem key={link.to} to={link.to} label={link.label} className="site-nav-link" />
        ))}
      </nav>

      <div className="site-nav-right">
        <NavItem to="/contact" className="site-nav-cta" label="Let's talk" />

        <button
          type="button"
          className={menuOpen ? 'site-nav-burger is-open' : 'site-nav-burger'}
          onClick={() => setMenuOpen((open) => !open)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {menuOpen && (
        <nav className="site-nav-mobile-menu">
          {LINKS.map((link) => (
            <NavItem
              key={link.to}
              to={link.to}
              label={link.label}
              className="site-nav-mobile-link"
              onClick={() => setMenuOpen(false)}
            />
          ))}
        </nav>
      )}
    </header>
  );
}
