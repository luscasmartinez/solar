// src/components/Counter.tsx
import React, { useState, useEffect, useRef } from 'react';

interface CounterProps {
  value: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
}

const Counter: React.FC<CounterProps> = ({ value, duration = 2000, prefix = '', suffix = '' }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            startCounter();
          } else {
            // Reset para permitir nova animação quando voltar à tela
            hasAnimated.current = false;
            setCount(0);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [value, duration]);

  const startCounter = () => {
    if (hasAnimated.current) return;
    hasAnimated.current = true;
    
    const startTime = Date.now();
    const endTime = startTime + duration;
    
    const updateCounter = () => {
      const now = Date.now();
      const progress = Math.min(1, (now - startTime) / duration);
      const currentCount = Math.floor(progress * value);
      
      setCount(currentCount);
      
      if (now < endTime) {
        requestAnimationFrame(updateCounter);
      } else {
        setCount(value); // Garante que terminamos exatamente no valor final
      }
    };
    
    requestAnimationFrame(updateCounter);
  };

  return (
    <div ref={ref}>
      {prefix}{count}{suffix}
    </div>
  );
};

export default Counter;