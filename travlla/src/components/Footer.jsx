import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from './Logo';

export default function Footer() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');

  const handleLinkClick = (path, e) => {
    if (e) e.preventDefault();
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      alert(`Thank you for subscribing, ${email}!`);
      setEmail('');
    }
  };

  return (
    <footer className="bg-eggshell dark:bg-eggshell/5 text-primary dark:text-paleaqua bg-[url('/assets/images/background/ftr-light-bg.png')] bg-cover block">
      {/* FOOTER BLOCKS START */}  
      <div className="container">
        <div className="xl:pt-30 xl:pb-20 pt-15">
          <div className="row">
            {/* About Widget */}
            <div className="xl:w-1/4 lg:w-1/2 w-full">
              <div className="mb-10 widget_about">
                <div className="mb-10 block max-w-48.25 cursor-pointer" onClick={(e) => handleLinkClick('/', e)}>
                  <Logo light={false} />
                </div>
                <p className="mb-4 pr-12.5 text-base">
                  Skilli Travel is a multi-award-winning strategy and content creation agency that specializes in travel marketing. Let us map out your next adventure.
                </p>
                <ul className="mt-5">
                  <li className="inline-flex xl:size-11.5 size-10.5 bg-citrusyellow xl:mr-2.5 mr-1.5 rounded-4xl justify-center items-center duration-500 hover:rounded-2lg group">
                    <a className="inline-flex size-9 bg-primary rounded-4xl justify-center items-center duration-500 text-white text-lg group-hover:rounded-2lg" href="https://www.x.com" target="_blank" rel="noopener noreferrer">
                      <i className="fa-brands fa-x-twitter group-hover:rotate-y-[360deg] group-hover:scale-[1.2] !inline-block duration-[0.5s] group-hover:text-citrusyellow"></i>
                    </a>
                  </li>
                  <li className="inline-flex xl:size-11.5 size-10.5 bg-citrusyellow xl:mr-2.5 mr-1.5 rounded-4xl justify-center items-center duration-500 hover:rounded-2lg group">
                    <a className="inline-flex size-9 bg-primary rounded-4xl justify-center items-center duration-500 text-white text-lg group-hover:rounded-2lg" href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                      <i className="fa-brands fa-facebook group-hover:rotate-y-[360deg] group-hover:scale-[1.2] !inline-block duration-[0.5s] group-hover:text-citrusyellow"></i>
                    </a>
                  </li>
                  <li className="inline-flex xl:size-11.5 size-10.5 bg-citrusyellow xl:mr-2.5 mr-1.5 rounded-4xl justify-center items-center duration-500 hover:rounded-2lg group">
                    <a className="inline-flex size-9 bg-primary rounded-4xl justify-center items-center duration-500 text-white text-lg group-hover:rounded-2lg" href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                      <i className="fa-brands fa-instagram group-hover:rotate-y-[360deg] group-hover:scale-[1.2] !inline-block duration-[0.5s] group-hover:text-citrusyellow"></i>
                    </a>
                  </li>
                  <li className="inline-flex xl:size-11.5 size-10.5 bg-citrusyellow xl:mr-2.5 mr-1.5 rounded-4xl justify-center items-center duration-500 hover:rounded-2lg group">
                    <a className="inline-flex size-9 bg-primary rounded-4xl justify-center items-center duration-500 text-white text-lg group-hover:rounded-2lg" href="https://www.pinterest.com/" target="_blank" rel="noopener noreferrer">
                      <i className="fa-brands fa-pinterest group-hover:rotate-y-[360deg] group-hover:scale-[1.2] !inline-block duration-[0.5s] group-hover:text-citrusyellow"></i>
                    </a>
                  </li>
                </ul>
              </div>   
            </div>

            {/* Explore links */}
            <div className="xl:w-1/6 md:w-1/2 w-1/3 mb-5">
              <div className="mb-10">
                <h3 className="md:text-28 text-22 md:mb-7.5 mb-5 relative font-title font-medium">Explore</h3>
                <ul>
                  <li className="block w-full py-0.5 overflow-hidden">
                    <a className="pb-1.5 text-base font-semibold block hover:text-citrusyellow" href="#" onClick={(e) => handleLinkClick('/about', e)}>About Us</a>
                  </li>
                  <li className="block w-full py-0.5 overflow-hidden">
                    <a className="pb-1.5 text-base font-semibold block hover:text-citrusyellow" href="#" onClick={(e) => handleLinkClick('/faq', e)}>FAQ's</a>
                  </li>
                  <li className="block w-full py-0.5 overflow-hidden">
                    <a className="pb-1.5 text-base font-semibold block hover:text-citrusyellow" href="#" onClick={(e) => handleLinkClick('/services', e)}>Services</a>
                  </li>
                  <li className="block w-full py-0.5 overflow-hidden">
                    <a className="pb-1.5 text-base font-semibold block hover:text-citrusyellow" href="#" onClick={(e) => handleLinkClick('/guides', e)}>Guides</a>
                  </li>
                  <li className="block w-full py-0.5 overflow-hidden">
                    <a className="pb-1.5 text-base font-semibold block hover:text-citrusyellow" href="#" onClick={(e) => handleLinkClick('/blog', e)}>News & Blogs</a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Destinations Links */}
            <div className="xl:w-1/6 md:w-1/2 w-1/3 mb-5">
              <div className="mb-10">
                <h3 className="md:text-28 text-22 md:mb-7.5 mb-5 relative font-title font-medium">Destinations</h3>
                <ul>
                  <li className="block w-full py-0.5 overflow-hidden">
                    <a className="pb-1.5 text-base font-semibold block hover:text-citrusyellow" href="#" onClick={(e) => handleLinkClick('/destinations', e)}>New Zealand</a>
                  </li>
                  <li className="block w-full py-0.5 overflow-hidden">
                    <a className="pb-1.5 text-base font-semibold block hover:text-citrusyellow" href="#" onClick={(e) => handleLinkClick('/destinations', e)}>Paris</a>
                  </li>
                  <li className="block w-full py-0.5 overflow-hidden">
                    <a className="pb-1.5 text-base font-semibold block hover:text-citrusyellow" href="#" onClick={(e) => handleLinkClick('/destinations', e)}>Bali</a>
                  </li>
                  <li className="block w-full py-0.5 overflow-hidden">
                    <a className="pb-1.5 text-base font-semibold block hover:text-citrusyellow" href="#" onClick={(e) => handleLinkClick('/destinations', e)}>Kenya</a>
                  </li>
                  <li className="block w-full py-0.5 overflow-hidden">
                    <a className="pb-1.5 text-base font-semibold block hover:text-citrusyellow" href="#" onClick={(e) => handleLinkClick('/destinations', e)}>Indonesia</a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Legal Links */}
            <div className="xl:w-1/6 md:w-1/2 w-1/3 mb-5">
              <div className="mb-10">
                <h3 className="md:text-28 text-22 md:mb-7.5 mb-5 relative font-title font-medium">Legal</h3>
                <ul>
                  <li className="block w-full py-0.5 overflow-hidden">
                    <a className="pb-1.5 text-base font-semibold block hover:text-citrusyellow" href="#" onClick={(e) => e.preventDefault()}>Terms & Conditions</a>
                  </li>
                  <li className="block w-full py-0.5 overflow-hidden">
                    <a className="pb-1.5 text-base font-semibold block hover:text-citrusyellow" href="#" onClick={(e) => e.preventDefault()}>Privacy Policy</a>
                  </li>
                  <li className="block w-full py-0.5 overflow-hidden">
                    <a className="pb-1.5 text-base font-semibold block hover:text-citrusyellow" href="#" onClick={(e) => handleLinkClick('/contact', e)}>Contact Us</a>
                  </li>
                  <li className="block w-full py-0.5 overflow-hidden">
                    <a className="pb-1.5 text-base font-semibold block hover:text-citrusyellow" href="#" onClick={(e) => e.preventDefault()}>Careers</a>
                  </li>
                  <li className="block w-full py-0.5 overflow-hidden">
                    <a className="pb-1.5 text-base font-semibold block hover:text-citrusyellow" href="#" onClick={(e) => e.preventDefault()}>Help Desk</a>
                  </li>
                </ul>
              </div>
            </div>
          
            {/* Contact Info */}
            <div className="xl:w-1/4 md:w-1/2 col-md-6">
              <div className="mb-10 f-top-space">
                <ul className="widget_address"> 
                  <li className="mb-2.5 relative flex items-center">
                    <div className="size-14 min-w-14 mr-3.5 rounded-full bg-primary/10 flex items-center justify-center">
                      <i className="las la-phone text-22"></i>
                    </div>
                    <a href="tel:1236540214">
                      <span className="font-display text-3xl block font-normal text-primary dark:text-white">123 654 0214</span>
                    </a>
                  </li>
                
                  <li className="mb-2.5 relative flex items-center">
                    <div className="size-14 min-w-14 mr-3.5 rounded-full bg-primary/10 flex items-center justify-center">
                      <i className="las la-envelope text-22"></i>
                    </div>
                    <a className="block text-lg font-semibold hover:text-citrusyellow" href="mailto:skillitravel@gmail.com">skillitravel@gmail.com</a>
                  </li>
                  
                  <li className="mb-2.5 relative flex items-center">
                    <div className="size-14 min-w-14 mr-3.5 rounded-full bg-primary/10 flex items-center justify-center">
                      <i className="las la-home text-22"></i>
                    </div>
                    <span className="block text-lg font-semibold">55/11 Ronin Tower, New York</span>
                  </li>
                </ul>  
              </div>
            </div>
          </div>
        </div>

        {/* Subscribe Section */}
        <div className="trv-subscribe-nl-st2">
          <div className="container bg-primary rounded-3xl lg:flex items-center justify-between xl:py-5 xl:!px-17.5 !p-5">
            <div className="lg:text-6xl sm:text-5xl text-28 leading-none pb-1.25 font-title text-citrusyellow">
              <div className="inline-block"><span className="text-white leading-none">Subscribe</span> Now!</div>
              <div className="text-white sm:text-xl text-base font-medium font-base max-md:mb-5 mt-2">
                Sign up to our weekly newsletter to get the latest updates. 
              </div>  
            </div>
            <div className="max-w-107 flex-1 text-primary text-3xl font-light text-left outline-none p-1.5 duration-500 bg-light rounded-25xl">
              <form onSubmit={handleSubscribe}>
                <div className="flex relative">
                  <label htmlFor="newsletter-email" className="sr-only">Email address</label>
                  <input 
                    name="news-letter" 
                    required 
                    type="email"  
                    id="newsletter-email" 
                    autoComplete="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="form-control !h-17 !border-0 outline-none !py-2.5 !pl-5 !pr-17.5 rounded-full !text-2xs !leading-5 bg-white focus:text-[#212529] focus:bg-transparent focus:shadow-[0_1px_3px_0_rgba(0,0,0,0.6)] placeholder:text-primary w-full" 
                    placeholder="Email address..." 
                  />
                  <button 
                    type="submit" 
                    className="text-28 text-white rounded-full size-15 bg-primary absolute top-1.25 right-1.25 duration-500 cursor-pointer flex items-center justify-center hover:bg-citrusyellow hover:text-primary" 
                    aria-label="Subscribe to newsletter"
                  >
                    <i className="las la-paper-plane text-xl" aria-hidden="true"></i>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="py-7.5 relative z-1 font-normal">
          <div className="container">
            <div className="text-center text-sm font-semibold text-primary/70 dark:text-white/70">
              &copy; {new Date().getFullYear()} <span className="text-citrusyellow inline-block uppercase font-bold">Skilli Travel</span>. All Rights Reserved.
            </div>
          </div>   
        </div>   
      </div>
      {/* FOOTER BLOCKS END */}
    </footer>
  );
}
