import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { useApp } from '../context/AppContext';
import { products, blogs } from '../data/products';

import 'swiper/css';
import 'swiper/css/pagination';

export default function Home() {
  const navigate = useNavigate();
  const { addToCart, toggleWishlist, openQuickView } = useApp();

  const handleLinkClick = (path) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Split products for different sections
  const bestProducts = products.slice(0, 6);
  const topSaleProducts = products.slice(3, 7);

  return (
    <main className="main-content">
      {/* Polished Minimalist Swiper Slider */}
      <section className="hero-two-slider-area position-relative">
        <Swiper
          modules={[Autoplay, Pagination]}
          loop={true}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          pagination={{ clickable: true, el: '.hero-two-slider-pagination' }}
          className="hero-two-slider-container"
        >
          {/* Slide 1 */}
          <SwiperSlide className="hero-two-slide-item" style={{ display: 'block' }}>
            <div className="container">
              <div className="row align-items-center position-relative">
                <div className="col-12 col-md-6">
                  <div className="hero-two-slide-content">
                    <div className="hero-two-slide-text-img">
                        <span style={{
                          fontFamily: "'Playfair Display', serif",
                          fontWeight: 700,
                          fontSize: '13px',
                          letterSpacing: '0.3em',
                          textTransform: 'uppercase',
                          color: '#bbb',
                          display: 'block',
                          marginBottom: '8px'
                        }}>Premium Skincare</span>
                    </div>
                    <h2 className="hero-two-slide-title">ANTI AGEING</h2>
                    <p className="hero-two-slide-desc">
                      Nourish your skin with natural botanical extracts. Restores natural glow, hydration, and youthful bounce.
                    </p>
                    <div className="hero-two-slide-meta">
                      <button className="btn btn-border-primary" onClick={() => handleLinkClick('/shop')}>
                        BUY NOW
                      </button>
                      <a 
                        className="ht-popup-video" 
                        href="https://player.vimeo.com/video/172601404?autoplay=1"
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        <i className="fa fa-play icon"></i>
                        <span>Play Now</span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <div className="hero-two-slide-thumb">
                    <img 
                      src="https://template.hasthemes.com/brancy/brancy/assets/images/slider/slider3.webp" 
                      width="690" 
                      height="690" 
                      alt="Slider Product" 
                    />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 2 */}
          <SwiperSlide className="hero-two-slide-item" style={{ display: 'block' }}>
            <div className="container">
              <div className="row align-items-center position-relative">
                <div className="col-12 col-md-6">
                  <div className="hero-two-slide-content">
                    <div className="hero-two-slide-text-img">
                        <span style={{
                          fontFamily: "'Playfair Display', serif",
                          fontWeight: 700,
                          fontSize: '13px',
                          letterSpacing: '0.3em',
                          textTransform: 'uppercase',
                          color: '#bbb',
                          display: 'block',
                          marginBottom: '8px'
                        }}>Natural Beauty</span>
                    </div>
                    <h2 className="hero-two-slide-title">CLEAN FRESH</h2>
                    <p className="hero-two-slide-desc">
                      Gently cleanse and revitalize skin. Handcrafted formulations for daily luxury organic care.
                    </p>
                    <div className="hero-two-slide-meta">
                      <button className="btn btn-border-primary" onClick={() => handleLinkClick('/shop')}>
                        BUY NOW
                      </button>
                      <a 
                        className="ht-popup-video" 
                        href="https://player.vimeo.com/video/172601404?autoplay=1"
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        <i className="fa fa-play icon"></i>
                        <span>Play Now</span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <div className="hero-two-slide-thumb">
                    <img 
                      src="https://template.hasthemes.com/brancy/brancy/assets/images/slider/slider4.webp" 
                      width="690" 
                      height="690" 
                      alt="Slider Product" 
                    />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
        
        {/* Swiper Pagination indicator bullet layout */}
        <div className="hero-two-slider-pagination swiper-pagination-clickable swiper-pagination-bullets" style={{ textAlign: 'center', marginTop: '20px' }}></div>
      </section>

      {/* Category Banner Areas */}
      <section className="section-space">
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-lg-4">
              <a href="#" onClick={(e) => { e.preventDefault(); handleLinkClick('/shop'); }} className="product-banner-item">
                <img src="https://template.hasthemes.com/brancy/brancy/assets/images/shop/banner/4.webp" width="370" height="370" alt="Banner" />
              </a>
            </div>
            <div className="col-sm-6 col-lg-4 mt-sm-0 mt-6">
              <a href="#" onClick={(e) => { e.preventDefault(); handleLinkClick('/shop'); }} className="product-banner-item">
                <img src="https://template.hasthemes.com/brancy/brancy/assets/images/shop/banner/5.webp" width="370" height="370" alt="Banner" />
              </a>
            </div>
            <div className="col-sm-6 col-lg-4 mt-lg-0 mt-6">
              <a href="#" onClick={(e) => { e.preventDefault(); handleLinkClick('/shop'); }} className="product-banner-item">
                <img src="https://template.hasthemes.com/brancy/brancy/assets/images/shop/banner/6.webp" width="370" height="370" alt="Banner" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Best Products Section */}
      <section className="section-space pt-0">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section-title">
                <h2 className="title">Best Product</h2>
                <p className="m-0">Pure organic beauty formulations crafted to deliver flawless health and radiance.</p>
              </div>
            </div>
          </div>
          
          <div className="row mb-n4 mb-sm-n10 g-3 g-sm-6">
            {bestProducts.map((prod) => (
              <div key={prod.id} className="col-6 col-lg-4 mb-4 mb-sm-9">
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
                    
                    {/* Action buttons */}
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
        </div>
      </section>

      {/* Large Banner Section */}
      <section className="section-space pt-0">
        <div className="container">
          <a href="#" onClick={(e) => { e.preventDefault(); handleLinkClick('/shop'); }} className="product-banner-item">
            <img src="https://template.hasthemes.com/brancy/brancy/assets/images/shop/banner/7.webp" width="1170" height="240" alt="Banner" style={{ width: '100%', height: 'auto' }} />
          </a>
        </div>
      </section>

      {/* Top Sale Section */}
      <section className="section-space pt-0">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section-title">
                <h2 className="title">Top Sale Products</h2>
                <p className="m-0">Get exclusive discounts on our highest rated skincare essentials today.</p>
              </div>
            </div>
          </div>
          
          <div className="row mb-n4 mb-sm-n10 g-3 g-sm-6">
            {topSaleProducts.map((prod) => (
              <div key={prod.id} className="col-6 col-lg-4 mb-4 mb-sm-10">
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
        </div>
      </section>

      {/* Brand Logos */}
      <div className="section-space pt-0">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="brand-logo-area" style={{ borderTop: '1px solid #eee', borderBottom: '1px solid #eee', padding: '30px 0' }}>
                <div className="d-flex flex-wrap justify-content-between align-items-center gap-4">
                  <img src="https://template.hasthemes.com/brancy/brancy/assets/images/brand-logo/1.webp" alt="Brand" style={{ opacity: 0.6 }} />
                  <img src="https://template.hasthemes.com/brancy/brancy/assets/images/brand-logo/2.webp" alt="Brand" style={{ opacity: 0.6 }} />
                  <img src="https://template.hasthemes.com/brancy/brancy/assets/images/brand-logo/3.webp" alt="Brand" style={{ opacity: 0.6 }} />
                  <img src="https://template.hasthemes.com/brancy/brancy/assets/images/brand-logo/4.webp" alt="Brand" style={{ opacity: 0.6 }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Blog Section */}
      <section className="section-space pt-0">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section-title text-center">
                <h2 className="title">Blog posts</h2>
                <p>Stay up to date with modern beauty tips, skincare scientific news, and spa logs.</p>
              </div>
            </div>
          </div>
          
          <div className="row mb-n9">
            {blogs.map((b) => (
              <div key={b.id} className="col-sm-6 col-lg-4 mb-8">
                <div className="post-item">
                  <a href="#" onClick={(e) => { e.preventDefault(); handleLinkClick(`/blog-details?id=${b.id}`); }} className="thumb">
                    <img src={b.image} width="370" height="320" alt={b.title} />
                  </a>
                  <div className="content">
                    <a 
                      className="post-category" 
                      href="#" 
                      onClick={(e) => { e.preventDefault(); handleLinkClick('/blog'); }}
                      style={{ backgroundColor: b.bgColor }}
                    >
                      {b.category}
                    </a>
                    <h4 className="title">
                      <a href="#" onClick={(e) => { e.preventDefault(); handleLinkClick(`/blog-details?id=${b.id}`); }}>
                        {b.title}
                      </a>
                    </h4>
                    <ul className="meta">
                      <li className="author-info">
                        <span>By:</span> <a href="#" onClick={(e) => e.preventDefault()}>{b.author}</a>
                      </li>
                      <li className="post-date">{b.date}</li>
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Area */}
      <section className="section-space pt-0">
        <div className="container">
          <div 
            className="newsletter-content-wrap" 
            style={{ 
              backgroundImage: `url(https://template.hasthemes.com/brancy/brancy/assets/images/photos/bg1.webp)`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              borderRadius: '8px'
            }}
          >
            <div className="newsletter-content">
              <div className="section-title mb-0">
                <h2 className="title text-white">Join with us</h2>
                <p className="text-white-50">Subscribe to our newsletter to receive coupon updates and alerts.</p>
              </div>
            </div>
            <div className="newsletter-form">
              <form onSubmit={(e) => { e.preventDefault(); alert('Subscribed successfully!'); }}>
                <input type="email" className="form-control" placeholder="enter your email" required />
                <button className="btn-submit" type="submit">
                  <i className="fa fa-paper-plane"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      
      {/* Styles to polish the minimal template Swiper slider */}
      <style>{`
        /* Optimize slide entry animations to be immediate & premium */
        .hero-two-slide-item.swiper-slide-active .hero-two-slide-content .hero-two-slide-text-img {
          animation-delay: 0.1s !important;
          animation-duration: 0.8s !important;
          animation-fill-mode: both !important;
        }
        .hero-two-slide-item.swiper-slide-active .hero-two-slide-content .hero-two-slide-title {
          animation-delay: 0.3s !important;
          animation-duration: 0.8s !important;
          animation-fill-mode: both !important;
        }
        .hero-two-slide-item.swiper-slide-active .hero-two-slide-content .hero-two-slide-desc {
          animation-delay: 0.5s !important;
          animation-duration: 0.8s !important;
          animation-fill-mode: both !important;
        }
        .hero-two-slide-item.swiper-slide-active .hero-two-slide-content .btn {
          animation-delay: 0.7s !important;
          animation-duration: 0.8s !important;
          animation-fill-mode: both !important;
        }
        .hero-two-slide-item.swiper-slide-active .hero-two-slide-content .ht-popup-video {
          animation-delay: 0.8s !important;
          animation-duration: 0.8s !important;
          animation-fill-mode: both !important;
        }

        .hero-two-slide-title {
          font-family: 'Outfit', sans-serif !important;
          font-weight: 700 !important;
          letter-spacing: -1px;
          color: #222 !important;
        }
        .hero-two-slide-desc {
          font-family: 'Inter', sans-serif !important;
          line-height: 1.8;
          color: #555;
        }
        .btn-border-primary {
          font-family: 'Outfit', sans-serif !important;
          font-weight: 600;
          letter-spacing: 1px;
          border: 2px solid #222 !important;
          background-color: #222 !important;
          color: #fff !important;
          padding: 12px 35px;
          border-radius: 30px;
          transition: all 0.3s ease;
        }
        .btn-border-primary:hover {
          background-color: transparent !important;
          color: #222 !important;
        }
        .hero-two-slider-pagination .swiper-pagination-bullet-active {
          background: #222 !important;
        }

        /* Responsive Mobile View Polish */
        @media only screen and (max-width: 767px) {
          .hero-two-slide-item {
            padding: 40px 10px 20px !important;
            height: auto !important;
          }
          .hero-two-slide-content {
            padding-top: 10px !important;
            text-align: center !important;
            margin-bottom: 30px;
          }
          .hero-two-slide-text-img {
            max-width: 180px;
            margin: 0 auto 10px !important;
          }
          .hero-two-slide-text-img img {
            width: 100%;
            height: auto;
          }
          .hero-two-slide-title {
            font-size: 32px !important;
            margin-bottom: 12px !important;
            line-height: 1.2 !important;
          }
          .hero-two-slide-desc {
            font-size: 14px !important;
            line-height: 1.6 !important;
            margin: 0 auto 20px !important;
            max-width: 90% !important;
          }
          .hero-two-slide-meta {
            display: flex !important;
            justify-content: center !important;
            align-items: center !important;
            gap: 15px;
          }
          .hero-two-slide-meta .btn-border-primary {
            padding: 10px 25px !important;
            font-size: 13px !important;
          }
          .hero-two-slide-meta .ht-popup-video {
            margin-left: 0 !important;
            font-size: 13px !important;
          }
          .hero-two-slide-thumb {
            text-align: center !important;
            margin-top: 10px;
          }
          .hero-two-slide-thumb img {
            max-width: 80% !important;
            height: auto !important;
          }
        }
      `}</style>
    </main>
  );
}
