import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useApp } from '../context/AppContext';

export default function AsideCart() {
  const { cart, cartOpen, setCartOpen, removeFromCart, updateCartQty } = useApp();
  const navigate = useNavigate();

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleLinkClick = (path) => {
    setCartOpen(false);
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!cartOpen) return null;

  return (
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: 9999 }}>
      {/* Backdrop */}
      <div 
        onClick={() => setCartOpen(false)} 
        style={{ 
          position: 'absolute', 
          width: '100%', 
          height: '100%', 
          background: 'rgba(0,0,0,0.5)', 
          backdropFilter: 'blur(3px)' 
        }} 
      />
      
      {/* Drawer */}
      <aside 
        className="aside-cart-wrapper offcanvas offcanvas-end show" 
        style={{ 
          position: 'absolute', 
          right: 0, 
          height: '100%', 
          visibility: 'visible',
          display: 'flex',
          flexDirection: 'column',
          width: '400px',
          maxWidth: '100%',
          backgroundColor: '#fff',
          boxShadow: '-5px 0 15px rgba(0,0,0,0.1)'
        }}
      >
        <div className="offcanvas-header">
          <h1 className="d-none">Shopping Cart</h1>
          <button className="btn-aside-cart-close" onClick={() => setCartOpen(false)}>
            Shopping Cart <i className="fa fa-chevron-right" style={{ marginLeft: '10px' }}></i>
          </button>
        </div>
        
        <div className="offcanvas-body" style={{ overflowY: 'auto', flex: 1 }}>
          {cart.length === 0 ? (
            <div className="text-center py-5">
              <i className="fa fa-shopping-bag text-muted mb-3" style={{ fontSize: '48px' }}></i>
              <p className="text-muted">Your shopping cart is currently empty.</p>
              <button 
                className="btn btn-black mt-3 btn-sm"
                onClick={() => handleLinkClick('/shop')}
              >
                Go to Shop
              </button>
            </div>
          ) : (
            <>
              <ul className="aside-cart-product-list">
                {cart.map((item) => (
                  <li key={item.id} className="aside-product-list-item d-flex align-items-center justify-content-between">
                    <button 
                      className="remove" 
                      onClick={() => removeFromCart(item.id)}
                      style={{ border: 'none', background: 'transparent', cursor: 'pointer', fontSize: '20px' }}
                    >
                      ×
                    </button>
                    <div className="d-flex align-items-center flex-grow-1 ms-3">
                      <div 
                        onClick={() => handleLinkClick(`/product-details?id=${item.id}`)}
                        style={{ cursor: 'pointer' }}
                      >
                        <img src={item.image} width="68" height="84" alt={item.title} />
                      </div>
                      <div className="ms-3">
                        <span 
                          className="product-title" 
                          onClick={() => handleLinkClick(`/product-details?id=${item.id}`)}
                          style={{ cursor: 'pointer', fontWeight: '500', display: 'block' }}
                        >
                          {item.title}
                        </span>
                        
                        {/* Quantity controls inside Drawer */}
                        <div className="d-flex align-items-center mt-1">
                          <button 
                            onClick={() => updateCartQty(item.id, item.quantity - 1)}
                            className="btn btn-outline-secondary btn-xs py-0 px-2"
                          >
                            -
                          </button>
                          <span className="mx-2 text-dark font-weight-bold">{item.quantity}</span>
                          <button 
                            onClick={() => updateCartQty(item.id, item.quantity + 1)}
                            className="btn btn-outline-secondary btn-xs py-0 px-2"
                          >
                            +
                          </button>
                          <span className="ms-3 text-secondary" style={{ fontSize: '14px' }}>
                            x ${item.price.toFixed(2)}
                          </span>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
              
              <div className="mt-auto">
                <p className="cart-total d-flex justify-content-between align-items-center border-top pt-3">
                  <span>Subtotal:</span>
                  <span className="amount" style={{ fontSize: '20px', fontWeight: 'bold' }}>
                    ${subtotal.toFixed(2)}
                  </span>
                </p>
                <button 
                  className="btn-total w-100 mb-2 py-3 text-center d-block border-0 text-white font-weight-bold" 
                  style={{ backgroundColor: '#222', borderRadius: '4px', cursor: 'pointer' }}
                  onClick={() => handleLinkClick('/cart')}
                >
                  View cart
                </button>
                <button 
                  className="btn-total w-100 py-3 text-center d-block border border-dark bg-white text-dark font-weight-bold" 
                  style={{ borderRadius: '4px', cursor: 'pointer' }}
                  onClick={() => handleLinkClick('/checkout')}
                >
                  Checkout
                </button>
              </div>
            </>
          )}
        </div>
      </aside>
    </div>
  );
}
