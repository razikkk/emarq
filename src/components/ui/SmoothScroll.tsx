import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

const SmoothScroll = ({ children }) => {
  const containerRef = useRef(null);
  const [contentHeight, setContentHeight] = useState(0);

  const scrollY = useRef(0);
  const targetY = useRef(0);

  useEffect(() => {
    const updateHeight = () => {
      setContentHeight(containerRef.current.getBoundingClientRect().height);
    };
    updateHeight();
    window.addEventListener('resize', updateHeight);

    const onScroll = () => {
      targetY.current = window.scrollY;
    };
    window.addEventListener('scroll', onScroll);

    gsap.ticker.add(() => {
      scrollY.current += (targetY.current - scrollY.current) * 0.02; // smooth factor
      gsap.set(containerRef.current, { y: -scrollY.current });
    });

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', updateHeight);
      gsap.ticker.remove(() => {});
    };
  }, []);

  return (
    <>
      {/* Spacer div so browser keeps normal scroll height */}
      <div style={{ height: contentHeight }} />
      {/* Actual content */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          willChange: 'transform',
        }}
        ref={containerRef}
      >
        {children}
      </div>
    </>
  );
};

export default SmoothScroll;
