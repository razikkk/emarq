import React, { useEffect, useRef, useState } from 'react'
import { PortfolioCard } from '@/components/PortfolioCard';
import { Button } from '@/components/ui/button';
import { HighlightTag } from '@/components/HighlightTag';
import ImageTrail from '@/components/animations/ImageTrail';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

import ScrollStack, { ScrollStackItem } from '@/components/animations/ScrollStack';
import { useScroll } from 'framer-motion';
import useStackedCards from '@/components/ui/UseStackedHook';
import { motion, Variants } from "framer-motion";
import { InteractiveHoverButton } from '@/components/animations/magicui/interactive-hover-button';

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
      staggerChildren: 0.15, // delay between words
    },
  },
};

const wordVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};


const paragraphVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: "easeOut" as const } 
  },
};

interface PortfolioProps {
  setCursorVariant: React.Dispatch<React.SetStateAction<"default" | "viewNow">>;
}
const Portfolio: React.FC<PortfolioProps> = ({ setCursorVariant }) => {
  const [hoveredWord, setHoveredWord] = useState<string | null>(null);
  const containerRef = useRef(null)
  const wordsRow1 = ['Showcasing', 'Your', 'Best'];
  const wordsRow2 = ['Work', 'with', 'Pure', 'Precision.'];
  const images = [
   
      'https://picsum.photos/id/287/300/300',
      'https://picsum.photos/id/1001/300/300',
   
    
      'https://picsum.photos/id/1025/300/300',
      'https://picsum.photos/id/1026/300/300',
    
   
      'https://picsum.photos/id/1027/300/300',
      'https://picsum.photos/id/1028/300/300',
  
 
      'https://picsum.photos/id/1029/300/300',
      'https://picsum.photos/id/1030/300/300',
   
 
      'https://picsum.photos/id/1031/300/300',
      'https://picsum.photos/id/1032/300/300',
  
   
      'https://picsum.photos/id/1033/300/300',
      'https://picsum.photos/id/1034/300/300',
    
   
      'https://picsum.photos/id/1035/300/300',
      'https://picsum.photos/id/1036/300/300',
    ]
    
    useEffect(() => {
      if (!containerRef.current) return;
    
      let currentImageIndex = 0;
    
      const handleMouseMove = (e: MouseEvent) => {
        if (!hoveredWord || !containerRef.current) return;
    
        const container = containerRef.current as HTMLDivElement;
        const rect = container.getBoundingClientRect();
    
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
    
        createTrail(x, y);
      };
    
      const createTrail = (x: number, y: number) => {
        if (!containerRef.current) return;
    
        const img = document.createElement("img");
        img.src = images[currentImageIndex];
        img.className = "image-trail";
        containerRef.current.appendChild(img);
    
        currentImageIndex = (currentImageIndex + 1) % images.length;
    
        const imgSize = 100;
    
        gsap.set(img, {
          x: x - imgSize / 2,
          y: y - imgSize / 2,
          scale: 0,
          rotation: gsap.utils.random(-20, 20),
          opacity: 0,
        });
    
        // Animate scale + opacity
        gsap.to(img, {
          scale: 1,
          opacity: 1,
          duration: 0.2,
          ease: "power2.out",
        });
    
        // Smooth follow animation for the trail
        gsap.to(img, {
          x: x - imgSize / 2,
          y: y - imgSize / 2,
          duration: 0.1, // adjust for speed
          ease: "power2.out",
        });
    
        // Fade out
        gsap.to(img, {
          scale: 0.3,
          opacity: 0,
          duration: 0.8,
          delay: 0.3,
          ease: "power2.in",
          onComplete: () => img.remove(),
        });
      };
    
      const container = containerRef.current;
      container.addEventListener("mousemove", handleMouseMove);
    
      return () => container.removeEventListener("mousemove", handleMouseMove);
    }, [hoveredWord]);
   
useStackedCards()

    
  return (
    <div >
            <hr className="border-0 h-px bg-[#E8C1C5]/30" />

    <div className="flex flex-col relative w-full overflow-hidden items-center pt-[100px] min-h-screen max-md:max-w-full"
   >
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
              Portfolio
            </span>
          }
          icon={ <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-tools" viewBox="0 0 16 16">
          <path d="M1 0 0 1l2.2 3.081a1 1 0 0 0 .815.419h.07a1 1 0 0 1 .708.293l2.675 2.675-2.617 2.654A3.003 3.003 0 0 0 0 13a3 3 0 1 0 5.878-.851l2.654-2.617.968.968-.305.914a1 1 0 0 0 .242 1.023l3.27 3.27a.997.997 0 0 0 1.414 0l1.586-1.586a.997.997 0 0 0 0-1.414l-3.27-3.27a1 1 0 0 0-1.023-.242L10.5 9.5l-.96-.96 2.68-2.643A3.005 3.005 0 0 0 16 3q0-.405-.102-.777l-2.14 2.141L12 4l-.364-1.757L13.777.102a3 3 0 0 0-3.675 3.68L7.462 6.46 4.793 3.793a1 1 0 0 1-.293-.707v-.071a1 1 0 0 0-.419-.814zm9.646 10.646a.5.5 0 0 1 .708 0l2.914 2.915a.5.5 0 0 1-.707.707l-2.915-2.914a.5.5 0 0 1 0-.708M3 11l.471.242.529.026.287.445.445.287.026.529L5 13l-.242.471-.026.529-.445.287-.287.445-.529.026L3 15l-.471-.242L2 14.732l-.287-.445L1.268 14l-.026-.529L1 13l.242-.471.026-.529.445-.287.287-.445.529-.026z"/>
        </svg>
          }
          
        />
      
      </motion.div>
  
      {/* Headline Row 1 */}
      <motion.div
     
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="w-full"
    >
      {/* Row 1 */}
      <motion.div className="relative flex flex-wrap justify-center w-full gap-4 text-white font-normal text-center tracking-[-1.9px] leading-none mt-[35px] text-4xl md:text-[54px] z-10">
        {wordsRow1.map((word) => (
          <motion.div key={word} variants={wordVariants} className="relative">
            {word}
          </motion.div>
        ))}
      </motion.div>

      {/* Row 2 */}
      <motion.div className="relative flex flex-wrap justify-center w-full gap-4 text-gray-500 font-normal text-center tracking-[-1.9px] leading-none mt-[11px] text-4xl md:text-[54px] z-10">
        {wordsRow2.map((word) => (
          <motion.div key={word} variants={wordVariants} className="relative">
            {word}
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
      {/* Description */}
      <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="max-w-2xl mx-auto"
    >
      <motion.p variants={paragraphVariants} className="relative text-gray-500 text-sm sm:text-base font-normal leading-relaxed tracking-[-0.2px] text-center mt-[43px] max-md:max-w-full">
        A portfolio is more than just projects—it's your story, vision, and
      </motion.p>
      <motion.p variants={paragraphVariants} className="relative text-gray-500 text-sm sm:text-base font-normal leading-relaxed tracking-[-0.2px] text-center mt-1 max-md:max-w-full">
        expertise. Emarq ensures your work stands out with a rank.
      </motion.p>
    </motion.div>
  
      {/* Button */}
      <motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.5 }}
  transition={{ duration: 0.6, delay: 1.2 }} // delay after header & paragraphs
>
<InteractiveHoverButton className='mt-[20px]' onClick={() => window.open("https://emarq-gallery.vercel.app", "_blank")}>View Our Gallery</InteractiveHoverButton>

      </motion.div>

            {/* Portfolio Cards */}
        <div className=" cards relative mt-[60px] max-md:mt-10 space-y-8 sm:space-y-10 w-full max-w-6xl"
          onMouseEnter={() => setCursorVariant("viewNow")}
  onMouseLeave={() => setCursorVariant("default")}>
              <div className='custom-card card1 flex flex-col items-center'>
              <PortfolioCard
                // year="2024"
                title="Perfume Product Photography"
                features={[
                  { icon: "https://api.builder.io/api/v1/image/assets/TEMP/32a4530ec069805e3ebae1d9d7551c98664be11f?placeholderIfAbsent=true", text: "Studio Lighting" },
                  { icon: "https://api.builder.io/api/v1/image/assets/TEMP/32a4530ec069805e3ebae1d9d7551c98664be11f?placeholderIfAbsent=true", text: "Luxury Aesthetics" },
                  { icon: "https://api.builder.io/api/v1/image/assets/TEMP/32a4530ec069805e3ebae1d9d7551c98664be11f?placeholderIfAbsent=true", text: "Detail Focus" },
                  { icon: "https://api.builder.io/api/v1/image/assets/TEMP/32a4530ec069805e3ebae1d9d7551c98664be11f?placeholderIfAbsent=true", text: "Brand Consistency" }
                ]}
                tags={["Product", "Photography"]}
                image1="/product1.PNG"
                image2="/product2.PNG"
                imageClassName="rounded-xl mx-auto"
              />
             </div>
             <div className='custom-card card2'>
              <PortfolioCard
                // year="2025"
                title="Luxury Car Photography"
                features={[
                  { icon: "https://api.builder.io/api/v1/image/assets/TEMP/ea61d7cfe3e004e89aa201447b44ba1920dbd59a?placeholderIfAbsent=true", text: "Dynamic Angles" },
                  { icon: "https://api.builder.io/api/v1/image/assets/TEMP/d796e748a358ac1b3f7c21286b97de7702805f8c?placeholderIfAbsent=true", text: "Motion Capture" },
                  { icon: "https://api.builder.io/api/v1/image/assets/TEMP/a346c02abe0908fee6e23850fe8c1a179941b52a?placeholderIfAbsent=true", text: "High Gloss Finish" },
                  { icon: "https://api.builder.io/api/v1/image/assets/TEMP/f9d73010b28d691da8c603afb2320d23cdfe4ed4?placeholderIfAbsent=true", text: "Power & Precision" }
                ]}
                tags={["Luxury", "Automotive"]}
                image1="/automotive1.JPG"
                image2="/automotive2.JPG"
                imageClassName="rounded-xl mx-auto"
              />
              </div>
              <div className='custom-card card3'>             
              <PortfolioCard
                // year="2025"
                title="Gourmet Food Photography"
                features={[
                  { icon: "https://api.builder.io/api/v1/image/assets/TEMP/e6d0a9f306c61bf864832706754d86e1bd79dd6a?placeholderIfAbsent=true", text: "Rich Textures" },
                  { icon: "https://api.builder.io/api/v1/image/assets/TEMP/e25d1d7e4e641ed194e072bcdd58b4c8c9c1e191?placeholderIfAbsent=true", text: "Natural Lighting" },
                  { icon: "https://api.builder.io/api/v1/image/assets/TEMP/34d6e45870c088ea6864e2a4f58bcb4a4f1a84bc?placeholderIfAbsent=true", text: "Vibrant Colors" },
                  { icon: "https://api.builder.io/api/v1/image/assets/TEMP/0f8e561b863c3fae3f6c405330df0090556a5c96?placeholderIfAbsent=true", text: "Appetite Appeal" }
                ]}
                tags={["Culinary", "Gourmet"]}
                image1="/food1.PNG"
                image2="/food2.PNG"
                imageClassName="rounded-xl mx-auto"
              />
</div>
<div className='custom-card card4'>             
              <PortfolioCard
                // year="2025"
                title=" Model Photography"
                features={[
                  { icon: "https://api.builder.io/api/v1/image/assets/TEMP/e6d0a9f306c61bf864832706754d86e1bd79dd6a?placeholderIfAbsent=true", text: "Professional Lighting" },
                  { icon: "https://api.builder.io/api/v1/image/assets/TEMP/e25d1d7e4e641ed194e072bcdd58b4c8c9c1e191?placeholderIfAbsent=true", text: "Creative Posing" },
                  { icon: "https://api.builder.io/api/v1/image/assets/TEMP/34d6e45870c088ea6864e2a4f58bcb4a4f1a84bc?placeholderIfAbsent=true", text: "Fashion Focus" },
                  { icon: "https://api.builder.io/api/v1/image/assets/TEMP/0f8e561b863c3fae3f6c405330df0090556a5c96?placeholderIfAbsent=true", text: "Editorial Quality" }
                ]}
                tags={["Fashion", "Editorial"]}
                image1="/model1.JPG"
                image2="/model2.JPEG"
                imageClassName="rounded-xl mx-auto"
              />
</div>
            </div> 
  
           

          </div>
    </div>
  )
}

export default Portfolio