// Crie um novo arquivo src/components/Counter.tsx
import React, { useState, useEffect, useRef } from 'react';

interface CounterProps {
  value: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
}

const Counter: React.FC<CounterProps> = ({ value, duration = 3000, prefix = '', suffix = '' }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          startCounter();
          observerRef.current?.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
      observerRef.current = observer;
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  const startCounter = () => {
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
    <div ref={ref} className="font-bold text-2xl text-yellow-400">
      {prefix}{count}{suffix}
    </div>
  );
};

export default Counter;