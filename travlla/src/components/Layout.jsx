import React from 'react';
import Header from './Header';
import Footer from './Footer';
import AsideMenu from './AsideMenu';
import AsideInfo from './AsideInfo';
import SearchOverlay from './SearchOverlay';

export default function Layout({ children }) {
  return (
    <div className="page-wraper bg-white dark:bg-dark text-heading dark:text-paleaqua duration-300">
      {/* Shared sticky absolute header */}
      <Header />

      {/* Content smoother wrapper mimicking template's GSAP markers */}
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main className="min-h-screen">
            {children}
          </main>
          {/* Shared footer */}
          <Footer />
        </div>
      </div>

      {/* Mobile left-drawer overlay menu */}
      <AsideMenu />

      {/* Right-drawer overlay detail panel */}
      <AsideInfo />

      {/* Slide-down search block */}
      <SearchOverlay />
      
      {/* Back to top scroll button */}
      <ScrollToTopButton />
    </div>
  );
}

function ScrollToTopButton() {
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button 
      onClick={scrollToTop}
      className={`scroltop fixed bottom-8 right-8 z-[999] size-11 items-center justify-center bg-citrusyellow text-primary rounded-full hover:bg-primary hover:text-white duration-300 shadow-xl cursor-pointer ${
        visible ? 'flex' : 'hidden'
      }`}
      aria-label="Scroll to top"
    >
      <span className="fa fa-angle-up text-lg font-black" aria-hidden="true"></span>
    </button>
  );
}
