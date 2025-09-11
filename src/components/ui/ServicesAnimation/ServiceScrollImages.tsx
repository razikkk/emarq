// components/ServicesShowcase.tsx
"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const images = [
  {
    src:
      "https://api.builder.io/api/v1/image/assets/TEMP/6a51da5a7f687662dcf8b03bd2c53b349b362d91?placeholderIfAbsent=true",
    title: "Branding & Identity",
    subtitle: "Logos, Guidelines & Systems",
  },
  {
    src:
      "https://api.builder.io/api/v1/image/assets/TEMP/50557cbaa6732feaadc172ba9f6b0e59dc62e01d?placeholderIfAbsent=true",
    title: "Social Media Strategy",
    subtitle: "Content that Creates Engagement",
  },
  {
    src:
      "https://api.builder.io/api/v1/image/assets/TEMP/6dbfe47f17b74391e7a2c264f9bc9a025b359ed6?placeholderIfAbsent=true",
    title: "Web Development",
    subtitle: "Fast, SEO-friendly and robust",
  },
  {
    src:
      "https://api.builder.io/api/v1/image/assets/TEMP/2395aa2a6a89db11d485bbcd78f38481478665ee?placeholderIfAbsent=true",
    title: "Photography & Videography",
    subtitle: "Visual storytelling to convert",
  },
];

export default function ServicesShowcase(): JSX.Element {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const container = containerRef.current;

    // Build timeline pinned to the container. Total scroll duration scaled by the number of slides.
    const totalDuration = images.length * (window.innerHeight || 800);

    const ctx = gsap.context(() => {
      // timeline pinned to the container
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: "top top",
          end: `+=${totalDuration}`, // scroll distance
          scrub: true,
          pin: true,
          anticipatePin: 1,
        },
      });

      // for stacking, we keep images stacked (first on top), then fade out each after it fills.
      images.forEach((_, i) => {
        const imgSelector = `.slide-${i} img`;
        const slideSelector = `.slide-${i}`;
        const captionSelector = `.caption-${i}`;

        // sequence: grow & remove radius -> show caption -> fade out
        // we space each step by 1 (arbitrary units) so timeline length equals number of slides
        // scale to fill (value 2.0 works for many sizes; tweak if needed)
        tl.to(
          imgSelector,
          {
            scale: 2.0,
            borderRadius: "0px",
            ease: "none",
            duration: 1,
          },
          i // start at time i
        );

        // caption reveal slightly after scaling begins
        tl.to(
          captionSelector,
          {
            x: 0,
            y: 0,
            opacity: 1,
            duration: 0.6,
            ease: "power1.out",
          },
          i + 0.25
        );

        // hold a bit, then fade the whole slide to reveal next (or end)
        tl.to(
          slideSelector,
          {
            opacity: 0,
            duration: 0.5,
            ease: "none",
          },
          i + 0.85
        );
      });

      // Optional: at the very end we can unpin; handled by ScrollTrigger end
    }, container);

    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section className="relative">
      {/* Marquee with centered first image overlay */}
      <div className="relative">
        <div className="marquee-container">
          <div className="marquee">
            <span>
              Innovative Marketing • Branding • SEO • Social Media • Production •
            </span>
            <span>
              Innovative Marketing • Branding • SEO • Social Media • Production •
            </span>
          </div>
        </div>

        {/* Centered preview image on top of marquee (visual continuity) */}
        <div className="absolute inset-0 pointer-events-none z-20 flex items-center justify-center">
          <img
            src={images[0].src}
            alt={images[0].title}
            className="rounded-[50px] w-[40vw] max-w-[780px] object-cover shadow-2xl"
            style={{ boxShadow: "0 30px 60px rgba(0,0,0,0.5)" }}
          />
        </div>
      </div>

      {/* Pinned stacked slides (GSAP driven) */}
      <div
        ref={containerRef}
        className="service-stack-container"
        aria-hidden={false}
      >
        {images.map((img, i) => (
          <div
            key={i}
            className={`service-slide slide-${i}`}
            style={{ zIndex: images.length - i }}
          >
            <img src={img.src} alt={img.title} />

            <div className={`service-caption caption-${i}`}>
              <h2>{img.title}</h2>
              <p>{img.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
