import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger, ScrollToPlugin } from "gsap/all";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const useStackedCards = () => {
  useEffect(() => {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".cards",
        pin: true,
        pinSpacing: true,
        start: "top-=100px top",
        end: "+=2000",
        scrub: 1,
      }
    });

    // Card 1
    tl.addLabel("card1");
    tl.to(".card1", { yPercent: 0, opacity: 1 });

    // Card 2
    tl.from(".card2", { yPercent: 75, opacity: 0 });
    tl.addLabel("card2");

    // Card1 gets blurred when card2 comes in
    tl.to(".card1", { 
      scale: 0.925, 
      yPercent: -0.75, 
      opacity: 1, 
      filter: "blur(8px)", // <-- apply full blur
    }, "-=0.3");

    tl.to(".card2", { yPercent: 0, opacity: 1 });

    // Card 3
    tl.from(".card3", { yPercent: 75, opacity: 0 });
    tl.addLabel("card3");

    // Card2 gets blurred when card3 comes in
    tl.to(".card2", { 
      scale: 0.95, 
      yPercent: -0.5, 
      opacity: 1, 
      filter: "blur(8px)", // <-- full blur
    }, "-=0.3");

    tl.to(".card3", { yPercent: 0, opacity: 1 });

    return () => {
      tl.kill();
    };
  }, []);
};

export default useStackedCards;
