import React, { useState } from 'react'
import { TeamMemberCard } from '@/components/TeamMemberCard';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { HighlightTag } from '@/components/HighlightTag';
import ChromaGrid from '@/components/animations/ChromaGrid';
import {motion,Variants} from 'framer-motion'
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

const wordsRow1 = ["Meet", "the", "Team", "Making"];
const wordsRow2 = ["Things", "Happen", "Every", "Day"];

const items = [
  {
    image: "/profile.png",
    title: "Mohammed Sinan",
    subtitle: " Digital Marketer",
    whatsapp: "https://wa.me/971545748033", // replace with full number
    gmail: "mailto:sinan@emarq.ae",
    borderColor: "#3E2F56",
    gradient: "linear-gradient(145deg, #3E2F56, #000)",
    url: ""
  },
  {
    image: "/profile.png",
    title: "Zubair Ahammad",
    subtitle: "Creative Director",
    whatsapp: "https://wa.me/971558092534", // replace with full number
    gmail: "mailto:zubair@emarq.ae",
    borderColor: "#3E2F56",
    gradient: "linear-gradient(145deg, #3E2F56, #000)",
    url: ""
  },
  {
    image: "/profile.png",
    title: " Minna Wahab",
    subtitle: "Director-Marketing ",
    whatsapp: "https://wa.me/971521569430", // replace with full number
    gmail: "mailto:minna@emarq.ae",
    borderColor: "#3E2F56",
    gradient: "linear-gradient(145deg, #3E2F56, #000)",
    url: ""
  }
];

const TeamMembers = () => {

  const [openModal, setOpenModal] = useState(false)
  return (
    <div className="flex flex-col items-center px-4 sm:px-6 lg:px-8">
  {/* Keep original image size and styling, but center it */}
  <div className="flex justify-center mt-[120px] sm:mt-[160px] md:mt-[200px] lg:-mt-[300px]">
     {/* <div className="flex flex-col relative aspect-[3.122] w-24 sm:w-28 md:w-32 max-w-full overflow-hidden rounded-[40px]">
       <img
        src="https://api.builder.io/api/v1/image/assets/TEMP/58b56afbf83ade4953169199f3377be3d12fff87?placeholderIfAbsent=true"
        className="absolute h-full w-full object-cover inset-0"
        alt=""
      /> 
       <div className="relative border flex shrink-0 h-[41px] rounded-[40px] border-[rgba(255,255,255,0.05)] border-solid" /> 
     </div>  */}
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
              Our Team
            </span>
          }
          icon={  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-people-fill" viewBox="0 0 16 16">
          <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5.784 6A2.24 2.24 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.3 6.3 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1zM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5"/>
        </svg>
        }
          
        />
      
      </motion.div>

  </div>

  {/* Heading */}
  <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="mt-[25px] sm:mt-[30px] md:mt-[35px] text-center"
    >
      {/* Row 1 */}
      <motion.div
        variants={containerVariants}
        className="flex justify-center flex-wrap gap-[10px] sm:gap-[15px] 
        text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-normal 
        tracking-[-1.9px] leading-none text-white"
      >
        {wordsRow1.map((word, i) => (
          <motion.span key={i} variants={wordVariants}>
            {word}
          </motion.span>
        ))}
      </motion.div>

      {/* Row 2 */}
      <motion.div
        variants={containerVariants}
        className="flex justify-center flex-wrap gap-[10px] sm:gap-[15px] 
        text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-normal 
        tracking-[-1.9px] leading-none text-[#ffffff99] mt-2 sm:mt-3 md:mt-4"
      >
        {wordsRow2.map((word, i) => (
          <motion.span key={i} variants={wordVariants}>
            {word}
          </motion.span>
        ))}
      </motion.div>
    </motion.div>


  {/* Subtext */}
  <motion.p
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
  viewport={{ once: true, amount: 0.3 }}
  className="text-[#ffffff99] text-sm sm:text-base md:text-lg font-normal 
  leading-relaxed tracking-[-0.2px] text-center mt-4 sm:mt-6 
  max-w-[90%] sm:max-w-[500px] md:max-w-[600px]"
>
    Our team is made up of passionate professionals who bring their expertise and creativity to every project.
  </motion.p>

  {/* Button */}
  <motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.5 }}
  transition={{ duration: 0.6, delay: 1.2 }} // delay after header & paragraphs
>

<InteractiveHoverButton className='mt-[20px]' onClick={()=>setOpenModal(true)}>Book An Appointment</InteractiveHoverButton>

    </motion.div>
    <ContactModal
  isOpen={openModal}
  onClose={() => setOpenModal(false)}
/>

  {/* Team Members Grid */}
  {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1200px] mx-auto mt-[40px] sm:mt-[60px] md:mt-[80px]">
  {teamMembers.map((member, index) => (
    <div
      key={index}
      className="relative aspect-square rounded-[12px] overflow-hidden group"
    >
      {/* Image */}
      {/* <img
        src={member.image}
        alt={member.name}
        className="w-full h-full object-cover"
      />

      {/* Overlay for text */}
      {/* <div className="absolute bottom-0 right-0 p-4  w-full text-right">
        <h3 className="text-white font-semibold text-lg">
          {member.name}
        </h3>
        <p className="text-white/80 text-sm">
          {member.role}
        </p>
      </div>
    </div> */}
  {/* ))}  */}
 {/* </div>  */}
 <div className='mt-6' style={{ height: '500px', position: 'relative' }}>
  <ChromaGrid 
    items={items}
    radius={300}
    damping={0.45}
    fadeOut={0.6}
    ease="power3.out"
  />
</div>


</div>
  )
}

export default TeamMembers