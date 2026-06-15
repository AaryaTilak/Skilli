import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ArrowDownRight, Plus, Check } from 'lucide-react';
import Testimonials from '../../components/Testimonials/Testimonials';
import '../Home/Home.css'; // Reuse CTA and common grids
import './Pricing.css';

export default function Pricing() {
  const [activePlan, setActivePlan] = useState('pro');
  const [activeActivity, setActiveActivity] = useState('connections');

  const plans = [
    {
      id: 'basic',
      name: 'Basic Plan',
      price: '$50',
      features: ['2+ Reservation', '1+ Guest Passes', 'Standard Court Access']
    },
    {
      id: 'pro',
      name: 'Pro Membership',
      price: '$120',
      features: ['Warm-up Lesson', '4+ Reservation', '2+ Guest Passes', 'Lockers Access']
    },
    {
      id: 'elite',
      name: 'Elite Plan',
      price: '$200',
      features: ['Unlimited Booking', '5+ Guest Passes', 'Vantage Court Access', 'All Amenities Included']
    }
  ];

  return (
    <div className="pricing-page animate-fade-in">
      
      {/* Section 1: Membership Plans */}
      <section className="pricing-plans-section">
        <div className="container pricing-plans-layout">
          
          {/* Left: Interactive plan accordion/cards */}
          <div className="plans-accordion animate-fade-in-up">
            {plans.map((plan) => {
              const isExpanded = activePlan === plan.id;
              return (
                <div 
                  key={plan.id} 
                  className={`plan-accordion-card ${isExpanded ? 'active-pro-card' : ''}`}
                >
                  <button 
                    className="plan-header-toggle"
                    onClick={() => setActivePlan(isExpanded ? '' : plan.id)}
                  >
                    <h3>{plan.name}</h3>
                    <span className="toggle-icon">
                      {isExpanded ? <ArrowDownRight size={20} /> : <Plus size={20} />}
                    </span>
                  </button>

                  {isExpanded && (
                    <div className="plan-details-content animate-fade-in">
                      <div className="plan-price-block">
                        <span className="price-num">{plan.price}</span>
                        <span className="price-period">/ month</span>
                      </div>
                      <div className="plan-features-grid">
                        {plan.features.map((feature, idx) => (
                          <div key={idx} className="plan-feature-item">
                            <span className="check-bullet">✔</span>
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                      <Link to="/contact" className="btn-buy-membership">
                        Buy Membership <span className="arrow-circle"><ArrowUpRight size={16} /></span>
                      </Link>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right: Description Content */}
          <div className="plans-desc-content animate-fade-in-up">
            <span className="tag-badge">Membership</span>
            <h2>Three refined membership plans elevate your game</h2>
            <p className="plans-desc-para">
              Choose a plan that fits your playing cadence. Add teammates, reserve premium indoor courts, and train under certified professionals.
            </p>
            <div className="plans-showcase-img" style={{ backgroundImage: `url('/lessons_tennis.png')` }}>
              <div className="img-overlay-glass"></div>
            </div>
          </div>

        </div>
      </section>

      {/* Section 2: Flexible of Activity */}
      <section className="flexible-activity-section">
        <div className="container flexible-activity-layout">
          
          {/* Left Side: Activity Accordion */}
          <div className="flexible-left-side animate-fade-in-up">
            <span className="tag-badge">Any Obstacles</span>
            <h2>Explore to Our Flexible of activity</h2>
            
            <div className="checklist-badge-row">
              <span className="checklist-badge-pill">
                <span className="check-icon-small">✔</span> Baseline Tiers Registration
              </span>
              <span className="checklist-badge-pill">
                <span className="check-icon-small">✔</span> Championship Tourney
              </span>
            </div>

            <div className="activity-accordion">
              {/* Connection Accordion Item */}
              <div className={`activity-item ${activeActivity === 'connections' ? 'expanded' : ''}`}>
                <button 
                  className="activity-header"
                  onClick={() => setActiveActivity(activeActivity === 'connections' ? '' : 'connections')}
                >
                  <h3>Connections</h3>
                  <span className="activity-icon">{activeActivity === 'connections' ? '−' : '+'}</span>
                </button>
                {activeActivity === 'connections' && (
                  <p className="activity-body animate-fade-in">
                    Build connections with people, purpose and the momentum that moves you forward.
                  </p>
                )}
              </div>

              {/* Sport Package Accordion Item */}
              <div className={`activity-item ${activeActivity === 'sport' ? 'expanded' : ''}`}>
                <button 
                  className="activity-header"
                  onClick={() => setActiveActivity(activeActivity === 'sport' ? '' : 'sport')}
                >
                  <h3>Sport Package</h3>
                  <span className="activity-icon">{activeActivity === 'sport' ? '−' : '+'}</span>
                </button>
                {activeActivity === 'sport' && (
                  <p className="activity-body animate-fade-in">
                    Access premium court schedules, custom tennis balls, rackets, and group tournament slots.
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Right Side: Immersive Blue Feature Card */}
          <div className="flexible-right-side animate-fade-in-up">
            <div className="precision-glowing-card">
              <div className="precision-card-content">
                <span className="badge-est">⚡ EST - 1996</span>
                <p className="precision-desc-text">
                  Built to connect with people, purpose and the momentum that moves you forward.
                </p>
                <h3>Visionary Precision Play</h3>
                <Link to="/contact" className="btn-join-precision">
                  Join Now <ArrowUpRight size={16} />
                </Link>
              </div>
              <div className="precision-card-image" style={{ backgroundImage: `url('/balls_tennis.png')` }}></div>
            </div>
          </div>

        </div>
      </section>

      {/* Section 3: How It Apply */}
      <section className="how-it-applies-section pricing-applies">
        <div className="container">
          <div className="section-title-center">
            <h2>How It Apply</h2>
          </div>

          <div className="steps-grid">
            <div className="step-card animate-fade-in-up">
              <div className="step-number">01</div>
              <h3>Join the Club</h3>
              <p>Build connections with people, purpose and the momentum that moves you forward.</p>
            </div>
            <div className="step-card animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              <div className="step-number">02</div>
              <h3>Book Your Court</h3>
              <p>Build connections with people, purpose and the momentum that moves you forward.</p>
            </div>
            <div className="step-card animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="step-number">03</div>
              <h3>Meet Your Coach</h3>
              <p>Build connections with people, purpose and the momentum that moves you forward.</p>
            </div>
          </div>

          <div className="steps-action animate-fade-in-up">
            <Link to="/contact" className="btn-primary">
              Register Now <ArrowUpRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Section 4: Testimonials */}
      <Testimonials />

      {/* Section 5: Precision Play Banner */}
      <section className="precision-play-section">
        <div className="container precision-layout">
          <div className="precision-content animate-fade-in-up">
            <h2>Visionary Precision Play</h2>
            <p>
              Built to connect with people, purpose and the momentum that moves you forward.
            </p>
            <Link to="/contact" className="btn-primary">
              Join Now <ArrowUpRight size={18} />
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
