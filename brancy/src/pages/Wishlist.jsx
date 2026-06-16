import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useApp } from '../context/AppContext';

export default function Wishlist() {
  const { wishlist, toggleWishlist, addToCart } = useApp();
  const navigate = useNavigate();

  const handleLinkClick = (path) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleAddToCart = (prod) => {
    addToCart(prod, 1);
    // Remove from wishlist after adding to cart
    toggleWishlist(prod);
  };

  return (
    <main className="main-content">
      {/* Header banner */}
      <section 
        className="page-header-area" 
        style={{ 
          backgroundImage: `url(https://template.hasthemes.com/brancy/brancy/assets/images/photos/bg1.webp)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          padding: '80px 0',
          position: 'relative'
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <div className="page-header-content">
                <h2 className="title text-white" style={{ fontSize: '36px', fontWeight: 'bold' }}>My Wishlist</h2>
                <div className="breadcrumbs text-white-50 mt-2">
                  <a href="#" onClick={(e) => { e.preventDefault(); handleLinkClick('/'); }} className="text-white-50">Home</a>
                  <span className="mx-2">/</span>
                  <span>Wishlist</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Wishlist Content */}
      <section className="section-space">
        <div className="container">
          {wishlist.length === 0 ? (
            <div className="text-center py-5">
              <i className="fa fa-heart-o text-muted mb-3" style={{ fontSize: '72px' }}></i>
              <h3 className="mb-3">Your Wishlist is Empty</h3>
              <p className="text-secondary mb-4">You have saved no items yet. Explore our shop and add your favorites!</p>
              <button 
                className="btn btn-black text-white font-weight-bold" 
                style={{ backgroundColor: '#222', padding: '12px 30px' }}
                onClick={() => handleLinkClick('/shop')}
              >
                Explore Shop
              </button>
            </div>
          ) : (
            <div className="row">
              <div className="col-12">
                <div className="table-responsive">
                  <table className="table table-bordered align-middle text-center bg-white">
                    <thead className="table-light">
                      <tr>
                        <th>Remove</th>
                        <th>Product Image</th>
                        <th>Product Name</th>
                        <th>Price</th>
                        <th>Stock Status</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {wishlist.map((item) => (
                        <tr key={item.id}>
                          <td>
                            <button 
                              type="button" 
                              className="btn btn-link text-danger text-decoration-none"
                              onClick={() => toggleWishlist(item)}
                              style={{ fontSize: '20px' }}
                            >
                              ×
                            </button>
                          </td>
                          <td>
                            <img src={item.image} width="80" height="96" alt={item.title} style={{ objectFit: 'contain' }} />
                          </td>
                          <td>
                            <span 
                              className="font-weight-bold text-dark" 
                              style={{ cursor: 'pointer' }}
                              onClick={() => handleLinkClick(`/product-details?id=${item.id}`)}
                            >
                              {item.title}
                            </span>
                          </td>
                          <td>${item.price.toFixed(2)}</td>
                          <td>
                            <span className="badge bg-success">In Stock</span>
                          </td>
                          <td>
                            <button 
                              type="button"
                              className="btn btn-black btn-sm text-white font-weight-bold"
                              style={{ backgroundColor: '#222', border: 'none' }}
                              onClick={() => handleAddToCart(item)}
                            >
                              Add to Cart
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
