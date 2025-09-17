import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const useStackedCards = () => {
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".cards",
        pin: true,
        pinSpacing: true,
        start: "top top",
        end: "+=4000",
        scrub: 0.5,
      },
    });

    const blurConfig = {
      scale: 0.95,
      yPercent: -2,
      filter: "blur(6px)",
      ease: "power2.out",
      duration: 0.8,
    };

    const showConfig = {
      yPercent: 0,
      opacity: 1,
      ease: "power2.out",
      duration: 1,
    };

    // card 1
    tl.to(".card1", showConfig);

    // card 2
    tl.from(".card2", { yPercent: 75, opacity: 0, duration: 1 }, "-=0.5");
    tl.to(".card1", blurConfig, "-=0.6");
    tl.to(".card2", showConfig, "-=0.6");

    // card 3
    tl.from(".card3", { yPercent: 75, opacity: 0, duration: 1 }, "-=0.5");
    tl.to(".card2", blurConfig, "-=0.6");
    tl.to(".card3", showConfig, "-=0.6");

    // card 4
    tl.from(".card4", { yPercent: 75, opacity: 0, duration: 1 }, "-=0.5");
    tl.to(".card3", blurConfig, "-=0.6");
    tl.to(".card4", showConfig, "-=0.6");

    // ✅ cleanup must return a function
    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);
};

export default useStackedCards;
