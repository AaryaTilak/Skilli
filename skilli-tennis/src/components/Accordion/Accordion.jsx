import React, { useState } from 'react';
import { ChevronDown, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Accordion.css';

export default function Accordion({ items }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleIndex = (index) => {
    setActiveIndex(activeIndex === index ? -1 : index);
  };

  return (
    <div className="accordion">
      {items.map((item, index) => {
        const isOpen = activeIndex === index;
        return (
          <div key={index} className={`accordion-item ${isOpen ? 'open' : ''}`}>
            <button 
              className="accordion-header" 
              onClick={() => toggleIndex(index)}
              aria-expanded={isOpen}
            >
              <div className="accordion-title-wrapper">
                <span className="accordion-number">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3 className="accordion-title">{item.title}</h3>
              </div>
              <div className={`accordion-icon-wrapper ${isOpen ? 'rotate' : ''}`}>
                <ChevronDown size={20} />
              </div>
            </button>

            <div 
              className="accordion-collapse" 
              style={{ maxHeight: isOpen ? '500px' : '0px' }}
            >
              <div className="accordion-body">
                <div className="accordion-content-layout">
                  <div className="accordion-text-side">
                    <p className="accordion-desc">{item.content}</p>
                    {item.buttonText && (
                      <Link to="/contact" className="btn-primary accordion-btn">
                        {item.buttonText} <ArrowUpRight size={16} />
                      </Link>
                    )}
                  </div>
                  {item.image && (
                    <div className="accordion-image-side">
                      <img src={item.image} alt={item.title} className="accordion-img" />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
