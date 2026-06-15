import React from 'react';
import { Star, Quote } from 'lucide-react';
import './Testimonials.css';

export default function Testimonials() {
  const testimonials = [
    {
      name: "Kaitlyn Anderson",
      role: "Club Member",
      rating: 5,
      quote: "The coaching here completely transformed my game. I feel way more confident at the baseline, and the court booking system is incredibly smooth. Highly recommend!",
      avatar: "/member_kaitlyn.png"
    },
    {
      name: "Kristin Watson",
      role: "Advanced Player",
      rating: 5,
      quote: "Vantage Court has been a game-changer for me. Playing under tournament-grade lighting makes evening sessions feel amazing. The coaches are certified pros who know how to push you.",
      avatar: "/member_kristin.png"
    }
  ];

  return (
    <section className="testimonials-section">
      <div className="container testimonials-layout">
        <div className="testimonials-info animate-fade-in-up">
          <span className="tag-badge">Our Members</span>
          <h2 className="testimonials-heading">From Our Tennis Community</h2>
          <div className="testimonials-court-image-wrapper">
            <img src="/lessons_tennis.png" alt="Tennis court action" className="testimonials-court-img" />
          </div>
        </div>

        <div className="testimonials-list">
          {testimonials.map((t, idx) => (
            <div key={idx} className="testimonial-card animate-fade-in-up" style={{ animationDelay: `${idx * 0.2}s` }}>
              <div className="testimonial-header">
                <div className="testimonial-author">
                  <img src={t.avatar} alt={t.name} className="testimonial-avatar" />
                  <div>
                    <h4 className="testimonial-name">{t.name}</h4>
                    <p className="testimonial-role">{t.role}</p>
                  </div>
                </div>
                <div className="testimonial-stars">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} size={16} fill="#ffb800" stroke="none" />
                  ))}
                </div>
              </div>

              <div className="testimonial-body">
                <Quote className="testimonial-quote-icon" size={36} />
                <p className="testimonial-text">{t.quote}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
