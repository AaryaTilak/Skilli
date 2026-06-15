import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import './Navbar.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled glass' : ''}`}>
      <div className="container navbar-container">
        <Link to="/" className="navbar-logo" onClick={() => setIsOpen(false)}>
          <svg className="logo-icon" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 30L50 85L80 30" stroke="var(--secondary-color)" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M35 25L50 65L65 25" stroke="var(--primary-color)" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" opacity="0.8" />
            <circle cx="50" cy="42" r="18" fill="#ccff00" />
            <path d="M39 37Q50 45 61 37" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" fill="none" />
            <path d="M39 47Q50 39 61 47" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" fill="none" />
          </svg>
          Vantage<span>Court</span>
        </Link>

        {/* Desktop Links */}
        <div className="navbar-links">
          <NavLink to="/" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
            Home
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
            About Us
          </NavLink>
          <NavLink to="/courts" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
            Courts
          </NavLink>
          <NavLink to="/matches" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
            Match Strategy
          </NavLink>
          <NavLink to="/pricing" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
            Pricing
          </NavLink>
          <NavLink to="/contact" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
            Contact
          </NavLink>
        </div>

        <div className="navbar-cta">
          <Link to="/contact" className="btn-primary btn-navbar">
            Contact Us <ArrowUpRight size={18} />
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button className="mobile-toggle" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle navigation">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Links Overlay */}
      {isOpen && (
        <div className="mobile-menu animate-fade-in">
          <NavLink to="/" className={({ isActive }) => `mobile-link ${isActive ? 'active' : ''}`} onClick={() => setIsOpen(false)}>
            Home
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => `mobile-link ${isActive ? 'active' : ''}`} onClick={() => setIsOpen(false)}>
            About Us
          </NavLink>
          <NavLink to="/courts" className={({ isActive }) => `mobile-link ${isActive ? 'active' : ''}`} onClick={() => setIsOpen(false)}>
            Courts
          </NavLink>
          <NavLink to="/matches" className={({ isActive }) => `mobile-link ${isActive ? 'active' : ''}`} onClick={() => setIsOpen(false)}>
            Match Strategy
          </NavLink>
          <NavLink to="/pricing" className={({ isActive }) => `mobile-link ${isActive ? 'active' : ''}`} onClick={() => setIsOpen(false)}>
            Pricing
          </NavLink>
          <NavLink to="/contact" className={({ isActive }) => `mobile-link ${isActive ? 'active' : ''}`} onClick={() => setIsOpen(false)}>
            Contact
          </NavLink>
          <div className="mobile-menu-cta">
            <Link to="/contact" className="btn-primary" onClick={() => setIsOpen(false)}>
              Contact Us <ArrowUpRight size={18} />
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
