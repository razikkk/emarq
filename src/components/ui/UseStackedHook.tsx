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
        end: "+=2800",
        scrub: 1,
      },
    });

    const cardBlurConfig = { scale: 0.95, yPercent: -0.5, opacity: 1, filter: "blur(6px)", ease: "power1.out" }; // reduced blur and smoother easing
    const overlap = "-=0.10"; // reduced overlapping from -0.3 to -0.15

    // Card 1
    tl.addLabel("card1");
    tl.to(".card1", { yPercent: 0, opacity: 1, ease: "power1.out" });

    // Card 2
    tl.from(".card2", { yPercent: 75, opacity: 0, ease: "power1.out" });
    tl.addLabel("card2");
    tl.to(".card1", cardBlurConfig, overlap);
    tl.to(".card2", { yPercent: 0, opacity: 1, ease: "power1.out" });

    // Card 3
    tl.from(".card3", { yPercent: 75, opacity: 0, ease: "power1.out" });
    tl.addLabel("card3");
    tl.to(".card2", cardBlurConfig, overlap);
    tl.to(".card3", { yPercent: 0, opacity: 1, ease: "power1.out" });

    // Card 4
    tl.from(".card4", { yPercent: 75, opacity: 0, ease: "power1.out" });
    tl.addLabel("card4");
    tl.to(".card3", cardBlurConfig, overlap);
    tl.to(".card4", { yPercent: 0, opacity: 1, ease: "power1.out" });

    return () => {
      tl.kill();
    };
  }, []);
};

export default useStackedCards;
