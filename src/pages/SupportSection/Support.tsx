import React, { useState } from 'react'
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { HighlightTag } from '@/components/HighlightTag';
import {motion, Variants} from 'framer-motion'
import { InteractiveHoverButton } from '@/components/animations/magicui/interactive-hover-button';
import ContactModal from '@/components/ui/ContactModal';
 

const highlightVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeInOut" }, // use string easing to avoid TS errors
  },
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15, // delay between each word
    },
  },
};

const wordVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut", // ✅ this is valid
    },
  },
};


const paragraphVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: "easeOut" as const } 
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const supportFeatures = [

    {
      icon: (<svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="currentColor" className="bi bi-telephone-outbound" viewBox="0 0 16 16">
      <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877zM11 .5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V1.707l-4.146 4.147a.5.5 0 0 1-.708-.708L14.293 1H11.5a.5.5 0 0 1-.5-.5"/>
    </svg>),
      title: "Fast Responses",
      description: "Get timely answers to your questions.",
      backgroundColor:
        "#E8C1C5"
    },
    {
      icon: (<svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="currentColor" className="bi bi-lightbulb" viewBox="0 0 16 16">
      <path d="M2 6a6 6 0 1 1 10.174 4.31c-.203.196-.359.4-.453.619l-.762 1.769A.5.5 0 0 1 10.5 13a.5.5 0 0 1 0 1 .5.5 0 0 1 0 1l-.224.447a1 1 0 0 1-.894.553H6.618a1 1 0 0 1-.894-.553L5.5 15a.5.5 0 0 1 0-1 .5.5 0 0 1 0-1 .5.5 0 0 1-.46-.302l-.761-1.77a2 2 0 0 0-.453-.618A5.98 5.98 0 0 1 2 6m6-5a5 5 0 0 0-3.479 8.592c.263.254.514.564.676.941L5.83 12h4.342l.632-1.467c.162-.377.413-.687.676-.941A5 5 0 0 0 8 1"/>
    </svg>),
      title: "Expert Guidance",
      description: "Our team understands both design and tech.",
      backgroundImage:
        "/figure---abstract-dots---1xoqma4saawbcrdkisjfixups-png-12.png",
    },
    {
      icon:(<svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="currentColor" className="bi bi-headset" viewBox="0 0 16 16">
      <path d="M8 1a5 5 0 0 0-5 5v1h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a6 6 0 1 1 12 0v6a2.5 2.5 0 0 1-2.5 2.5H9.366a1 1 0 0 1-.866.5h-1a1 1 0 1 1 0-2h1a1 1 0 0 1 .866.5H11.5A1.5 1.5 0 0 0 13 12h-1a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h1V6a5 5 0 0 0-5-5"/>
    </svg>),
      title: "Continuous Help",
      description: "Support doesn't stop after launch.",
      backgroundImage:
        "/figure---abstract-dots---1xoqma4saawbcrdkisjfixups-png-13.png",
    },
  ];
  
  const chatBubbles = [
    {
      src: "https://picsum.photos/id/1031/300/300",
      className: "w-40 h-40 top-[29px] left-0 rounded-[30px]",
    },
    {
      src: "https://picsum.photos/id/1035/300/300",
      className: "w-40 h-40 top-[20px] left-[90px] rounded-[30px]",
    },
    {
      src: "https://picsum.photos/id/1033/300/300",
      className: "w-40 h-40 top-[25px] left-[180px] rounded-[30px]",
    },
    {
      src: "https://picsum.photos/id/1031/300/300",
      className: "w-40 h-40 top-[30px] left-[270px] rounded-[30px]",
    },
    {
      src: "https://picsum.photos/id/1025/300/300",
      className: "w-40 h-40 top-[20px] left-[360px] rounded-[30px]",
    },
    {
      src: "https://picsum.photos/id/1026/300/300",
      className: "w-40 h-40 top-[25px] left-[450px] rounded-[30px]",
    },
    {
      src: "https://picsum.photos/id/1027/300/300",
      className: "w-40 h-40 top-[22px] left-[540px] rounded-[30px]",
    }
  ];
  
  
const Support = () => {

  const wordsRow1 = ["Here", "When", "You"];
  const wordsRow2 = ["Need", "Us", "Most", "Important."];

  const [openModal,setOpenModal] = useState(false)


  return (
    <div className="relative min-h-[1063px] bg-[url(/light-rays---rays-2.png)] bg-cover bg-center pt-32 sm:pt-36 lg:pt-44">
                  <hr className="border-0 h-px bg-[#E8C1C5]/30 mb-24" />

    
  
    <div className="relative z-10 max-w-6xl mx-auto px-4 text-center space-y-8">
      {/* Highlight tag */}
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
              24/7 Support
            </span>
          }
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-headset" viewBox="0 0 16 16">
  <path d="M8 1a5 5 0 0 0-5 5v1h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a6 6 0 1 1 12 0v6a2.5 2.5 0 0 1-2.5 2.5H9.366a1 1 0 0 1-.866.5h-1a1 1 0 1 1 0-2h1a1 1 0 0 1 .866.5H11.5A1.5 1.5 0 0 0 13 12h-1a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h1V6a5 5 0 0 0-5-5"/>
</svg>
          }
        />
      </motion.div>
  
      {/* Main Heading */}
     <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="w-full pt-10"
    >
      {/* Row 1 */}
      <motion.div
        className="relative flex flex-wrap justify-center w-full gap-3 
        text-white font-normal text-center tracking-[-1.9px] leading-none 
        text-3xl sm:text-5xl lg:text-[54px] z-10"
      >
        {wordsRow1.map((word, i) => (
          <motion.span key={i} variants={wordVariants} className="relative">
            {word}
          </motion.span>
        ))}
      </motion.div>

      {/* Row 2 */}
      <motion.div
        className="relative flex flex-wrap justify-center w-full gap-3 
        text-white/60 font-normal text-center tracking-[-1.9px] leading-none 
        mt-3 text-3xl sm:text-5xl lg:text-[54px] z-10"
      >
        {wordsRow2.map((word, i) => (
          <motion.span key={i} variants={wordVariants} className="relative">
            {word}
          </motion.span>
        ))}
      </motion.div>
    </motion.div>
  
      {/* Subtext */}
      <motion.div className="max-w-[520px] mx-auto" initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
>
        <motion.p variants={paragraphVariants} className="text-white/60 text-sm sm:text-base leading-relaxed">
          Emarq comes with dedicated support to help you launch and maintain your site without friction.
        </motion.p>
      </motion.div>
  
      {/* Button */}
      <motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.5 }}
  transition={{ duration: 0.6, delay: 1.2 }} // delay after header & paragraphs
>
<InteractiveHoverButton onClick={()=>setOpenModal(true)}>Talk To Us</InteractiveHoverButton>

        </motion.div>
        <ContactModal
  isOpen={openModal}
  onClose={() => setOpenModal(false)}
/>
  
      {/* Chat bubbles + features */}
      <div className="relative mt-[100px] px-4 sm:px-20">
        <div className="relative w-full max-w-[1280px] mx-auto">
          {/* Chat bubbles */}
          <div className="relative mt-[140px] px-4 sm:px-20">
  <div className="relative w-full max-w-[1280px] mx-auto">
    {/* Chat bubbles in a slight arc */}
    <div className="flex justify-center relative" 
    style={{transform: 'translateX(40px)'}}>
      {chatBubbles.map((bubble, index) => {
        // Slight downward arc: parabola
        const curve = Math.pow(index - chatBubbles.length / 2, 2) * 4; 
        return (
          <img
            key={index}
            src={bubble.src}
            alt={`Bubble ${index}`}
            className="w-32 h-32 object-cover rounded-[25px] -ml-8 first:ml-0 border-4 border-gray-400" // bold gray border
            style={{
              top: `${curve + 50}px`, // small downward arc
              position: 'relative',
              zIndex: chatBubbles.length - index, // ensure proper overlap
            }}
          />
        );
      })}
    </div>

    {/* Chat Labels */}
    <div className="absolute w-[130px] h-[38px] top-[15px] left-[707px] bg-[#4f1ad6] rounded-[15px] rotate-[14deg]">
      <div className="absolute w-[111px] h-[21px] top-2 left-2.5 font-medium text-white text-base leading-[26px] whitespace-nowrap">
        Problem Solved
      </div>
      <div className="absolute w-2.5 h-2.5 top-[33px] left-[23px] bg-[#4f1ad6] -rotate-45" />
    </div>

    <div className="absolute w-[102px] h-[38px] top-[7px] left-[109px] bg-[#0080ff] rounded-[15px] rotate-[-8deg]">
      <div className="absolute w-[83px] h-[21px] top-2 left-2.5 font-medium text-white text-base leading-[26px] whitespace-nowrap">
        Hey, It's me!
      </div>
      <div className="absolute w-2.5 h-2.5 top-[33px] left-[23px] bg-[#0080ff] -rotate-45" />
    </div>
  </div>
</div>



  
          {/* Features grid */}
          <motion.div
      className="relative z-10 pt-[244px]"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {supportFeatures.map((feature, index) => (
          <motion.div key={index} variants={cardVariants}>
            <Card className="backdrop-blur-md border border-white/10 rounded-xl relative overflow-hidden flex flex-col h-auto sm:h-[200px] text-left bg-white/5">
              {/* Background image with overlay blur */}
              <div
                className="bg-red absolute inset-0 bg-cover bg-center opacity-20 blur-sm"
              />

              <CardContent className="relative z-10 p-6 flex flex-col items-start gap-4">
              <div className="w-20 h-20 text-[#E8C1C5]">
  {feature.icon}
</div>
                <div className='-mt-8'>
                  <h3 className="font-semibold text-[#E8C1C5] text-lg mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-[#E8C1C5]/70 text-sm sm:text-base leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.div>
        </div>
      </div>
    </div>
  
    {/* Bottom divider */}
    {/* <hr className="border-0 h-px bg-[#E8C1C5]/30 mb-24" /> */}

  </div>
  )
}

export default Support