import React from 'react';
import Testimonials from '../../components/Testimonials/Testimonials';
import { Check, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Courts.css';

export default function Courts() {
  const serviceCards = [
    {
      title: "Match Strategy & Game IQ Training",
      image: "/lessons_tennis.png"
    },
    {
      title: "Private & Group Lessons",
      image: "/hero_tennis.png"
    },
    {
      title: "Premium Indoor & Outdoor Courts",
      image: "/lessons_tennis.png"
    },
    {
      title: "Youth Development Training",
      image: "/balls_tennis.png"
    },
    {
      title: "Junior High / High School Training",
      image: "/hero_tennis.png"
    },
    {
      title: "Weekly Tournaments & Match Play",
      image: "/clay_tennis.png"
    },
    {
      title: "Modern & Premium Court Rental",
      image: "/lessons_tennis.png"
    },
    {
      title: "Exclusive Club Activities & Events",
      image: "/hero_tennis.png"
    }
  ];

  const steps = [
    {
      num: "01",
      title: "Join The Club",
      desc: "Sign up for a membership tier that matches your frequency and style of play."
    },
    {
      num: "02",
      title: "Book Your Court",
      desc: "Select your preferred court, date, and lighting mode using our instant scheduling system."
    },
    {
      num: "03",
      title: "Meet Your Coach",
      desc: "Optionally match with one of our 100+ certified trainers to accelerate your skills."
    }
  ];

  return (
    <div className="courts-page">
      {/* Hero section */}
      <section className="courts-hero">
        <div className="container courts-hero-container">
          <span className="tag-badge">Our Facilities</span>
          <h1 className="courts-title">Indoor & Outdoor Courts</h1>
          <p className="courts-subtitle">Choose between premium hard court settings under perfect climate conditions.</p>
        </div>
      </section>

      {/* Feature section */}
      <section className="courts-spotlight">
        <div className="container spotlight-layout">
          <div className="spotlight-img-wrapper animate-fade-in-up">
            <img src="/court_spotlight.png" alt="Indoor court" />
          </div>

          <div className="spotlight-content animate-fade-in-up">
            <h2>Match Strategy & Game IQ Training</h2>
            <p className="spotlight-desc">
              We provide comprehensive training modules focusing on court coverage, double partner syncs, and advanced spin mechanics. Get customized tips based on video analytics.
            </p>

            <div className="why-choose-list">
              <h3>Why Choose Our Master Class</h3>
              <div className="check-grid">
                <div className="check-item">
                  <span className="check-icon"><Check size={16} /></span>
                  <span>Clarity & focus for all families</span>
                </div>
                <div className="check-item">
                  <span className="check-icon"><Check size={16} /></span>
                  <span>Responsive, state-of-the-art courts</span>
                </div>
                <div className="check-item">
                  <span className="check-icon"><Check size={16} /></span>
                  <span>Flexibility for scheduling fits</span>
                </div>
                <div className="check-item">
                  <span className="check-icon"><Check size={16} /></span>
                  <span>Stress-free ranking tests</span>
                </div>
                <div className="check-item">
                  <span className="check-icon"><Check size={16} /></span>
                  <span>Certified instructors</span>
                </div>
                <div className="check-item">
                  <span className="check-icon"><Check size={16} /></span>
                  <span>Dedicated coach matching</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials repeat */}
      <Testimonials />

      {/* Services/Gallery Grid */}
      <section className="services-grid-section">
        <div className="container">
          <div className="services-header">
            <span className="tag-badge">Our Services</span>
            <h2>Premium Indoor & Outdoor Services</h2>
          </div>

          <div className="services-grid">
            {serviceCards.map((service, idx) => (
              <div key={idx} className="service-card animate-fade-in-up" style={{ animationDelay: `${idx * 0.1}s` }}>
                <div className="service-card-img-wrapper">
                  <img src={service.image} alt={service.title} />
                  <div className="service-card-overlay"></div>
                </div>
                <div className="service-card-badge">View Details</div>
                <div className="service-card-content">
                  <h3>{service.title}</h3>
                  <Link to="/contact" className="btn-primary service-card-btn">
                    Register Now <ArrowUpRight size={16} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it Apply section */}
      <section className="how-it-applies-section">
        <div className="container">
          <div className="section-title-center">
            <h2>How It Apply</h2>
            <p>Three simple steps to transition from regular player to Vantage Court Champion.</p>
          </div>

          <div className="steps-grid">
            {steps.map((step, idx) => (
              <div key={idx} className="step-card animate-fade-in-up">
                <div className="step-number">{step.num}</div>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            ))}
          </div>

          <div className="steps-action animate-fade-in-up">
            <Link to="/contact" className="btn-primary">
              Register Now <ArrowUpRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Visionary Precision Play close section */}
      <section className="precision-play-section">
        <div className="container precision-layout">
          <div className="precision-content animate-fade-in-up">
            <h2>Visionary Precision Play</h2>
            <p>
              Our courts use high-speed optical camera tracking, letting you map ball trajectories, speed, and bounce margins to review your sessions.
            </p>
            <Link to="/contact" className="btn-primary">
              Book Court Now <ArrowUpRight size={18} />
            </Link>
          </div>

          <div className="precision-img-wrapper animate-fade-in-up">
            <img src="/balls_tennis.png" alt="Tennis balls basket" />
          </div>
        </div>
      </section>
    </div>
  );
}
