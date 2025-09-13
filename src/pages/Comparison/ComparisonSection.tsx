import React from 'react'
import { HighlightTag } from '@/components/HighlightTag';
import {Card, CardContent} from '@/components/ui/card'
import { CheckIcon, XIcon } from 'lucide-react';
import {motion,Variants} from 'framer-motion'

const highlightVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeInOut" }, // use string easing to avoid TS errors
  },
};

const container: Variants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};


const textBlock: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const listVariants: Variants = {
  hidden: { opacity: 1 }, // keep parent visible
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // each line animates with delay
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};



const ComparisonSection = () => {
  const negativeFeatures = [
    "One-Size-Fits-All Strategies",
    "Outdated Marketing Practices",
    "Low-Quality Content & Production",
    "Poor Communication & Transparency",
    "Short-Term, Unsustainable Results",
  ];
    
  const positiveFeatures = [
    "Tailored Marketing Solutions",
    "Cutting-Edge Digital Strategies",
    "High-Quality Video & Photography",
    "Clear Reporting & Collaboration",
    "Long-Term Growth & Brand Building",
  ];

      const headingWords = ["Emarq", "vs", "The", "Rest"];
  const subtextWords = ["Let's", "See", "the", "Difference"];
    
  return (
    <div className="flex flex-col items-center">
          <hr className="border-0 h-px bg-[#E8C1C5]/30" />

    {/* Highlight Tag */}
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
              Comparison
            </span>
          }
          icon={ <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-bar-chart-fill" viewBox="0 0 16 16">
          <path d="M1 11a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1zm5-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1zm5-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1z"/>
        </svg>
        }
          
        />
      
      
      </motion.div>
  
    {/* Heading */}
    <div className="mt-8 sm:mt-10 md:mt-12 flex flex-col items-center w-full">
    <div className="mb-4 sm:mb-6 text-center">
      {/* Heading Row */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="flex flex-wrap justify-center gap-4 sm:gap-6 font-normal 
          text-white text-[32px] sm:text-[42px] md:text-[54px] tracking-[-1.2px] 
          md:tracking-[-1.9px] leading-[38px] sm:leading-[46px] md:leading-[50px] 
          mb-3 sm:mb-4"
      >
        {headingWords.map((word, i) => (
          <motion.span
            key={i}
            variants={item}
            className={word === "vs" ? "text-white/60" : ""}
          >
            {word}
          </motion.span>
        ))}
      </motion.div>

      {/* Subtext Row */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="font-normal text-white/60 text-[18px] sm:text-[22px] md:text-[26px] 
          leading-[26px] sm:leading-[34px] flex justify-center flex-wrap"
      >
        {subtextWords.map((word, i) => (
          <motion.span key={i} variants={item} className="inline-block mr-2">
            {word}
          </motion.span>
        ))}
      </motion.div>
    </div>
  
    {/* Subtext */}
    <div className="w-full flex justify-center mb-6 sm:mb-8">
      <motion.div
        className="max-w-lg text-center px-4 sm:px-0"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.p
          variants={textBlock}
          className="font-normal text-white/60 text-sm sm:text-base tracking-[-0.2px] leading-[22px] sm:leading-[26px] mb-1 sm:mb-2"
        >
          Emarq is designed to set your agency and portfolio apart with a
        </motion.p>
        <motion.p
          variants={textBlock}
          className="font-normal text-white/60 text-sm sm:text-base tracking-[-0.2px] leading-[22px] sm:leading-[26px]"
        >
          premium, clutter-free layout that enhances your work.
        </motion.p>
      </motion.div>
    </div>
  
    {/* Comparison Cards */}
    <div className="w-full px-4 sm:px-8 lg:px-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
        
        {/* ✅ Positive Features on LEFT */}
        <motion.div
          variants={listVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="w-full"
        >
          <Card className="relative backdrop-blur-md bg-white/5 border border-white/10 rounded-[20px] sm:rounded-[25px] md:rounded-[30px] p-5 sm:p-6 md:p-8 overflow-hidden">
            <div className="absolute inset-0 rounded-[364px] bg-[url(/1xoqma4saawbcrdkisjfixups-png-8.png)] bg-cover bg-center opacity-20" />
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[100px] sm:w-[140px] md:w-[170px] h-px bg-gradient-to-r from-[#3E2F56]/0 via-[#E8C1C5] to-[#E8C1C5]/0" />

            <CardContent className="relative z-10 space-y-5 sm:space-y-6 md:space-y-8 p-0">
              {positiveFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="flex items-center gap-3 sm:gap-4"
                >
                  <CheckIcon className="w-5 h-5 sm:w-6 sm:h-6 text-[#E8C1C5] flex-shrink-0" />
                  <span className="font-medium text-[#E8C1C5] text-sm sm:text-base md:text-lg tracking-[-0.3px] sm:tracking-[-0.5px] leading-[22px] sm:leading-[26px]">
                    {feature}
                  </span>
                </motion.div>
              ))}
            </CardContent>
          </Card>
        </motion.div>

        {/* ❌ Negative Features on RIGHT (starts AFTER positive finishes) */}
        <motion.div
          variants={listVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delayChildren: positiveFeatures.length * 0.2 + 0.5 }} 
          className="w-full"
        >
          <Card className="relative backdrop-blur-md bg-white/5 border border-white/10 rounded-[20px] sm:rounded-[25px] md:rounded-[30px] p-5 sm:p-6 md:p-8 overflow-hidden">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 
              w-[100px] sm:w-[140px] md:w-[170px] h-px 
              bg-gradient-to-r from-[#3E2F56]/0 via-[#E8C1C5] to-[#3E2F56]/0" />

            <CardContent className="relative z-10 space-y-5 sm:space-y-6 md:space-y-8 p-0">
              {negativeFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="flex items-center gap-3 sm:gap-4"
                >
                  <XIcon className="w-5 h-5 sm:w-6 sm:h-6 text-[#E8C1C5] flex-shrink-0" />
                  <span className="font-medium text-[#E8C1C5] text-sm sm:text-base md:text-lg tracking-[-0.3px] sm:tracking-[-0.5px] leading-[22px] sm:leading-[26px]">
                    {feature}
                  </span>
                </motion.div>
              ))}
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>

    </div>
  </div>
  )
}

export default ComparisonSection




