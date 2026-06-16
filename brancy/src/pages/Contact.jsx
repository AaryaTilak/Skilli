import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Contact() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

  const handleLinkClick = (path) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill out all required fields.');
      return;
    }
    alert(`Thank you, ${formData.name}! Your message has been sent successfully. We will get back to you shortly.`);
    setFormData({ name: '', email: '', subject: '', message: '' });
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
                <h2 className="title text-white" style={{ fontSize: '36px', fontWeight: 'bold' }}>Contact Us</h2>
                <div className="breadcrumbs text-white-50 mt-2">
                  <a href="#" onClick={(e) => { e.preventDefault(); handleLinkClick('/'); }} className="text-white-50">Home</a>
                  <span className="mx-2">/</span>
                  <span>Contact</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-space">
        <div className="container">
          <div className="row">
            {/* Contact Information */}
            <div className="col-lg-5 mb-5 mb-lg-0">
              <div className="contact-info-wrap bg-light p-4 p-md-5 rounded">
                <h3 className="mb-4 font-weight-bold" style={{ fontSize: '24px' }}>Get In Touch</h3>
                <p className="text-secondary mb-4" style={{ lineHeight: '1.7' }}>
                  Have questions about our cosmetics, shipping, or need a personalized skincare recommendation? Contact our customer support team!
                </p>

                <div className="contact-info-item d-flex mb-3 gap-3">
                  <div className="icon text-dark" style={{ fontSize: '20px' }}>
                    <i className="fa fa-phone"></i>
                  </div>
                  <div>
                    <h6 className="font-weight-bold text-dark m-0">Phone Number</h6>
                    <p className="text-secondary m-0">+1 (800) 555-0199</p>
                  </div>
                </div>

                <div className="contact-info-item d-flex mb-3 gap-3">
                  <div className="icon text-dark" style={{ fontSize: '20px' }}>
                    <i className="fa fa-envelope"></i>
                  </div>
                  <div>
                    <h6 className="font-weight-bold text-dark m-0">Email Address</h6>
                    <p className="text-secondary m-0">info@skillicosmetics.com</p>
                  </div>
                </div>

                <div className="contact-info-item d-flex gap-3">
                  <div className="icon text-dark" style={{ fontSize: '20px' }}>
                    <i className="fa fa-map-marker"></i>
                  </div>
                  <div>
                    <h6 className="font-weight-bold text-dark m-0">Location</h6>
                    <p className="text-secondary m-0">121 Beauty Square, Suite A, New York, NY</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="col-lg-7">
              <div className="contact-form bg-white border p-4 p-md-5 rounded">
                <h3 className="mb-4 font-weight-bold" style={{ fontSize: '24px' }}>Send Us a Message</h3>
                <form onSubmit={handleContactSubmit}>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <label className="form-label text-dark font-weight-bold">Your Name <span className="text-danger">*</span></label>
                      <input 
                        type="text" 
                        className="form-control" 
                        value={formData.name} 
                        onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))} 
                        required 
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label text-dark font-weight-bold">Email Address <span className="text-danger">*</span></label>
                      <input 
                        type="email" 
                        className="form-control" 
                        value={formData.email} 
                        onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))} 
                        required 
                      />
                    </div>
                    <div className="col-12">
                      <label className="form-label text-dark font-weight-bold">Subject</label>
                      <input 
                        type="text" 
                        className="form-control" 
                        value={formData.subject} 
                        onChange={(e) => setFormData(prev => ({ ...prev, subject: e.target.value }))} 
                      />
                    </div>
                    <div className="col-12">
                      <label className="form-label text-dark font-weight-bold">Message <span className="text-danger">*</span></label>
                      <textarea 
                        className="form-control" 
                        rows="5" 
                        value={formData.message} 
                        onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))} 
                        required
                      ></textarea>
                    </div>
                    <div className="col-12">
                      <button 
                        type="submit" 
                        className="btn btn-black text-white font-weight-bold px-4 py-3"
                        style={{ backgroundColor: '#222', border: 'none', borderRadius: '4px' }}
                      >
                        Submit Message
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
