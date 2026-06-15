import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Contact() {
  const navigate = useNavigate();

  useEffect(() => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = '/css/index.min.css';
    link.id = 'page-styles-contact';
    document.head.appendChild(link);
    return () => {
      const el = document.getElementById('page-styles-contact');
      if (el) document.head.removeChild(el);
    };
  }, []);

  const handleLinkClick = (path) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  return (
    <main>
      <div className="contacts_bg"><picture><source data-srcset="https://html.merku.love/upcreators/img/gradients/06.webp" srcset="https://html.merku.love/upcreators/img/gradients/06.webp" type="image/webp" /><img className="lazy" data-src="https://html.merku.love/upcreators/img/gradients/06.jpg" src="https://html.merku.love/upcreators/img/gradients/06.jpg" alt="media" /></picture></div><div className="container"><div className="contacts_main"><div className="contacts_main-header"><div className="contacts_main-header_icon rotate shape"><svg width="69" height="69" viewBox="0 0 69 69" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M42.993 69L34.5 51.2698L26.007 69L16.1104 64.9008L22.6419 46.3582L4.09932 52.8899L0 42.993L17.7302 34.5L0 26.007L4.09932 16.1103L22.6419 22.6418L16.1104 4.09921L26.007 0L34.5 17.7302L42.993 0L52.8899 4.09921L46.3582 22.6418L64.9008 16.1103L69 26.007L51.2698 34.5L69 42.993L64.9008 52.8899L46.3582 46.3582L52.8899 64.9008L42.993 69Z" fill="currentColor" /></svg></div><h1 className="contacts_main-header_title outlined outlined--black" data-aos="fade-down">Get In Touch</h1><h2 className="contacts_main-header_subtitle" data-aos="fade-down">Now we are ready to connect</h2></div><ul className="contacts_main-info"><li className="contacts_main-info_item"><h4 className="title">Follow Us</h4><ul className="socials socials--alt"><li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><i className="icon-instagram"></i></a></li><li><a href="https://tiktok.com" target="_blank" rel="noopener noreferrer"><i className="icon-tiktok"></i></a></li><li><a href="https://youtube.com" target="_blank" rel="noopener noreferrer"><i className="icon-youtube"></i></a></li><li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><i className="icon-facebook"></i></a></li></ul></li><li className="contacts_main-info_item"><h4 className="title">Business Enquiries</h4><div className="content"><a className="link link--underline" href="#" onClick={(e) => e.preventDefault()}>@upcreators_info</a></div></li><li className="contacts_main-info_item"><h4 className="title">Get In Touch</h4><div className="content d-flex flex-column"><a className="link link--underline" href="tel:+1234567890">+1-202-555-0180</a> <a className="link link--underline" href="mailto:example@domain.com">email@emailaddress.com</a></div></li><li className="contacts_main-info_item"><h4 className="title">Location</h4><div className="content"><span>40 Clark Court <span className="linebreak">Dearborn Heights, MI 48127</span></span></div></li></ul></div><div className="contacts_media"><picture><source data-srcset="https://html.merku.love/upcreators/img/contacts/media.webp" srcset="https://html.merku.love/upcreators/img/contacts/media.webp" type="image/webp" /><img className="lazy" data-src="https://html.merku.love/upcreators/img/contacts/media.jpg" src="https://html.merku.love/upcreators/img/contacts/media.jpg" alt="media" /></picture></div></div>
    </main>
  );
}
