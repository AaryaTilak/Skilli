import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useApp } from '../context/AppContext';

export default function AsideSearch() {
  const { searchOpen, setSearchOpen, setSearchQuery } = useApp();
  const [val, setVal] = useState('');
  const navigate = useNavigate();

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (!val.trim()) return;
    setSearchQuery(val);
    setSearchOpen(false);
    navigate(`/shop?search=${encodeURIComponent(val)}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!searchOpen) return null;

  return (
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: 9999 }}>
      {/* Backdrop */}
      <div 
        onClick={() => setSearchOpen(false)} 
        style={{ 
          position: 'absolute', 
          width: '100%', 
          height: '100%', 
          background: 'rgba(0,0,0,0.5)', 
          backdropFilter: 'blur(3px)' 
        }} 
      />
      
      {/* Search Bar Offcanvas */}
      <aside 
        className="aside-search-box-wrapper offcanvas offcanvas-top show" 
        style={{ 
          position: 'absolute', 
          top: 0, 
          width: '100%', 
          height: '250px',
          visibility: 'visible',
          backgroundColor: '#fff',
          boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '20px'
        }}
      >
        <div className="offcanvas-header d-flex justify-content-end" style={{ borderBottom: 'none' }}>
          <button 
            type="button" 
            className="btn-close" 
            onClick={() => setSearchOpen(false)}
            style={{ border: 'none', background: 'transparent', fontSize: '24px', cursor: 'pointer' }}
          >
            <i className="fa fa-close"></i>
          </button>
        </div>
        
        <div className="offcanvas-body d-flex align-items-center justify-content-center">
          <div className="container">
            <div className="search-box-form-wrap w-100" style={{ maxWidth: '600px', margin: '0 auto' }}>
              <div className="search-note text-center mb-2">
                <p className="m-0 text-muted">Start typing and press Enter to search</p>
              </div>
              <form onSubmit={handleSearchSubmit}>
                <div className="aside-search-form position-relative">
                  <label htmlFor="SearchInput" className="visually-hidden">Search</label>
                  <input 
                    id="SearchInput" 
                    type="search" 
                    className="form-control" 
                    placeholder="Search entire store…"
                    value={val}
                    onChange={(e) => setVal(e.target.value)}
                    autoFocus
                    style={{
                      height: '50px',
                      borderRadius: '25px',
                      paddingLeft: '20px',
                      paddingRight: '60px',
                      border: '1px solid #ddd'
                    }}
                  />
                  <button 
                    className="search-button" 
                    type="submit"
                    style={{
                      position: 'absolute',
                      right: '15px',
                      top: '50%',
                      transform: 'translateY(-50%)',
                      border: 'none',
                      background: 'transparent',
                      fontSize: '18px',
                      cursor: 'pointer'
                    }}
                  >
                    <i className="fa fa-search"></i>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
}
