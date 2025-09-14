import SpotlightCard from "@/components/animations/SpotlightCard";
import { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import { motion, Variants } from "framer-motion";


const card: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.33, 1, 0.68, 1] }, // cubic-bezier array for easeOut
  },
};

const container: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.3 },
  },
};
const FeaturesSection = () => {
  return (
    <motion.div
    className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8 -mt-40 md:-mt-60 lg:-mt-60"
    variants={container}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.3 }} // Trigger when 30% visible
  >
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8 lg:gap-8">
      
      {/* Card 1 */}
      <motion.div
        className="relative flex flex-col items-center text-center rounded-[20px] border border-white/10 backdrop-blur-md bg-white/5 p-6 sm:p-7 lg:p-8 min-h-[280px] sm:min-h-[300px] lg:min-h-[340px] overflow-hidden"
        variants={card}
      >
        {/* milli grid bg */}
        <div className="pointer-events-none absolute inset-0 opacity-[0.05] bg-[linear-gradient(90deg,#ffffff_0.5px,transparent_0.5px),linear-gradient(180deg,#ffffff_0.5px,transparent_0.5px)] " />
        {/* top gradient line */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60px] sm:w-[70px] h-[2px] bg-gradient-to-r from-transparent via-[#E8C1C5] to-transparent" />
        {/* Icon */}
        <div className="relative flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-full mb-5 sm:mb-6">
          <div className="absolute inset-0 rounded-full p-[2px] bg-gradient-to-r from-[#E8C1C5]/60 to-[#E8C1C5]/90">
            <div className="w-full h-full rounded-full flex items-center justify-center bg-gradient-to-r from-[#E8C1C5]/60 to-[#E8C1C5]/90">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-[#3E2F56]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
          </div>
        </div>
        {/* Heading */}
        <h3 className="self-stretch text-[#E8C1C5] text-[24px] sm:text-[28px] lg:text-[35px] font-normal tracking-[-0.5px] leading-snug [font-family:'DM_Sans',Helvetica]">
          Tailored <br className="hidden sm:block" /> Strategies
        </h3>
        {/* Description */}
        <p className="text-[#E8C1C5] text-sm sm:text-base leading-relaxed mt-2 sm:mt-3">
          Every plan customized to fit your brand goals and target audience for maximum impact.
        </p>
      </motion.div>

      {/* Card 2 */}
      <motion.div
        className="relative flex flex-col items-center text-center rounded-[20px] border border-white/10 backdrop-blur-md bg-white/5 p-6 sm:p-7 lg:p-8 min-h-[280px] sm:min-h-[300px] lg:min-h-[340px] overflow-hidden"
        variants={card}
      >
        <div className="pointer-events-none absolute inset-0 opacity-[0.05] bg-[linear-gradient(90deg,#ffffff_0.5px,transparent_0.5px),linear-gradient(180deg,#ffffff_0.5px,transparent_0.5px)] " />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60px] sm:w-[70px] h-[2px] bg-gradient-to-r from-transparent via-[#E8C1C5] to-transparent" />
        <div className="relative flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-full mb-5 sm:mb-6">
          <div className="absolute inset-0 rounded-full p-[2px] bg-gradient-to-r from-[#E8C1C5]/60 to-[#E8C1C5]/90">
            <div className="w-full h-full rounded-full flex items-center justify-center bg-gradient-to-r from-[#E8C1C5]/60 to-[#E8C1C5]/90">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-[#3E2F56]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
          </div>
        </div>
        <h3 className="self-stretch text-[#E8C1C5] text-[24px] sm:text-[28px] lg:text-[35px] font-normal tracking-[-0.5px] leading-snug [font-family:'DM_Sans',Helvetica]">
          Creative <br className="hidden sm:block" /> Excellence
        </h3>
        <p className="text-[#E8C1C5]/80 text-sm sm:text-base leading-relaxed mt-2 sm:mt-3">
          Innovative ideas executed with premium quality to tell stories that connect emotionally.
        </p>
      </motion.div>

      {/* Card 3 */}
      <motion.div
        className="relative flex flex-col items-center text-center rounded-[20px] border border-white/10 backdrop-blur-md bg-white/5 p-6 sm:p-7 lg:p-8 min-h-[280px] sm:min-h-[300px] lg:min-h-[340px] overflow-hidden"
        variants={card}
      >
        <div className="pointer-events-none absolute inset-0 opacity-[0.05] bg-[linear-gradient(90deg,#ffffff_0.5px,transparent_0.5px),linear-gradient(180deg,#ffffff_0.5px,transparent_0.5px)] " />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60px] sm:w-[70px] h-[2px] bg-gradient-to-r from-transparent via-[#E8C1C5] to-transparent" />
        <div className="relative flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-full mb-5 sm:mb-6">
          <div className="absolute inset-0 rounded-full p-[2px] bg-gradient-to-r from-[#E8C1C5]/60 to-[#E8C1C5]/90">
            <div className="w-full h-full rounded-full flex items-center justify-center bg-gradient-to-r from-[#E8C1C5]/60 to-[#E8C1C5]/90">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-[#3E2F56]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
          </div>
        </div>
        <h3 className="self-stretch text-[#E8C1C5] text-[24px] sm:text-[28px] lg:text-[35px] font-normal tracking-[-0.5px] leading-snug [font-family:'DM_Sans',Helvetica]">
          Measurable <br className="hidden sm:block" /> Results
        </h3>
        <p className="text-[#E8C1C5]/80 text-sm sm:text-base leading-relaxed mt-2 sm:mt-3">
          Campaigns designed for ROI and growth, combining creativity with data-driven insights.
        </p>
      </motion.div>

    </div>
  </motion.div>
  
  )
}

export default FeaturesSection