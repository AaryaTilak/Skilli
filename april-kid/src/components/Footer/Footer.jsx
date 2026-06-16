import { Link } from 'react-router-dom'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        {/* Logo + copyright */}
        <div className="footer-col footer-col--brand">
          <Link to="/" className="footer-logo">
            <img src="/images/logo.png?v=4" alt="SkilliKid Store" />
          </Link>
          <p className="footer-copyright">
            Copyright © 2025 SkilliKid Store<br />All Rights Reserved
          </p>
        </div>

        {/* About */}
        <div className="footer-col">
          <h4 className="footer-col__title">About SkilliKid</h4>
          <ul className="footer-links">
            <li><Link to="/about">About us</Link></li>
            <li><Link to="/contact">Offices</Link></li>
            <li><Link to="/about">Work with us</Link></li>
            <li><Link to="/about">Our policies</Link></li>
            <li><Link to="/about">Affinity Card</Link></li>
          </ul>
        </div>

        {/* Shop Guide */}
        <div className="footer-col">
          <h4 className="footer-col__title">Shop Guide</h4>
          <ul className="footer-links">
            <li><Link to="/shop">Payments</Link></li>
            <li><Link to="/shop">Returns</Link></li>
            <li><Link to="/shop">Gift Card</Link></li>
            <li><Link to="/shop">Guest purchase</Link></li>
            <li><Link to="/shop">Terms &amp; Conditions</Link></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="footer-col footer-col--newsletter">
          <h4 className="footer-col__title">Newsletter</h4>
          <p className="footer-newsletter-label">SUBSCRIBE TO OUR NEWSLETTER</p>
          <form
            className="footer-subscribe"
            onSubmit={e => { e.preventDefault(); alert('Subscribed!'); }}
            id="footer-newsletter-form"
          >
            <input
              type="email"
              id="footer-email-input"
              placeholder="Enter your email"
              required
            />
            <button type="submit" aria-label="Subscribe">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
            </button>
          </form>

          {/* Social */}
          <div className="footer-social">
            <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/></svg>
            </a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" fill="#fff"/></svg>
            </a>
            <a href="https://flickr.com" target="_blank" rel="noreferrer" aria-label="Flickr">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><circle cx="7" cy="12" r="4"/><circle cx="17" cy="12" r="4" fill="#0063dc"/></svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
