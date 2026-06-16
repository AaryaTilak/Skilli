import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { blogs } from '../data/products';

export default function BlogDetails() {
  const location = useLocation();
  const navigate = useNavigate();
  const [blog, setBlog] = useState(blogs[0]);
  const [commentData, setCommentData] = useState({ name: '', email: '', message: '' });

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const idParam = parseInt(params.get('id'));
    const found = blogs.find(b => b.id === idParam);
    if (found) {
      setBlog(found);
    } else {
      setBlog(blogs[0]);
    }
  }, [location.search]);

  const handleLinkClick = (path) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (!commentData.name || !commentData.message) {
      alert('Please fill out all required fields.');
      return;
    }
    alert(`Thank you, ${commentData.name}! Your comment has been posted (mock).`);
    setCommentData({ name: '', email: '', message: '' });
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
                <h2 className="title text-white" style={{ fontSize: '36px', fontWeight: 'bold' }}>Blog Details</h2>
                <div className="breadcrumbs text-white-50 mt-2">
                  <a href="#" onClick={(e) => { e.preventDefault(); handleLinkClick('/'); }} className="text-white-50">Home</a>
                  <span className="mx-2">/</span>
                  <a href="#" onClick={(e) => { e.preventDefault(); handleLinkClick('/blog'); }} className="text-white-50">Blog</a>
                  <span className="mx-2">/</span>
                  <span>{blog.title}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Details Content */}
      <section className="section-space">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="blog-details-wrap bg-white border p-4 p-md-5 rounded">
                {/* Category Badge */}
                <span 
                  className="badge px-3 py-2 text-white rounded-pill mb-3"
                  style={{ backgroundColor: blog.bgColor || '#9CDBFF', textTransform: 'uppercase', fontSize: '12px' }}
                >
                  {blog.category}
                </span>

                {/* Title */}
                <h1 className="blog-title mb-4 font-weight-bold" style={{ fontSize: '28px', lineHeight: '1.4', color: '#222' }}>
                  {blog.title}
                </h1>

                {/* Meta list */}
                <ul className="blog-meta list-inline text-muted mb-4 border-bottom pb-3" style={{ fontSize: '13px' }}>
                  <li className="list-inline-item me-4">
                    <i className="fa fa-user me-2"></i>By: <span className="font-weight-bold text-dark">{blog.author}</span>
                  </li>
                  <li className="list-inline-item me-4">
                    <i className="fa fa-calendar me-2"></i>{blog.date}
                  </li>
                  <li className="list-inline-item">
                    <i className="fa fa-comments me-2"></i>2 Comments
                  </li>
                </ul>

                {/* Hero Image */}
                <div className="blog-details-thumb mb-4">
                  <img 
                    src={blog.image} 
                    alt={blog.title} 
                    className="w-100 rounded" 
                    style={{ maxHeight: '500px', objectFit: 'cover' }}
                  />
                </div>

                {/* Article content */}
                <div className="blog-details-content text-secondary mb-5" style={{ fontSize: '16px', lineHeight: '1.8' }}>
                  <p className="mb-4">
                    {blog.content}
                  </p>
                  <p className="mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam elementum dolor et eros scelerisque vulputate. Morbi in urna nisl. Quisque sit amet lorem dictum, euismod risus eu, sodales turpis. Pellentesque nec eleifend urna. Nam gravida pulvinar turpis et pharetra. Curabitur vel accumsan quam.
                  </p>
                  
                  {/* Quote block */}
                  <blockquote className="border-start border-4 border-dark p-3 my-4 bg-light font-italic text-dark" style={{ fontSize: '18px' }}>
                    "Beauty is how you feel inside, and it reflects in your eyes. It is not something physical."
                  </blockquote>

                  <p>
                    Curabitur id mi vitae magna viverra dictum nec vel erat. Mauris cursus sodales nisl ut dictum. Pellentesque dictum tincidunt magna sed convallis. Aliquam pulvinar eros quis dolor efficitur, ut euismod elit dignissim. Proin facilisis sit amet arcu id tristique.
                  </p>
                </div>

                {/* Comments block */}
                <div className="blog-comments-area border-top pt-5">
                  <h3 className="mb-4 font-weight-bold" style={{ fontSize: '20px' }}>Comments (2)</h3>
                  
                  <div className="comment-list mb-5">
                    <div className="d-flex mb-4 gap-3 bg-light p-3 rounded">
                      <div className="flex-shrink-0">
                        <i className="fa fa-user-circle text-muted" style={{ fontSize: '48px' }}></i>
                      </div>
                      <div>
                        <div className="d-flex justify-content-between align-items-center mb-1">
                          <h6 className="m-0 font-weight-bold text-dark">Rose G.</h6>
                          <span className="text-muted" style={{ fontSize: '11px' }}>Feb 14, 2026</span>
                        </div>
                        <p className="text-secondary m-0" style={{ fontSize: '14px' }}>Very informative post! I tried natural scrubs at home and it really helped improve my skin texture.</p>
                      </div>
                    </div>

                    <div className="d-flex mb-4 gap-3 bg-light p-3 rounded">
                      <div className="flex-shrink-0">
                        <i className="fa fa-user-circle text-muted" style={{ fontSize: '48px' }}></i>
                      </div>
                      <div>
                        <div className="d-flex justify-content-between align-items-center mb-1">
                          <h6 className="m-0 font-weight-bold text-dark">Lian T.</h6>
                          <span className="text-muted" style={{ fontSize: '11px' }}>Feb 15, 2026</span>
                        </div>
                        <p className="text-secondary m-0" style={{ fontSize: '14px' }}>The hot stone therapy guide is wonderful. I will book an appointment this weekend.</p>
                      </div>
                    </div>
                  </div>

                  {/* Comment Form */}
                  <div className="comment-form-wrap border-top pt-4">
                    <h3 className="mb-4 font-weight-bold" style={{ fontSize: '20px' }}>Leave a comment</h3>
                    <form onSubmit={handleCommentSubmit}>
                      <div className="row g-3">
                        <div className="col-md-6">
                          <input 
                            type="text" 
                            className="form-control" 
                            placeholder="Your Name *" 
                            value={commentData.name}
                            onChange={(e) => setCommentData(prev => ({ ...prev, name: e.target.value }))}
                            required 
                          />
                        </div>
                        <div className="col-md-6">
                          <input 
                            type="email" 
                            className="form-control" 
                            placeholder="Your Email" 
                            value={commentData.email}
                            onChange={(e) => setCommentData(prev => ({ ...prev, email: e.target.value }))}
                          />
                        </div>
                        <div className="col-12">
                          <textarea 
                            className="form-control" 
                            rows="4" 
                            placeholder="Your Message *" 
                            value={commentData.message}
                            onChange={(e) => setCommentData(prev => ({ ...prev, message: e.target.value }))}
                            required
                          ></textarea>
                        </div>
                        <div className="col-12">
                          <button 
                            type="submit" 
                            className="btn btn-black text-white font-weight-bold"
                            style={{ backgroundColor: '#222', border: 'none' }}
                          >
                            Post Comment
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
