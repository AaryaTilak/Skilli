import React from 'react';

export default function Logo({ width = 120, height = 45, light = false }) {
  const textColor = light ? '#FFFFFF' : '#222222';
  const subColor = light ? 'rgba(255, 255, 255, 0.7)' : '#777777';
  const iconColor = light ? '#FFFFFF' : '#222222';

  return (
    <div 
      className="logo-container" 
      style={{ 
        display: 'flex', 
        alignItems: 'center', 
        gap: '12px',
        userSelect: 'none',
        textDecoration: 'none'
      }}
    >
      {/* Premium Minimalist Brand Mark (Abstract Leaf + Droplet) */}
      <svg 
        width="36" 
        height="36" 
        viewBox="0 0 36 36" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        style={{ transition: 'transform 0.3s ease' }}
        className="brand-logo-svg"
      >
        <path 
          d="M18 3C25 11.4 29.5 16.2 29.5 22.8C29.5 29.1513 24.3513 33 18 33C11.6487 33 6.5 29.1513 6.5 22.8C6.5 16.2 11 11.4 18 3Z" 
          stroke={iconColor} 
          strokeWidth="2.5" 
          strokeLinejoin="round" 
        />
        <path 
          d="M18 10C18 10 21.5 16.5 18 23C14.5 29.5 18 31.5 18 31.5" 
          stroke={iconColor} 
          strokeWidth="2" 
          strokeLinecap="round" 
        />
        <path 
          d="M18 16C21 19 24.5 20.5 25.5 23" 
          stroke={iconColor} 
          strokeWidth="1.5" 
          strokeLinecap="round" 
        />
        <path 
          d="M18 19.5C15 22.5 12 23.5 11 25.5" 
          stroke={iconColor} 
          strokeWidth="1.5" 
          strokeLinecap="round" 
        />
      </svg>

      {/* Luxury Wordmark Typography */}
      <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1 }}>
        <span 
          style={{ 
            fontFamily: "'Outfit', sans-serif", 
            fontWeight: 800, 
            fontSize: '22px', 
            letterSpacing: '0.12em', 
            color: textColor,
            textTransform: 'uppercase'
          }}
        >
          Skilli
        </span>
        <span 
          style={{ 
            fontFamily: "'Inter', sans-serif", 
            fontWeight: 500, 
            fontSize: '8px', 
            letterSpacing: '0.35em', 
            color: subColor,
            textTransform: 'uppercase',
            marginTop: '2px'
          }}
        >
          Cosmetics
        </span>
      </div>
      
      {styleBlock}
    </div>
  );
}

// Micro-animations for the brand mark
const styleBlock = (
  <style>{`
    .header-logo:hover .brand-logo-svg,
    .widget-logo:hover .brand-logo-svg {
      transform: rotate(15deg) scale(1.05);
    }
  `}</style>
);
