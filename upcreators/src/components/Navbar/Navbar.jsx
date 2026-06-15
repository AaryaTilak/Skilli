import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Navbar() {
  const [activeMenu, setActiveMenu] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleDropdown = (e, menuName) => {
    e.preventDefault();
    setActiveMenu(prev => (prev === menuName ? null : menuName));
  };

  const handleLinkClick = (path) => {
    navigate(path);
    setActiveMenu(null);
    setMobileMenuOpen(false);
  };

  return (
    <header className="header" data-page="home" data-page-parent="home" style={{ position: 'fixed', width: '100%', top: 0, zIndex: 1000 }}>
      <div className="header_bg">
        <picture>
          <source data-srcset="https://html.merku.love/upcreators/img/gradients/10.webp" srcset="https://html.merku.love/upcreators/img/gradients/10.webp" type="image/webp" />
          <img className="lazy" data-src="https://html.merku.love/upcreators/img/gradients/10.png" src="https://html.merku.love/upcreators/img/gradients/10.png" alt="media" />
        </picture>
      </div>
      <div className="container d-flex">
        
        {/* Logo */}
        <Link className="header_logo logo" to="/" onClick={() => handleLinkClick('/')}>
          <span className="header_logo-wrapper">
            <img src="https://html.merku.love/upcreators/svg/logo--black.svg" alt="UpCreators" />
          </span>
          <span className="text">Creators</span>
        </Link>

        {/* Navigation Menu */}
        <nav className={`header_nav text--medium text--md collapse ${mobileMenuOpen ? 'show' : ''}`} id="headerMenu" style={{ display: mobileMenuOpen ? 'block' : undefined }}>
          <ul className="header_nav-list">
            
            {/* Home dropdown */}
            <li className={`header_nav-list_item dropdown ${activeMenu === 'home' ? 'show' : ''}`}>
              <a 
                className="nav-link nav-item dropdown-toggle" 
                href="#" 
                onClick={(e) => toggleDropdown(e, 'home')}
                aria-expanded={activeMenu === 'home'}
              >
                <span className="nav-item_text">Home</span>
                <span className="icon icon-caret-down-solid"></span>
              </a>
              <div className={`dropdown-menu collapse ${activeMenu === 'home' ? 'show' : ''}`} style={{ display: activeMenu === 'home' ? 'block' : 'none' }}>
                <ul className="dropdown-list">
                  <li className="list-item">
                    <a className="dropdown-item nav-item" href="#" onClick={(e) => { e.preventDefault(); handleLinkClick('/'); }}>Home Agency</a>
                  </li>
                  <li className="list-item">
                    <a className="dropdown-item nav-item" href="#" onClick={(e) => { e.preventDefault(); handleLinkClick('/home-streamers'); }}>Home Streamers</a>
                  </li>
                  <li className="list-item">
                    <a className="dropdown-item nav-item" href="#" onClick={(e) => { e.preventDefault(); handleLinkClick('/home-shop'); }}>Home Shop</a>
                  </li>
                </ul>
              </div>
            </li>

            {/* About */}
            <li className="header_nav-list_item">
              <a className="nav-item nav-link" href="#" onClick={(e) => { e.preventDefault(); handleLinkClick('/about'); }}>
                <span className="nav-item_text">About</span>
              </a>
            </li>

            {/* Pages dropdown */}
            <li className={`header_nav-list_item dropdown ${activeMenu === 'pages' ? 'show' : ''}`}>
              <a 
                className="nav-link nav-item dropdown-toggle" 
                href="#" 
                onClick={(e) => toggleDropdown(e, 'pages')}
                aria-expanded={activeMenu === 'pages'}
              >
                <span className="nav-item_text">Pages</span>
                <span className="icon icon-caret-down-solid"></span>
              </a>
              <div className={`dropdown-menu collapse ${activeMenu === 'pages' ? 'show' : ''}`} style={{ display: activeMenu === 'pages' ? 'block' : 'none' }}>
                <ul className="dropdown-list">
                  <li className="list-item">
                    <a className="dropdown-item nav-item" href="#" onClick={(e) => { e.preventDefault(); handleLinkClick('/faq'); }}>FAQ</a>
                  </li>
                  <li className="list-item">
                    <a className="dropdown-item nav-item" href="#" onClick={(e) => { e.preventDefault(); handleLinkClick('/contact'); }}>Contact Us</a>
                  </li>
                </ul>
              </div>
            </li>

            {/* Events */}
            <li className="header_nav-list_item">
              <a className="nav-item nav-link" href="#" onClick={(e) => { e.preventDefault(); handleLinkClick('/events'); }}>
                <span className="nav-item_text">Events</span>
              </a>
            </li>

            {/* Our Works dropdown */}
            <li className={`header_nav-list_item dropdown ${activeMenu === 'works' ? 'show' : ''}`}>
              <a 
                className="nav-link nav-item dropdown-toggle" 
                href="#" 
                onClick={(e) => toggleDropdown(e, 'works')}
                aria-expanded={activeMenu === 'works'}
              >
                <span className="nav-item_text">Our Works</span>
                <span className="icon icon-caret-down-solid"></span>
              </a>
              <div className={`dropdown-menu collapse ${activeMenu === 'works' ? 'show' : ''}`} style={{ display: activeMenu === 'works' ? 'block' : 'none' }}>
                <ul className="dropdown-list">
                  <li className="list-item">
                    <a className="dropdown-item nav-item" href="#" onClick={(e) => { e.preventDefault(); handleLinkClick('/our-works'); }}>Our Works</a>
                  </li>
                  <li className="list-item">
                    <a className="dropdown-item nav-item" href="#" onClick={(e) => { e.preventDefault(); handleLinkClick('/case-details'); }}>Case Details</a>
                  </li>
                </ul>
              </div>
            </li>

            {/* News dropdown */}
            <li className={`header_nav-list_item dropdown ${activeMenu === 'news' ? 'show' : ''}`}>
              <a 
                className="nav-link nav-item dropdown-toggle" 
                href="#" 
                onClick={(e) => toggleDropdown(e, 'news')}
                aria-expanded={activeMenu === 'news'}
              >
                <span className="nav-item_text">News</span>
                <span className="icon icon-caret-down-solid"></span>
              </a>
              <div className={`dropdown-menu collapse ${activeMenu === 'news' ? 'show' : ''}`} style={{ display: activeMenu === 'news' ? 'block' : 'none' }}>
                <ul className="dropdown-list">
                  <li className="list-item">
                    <a className="dropdown-item nav-item" href="#" onClick={(e) => { e.preventDefault(); handleLinkClick('/blog-sidebar'); }}>News Sidebar</a>
                  </li>
                  <li className="list-item">
                    <a className="dropdown-item nav-item" href="#" onClick={(e) => { e.preventDefault(); handleLinkClick('/blog-list'); }}>News Horizontal Boxes</a>
                  </li>
                  <li className="list-item">
                    <a className="dropdown-item nav-item" href="#" onClick={(e) => { e.preventDefault(); handleLinkClick('/blog-grid'); }}>News Full Width</a>
                  </li>
                  <li className="list-item">
                    <a className="dropdown-item nav-item" href="#" onClick={(e) => { e.preventDefault(); handleLinkClick('/post-sidebar'); }}>Single Post Sidebar</a>
                  </li>
                  <li className="list-item">
                    <a className="dropdown-item nav-item" href="#" onClick={(e) => { e.preventDefault(); handleLinkClick('/post-full'); }}>Single Post Full Width</a>
                  </li>
                </ul>
              </div>
            </li>

            {/* Shop dropdown */}
            <li className={`header_nav-list_item dropdown ${activeMenu === 'shop' ? 'show' : ''}`}>
              <a 
                className="nav-link nav-item dropdown-toggle" 
                href="#" 
                onClick={(e) => toggleDropdown(e, 'shop')}
                aria-expanded={activeMenu === 'shop'}
              >
                <span className="nav-item_text">Shop</span>
                <span className="icon icon-caret-down-solid"></span>
              </a>
              <div className={`dropdown-menu collapse ${activeMenu === 'shop' ? 'show' : ''}`} style={{ display: activeMenu === 'shop' ? 'block' : 'none' }}>
                <ul className="dropdown-list">
                  <li className="list-item">
                    <a className="dropdown-item nav-item" href="#" onClick={(e) => { e.preventDefault(); handleLinkClick('/shop'); }}>Shop</a>
                  </li>
                  <li className="list-item">
                    <a className="dropdown-item nav-item" href="#" onClick={(e) => { e.preventDefault(); handleLinkClick('/shop-list'); }}>Shop List</a>
                  </li>
                  <li className="list-item">
                    <a className="dropdown-item nav-item" href="#" onClick={(e) => { e.preventDefault(); handleLinkClick('/shop-lookbook'); }}>Shop Lookbook</a>
                  </li>
                  <li className="list-item">
                    <a className="dropdown-item nav-item" href="#" onClick={(e) => { e.preventDefault(); handleLinkClick('/shop-collection'); }}>Shop Collection</a>
                  </li>
                  <li className="list-item">
                    <a className="dropdown-item nav-item" href="#" onClick={(e) => { e.preventDefault(); handleLinkClick('/product-1'); }}>Shop Product Page</a>
                  </li>
                  <li className="list-item">
                    <a className="dropdown-item nav-item" href="#" onClick={(e) => { e.preventDefault(); handleLinkClick('/product-2'); }}>Shop Product Big Images</a>
                  </li>
                  <li className="list-item">
                    <a className="dropdown-item nav-item" href="#" onClick={(e) => { e.preventDefault(); handleLinkClick('/product-3'); }}>Shop Product Big Slider</a>
                  </li>
                  <li className="list-item">
                    <a className="dropdown-item nav-item" href="#" onClick={(e) => { e.preventDefault(); handleLinkClick('/cart'); }}>Shopping Bag</a>
                  </li>
                </ul>
              </div>
            </li>

          </ul>
        </nav>

        {/* User / Cart widget */}
        <div className="header_user">
          <a className="header_user-btn btn btn--outline" href="#" onClick={(e) => { e.preventDefault(); handleLinkClick('/contact'); }}>
            Get In Touch <i className="icon icon-arrow-right"></i>
          </a>
          <a className="header_user-account" href="#"><i className="icon-user"></i></a>
          <a className="header_user-cart addToCart" href="#" onClick={(e) => { e.preventDefault(); handleLinkClick('/cart'); }}>
            <i className="icon-bag"></i> <span className="header_user-cart_qty">2</span>
          </a>
          <span className="header_user-preference">
            USD{' '}
            <span className="header_user-preference_country">
              <picture>
                <source data-srcset="https://html.merku.love/upcreators/img/usa.webp" srcset="https://html.merku.love/upcreators/img/usa.webp" type="image/webp" />
                <img className="lazy" data-src="https://html.merku.love/upcreators/img/usa.png" src="https://html.merku.love/upcreators/img/usa.png" alt="USA" />
              </picture>
            </span>
          </span>
        </div>

        {/* Hamburger Trigger for Mobile */}
        <button 
          className={`header_trigger ${mobileMenuOpen ? 'active' : ''}`}
          id="headerTrigger" 
          type="button"
          onClick={() => setMobileMenuOpen(prev => !prev)}
        ></button>
      </div>
    </header>
  );
}
