import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { Footer } from "@/components/Footer";
import About from "./About";
import Innovation from "./Innovation/Innovation";
import FeaturesSection from "./Feautures/FeaturesSection";
import FeaturesList from "./Feautures/FeaturesList";
import Services from "./Services/Services";
import Portfolio from "./Portfolio/Portfolio";
import Support from "./SupportSection/Support";
import AboutSection from "./About/AboutSection";
import TeamMembers from "./TeamMembers/TeamMembers";
import ComparisonSection from "./Comparison/ComparisonSection";
import Testimonial from "./Testimonial/Testimonial";
import Faq from "./Faq/Faq";
import Contact from "./CTA/Contact";
import { useEffect, useState } from "react";
import {motion} from 'framer-motion'
import SmoothScroll from "@/components/ui/SmoothScroll";
import { BackgroundGradientAnimation } from "@/components/ui/shadcn-io/background-gradient-animation";
import GradualBlur from "@/components/animations/GradualBlur";
import LightRays from "@/components/animations/LightRays";
import Particles from "@/components/animations/Particles";
import ThreeDBackground from "@/components/ui/3dBackground";
import Preloader from "@/components/ui/Preloader";
import AnimatedLogo from "@/components/AnimatedLogo";
import UnderConstruction from "./underConstruction/UnderConstruction";



const Index = () => {

  const [mousePosition,setMousePosition] = useState({x:0,y:0})
  const [loading, setLoading] = useState(true);
  const [cursorVariant, setCursorVariant] = useState<"default" | "viewNow">("default");


  useEffect(()=>{
    const handleMouseMove = (e)=>{
      setMousePosition({x:e.clientX, y:e.clientY})
    }

    window.addEventListener("mousemove",handleMouseMove)
    return ()=> window.removeEventListener("mousemove",handleMouseMove)
  })

  

  const siteUnderConstruction = true; // change to false when done

  if (siteUnderConstruction) {
    return <UnderConstruction />;
  }

  return (
   
    
    <div className="bg-[#3E2F56] min-h-screen text-white overflow-x-hidden "
    >
      
    
      <motion.div
  className="fixed top-0 left-0 pointer-events-none z-[9999] flex items-center justify-center"
  animate={{
    x: mousePosition.x,
    y: mousePosition.y,
    width: cursorVariant === "viewNow" ? 80 : 12,
    height: cursorVariant === "viewNow" ? 80 : 12,
    borderRadius: "9999px",
    backgroundColor: "#fff",
  }}
  transition={{
    type: "spring",
    stiffness: 200,
    damping: 20,
    mass: 0.5,
  }}
  style={{ translateX: "-50%", translateY: "-50%" }} // keep it centered
>
  <motion.span
    initial={{ opacity: 0 }}
    animate={{ opacity: cursorVariant === "viewNow" ? 1 : 0 }}
    transition={{ duration: 0.2 }}
    className="text-black text-xs font-semibold pointer-events-none"
  >
    View Now
  </motion.span>
</motion.div>


      {/* <AnimatedLogo/> */}
      <SmoothScroll>
         {/* <AnimatedLogo> */}

         
        <Navbar />
     
      
     
  <HeroSection />

  <main>
  
    {/* About Section */}
    {/* <section className="  bg-[#3E2F56] rotate-[3.141592653589793rad] flex w-full max-w-[1440px] mx-auto h-1" /> */}
    
    <section
      id="about"
  className=" relative z-10 w-full max-w-[1440px] mx-auto px-5 pt-[40px] pb-[70px] max-md:pt-[30px] max-md:pb-[40px]"
    >
      <About/>
    </section>

    {/* Innovation Section */}
    <section className="overflow-hidden pt-[109px] px-[70px] max-md:px-5 max-w-[1440px] mx-auto">
      <div className="flex h-px w-full" />
    </section>

    <section className="flex flex-col relative min-h-[700px] overflow-hidden w-full max-w-[1440px] mx-auto px-5">
      <Innovation />
    </section>

    {/* Features Section */}
    <section className="w-full max-w-[1280px] mx-auto mt-[50px] max-md:mt-10 px-5">
      <FeaturesSection />
    </section>

    {/* Features List */}
    <section className="w-full flex max-w-[1280px] mx-auto h-px mt-[100px] max-md:mt-10" />
    <section className="w-full max-w-[1280px] mt-[10px] mx-auto px-5 max-md:mt-10">
      <FeaturesList />
    </section>

    {/* Services Section */}
    <section className=" w-full max-w-[1400px] mx-auto overflow-hidden mt-[123px] rounded-[20px] px-5 max-md:mt-10">
      <Services />
    </section>

    {/* Portfolio Section */}
    <section id="portfolio" className="flex w-full max-w-[1300px] mx-auto h-px mt-[120px] max-md:mt-10" />
    <section className="w-full px-5">
      <Portfolio  setCursorVariant={setCursorVariant}/>
    </section>

    {/* Support Section */}
    <section className="relative w-full px-5">
      <Support />
    </section>

    {/* About Section */}
    <section className="relative w-full px-5">
      <AboutSection />
    </section>

    {/* Team Section */}
    <section className="flex w-full flex-col items-center px-5 max-w-[1440px] mx-auto">
      <TeamMembers />
    </section>

    {/* Comparison Section */}
    <section className="flex w-full flex-col items-center px-5 pt-20 max-w-[1440px] mx-auto">
      <ComparisonSection />
    </section>

    {/* Testimonials Section */}
    {/* <section className="w-full max-w-[1400px] mx-auto overflow-hidden mt-[437px] rounded-[20px] px-5 max-md:mt-10">
      <Testimonial />
    </section> */}

    {/* FAQ Section */}
    <section id="faq" className="overflow-hidden w-full px-5">
      <Faq />
    </section>

    {/* CTA Section */}
    <section
      id="contact"
      className="w-full max-w-[1400px] mx-auto overflow-hidden text-base font-normal tracking-[-0.5px] leading-loose mt-[110px] rounded-[20px] px-5 max-md:mt-10"
    >
      <Contact />
    </section>
  </main>

  <Footer />

  {/* </AnimatedLogo> */}

   
  
</SmoothScroll>
<GradualBlur
      target=".min-h-screen"
      position="bottom"
      height="6rem"
      strength={2}
      divCount={5}
      curve="bezier"
      exponential={true}
      opacity={1}
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        width: "100%",
        height: "6rem",
        pointerEvents: "none",
        zIndex: 50,
      }}
    />
</div>
  );
};

export default Index;
