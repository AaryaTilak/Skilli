import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import Logo from './Logo';

export default function AsideMenu() {
  const { isMobileMenuOpen, setIsMobileMenuOpen } = useApp();
  const navigate = useNavigate();
  const location = useLocation();
  const [activeDropdown, setActiveDropdown] = useState(null);

  const handleLinkClick = (path, e) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleDropdown = (name, e) => {
    e.preventDefault();
    setActiveDropdown(prev => (prev === name ? null : name));
  };

  const isActive = (path) => location.pathname === path;

  return (
    <>
      {/* Backdrop overlay */}
      {isMobileMenuOpen && (
        <div 
          onClick={() => setIsMobileMenuOpen(false)}
          className="fixed inset-0 z-[99999] bg-black/40 backdrop-blur-[3px]"
        />
      )}

      {/* Slide-out Drawer */}
      <div 
        className={`fixed top-0 left-0 z-[999999] h-screen w-72 bg-white dark:bg-dark p-6 overflow-y-auto transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
        } custom-scroll`}
      >
        <div className="flex items-center justify-between pb-6 border-b border-gray-100 dark:border-white/10 mb-6">
          <div onClick={(e) => handleLinkClick('/', e)}>
            <Logo light={false} />
          </div>
          <button 
            type="button" 
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-primary dark:text-white text-xl p-1 cursor-pointer flex items-center justify-center size-8 bg-light dark:bg-zinc-800 rounded"
            aria-label="Close Mobile Menu"
          >
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>

        <nav>
          <ul className="flex flex-col gap-4 font-base text-lg font-medium text-heading dark:text-white">
            <li>
              <a 
                href="#"
                onClick={(e) => handleLinkClick('/', e)}
                className={`block py-2 ${isActive('/') ? 'text-secondary' : 'hover:text-secondary'}`}
              >
                Home
              </a>
            </li>
            <li>
              <a 
                href="#"
                onClick={(e) => handleLinkClick('/about', e)}
                className={`block py-2 ${isActive('/about') ? 'text-secondary' : 'hover:text-secondary'}`}
              >
                About
              </a>
            </li>
            
            {/* Pages with Dropdown */}
            <li>
              <div className="flex items-center justify-between py-2">
                <a 
                  href="#"
                  onClick={(e) => e.preventDefault()}
                  className="hover:text-secondary"
                >
                  Pages
                </a>
                <button 
                  onClick={(e) => toggleDropdown('pages', e)}
                  className="p-1 text-sm bg-gray-100 dark:bg-zinc-800 rounded cursor-pointer"
                >
                  <i className={`fas ${activeDropdown === 'pages' ? 'fa-chevron-down' : 'fa-chevron-right'}`}></i>
                </button>
              </div>
              {activeDropdown === 'pages' && (
                <ul className="pl-4 mt-2 border-l-2 border-gray-100 dark:border-white/10 flex flex-col gap-2.5 text-base">
                  <li>
                    <a href="#" className="block py-1 hover:text-secondary" onClick={(e) => handleLinkClick('/services', e)}>Services</a>
                  </li>
                  <li>
                    <a href="#" className="block py-1 hover:text-secondary" onClick={(e) => handleLinkClick('/pricing', e)}>Pricing</a>
                  </li>
                  <li>
                    <a href="#" className="block py-1 hover:text-secondary" onClick={(e) => handleLinkClick('/faq', e)}>FAQ</a>
                  </li>
                  <li>
                    <a href="#" className="block py-1 hover:text-secondary" onClick={(e) => handleLinkClick('/compare', e)}>Compare</a>
                  </li>
                </ul>
              )}
            </li>

            <li>
              <a 
                href="#"
                onClick={(e) => handleLinkClick('/destinations', e)}
                className={`block py-2 ${isActive('/destinations') ? 'text-secondary' : 'hover:text-secondary'}`}
              >
                Destinations
              </a>
            </li>
            <li>
              <a 
                href="#"
                onClick={(e) => handleLinkClick('/tours', e)}
                className={`block py-2 ${isActive('/tours') ? 'text-secondary' : 'hover:text-secondary'}`}
              >
                Tours
              </a>
            </li>
            <li>
              <a 
                href="#"
                onClick={(e) => handleLinkClick('/blog', e)}
                className={`block py-2 ${isActive('/blog') ? 'text-secondary' : 'hover:text-secondary'}`}
              >
                Blogs
              </a>
            </li>
            <li>
              <a 
                href="#"
                onClick={(e) => handleLinkClick('/contact', e)}
                className={`block py-2 ${isActive('/contact') ? 'text-secondary' : 'hover:text-secondary'}`}
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>

        {/* Social Icons inside Mobile Menu */}
        <div className="mt-8 pt-8 border-t border-gray-100 dark:border-white/10 text-center">
          <ul className="flex justify-center gap-3">
            <li className="inline-block">
              <a 
                className="size-10 flex items-center justify-center border border-black/10 dark:border-white/10 rounded-full text-heading dark:text-white hover:bg-secondary hover:border-secondary duration-300"
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
            </li>
            <li className="inline-block">
              <a 
                className="size-10 flex items-center justify-center border border-black/10 dark:border-white/10 rounded-full text-heading dark:text-white hover:bg-secondary hover:border-secondary duration-300"
                href="https://www.x.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-x-twitter"></i>
              </a>
            </li>
            <li className="inline-block">
              <a 
                className="size-10 flex items-center justify-center border border-black/10 dark:border-white/10 rounded-full text-heading dark:text-white hover:bg-secondary hover:border-secondary duration-300"
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-instagram"></i>
              </a>
            </li>
            <li className="inline-block">
              <a 
                className="size-10 flex items-center justify-center border border-black/10 dark:border-white/10 rounded-full text-heading dark:text-white hover:bg-secondary hover:border-secondary duration-300"
                href="https://www.pinterest.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-pinterest"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
