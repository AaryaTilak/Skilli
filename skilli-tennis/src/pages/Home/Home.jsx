import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import Testimonials from '../../components/Testimonials/Testimonials';
import './Home.css';

export default function Home() {
  const [gameMode, setGameMode] = useState(false);
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    alert(`Thank you for subscribing: ${email}`);
    setEmail('');
  };

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container hero-container animate-fade-in-up">
          <div className="hero-card" style={{ backgroundImage: `url('/hero_tennis.png')` }}>
            <div className="hero-overlay"></div>
            
            <div className="hero-content">
              <h1 className="hero-title">
                Join today to learn tennis, improve <span className="highlight-lime">skills</span>, and enjoy the game!
              </h1>
              <p className="hero-subtitle">
                Dignissim orci condimentum sit. Non in nunc aenean massa amet elementum id. Id quam mattis mus malesuada sit. Volutpat sociis tempor quis mauris id.
              </p>
              <div className="hero-actions">
                <Link to="/courts" className="hero-btn-join">
                  Join Now <span className="arrow-circle"><ArrowUpRight size={16} /></span>
                </Link>
              </div>
            </div>

            {/* Social Icons floating on Hero Card */}
            <div className="hero-social-strip">
              <p>Follow us:</p>
              <div className="social-strip-links">
                <a href="https://instagram.com" target="_blank" rel="noreferrer"><svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg></a>
                <a href="https://twitter.com" target="_blank" rel="noreferrer"><svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg></a>
                <a href="https://facebook.com" target="_blank" rel="noreferrer"><svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg></a>
                <a href="https://youtube.com" target="_blank" rel="noreferrer"><svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.41 19c1.71.46 8.59.46 8.59.46s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg></a>
              </div>
            </div>

            {/* Happy Members Overlay Badge */}
            <div className="hero-badge-card glass">
              <div className="avatar-group">
                <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=100" alt="member" />
                <img src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=100" alt="member" />
                <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100" alt="member" />
              </div>
              <span className="badge-text">25+ Satisfied Client With Us</span>
            </div>
          </div>
        </div>
      </section>

      {/* About snippet */}
      <section className="home-intro-section">
        <div className="container home-intro-layout">
          <div className="intro-badge animate-fade-in-up">
            <span className="tag-badge">About Vantage Court</span>
          </div>
          <div className="intro-text animate-fade-in-up">
            <p>
              At Vantage Court, we don't just play tennis, we live it. Since 2021, our club has been a home for players of all levels, from eager beginners to seasoned pros. We provide world-class amenities and premium court experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="features-grid-section">
        <div className="container features-grid">
          
          {/* Card 1: Professional hard courts with Game Mode toggle */}
          <div className={`feature-card card-large ${gameMode ? 'game-mode-active' : ''} animate-fade-in-up`}>
            <div className="card-top-header">
              <span className="card-icon">⚡</span>
              <div className="toggle-wrapper">
                <span className="toggle-label">{gameMode ? 'Night Mode' : 'Day Mode'}</span>
                <label className="switch">
                  <input 
                    type="checkbox" 
                    checked={gameMode} 
                    onChange={() => setGameMode(!gameMode)} 
                  />
                  <span className="slider"></span>
                </label>
              </div>
            </div>
            <h3>Professional hard courts with tournament-grade lighting & climate control.</h3>
            <p>Play in perfect conditions, in any season, day or night. Switch modes to preview court atmosphere!</p>
            <div className="court-visualizer">
              <svg viewBox="0 0 500 220" width="100%" height="100%" className="immersive-court-svg">
                <defs>
                  <linearGradient id="outer-court-grad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="var(--outer-court-start)" />
                    <stop offset="100%" stopColor="var(--outer-court-end)" />
                  </linearGradient>
                  <linearGradient id="inner-court-grad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="var(--inner-court-start)" />
                    <stop offset="100%" stopColor="var(--inner-court-end)" />
                  </linearGradient>
                  <linearGradient id="spotlight-left-grad" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#00d2ff" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="#00d2ff" stopOpacity="0" />
                  </linearGradient>
                  <linearGradient id="spotlight-right-grad" x1="1" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#d4fc34" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#d4fc34" stopOpacity="0" />
                  </linearGradient>
                  <filter id="neon-glow" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="3" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>

                {/* Spotlight Beams */}
                <polygon 
                  points="20,-20 180,220 100,220 20,-20" 
                  fill="url(#spotlight-left-grad)" 
                  opacity="var(--spotlight-opacity)" 
                  style={{ transition: 'opacity 0.8s ease' }} 
                />
                <polygon 
                  points="480,-20 320,220 400,220 480,-20" 
                  fill="url(#spotlight-right-grad)" 
                  opacity="var(--spotlight-opacity)" 
                  style={{ transition: 'opacity 0.8s ease' }} 
                />

                {/* Outer court surface */}
                <polygon 
                  points="30,200 470,200 370,40 130,40" 
                  fill="url(#outer-court-grad)" 
                  stroke="var(--court-edge-color)" 
                  strokeWidth="1"
                  style={{ transition: 'fill 0.8s ease, stroke 0.8s ease' }}
                />
                
                {/* Inner court surface (singles) */}
                <polygon 
                  points="80,180 420,180 335,60 165,60" 
                  fill="url(#inner-court-grad)" 
                  style={{ transition: 'fill 0.8s ease' }}
                />

                {/* Court Lines */}
                <g 
                  className="court-lines" 
                  stroke="var(--court-line-color)" 
                  strokeWidth="2" 
                  fill="none" 
                  style={{ filter: 'var(--court-line-glow-filter)', transition: 'stroke 0.8s ease, filter 0.8s ease' }}
                >
                  {/* Left doubles sideline */}
                  <line x1="80" y1="180" x2="165" y2="60" />
                  {/* Right doubles sideline */}
                  <line x1="420" y1="180" x2="335" y2="60" />
                  
                  {/* Left singles sideline */}
                  <line x1="110" y1="180" x2="185" y2="60" />
                  {/* Right singles sideline */}
                  <line x1="390" y1="180" x2="315" y2="60" />
                  
                  {/* Bottom baseline */}
                  <line x1="80" y1="180" x2="420" y2="180" />
                  {/* Top baseline */}
                  <line x1="165" y1="60" x2="335" y2="60" />
                  
                  {/* Service line */}
                  <line x1="147.5" y1="120" x2="352.5" y2="120" />
                  
                  {/* Center service line */}
                  <line x1="250" y1="120" x2="250" y2="60" />
                  
                  {/* Baselines center marks */}
                  <line x1="250" y1="180" x2="250" y2="172" />
                  <line x1="250" y1="60" x2="250" y2="65" />
                </g>

                {/* Net posts */}
                <line x1="70" y1="110" x2="70" y2="140" stroke="var(--net-post-color)" strokeWidth="4" style={{ transition: 'stroke 0.8s ease' }} />
                <line x1="430" y1="110" x2="430" y2="140" stroke="var(--net-post-color)" strokeWidth="4" style={{ transition: 'stroke 0.8s ease' }} />
                
                {/* Net mesh mesh body */}
                <polygon 
                  points="70,120 430,120 430,136 70,136" 
                  fill="var(--net-mesh-color)" 
                  stroke="var(--net-mesh-border)" 
                  strokeWidth="0.5" 
                  style={{ transition: 'fill 0.8s ease, stroke 0.8s ease' }}
                />
                
                {/* Net top white strap */}
                <line x1="70" y1="120" x2="430" y2="120" stroke="var(--net-strap-color)" strokeWidth="2" style={{ transition: 'stroke 0.8s ease' }} />

                {/* Ball Shadow & Ball */}
                <ellipse 
                  cx="220" 
                  cy="160" 
                  rx="10" 
                  ry="4" 
                  fill="rgba(0,0,0,var(--ball-shadow-opacity))" 
                  style={{ transition: 'fill 0.8s ease' }} 
                />
                <circle 
                  cx="220" 
                  cy="153" 
                  r="7" 
                  fill="var(--ball-color)" 
                  style={{ filter: 'var(--ball-glow-filter)', transition: 'fill 0.8s ease, filter 0.8s ease' }} 
                />
              </svg>
            </div>
          </div>

          {/* Card 2: Private Lessons */}
          <div className="feature-card card-medium lesson-card animate-fade-in-up" style={{ backgroundImage: `url('/lessons_tennis.png')` }}>
            <div className="card-image-overlay"></div>
            <div className="card-image-content">
              <h3>Private & Group Lessons</h3>
              <p>Personalized training by certified ITA professionals.</p>
              <Link to="/courts" className="btn-accent card-cta-btn">
                Book Trainer <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>

          {/* Card 3: Pro Coaches rating info */}
          <div className="feature-card card-medium coaches-stats-card animate-fade-in-up">
            <span className="card-icon">🏆</span>
            <h3>100+ Pro Coaches</h3>
            <p>Highly qualified trainers for every stage of your tennis journey.</p>
            
            <div className="level-bars">
              <div className="level-item">
                <div className="level-info">
                  <span>Beginner</span>
                  <span>55 mins/wk</span>
                </div>
                <div className="dots-indicator">
                  {[...Array(10)].map((_, i) => (
                    <span key={i} className={`dot ${i < 8 ? 'active' : ''}`}></span>
                  ))}
                </div>
              </div>
              <div className="level-item">
                <div className="level-info">
                  <span>Intermediate</span>
                  <span>45 mins/wk</span>
                </div>
                <div className="dots-indicator">
                  {[...Array(10)].map((_, i) => (
                    <span key={i} className={`dot ${i < 6 ? 'active' : ''}`}></span>
                  ))}
                </div>
              </div>
              <div className="level-item">
                <div className="level-info">
                  <span>Advanced</span>
                  <span>38 mins/wk</span>
                </div>
                <div className="dots-indicator">
                  {[...Array(10)].map((_, i) => (
                    <span key={i} className={`dot ${i < 9 ? 'active' : ''}`}></span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Card 4: Vision & Passion */}
          <div className="feature-card card-small vision-card animate-fade-in-up">
            <h3>Vision, Passion</h3>
            <p>
              We aim to foster a vibrant tennis culture by making court bookings effortless, tutoring top-notch, and building lifelong sporting connections.
            </p>
          </div>

        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* Clay Court Updates Banner */}
      <section className="cta-banner-section" style={{ backgroundImage: `url('/clay_tennis.png')` }}>
        <div className="cta-banner-overlay"></div>
        <div className="container cta-banner-container animate-fade-in-up">
          <div className="cta-banner-content">
            <span className="tag-badge-light">Newsletter</span>
            <h2>Get The Latest Updates, Special Offers and Exclusive Event Invitations</h2>
            <form className="cta-banner-form" onSubmit={handleSubscribe}>
              <input 
                type="email" 
                placeholder="Enter your email address" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
