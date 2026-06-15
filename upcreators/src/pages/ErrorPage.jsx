import React from 'react';
import { Link } from 'react-router-dom';
import './Pages.css';

export default function ErrorPage() {
  return (
    <div className="skeleton-page" style={{ justifyContent: 'center', alignItems: 'center', minHeight: '80vh' }}>
      <div style={{ textAlign: 'center', padding: '4rem 2rem' }}>
        <div style={{ fontSize: '8rem', lineHeight: 1, marginBottom: '1rem', animation: 'fadeInUp 0.6s ease' }}>🛸</div>
        <h1 style={{ fontSize: 'clamp(4rem, 10vw, 8rem)', fontWeight: '900', background: 'var(--primary-gradient)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', lineHeight: 1 }}>
          404
        </h1>
        <h2 style={{ marginTop: '1rem', marginBottom: '1rem' }}>Page Not Found</h2>
        <p style={{ color: 'var(--text-muted)', maxWidth: '400px', margin: '0 auto 2.5rem' }}>
          Looks like you've drifted into deep space. The page you're looking for doesn't exist or has been moved.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link to="/" className="btn btn-primary">
            <i className="fas fa-home" style={{ marginRight: '8px' }}></i> Back to Home
          </Link>
          <Link to="/contact" className="btn btn-secondary">Contact Support</Link>
        </div>
      </div>
    </div>
  );
}
