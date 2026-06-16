import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { products } from '../data/products';

export default function Shop() {
  const { searchQuery, setSearchQuery, addToCart, toggleWishlist, openQuickView } = useApp();
  const location = useLocation();
  const navigate = useNavigate();

  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('default');

  // Sync search query from URL parameter if available
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const queryParam = params.get('search');
    if (queryParam !== null) {
      setSearchQuery(queryParam);
    }
  }, [location.search, setSearchQuery]);

  const handleLinkClick = (path) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Filter products
  let filtered = [...products];

  if (selectedCategory !== 'all') {
    filtered = filtered.filter(p => p.category === selectedCategory);
  }

  if (searchQuery) {
    filtered = filtered.filter(p => 
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
      p.description.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }

  // Sort products
  if (sortBy === 'priceLow') {
    filtered.sort((a, b) => a.price - b.price);
  } else if (sortBy === 'priceHigh') {
    filtered.sort((a, b) => b.price - a.price);
  } else if (sortBy === 'rating') {
    filtered.sort((a, b) => b.rating - a.rating);
  }

  const categories = ['all', 'beauty', 'cream', 'cleaner', 'accessories'];

  return (
    <main className="main-content">
      {/* Breadcrumb banner */}
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
                <h2 className="title text-white" style={{ fontSize: '36px', fontWeight: 'bold' }}>Our Shop</h2>
                <div className="breadcrumbs text-white-50 mt-2">
                  <a href="#" onClick={(e) => { e.preventDefault(); handleLinkClick('/'); }} className="text-white-50">Home</a>
                  <span className="mx-2">/</span>
                  <span>Shop</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Shop Area */}
      <section className="section-space">
        <div className="container">
          <div className="row flex-lg-row-reverse">
            {/* Products Grid */}
            <div className="col-lg-9">
              {/* Filter controls */}
              <div className="shop-top-bar d-flex justify-content-between align-items-center mb-5 pb-3 border-bottom flex-wrap gap-3">
                <div className="shop-top-left">
                  <p className="m-0 text-muted">Showing {filtered.length} products</p>
                </div>
                
                <div className="shop-top-right d-flex align-items-center gap-3">
                  <span className="text-muted">Sort By:</span>
                  <select 
                    className="form-select form-select-sm" 
                    value={sortBy} 
                    onChange={(e) => setSortBy(e.target.value)}
                    style={{ minWidth: '150px', cursor: 'pointer', border: '1px solid #ddd' }}
                  >
                    <option value="default">Default</option>
                    <option value="priceLow">Price: Low to High</option>
                    <option value="priceHigh">Price: High to Low</option>
                    <option value="rating">Rating</option>
                  </select>
                </div>
              </div>

              {filtered.length === 0 ? (
                <div className="text-center py-5">
                  <i className="fa fa-info-circle text-muted mb-3" style={{ fontSize: '48px' }}></i>
                  <h4>No Products Found</h4>
                  <p className="text-muted">Try clearing your filters or query search term.</p>
                  {searchQuery && (
                    <button 
                      className="btn btn-black btn-sm mt-3"
                      onClick={() => setSearchQuery('')}
                    >
                      Clear Search
                    </button>
                  )}
                </div>
              ) : (
                <div className="row g-3 g-sm-6">
                  {filtered.map((prod) => (
                    <div key={prod.id} className="col-6 col-md-4 mb-4 mb-sm-9">
                      <div className="product-item product-st2-item">
                        <div className="product-thumb">
                          <a href="#" onClick={(e) => { e.preventDefault(); handleLinkClick(`/product-details?id=${prod.id}`); }} className="d-block">
                            <img src={prod.image} width="370" height="450" alt={prod.title} />
                          </a>
                          {prod.tag && <span className={`flag-${prod.tag}`}>{prod.tag}</span>}
                        </div>
                        <div className="product-info">
                          <div className="product-rating">
                            <div className="rating" style={{ color: '#ffb300' }}>
                              {Array.from({ length: 5 }).map((_, i) => (
                                <i 
                                  key={i} 
                                  className={`fa ${
                                    i < Math.floor(prod.rating) 
                                      ? 'fa-star' 
                                      : i < prod.rating 
                                      ? 'fa-star-half-o' 
                                      : 'fa-star-o'
                                  }`}
                                />
                              ))}
                            </div>
                            <div className="reviews">{prod.reviews} reviews</div>
                          </div>
                          <h4 className="title">
                            <a href="#" onClick={(e) => { e.preventDefault(); handleLinkClick(`/product-details?id=${prod.id}`); }}>
                              {prod.title}
                            </a>
                          </h4>
                          <div className="prices">
                            <span className="price">${prod.price.toFixed(2)}</span>
                            {prod.oldPrice && <span className="price-old">${prod.oldPrice.toFixed(2)}</span>}
                          </div>
                          
                          <div className="product-action-bottom">
                            <button type="button" className="product-action-btn action-btn-quick-view" onClick={() => openQuickView(prod)}>
                              <i className="fa fa-expand"></i>
                            </button>
                            <button type="button" className="product-action-btn action-btn-wishlist" onClick={() => toggleWishlist(prod)}>
                              <i className="fa fa-heart-o"></i>
                            </button>
                            <button type="button" className="product-action-btn action-btn-cart" onClick={() => addToCart(prod, 1)}>
                              <span>Add to cart</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="col-lg-3 mt-lg-0 mt-5">
              <div className="shop-sidebar-wrap pe-0 pe-lg-4">
                
                {/* Search Widget */}
                <div className="sidebar-widget-item mb-5">
                  <h4 className="sidebar-widget-title mb-3" style={{ fontSize: '18px', fontWeight: 'bold' }}>Search Products</h4>
                  <div className="sidebar-search-form position-relative">
                    <input 
                      type="text" 
                      className="form-control" 
                      placeholder="Search..." 
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      style={{ height: '40px', border: '1px solid #ddd', borderRadius: '4px' }}
                    />
                    {searchQuery && (
                      <button 
                        onClick={() => setSearchQuery('')}
                        style={{
                          position: 'absolute',
                          right: '10px',
                          top: '50%',
                          transform: 'translateY(-50%)',
                          border: 'none',
                          background: 'transparent',
                          cursor: 'pointer'
                        }}
                      >
                        ×
                      </button>
                    )}
                  </div>
                </div>

                {/* Categories Widget */}
                <div className="sidebar-widget-item mb-5">
                  <h4 className="sidebar-widget-title mb-3" style={{ fontSize: '18px', fontWeight: 'bold' }}>Categories</h4>
                  <ul className="sidebar-widget-categories list-unstyled">
                    {categories.map((cat) => (
                      <li key={cat} className="mb-2">
                        <button 
                          className={`btn btn-link text-start p-0 text-decoration-none w-100 d-flex justify-content-between align-items-center ${
                            selectedCategory === cat ? 'text-dark font-weight-bold' : 'text-secondary'
                          }`}
                          onClick={() => setSelectedCategory(cat)}
                          style={{ textTransform: 'capitalize' }}
                        >
                          <span>{cat}</span>
                          <span className="badge bg-light text-dark">
                            {cat === 'all' 
                              ? products.length 
                              : products.filter(p => p.category === cat).length
                            }
                          </span>
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
