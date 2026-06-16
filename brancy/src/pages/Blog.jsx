import React from 'react';
import { useNavigate } from 'react-router-dom';
import { blogs } from '../data/products';

export default function Blog() {
  const navigate = useNavigate();

  const handleLinkClick = (path) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
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
                <h2 className="title text-white" style={{ fontSize: '36px', fontWeight: 'bold' }}>Our Blog</h2>
                <div className="breadcrumbs text-white-50 mt-2">
                  <a href="#" onClick={(e) => { e.preventDefault(); handleLinkClick('/'); }} className="text-white-50">Home</a>
                  <span className="mx-2">/</span>
                  <span>Blog</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blogs Grid */}
      <section className="section-space">
        <div className="container">
          <div className="row mb-n9">
            {blogs.map((b) => (
              <div key={b.id} className="col-sm-6 col-lg-4 mb-8">
                <div className="post-item border rounded overflow-hidden bg-white">
                  <a href="#" onClick={(e) => { e.preventDefault(); handleLinkClick(`/blog-details?id=${b.id}`); }} className="thumb d-block">
                    <img src={b.image} alt={b.title} style={{ width: '100%', height: '240px', objectFit: 'cover' }} />
                  </a>
                  <div className="content p-4">
                    <a 
                      className="post-category text-white px-3 py-1 rounded-pill mb-3 d-inline-block text-decoration-none" 
                      href="#" 
                      onClick={(e) => { e.preventDefault(); handleLinkClick('/blog'); }}
                      style={{ backgroundColor: b.bgColor || '#9CDBFF', fontSize: '12px', textTransform: 'uppercase', fontWeight: '600' }}
                    >
                      {b.category}
                    </a>
                    <h4 className="title" style={{ fontSize: '18px', fontWeight: 'bold', lineHeight: '1.4', marginBottom: '15px' }}>
                      <a href="#" onClick={(e) => { e.preventDefault(); handleLinkClick(`/blog-details?id=${b.id}`); }} className="text-dark text-decoration-none">
                        {b.title}
                      </a>
                    </h4>
                    <p className="text-secondary mb-4" style={{ fontSize: '14px', lineHeight: '1.6' }}>
                      {b.summary}
                    </p>
                    <ul className="meta d-flex justify-content-between align-items-center list-unstyled border-top pt-3 m-0 text-muted" style={{ fontSize: '12px' }}>
                      <li className="author-info">
                        <span>By:</span> <a href="#" onClick={(e) => e.preventDefault()} className="text-muted text-decoration-none font-weight-bold ms-1">{b.author}</a>
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
    </main>
  );
}
