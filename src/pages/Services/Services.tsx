import React, { useEffect, useRef, useState } from 'react'
import { ServiceCard } from '@/components/ServiceCard';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { HighlightTag } from '@/components/HighlightTag';
import ServiceScrollImages from '@/components/ui/ServicesAnimation/ServiceScrollImages';
import ServicesShowcase from '@/components/ui/ServicesAnimation/ServiceScrollImages';
import { motion, Variants } from "framer-motion";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { InteractiveHoverButton } from '@/components/animations/magicui/interactive-hover-button';
import ContactModal from '@/components/ui/ContactModal';



gsap.registerPlugin(ScrollTrigger);


const highlightVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeInOut" }, // use string easing to avoid TS errors
  },
};


const wordVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.5, ease: "easeOut" as const } 
  },
};

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1, // delay between words
    },
  },
};

const pWordVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" as const },
  },
};

const pContainerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.05, // delay between words
    },
  },
};

const cardsData = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-graph-up-arrow" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M0 0h1v15h15v1H0zm10 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V4.9l-3.613 4.417a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 0 1-.808-.588l4-5.5a.5.5 0 0 1 .758-.06l2.609 2.61L13.445 4H10.5a.5.5 0 0 1-.5-.5"/>
    
      
      </svg>
    ),
    text: "Digital Marketing",
    description:
      "Grow your brand online with targeted campaigns, analytics, and strategy.",
    color: "bg-[#3E2F56]",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-calendar-date" viewBox="0 0 16 16">
      <path d="M6.445 11.688V6.354h-.633A13 13 0 0 0 4.5 7.16v.695c.375-.257.969-.62 1.258-.777h.012v4.61zm1.188-1.305c.047.64.594 1.406 1.703 1.406 1.258 0 2-1.066 2-2.871 0-1.934-.781-2.668-1.953-2.668-.926 0-1.797.672-1.797 1.809 0 1.16.824 1.77 1.676 1.77.746 0 1.23-.376 1.383-.79h.027c-.004 1.316-.461 2.164-1.305 2.164-.664 0-1.008-.45-1.05-.82zm2.953-2.317c0 .696-.559 1.18-1.184 1.18-.601 0-1.144-.383-1.144-1.2 0-.823.582-1.21 1.168-1.21.633 0 1.16.398 1.16 1.23"/>
      <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z"/>
    </svg>
    ),
    text: "Social Media Management",
    description:
      "Manage your social profiles with creative content and audience engagement.",
    color: "bg-[#3E2F56]",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
      <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
    </svg>
    ),
    text: "SEO Optimization",
    description:
      "Improve your website’s ranking and drive organic traffic effectively.",
    color: "bg-[#3E2F56]",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-palette" viewBox="0 0 16 16">
      <path d="M8 5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m4 3a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3M5.5 7a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m.5 6a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3"/>
      <path d="M16 8c0 3.15-1.866 2.585-3.567 2.07C11.42 9.763 10.465 9.473 10 10c-.603.683-.475 1.819-.351 2.92C9.826 14.495 9.996 16 8 16a8 8 0 1 1 8-8m-8 7c.611 0 .654-.171.655-.176.078-.146.124-.464.07-1.119-.014-.168-.037-.37-.061-.591-.052-.464-.112-1.005-.118-1.462-.01-.707.083-1.61.704-2.314.369-.417.845-.578 1.272-.618.404-.038.812.026 1.16.104.343.077.702.186 1.025.284l.028.008c.346.105.658.199.953.266.653.148.904.083.991.024C14.717 9.38 15 9.161 15 8a7 7 0 1 0-7 7"/>
    </svg>
    ),
    text: "Branding & Logo Design",
    description:
      "Create memorable brand identities and logos that stand out visually.",
    color: "bg-[#3E2F56]",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-camera" viewBox="0 0 16 16">
      <path d="M15 12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h1.172a3 3 0 0 0 2.12-.879l.83-.828A1 1 0 0 1 6.827 3h2.344a1 1 0 0 1 .707.293l.828.828A3 3 0 0 0 12.828 5H14a1 1 0 0 1 1 1zM2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4z"/>
      <path d="M8 11a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5m0 1a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7M3 6.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0"/>
    </svg>
    ),
    text: "Commercial Photography",
    description:
      "Capture stunning visuals for products, portraits, and events that leave a lasting impression and elevate your brand.",
    color: "bg-[#3E2F56]",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-camera-video" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M0 5a2 2 0 0 1 2-2h7.5a2 2 0 0 1 1.983 1.738l3.11-1.382A1 1 0 0 1 16 4.269v7.462a1 1 0 0 1-1.406.913l-3.111-1.382A2 2 0 0 1 9.5 13H2a2 2 0 0 1-2-2zm11.5 5.175 3.5 1.556V4.269l-3.5 1.556zM2 4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h7.5a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1z"/>
</svg>
    ),
    text: "High-Quality Videography",
    description:
      "Produce cinematic, high-quality videos that tell compelling stories and showcase your brand with impact.",
    color: "bg-[#3E2F56]",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-laptop" viewBox="0 0 16 16">
      <path d="M13.5 3a.5.5 0 0 1 .5.5V11H2V3.5a.5.5 0 0 1 .5-.5zm-11-1A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5"/>
    </svg>
    ),
    text: "Post Production",
    description:
      "Transform raw footage into polished, professional content with expert editing, color grading, and visual enhancements.",
    color: "bg-[#3E2F56]",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-geo-alt" viewBox="0 0 16 16">
      <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10"/>
      <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
    </svg>
    ),
    text: "Studio & On-Location Shoots",
    description:
      "Deliver professional photography and videography sessions, whether in a controlled studio or on location, tailored to your creative vision.",
    color: "bg-[#3E2F56]",
  },
  
];


  
const Services = () => {
  const cardsRef = useRef<HTMLDivElement[]>([]);
  const stackAreaRef = useRef<HTMLDivElement>(null);
  const headingText = "Our Services";
  const words = headingText.split(" ");
  const [openModal,setOpenModal] = useState(false)

  const paragraph = [
    "We", "help", "brands", 
    <span className="text-white font-semibold" key="grow">grow</span>, 
    "with", "innovative", "marketing", "strategies,", 
    <span className="text-white font-semibold" key="creative">creative content production</span>, 
    "and", "data-driven", "campaigns", "that", 
    <span className="text-white font-semibold" key="engagement">drive engagement</span>, 
    ",", "increase", "conversions,", "and", "elevate", "your", "business", "to", "the", "next", "level."
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      let angleStep = -10;
      const totalCards = cardsRef.current.length;
  
      // Position initial stack
      cardsRef.current.forEach((card, i) => {
        gsap.set(card, {
          rotate: i * angleStep,
          zIndex: totalCards - i,
        });
      });
  
      // Scroll distance = one screen height per card
      const scrollDistance = window.innerHeight * totalCards;
  
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: stackAreaRef.current,
          start: "top top",
          end: `+=${scrollDistance}`,
          scrub: 0.6,
          pin: true,
        },
      });
  
      // Animate each card
      cardsRef.current.forEach((card, i) => {
        tl.to(card, {
          y: "-120vh",
          rotate: -48,
          ease: "power1.inOut",
        }, `step${i}`);
      });
  
    }, stackAreaRef);
  
    return () => ctx.revert();
  }, []);
  
  
  return(
<div>
  {/* Services Heading */}
  <motion.div
    className="flex justify-center lg:justify-center"
    variants={highlightVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.3 }}
  >
    <HighlightTag
      variant="dotted"
      className="border-2 border-white/80 rounded-lg shadow-[0_0_15px_rgba(255,255,255,0.3)]"
      title={
        <span className="bg-gradient-to-r from-[#3E2F56] to-[#8A6FB3] bg-clip-text text-transparent">
          Services
        </span>
      }
      icon={<svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-gear" viewBox="0 0 16 16" > <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492M5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0" /> <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115z" /> </svg>}
    />
  </motion.div>

  {/* Layout Wrapper */}
  <div
    ref={stackAreaRef}
    className="w-full relative flex flex-col lg:flex-row items-center lg:items-start"
  >
    {/* LEFT SIDE - Text */}
    <div className="w-full lg:w-1/2 h-auto lg:h-screen flex flex-col justify-center px-6 lg:px-10 text-center lg:text-left">
      {/* Title */}
      <motion.h1
        className="mt-6 lg:mt-0 text-4xl md:text-5xl lg:text-[84px] font-extrabold leading-tight lg:leading-[88px] 
                   max-w-full lg:max-w-[420px] font-poppins text-white flex flex-wrap mx-auto lg:mx-0"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        {words.map((word, index) => (
          <motion.span key={index} className="mr-2" variants={wordVariants}>
            {word}
          </motion.span>
        ))}
      </motion.h1>

      {/* Description */}
      <motion.p
        className="mt-6 max-w-xl lg:max-w-[420px] text-base md:text-lg text-gray-300 
                   leading-relaxed tracking-wide mx-auto lg:mx-0"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={pContainerVariants}
      >
        {paragraph.map((word, index) => (
          <motion.span key={index} className="mr-1" variants={pWordVariants}>
            {word}{" "}
          </motion.span>
        ))}
      </motion.p>

      {/* Button */}
      <motion.div
        className="mt-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6, delay: 1.2 }}
      >
        <InteractiveHoverButton onClick={() => setOpenModal(true)}>
          See Our Magic
        </InteractiveHoverButton>
      </motion.div>
      <ContactModal isOpen={openModal} onClose={() => setOpenModal(false)} />
    </div>

    {/* RIGHT SIDE - Cards */}
    <div className="relative w-full lg:w-1/2 h-[70vh] lg:h-screen flex items-center justify-center">
      {cardsData.map((card, i) => (
        <div
          key={i}
          ref={(el) => {
            if (el) cardsRef.current[i] = el;
          }}
          className="absolute top-1/2 left-1/2 w-[90%] max-w-[350px] h-[400px] 
                     -translate-x-1/2 -translate-y-1/2 
                     rounded-[25px] p-6 flex flex-col justify-between items-center 
                     text-white backdrop-blur-md bg-gradient-to-br from-[#3E2F56]/80 to-[#8A6FB3]/50 
                     border border-white/20 shadow-lg hover:scale-105 transition-transform duration-300"
        >
          {/* Icon */}
          <div
            className={`w-16 h-16 flex items-center justify-center rounded-full p-4 shadow-md ${card.color}`}
          >
            {card.icon}
          </div>

          {/* Title + Description */}
          <div className="text-center mt-4">
            <h3 className="text-2xl font-bold font-poppins mb-2">
              {card.text}
            </h3>
            <p className="text-sm text-white/70 leading-relaxed max-w-[280px] mx-auto">
              {card.description}
            </p>
          </div>

          {/* Gradient underline */}
          <div className="w-16 h-1 mt-4 rounded-full bg-gradient-to-r from-purple-400 to-pink-500" />
        </div>
      ))}
    </div>
  </div>
</div>

  )
//   return (
//      //<div>
//     //         <hr className="border-0 h-px bg-[#E8C1C5]/30" />

//     //     <div className=" flex w-full flex-col items-center pb-[58px] rounded-[20px] max-md:max-w-full">
//     //     <div className="flex flex-col self-stretch relative min-h-[400px] w-full overflow-hidden items-center pt-[100px] pb-[41px] px-20 max-md:max-w-full max-md:px-5">
//   {/* <img
//     src="https://api.builder.io/api/v1/image/assets/TEMP/0e856ed630aeb9def5b08fb09d885341e3a4cc59?placeholderIfAbsent=true"
//     className="absolute h-full w-full object-cover inset-0 max-md:rounded-t-[30px]" // mobile top radius
//     alt=""
//   /> */}
//   // <div className="relative flex w-[565px] max-w-full flex-col items-center">
   
//     // <div className="flex justify-center">
//     //     <HighlightTag
//     //       variant="dotted"
//     //       className="border-2 border-white/80 rounded-lg shadow-[0_0_15px_rgba(255,255,255,0.3)]"
//     //       title={
//     //         <span className="bg-gradient-to-r from-[#3E2F56] to-[#8A6FB3] bg-clip-text text-transparent">
//     //           Services
//     //         </span>
//     //       }
//     //       icon={  <svg
//     //         xmlns="http://www.w3.org/2000/svg"
//     //         width={16}
//     //         height={16}
//     //         fill="currentColor"
//     //         className="bi bi-gear"
//     //         viewBox="0 0 16 16"
//     //       >
//     //         <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492M5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0" />
//     //         <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115z" />
//     //       </svg>
          
//     //     }
          
//     //     />
      
//     //   </div>
     

//     {/* Heading */}
//     {/* <div className="flex flex-col items-center text-center mt-[35px]">
//       <div className="flex flex-wrap justify-center gap-[10px] text-[54px] font-normal tracking-[-1.9px] leading-none max-md:text-[28px] max-lg:text-[40px]">
//         <span className="text-white">Innovative</span>
//         <span className="text-white">Marketing</span>
//         <span className="text-white">and</span>
//         <span className="text-white">Production</span>
//         <span className="text-white">for Growth</span>
//       </div>
//     </div> */}

//     {/* Paragraphs */}
//     {/* <p className="text-gray-500 text-base font-normal leading-relaxed tracking-[-0.2px] text-center mt-[25px] max-w-[90%] mx-auto max-md:text-sm max-md:leading-[22px]">
//       We craft powerful marketing and production solutions that captivate audiences,
//       impact, and fuel business growth.
//     </p>
//   </div>
// </div>
//             <Button  className="w-full sm:w-[195px] h-[46px] rounded-[10px] 
//   border border-[#E8C1C5]/30 shadow-sm shadow-white/20
//   bg-gradient-to-r from-[#E8C1C5] to-[#E8C1C5] 
//   [font-family:'DM_Sans',Helvetica] font-medium text-[#3E2F56] text-base tracking-[-0.50px] leading-[26px] 
//   hover:from-[#d8a8ad] hover:to-[#d8a8ad] 
//   transition-all duration-300 ease-in-out 
//   mt-4 sm:mt-6">
//   Book a 15min call
// </Button> */}

//             {/* <div className="w-full max-w-[1160px] mt-[60px] max-md:max-w-full max-md:mt-10">
//               <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
//                 <div className="w-[33%] max-md:w-full max-md:ml-0">
//                   <ServiceCard
//                     icon="https://api.builder.io/api/v1/image/assets/TEMP/ce71df6c9e20255c2c867632ee3ff41eb5a87c29?placeholderIfAbsent=true"
//                     title="Branding & Visual Identity"
//                     subtitle="Logos & Guidelines"
//                     description="Crafting unique brand visuals and consistent identity guidelines."
//                     projectImage="https://api.builder.io/api/v1/image/assets/TEMP/6a51da5a7f687662dcf8b03bd2c53b349b362d91?placeholderIfAbsent=true"
//                   />
//                 </div>
//                 <div className="w-[33%] ml-5 max-md:w-full max-md:ml-0">
//                   <ServiceCard
//                     icon="https://api.builder.io/api/v1/image/assets/TEMP/2bcebd3bdf022bd60290190522a47011624b60d3?placeholderIfAbsent=true"
//                     title="Social Media Strategy & Management"
//                     subtitle="Content that Engages"
//                     description="From strategy to content creation, we manage social media that connects."
//                     projectImage="https://api.builder.io/api/v1/image/assets/TEMP/50557cbaa6732feaadc172ba9f6b0e59dc62e01d?placeholderIfAbsent=true"
//                   />
//                 </div>
//                 <div className="w-[33%] ml-5 max-md:w-full max-md:ml-0">
//                   <ServiceCard
//                     icon="https://api.builder.io/api/v1/image/assets/TEMP/70fc8f7f275cf02d8e1ff56d36df0f12a28e2bc2?placeholderIfAbsent=true"
//                     title="Performance Marketing & Paid Ads"
//                     subtitle="Max ROI"
//                     description="Targeted campaigns designed to deliver measurable results."
//                     projectImage="https://api.builder.io/api/v1/image/assets/TEMP/6dbfe47f17b74391e7a2c264f9bc9a025b359ed6?placeholderIfAbsent=true"
//                   />
//                 </div>
//               </div>
//             </div> */}

//             {/* Additional Service Cards */}
//             {/* <div className="w-full max-w-[1160px] mt-6 max-md:max-w-full">
//               <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
//                 <div className="w-[33%] max-md:w-full max-md:ml-0">
//                   <ServiceCard
//                     icon="https://api.builder.io/api/v1/image/assets/TEMP/ca1486dd50cf00c5c3299df16c5cc155b6b50bb9?placeholderIfAbsent=true"
//                     title="SEO & Web Development"
//                     subtitle="Optimized for Search"
//                     description="Responsive websites built to rank high and perform better."
//                     projectImage="https://api.builder.io/api/v1/image/assets/TEMP/4dad21d8989b35f5e50726819649217b40608d2d?placeholderIfAbsent=true"
//                   />
//                 </div>
//                 <div className="w-[33%] ml-5 max-md:w-full max-md:ml-0">
//                   <ServiceCard
//                     icon="https://api.builder.io/api/v1/image/assets/TEMP/d3d60133ac2c3188a2901716c67ad4b23815279c?placeholderIfAbsent=true"
//                     title="Influencer & PR Outreach"
//                     subtitle="Expand Your Reach"
//                     description="Connecting brands with influencers to drive awareness and trust."
//                     projectImage="https://api.builder.io/api/v1/image/assets/TEMP/8ab81735773db384a58f00f187e439ebca54a356?placeholderIfAbsent=true"
//                   />
//                 </div>
//                 <div className="w-[33%] ml-5 max-md:w-full max-md:ml-0">
//                   <ServiceCard
//                     icon="https://api.builder.io/api/v1/image/assets/TEMP/5b3cd5696ce42b910099d603c2a5fcf84eff172a?placeholderIfAbsent=true"
//                     title="Commercial Photography"
//                     subtitle="Visual Storytelling"
//                     description="Product, portrait, and event photography that captures attention."
//                     projectImage="https://api.builder.io/api/v1/image/assets/TEMP/2395aa2a6a89db11d485bbcd78f38481478665ee?placeholderIfAbsent=true"
//                   />
//                 </div>
//               </div>
//             </div>

//             <div className="w-full max-w-[1160px] mt-6 max-md:max-w-full">
//               <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
//                 <div className="w-[33%] max-md:w-full max-md:ml-0">
//                   <ServiceCard
//                     icon="https://api.builder.io/api/v1/image/assets/TEMP/ca1486dd50cf00c5c3299df16c5cc155b6b50bb9?placeholderIfAbsent=true"
//                     title="High-Quality Videography"
//                     subtitle="Impactful Visuals"
//                     description="From reels to commercials, our videos inspire and engage."
//                     projectImage="https://api.builder.io/api/v1/image/assets/TEMP/4dad21d8989b35f5e50726819649217b40608d2d?placeholderIfAbsent=true"
//                   />
//                 </div>
//                 <div className="w-[33%] ml-5 max-md:w-full max-md:ml-0">
//                   <ServiceCard
//                     icon="https://api.builder.io/api/v1/image/assets/TEMP/d3d60133ac2c3188a2901716c67ad4b23815279c?placeholderIfAbsent=true"
//                     title="Post-Production & Motion Graphics"
//                     subtitle="Polished Perfection"
//                     description="Editing, color grading, and animation for a professional finish."
//                     projectImage="https://api.builder.io/api/v1/image/assets/TEMP/8ab81735773db384a58f00f187e439ebca54a356?placeholderIfAbsent=true"
//                   />
//                 </div>
//                 <div className="w-[33%] ml-5 max-md:w-full max-md:ml-0">
//                   <ServiceCard
//                     icon="https://api.builder.io/api/v1/image/assets/TEMP/5b3cd5696ce42b910099d603c2a5fcf84eff172a?placeholderIfAbsent=true"
//                     title="Studio & On-Location Shoots"
//                     subtitle="Anywhere, Anytime"
//                     description="Flexible production setups for your brand’s needs."
//                     projectImage="https://api.builder.io/api/v1/image/assets/TEMP/2395aa2a6a89db11d485bbcd78f38481478665ee?placeholderIfAbsent=true"
//                   />
//                 </div>
//               </div>
//             </div> */}

//             {/* Service Tags */}
//             {/* <div className="relative z-10 flex flex-col items-center gap-4 px-4 sm:px-6 lg:px-[204px] mt-[40px] mb-[60px]">
//   {/* First Row */}
//   {/* <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-3 sm:mb-4">
//     {serviceTags.slice(0, 4).map((tag, index) => (
//       <Badge
//         key={index}
//         className={`${tag.className} h-[56px] sm:h-[62px] bg-[#080808] rounded-[17px] border border-[#ffffff12] px-3 py-2 sm:px-3.5 sm:py-[13px] relative overflow-hidden flex items-center`}
//       >
//         <div className="absolute inset-0 bg-cover bg-center opacity-50" />
//         <img className="w-7 h-7 sm:w-9 sm:h-9 mr-3" alt="Icon" src={tag.icon} />
//         <span className="[font-family:'DM_Sans',Helvetica] font-medium text-white text-sm sm:text-base tracking-[-0.50px] leading-[22px] sm:leading-[26px]">
//           {tag.text}
//         </span>
//       </Badge>
//     ))}
//   </div> */}

//   {/* Second Row */}
//   {/* <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
//     {serviceTags.slice(4).map((tag, index) => (
//       <Badge
//         key={index + 4}
//         className={`${tag.className} h-[56px] sm:h-[62px] bg-[#080808] rounded-[17px] border border-[#ffffff12] px-3 py-2 sm:px-3.5 sm:py-[13px] relative overflow-hidden flex items-center`}
//       >
//         <div className="absolute inset-0 bg-cover bg-center opacity-50" />
//         <img className="w-7 h-7 sm:w-9 sm:h-9 mr-3" alt="Icon" src={tag.icon} />
//         <span className="[font-family:'DM_Sans',Helvetica] font-medium text-white text-sm sm:text-base tracking-[-0.50px] leading-[22px] sm:leading-[26px]">
//           {tag.text}
//         </span>
//       </Badge>
//     ))}
//   </div>
// </div>
//           </div>  */}
//     // </div>
//   )


}

export default Services