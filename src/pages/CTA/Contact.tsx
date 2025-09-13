import React from 'react'
import { HighlightTag } from '@/components/HighlightTag';
import { Button } from '@/components/ui/button';
import {motion, Variants} from 'framer-motion'
import { InteractiveHoverButton } from '@/components/animations/magicui/interactive-hover-button';

const highlightVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeInOut" }, // use string easing to avoid TS errors
  },
};

const sentence: Variants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.2,
      staggerChildren: 0.1,
    },
  },
};

const word: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut", // ✅ use string preset instead of array to satisfy TS
    },
  },
};

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const Contact = () => {

  const firstLine = "Ready to Elevate Your Brand";
  const secondLine = "with Next-Gen Innovation?";

  return (
    <div className="w-full flex justify-center px-4"> {/* Center the whole block */}
    <div className="border pb-[50px] rounded-[40px] border-[rgba(255,255,255,0.07)] border-solid w-full max-w-[1000px]">
      <div className="flex flex-col rounded-[40px] relative min-h-[400px] overflow-hidden items-center pt-[50px] pb-[11px] px-20 max-md:px-5"
      style={{
        background: `
          radial-gradient(circle at 50% 0%, rgba(232, 193, 197, 0.35) 0%, transparent 60%),
          radial-gradient(circle at 30% 0%, rgba(232, 193, 197, 0.15) 0%, transparent 50%),
          radial-gradient(circle at 70% 0%, rgba(232, 193, 197, 0.15) 0%, transparent 50%)
        `,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover"
      }}
    >
        {/* <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/a2636ce2ca11d0221cd376e99fa334aef06edf71?placeholderIfAbsent=true"
          className="absolute h-full w-full object-cover inset-0"
          alt=""
        /> */}
        <div className="relative flex w-full max-w-[900px] mx-auto flex-col items-center">
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
              Become a Part Of Us
            </span>
          }
          icon={  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-globe" viewBox="0 0 16 16">
          <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m7.5-6.923c-.67.204-1.335.82-1.887 1.855A8 8 0 0 0 5.145 4H7.5zM4.09 4a9.3 9.3 0 0 1 .64-1.539 7 7 0 0 1 .597-.933A7.03 7.03 0 0 0 2.255 4zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a7 7 0 0 0-.656 2.5zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5zM8.5 5v2.5h2.99a12.5 12.5 0 0 0-.337-2.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5zM5.145 12q.208.58.468 1.068c.552 1.035 1.218 1.65 1.887 1.855V12zm.182 2.472a7 7 0 0 1-.597-.933A9.3 9.3 0 0 1 4.09 12H2.255a7 7 0 0 0 3.072 2.472M3.82 11a13.7 13.7 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5zm6.853 3.472A7 7 0 0 0 13.745 12H11.91a9.3 9.3 0 0 1-.64 1.539 7 7 0 0 1-.597.933M8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855q.26-.487.468-1.068zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.7 13.7 0 0 1-.312 2.5m2.802-3.5a7 7 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7 7 0 0 0-3.072-2.472c.218.284.418.598.597.933M10.855 4a8 8 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4z"/>
        </svg>
        }
        />
</motion.div>
<div className="mt-[35px] space-y-[11px] text-center">
      {/* First Line */}
      <motion.h2
        className="text-white text-[54px] leading-none tracking-[-1.9px] max-md:text-[40px]"
        variants={sentence}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {firstLine.split(" ").map((wordText, i) => (
          <motion.span key={i} variants={word} className="inline-block mr-2">
            {wordText}
          </motion.span>
        ))}
      </motion.h2>

      {/* Second Line */}
      <motion.h2
        className="text-white text-[54px] leading-none tracking-[-1.9px] max-md:text-[40px]"
        variants={sentence}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {secondLine.split(" ").map((wordText, i) => (
          <motion.span
            key={i}
            variants={word}
            className={`inline-block mr-2 ${
              wordText === "Next-Gen" ? "text-white/60" : ""
            }`}
          >
            {wordText}
          </motion.span>
        ))}
      </motion.h2>
    </div>
    <motion.p
        className="text-gray-500 tracking-[-0.2px] text-center mt-[43px] max-md:mt-10"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        custom={0} // delay 0
      >
        Ready to take the next step? Join us now and start transforming your{" "}
      </motion.p>

      <motion.p
        className="text-gray-500 tracking-[-0.2px] text-center mt-[1px]"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        custom={1} // delay 0.3s after first line
      >
        vision into reality with expert support.
      </motion.p>
      <motion.div
      className='mt-[20px]'
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.5 }}
  transition={{ duration: 0.6, delay: 1.2 }} // delay after header & paragraphs
>

          
<InteractiveHoverButton className='mt-[20px]'>Book An Appointment</InteractiveHoverButton>

</motion.div>
        </div>
      </div>
    </div>
  </div>


  
  )
}

export default Contact