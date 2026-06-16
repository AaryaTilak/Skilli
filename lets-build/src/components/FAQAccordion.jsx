import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function FAQAccordion() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What should I bring to my first appointment?",
      answer: "Please bring a valid photo ID, your health insurance card, a list of current medications (including dosages), and any medical records or test results from previous doctors related to your condition."
    },
    {
      question: "Do you accept my health insurance provider?",
      answer: "We accept most major commercial insurance plans, Medicare, and select Medicaid plans. Please call our billing office or check our website's billing section to confirm specific coverage details before your visit."
    },
    {
      question: "How do I request a prescription refill?",
      answer: "You can request a prescription refill by contacting your pharmacy directly (they will send an electronic request to us), or by calling our clinic line during regular business hours. Please allow 24-48 hours for processing."
    },
    {
      question: "What is your clinic's cancellation policy?",
      answer: "We require at least 24 hours notice for any appointment cancellation or rescheduling. Failure to cancel within this window may result in a standard missed appointment fee."
    },
    {
      question: "Is there parking available at the medical center?",
      answer: "Yes, we offer complimentary on-site parking for all patients and visitors in the parking deck directly adjacent to the main clinic building. Wheelchair-accessible spaces are available near the entrance."
    }
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-accordion">
      {faqs.map((faq, index) => {
        const isActive = activeIndex === index;
        return (
          <div key={index} className={`faq-item ${isActive ? 'active' : ''}`}>
            <button 
              className="faq-question-btn" 
              onClick={() => toggleAccordion(index)}
              aria-expanded={isActive}
            >
              <span className="faq-question-text">{faq.question}</span>
              <ChevronDown className="faq-icon" size={18} />
            </button>
            <div 
              className="faq-answer-container"
              style={{
                maxHeight: isActive ? '300px' : '0px',
                opacity: isActive ? 1 : 0
              }}
            >
              <div className="faq-answer-content">
                <p>{faq.answer}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
