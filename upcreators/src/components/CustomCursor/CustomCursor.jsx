import React, { useEffect, useState } from 'react';
import './CustomCursor.css';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [trailPosition, setTrailPosition] = useState({ x: 0, y: 0 });
  const [hidden, setHidden] = useState(true);
  const [clicked, setClicked] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [hoverType, setHoverType] = useState('');

  useEffect(() => {
    // Check if device supports hover events
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) {
      return;
    }

    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setHidden(false);
    };

    const handleMouseLeave = () => {
      setHidden(true);
    };

    const handleMouseDown = () => {
      setClicked(true);
    };

    const handleMouseUp = () => {
      setClicked(false);
    };

    // Trailing ring physics
    let trailAnimationFrame;
    const updateTrail = () => {
      setTrailPosition((prev) => {
        // Linear interpolation for lagging movement (spring-like trail)
        const dx = position.x - prev.x;
        const dy = position.y - prev.y;
        return {
          x: prev.x + dx * 0.15,
          y: prev.y + dy * 0.15
        };
      });
      trailAnimationFrame = requestAnimationFrame(updateTrail);
    };
    trailAnimationFrame = requestAnimationFrame(updateTrail);

    // Dynamic hover listeners
    const addHoverListeners = () => {
      const interactiveElements = document.querySelectorAll('a, button, input, select, textarea, [role="button"], .clickable');
      
      interactiveElements.forEach((el) => {
        el.addEventListener('mouseenter', (e) => {
          setHovered(true);
          if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
            setHoverType('text');
          } else {
            setHoverType('link');
          }
        });
        el.addEventListener('mouseleave', () => {
          setHovered(false);
          setHoverType('');
        });
      });
    };

    // Add listeners initially
    addHoverListeners();
    
    // Add event listeners
    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    // Re-bind hover listeners periodically (since components load asynchronously)
    const observer = new MutationObserver(addHoverListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      cancelAnimationFrame(trailAnimationFrame);
      observer.disconnect();
    };
  }, [position.x, position.y]);

  // Don't render on mobile/tablet touch screens
  const isTouch = typeof window !== 'undefined' && ('ontouchstart' in window || navigator.maxTouchPoints > 0);
  if (isTouch) return null;

  return (
    <>
      <div
        className={`custom-cursor-dot ${hidden ? 'hidden' : ''} ${clicked ? 'clicked' : ''} ${hovered ? `hovered-${hoverType}` : ''}`}
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0)`
        }}
      />
      <div
        className={`custom-cursor-ring ${hidden ? 'hidden' : ''} ${clicked ? 'clicked' : ''} ${hovered ? `hovered-${hoverType}` : ''}`}
        style={{
          transform: `translate3d(${trailPosition.x}px, ${trailPosition.y}px, 0)`
        }}
      />
    </>
  );
}
