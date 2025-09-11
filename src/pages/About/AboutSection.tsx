// import React from 'react'
// import { Card, CardContent } from '@/components/ui/card';
// import { Button } from '@/components/ui/button';
// import { HighlightTag } from '@/components/HighlightTag';
// import { Badge } from '@/components/ui/badge';


// const featureCards = [
//   {
//     icon: "/icon-28.svg",
//     title: "Tailored Strategies, Measurable Results",
//     description:
//       "We craft customized marketing and production plans that align with your brand goals, delivering campaigns designed for ROI, audience engagement, and long-term growth.",
//     tags: ["Strategy", "ROI Focus"],
//     actionLabel: "Assist",
//   },
//   {
//     icon: "/icon-8.svg",
//     title: "Creative Excellence from Concept to Completion",
//     description:
//       "From branding and digital marketing to high-quality photography and videography, we combine innovation with premium execution to bring your brand story to life.",
//     tags: ["Creative Production", "Brand Storytelling"],
//     actionLabel: "Guide",
//   },
//   {
//     icon: "/icon-15.svg",
//     title: "End-to-End Marketing & Production Solutions",
//     description:
//       "Whether building a brand from scratch or elevating an existing one, we provide full-service support—strategy, content creation, campaign management, and optimization.",
//     tags: ["Full-Service Agency", "Growth Focus"],
//     actionLabel: "Resolve",
//     hasButton: true,
//   },
// ];
// const AboutSection = () => {
//   return (
//     <div>
//     <div className="w-full h-px bg-[linear-gradient(90deg,rgba(255,255,255,0.02)_0%,rgba(255,255,255,0.1)_50%,rgba(255,255,255,0.02)_100%)]" />
  
//     <div className="w-full h-px bg-[linear-gradient(90deg,rgba(255,255,255,0.02)_0%,rgba(255,255,255,0.1)_50%,rgba(255,255,255,0.02)_100%)] absolute bottom-0" />
  
//     <div className="max-w-[1200px] mx-auto px-4 py-[101px]">
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
//         <div className="space-y-8">
//           <div className="space-y-[71px]">
//           <div className="flex justify-center">
//         <HighlightTag
//           variant="dotted"
//           className="border-2 border-white/80 rounded-lg shadow-[0_0_15px_rgba(255,255,255,0.3)]"
//           title={
//             <span className="bg-gradient-to-r from-[#3E2F56] to-[#8A6FB3] bg-clip-text text-transparent">
//               About Emarq
//             </span>
//           }
//           icon={  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-buildings" viewBox="0 0 16 16">
//           <path d="M14.763.075A.5.5 0 0 1 15 .5v15a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V14h-1v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V10a.5.5 0 0 1 .342-.474L6 7.64V4.5a.5.5 0 0 1 .276-.447l8-4a.5.5 0 0 1 .487.022M6 8.694 1 10.36V15h5zM7 15h2v-1.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5V15h2V1.309l-7 3.5z"/>
//           <path d="M2 11h1v1H2zm2 0h1v1H4zm-2 2h1v1H2zm2 0h1v1H4zm4-4h1v1H8zm2 0h1v1h-1zm-2 2h1v1H8zm2 0h1v1h-1zm2-2h1v1h-1zm0 2h1v1h-1zM8 7h1v1H8zm2 0h1v1h-1zm2 0h1v1h-1zM8 5h1v1H8zm2 0h1v1h-1zm2 0h1v1h-1zm0-2h1v1h-1z"/>
//         </svg>
//         }
          
//         />
      
//       </div>
  
//             <div className="space-y-[31px]">
//               <div className="space-y-[10px]">
//                 <div className="flex flex-wrap gap-x-3">
//                   <span className="font-normal text-white text-3xl sm:text-4xl md:text-5xl lg:text-[54px] tracking-[-1.90px] leading-tight">
//                     Crafting
//                   </span>
//                   <span className="font-normal text-white text-3xl sm:text-4xl md:text-5xl lg:text-[54px] tracking-[-1.90px] leading-tight">
//                     Digital
//                   </span>
//                   <span className="font-normal text-white text-3xl sm:text-4xl md:text-5xl lg:text-[54px] tracking-[-1.90px] leading-tight">
//                     Excellence,
//                   </span>
//                 </div>
//                 <div className="flex flex-wrap gap-x-3">
//                   <span className="font-normal text-[#ffffff99] text-3xl sm:text-4xl md:text-5xl lg:text-[54px] tracking-[-1.90px] leading-tight">
//                     Purpose
//                   </span>
//                   <span className="font-normal text-[#ffffff99] text-3xl sm:text-4xl md:text-5xl lg:text-[54px] tracking-[-1.90px] leading-tight">
//                     Into
//                   </span>
//                   <span className="font-normal text-[#ffffff99] text-3xl sm:text-4xl md:text-5xl lg:text-[54px] tracking-[-1.90px] leading-tight">
//                     Ideas!
//                   </span>
//                 </div>
//               </div>
  
//               <p className="font-normal text-[#ffffff99] text-sm sm:text-base md:text-lg tracking-[-0.20px] leading-6 md:leading-7 max-w-[515px]">
//                 Emarq is a premium full-service agency helping brands grow through strategy,
//                 creativity, and data-driven results.
//               </p>
//             </div>
//           </div>
  
//           {/* Feature cards */}
//           <div className="space-y-[58px]">
//             {featureCards.map((card, index) => (
//               <Card
//                 key={index}
//                 className="bg-[#080808] rounded-[30px] border-[#ffffff12] shadow-[0px_10px_22px_-1.75px_#00000029,0px_2.29px_5.03px_-1.17px_#0000001a,0px_0.6px_1.32px_-0.58px_#00000017] overflow-hidden"
//               >
//                 <CardContent className="p-2">
//                   <div className="bg-[#080808] rounded-[22px] border border-[#4f1ad626] shadow-[inset_0px_10px_5px_-1px_#4f1ad626] [background:radial-gradient(50%_50%_at_50%_50%,rgba(15,9,18,0.15)_0%,rgba(12,9,18,1)_100%)] p-[27px] space-y-[74px]">
//                     <div className="flex items-start justify-between">
//                       <img
//                         className="w-[47px] h-[47px]"
//                         alt="Icon"
//                         src={card.icon}
//                       />
//                       <Badge className="rounded-[40px] bg-[linear-gradient(0deg,rgba(255,255,255,0.05)_0%,rgba(97,97,97,0.09)_100%)] border-[#ffffff0d] hover:bg-[linear-gradient(0deg,rgba(255,255,255,0.05)_0%,rgba(97,97,97,0.09)_100%)]">
//                         <span className="text-[12px] sm:text-[13px] md:text-[14px] font-normal">
//                           {card.actionLabel}
//                         </span>
//                       </Badge>
//                     </div>
  
//                     <div className="space-y-[27px]">
//                       <div className="space-y-2 -mt-10">
//                         <h3 className="font-medium text-white text-[14px] sm:text-[15px] md:text-[16px]">
//                           {card.title}
//                         </h3>
//                         <div className="w-[207px] h-px bg-[linear-gradient(90deg,rgba(255,255,255,0)_0%,rgba(255,255,255,0.15)_50%,rgba(255,255,255,0)_100%)]" />
//                         <p className="font-normal text-[#ffffff80] text-[13px] sm:text-[14px] md:text-[14.4px]">
//                           {card.description}
//                         </p>
//                       </div>
  
//                       <div className="flex flex-wrap gap-3">
//                         {card.tags.map((tag, tagIndex) => (
//                           <Badge
//                             key={tagIndex}
//                             className="rounded-[40px] bg-[linear-gradient(0deg,rgba(79,26,214,0.2)_0%,rgba(153,153,153,0.1)_100%)] border-[#ffffff0d] hover:bg-[linear-gradient(0deg,rgba(79,26,214,0.2)_0%,rgba(153,153,153,0.1)_100%)]"
//                           >
//                             <span className="text-[12px] sm:text-[13px] md:text-[14px] font-normal">
//                               {tag}
//                             </span>
//                           </Badge>
//                         ))}
//                         {/* {card.hasButton && (
//                           <Button className="h-[41px] rounded-[10px] bg-gradient-to-b from-[#412F59] to-[#8059E3] border-[3px] border-[#ffffff26]">
//                             <span className="text-[12px] sm:text-[13px] md:text-[14px] font-medium text-white">
//                               Book an Appointment
//                             </span>
//                           </Button>
//                         )} */}
                        
//                       </div>
                      
//                     </div>
//                   </div>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>
//         </div>
  
//         <div className="flex justify-center items-start">
//           <img
//             src="https://api.builder.io/api/v1/image/assets/TEMP/8906a7af66a0e1ac9b36ee68075b2b3a07a56c9b?placeholderIfAbsent=true"
//             className="aspect-[0.99] object-contain w-full rounded-[30px] max-md:max-w-full max-md:mt-10"
//             alt="About us"
//           />
//         </div>
//       </div>
//     </div>
//   </div>
//   )
// }

// export default AboutSection

"use client";
import React, { useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { HighlightTag } from "@/components/HighlightTag";
import { Badge } from "@/components/ui/badge";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const featureCards = [
  {
    icon: "/icon-28.svg",
    title: "Tailored Strategies, Measurable Results",
    description:
      "We craft customized marketing and production plans that align with your brand goals, delivering campaigns designed for ROI, audience engagement, and long-term growth.",
    tags: ["Strategy", "ROI Focus"],
    actionLabel: "Assist",
  },
  {
    icon: "/icon-8.svg",
    title: "Creative Excellence from Concept to Completion",
    description:
      "From branding and digital marketing to high-quality photography and videography, we combine innovation with premium execution to bring your brand story to life.",
    tags: ["Creative Production", "Brand Storytelling"],
    actionLabel: "Guide",
  },
  {
    icon: "/icon-15.svg",
    title: "End-to-End Marketing & Production Solutions",
    description:
      "Whether building a brand from scratch or elevating an existing one, we provide full-service support—strategy, content creation, campaign management, and optimization.",
    tags: ["Full-Service Agency", "Growth Focus"],
    actionLabel: "Resolve",
  },
];

const AboutSection = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const leftRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!sectionRef.current || !leftRef.current) return;

    let ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: () =>
          "+=" + (leftRef.current?.scrollHeight || 0), // scroll for left content height
        pin: sectionRef.current.querySelector(".right-panel"), // pin only right
        scrub: true,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="relative">
      {/* Section title */}
      <div className="flex justify-center pt-20">
        <HighlightTag
          variant="dotted"
          className="border-2 border-white/80 rounded-lg shadow-[0_0_15px_rgba(255,255,255,0.3)]"
          title={
            <span className="bg-gradient-to-r from-[#3E2F56] to-[#8A6FB3] bg-clip-text text-transparent">
              About Emarq
            </span>
          }
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              fill="currentColor"
              className="bi bi-buildings"
              viewBox="0 0 16 16"
            >
              <path d="M14.763.075A.5.5 0 0 1 15 .5v15a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V14h-1v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V10a.5.5 0 0 1 .342-.474L6 7.64V4.5a.5.5 0 0 1 .276-.447l8-4a.5.5 0 0 1 .487.022M6 8.694 1 10.36V15h5zM7 15h2v-1.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5V15h2V1.309l-7 3.5z" />
              <path d="M2 11h1v1H2zm2 0h1v1H4zm-2 2h1v1H2zm2 0h1v1H4zm4-4h1v1H8zm2 0h1v1h-1zm-2 2h1v1H8zm2 0h1v1h-1zm2-2h1v1h-1zm0 2h1v1h-1zM8 7h1v1H8zm2 0h1v1h-1zm2 0h1v1h-1zM8 5h1v1H8zm2 0h1v1h-1zm2 0h1v1h-1zm0-2h1v1h-1z" />
            </svg>
          }
        />
      </div>

      {/* Content with GSAP pinning */}
      <div
        ref={sectionRef}
        className="max-w-[1200px] mx-auto px-4 py-[101px] grid grid-cols-1 lg:grid-cols-2 gap-12"
      >
        {/* LEFT CONTENT (scrolls) */}
        <div ref={leftRef} className="space-y-[58px]">
          {featureCards.map((card, index) => (
            <Card
              key={index}
              className="bg-[#080808] rounded-[30px] border-[#ffffff12] shadow-[0px_10px_22px_-1.75px_#00000029,0px_2.29px_5.03px_-1.17px_#0000001a,0px_0.6px_1.32px_-0.58px_#00000017] overflow-hidden"
            >
              <CardContent className="p-2">
                <div className="bg-[#080808] rounded-[22px] border border-[#4f1ad626] shadow-[inset_0px_10px_5px_-1px_#4f1ad626] [background:radial-gradient(50%_50%_at_50%_50%,rgba(15,9,18,0.15)_0%,rgba(12,9,18,1)_100%)] p-[27px] space-y-[74px]">
                  <div className="flex items-start justify-between">
                    <img
                      className="w-[47px] h-[47px]"
                      alt="Icon"
                      src={card.icon}
                    />
                    <Badge className="rounded-[40px] bg-[linear-gradient(0deg,rgba(255,255,255,0.05)_0%,rgba(97,97,97,0.09)_100%)] border-[#ffffff0d] hover:bg-[linear-gradient(0deg,rgba(255,255,255,0.05)_0%,rgba(97,97,97,0.09)_100%)]">
                      <span className="text-[12px] sm:text-[13px] md:text-[14px] font-normal">
                        {card.actionLabel}
                      </span>
                    </Badge>
                  </div>

                  <div className="space-y-[27px]">
                    <div className="space-y-2 -mt-10">
                      <h3 className="font-medium text-white text-[14px] sm:text-[15px] md:text-[16px]">
                        {card.title}
                      </h3>
                      <div className="w-[207px] h-px bg-[linear-gradient(90deg,rgba(255,255,255,0)_0%,rgba(255,255,255,0.15)_50%,rgba(255,255,255,0)_100%)]" />
                      <p className="font-normal text-[#ffffff80] text-[13px] sm:text-[14px] md:text-[14.4px]">
                        {card.description}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-3">
                      {card.tags.map((tag, tagIndex) => (
                        <Badge
                          key={tagIndex}
                          className="rounded-[40px] bg-[linear-gradient(0deg,rgba(79,26,214,0.2)_0%,rgba(153,153,153,0.1)_100%)] border-[#ffffff0d] hover:bg-[linear-gradient(0deg,rgba(79,26,214,0.2)_0%,rgba(153,153,153,0.1)_100%)]"
                        >
                          <span className="text-[12px] sm:text-[13px] md:text-[14px] font-normal">
                            {tag}
                          </span>
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* RIGHT IMAGE (pinned with GSAP) */}
        <div className="right-panel flex justify-center items-start">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/8906a7af66a0e1ac9b36ee68075b2b3a07a56c9b?placeholderIfAbsent=true"
            className="aspect-[0.99] object-contain w-full rounded-[30px] max-md:max-w-full max-md:mt-10"
            alt="About us"
          />
        </div>
      </div>
    </div>

  );
};

export default AboutSection;
