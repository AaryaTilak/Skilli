import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import AsideCart from './AsideCart';
import AsideSearch from './AsideSearch';
import AsideMenu from './AsideMenu';
import QuickViewModal from './QuickViewModal';
import { useApp } from '../context/AppContext';

export default function Layout() {
  const { toastMessage } = useApp();

  return (
    <div className="wrapper">
      {/* Header */}
      <Navbar />

      {/* Main Page View */}
      <Outlet />

      {/* Footer */}
      <Footer />

      {/* Drawers and Modals */}
      <AsideCart />
      <AsideSearch />
      <AsideMenu />
      <QuickViewModal />

      {/* Floating Action Notifications */}
      {toastMessage && (
        <div 
          style={{
            position: 'fixed',
            bottom: '30px',
            right: '30px',
            backgroundColor: '#222',
            color: '#fff',
            padding: '15px 25px',
            borderRadius: '4px',
            boxShadow: '0 5px 15px rgba(0,0,0,0.3)',
            zIndex: 999999,
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            animation: 'fadeInUp 0.3s ease'
          }}
        >
          <i className="fa fa-check-circle" style={{ color: '#2ecc71', fontSize: '18px' }}></i>
          <span style={{ fontWeight: '500', fontSize: '14px' }}>{toastMessage}</span>
        </div>
      )}

      {/* Simple style animations inside React */}
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
