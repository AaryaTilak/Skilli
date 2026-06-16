import React from 'react';

export default function Logo({ light = false }) {
  return (
    <div 
      className="flex items-center gap-3 select-none no-underline cursor-pointer group"
    >
      {/* Premium Travel Logo Mark - Globe with paper plane / compass theme */}
      <svg 
        width="38" 
        height="38" 
        viewBox="0 0 24 24" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="duration-300 transform group-hover:rotate-12 group-hover:scale-105"
      >
        {/* Outer Globe Circle */}
        <circle 
          cx="12" 
          cy="12" 
          r="9" 
          stroke={light ? "#FCB626" : "#FCB626"} 
          strokeWidth="2" 
        />
        {/* Horizontal latitude lines */}
        <path 
          d="M3 12H21" 
          stroke={light ? "#FFFFFF" : "currentColor"} 
          strokeWidth="1.5" 
          className={light ? "" : "text-primary dark:text-white"}
          strokeDasharray="2 2"
        />
        {/* Vertical longitude lines */}
        <path 
          d="M12 3V21" 
          stroke={light ? "#FFFFFF" : "currentColor"} 
          strokeWidth="1.5" 
          className={light ? "" : "text-primary dark:text-white"}
          strokeDasharray="2 2"
        />
        {/* Compass Pin - North */}
        <path 
          d="M12 8L15 12H9L12 8Z" 
          fill="#FCB626" 
        />
        {/* Compass Pin - South */}
        <path 
          d="M12 16L9 12H15L12 16Z" 
          fill={light ? "#FFFFFF" : "currentColor"} 
          className={light ? "" : "text-primary dark:text-white"}
        />
      </svg>

      <div className="flex flex-col leading-none">
        <span 
          className={`font-title font-black text-2xl tracking-[0.1em] uppercase duration-300 ${
            light ? 'text-white' : 'text-primary dark:text-white'
          }`}
        >
          Skilli
        </span>
        <span 
          className={`font-base font-bold text-xs tracking-[0.35em] uppercase duration-300 ${
            light ? 'text-white/75' : 'text-secondary dark:text-secondary'
          }`}
        >
          Travel
        </span>
      </div>
    </div>
  );
}
