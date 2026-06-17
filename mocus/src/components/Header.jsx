import { useState, useEffect } from 'react';

const MENU_ITEMS = [
  { label: 'About', href: '#about' },
  { label: 'Skilli', href: '#' },
  { label: 'Contact', href: '#download' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`site-header${scrolled ? ' scrolled' : ''}`}>
      <div className="container-default header-inner">
        {/* Logo */}
        <a href="#" className="header-logo" onClick={e => e.preventDefault()} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <img
            src="/assets/img/logo-yellow-dark.jpg"
            alt="SplitLoop Logo"
            style={{ width: '32px', height: '32px', borderRadius: '8px', display: 'block' }}
          />
          <span style={{ fontSize: '22px', fontWeight: 800, color: 'var(--color-black)', fontFamily: 'var(--font-main)' }}>SplitLoop</span>
        </a>

        {/* Desktop Nav */}
        <nav className="desktop-nav" aria-label="Main navigation">
          {MENU_ITEMS.map(item => (
            <div key={item.label} className="desktop-nav-item">
              <a
                href={item.href}
                className="nav-link"
                onClick={e => item.href === '#' && e.preventDefault()}
              >
                {item.label}
              </a>
            </div>
          ))}
        </nav>

        {/* Actions */}
        <div className="header-actions">
          <a
            href="#download"
            className="btn-yellow"
            id="header-download-btn"
          >
            <div className="btn-yellow-inner" style={{ padding: '10px 24px', fontSize: '15px' }}>
              Download App
            </div>
            <div className="btn-yellow-shadow"></div>
          </a>

          <button
            className={`hamburger${menuOpen ? ' open' : ''}`}
            onClick={() => setMenuOpen(v => !v)}
            aria-label="Toggle menu"
            id="hamburger-btn"
          >
            <span /><span /><span />
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <nav className={`mobile-nav${menuOpen ? ' open' : ''}`} aria-label="Mobile navigation">
        {MENU_ITEMS.map(item => (
          <div key={item.label} style={{ borderBottom: '1px solid var(--color-border)' }}>
            <a
              href={item.href}
              className="mobile-nav-link"
              onClick={e => {
                if (item.href === '#') e.preventDefault();
                setMenuOpen(false);
              }}
            >
              {item.label}
            </a>
          </div>
        ))}
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '20px' }}>
          <a
            href="#download"
            className="btn-yellow mobile-nav-cta"
            onClick={() => setMenuOpen(false)}
          >
            <div className="btn-yellow-inner" style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
              Download App
            </div>
            <div className="btn-yellow-shadow"></div>
          </a>
        </div>
      </nav>
    </header>
  );
}

