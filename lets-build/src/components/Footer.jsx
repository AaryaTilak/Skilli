import React from 'react';
import { NavLink } from 'react-router-dom';
import { Activity, MapPin, Mail, Phone, Clock } from 'lucide-react';

export default function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        {/* Col 1: About Clinic */}
        <div className="footer-col brand-col">
          <NavLink to="/" className="footer-logo" onClick={handleScrollToTop}>
            <img src="/logo.png" alt="Meddic Logo" className="logo-img" />
            <span>Meddic</span>
          </NavLink>
          <p className="footer-desc">
            Providing high-quality, compassionate healthcare services to our community. Our team of expert medical professionals is dedicated to your well-being.
          </p>
          <div className="social-links">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Facebook">
              <svg fill="currentColor" viewBox="0 0 24 24" width="18" height="18">
                <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z"/>
              </svg>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Twitter">
              <svg fill="currentColor" viewBox="0 0 24 24" width="16" height="16">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn">
              <svg fill="currentColor" viewBox="0 0 24 24" width="18" height="18">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
              </svg>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Instagram">
              <svg fill="currentColor" viewBox="0 0 24 24" width="18" height="18">
                <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8A3.6 3.6 0 0 0 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6A3.6 3.6 0 0 0 16.4 4H7.6m8.4 4.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2M12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10m0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Col 2: Navigation Links */}
        <div className="footer-col">
          <h3>Quick Links</h3>
          <ul className="footer-links">
            <li>
              <NavLink to="/" onClick={handleScrollToTop}>Home</NavLink>
            </li>
            <li>
              <NavLink to="/about" onClick={handleScrollToTop}>About Us</NavLink>
            </li>
            <li>
              <NavLink to="/services" onClick={handleScrollToTop}>Our Services</NavLink>
            </li>
            <li>
              <NavLink to="/contact" onClick={handleScrollToTop}>Contact Us</NavLink>
            </li>
          </ul>
        </div>

        {/* Col 3: Services */}
        <div className="footer-col">
          <h3>Specialities</h3>
          <ul className="footer-links">
            <li>
              <NavLink to="/services" onClick={handleScrollToTop}>Cardiology Care</NavLink>
            </li>
            <li>
              <NavLink to="/services" onClick={handleScrollToTop}>Orthopedics</NavLink>
            </li>
            <li>
              <NavLink to="/services" onClick={handleScrollToTop}>Neurology Department</NavLink>
            </li>
            <li>
              <NavLink to="/services" onClick={handleScrollToTop}>Pediatric Medicine</NavLink>
            </li>
            <li>
              <NavLink to="/services" onClick={handleScrollToTop}>General Practice</NavLink>
            </li>
          </ul>
        </div>

        {/* Col 4: Contact Info & Opening Hours */}
        <div className="footer-col contact-col">
          <h3>Contact Info</h3>
          <ul className="contact-details">
            <li>
              <MapPin className="contact-icon" size={18} />
              <span>123 Medical Park Lane, Suite 100, New York, NY 10001</span>
            </li>
            <li>
              <Mail className="contact-icon" size={18} />
              <span>info@meddic-clinic.com</span>
            </li>
            <li>
              <Phone className="contact-icon" size={18} />
              <span>+1 (800) 555-0199</span>
            </li>
            <li>
              <Clock className="contact-icon" size={18} />
              <div>
                <strong>Mon - Fri:</strong> 8:00 AM - 8:00 PM<br />
                <strong>Sat - Sun:</strong> 9:00 AM - 5:00 PM
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="footer-bottom">
        <div className="container footer-bottom-content">
          <p>&copy; {new Date().getFullYear()} Meddic Clinic. All rights reserved.</p>
          <div className="footer-bottom-links">
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
