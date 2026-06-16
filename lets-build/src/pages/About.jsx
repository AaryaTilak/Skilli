import React from 'react';
import { NavLink } from 'react-router-dom';
import { Shield, Eye, Heart, CheckSquare } from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: <Heart className="value-icon text-primary" size={24} />,
      title: 'Patient-First Focus',
      desc: 'Every decision we make is guided by what is best for the comfort, dignity, and clinical outcome of our patients.'
    },
    {
      icon: <Shield className="value-icon text-teal" size={24} />,
      title: 'Uncompromised Integrity',
      desc: 'We adhere to the highest ethical and clinical standards, building relationships based on honesty and trust.'
    },
    {
      icon: <Eye className="value-icon text-accent" size={24} />,
      title: 'Clinical Excellence',
      desc: 'We foster a culture of continuous learning, recruiting top specialists and adopting proven medical innovations.'
    }
  ];

  const milestones = [
    { year: '2001', title: 'Clinic Founded', desc: 'Started as a small diagnostic facility with 5 doctors.' },
    { year: '2008', title: 'Cardiology Center Launched', desc: 'Built a specialized state-of-the-art heart screening ward.' },
    { year: '2015', title: 'Digital Health Leap', desc: 'Introduced paperless records and immediate outpatient portals.' },
    { year: '2022', title: 'Expansion Completed', desc: 'Added orthopedic and surgical facilities, housing 80+ doctors.' }
  ];

  return (
    <div className="about-page">
      {/* Page Banner */}
      <section className="page-banner">
        <div className="page-banner-overlay"></div>
        <div className="container">
          <h1>About Us</h1>
          <div className="breadcrumbs">
            <NavLink to="/">Home</NavLink>
            <span className="separator">/</span>
            <span>About Us</span>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section story-section">
        <div className="container story-grid">
          <div className="story-content">
            <span className="section-tag">Our Legacy</span>
            <h2>More Than Two Decades Of Compassionate Service</h2>
            <p>
              Meddic Medical Clinic was founded with a singular vision: to bring top-tier, integrated healthcare services to the community. Over the years, we have grown from a local diagnostics laboratory into a multi-specialty outpatient network.
            </p>
            <p>
              We believe that healing is more than just prescribing medication. It is about understanding the individual circumstances of each patient, providing clear guidelines for health management, and maintaining support long after you leave our clinic.
            </p>
            <div className="story-features">
              <div className="story-feat-item">
                <CheckSquare className="feat-check-icon" size={20} />
                <div>
                  <h4>Electronic Health Records</h4>
                  <p>Access your files, prescriptions, and lab tests on any device.</p>
                </div>
              </div>
              <div className="story-feat-item">
                <CheckSquare className="feat-check-icon" size={20} />
                <div>
                  <h4>Immediate Diagnostics</h4>
                  <p>In-house advanced scanners and labs for faster test results.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="story-visual">
            <div className="story-img-frame">
              <img src="/facility.png" alt="Sleek diagnostics room" className="story-img" />
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section section-bg values-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Our Values</span>
            <h2>The Principles That Drive Us</h2>
            <p>We are guided by a core philosophy that ensures every patient receives premium, empathetic care.</p>
          </div>

          <div className="values-grid">
            {values.map((value, idx) => (
              <div key={idx} className="value-card">
                <div className="value-icon-wrapper">{value.icon}</div>
                <h3>{value.title}</h3>
                <p>{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Milestone Section */}
      <section className="section timeline-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Our Journey</span>
            <h2>Key Milestones Over Time</h2>
            <p>A timeline of how we grew into the region's preferred healthcare clinic.</p>
          </div>

          <div className="timeline-grid">
            {milestones.map((ms, idx) => (
              <div key={idx} className="timeline-card">
                <span className="timeline-year">{ms.year}</span>
                <h4>{ms.title}</h4>
                <p>{ms.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
