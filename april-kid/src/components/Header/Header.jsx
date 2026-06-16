import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Header.css'

const navLinks = [
  { label: 'HOME', to: '/' },
  { label: 'SHOP', to: '/shop' },
  { label: 'BLOGS', to: '/blogs' },
  { label: 'ABOUT US', to: '/about' },
  { label: 'CONTACT US', to: '/contact' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`site-header${scrolled ? ' scrolled' : ''}`}>
      {/* ── Top Bar: social + logo + cart ── */}
      <div className="header-top">
        <div className="container header-top__inner">
          {/* Social icons left */}
          <div className="header-social">
            <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/></svg>
            </a>
            <a href="https://plus.google.com" target="_blank" rel="noreferrer" aria-label="Google">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 12h4.5c-.45 2.1-2.25 3.5-4.5 3.5-2.75 0-5-2.25-5-5s2.25-5 5-5c1.3 0 2.45.5 3.35 1.3l2.15-2.15C16.15 3 14.2 2 12 2 6.5 2 2 6.5 2 12s4.5 10 10 10c5.6 0 9.5-3.95 9.5-9.75 0-.65-.05-1.25-.15-1.25H12v1z"/></svg>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" fill="#fff"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" stroke="#fff" strokeWidth="2"/></svg>
            </a>
          </div>

          {/* Logo center */}
          <Link to="/" className="site-logo">
            <img src="/images/logo.png?v=2" alt="SkilliKid Store" />
          </Link>

          {/* Right: search + cart */}
          <div className="header-right">
            <button
              className="icon-btn"
              aria-label="Search"
              id="search-toggle-btn"
              onClick={() => setSearchOpen(o => !o)}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>
            </button>
            <Link to="/cart" className="icon-btn cart-btn" aria-label="Cart" id="cart-icon-link">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 001.94 1.61h9.72a2 2 0 001.94-1.61L23 6H6"/></svg>
              <span className="cart-count">0</span>
            </Link>
            {/* Hamburger (mobile) */}
            <button
              className={`hamburger${menuOpen ? ' open' : ''}`}
              id="mobile-menu-btn"
              onClick={() => setMenuOpen(o => !o)}
              aria-label="Menu"
            >
              <span /><span /><span />
            </button>
          </div>
        </div>

        {/* Search bar */}
        {searchOpen && (
          <div className="header-search-bar">
            <div className="container">
              <input
                type="text"
                id="header-search-input"
                placeholder="Search for products…"
                autoFocus
              />
              <button onClick={() => setSearchOpen(false)} className="search-close" aria-label="Close search">✕</button>
            </div>
          </div>
        )}
      </div>

      {/* ── Nav Bar ── */}
      <nav className={`site-nav${menuOpen ? ' open' : ''}`} role="navigation" aria-label="Main navigation">
        <div className="container">
          <ul className="nav-list" id="main-nav-list">
            {navLinks.map(link => (
              <li key={link.to} className="nav-item">
                <NavLink
                  to={link.to}
                  className={({ isActive }) => 'nav-link' + (isActive ? ' active' : '')}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  )
}
