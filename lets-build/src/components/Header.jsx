import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { Phone, Menu, X, Activity } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const handleBookClick = () => {
    closeMenu();
    navigate('/contact');
    setTimeout(() => {
      const element = document.getElementById('appointment-form');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <header className={`site-header ${scrolled ? 'header-scrolled' : ''}`}>
      <div className="container header-container">
        <NavLink to="/" className="logo" onClick={closeMenu}>
          <img src="/logo.png" alt="Meddic Logo" className="logo-img" />
          <span>Meddic</span>
        </NavLink>

        <nav className="desktop-nav">
          <NavLink to="/" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
            Home
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
            About Us
          </NavLink>
          <NavLink to="/services" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
            Services
          </NavLink>
          <NavLink to="/contact" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
            Contact
          </NavLink>
        </nav>

        <div className="header-actions">
          <a href="tel:+18005550199" className="emergency-call">
            <span className="call-icon-wrapper">
              <Phone className="call-icon" size={18} />
            </span>
            <div className="call-text">
              <span className="call-label">Emergency Call</span>
              <span className="call-number">+1 (800) 555-0199</span>
            </div>
          </a>

          <button className="btn btn-primary header-cta" onClick={handleBookClick}>
            Book Appointment
          </button>
        </div>

        <button className="mobile-toggle" onClick={toggleMenu} aria-label="Toggle Menu">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      <div className={`mobile-drawer ${isOpen ? 'drawer-open' : ''}`}>
        <nav className="mobile-nav">
          <NavLink to="/" className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`} onClick={closeMenu}>
            Home
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`} onClick={closeMenu}>
            About Us
          </NavLink>
          <NavLink to="/services" className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`} onClick={closeMenu}>
            Services
          </NavLink>
          <NavLink to="/contact" className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`} onClick={closeMenu}>
            Contact
          </NavLink>
          
          <div className="mobile-drawer-footer">
            <a href="tel:+18005550199" className="emergency-call-mobile">
              <Phone size={18} />
              <span>+1 (800) 555-0199</span>
            </a>
            <button className="btn btn-primary w-full" onClick={handleBookClick}>
              Book Appointment
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}
