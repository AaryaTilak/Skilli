import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import Logo from './Logo';

export default function Header() {
  const [isFixed, setIsFixed] = useState(false);
  const { 
    theme, 
    toggleTheme, 
    setIsMobileMenuOpen, 
    setIsAsideInfoOpen, 
    setIsSearchOpen 
  } = useApp();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (path, e) => {
    e.preventDefault();
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Helper to check if a route is active
  const isActive = (path) => location.pathname === path;

  return (
    <header className={`site-header sticky-header absolute lg:left-8.75 lg:right-8.75 lg:top-8.75 left-0 right-0 top-0 duration-500 z-999 ${isFixed ? 'fixed animate-header-scroll-animation bg-primary rounded-b-3xl !top-0 !left-0 !right-0' : ''}`}>
      <div className="main-bar-wraper">
        <div className="w-full lg:min-h-30 min-h-20 lg:ps-8.75 px-4 lg:pe-13.75 duration-500 rounded-5xl flex items-center justify-between">
          <div className="flex relative w-full items-center justify-between">
            {/* Logo Section */}
            <div className="flex items-center relative z-9 h-20 lg:w-44 w-30" onClick={(e) => handleLinkClick('/', e)}>
              <Logo light={true} />
            </div>

            {/* Desktop Navigation Links */}
            <div className="flex lg:justify-center lg:basis-auto lg:grow max-lg:hidden justify-start font-base header-nav">
              <ul className="lg:flex flex-wrap navbar-nav">
                <li className="lg:inline-block block relative group">
                  <a 
                    className={`lg:py-7.5 py-2 xl:px-5 lg:px-2 relative lg:inline-block block text-lg font-medium text-white hover:text-secondary ${isActive('/') ? 'text-secondary' : ''}`} 
                    href="#"
                    onClick={(e) => handleLinkClick('/', e)}
                  >
                    <span className="inline-block">Home</span>
                  </a>
                </li>
                <li className="lg:inline-block block relative group">
                  <a 
                    className={`lg:py-7.5 py-2 xl:px-5 lg:px-2 relative lg:inline-block block text-lg font-medium text-white hover:text-secondary ${isActive('/about') ? 'text-secondary' : ''}`} 
                    href="#"
                    onClick={(e) => handleLinkClick('/about', e)}
                  >
                    <span className="inline-block">About</span>
                  </a>
                </li>
                
                {/* Pages Dropdown */}
                <li className="lg:inline-block block relative group">
                  <a 
                    className="lg:py-7.5 py-2 xl:px-5 lg:px-2 relative lg:inline-block block text-lg font-medium text-white hover:text-secondary after:ml-1 after:-mt-1 after:inline-block after:size-2.5 after:bg-[url('/assets/images/arrow-down.png')] after:bg-no-repeat after:bg-bottom" 
                    href="#" 
                    onClick={(e) => e.preventDefault()}
                  >
                    <span className="inline-block">Pages</span>
                  </a>
                  <ul className="lg:absolute bg-white dark:bg-dark lg:rounded-xxl block lg:left-0 w-full lg:w-55 lg:opacity-0 lg:invisible lg:translate-y-10 z-10 mt-0 text-left duration-500 lg:group-hover:opacity-100 lg:group-hover:visible lg:group-hover:translate-y-0 sub-menu shadow-lg">
                    <li className="relative border-b border-black/5 dark:border-white/10">
                      <a className="block relative text-sm text-heading dark:text-white font-semibold py-3 lg:px-5 duration-500 hover:text-primary dark:hover:text-paleaqua hover:pl-6.25" href="#" onClick={(e) => handleLinkClick('/services', e)}>
                        <span>Services</span>
                      </a>
                    </li>
                    <li className="relative border-b border-black/5 dark:border-white/10">
                      <a className="block relative text-sm text-heading dark:text-white font-semibold py-3 lg:px-5 duration-500 hover:text-primary dark:hover:text-paleaqua hover:pl-6.25" href="#" onClick={(e) => handleLinkClick('/pricing', e)}>
                        <span>Pricing</span>
                      </a>
                    </li>
                    <li className="relative border-b border-black/5 dark:border-white/10">
                      <a className="block relative text-sm text-heading dark:text-white font-semibold py-3 lg:px-5 duration-500 hover:text-primary dark:hover:text-paleaqua hover:pl-6.25" href="#" onClick={(e) => handleLinkClick('/faq', e)}>
                        <span>FAQ</span>
                      </a>
                    </li>
                    <li className="relative border-b border-black/5 dark:border-white/10">
                      <a className="block relative text-sm text-heading dark:text-white font-semibold py-3 lg:px-5 duration-500 hover:text-primary dark:hover:text-paleaqua hover:pl-6.25" href="#" onClick={(e) => handleLinkClick('/compare', e)}>
                        <span>Compare</span>
                      </a>
                    </li>
                  </ul>
                </li>

                <li className="lg:inline-block block relative group">
                  <a 
                    className={`lg:py-7.5 py-2 xl:px-5 lg:px-2 relative lg:inline-block block text-lg font-medium text-white hover:text-secondary ${isActive('/destinations') ? 'text-secondary' : ''}`} 
                    href="#"
                    onClick={(e) => handleLinkClick('/destinations', e)}
                  >
                    <span className="inline-block">Destinations</span>
                  </a>
                </li>
                <li className="lg:inline-block block relative group">
                  <a 
                    className={`lg:py-7.5 py-2 xl:px-5 lg:px-2 relative lg:inline-block block text-lg font-medium text-white hover:text-secondary ${isActive('/tours') ? 'text-secondary' : ''}`} 
                    href="#"
                    onClick={(e) => handleLinkClick('/tours', e)}
                  >
                    <span className="inline-block">Tours</span>
                  </a>
                </li>
                <li className="lg:inline-block block relative group">
                  <a 
                    className={`lg:py-7.5 py-2 xl:px-5 lg:px-2 relative lg:inline-block block text-lg font-medium text-white hover:text-secondary ${isActive('/blog') ? 'text-secondary' : ''}`} 
                    href="#"
                    onClick={(e) => handleLinkClick('/blog', e)}
                  >
                    <span className="inline-block">Blogs</span>
                  </a>
                </li>
                <li className="lg:inline-block block relative group">
                  <a 
                    className={`lg:py-7.5 py-2 xl:px-5 lg:px-2 relative lg:inline-block block text-lg font-medium text-white hover:text-secondary ${isActive('/contact') ? 'text-secondary' : ''}`} 
                    href="#"
                    onClick={(e) => handleLinkClick('/contact', e)}
                  >
                    <span className="inline-block">Contact</span>
                  </a>
                </li>
              </ul>
            </div>

            {/* Header Right Buttons */}
            <div className="flex lg:justify-end lg:items-center z-9 h-20 xl:pl-8 items-center gap-1">
              <ul className="flex items-center">
                {/* Theme Toggle Button */}
                <li className="inline-block">
                  <button 
                    type="button" 
                    onClick={toggleTheme}
                    className="relative flex items-center justify-center size-14 px-4 text-white theme-btn cursor-pointer"
                    aria-label="Toggle theme mode"
                  >
                    {theme === 'light' ? (
                      <span className="flex items-center justify-center">
                        <svg fill="#fff" id="fi_2253259" height="21" viewBox="0 0 100 100" width="21" xmlns="http://www.w3.org/2000/svg">
                          <g>
                            <path d="m54.2 100c-10.8 0-21.6-3.6-30.4-10.3-11.8-8.8-19-22.7-19.6-37.6-1-18 8.8-35.5 24.2-44.8 8.8-5.2 18.6-7.8 28.9-7.2 2.6 0 5.2 2.1 5.7 4.1 1 2.6.5 5.2-1.5 7.2-8.2 8.2-11.3 19.6-9.3 30.9 3.6 16.5 19.1 27.8 36.1 26.3 2.6 0 5.2 1 6.7 3.6 1.5 2.1 1 5.2-.5 7.2-7.2 9.8-18 17-29.9 19.6-3.2.5-6.8 1-10.4 1zm-5.1-89.1c-5.2.5-10.3 2.6-15.5 5.7-12.4 7.2-19.6 21.1-19.1 35 .5 11.8 6.2 22.7 15.5 29.9s21.1 9.8 32.5 7.2c7.2-1.5 13.4-4.6 18.5-9.8-18.5-1.5-34.5-15.5-39.1-34.5-2.1-11.4.5-23.7 7.2-33.5z"></path>
                          </g>
                        </svg>
                      </span>
                    ) : (
                      <span className="flex items-center justify-center">
                        <svg fill="white" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg" id="fi_3570489">
                          <path d="m12 18a6 6 0 1 0 -6-6 6.006 6.006 0 0 0 6 6zm0-10a4 4 0 1 1 -4 4 4 4 0 0 1 4-4z"></path>
                          <path d="m12 4a1 1 0 0 0 1-1v-1a1 1 0 0 0 -2 0v1a1 1 0 0 0 1 1z"></path>
                          <path d="m11 21v1a1 1 0 0 0 2 0v-1a1 1 0 0 0 -2 0z"></path>
                          <path d="m18.364 6.636a1 1 0 0 0 .707-.293l.707-.707a1 1 0 0 0 -1.414-1.414l-.707.707a1 1 0 0 0 .707 1.707z"></path>
                          <path d="m4.929 17.657-.707.707a1 1 0 1 0 1.414 1.414l.707-.707a1 1 0 0 0 -1.414-1.414z"></path>
                          <path d="m22 11h-1a1 1 0 0 0 0 2h1a1 1 0 0 0 0-2z"></path>
                          <path d="m2 13h1a1 1 0 0 0 0-2h-1a1 1 0 0 0 0 2z"></path>
                          <path d="m17.657 17.657a1 1 0 0 0 0 1.414l.707.707a1 1 0 0 0 1.414-1.414l-.707-.707a1 1 0 0 0 -1.414 0z"></path>
                          <path d="m4.929 6.343a1 1 0 0 0 1.414-1.414l-.707-.707a1 1 0 0 0 -1.414 1.414z"></path>
                        </svg>
                      </span>
                    )}
                  </button>
                </li>

                {/* Search Toggle Button */}
                <li className="inline-block">
                  <button 
                    type="button" 
                    onClick={() => setIsSearchOpen(true)}
                    className="flex items-center justify-center size-14 px-4 quick-search cursor-pointer text-white"
                    aria-label="Open Search Overlay"
                  >
                    <i className="fa fa-search text-xl" aria-hidden="true"></i>
                  </button>
                </li>

                {/* Desktop Info Drawer Trigger / Mobile Menu Toggle */}
                <li className="inline-block">
                  {/* Desktop Right Drawer Toggle */}
                  <button 
                    onClick={() => setIsAsideInfoOpen(true)}
                    className="lg:mt-4.5 lg:mb-4 lg:ml-5 lg:size-11 bg-dark-600 relative cursor-pointer hidden lg:block toggle-nav-btn" 
                    type="button" 
                    aria-label="Open information drawer"
                  >
                    <span className="block absolute left-2.5 h-0.5 rounded-px bg-white duration-300 top-3.25 w-7"></span>
                    <span className="block absolute left-2.5 h-0.5 rounded-px bg-white duration-0 top-5.5 w-7"></span>
                    <span className="block absolute left-2.5 h-0.5 rounded-px bg-white duration-300 top-8 w-7"></span>
                  </button>

                  {/* Mobile Burger Menu Button */}
                  <button 
                    onClick={() => setIsMobileMenuOpen(true)}
                    className="lg:hidden float-right mt-4.5 mb-4 md:ml-7 ml-4 size-11 bg-dark-600 relative cursor-pointer flex flex-col justify-center items-center rounded" 
                    type="button" 
                    aria-label="Open mobile menu"
                  >
                    <span className="block h-0.5 w-5.5 bg-white my-0.5 rounded-px"></span>
                    <span className="block h-0.5 w-5.5 bg-white my-0.5 rounded-px"></span>
                    <span className="block h-0.5 w-5.5 bg-white my-0.5 rounded-px"></span>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
