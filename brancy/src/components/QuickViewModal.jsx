import React, { useState, useEffect } from 'react';
import { useApp } from '../context/AppContext';

export default function QuickViewModal() {
  const { quickViewOpen, closeQuickView, selectedProduct, addToCart } = useApp();
  const [qty, setQty] = useState(1);

  // Reset quantity when selected product changes
  useEffect(() => {
    setQty(1);
  }, [selectedProduct]);

  if (!quickViewOpen || !selectedProduct) return null;

  const handleAddToCartClick = () => {
    addToCart(selectedProduct, qty);
    closeQuickView();
  };

  return (
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: 99999, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      {/* Backdrop */}
      <div 
        onClick={closeQuickView} 
        style={{ 
          position: 'absolute', 
          width: '100%', 
          height: '100%', 
          background: 'rgba(0,0,0,0.6)', 
          backdropFilter: 'blur(4px)' 
        }} 
      />
      
      {/* Modal Content */}
      <aside 
        className="product-cart-view-modal modal fade show" 
        style={{ 
          position: 'relative', 
          zIndex: 1, 
          display: 'block', 
          maxWidth: '850px', 
          width: '90%', 
          backgroundColor: '#fff', 
          borderRadius: '8px', 
          overflow: 'hidden',
          boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
          padding: '20px'
        }}
      >
        <button 
          type="button" 
          className="btn-close" 
          onClick={closeQuickView}
          style={{
            position: 'absolute',
            right: '20px',
            top: '20px',
            border: 'none',
            background: 'transparent',
            fontSize: '20px',
            cursor: 'pointer',
            zIndex: 10
          }}
        >
          <span className="fa fa-close"></span>
        </button>
        
        <div className="container-fluid">
          <div className="row">
            {/* Image */}
            <div className="col-lg-6 d-flex align-items-center justify-content-center">
              <div className="product-single-thumb" style={{ width: '100%' }}>
                <img 
                  src={selectedProduct.image} 
                  alt={selectedProduct.title}
                  style={{ width: '100%', maxHeight: '400px', objectFit: 'contain' }}
                />
              </div>
            </div>
            
            {/* Details */}
            <div className="col-lg-6">
              <div className="product-details-content" style={{ padding: '10px 0' }}>
                <h5 className="product-details-collection" style={{ textTransform: 'uppercase', color: '#999', fontSize: '12px', letterSpacing: '1px' }}>
                  {selectedProduct.collection || 'Cosmetics'}
                </h5>
                <h3 className="product-details-title" style={{ fontSize: '24px', fontWeight: '600', margin: '10px 0' }}>
                  {selectedProduct.title}
                </h3>
                
                <div className="product-details-review mb-4 d-flex align-items-center">
                  <div className="product-review-icon" style={{ color: '#ffb300' }}>
                    {Array.from({ length: 5 }).map((_, i) => (
                      <i 
                        key={i} 
                        className={`fa ${
                          i < Math.floor(selectedProduct.rating) 
                            ? 'fa-star' 
                            : i < selectedProduct.rating 
                            ? 'fa-star-half-o' 
                            : 'fa-star-o'
                        }`}
                        style={{ marginRight: '3px' }}
                      />
                    ))}
                  </div>
                  <button type="button" className="product-review-show ms-3 border-0 bg-transparent text-muted" style={{ fontSize: '13px' }}>
                    {selectedProduct.reviews} reviews
                  </button>
                </div>
                
                <p className="mb-4 text-secondary" style={{ fontSize: '14px', lineHeight: '1.6' }}>
                  {selectedProduct.description}
                </p>
                
                {/* Quantity adjustments */}
                <div className="product-details-pro-qty mb-4 d-flex align-items-center">
                  <span className="me-3" style={{ fontWeight: '500' }}>Quantity:</span>
                  <div className="pro-qty d-flex align-items-center" style={{ border: '1px solid #ddd', borderRadius: '4px', overflow: 'hidden' }}>
                    <button 
                      onClick={() => setQty(prev => Math.max(1, prev - 1))}
                      style={{ border: 'none', background: '#f5f5f5', width: '35px', height: '35px', cursor: 'pointer' }}
                    >
                      -
                    </button>
                    <input 
                      type="text" 
                      title="Quantity" 
                      value={qty} 
                      readOnly 
                      style={{ width: '45px', height: '35px', border: 'none', textAlign: 'center', fontWeight: '600' }}
                    />
                    <button 
                      onClick={() => setQty(prev => prev + 1)}
                      style={{ border: 'none', background: '#f5f5f5', width: '35px', height: '35px', cursor: 'pointer' }}
                    >
                      +
                    </button>
                  </div>
                </div>
                
                <div className="product-details-action d-flex align-items-center border-top pt-3">
                  <h4 className="price me-4 mb-0" style={{ fontSize: '24px', fontWeight: '700', color: '#222' }}>
                    ${(selectedProduct.price * qty).toFixed(2)}
                  </h4>
                  <div className="product-details-cart-wishlist">
                    <button 
                      type="button" 
                      className="btn" 
                      onClick={handleAddToCartClick}
                      style={{
                        backgroundColor: '#222',
                        color: '#fff',
                        padding: '10px 25px',
                        border: 'none',
                        borderRadius: '4px',
                        fontWeight: '600',
                        cursor: 'pointer'
                      }}
                    >
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
}
