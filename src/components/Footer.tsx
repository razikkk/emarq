import React from 'react';
import { NewsletterForm } from './NewsletterForm';
import {motion, Variants} from 'framer-motion'

const container: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // delay between each section
    },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};


export const Footer: React.FC = () => {
  return (
    <footer className="relative flex w-full flex-col items-center font-normal tracking-[-0.2px] mt-[120px] pt-1.5 pb-6 border-[rgba(255,255,255,0.1)] border-t max-md:max-w-full max-md:mt-10 overflow-hidden">
  
    {/* Spotlight effect */}
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-[radial-gradient(circle_at_center,_rgba(232,193,197,0.6)_0%,_rgba(232,193,197,0.15)_40%,_transparent_70%)] opacity-90 blur-[120px] rounded-full pointer-events-none" />
  
    <div className="flex w-full max-w-[1217px] items-start gap-5 mt-[40px] flex-wrap justify-between ml-[31px] max-md:max-w-full relative z-10">
    <motion.div
  className="w-[80px] h-[40px] md:w-[157px] md:h-[60px] rounded-lg flex items-center justify-center"
  initial={{ opacity: 0, scale: 0.8, y: -10 }}
  whileInView={{ opacity: 1, scale: 1, y: 0 }}
  transition={{ duration: 0.6, ease: "easeOut" }}
  viewport={{ once: true, amount: 0.5 }} // 👈 triggers when 50% in view, only once
>
  <h1 className="font-bebasNeue text-lg md:text-2xl text-white">EMARQ.</h1>
</motion.div>
<motion.div
      className="flex items-stretch gap-[40px_100px] flex-wrap max-md:max-w-full"
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.nav
        className="flex flex-col text-base leading-loose pr-14"
        variants={item}
      >
        <div className="text-white text-lg font-medium leading-none tracking-[-0.5px] self-stretch">
          Pages
        </div>
        <a href="#home" className="mt-[22px] text-gray-500 hover:text-white/80 transition-colors">Home</a>
        <a href="#about" className="mt-2 text-gray-500 hover:text-white/80 transition-colors">About</a>
        <a href="#portfolio" className="mt-2 text-gray-500 hover:text-white/80 transition-colors">Portfolio</a>
        <a href="#contact" className="mt-2 text-gray-500 hover:text-white/80 transition-colors">Contact</a>
        <a href="#faq" className="mt-2 text-gray-500 hover:text-white/80 transition-colors">FAQ</a>
      </motion.nav>

      <motion.nav
        className="flex flex-col text-base leading-loose"
        variants={item}
      >
        <div className="text-white text-lg font-medium leading-none tracking-[-0.5px]">
          Social
        </div>
        <a href="#" className="self-stretch mt-2 text-gray-500 hover:text-white/80 transition-colors">Twitter (X)</a>
        <a href="#" className="self-stretch mt-2 text-gray-500 hover:text-white/80 transition-colors">Instagram</a>
        <a href="#" className="mt-2 text-gray-500 hover:text-white/80 transition-colors">Youtube</a>
        <a href="#" className="mt-2 text-gray-500 hover:text-white/80 transition-colors">Whatsapp</a>
      </motion.nav>

      <motion.div variants={item}>
        <NewsletterForm />
      </motion.div>
    </motion.div>
    </div>
  
    <div className="self-stretch flex shrink-0 h-px mt-[82px] max-md:max-w-full max-md:mt-10" />
    <div className="flex w-full max-w-[1199px] items-stretch gap-5 text-base leading-loose flex-wrap justify-between mt-6 max-md:max-w-full relative z-10">
      <div className="my-auto text-gray-500">
        © 2025 Emarq
      </div>
      <div className="flex items-center gap-[30px]">
        <a href="#terms" className="self-stretch grow my-auto text-gray-500 hover:text-opacity-80 transition-colors">
          Terms & Conditions
        </a>
        <div className="self-stretch flex w-px shrink-0 h-[26px] bg-white bg-opacity-20" />
        <a href="#privacy" className="self-stretch my-auto text-gray-500 hover:text-opacity-80 transition-colors">
          Privacy Policy
        </a>
      </div>
    </div>
  </footer>
  );
};
