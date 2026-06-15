import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import './Footer.css';

export default function Footer() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Subscribed: ${email}`);
    setEmail('');
  };

  return (
    <footer className="footer">
      <div className="container footer-top">
        <div className="footer-brand">
          <Link to="/" className="footer-logo">
            <svg className="logo-icon" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 30L50 85L80 30" stroke="var(--secondary-color)" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M35 25L50 65L65 25" stroke="var(--primary-color)" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" opacity="0.8" />
              <circle cx="50" cy="42" r="18" fill="#ccff00" />
              <path d="M39 37Q50 45 61 37" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" fill="none" />
              <path d="M39 47Q50 39 61 47" stroke="#ffffff" stroke-width="2" strokeLinecap="round" fill="none" />
            </svg>
            Vantage<span>Court</span>
          </Link>
          <p className="footer-tagline">
            Premium tennis club and court rental since 2021. Empowering players of all levels to enjoy the game.
          </p>
          <div className="footer-socials">
            <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">
              <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter">
              <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
            </a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook">
              <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
            </a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer" aria-label="YouTube">
              <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.41 19c1.71.46 8.59.46 8.59.46s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
            </a>
          </div>
        </div>

        <div className="footer-links-grid">
          <div className="footer-links-column">
            <h4>Explore</h4>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/courts">Service</Link>
            <Link to="/matches">Pages</Link>
            <Link to="/contact">Contact Us</Link>
          </div>
          <div className="footer-links-column">
            <h4>Resources</h4>
            <a href="#community">Community</a>
            <a href="#tutorials">Tutorials</a>
            <a href="#docs">Documentation</a>
            <a href="#security">Security</a>
          </div>
        </div>

        <div className="footer-newsletter">
          <h4>Get In Touch!</h4>
          <p>Have questions or need assistance? We're here to help!</p>
          <form className="footer-form" onSubmit={handleSubmit}>
            <input 
              type="email" 
              placeholder="Your email address" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required 
              className="footer-input"
            />
            <button type="submit" className="footer-btn" aria-label="Subscribe">
              <ArrowRight size={18} />
            </button>
          </form>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-container">
          <p>Copyright © 2026 Vantage Court. All Rights Reserved.</p>
          <p>Developed with 💚 by <a href="https://skilli.in" target="_blank" rel="noreferrer" className="footer-credit-link">skilli.in</a></p>
        </div>
      </div>
    </footer>
  );
}
