// import React, { useEffect, useRef, useState } from 'react';
// import gsap from 'gsap';

// const SmoothScroll = ({ children }) => {
//   const containerRef = useRef(null);
//   const [contentHeight, setContentHeight] = useState(0);

//   const scrollY = useRef(0);
//   const targetY = useRef(0);
//   const tickerRef = useRef(null);

//   // Function to update spacer height
//   const updateHeight = () => {
//     if (containerRef.current) {
//       setContentHeight(containerRef.current.scrollHeight);
//     }
//   };

//   useEffect(() => {
//     // Update height initially and after images load
//     updateHeight();
//     window.addEventListener('resize', updateHeight);

//     // In case of images/fonts loading later
//     window.addEventListener('load', updateHeight);

//     const onScroll = () => {
//       targetY.current = window.scrollY;
//     };
//     window.addEventListener('scroll', onScroll);

//     // Store ticker reference so we can remove it later
//     const tickerFn = () => {
//       scrollY.current += (targetY.current - scrollY.current) * 0.08; // smoother
//       gsap.set(containerRef.current, { y: -scrollY.current });
//     };
//     tickerRef.current = tickerFn;
//     gsap.ticker.add(tickerFn);

//     return () => {
//       window.removeEventListener('resize', updateHeight);
//       window.removeEventListener('load', updateHeight);
//       window.removeEventListener('scroll', onScroll);
//       if (tickerRef.current) gsap.ticker.remove(tickerRef.current);
//     };
//   }, []);

//   return (
//     <>
//       {/* Spacer div so browser can scroll normally */}
//       <div style={{ height: contentHeight }} />
//       {/* Fixed container for smooth transform */}
//       <div
//         ref={containerRef}
//         style={{
//           position: 'fixed',
//           top: 0,
//           left: 0,
//           width: '100%',
//           willChange: 'transform',
//         }}
//       >
//         {children}
//       </div>
//     </>
//   );
// };

// export default SmoothScroll;

"use client";
import { ReactNode, useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function SmoothScroll({ children }: { children: ReactNode }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2, // scrolling duration
      // lerp: 0.1,  // alternative way to control smoothness
      // wheelMultiplier: 1, // adjust scroll speed
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    lenis.on("scroll", ScrollTrigger.update);

    return () => {
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
