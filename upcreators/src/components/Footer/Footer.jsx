import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Footer() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleLinkClick = (e, path) => {
    e.preventDefault();
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  return (
    <footer className="footer">
      <div className="footer_bg">
        <picture>
          <source data-srcset="https://html.merku.love/upcreators/img/gradients/10.webp" srcset="https://html.merku.love/upcreators/img/gradients/10.webp" type="image/webp" />
          <img className="lazy" data-src="https://html.merku.love/upcreators/img/gradients/10.jpg" src="https://html.merku.love/upcreators/img/gradients/10.jpg" alt="media" />
        </picture>
      </div>
      <div className="container">
        
        <div className="footer_about">
          <div className="footer_about-slogan">
            <div className="footer_about-slogan_icon rotate shape">
              <svg width="73" height="73" viewBox="0 0 73 73" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M44.993 71L36.5 53.2698L28.007 71L18.1104 66.9008L24.6419 48.3582L6.09932 54.8899L2 44.993L19.7302 36.5L2 28.007L6.09932 18.1103L24.6419 24.6418L18.1104 6.09921L28.007 2L36.5 19.7302L44.993 2L54.8899 6.09921L48.3582 24.6418L66.9008 18.1103L71 28.007L53.2698 36.5L71 44.993L66.9008 54.8899L48.3582 48.3582L54.8899 66.9008L44.993 71Z" fill="transparent" stroke="currentColor" strokeWidth="2" />
              </svg>
            </div>
            <h2 className="footer_about-slogan_title">
              Now we’re <span className="h1 linebreak outlined outlined--white">Talking</span>
            </h2>
            <p className="footer_about-slogan_text">
              Nunc ultrices tellus et libero pretium, id mollis diam bibendum. Pellentesque pellentesque, erat ut sagittis euismod, mauris nunc iaculis ligula, eu tempus nunc ex at lacus
            </p>
          </div>
          <form className="footer_about-form d-flex" onSubmit={handleSubmit}>
            <input className="field" type="email" placeholder="Your Contact E-mail" required />
            <button className="btn btn--accent btn--hover-o" type="submit">Leave a Request</button>
          </form>
        </div>

        <div className="footer_main d-flex">
          
          <div className="footer_main-block">
            <h4 className="footer_main-block_title">Follow Us</h4>
            <ul className="footer_main-block_socials socials">
              <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><i className="icon-instagram"></i></a></li>
              <li><a href="https://tiktok.com" target="_blank" rel="noopener noreferrer"><i className="icon-tiktok"></i></a></li>
              <li><a href="https://youtube.com" target="_blank" rel="noopener noreferrer"><i className="icon-youtube"></i></a></li>
              <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><i className="icon-facebook"></i></a></li>
            </ul>
          </div>

          <div className="footer_main-block">
            <h4 className="footer_main-block_title">Get In Touch</h4>
            <div className="footer_main-block_content d-flex flex-column">
              <a className="link link--underline" href="tel:+1-202-555-0180">+1-202-555-0180</a>
              <a className="link link--underline" href="mailto:email@emailaddress.com">email@emailaddress.com</a>
            </div>
          </div>

          <div className="footer_main-block">
            <h4 className="footer_main-block_title">Business Enquiries</h4>
            <div className="footer_main-block_content">
              <a className="link link--underline" href="#">@upcreators_info</a>
            </div>
          </div>

          <div className="footer_main-block">
            <h4 className="footer_main-block_title">Location</h4>
            <div className="footer_main-block_content">
              <span>40 Clark Court <span className="linebreak">Dearborn Heights, MI 48127</span></span>
            </div>
          </div>

          <div className="footer_main-block">
            <h4 className="footer_main-block_title">Pages</h4>
            <ul className="footer_main-block_nav d-flex">
              <li><a className="nav-link" href="#" onClick={(e) => handleLinkClick(e, '/')}>Home</a></li>
              <li><a className="nav-link" href="#" onClick={(e) => handleLinkClick(e, '/about')}>About</a></li>
              <li><a className="nav-link" href="#" onClick={(e) => handleLinkClick(e, '/our-works')}>Our Works</a></li>
              <li><a className="nav-link" href="#" onClick={(e) => handleLinkClick(e, '/events')}>Events</a></li>
              <li><a className="nav-link" href="#" onClick={(e) => handleLinkClick(e, '/shop')}>Shop</a></li>
              <li><a className="nav-link" href="#" onClick={(e) => handleLinkClick(e, '/blog-sidebar')}>Blog</a></li>
            </ul>
          </div>

        </div>

      </div>
      <p className="footer_copy">Copyright@ {new Date().getFullYear()} UpCreators by Merkulove</p>
    </footer>
  );
}
