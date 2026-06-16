import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { 
  Activity, Stethoscope, ShieldAlert, HeartHandshake, 
  Smile, UserCheck, Phone, ArrowRight 
} from 'lucide-react';

export default function Services() {
  const navigate = useNavigate();

  const specialties = [
    {
      icon: <Activity size={36} />,
      title: 'Cardiology Care',
      desc: 'Complete heart care services. We treat cardiac health, blood pressure issues, and vascular conditions using the latest diagnostics.',
      treatments: ['Electrocardiogram (EKG)', 'Stress Testing', 'Holter Monitoring', 'Hypertension Therapy']
    },
    {
      icon: <Stethoscope size={36} />,
      title: 'Orthopedics',
      desc: 'Expert bone and joint care. From minor fractures to reconstructive joint surgeries, our specialists help restore your mobility.',
      treatments: ['Joint Replacements', 'Fracture Splinting', 'Physical Rehab Referral', 'Sports Injury Care']
    },
    {
      icon: <ShieldAlert size={36} />,
      title: 'Neurology Department',
      desc: 'Therapies for disorders of the nervous system. We help manage chronic headaches, sleep disorders, and complex nerve conditions.',
      treatments: ['EEG Testing', 'Migraine Treatment', 'Stroke Rehabilitation', 'Neuropathy Relief']
    },
    {
      icon: <HeartHandshake size={36} />,
      title: 'Pediatric Clinic',
      desc: 'Friendly healthcare for children of all ages. We handle routine checkups, child development monitoring, and vaccinations.',
      treatments: ['Routine Immunization', 'Well-Child Checkups', 'Asthma Management', 'Development Checks']
    },
    {
      icon: <UserCheck size={36} />,
      title: 'General Practice',
      desc: 'Comprehensive primary care. Your first point of contact for flu treatment, physical screenings, and general wellness guidance.',
      treatments: ['Flu & Viral Care', 'Annual Health Scans', 'Prescription Management', 'Nutrition Advice']
    },
    {
      icon: <Smile size={36} />,
      title: 'Dental Center',
      desc: 'Complete dental therapies for healthy smiles. We provide preventive care, cosmetic dentistry, and root canal surgeries.',
      treatments: ['Professional Cleaning', 'Cavity Fillings', 'Cosmetic Veneers', 'Root Canal Surgery']
    }
  ];

  const handleBookRedirect = () => {
    navigate('/contact');
    setTimeout(() => {
      const element = document.getElementById('appointment-form');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <div className="services-page">
      {/* Page Banner */}
      <section className="page-banner">
        <div className="page-banner-overlay"></div>
        <div className="container">
          <h1>Our Specialties</h1>
          <div className="breadcrumbs">
            <NavLink to="/">Home</NavLink>
            <span className="separator">/</span>
            <span>Services</span>
          </div>
        </div>
      </section>

      {/* Specialties Grid */}
      <section className="section services-page-grid-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Clinical Departments</span>
            <h2>World Class Medical Specialties</h2>
            <p>Our clinics are structured to offer integrated primary care alongside direct specialist referrals.</p>
          </div>

          <div className="services-page-grid">
            {specialties.map((spec, idx) => (
              <div key={idx} className="specialty-card">
                <div className="specialty-icon-wrapper">{spec.icon}</div>
                <h3>{spec.title}</h3>
                <p>{spec.desc}</p>
                <div className="treatment-list">
                  <h5>Common Treatments:</h5>
                  <ul>
                    {spec.treatments.map((tr, tIdx) => (
                      <li key={tIdx}>
                        <span className="treatment-bullet"></span>
                        <span>{tr}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Helpline CTA Section */}
      <section className="section section-bg services-cta-section">
        <div className="container services-cta-card">
          <div className="services-cta-content">
            <h2>Need Immediate Diagnostic Consultation?</h2>
            <p>Speak with our front desk right now to find an open slot with a specialist doctor today.</p>
            <div className="services-cta-actions">
              <a href="tel:+18005550199" className="btn btn-primary emergency-btn">
                <Phone size={18} />
                <span>Call +1 (800) 555-0199</span>
              </a>
              <button className="btn btn-secondary" onClick={handleBookRedirect}>
                <span>Schedule Appointment Online</span>
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
