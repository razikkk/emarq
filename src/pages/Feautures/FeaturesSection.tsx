import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";

const FeaturesSection = () => {
  return (
    <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8 -mt-80 sm:mt-[-80px] md:mt-0">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8 lg:gap-8">
  
      {/* Card 1 */}
      <div className="relative flex flex-col items-center text-center rounded-[20px] border border-white/10 bg-[#E8C1C5] p-6 sm:p-7 lg:p-8 min-h-[280px] sm:min-h-[300px] lg:min-h-[340px] overflow-hidden">
  {/* milli grid bg */}
  <div className="pointer-events-none absolute inset-0 opacity-[0.05] bg-[linear-gradient(90deg,#ffffff_0.5px,transparent_0.5px),linear-gradient(180deg,#ffffff_0.5px,transparent_0.5px)] bg-[size:6px_6px]" />
  
  {/* top gradient line */}
  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60px] sm:w-[70px] h-[2px] bg-gradient-to-r from-transparent via-[#3E2F56] to-transparent" />

  {/* Icon */}
  <div className="relative flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-full mb-5 sm:mb-6">
    <div className="absolute inset-0 rounded-full p-[2px] bg-gradient-to-r from-[#412F59] to-[#8059E3]">
      <div className="w-full h-full rounded-full flex items-center justify-center bg-gradient-to-r from-[#412F59] to-[#8059E3]">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      </div>
    </div>
  </div>

  {/* Heading */}
  <h3 className="self-stretch text-[#3E2F56] text-[24px] sm:text-[28px] lg:text-[35px] font-normal tracking-[-0.5px] leading-snug [font-family:'DM_Sans',Helvetica]">
    Tailored <br className="hidden sm:block" /> Strategies
  </h3>

  {/* Description */}
  <p className="text-[#3E2F56] text-sm sm:text-base leading-relaxed mt-2 sm:mt-3">
    Every plan customized to fit your brand goals and target audience for maximum impact.
  </p>
</div> 
      {/* Card 2 */}
      <div className="relative flex flex-col items-center text-center rounded-[20px] border border-white/10 bg-[#0A0A0A] p-6 sm:p-7 lg:p-8 min-h-[280px] sm:min-h-[300px] lg:min-h-[340px] overflow-hidden">
        <div className="pointer-events-none absolute inset-0 opacity-[0.05] bg-[linear-gradient(90deg,#ffffff_0.5px,transparent_0.5px),linear-gradient(180deg,#ffffff_0.5px,transparent_0.5px)] bg-[size:6px_6px]" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60px] sm:w-[70px] h-[2px] bg-gradient-to-r from-transparent via-[#8059E3] to-transparent" />
        <div className="relative flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-full mb-5 sm:mb-6">
          <div className="absolute inset-0 rounded-full p-[2px] bg-gradient-to-r from-[#412F59] to-[#8059E3]">
            <div className="w-full h-full rounded-full flex items-center justify-center bg-gradient-to-r from-[#412F59] to-[#8059E3]">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
          </div>
        </div>
        <h3 className="self-stretch text-white text-[24px] sm:text-[28px] lg:text-[35px] font-normal tracking-[-0.5px] leading-snug [font-family:'DM_Sans',Helvetica]">
          Creative <br className="hidden sm:block" /> Excellence
        </h3>
        <p className="text-gray-400 text-sm sm:text-base leading-relaxed mt-2 sm:mt-3">
          Innovative ideas executed with premium quality to tell stories that connect emotionally.
        </p>
      </div>
  
      {/* Card 3 */}
      <div className="relative flex flex-col items-center text-center rounded-[20px] border border-white/10 bg-[#0A0A0A] p-6 sm:p-7 lg:p-8 min-h-[280px] sm:min-h-[300px] lg:min-h-[340px] overflow-hidden">
        <div className="pointer-events-none absolute inset-0 opacity-[0.05] bg-[linear-gradient(90deg,#ffffff_0.5px,transparent_0.5px),linear-gradient(180deg,#ffffff_0.5px,transparent_0.5px)] bg-[size:6px_6px]" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60px] sm:w-[70px] h-[2px] bg-gradient-to-r from-transparent via-[#8059E3] to-transparent" />
        <div className="relative flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-full mb-5 sm:mb-6">
          <div className="absolute inset-0 rounded-full p-[2px] bg-gradient-to-r from-[#412F59] to-[#8059E3]">
            <div className="w-full h-full rounded-full flex items-center justify-center bg-gradient-to-r from-[#412F59] to-[#8059E3]">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
          </div>
        </div>
        <h3 className="self-stretch text-white text-[24px] sm:text-[28px] lg:text-[35px] font-normal tracking-[-0.5px] leading-snug [font-family:'DM_Sans',Helvetica]">
          Measurable <br className="hidden sm:block" /> Results
        </h3>
        <p className="text-gray-400 text-sm sm:text-base leading-relaxed mt-2 sm:mt-3">
          Campaigns designed for ROI and growth, combining creativity with data-driven insights.
        </p>
      </div>
  
    </div>
  </div>
  )
}

export default FeaturesSection