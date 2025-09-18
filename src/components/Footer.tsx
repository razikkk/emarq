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
    <footer className="relative flex w-full flex-col items-center font-normal tracking-[-0.2px] mt-[50px] pt-0.5 pb-2 border-[rgba(255,255,255,0.1)] border-t max-md:max-w-full max-md:mt-8 overflow-hidden">
  
    {/* Spotlight effect */}
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[radial-gradient(circle_at_center,_rgba(232,193,197,0.6)_0%,_rgba(232,193,197,0.15)_40%,_transparent_70%)] opacity-80 blur-[100px] rounded-full pointer-events-none" />
    
    <div className="flex w-full max-w-[1100px] items-start gap-5 mt-[30px] flex-wrap justify-between ml-[20px] max-md:max-w-full relative z-10">
      
      {/* EMARQ Center Left */}
      <motion.div
  className="w-[120px] h-[50px] md:w-[180px] md:h-[70px] rounded-lg flex items-center justify-center"
  initial={{ opacity: 0, scale: 0.8, y: -10 }}
  whileInView={{ opacity: 1, scale: 1, y: 0 }}
  transition={{ duration: 0.6, ease: "easeOut" }}
  viewport={{ once: true, amount: 0.5 }}
>
  <h1 className="font-leagueSpartan font-bold text-2xl md:text-4xl text-white text-center flex items-center justify-center gap-1">
    <span className="pl-2 md:pl-0">EMAR</span>
    <img
      src="/q.png"
      alt="Q"
      className="w-11 h-11 md:w-16 md:h-16 object-contain -ml-4 md:-ml-5 mb-2 md:mb-2"
    />
  </h1>
</motion.div>

  
      {/* Links */}
      <motion.div
        className="flex items-stretch gap-[30px_80px] flex-wrap max-md:max-w-full"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.nav
          className="flex flex-col text-base leading-loose pr-10"
          variants={item}
        >
          <div className="text-white text-lg font-medium leading-none tracking-[-0.5px]">
            Pages
          </div>
          <a href="#home" className="mt-3 text-gray-500 hover:text-white/80 transition-colors">Home</a>
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
          {/* <a href="#" className="mt-3 text-gray-500 hover:text-white/80 transition-colors">Twitter (X)</a> */}
          <a
  href="https://wa.me/971506568512"
  target="_blank"
  rel="noopener noreferrer"
  className="mt-2 text-gray-500 hover:text-white/80 transition-colors"
>
  Whatsapp
</a>

<a
  href="mailto:info@emarq.ae"
  className="mt-2 text-gray-500 hover:text-white/80 transition-colors"
>
  Gmail
</a>

<a
  href="https://www.instagram.com/emarq.ae/?utm_source=ig_web_button_share_sheet"
  target="_blank"
  rel="noopener noreferrer"
  className="mt-2 text-gray-500 hover:text-white/80 transition-colors"
>
  Instagram
</a>


        </motion.nav>
  
        <motion.div variants={item}>
          <NewsletterForm />
        </motion.div>
      </motion.div>
    </div>
    
    {/* Bottom */}
    <div className="self-stretch flex shrink-0 h-px mt-[60px] max-md:max-w-full max-md:mt-8" />
    <div className="flex w-full max-w-[1100px] items-stretch gap-5 text-base leading-loose flex-wrap justify-between mt-4 max-md:max-w-full relative z-10">
      <div className="my-auto text-gray-500">© 2025 Emarq</div>
      <div className="flex items-center gap-[20px]">
        <a href="#terms" className="text-gray-500 hover:text-opacity-80 transition-colors">
          Terms & Conditions
        </a>
        <div className="w-px h-[20px] bg-white bg-opacity-20" />
        <a href="#privacy" className="text-gray-500 hover:text-opacity-80 transition-colors">
          Privacy Policy
        </a>
      </div>
    </div>
  </footer>
  
  );
};
