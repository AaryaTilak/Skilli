import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import Logo from './Logo';

export default function Navbar() {
  const { cart, setCartOpen, setSearchOpen, setMenuOpen } = useApp();
  const navigate = useNavigate();

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="header-area sticky-header">
      <div className="container">
        <div className="row align-items-center">
          {/* Logo */}
          <div className="col-5 col-sm-6 col-lg-3">
            <div className="header-logo">
              <Link to="/">
                <Logo />
              </Link>
            </div>
          </div>

          {/* Desktop Navigation Menu */}
          <div className="col-lg-6 d-none d-lg-block">
            <div className="header-navigation">
              <ul className="main-nav justify-content-start">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li><Link to="/contact">About</Link></li>
                <li className="has-submenu position-static">
                  <Link to="/shop">Shop</Link>
                  <ul className="submenu-nav-mega">
                    <li>
                      <Link to="/shop" className="mega-title">Shop Layout</Link>
                      <ul>
                        <li><Link to="/shop">Shop 3 Column</Link></li>
                        <li><Link to="/shop">Shop 4 Column</Link></li>
                      </ul>
                    </li>
                    <li>
                      <Link to="/shop" className="mega-title">Single Product</Link>
                      <ul>
                        <li><Link to="/product-details?id=1">Single Product Normal</Link></li>
                        <li><Link to="/product-details?id=2">Single Product Variable</Link></li>
                      </ul>
                    </li>
                    <li>
                      <Link to="/shop" className="mega-title">Others Pages</Link>
                      <ul>
                        <li><Link to="/cart">Shopping Cart</Link></li>
                        <li><Link to="/checkout">Checkout</Link></li>
                        <li><Link to="/wishlist">Wishlist</Link></li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li className="has-submenu">
                  <Link to="/blog">Blog</Link>
                  <ul className="submenu-nav">
                    <li><Link to="/blog">Blog Grid</Link></li>
                    <li><Link to="/blog-details?id=1">Blog Details</Link></li>
                  </ul>
                </li>
                <li className="has-submenu">
                  <Link to="/account">Pages</Link>
                  <ul className="submenu-nav">
                    <li><Link to="/account">My Account</Link></li>
                    <li><Link to="/wishlist">Wishlist</Link></li>
                  </ul>
                </li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </div>
          </div>

          {/* Header Action Controls */}
          <div className="col-7 col-sm-6 col-lg-3">
            <div className="header-action justify-content-end">
              {/* Search Toggle */}
              <button
                className="header-action-btn ms-0"
                type="button"
                onClick={() => setSearchOpen(true)}
              >
                <span className="icon">
                  <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.5 22C18.1944 22 22 18.1944 22 13.5C22 8.80558 18.1944 5 13.5 5C8.80558 5 5 8.80558 5 13.5C5 18.1944 8.80558 22 13.5 22Z" stroke="#222" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M19.5 19.5L25 25" stroke="#222" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              </button>

              {/* Cart Toggle */}
              <button
                className="header-action-btn position-relative"
                type="button"
                onClick={() => setCartOpen(true)}
              >
                <span className="icon">
                  <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 7H25L23 20H7L5 7Z" stroke="#222" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M10 7C10 7 10 3 15 3C20 3 20 7 20 7" stroke="#222" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
                {totalItems > 0 && (
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" style={{ fontSize: '10px' }}>
                    {totalItems}
                  </span>
                )}
              </button>

              {/* Account Link */}
              <Link className="header-action-btn d-none d-sm-inline-block" to="/account">
                <span className="icon">
                  <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15 14C18.3137 14 21 11.3137 21 8C21 4.68629 18.3137 2 15 2C11.6863 2 9 4.68629 9 8C9 11.3137 11.6863 14 15 14Z" stroke="#222" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M5 26C5 21 9 17 15 17C21 17 25 21 25 26" stroke="#222" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              </Link>

              {/* Mobile Hamburger Button */}
              <button
                className="header-menu-btn d-lg-none"
                type="button"
                onClick={() => setMenuOpen(true)}
              >
                <span></span>
                <span></span>
                <span></span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
