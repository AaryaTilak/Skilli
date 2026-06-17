import { useState } from 'react';
import './index.css';
import Header from './components/Header';
import Features from './components/Features';

/* ─── Testimonials Data ─────────────────────────────────── */
const TESTIMONIALS = [
  {
    stars: 5,
    title: 'Great value home budget tracking 💪🏼',
    text: 'I was recommended SplitLoop from a dear friend and WOW!!! Gives clarity, transparency & mostly saves your relationships. It helped me settle group expenses beyond my expectations.',
    name: 'Karen Lynn',
    role: 'CEO & Co-founder @ Company',
    avatar: '/assets/img/th-3/testimonial-avater-1.jpg',
  },
  {
    stars: 5,
    title: 'I can honestly say that I’ve enjoyed it',
    text: 'Both the transaction log and the simplified debt settle pathways are easy to follow and finish. It’s great to be part of a transparent sharing circle.',
    name: 'Ronald Richards',
    role: 'Businessman',
    avatar: '/assets/img/th-3/testimonial-avater-2.jpg',
  },
  {
    stars: 5,
    title: 'Such a wonderful expense splitting app ❤',
    text: 'Such a wonderful expense splitting plan! For someone who travels regularly but does not want the hassle of manual spreadsheets, this plan has been a lifesaver. You don’t need anything but still get a transparent breakdown. I love the balance sheet format.',
    name: 'Dianne Russell',
    role: 'Housewife',
    avatar: '/assets/img/th-3/testimonial-avater-3.jpg',
  },
  {
    stars: 5,
    title: '10/10 would recommend👌🏼',
    text: 'Logging expenses is fun to do but still keeps your budgets in check! I’m so grateful to the developers for starting this amazing app️',
    name: 'Kristin Watson',
    role: 'Social Influencer',
    avatar: '/assets/img/th-3/testimonial-avater-4.jpg',
  },
  {
    stars: 5,
    title: 'Love the group sharing tips',
    text: 'After a long trip with roommates I needed some organized balance tracking to help me get my accounting confidence back😍',
    name: 'Marvin McKinney',
    role: 'College Student',
    avatar: '/assets/img/th-3/testimonial-avater-1.jpg',
  },
  {
    stars: 5,
    title: 'Just completed trip 3 and love the app',
    text: 'As someone who has not split bills with friends for a few years, it is great to be getting back into it with such accessible transaction fields and group QR codes. Would recommend to anyone whatever sharing levels! My roommates love it too.',
    name: 'Guy Hawkins',
    role: 'Web Developer',
    avatar: '/assets/img/th-3/testimonial-avater-6.jpg',
  },
];

/* ─── Product Guides Data ────────────────────────────────── */
const CLASSES = [
  {
    title: 'Create a shared group',
    desc: 'Learn how to set up your first group for roommates or trips, invite members, and configure default settings.',
    img: '/assets/img/th-3/video-class-img-1.jpg',
    videoUrl: 'https://www.youtube.com/embed/3nQNiWdeH2Q?autoplay=1',
  },
  {
    title: 'Splitting bills & receipts',
    desc: 'Discover how to log complex bills, upload receipt images, and customize individual shares.',
    img: '/assets/img/th-3/video-class-img-2.jpg',
    videoUrl: 'https://www.youtube.com/embed/3nQNiWdeH2Q?autoplay=1',
  },
  {
    title: 'Simplifying & settling debts',
    desc: 'See how SplitLoop automatically minimizes group transactions to make settling balances simple.',
    img: '/assets/img/th-3/video-class-img-3.jpg',
    videoUrl: 'https://www.youtube.com/embed/3nQNiWdeH2Q?autoplay=1',
  },
];

export default function App() {
  const [activeVideo, setActiveVideo] = useState(null);

  const closeVideoModal = () => setActiveVideo(null);

  return (
    <div className="page-wrapper" style={{ background: '#ffffff', minHeight: '100vh' }}>
      <Header />

      {/* ──────────────────── HERO ──────────────────── */}
      <section className="hero-section" id="hero" style={{ position: 'relative' }}>
        {/* Background shape */}
        <img
          src="/assets/img/elements/hero-3-bg-shape.svg"
          alt=""
          className="hero-shape-bg"
          style={{
            position: 'absolute',
            left: 0,
            top: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            zIndex: 0,
            opacity: 0.8,
            pointerEvents: 'none',
          }}
        />

        <div className="container-default hero-grid" style={{ position: 'relative', zIndex: 1 }}>
          {/* Copy Column */}
          <div className="hero-content">
            <h1 className="hero-title" style={{ fontSize: 'clamp(40px, 5.5vw, 90px)', lineHeight: 1.11, fontWeight: 800 }}>
              Split expenses effortlessly
            </h1>
            <p className="hero-desc" style={{ fontSize: '17px', color: 'var(--color-gray)', marginBottom: '40px' }}>
              SplitLoop is the most elegant way to manage shared expenses with friends, partners, and groups. Track, split, and settle bills in just a few taps — without any of the awkward math.
            </p>

            {/* Social Proof */}
            <div className="hero-proof" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '20px', marginBottom: '40px' }}>
              <div className="hero-avatars" style={{ display: 'flex' }}>
                <div className="hero-avatar">
                  <img src="/assets/img/th-3/hero-avater-1.jpg" alt="user avatar" />
                </div>
                <div className="hero-avatar">
                  <img src="/assets/img/th-3/hero-avater-2.jpg" alt="user avatar" />
                </div>
                <div className="hero-avatar">
                  <img src="/assets/img/th-3/hero-avater-3.jpg" alt="user avatar" />
                </div>
              </div>

              <div className="hero-stats" style={{ display: 'flex', gap: '48px' }}>
                <div className="hero-stat">
                  <div className="hero-stat-num">64,739</div>
                  <div className="hero-stat-label">Happy Customers</div>
                </div>
                <div className="hero-stat">
                  <div className="hero-stat-num">4.8/5</div>
                  <div className="hero-stat-label">
                    <div className="green-stars" style={{ display: 'flex', gap: '3px', color: 'var(--color-green)' }}>
                      <span className="green-star">★</span>
                      <span className="green-star">★</span>
                      <span className="green-star">★</span>
                      <span className="green-star">★</span>
                      <span className="green-star">★</span>
                    </div>
                    Rating
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
              <a href="#" className="btn-yellow" id="hero-cta-btn" onClick={e => e.preventDefault()}>
                <div className="btn-yellow-inner large">
                  Get Started Free
                </div>
                <div className="btn-yellow-shadow"></div>
              </a>
            </div>
          </div>

          {/* Visual Column */}
          <div className="hero-image">
            <div style={{ position: 'relative', zIndex: 10 }}>
              {/* Phone screen mockup */}
              <img
                src="/assets/img/th-3/hero-mobille-clean.jpg"
                alt="SplitLoop App Mockup"
                className="hero-phone-img"
              />

              {/* Decorative shapes */}
              <img
                src="/assets/img/elements/hero-3-shapes-1.svg"
                alt=""
                className="hero-shape-1"
              />
              <img
                src="/assets/img/elements/hero-3-shapes-2.svg"
                alt=""
                className="hero-shape-2"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ──────────────────── FEATURES ──────────────────── */}
      <Features />

      {/* ──────────────────── CONTENT ROWS ──────────────────── */}
      <section className="content-section" id="about">
        <div className="container-default content-areas">
          {/* Row 1: Copy Left, Image Right */}
          <div className="content-row reverse">
            <div className="content-text">
              <h2>A smooth onboarding flow to smarter sharing</h2>
              <p>
                SplitLoop makes getting started simple. Connect with Google or create an account securely in seconds, and start tracking shared finances right away.
              </p>
              <p>
                Our touch-first ledger helps you visualize who paid what, what shares apply, and keeps everyone updated with zero manual reminders needed.
              </p>
              <a href="#" className="btn-yellow" onClick={e => e.preventDefault()}>
                <div className="btn-yellow-inner">Try it now</div>
                <div className="btn-yellow-shadow"></div>
              </a>
            </div>

            <div className="content-image-wrap">
              <img
                src="/assets/img/th-3/content-img-1-clean.jpg"
                alt="SplitLoop Onboarding Flow Mockups"
                className="content-img"
                style={{ aspectRatio: '387 / 540' }}
              />
              <img
                src="/assets/img/elements/home-3-content-img-shape-1.svg"
                alt=""
                className="content-shape"
              />
            </div>
          </div>

          {/* Row 2: Copy Left, Checklist, Image Right */}
          <div className="content-row">
            <div className="content-text">
              <h2>Manage shared groups and trips with ease</h2>
              <p>
                Create custom groups for trips, roommates, events, or partners. Share a QR code to invite members instantly and start splitting transparently.
              </p>
              
              <ul className="content-checklist" style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <li className="content-check-item">
                  <span className="check-badge-icon" style={{ color: 'var(--color-green)' }}>
                    <i className="fa-solid fa-circle-check"></i>
                  </span>
                  Multiple split options: equally, unequally, by percentage or shares
                </li>
                <li className="content-check-item">
                  <span className="check-badge-icon" style={{ color: 'var(--color-green)' }}>
                    <i className="fa-solid fa-circle-check"></i>
                  </span>
                  Attach bills, receipt uploads, and keep records organized
                </li>
                <li className="content-check-item">
                  <span className="check-badge-icon" style={{ color: 'var(--color-green)' }}>
                    <i className="fa-solid fa-circle-check"></i>
                  </span>
                  100% transparency for everyone involved with real-time updates
                </li>
              </ul>
            </div>

            <div className="content-image-wrap">
              <img
                src="/assets/img/th-3/content-img-2-clean.jpg"
                alt="SplitLoop Manage Groups Mockups"
                className="content-img"
                style={{ aspectRatio: '614 / 682' }}
              />
              <img
                src="/assets/img/elements/home-3-content-img-shape-2.svg"
                alt=""
                className="content-shape"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ──────────────────── MARQUEE BAND ──────────────────── */}
      <div className="marquee-band">
        <div className="marquee-track">
          {Array.from({ length: 4 }).map((_, idx) => (
            <span key={idx} className="marquee-text">
              SPLIT EXPENSES EFFORTLESSLY • TRACK SPLIT SETTLE •{' '}
              <span className="marquee-icon-dot" style={{ display: 'inline-block', width: '10px', height: '10px', borderRadius: '50%', background: 'white', verticalAlign: 'middle', margin: '0 10px' }}></span>
            </span>
          ))}
        </div>
      </div>

      {/* ──────────────────── PRODUCT GUIDES ──────────────────── */}
      <section className="classes-section" id="classes">
        <div className="container-default">
          <div className="section-head-center">
            <h2>Discover guides and tutorials to master your finances</h2>
          </div>

          <div className="classes-grid">
            {CLASSES.map((cls, i) => (
              <div key={i} className="class-card">
                <div className="class-card-thumb">
                  <img src={cls.img} alt={cls.title} />
                  <button
                    className="class-play-btn"
                    onClick={() => setActiveVideo(cls.videoUrl)}
                    aria-label={`Play guide video for ${cls.title}`}
                  >
                    <i className="fa-solid fa-play"></i>
                  </button>
                </div>
                <h3 className="class-card-title">{cls.title}</h3>
                <p>{cls.desc}</p>
              </div>
            ))}
          </div>

          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <a href="#" className="btn-yellow" onClick={e => e.preventDefault()}>
              <div className="btn-yellow-inner">View All Guides</div>
              <div className="btn-yellow-shadow"></div>
            </a>
          </div>
        </div>
      </section>

      {/* ──────────────────── TESTIMONIALS ──────────────────── */}
      <section className="testimonials-section" id="testimonials">
        <div className="container-default">
          <div className="testimonials-head">
            <h2>People all over the world use SplitLoop for shared expenses</h2>
            <a href="#" className="btn-yellow" onClick={e => e.preventDefault()}>
              <div className="btn-yellow-inner">View All Reviews</div>
              <div className="btn-yellow-shadow"></div>
            </a>
          </div>

          <div className="testimonials-masonry">
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className="testimonial-card">
                {/* 5 Green Stars */}
                <div className="t-stars">
                  <span style={{ color: 'var(--color-green)' }}>★</span>
                  <span style={{ color: 'var(--color-green)' }}>★</span>
                  <span style={{ color: 'var(--color-green)' }}>★</span>
                  <span style={{ color: 'var(--color-green)' }}>★</span>
                  <span style={{ color: 'var(--color-green)' }}>★</span>
                </div>
                <div className="t-heading">{t.title}</div>
                <p className="t-text">"{t.text}"</p>
                <div className="t-author">
                  <div className="t-avatar">
                    <img src={t.avatar} alt={t.name} />
                  </div>
                  <div>
                    <span className="t-name">{t.name}</span>
                    <span className="t-role">{t.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ──────────────────── DOWNLOAD / CTA ──────────────────── */}
      <section className="cta-section" id="download">
        <div className="container-default">
          <div className="cta-card">
            {/* Image side */}
            <div className="cta-image-side">
              <img
                src="/assets/img/th-3/newsletter-clean.jpg"
                alt="SplitLoop Track Expenses Mockups"
                className="cta-phone-img"
              />
              <img
                src="/assets/img/elements/home-3-content-img-shape-1.svg"
                alt=""
                className="content-shape"
                style={{ position: 'absolute', zIndex: 1, maxWidth: '100%', height: 'auto' }}
              />
            </div>

            {/* Text side */}
            <div className="cta-text-side">
              <h2>Download now and start splitting effortlessly</h2>
              <p>
                SplitLoop lets you manage shared expenses, track bills, and settle balances transparently on any device. Download on iOS or Android and start keeping yourself organized.
              </p>

              <div className="cta-store-btns">
                <a
                  href="https://apps.apple.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="store-badge"
                >
                  <i className="fa-brands fa-apple" style={{ fontSize: '28px' }}></i>
                  <div>
                    <div className="store-badge-text-sub">Download on</div>
                    <div className="store-badge-text-name">App Store</div>
                  </div>
                </a>

                <a
                  href="https://play.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="store-badge"
                >
                  <i className="fa-brands fa-google-play" style={{ fontSize: '24px' }}></i>
                  <div>
                    <div className="store-badge-text-sub">Get it on</div>
                    <div className="store-badge-text-name">Google Play</div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ──────────────────── FOOTER ──────────────────── */}
      <footer className="site-footer" style={{ borderTop: '1px solid var(--color-border)', marginTop: '80px' }}>
        <div className="container-default footer-top">
          <div className="footer-grid">
            {/* Brand column */}
            <div className="footer-brand-col">
              <a href="#" className="footer-logo" onClick={e => e.preventDefault()} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <img
                  src="/assets/img/logo-yellow-dark.jpg"
                  alt="SplitLoop Logo"
                  style={{ width: '32px', height: '32px', borderRadius: '8px', display: 'block' }}
                />
                <span style={{ fontSize: '22px', fontWeight: 800, color: 'var(--color-black)', fontFamily: 'var(--font-main)' }}>SplitLoop</span>
              </a>
              <div className="footer-about">
                We are a strategic & creative digital agency focused on user experience, mobile solutions, transparent data sharing, and digital settlement structures.
              </div>
              <a href="mailto:yourdemo@email.com" className="footer-email">
                yourdemo@email.com
              </a>

              <div className="footer-socials">
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="footer-social-link" aria-label="X">
                  <i className="fa-brands fa-x-twitter"></i>
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="footer-social-link" aria-label="Facebook">
                  <i className="fa-brands fa-facebook-f"></i>
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="footer-social-link" aria-label="Instagram">
                  <i className="fa-brands fa-instagram"></i>
                </a>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="footer-social-link" aria-label="GitHub">
                  <i className="fa-brands fa-github"></i>
                </a>
              </div>
            </div>

            {/* Column 2 */}
            <div className="footer-widget-col">
              <div className="footer-widget-title">Primary Pages</div>
              <ul>
                <li><a href="#" onClick={e => e.preventDefault()}>Home</a></li>
                <li><a href="#" onClick={e => e.preventDefault()}>About Us</a></li>
                <li><a href="#" onClick={e => e.preventDefault()}>Services</a></li>
                <li><a href="#" onClick={e => e.preventDefault()}>Pricing</a></li>
                <li><a href="#" onClick={e => e.preventDefault()}>Contact</a></li>
              </ul>
            </div>

            {/* Column 3 */}
            <div className="footer-widget-col">
              <div className="footer-widget-title">Utility Pages</div>
              <ul>
                <li><a href="#" onClick={e => e.preventDefault()}>Signup</a></li>
                <li><a href="#" onClick={e => e.preventDefault()}>Login</a></li>
                <li><a href="#" onClick={e => e.preventDefault()}>404 Not Found</a></li>
                <li><a href="#" onClick={e => e.preventDefault()}>Password Reset</a></li>
              </ul>
            </div>

            {/* Column 4 */}
            <div className="footer-widget-col">
              <div className="footer-widget-title">Resources</div>
              <ul>
                <li><a href="#" onClick={e => e.preventDefault()}>Support</a></li>
                <li><a href="#" onClick={e => e.preventDefault()}>Privacy Policy</a></li>
                <li><a href="#" onClick={e => e.preventDefault()}>Terms & Conditions</a></li>
                <li><a href="#" onClick={e => e.preventDefault()}>Strategic Finance</a></li>
                <li><a href="#" onClick={e => e.preventDefault()}>Video Guide</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-divider"></div>
        <div className="footer-bottom">
          &copy; Copyright 2026, All Rights Reserved by Mthemeus
        </div>
      </footer>

      {/* ──────────────────── VIDEO LIGHTBOX MODAL ──────────────────── */}
      {activeVideo && (
        <div
          className="video-modal-backdrop"
          onClick={closeVideoModal}
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0,0,0,0.85)',
            zIndex: 10000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '24px',
            cursor: 'pointer',
          }}
        >
          <div
            className="video-modal-container"
            onClick={e => e.stopPropagation()}
            style={{
              position: 'relative',
              width: '100%',
              maxWidth: '900px',
              aspectRatio: '16/9',
              background: '#000',
              borderRadius: '16px',
              overflow: 'hidden',
              boxShadow: '0 20px 50px rgba(0,0,0,0.3)',
            }}
          >
            <button
              onClick={closeVideoModal}
              aria-label="Close video modal"
              style={{
                position: 'absolute',
                top: '16px',
                right: '16px',
                zIndex: 10010,
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                background: 'rgba(255,255,255,0.2)',
                color: 'white',
                border: 'none',
                fontSize: '20px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'background 0.3s',
              }}
              onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.4)'}
              onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.2)'}
            >
              &times;
            </button>
            <iframe
              src={activeVideo}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              style={{ width: '100%', height: '100%', display: 'block' }}
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
}
