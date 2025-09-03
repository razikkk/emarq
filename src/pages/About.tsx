import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import {  useScroll, motion, useTransform } from 'framer-motion';
import { HighlightTag } from '@/components/HighlightTag';
import ScrollReveal from '../components/animations/ScrollReveal'

const About = () => {
  // const element = useRef(null)
  // const { scrollYProgress} = useScroll({
  //   target: element,
  //   offset: ["start end", "start 0.25"]
  // })

// const value = 'Emarq Marketing & Production L.L.C is a Dubai-based agency combining creative storytelling, digital marketing, and data-driven strategies to help brands grow, engage audiences, and achieve measurable results.'
// const words = value.split("")
  return (
    <div>
      <div className="max-w-5xl mx-auto flex flex-col items-center text-center space-y-8">
        {/* Logo */}
        {/* <div className="flex flex-col relative aspect-[3.073] w-[126px] max-w-full overflow-hidden rounded-[40px]">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/ce4f8e000b1b52187c2ad49036d2a3156dc3a473?placeholderIfAbsent=true"
            className="absolute h-full w-full object-cover inset-0"
            alt=""
          />
          <div className="relative border flex shrink-0 h-[41px] rounded-[40px] border-[rgba(255,255,255,0.05)] border-solid" />
        </div> */}
         <div className="flex justify-center">
        <HighlightTag
          variant="dotted"
          className="border-2 border-white/80 rounded-lg shadow-[0_0_15px_rgba(255,255,255,0.3)]"
          title={
            <span className="bg-gradient-to-r from-[#3E2F56] to-[#8A6FB3] bg-clip-text text-transparent">
              About Us
            </span>
          }
          icon={  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" viewBox="0 0 24 24">
          <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5s-3 1.34-3 3 1.34 3 3 3zm-8 0c1.66 0 
          2.99-1.34 2.99-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V20h14v-3.5c0-2.33-4.67-3.5-7-3.5zm8 
          0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V20h6v-3.5c0-2.33-4.67-3.5-7-3.5z"/>
        </svg>
        }
          
        />
      
      </div>

        {/* Heading */}
        {/* <h2  className=" relative text-4xl lg:text-5xl font-normal leading-tight tracking-[-2px] max-w-3xl"> */}
          <ScrollReveal 
          baseOpacity={0}
          enableBlur={true}
          baseRotation={5}
          blurStrength={10}
          textClassName="text-4xl lg:text-5xl font-normal leading-tight tracking-[-2px] max-w-3xl"
          >
        'Emarq Marketing & Production L.L.C is a Dubai-based agency combining creative storytelling, digital marketing, and data-driven strategies to help brands grow, engage audiences, and achieve measurable results.'
        </ScrollReveal>
        {/* </h2> */}

        {/* Button */}
        <Button className="w-full sm:w-[195px] h-[46px] rounded-[10px] 
  border border-[#E8C1C5]/30 backdrop-shadow-sm shadow-white/20
  bg-gradient-to-r from-[#E8C1C5] to-[#E8C1C5] 
  [font-family:'DM_Sans',Helvetica] font-medium text-[#3E2F56] text-base tracking-[-0.50px] leading-[26px] 
  hover:from-[#d8a8ad] hover:to-[#d8a8ad] transition-all">
  Book an Appointment
</Button>
      </div>
    </div>
  );
};


export default About;

{/* // const Word = ({children, range, progress})=>{ */}
{/* //   const opacity = useTransform(progress, range, [0,1])
//   return(
//     <span className="inline-block relative" >
//       <span className='absolute opacity-[0.1]'>{children}</span>
//     <motion.span style={{opacity}}>{children}</motion.span>
//     </span>
//   )
// } */}
