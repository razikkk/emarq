import React, { useRef } from 'react'
import { Button } from '@/components/ui/button';
import { HighlightTag } from '@/components/HighlightTag';
import GradualBlurMemo from '@/components/animations/GradualBlur';
import ScrollFloat from '@/components/animations/ScrollFloat';
import { motion,Variants } from "framer-motion";

const highlightVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: "easeInOut" }  },
};
const Innovation = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const words = ["Fueled", "By", "Ideas."];

  return (
    <div>
      <hr className="border-0 h-px bg-[#E8C1C5]/30" />
    {/* <img
      src="https://api.builder.io/api/v1/image/assets/TEMP/f3db31373b234f933090d7c9de30276b79a804b7?placeholderIfAbsent=true"
      className="absolute h-full w-full object-cover inset-0"
      alt=""
    /> */}
    <div className="flex flex-col relative min-h-[700px] w-full overflow-hidden items-center pt-[150px] pb-[50px] px-20 
                    max-md:max-w-full max-md:pt-[80px] max-md:pb-[40px] max-md:px-5">
      {/* <img
        src="https://api.builder.io/api/v1/image/assets/TEMP/00861b8127675d2340bd266bdcb3a42ef9ba0d7c?placeholderIfAbsent=true"
        className="absolute h-full w-full object-cover inset-0"
        alt=""
      /> */}
      <div className="relative flex w-[517px] max-w-full flex-col items-center">
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
            Features
          </span>
        }
        icon={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-fire"
            viewBox="0 0 16 16"
          >
            <path d="M8 16c3.314 0 6-2 6-5.5 0-1.5-.5-4-2.5-6 .25 1.5-1.25 2-1.25 2C11 4 9 .5 6 0c.357 2 .5 4-2 6-1.25 1-2 2.729-2 4.5C2 14 4.686 16 8 16m0-1c-1.657 0-3-1-3-2.75 0-.75.25-2 1.25-3C6.125 10 7 10.5 7 10.5c-.375-1.25.5-3.25 2-3.5-.179 1-.25 2 1 3 .625.5 1 1.364 1 2.25C11 14 9.657 15 8 15"/>
          </svg>
        }
      />
    </motion.div>

      <div className="flex justify-center gap-[10px] text-[54px] text-white font-normal whitespace-nowrap text-center tracking-[-1.9px] leading-none flex-wrap mt-[25px] max-md:text-[40px]">
      {words.map((word, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}      // start hidden & slightly below
          whileInView={{ opacity: 1, y: 0 }}   // animate to visible & original position
          viewport={{ once: true, amount: 0.5 }} // trigger when 50% visible
          transition={{ duration: 0.6, delay: index * 0.2 }} // stagger effect
        >
          {word}
        </motion.div>
      ))}
    </div>
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6, delay: 0.8 }} // delay after header animation
        className="flex flex-col items-center mt-6"
      >

        <p className="text-gray-500 text-base font-normal leading-loose tracking-[-0.5px] text-center mt-[5px]">
          Emarq is packed with cutting-edge features designed to
        </p>
        <p className="text-gray-500 text-base font-normal leading-loose tracking-[-0.5px] text-center mt-[0.5px]">
          grow your brand and amplify your portfolio.
        </p>
        </motion.div>

        <motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.5 }}
  transition={{ duration: 0.6, delay: 1.2 }} // delay after header & paragraphs
>
        <Button   className="w-full sm:w-[195px] h-[46px] rounded-[10px] 
  border border-[#E8C1C5]/30 shadow-sm shadow-white/20
  bg-gradient-to-r from-[#E8C1C5] to-[#E8C1C5] 
  [font-family:'DM_Sans',Helvetica] font-medium text-[#3E2F56] text-base tracking-[-0.50px] leading-[26px] 
  hover:from-[#d8a8ad] hover:to-[#d8a8ad] 
  transition-all duration-300 ease-in-out 
  mt-4 sm:mt-6">
          Book an Appointment
        </Button>
        </motion.div>

      </div>
    </div>
  </div>
  )
}

export default Innovation