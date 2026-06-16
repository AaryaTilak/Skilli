import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useApp } from '../context/AppContext';

export default function SearchOverlay() {
  const { isSearchOpen, setIsSearchOpen, setSearchParams } = useApp();
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      setSearchParams(prev => ({ ...prev, location: query }));
      setIsSearchOpen(false);
      navigate(`/tours?search=${encodeURIComponent(query)}`);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div 
      className={`fixed left-0 size-full bg-light/95 dark:bg-dark/95 z-[99999] flex items-center justify-center p-8 duration-500 transition-all ${
        isSearchOpen ? 'top-0 opacity-100' : '-top-full opacity-0'
      }`}
    >
      <form 
        onSubmit={handleSearchSubmit}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[calc(100%_-_80px)] max-w-150 text-primary text-3xl font-light text-left outline-none p-1.5 duration-500 bg-white dark:bg-zinc-800 rounded-3xl shadow-2xl"
      >
        <div className="relative flex flex-wrap items-stretch w-full rounded-3xl overflow-hidden bg-white dark:bg-zinc-800">
          <input 
            name="search" 
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            type="text" 
            className="h-17.5 pr-3 pl-7.5 text-lg text-primary dark:text-white w-[1%] flex-1 outline-none duration-300 placeholder:text-primary/60 dark:placeholder:text-gray-400 bg-transparent" 
            placeholder="Search destination, tour package..." 
          />
          <span className="flex">
            <button 
              type="submit" 
              aria-label="Submit search" 
              className="px-6 outline-none h-17.5 bg-primary text-xl text-white rounded-3xl ml-2 duration-500 cursor-pointer hover:bg-secondary hover:text-primary flex items-center justify-center"
            >
              <i className="fa fa-search" aria-hidden="true"></i>
            </button>
          </span>
        </div>
      </form>
      <button 
        type="button" 
        onClick={() => setIsSearchOpen(false)}
        aria-label="Close search" 
        className="absolute right-8 top-8 text-primary bg-citrusyellow text-base size-10 cursor-pointer rounded flex items-center justify-center hover:bg-white duration-300"
      >
        <i className="fa fa-close" aria-hidden="true"></i>
      </button>
    </div>
  );
}
