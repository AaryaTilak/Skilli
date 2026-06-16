import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { products } from '../data/products';

export default function ProductDetails() {
  const location = useLocation();
  const navigate = useNavigate();
  const { addToCart, toggleWishlist } = useApp();

  const [product, setProduct] = useState(products[0]);
  const [qty, setQty] = useState(1);
  const [activeTab, setActiveTab] = useState('description');

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const idParam = parseInt(params.get('id'));
    const found = products.find(p => p.id === idParam);
    if (found) {
      setProduct(found);
    } else {
      setProduct(products[0]);
    }
    setQty(1);
  }, [location.search]);

  const handleLinkClick = (path) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleAddToCart = () => {
    addToCart(product, qty);
  };

  // Get related products (exclude current)
  const relatedProducts = products
    .filter(p => p.id !== product.id && (p.category === product.category || p.tag === product.tag))
    .slice(0, 3);

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
                <h2 className="title text-white" style={{ fontSize: '36px', fontWeight: 'bold' }}>Product Details</h2>
                <div className="breadcrumbs text-white-50 mt-2">
                  <a href="#" onClick={(e) => { e.preventDefault(); handleLinkClick('/'); }} className="text-white-50">Home</a>
                  <span className="mx-2">/</span>
                  <a href="#" onClick={(e) => { e.preventDefault(); handleLinkClick('/shop'); }} className="text-white-50">Shop</a>
                  <span className="mx-2">/</span>
                  <span>{product.title}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main product info */}
      <section className="section-space">
        <div className="container">
          <div className="row">
            {/* Image Gallery */}
            <div className="col-md-6 col-lg-6 mb-5 mb-md-0">
              <div className="product-single-thumb border p-3 rounded bg-white text-center">
                <img 
                  src={product.image} 
                  alt={product.title} 
                  style={{ maxWidth: '100%', maxHeight: '500px', objectFit: 'contain' }}
                />
              </div>
            </div>

            {/* Details area */}
            <div className="col-md-6 col-lg-6">
              <div className="product-details-content">
                <h5 className="product-details-collection" style={{ textTransform: 'uppercase', color: '#999', fontSize: '13px', letterSpacing: '1px' }}>
                  {product.collection || 'Cosmetics'}
                </h5>
                <h3 className="product-details-title" style={{ fontSize: '28px', fontWeight: 'bold', margin: '15px 0' }}>
                  {product.title}
                </h3>
                
                <div className="product-details-review mb-4 d-flex align-items-center">
                  <div className="product-review-icon" style={{ color: '#ffb300' }}>
                    {Array.from({ length: 5 }).map((_, i) => (
                      <i 
                        key={i} 
                        className={`fa ${
                          i < Math.floor(product.rating) 
                            ? 'fa-star' 
                            : i < product.rating 
                            ? 'fa-star-half-o' 
                            : 'fa-star-o'
                        }`}
                        style={{ marginRight: '4px' }}
                      />
                    ))}
                  </div>
                  <span className="product-review-show ms-3 text-muted" style={{ fontSize: '14px' }}>
                    ({product.reviews} customer reviews)
                  </span>
                </div>

                <p className="mb-4 text-secondary" style={{ lineHeight: '1.7', fontSize: '15px' }}>
                  {product.description}
                </p>

                {/* Price Display */}
                <div className="prices mb-4 d-flex align-items-baseline">
                  <span className="price text-dark font-weight-bold" style={{ fontSize: '30px', fontWeight: '700' }}>
                    ${product.price.toFixed(2)}
                  </span>
                  {product.oldPrice && (
                    <span className="price-old text-muted ms-3 text-decoration-line-through" style={{ fontSize: '20px' }}>
                      ${product.oldPrice.toFixed(2)}
                    </span>
                  )}
                </div>

                {/* Quantity Controls */}
                <div className="product-details-pro-qty mb-4 d-flex align-items-center">
                  <span className="me-3 font-weight-bold text-dark">Quantity:</span>
                  <div className="pro-qty d-flex align-items-center" style={{ border: '1px solid #ddd', borderRadius: '4px', overflow: 'hidden' }}>
                    <button 
                      onClick={() => setQty(prev => Math.max(1, prev - 1))}
                      style={{ border: 'none', background: '#f5f5f5', width: '40px', height: '40px', cursor: 'pointer' }}
                    >
                      -
                    </button>
                    <input 
                      type="text" 
                      title="Quantity" 
                      value={qty} 
                      readOnly 
                      style={{ width: '50px', height: '40px', border: 'none', textAlign: 'center', fontWeight: '600' }}
                    />
                    <button 
                      onClick={() => setQty(prev => prev + 1)}
                      style={{ border: 'none', background: '#f5f5f5', width: '40px', height: '40px', cursor: 'pointer' }}
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* Actions */}
                <div className="product-details-action d-flex align-items-center gap-3 pt-3 border-top">
                  <button 
                    type="button" 
                    className="btn btn-black text-white font-weight-bold" 
                    style={{ backgroundColor: '#222', padding: '12px 30px', borderRadius: '4px', border: 'none' }}
                    onClick={handleAddToCart}
                  >
                    Add to Cart
                  </button>
                  <button 
                    type="button" 
                    className="btn btn-outline-dark" 
                    style={{ padding: '12px 20px', borderRadius: '4px' }}
                    onClick={() => toggleWishlist(product)}
                  >
                    <i className="fa fa-heart-o me-2"></i> Wishlist
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Description & Reviews Tabs */}
          <div className="row mt-5 pt-4">
            <div className="col-12">
              <div className="nav nav-tabs border-bottom mb-4 d-flex gap-4">
                <button 
                  className={`btn nav-link pb-2 bg-transparent rounded-0 border-0 ${activeTab === 'description' ? 'active font-weight-bold text-dark border-bottom border-dark' : 'text-muted'}`}
                  onClick={() => setActiveTab('description')}
                  style={{ borderBottomWidth: '2px !important' }}
                >
                  Description
                </button>
                <button 
                  className={`btn nav-link pb-2 bg-transparent rounded-0 border-0 ${activeTab === 'reviews' ? 'active font-weight-bold text-dark border-bottom border-dark' : 'text-muted'}`}
                  onClick={() => setActiveTab('reviews')}
                >
                  Reviews ({product.reviews})
                </button>
              </div>
              
              <div className="tab-content">
                {activeTab === 'description' ? (
                  <div className="tab-pane fade show active">
                    <p style={{ lineHeight: '1.8' }} className="text-secondary">
                      This cosmetic formula contains premium skin-identical ingredients. It mimics the skins natural barrier functions to prevent moisture loss, promote collagen repair, and restore vital cell energy. Regular usage helps refine skin texture, fade light wrinkles, and produce a youthful glowing tone. Free of harsh fillers, parabens, and sulfates.
                    </p>
                  </div>
                ) : (
                  <div className="tab-pane fade show active">
                    <div className="review-list">
                      <div className="border-bottom pb-3 mb-3">
                        <div className="d-flex justify-content-between mb-2">
                          <h6 className="m-0 font-weight-bold">Jessica M.</h6>
                          <span className="text-muted" style={{ fontSize: '12px' }}>February 10, 2026</span>
                        </div>
                        <div className="rating mb-2" style={{ color: '#ffb300' }}><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i></div>
                        <p className="text-secondary m-0" style={{ fontSize: '14px' }}>Absolutely in love with this face cream! It is lightweight, non-greasy, and makes my skin look fresh every morning.</p>
                      </div>
                      <div className="border-bottom pb-3 mb-3">
                        <div className="d-flex justify-content-between mb-2">
                          <h6 className="m-0 font-weight-bold">David K.</h6>
                          <span className="text-muted" style={{ fontSize: '12px' }}>January 24, 2026</span>
                        </div>
                        <div className="rating mb-2" style={{ color: '#ffb300' }}><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star-half-o"></i></div>
                        <p className="text-secondary m-0" style={{ fontSize: '14px' }}>Works well on my dry skin. Reduced fine lines around my eyes after two weeks of consistent night usage.</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Related Products */}
          {relatedProducts.length > 0 && (
            <div className="row mt-5 pt-4">
              <div className="col-12">
                <h3 className="mb-4" style={{ fontSize: '24px', fontWeight: 'bold' }}>Related Products</h3>
              </div>
              {relatedProducts.map((prod) => (
                <div key={prod.id} className="col-6 col-md-4 mb-4">
                  <div className="product-item product-st2-item border p-3 rounded">
                    <div className="product-thumb">
                      <a href="#" onClick={(e) => { e.preventDefault(); handleLinkClick(`/product-details?id=${prod.id}`); }} className="d-block text-center">
                        <img src={prod.image} style={{ maxHeight: '250px', objectFit: 'contain' }} alt={prod.title} />
                      </a>
                    </div>
                    <div className="product-info mt-3">
                      <h4 className="title" style={{ fontSize: '16px' }}>
                        <a href="#" onClick={(e) => { e.preventDefault(); handleLinkClick(`/product-details?id=${prod.id}`); }}>
                          {prod.title}
                        </a>
                      </h4>
                      <div className="prices mt-1">
                        <span className="price">${prod.price.toFixed(2)}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
