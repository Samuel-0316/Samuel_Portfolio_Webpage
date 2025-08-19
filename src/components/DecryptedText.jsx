// src/components/DecryptedText.jsx
import React, { useState, useEffect, useRef, useCallback } from 'react';
import './DecryptedText.css';

const DecryptedText = ({
  text,
  animateOn = 'hover', // Default value
  speed = 50,
  maxIterations = 10,
  characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()',
  revealDirection = 'forward',
  ...props
}) => {
  const [displayedText, setDisplayedText] = useState(text);
  const containerRef = useRef(null);
  const animationFrameId = useRef(null);
  const lastUpdateTime = useRef(0);
  const currentIterations = useRef(0);
  const isAnimating = useRef(false);

  const startAnimation = useCallback(() => {
    if (isAnimating.current) return;
    isAnimating.current = true;
    
    currentIterations.current = 0;
    lastUpdateTime.current = performance.now();
    
    const animate = (currentTime) => {
      const deltaTime = currentTime - lastUpdateTime.current;

      if (deltaTime >= speed) {
        lastUpdateTime.current = currentTime;
        currentIterations.current += 1;

        const newText = text
          .split('')
          .map((char, index) => {
            if (char === ' ') return ' ';
            const progress = currentIterations.current / maxIterations;
            const revealIndex = revealDirection === 'center'
              ? Math.floor(text.length / 2)
              : (revealDirection === 'backward' ? text.length - 1 : 0);
            const distance = Math.abs(index - revealIndex);
            
            if (progress * text.length > distance) {
              return text[index];
            }
            return characters[Math.floor(Math.random() * characters.length)];
          })
          .join('');

        setDisplayedText(newText);

        if (currentIterations.current >= maxIterations) {
          setDisplayedText(text);
          isAnimating.current = false;
          cancelAnimationFrame(animationFrameId.current);
          return;
        }
      }
      animationFrameId.current = requestAnimationFrame(animate);
    };

    animationFrameId.current = requestAnimationFrame(animate);
  }, [text, speed, maxIterations, characters, revealDirection]);

  // ## NEW useEffect for 'load' animation ##
  // This hook runs once when the component mounts.
  useEffect(() => {
    if (animateOn === 'load') {
      startAnimation();
    }
  }, [animateOn, startAnimation]);

  // useEffect for 'view' animation
  useEffect(() => {
    if (animateOn !== 'view') return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            startAnimation();
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    const currentRef = containerRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [animateOn, startAnimation]);

  const handleMouseEnter = () => {
    if (animateOn === 'hover') {
      startAnimation();
    }
  };
  
  return (
    <span ref={containerRef} onMouseEnter={handleMouseEnter} className="decrypted-text" {...props}>
      {displayedText}
    </span>
  );
};

export default DecryptedText;