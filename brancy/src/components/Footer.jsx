import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="footer-area">
      {/* Footer Main */}
      <div className="footer-main">
        <div className="container">
          <div className="row">
            {/* About Widget */}
            <div className="col-md-6 col-lg-4">
              <div className="widget-item">
                <div className="widget-about">
                  <Link className="widget-logo" to="/">
                    <Logo />
                  </Link>
                  <p className="desc">
                    Discover luxury skincare and cosmetic therapies. We craft products with premium botanical ingredients to nurture and celebrate your natural beauty.
                  </p>
                </div>
              </div>
            </div>

            {/* Links Widget */}
            <div className="col-md-6 col-lg-5 mt-md-0 mt-9">
              <div className="widget-item">
                <h4 className="widget-title">Information</h4>
                <ul className="widget-nav">
                  <li><Link to="/blog">Blog</Link></li>
                  <li><Link to="/contact">About us</Link></li>
                  <li><Link to="/contact">Contact</Link></li>
                  <li><Link to="/wishlist">Privacy Policy</Link></li>
                  <li><Link to="/account">Login</Link></li>
                  <li><Link to="/shop">Shop</Link></li>
                  <li><Link to="/account">My Account</Link></li>
                  <li><Link to="/contact">FAQs</Link></li>
                </ul>
              </div>
            </div>

            {/* Social Widget */}
            <div className="col-md-6 col-lg-3 mt-lg-0 mt-6">
              <div className="widget-item">
                <h4 className="widget-title">Social Info</h4>
                <div className="widget-social">
                  <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                    <i className="fa fa-twitter"></i>
                  </a>
                  <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                    <i className="fa fa-facebook"></i>
                  </a>
                  <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                    <i className="fa fa-instagram"></i>
                  </a>
                  <a href="https://www.pinterest.com/" target="_blank" rel="noopener noreferrer">
                    <i className="fa fa-pinterest-p"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="container pt-0 pb-0">
          <div className="footer-bottom-content">
            <p className="copyright">
              © {new Date().getFullYear()} Skilli Cosmetics. Developed with{' '}
              <i className="fa fa-heart" style={{ color: '#10b981' }}></i> by{' '}
              <a target="_blank" href="https://skilli.in" rel="noopener noreferrer">
                skilli.in
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
