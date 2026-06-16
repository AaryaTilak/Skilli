import React from 'react';
import { useApp } from '../context/AppContext';
import Logo from './Logo';

export default function AsideInfo() {
  const { isAsideInfoOpen, setIsAsideInfoOpen } = useApp();

  return (
    <>
      {/* Backdrop overlay */}
      {isAsideInfoOpen && (
        <div 
          onClick={() => setIsAsideInfoOpen(false)}
          className="fixed inset-0 z-[99999] bg-black/40 backdrop-blur-[3px] transition-opacity duration-300"
        />
      )}

      {/* Slide-out Panel */}
      <div 
        className={`fixed top-0 right-0 z-[999999] h-screen w-full sm:max-w-125 max-w-88 bg-primary dark:bg-dark border-l border-white/10 overflow-y-auto transition-transform duration-300 ease-in-out ${
          isAsideInfoOpen ? 'translate-x-0' : 'translate-x-full'
        } custom-scroll`}
      >
        <button 
          type="button" 
          onClick={() => setIsAsideInfoOpen(false)}
          className="absolute right-6 top-6 text-[#443935] bg-citrusyellow hover:bg-white text-base size-8 cursor-pointer rounded flex items-center justify-center" 
          aria-label="Close"
        >
          <i className="fa-solid fa-xmark" aria-hidden="true"></i>
        </button>
        
        <div className="pt-30 pb-10 px-8 text-white">
          <div className="mb-15">
            <Logo light={true} />
          </div>
          <div className="trv-side-pnl-content">
            <div className="mb-15">
              <h3 className="text-28 text-white mb-5 font-title">It's Time to Travel</h3>
              <h3 className="text-secondary text-5xl mb-5 uppercase font-black font-base">Plan Your Next Holiday</h3>
              <p className="text-base text-white/60">
                Skilli Travel is a multi-award-winning strategy and content creation agency that specializes in travel marketing. Discover custom itineraries tailored just for you.
              </p>   
            </div>
            <h3 className="text-28 text-white mb-5 font-title font-medium">Don't miss these offers!</h3>
            <ul className="flex justify-between pb-10 mb-10 relative after:w-full after:bg-white/15 after:h-px after:absolute after:left-0 after:bottom-0">
              <li>
                <h2 className="text-secondary text-34 mb-2 font-black">$199</h2>
                <span className="text-white text-lg font-medium font-title">Basic Plan</span>
              </li>
              <li>
                <h2 className="text-secondary text-34 mb-2 font-black">$299</h2>
                <span className="text-white text-lg font-medium font-title">Pro Plan</span>
              </li>
              <li>
                <h2 className="text-secondary text-34 mb-2 font-black">$399</h2>
                <span className="text-white text-lg font-medium font-title">Full Plan</span>
              </li>
            </ul>
            
            <ul className="mt-5 flex gap-2">
              <li className="inline-flex size-11.5 bg-citrusyellow rounded-4xl justify-center items-center duration-500 hover:rounded-2lg group">
                <a className="inline-flex size-9 bg-primary rounded-full justify-center items-center duration-500 text-white text-lg" href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                  <i className="fa-brands fa-facebook-f group-hover:rotate-y-[360deg] group-hover:scale-[1.2] !inline-block duration-[0.5s] group-hover:text-citrusyellow"></i>
                </a>
              </li>
              <li className="inline-flex size-11.5 bg-citrusyellow rounded-4xl justify-center items-center duration-500 hover:rounded-2lg group">
                <a className="inline-flex size-9 bg-primary rounded-full justify-center items-center duration-500 text-white text-lg" href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                  <i className="fa-brands fa-instagram group-hover:rotate-y-[360deg] group-hover:scale-[1.2] !inline-block duration-[0.5s] group-hover:text-citrusyellow"></i>
                </a>
              </li>
              <li className="inline-flex size-11.5 bg-citrusyellow rounded-4xl justify-center items-center duration-500 hover:rounded-2lg group">
                <a className="inline-flex size-9 bg-primary rounded-full justify-center items-center duration-500 text-white text-lg" href="https://www.x.com" target="_blank" rel="noopener noreferrer">
                  <i className="fa-brands fa-x-twitter group-hover:rotate-y-[360deg] group-hover:scale-[1.2] !inline-block duration-[0.5s] group-hover:text-citrusyellow"></i>
                </a>
              </li>
              <li className="inline-flex size-11.5 bg-citrusyellow rounded-4xl justify-center items-center duration-500 hover:rounded-2lg group">
                <a className="inline-flex size-9 bg-primary rounded-full justify-center items-center duration-500 text-white text-lg" href="https://www.pinterest.com" target="_blank" rel="noopener noreferrer">
                  <i className="fa-brands fa-pinterest group-hover:rotate-y-[360deg] group-hover:scale-[1.2] !inline-block duration-[0.5s] group-hover:text-citrusyellow"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
