import React from 'react';
import Accordion from '../../components/Accordion/Accordion';
import { Play, Check, ShieldCheck, Star, Zap } from 'lucide-react';
import './About.css';

export default function About() {
  const stats = [
    { num: "40M", label: "App downloads" },
    { num: "475+", label: "Professional trainers" },
    { num: "20M", label: "Active users" },
    { num: "40+", label: "Courts managed" }
  ];

  const values = [
    "Fast Empowerment",
    "Transparency",
    "Community Service",
    "Innovation",
    "Security",
    "Professionalism",
    "Efficiency",
    "Success"
  ];

  const trainers = [
    {
      name: "Ivana Djokovic",
      role: "Head Coach",
      avatar: "/coach_ivana.png"
    },
    {
      name: "Alexander Tchaikovsky",
      role: "Court Manager",
      avatar: "/coach_alexander.png"
    },
    {
      name: "Eliana Pavlova",
      role: "Junior Program Coord",
      avatar: "/coach_eliana.png"
    },
    {
      name: "Nick Mercer",
      role: "Fitness Specialist",
      avatar: "/coach_nick.png"
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
    <div className="about-page">
      {/* Hero section */}
      <section className="about-hero">
        <div className="container about-hero-container">
          <span className="tag-badge">Who We Are</span>
          <h1 className="about-title">Guided by Vision, Inspired by Passion</h1>
          <p className="about-subtitle">We believe tennis is more than a sport — it is a vibrant community of shared ambition.</p>
        </div>
      </section>

      {/* Stats Counter Section */}
      <section className="about-stats-section">
        <div className="container stats-counter-grid">
          {stats.map((stat, idx) => (
            <div key={idx} className="stat-counter-item animate-fade-in-up" style={{ animationDelay: `${idx * 0.15}s` }}>
              <h2>{stat.num}</h2>
              <p>{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Corporate values and Action layout */}
      <section className="values-section">
        <div className="container values-layout">
          <div className="values-content animate-fade-in-up">
            <span className="tag-badge">Our Culture</span>
            <h2>Values in Action for Your Success</h2>
            <p className="values-desc">
              We focus on building a safe, positive environment where athletes can grow their game, refine their skills, and connect with like-minded players.
            </p>
            
            <div className="values-check-grid">
              {values.map((v, i) => (
                <div key={i} className="value-check-item">
                  <span className="value-check-icon"><Check size={14} /></span>
                  <span>{v}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="values-video-card animate-fade-in-up" style={{ backgroundImage: `url('/court_spotlight.png')` }}>
            <div className="video-card-overlay"></div>
            <button className="play-btn" aria-label="Play video intro">
              <Play size={24} fill="#0b2239" color="none" />
            </button>
            <span className="video-label">Play Vantage Court Story</span>
          </div>
        </div>
      </section>

      {/* Mission details section */}
      <section className="mission-banner-section">
        <div className="container mission-layout">
          <div className="mission-card animate-fade-in-up">
            <div className="mission-card-icon"><ShieldCheck size={32} /></div>
            <h3>Driven by Purpose, United by Passion.</h3>
            <p>
              We provide tournament-grade court experiences while ensuring players receive modern training inputs. We value sportsmanship above all.
            </p>
          </div>
          <div className="mission-card animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="mission-card-icon"><Zap size={32} /></div>
            <h3>Innovative Court Analytics</h3>
            <p>
              Every Vantage Court court comes integrated with optical tracking to log player spin rates, running speeds, and fault vectors.
            </p>
          </div>
        </div>
      </section>

      {/* Trainers profiles section */}
      <section className="trainers-section">
        <div className="container">
          <div className="trainers-header">
            <span className="tag-badge">Meet The Team</span>
            <h2>Meet Our Pro Trainers</h2>
            <p>Learn from certified ATP/WTA level coaches with decades of combined court experience.</p>
          </div>

          <div className="trainers-grid">
            {trainers.map((t, idx) => (
              <div key={idx} className="trainer-card animate-fade-in-up" style={{ animationDelay: `${idx * 0.15}s` }}>
                <div className="trainer-img-wrapper">
                  <img src={t.avatar} alt={t.name} />
                </div>
                <div className="trainer-info">
                  <h3>{t.name}</h3>
                  <p>{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs section */}
      <section className="faq-section">
        <div className="container faq-layout">
          <div className="faq-info">
            <span className="tag-badge">FAQ</span>
            <h2>Frequently Asked Questions</h2>
            <p>Find quick answers to common queries regarding memberships, court booking policies, and gear.</p>
            <div className="faq-visual-card" style={{ backgroundImage: `url('/lessons_tennis.png')` }}>
              <div className="faq-visual-overlay"></div>
            </div>
          </div>
          <div className="faq-accordion-wrapper">
            <Accordion items={faqItems} />
          </div>
        </div>
      </section>
    </div>
  );
}
