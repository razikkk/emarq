import React, { useEffect, useRef, useState } from 'react';
import { HighlightTag } from './HighlightTag';
import { Button } from './ui/button';
import ShinyText from './animations/ShinyText';
import RotatingText from './animations/RotatingText';
import BlurText from './ui/shadcn-io/blur-text';
import BlurWrapper from './ui/shadcn-io/blur-text/Blurwrapper';
import { InteractiveHoverButton } from './animations/magicui/interactive-hover-button';
import Dock from './animations/Dock';
import ContactModal from './ui/ContactModal';



export const HeroSection: React.FC = () => {
  const [openModal,setOpenModal] = useState(false)


  return (
    <header className="relative  flex flex-col items-center pb-[57px] pt-16 px-4 overflow-hidden max-md:pb-8 max-md:pt-8 bg-[#3E2F56]">
    {/* Spacer */}
    <div className="flex w-full max-w-screen-xl h-40 max-md:h-16" />

    {/* Highlight Tag */}

    <div className="self-center relative z-10">
     
    <BlurWrapper delay={150}>
      
      <HighlightTag year="2025" title="Emarq Studio" />
     </BlurWrapper>
    </div>

   
<h1
    className="
    flex flex-col items-center gap-2 relative z-10 
    text-[86px] font-normal leading-[90px] 
    tracking-[-3.8px] text-[#E8C1C5] mt-[47px] 
    max-lg:text-[60px] max-lg:leading-[70px] max-lg:tracking-[-2px]
    max-md:text-[36px] max-md:leading-[44px] max-md:tracking-[-1px] max-md:mt-6
  "
>
  {/* First line */}
  <BlurText
    text="Where Creativity!"
    delay={150}
    animateBy="words"
    direction="top"
    className="text-center"
  />

  {/* Second line with Meets + Rotating text */}
  <div className="flex flex-wrap justify-center items-baseline gap-3">
    <BlurText
      text="Meets"
      delay={300}
      animateBy="words"
      direction="top"
    />
  
    <RotatingText
      texts={["Result", "Growth", "Engagement", "Success!"]}
      mainClassName="px-2 sm:px-2 md:px-3 text-[#E8C1C5] overflow-hidden justify-center rounded-lg"
      staggerFrom={"last"}
      initial={{ y: "100%" }}
      animate={{ y: 0 }}
      exit={{ y: "-120%" }}
      staggerDuration={0.025}
      splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
      transition={{ type: "spring", damping: 30, stiffness: 400 }}
      rotationInterval={2000}
    />
  </div>
</h1>



    {/* Subheading */}
    <BlurText
  text="Transforming ideas into impactful brand stories."
  delay={500} // delay so it comes after heading
  animateBy="words"
  direction="top"
  className="relative z-10 flex flex-wrap justify-center gap-1 text-base text-[#E8C1C5] font-normal text-center tracking-[-0.2px] leading-loose mt-[31px] max-md:mt-4"
/>


    {/* Buttons */}
    <div className="relative z-50 flex flex-wrap justify-center gap-3 font-medium tracking-[-0.5px] mt-[42px] max-md:mt-6">
      {/* <Button variant="default" className="bg-white text-[#3E2F56] hover:bg-[#d8a8ad] h-12 px-5 rounded-lg"> */}
        {/* Connect With Us */}
        <BlurWrapper delay={200}>

        <InteractiveHoverButton onClick={()=>setOpenModal(true)}>Connect with Us</InteractiveHoverButton>
        
        </BlurWrapper>
        <ContactModal
  isOpen={openModal}
  onClose={() => setOpenModal(false)}
/>
        
      {/* </Button> */}
      <BlurWrapper delay={300}>
      <Button variant="cta" className="h-11 px-5 rounded-[50px]"
      onClick={() => {
        const aboutSection = document.getElementById("about");
        aboutSection?.scrollIntoView({ behavior: "smooth" });
      }}>
       <ShinyText
       text="What is Emarq"
       disabled={false}
       speed={3}
       className='custom-class'/>
      </Button>
      </BlurWrapper>
    </div>

    {/* Background Image - positioned AFTER text */}
    {/* <img
      src="./bg1.jpg"
      className="absolute left-0 w-full h-[280px] object-cover top-[calc(100%_-_20rem)] max-md:h-[200px] max-md:top-[calc(100%_-_14rem)]"
      alt="Hero background"
    />   */}

    {/* Decoration */}
    <div className="absolute bottom-0  left-0 w-full h-[240px] max-md:h-12 z-20">
  <div
    className="w-full h-full"
    style={{
      background: "linear-gradient(to top, #3E2F56, #3E2F56)" // fully solid
    }}
  />
</div>

{/* Existing decoration image */}
<div className="relative z-10 w-full max-w-lg mt-5 max-md:mt-3 hidden md:block ">
  <img
    src="https://api.builder.io/api/v1/image/assets/TEMP/346ba80e40fe720d782e6c494fd1452e0ee98717?placeholderIfAbsent=true"
    className="aspect-[5.38] object-contain w-full "
    alt="Hero bottom decoration"
  />
</div>
  </header>
  );
};
