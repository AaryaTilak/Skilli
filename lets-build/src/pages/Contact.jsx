import React from 'react';
import { NavLink } from 'react-router-dom';
import { Phone, Mail, MapPin, Landmark, Car, Bus } from 'lucide-react';
import BookingForm from '../components/BookingForm';

export default function Contact() {
  const contactCards = [
    {
      icon: <Phone size={24} className="text-primary" />,
      title: 'Call Center',
      details1: '+1 (800) 555-0199',
      details2: '+1 (800) 555-0198 (Fax)',
      type: 'phone'
    },
    {
      icon: <Mail size={24} className="text-teal" />,
      title: 'Email Support',
      details1: 'info@meddic-clinic.com',
      details2: 'billing@meddic-clinic.com',
      type: 'email'
    },
    {
      icon: <MapPin size={24} className="text-accent" />,
      title: 'Our Location',
      details1: '123 Medical Park Lane, Suite 100',
      details2: 'New York, NY 10001',
      type: 'address'
    }
  ];

  return (
    <div className="contact-page">
      {/* Page Banner */}
      <section className="page-banner">
        <div className="page-banner-overlay"></div>
        <div className="container">
          <h1>Contact Us</h1>
          <div className="breadcrumbs">
            <NavLink to="/">Home</NavLink>
            <span className="separator">/</span>
            <span>Contact Us</span>
          </div>
        </div>
      </section>

      {/* Info Panels */}
      <section className="section contact-info-section">
        <div className="container contact-info-grid">
          {contactCards.map((card, idx) => (
            <div key={idx} className="contact-card-panel">
              <div className="contact-panel-icon">{card.icon}</div>
              <h3>{card.title}</h3>
              {card.type === 'phone' && (
                <>
                  <a href={`tel:${card.details1.replace(/\s+/g, '')}`} className="contact-link">{card.details1}</a>
                  <span className="contact-subdetail">{card.details2}</span>
                </>
              )}
              {card.type === 'email' && (
                <>
                  <a href={`mailto:${card.details1}`} className="contact-link">{card.details1}</a>
                  <span className="contact-subdetail">{card.details2}</span>
                </>
              )}
              {card.type === 'address' && (
                <>
                  <p className="contact-text-detail">{card.details1}</p>
                  <p className="contact-text-detail">{card.details2}</p>
                </>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Main Booking & Map Section */}
      <section className="section section-bg contact-map-booking-section">
        <div className="container contact-map-booking-grid">
          {/* Appointment booking form panel */}
          <div className="contact-booking-wrapper">
            <BookingForm />
          </div>

          {/* Map Location panel */}
          <div className="contact-map-wrapper">
            <div className="map-detail-card">
              <span className="section-tag">Campus Map</span>
              <h2>How To Find Us</h2>
              <p>We are situated in the central medical district, easily accessible by public transit or car.</p>
              
              {/* Premium Map Visual */}
              <div className="campus-map-visual">
                <div className="map-grid-mesh">
                  <div className="map-road road-horizontal"></div>
                  <div className="map-road road-vertical"></div>
                  <div className="map-building meddic-building">
                    <Landmark size={24} className="building-icon" />
                    <span>Meddic Campus</span>
                  </div>
                  <div className="map-building parking-deck">
                    <Car size={16} />
                    <span>Parking</span>
                  </div>
                </div>
                <div className="map-coordinates">
                  <span>LAT: 40.7128° N, LON: 74.0060° W</span>
                </div>
              </div>

              {/* Transit details list */}
              <div className="transit-details">
                <div className="transit-item">
                  <Car className="transit-icon" size={20} />
                  <div>
                    <h4>By Car & Parking</h4>
                    <p>Free parking for patients in the multi-story parking deck adjacent to the main clinic building.</p>
                  </div>
                </div>
                <div className="transit-item">
                  <Bus className="transit-icon" size={20} />
                  <div>
                    <h4>Public Transit</h4>
                    <p>Take Bus Line 14 or Metro Transit Line M directly to the 'Medical Park' Station.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
