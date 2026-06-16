import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Activity, ArrowRight, Shield, HeartHandshake, Award, 
  Stethoscope, ShieldAlert, Star, Calendar, Clock, 
  UserCheck, ChevronLeft, ChevronRight 
} from 'lucide-react';
import BookingForm from '../components/BookingForm';
import FAQAccordion from '../components/FAQAccordion';

export default function Home() {
  const navigate = useNavigate();
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const stats = [
    { value: '15k+', label: 'Happy Patients' },
    { value: '25+', label: 'Years Experience' },
    { value: '80+', label: 'Specialist Doctors' },
    { value: '99.8%', label: 'Positive Feedback' }
  ];

  const features = [
    {
      icon: <Award className="feature-icon text-primary" size={24} />,
      title: 'Certified Specialists',
      desc: 'Our doctors are board-certified and hold degrees from leading medical institutions worldwide.'
    },
    {
      icon: <Shield className="feature-icon text-teal" size={24} />,
      title: 'Modern Facilities',
      desc: 'Equipped with the latest healthcare technology for diagnosis, treatment, and recovery.'
    },
    {
      icon: <HeartHandshake className="feature-icon text-accent" size={24} />,
      title: 'Compassionate Care',
      desc: 'We put patients first, delivering customized healthcare built around empathy and respect.'
    }
  ];

  const services = [
    { id: 'cardio', title: 'Cardiology Care', desc: 'Heart diagnostics, valve therapy, hypertension control, and regular cardiac screenings.', icon: <Activity size={32} /> },
    { id: 'ortho', title: 'Orthopedics', desc: 'Joint replacement, fracture recovery, spine rehabilitation, and sports medicine.', icon: <Stethoscope size={32} /> },
    { id: 'neuro', title: 'Neurology Care', desc: 'Stroke management, migraine therapies, EEG tests, and neuromuscular disorders.', icon: <ShieldAlert size={32} /> },
    { id: 'pediatric', title: 'Pediatric Clinic', desc: 'Child vaccinations, growth monitoring, pediatric urgent care, and general checkups.', icon: <HeartHandshake size={32} /> }
  ];

  const doctors = [
    { name: 'Dr. Sophia Bennett', specialty: 'Chief Cardiologist', img: '/doctor_sophia.png', education: 'Harvard Medical School' },
    { name: 'Dr. Marcus Vance', specialty: 'Orthopedic Surgeon', img: '/doctor_marcus.png', education: 'Johns Hopkins University' },
    { name: 'Dr. Elena Rostova', specialty: 'Neurology Director', img: '/doctor_elena.png', education: 'Stanford Medicine' }
  ];

  const testimonials = [
    {
      quote: "The care I received at Meddic was exceptional. The cardiologists were patient, explained my diagnosis clearly, and set up a recovery program that completely turned my health around.",
      author: "Robert T. Jenkins",
      role: "Heart Patient",
      rating: 5
    },
    {
      quote: "Meddic's pediatric team is wonderful. My children actually enjoy going to the clinic. The doctors are incredibly gentle, patient, and knowledgeable. Highly recommended!",
      author: "Sarah L. Harrison",
      role: "Mother of 2",
      rating: 5
    },
    {
      quote: "After my knee injury, I thought I wouldn't run again. Thanks to the expert orthopedic surgeons and physical therapy staff, I am fully recovered and back on the track.",
      author: "Michael D. Kincaid",
      role: "Athletic Patient",
      rating: 5
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNavigateToBooking = () => {
    const element = document.getElementById('appointment-form');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/contact');
    }
  };

  return (
    <div className="home-page">
      {/* 1. Hero Section */}
      <section className="hero-section">
        <div className="container hero-grid">
          <div className="hero-content animate-slide-in-left">
            <span className="hero-subtitle">Dedicated to Your Health & Well-being</span>
            <h1>Exceptional Medical Care You Can Trust</h1>
            <p>
              Welcome to Meddic, where we combine advanced healthcare technologies with compassionate clinical experts to provide you and your family with complete medical services.
            </p>
            <div className="hero-buttons">
              <button className="btn btn-primary" onClick={handleNavigateToBooking}>
                <span>Book Appointment</span>
                <Calendar size={18} />
              </button>
              <button className="btn btn-secondary" onClick={() => navigate('/services')}>
                <span>Our Services</span>
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
          <div className="hero-visual animate-fade-in-up">
            <div className="hero-image-wrapper">
              <img src="/hero.png" alt="Meddic Healthcare Clinic" className="hero-main-img" />
              {/* Floating Cards */}
              <div className="floating-card float-card-1">
                <div className="float-icon-wrapper">
                  <UserCheck className="float-icon text-primary" size={20} />
                </div>
                <div>
                  <h4>100% Trusted</h4>
                  <p>Certified Care</p>
                </div>
              </div>
              <div className="floating-card float-card-2">
                <div className="float-icon-wrapper">
                  <Clock className="float-icon text-teal" size={20} />
                </div>
                <div>
                  <h4>24/7 Helpline</h4>
                  <p>+1 (800) 555-0199</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Floating Stats Panel */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-panel">
            {stats.map((stat, idx) => (
              <div key={idx} className="stat-card">
                <h3>{stat.value}</h3>
                <p>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Core Features */}
      <section className="section features-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Why Choose Us</span>
            <h2>We Are Dedicated To Your Wellness</h2>
            <p>Our goal is to deliver highly specialized healthcare solutions within a comfortable, friendly environment.</p>
          </div>

          <div className="features-grid">
            {features.map((feature, idx) => (
              <div key={idx} className="feature-card">
                <div className="feature-icon-wrapper">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. About Teaser Section */}
      <section className="section section-bg about-teaser-section">
        <div className="container about-teaser-grid">
          <div className="about-teaser-visual">
            <div className="teaser-image-frame">
              <img src="/facility.png" alt="Advanced Diagnostic Lab" className="about-facility-img" />
            </div>
          </div>
          <div className="about-teaser-content">
            <span className="section-tag">About Meddic</span>
            <h2>Collaborative Medical Professionals Under One Roof</h2>
            <p>
              Since our founding in 2001, we have built a cohesive system of diagnostic laboratories, outpatient surgical clinics, and highly-focused therapy centers. This ensures you receive seamless care without having to coordinate between different health networks.
            </p>
            <ul className="about-bullets">
              <li>
                <div className="bullet-check"><Activity size={14} /></div>
                <span>Direct electronic referrals between departments</span>
              </li>
              <li>
                <div className="bullet-check"><Activity size={14} /></div>
                <span>State of the art laboratory diagnostics (results in 24 hours)</span>
              </li>
              <li>
                <div className="bullet-check"><Activity size={14} /></div>
                <span>Patient portal access to health charts and records</span>
              </li>
            </ul>
            <button className="btn btn-primary" onClick={() => navigate('/about')}>
              <span>Read Full History</span>
            </button>
          </div>
        </div>
      </section>

      {/* 5. Services Grid */}
      <section className="section services-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Our Departments</span>
            <h2>Top Medical Specialties</h2>
            <p>Providing specialized outpatient diagnostics, consultations, and modern operations.</p>
          </div>

          <div className="services-grid">
            {services.map((service) => (
              <div key={service.id} className="service-card" onClick={() => navigate('/services')}>
                <div className="service-icon-box">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
                <div className="service-card-footer">
                  <span className="read-more-text">Explore specialty</span>
                  <ArrowRight size={16} className="arrow-icon" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Special Doctor Slider */}
      <section className="section section-bg doctors-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Expert Doctors</span>
            <h2>Meet Our Lead Specialists</h2>
            <p>Our doctors represent the top academic minds in patient care and research clinical studies.</p>
          </div>

          <div className="doctors-grid-display">
            {doctors.map((doctor, idx) => (
              <div key={idx} className="doctor-card">
                <div className="doctor-image-container">
                  <img src={doctor.img} alt={doctor.name} className="doctor-img" />
                </div>
                <div className="doctor-info">
                  <h4>{doctor.name}</h4>
                  <span className="doctor-specialty">{doctor.specialty}</span>
                  <p className="doctor-edu">{doctor.education}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Working Hours & Helpline */}
      <section className="hours-banner-section">
        <div className="container hours-banner-grid">
          <div className="hours-banner-info">
            <span className="accent-banner-tag">Need Assistance?</span>
            <h2>Comprehensive Support & Working Hours</h2>
            <p>Our support and reception desk are open to handle emergency requests and walk-ins.</p>
            <div className="hours-list">
              <div className="hours-row">
                <span>Weekdays (Mon - Fri)</span>
                <strong>8:00 AM – 8:00 PM</strong>
              </div>
              <div className="hours-row">
                <span>Saturday</span>
                <strong>9:00 AM – 5:00 PM</strong>
              </div>
              <div className="hours-row">
                <span>Sunday (Urgent Care Only)</span>
                <strong>9:00 AM – 2:00 PM</strong>
              </div>
            </div>
          </div>
          <div className="hours-banner-cta">
            <div className="cta-accent-card">
              <h3>Have questions or need a consultation?</h3>
              <p>Speak to our medical representative now.</p>
              <a href="tel:+18005550199" className="helpline-link">
                <span>+1 (800) 555-0199</span>
              </a>
              <button className="btn btn-white w-full" onClick={handleNavigateToBooking}>
                Request Consultation
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Testimonials Section */}
      <section className="section testimonials-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Testimonials</span>
            <h2>What Our Patients Say</h2>
          </div>

          <div className="testimonial-slider-container">
            <div className="testimonial-slide">
              <div className="testimonial-stars">
                {Array.from({ length: testimonials[currentTestimonial].rating }).map((_, i) => (
                  <Star key={i} size={18} fill="#f59e0b" color="#f59e0b" />
                ))}
              </div>
              <blockquote className="testimonial-quote">
                "{testimonials[currentTestimonial].quote}"
              </blockquote>
              <div className="testimonial-author">
                <strong>{testimonials[currentTestimonial].author}</strong>
                <span>{testimonials[currentTestimonial].role}</span>
              </div>
            </div>

            <div className="slider-controls">
              <button onClick={prevTestimonial} className="slider-btn" aria-label="Previous testimonial">
                <ChevronLeft size={20} />
              </button>
              <span className="slider-indicator">
                {currentTestimonial + 1} / {testimonials.length}
              </span>
              <button onClick={nextTestimonial} className="slider-btn" aria-label="Next testimonial">
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 9. Interactive Booking Form & FAQs */}
      <section className="section section-bg booking-faq-section" id="booking-section">
        <div className="container booking-faq-grid">
          <div className="faq-panel">
            <span className="section-tag">Frequently Asked Questions</span>
            <h2 className="faq-panel-title">Have Questions? We Have Answers</h2>
            <p className="faq-panel-desc">Browse through common questions regarding procedures, billing, and scheduling at Meddic.</p>
            <FAQAccordion />
          </div>
          <div className="booking-panel">
            <BookingForm />
          </div>
        </div>
      </section>
    </div>
  );
}
