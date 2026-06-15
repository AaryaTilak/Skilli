import React, { useState } from 'react';
import './Pages.css';

export default function SearchResult() {
  const [query, setQuery] = useState('branding');
  
  const allItems = [
    { name: 'Slick Esports Branding Pack', type: 'Digital Item' },
    { name: 'Creative Agency Logo Assets', type: 'Design Service' },
    { name: 'Color Psychology in SMM Branding', type: 'Blog Post' },
    { name: 'Upcreators Rebranding Campaign', type: 'Case Study' }
  ];

  const results = allItems.filter(item => item.name.toLowerCase().includes(query.toLowerCase()));

  return (
    <div className="skeleton-page">
      <section className="skeleton-hero" style={{ padding: '60px 0' }}>
        <div className="container">
          <span className="mockup-tag">Search Queries</span>
          <h1>Search Results</h1>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: '800px' }}>
          <div className="mockup-card" style={{ marginBottom: '2rem' }}>
            <div className="form-group" style={{ display: 'flex', gap: '0.8rem', alignItems: 'center' }}>
              <input 
                type="text" 
                className="form-control" 
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Type your search query..."
              />
              <button className="btn btn-primary" style={{ whiteSpace: 'nowrap' }}>Search</button>
            </div>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Showing {results.length} matches for keyword: "<strong>{query}</strong>"</p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
            {results.map((item, idx) => (
              <div key={idx} className="mockup-card" style={{ padding: '1.5rem' }}>
                <span className="mockup-tag">{item.type}</span>
                <h3 style={{ fontSize: '1.25rem', marginTop: '0.5rem' }}>{item.name}</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Match found in the Upcreators database. Once screenshots are loaded, we will style this with matching grids.</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
