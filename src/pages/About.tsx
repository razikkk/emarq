import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import {  useScroll, motion, useTransform } from 'framer-motion';

const About = () => {
  const element = useRef(null)
  const { scrollYProgress} = useScroll({
    target: element,
    offset: ["start end", "start 0.25"]
  })

const value = 'Emarq Marketing & Production L.L.C is a Dubai-based agency combining creative storytelling, digital marketing, and data-driven strategies to help brands grow, engage audiences, and achieve measurable results.'
const words = value.split("")
  return (
    <div>
      <div className="max-w-5xl mx-auto flex flex-col items-center text-center space-y-8">
        {/* Logo */}
        <div className="flex flex-col relative aspect-[3.073] w-[126px] max-w-full overflow-hidden rounded-[40px]">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/ce4f8e000b1b52187c2ad49036d2a3156dc3a473?placeholderIfAbsent=true"
            className="absolute h-full w-full object-cover inset-0"
            alt=""
          />
          <div className="relative border flex shrink-0 h-[41px] rounded-[40px] border-[rgba(255,255,255,0.05)] border-solid" />
        </div>

        {/* Heading */}
        <h2 ref={element} className=" relative text-4xl lg:text-5xl font-normal leading-tight tracking-[-2px] max-w-3xl">
          {words.map((word,i)=>{
            const start = i / words.length
            const end = start + (1 / words.length)
            console.log([start,end])
          return <Word key={i} range={[start,end]} progress={scrollYProgress}>{word}</Word>
          })}
        </h2>

        {/* Button */}
        <Button className="hidden md:block w-[185px] h-[45px] rounded-[10px] border border-purple-400/30 
          bg-gradient-to-r from-[#412F59] to-[#8059E3] 
          font-medium text-white text-base tracking-[-0.50px] leading-[26px] 
          hover:from-[#3a244f] hover:to-[#724dd8] transition-all">
          Book an Appointment
        </Button>
      </div>
    </div>
  );
};


export default About;

const Word = ({children, range, progress})=>{
  const opacity = useTransform(progress, range, [0,1])
  return(
    <span className="inline-block relative" >
      <span className='absolute opacity-[0.1]'>{children}</span>
    <motion.span style={{opacity}}>{children}</motion.span>
    </span>
  )
}
