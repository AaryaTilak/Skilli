import React from 'react';
import { Link } from 'react-router-dom';
import Accordion from '../../components/Accordion/Accordion';
import Testimonials from '../../components/Testimonials/Testimonials';
import { ArrowUpRight, Award, ShieldAlert, Compass, Target } from 'lucide-react';
import './Matches.css';

export default function Matches() {
  const matchSchedule = [
    {
      title: "Home Run Derby (Tennis Volley Rally)",
      content: "A quick-paced volley competition focusing on reflex volleys, court positioning, and aggressive net play. Players compete in timed rounds to accumulate points.",
      buttonText: "Register Now",
      image: "/coaches_handshake.png"
    },
    {
      title: "Diamond Showdown (Singles Bracket)",
      content: "The ultimate singles tournament of the month. Face off against players of similar skill rankings to claim the Vantage Court Club Cup.",
      buttonText: "Register Now",
      image: "/hero_tennis.png"
    },
    {
      title: "Fastpitch Frenzy (Serve Speed Challenge)",
      content: "Show off your service speed! Competitors get 10 attempts to record their fastest flat serve, measured by our radar system.",
      buttonText: "Register Now",
      image: "/balls_tennis.png"
    },
    {
      title: "All-Star Weekend (Doubles Exhibition)",
      content: "A weekend of mixed-doubles matches, networking, and club barbecues. Perfect for recreational players to meet new partners.",
      buttonText: "Register Now",
      image: "/coaches_handshake.png"
    }
  ];

  return (
    <div className="matches-page">
      {/* Hero section */}
      <section className="matches-hero">
        <div className="container matches-hero-container">
          <span className="tag-badge">Competitions</span>
          <h1 className="matches-title">Match Strategy</h1>
          <p className="matches-subtitle">Explore programs, analyze upcoming schedules, and elevate your tactical court awareness.</p>
        </div>
      </section>

      {/* Grid of Photos */}
      <section className="matches-gallery">
        <div className="container gallery-grid">
          <div className="gallery-main" style={{ backgroundImage: `url('/court_gallery_action.png')` }}></div>
          <div className="gallery-sub-top" style={{ backgroundImage: `url('/lessons_tennis.png')` }}></div>
          <div className="gallery-sub-bottom" style={{ backgroundImage: `url('/balls_tennis.png')` }}></div>
        </div>
      </section>

      {/* Four pillars text block */}
      <section className="matches-pillars">
        <div className="container pillars-grid">
          <div className="pillar-item">
            <div className="pillar-icon"><Award size={24} /></div>
            <h3>Program Overview</h3>
            <p>Our match play structure is designed to challenge players tactically, ensuring that physical stamina is coupled with deep tactical understanding of the court layout and baseline strategy.</p>
          </div>
          <div className="pillar-item">
            <div className="pillar-icon"><ShieldAlert size={24} /></div>
            <h3>Challenges and Solution</h3>
            <p>Moving from practice to high-pressure match situations often leads to unforced errors. We solve this by conducting high-tempo simulated match plays during training sessions.</p>
          </div>
          <div className="pillar-item">
            <div className="pillar-icon"><Compass size={24} /></div>
            <h3>Concept</h3>
            <p>A multi-disciplinary approach blending technical ball-striking, physical speed drills, and psychological focus techniques under extreme court environments.</p>
          </div>
          <div className="pillar-item">
            <div className="pillar-icon"><Target size={24} /></div>
            <h3>Result and Impact</h3>
            <p>Players showcase higher point wins on serve returns, show a 25% reduction in double faults, and report a deeper appreciation for the tactical game.</p>
          </div>
        </div>
      </section>

      {/* Financial/Rookie Stats Section */}
      <section className="stats-section">
        <div className="container stats-layout">
          
          {/* Card Left: Rookie Ready */}
          <div className="stat-card-left" style={{ backgroundImage: `url('/hero_tennis.png')` }}>
            <div className="stat-card-left-overlay"></div>
            <div className="stat-card-left-content">
              <h2>Rookie Ready?</h2>
              <p>Sign up today to join our baseline ranking list and find matching partners.</p>
              <Link to="/contact" className="circle-arrow-btn">
                <ArrowUpRight size={24} />
              </Link>
            </div>
          </div>

          {/* Card Right: Progress metrics */}
          <div className="stat-card-right">
            <span className="tag-badge">Player Training Metrics</span>
            <h2>Decoding Tactical Complexity</h2>
            
            <div className="progress-bars-container">
              <div className="progress-bar-item">
                <div className="progress-label">
                  <span>Basic Volley Development</span>
                  <span>90%</span>
                </div>
                <div className="progress-track">
                  <div className="progress-fill" style={{ width: '90%' }}></div>
                </div>
              </div>

              <div className="progress-bar-item">
                <div className="progress-label">
                  <span>Court Smart Contract (Tactical positioning)</span>
                  <span>95%</span>
                </div>
                <div className="progress-track">
                  <div className="progress-fill" style={{ width: '95%' }}></div>
                </div>
              </div>

              <div className="progress-bar-item">
                <div className="progress-label">
                  <span>Match Security & Strategy Auditing</span>
                  <span>88%</span>
                </div>
                <div className="progress-track">
                  <div className="progress-fill" style={{ width: '88%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming match schedule */}
      <section className="schedule-section">
        <div className="container schedule-layout">
          <div className="schedule-info">
            <span className="tag-badge">Upcoming Events</span>
            <h2>Game On: Upcoming Match Schedule</h2>
            <p>Track your schedule, choose your events, and register. Spots are limited, so reserve your bracket position early.</p>
            <div className="schedule-img-wrapper">
              <img src="/coaches_handshake.png" alt="schedule banner" />
            </div>
          </div>

          <div className="schedule-list">
            <Accordion items={matchSchedule} />
          </div>
        </div>
      </section>

      <Testimonials />
    </div>
  );
}
