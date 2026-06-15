import React, { useState } from 'react';
import Accordion from '../../components/Accordion/Accordion';
import { Mail, Phone, MapPin, Globe, ArrowUpRight } from 'lucide-react';
import './Contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you ${formData.name}! Your message has been sent.`);
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const contactDetails = [
    {
      icon: <MapPin size={22} />,
      title: "Address",
      value: "123 Main St, NY 10001"
    },
    {
      icon: <Phone size={22} />,
      title: "Phone",
      value: "+1(333) 000-000"
    },
    {
      icon: <Mail size={22} />,
      title: "Email",
      value: "hi@vantagecourt.com"
    },
    {
      icon: <Globe size={22} />,
      title: "Website",
      value: "www.vantagecourt.com"
    }
  ];

  const faqItems = [
    {
      title: "What's the best membership for casual players?",
      content: "For players looking to play once or twice a week, our Baseline Basic Tier is ideal. It grants full court rental options and access to community match rankings."
    },
    {
      title: "How do I know which skill level I'm at?",
      content: "You can schedule a 15-minute evaluation session with one of our head coaches, or refer to the Skill Matrix guide on our Courts Service page."
    },
    {
      title: "Do I need my own equipment?",
      content: "While we recommend having your own racket, our reception offers premium carbon-composite racket rentals and fresh cans of tennis balls."
    },
    {
      title: "Do you have programs for seniors?",
      content: "Yes! We run 'Golden Aces' doubles clinics every Tuesday and Thursday morning, tailored for senior players looking for competitive, low-impact exercise."
    }
  ];

  return (
    <div className="contact-page">
      {/* Contact Hero */}
      <section className="contact-hero">
        <div className="container contact-hero-container">
          <span className="tag-badge">Get In Touch</span>
          <h1 className="contact-title">Get In Touch!</h1>
          <p className="contact-subtitle">Have questions or want to book a tournament? Drop us a line.</p>
        </div>
      </section>

      {/* Details & Form Section */}
      <section className="contact-main">
        <div className="container contact-main-layout">
          {/* Left: Contact Info & Form */}
          <div className="contact-left-side animate-fade-in-up">
            <div className="details-grid">
              {contactDetails.map((detail, idx) => (
                <div key={idx} className="detail-card">
                  <div className="detail-icon">{detail.icon}</div>
                  <div className="detail-info">
                    <h4>{detail.title}</h4>
                    <p>{detail.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <form className="contact-form-block" onSubmit={handleSubmit}>
              <h3>Send Us A Message</h3>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="form-name">Full Name</label>
                  <input 
                    type="text" 
                    id="form-name"
                    required
                    placeholder="Enter your name" 
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="form-input"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="form-email">Email Address</label>
                  <input 
                    type="email" 
                    id="form-email"
                    required
                    placeholder="Enter your email" 
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="form-input"
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="form-phone">Phone Number (Optional)</label>
                <input 
                  type="text" 
                  id="form-phone"
                  placeholder="Enter phone number" 
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="form-input"
                />
              </div>
              <div className="form-group">
                <label htmlFor="form-msg">Message</label>
                <textarea 
                  id="form-msg"
                  required
                  rows="5"
                  placeholder="Tell us what you need..." 
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="form-input"
                ></textarea>
              </div>
              <button type="submit" className="btn-primary form-submit-btn">
                Send Message <ArrowUpRight size={18} />
              </button>
            </form>
          </div>

          {/* Right: Map / Court Visual Image */}
          <div className="contact-right-side animate-fade-in-up">
            <div className="contact-map-card" style={{ backgroundImage: `url('/court_map.png')` }}>
              <div className="map-card-overlay"></div>
              <div className="map-card-info glass">
                <h4>Vantage Court Arena</h4>
                <p>123 Main St, New York, NY 10001</p>
                <p>Open daily: 6:00 AM - 11:00 PM</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="contact-faq">
        <div className="container contact-faq-layout">
          <div className="faq-info">
            <span className="tag-badge">FAQ</span>
            <h2>We've Gathered Frequently Asked Questions</h2>
            <p>Find answers to general questions here, or fill out the form above if you have a specific request.</p>
          </div>
          <div className="faq-accordion-wrapper">
            <Accordion items={faqItems} />
          </div>
        </div>
      </section>

      {/* Clay court CTA Updates banner */}
      <section className="cta-banner-section" style={{ backgroundImage: `url('/clay_tennis.png')` }}>
        <div className="cta-banner-overlay"></div>
        <div className="container cta-banner-container animate-fade-in-up">
          <div className="cta-banner-content">
            <span className="tag-badge-light">Newsletter</span>
            <h2>Get The Latest Updates, Special Offers and Exclusive Event Invitations</h2>
            <form className="cta-banner-form" onSubmit={(e) => { e.preventDefault(); alert("Subscribed!"); }}>
              <input 
                type="email" 
                placeholder="Enter your email address" 
                required
                className="cta-banner-input"
              />
              <button type="submit" className="btn-accent">
                Subscribe <ArrowUpRight size={18} />
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
