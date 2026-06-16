import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useApp } from '../context/AppContext';

export default function AsideMenu() {
  const { menuOpen, setMenuOpen } = useApp();
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  const navigate = useNavigate();

  const handleLinkClick = (path) => {
    setMenuOpen(false);
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleSubmenu = (menuName) => {
    setActiveSubmenu(prev => (prev === menuName ? null : menuName));
  };

  if (!menuOpen) return null;

  return (
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: 9999 }}>
      {/* Backdrop */}
      <div 
        onClick={() => setMenuOpen(false)} 
        style={{ 
          position: 'absolute', 
          width: '100%', 
          height: '100%', 
          background: 'rgba(0,0,0,0.5)', 
          backdropFilter: 'blur(3px)' 
        }} 
      />
      
      {/* Drawer */}
      <aside 
        className="off-canvas-wrapper offcanvas offcanvas-start show" 
        style={{ 
          position: 'absolute', 
          left: 0, 
          height: '100%', 
          visibility: 'visible',
          display: 'flex',
          flexDirection: 'column',
          width: '300px',
          maxWidth: '100%',
          backgroundColor: '#fff',
          boxShadow: '5px 0 15px rgba(0,0,0,0.1)'
        }}
      >
        <div className="offcanvas-header">
          <h1 className="d-none">Aside Menu</h1>
          <button className="btn-menu-close" onClick={() => setMenuOpen(false)}>
            menu <i className="fa fa-chevron-left" style={{ marginLeft: '10px' }}></i>
          </button>
        </div>
        
        <div className="offcanvas-body" style={{ overflowY: 'auto', flex: 1 }}>
          <div id="offcanvasNav" className="offcanvas-menu-nav">
            <ul>
              {/* Home */}
              <li className="offcanvas-nav-parent">
                <a 
                  className="offcanvas-nav-item" 
                  href="#" 
                  onClick={(e) => { e.preventDefault(); handleLinkClick('/'); }}
                >
                  Home
                </a>
              </li>

              {/* About */}
              <li className="offcanvas-nav-parent">
                <a 
                  className="offcanvas-nav-item" 
                  href="#" 
                  onClick={(e) => { e.preventDefault(); handleLinkClick('/contact'); }}
                >
                  About
                </a>
              </li>

              {/* Shop dropdown */}
              <li className="offcanvas-nav-parent">
                <a 
                  className="offcanvas-nav-item d-flex justify-content-between align-items-center" 
                  href="#" 
                  onClick={(e) => { e.preventDefault(); toggleSubmenu('shop'); }}
                >
                  <span>shop</span>
                  <i className={`fa ${activeSubmenu === 'shop' ? 'fa-angle-up' : 'fa-angle-down'}`}></i>
                </a>
                {activeSubmenu === 'shop' && (
                  <ul className="d-block" style={{ paddingLeft: '15px' }}>
                    <li><a href="#" onClick={(e) => { e.preventDefault(); handleLinkClick('/shop'); }}>Shop Layout</a></li>
                    <li><a href="#" onClick={(e) => { e.preventDefault(); handleLinkClick('/cart'); }}>Shopping Cart</a></li>
                    <li><a href="#" onClick={(e) => { e.preventDefault(); handleLinkClick('/checkout'); }}>Checkout</a></li>
                    <li><a href="#" onClick={(e) => { e.preventDefault(); handleLinkClick('/wishlist'); }}>Wishlist</a></li>
                  </ul>
                )}
              </li>

              {/* Blog dropdown */}
              <li className="offcanvas-nav-parent">
                <a 
                  className="offcanvas-nav-item d-flex justify-content-between align-items-center" 
                  href="#" 
                  onClick={(e) => { e.preventDefault(); toggleSubmenu('blog'); }}
                >
                  <span>Blog</span>
                  <i className={`fa ${activeSubmenu === 'blog' ? 'fa-angle-up' : 'fa-angle-down'}`}></i>
                </a>
                {activeSubmenu === 'blog' && (
                  <ul className="d-block" style={{ paddingLeft: '15px' }}>
                    <li><a href="#" onClick={(e) => { e.preventDefault(); handleLinkClick('/blog'); }}>Blog Grid</a></li>
                    <li><a href="#" onClick={(e) => { e.preventDefault(); handleLinkClick('/blog-details?id=1'); }}>Blog Details</a></li>
                  </ul>
                )}
              </li>

              {/* Pages dropdown */}
              <li className="offcanvas-nav-parent">
                <a 
                  className="offcanvas-nav-item d-flex justify-content-between align-items-center" 
                  href="#" 
                  onClick={(e) => { e.preventDefault(); toggleSubmenu('pages'); }}
                >
                  <span>Pages</span>
                  <i className={`fa ${activeSubmenu === 'pages' ? 'fa-angle-up' : 'fa-angle-down'}`}></i>
                </a>
                {activeSubmenu === 'pages' && (
                  <ul className="d-block" style={{ paddingLeft: '15px' }}>
                    <li><a href="#" onClick={(e) => { e.preventDefault(); handleLinkClick('/account'); }}>My Account</a></li>
                    <li><a href="#" onClick={(e) => { e.preventDefault(); handleLinkClick('/wishlist'); }}>Wishlist</a></li>
                  </ul>
                )}
              </li>

              {/* Contact */}
              <li className="offcanvas-nav-parent">
                <a 
                  className="offcanvas-nav-item" 
                  href="#" 
                  onClick={(e) => { e.preventDefault(); handleLinkClick('/contact'); }}
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </aside>
    </div>
  );
}
