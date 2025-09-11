import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { HighlightTag } from '@/components/HighlightTag';
import ScrollReveal from '../components/animations/ScrollReveal'
import BlurWrapper from '@/components/ui/shadcn-io/blur-text/Blurwrapper';
import { InteractiveHoverButton } from '@/components/animations/magicui/interactive-hover-button';
import { TextReveal } from '@/components/magicui/text-reveal';
import { motion, Variants } from "framer-motion";


const highlightVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeInOut" }, // <-- string instead of array
  },
};
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
        
      <motion.div
      className="flex justify-center"
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
      
      </motion.div>

        {/* Heading */}
          <ScrollReveal 
          baseOpacity={0}
          enableBlur={true}
          baseRotation={5}
          blurStrength={10}
          textClassName="text-4xl lg:text-5xl font-normal leading-tight tracking-[-2px] max-w-3xl"
          >
        'Emarq Marketing & Production L.L.C is a Dubai-based agency combining creative storytelling, digital marketing, and data-driven strategies to help brands grow, engage audiences, and achieve measurable results.'
        </ScrollReveal>
        {/* <TextReveal className="text-4xl lg:text-5xl font-normal leading-tight tracking-[-2px] max-w-3xl">Emarq Marketing & Production L.L.C is a Dubai-based agency combining creative storytelling, digital marketing, and data-driven strategies to help brands grow, engage audiences, and achieve measurable results.</TextReveal> */}

        {/* </h2> */}

        {/* Button */}

        <motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.5 }}
  transition={{ duration: 0.6, delay: 1.2 }} // delay after header & paragraphs
>
        <InteractiveHoverButton>
       
Book An Appointment
</InteractiveHoverButton>
</motion.div>
      </div>
    </div>
  );
};


export default About;


