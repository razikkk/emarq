import React from 'react'
import { TestimonialCard } from '@/components/TestimonialCard';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { HighlightTag } from '@/components/HighlightTag';


const Testimonial = () => {
    const testimonialData = [
        {
          quote:
            "They not only delivered a top-notch website but also provided strategic insights that helped us improve our overall digital presence.",
          name: "John Smith",
          title: "CEO",
          company: "Innovate Solutions",
          topImage: "/logo.jpg",
        },
        {
          quote:
            "The team understood our complex requirements and provided a user-friendly, high-performing website that stands out in the market.",
          name: "Emily Davis",
          title: "Product Manager",
          company: "Nexus Digital",
          topImage: "/top-3.svg",
        },
        {
          quote:
            "Their innovative solutions helped streamline our operations, and the website design and development is both functional and visually stunning.",
          name: "David Lee",
          title: "Founder",
          company: "GreenLeaf Enterprises",
          topImage: "/top-10.svg",
        },
        {
          quote:
            "We were blown away by the creative approach and attention to detail. The team took our ideas and turned them into a stunning websites.",
          name: "Mark Thompson",
          title: "Creative Director",
          company: "PixelWorks Studio",
          topImage: "/top-1.svg",
        },
        {
          quote:
            "They delivered a customized solution that addressed all of our business needs. The website is sleek, functional, and improved our customer experience.",
          name: "Brian Clark",
          title: "Team Lead",
          company: "Mandro Designs",
          topImage: "/top-4.svg",
        },
        {
          quote:
            "The team's dedication and attention to detail are unmatched. They delivered a beautifully designed website that perfectly reflects our brand.",
          name: "Daniel Carter",
          title: "Founder",
          company: "Fusion Studios",
          topImage: "/top-2.svg",
        },
      ];

     
    
      
  return (
    <div className="relative w-full max-w-[1400px] mx-auto rounded-[20px] overflow-hidden px-4 sm:px-6 lg:px-8 py-4">
    <hr className="border-0 h-px bg-[#E8C1C5]/30" />
  
    {/* Highlight Tag */}
    <div className="flex justify-center mt-14">
      <HighlightTag
        variant="dotted"
        className="border-2 border-white/80 rounded-lg shadow-[0_0_15px_rgba(255,255,255,0.3)]"
        title={
          <span className="bg-gradient-to-r from-[#3E2F56] to-[#8A6FB3] bg-clip-text text-transparent">
            Testimonial
          </span>
        }
        icon={
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" viewBox="0 0 24 24">
            <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5s-3 1.34-3 3 1.34 3 3 3zm-8 0c1.66 0 
            2.99-1.34 2.99-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V20h14v-3.5c0-2.33-4.67-3.5-7-3.5zm8 
            0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V20h6v-3.5c0-2.33-4.67-3.5-7-3.5z"/>
          </svg>
        }
      />
    </div>
  
    {/* Header */}
    <header className="relative z-10 flex flex-col items-center text-center mb-8 pt-4 sm:pt-8">
      <div className="flex flex-wrap justify-center gap-2 mb-4">
        {["What", "Our", "Clients", "Say"].map((word, i) => (
          <span key={i} className="text-white font-normal text-2xl sm:text-3xl md:text-5xl lg:text-[54px] tracking-tight leading-tight">
            {word}
          </span>
        ))}
      </div>
  
      <div className="flex flex-wrap justify-center gap-2 text-[#ffffff99] mb-6">
        {["About", "Emarq's", "Excellence"].map((word, i) => (
          <span key={i} className="text-[#ffffff99] font-normal text-2xl sm:text-3xl md:text-5xl lg:text-[54px] tracking-tight leading-tight">
            {word}
          </span>
        ))}
      </div>
  
      <p className="text-[#ffffff99] text-sm sm:text-base md:text-lg max-w-xl mb-6">
        Hear from our happy clients! See how we've helped them achieve their goals and create lasting impact.
      </p>
  
      <Button   className="w-full sm:w-[195px] h-[46px] rounded-[10px] 
  border border-[#E8C1C5]/30 shadow-sm shadow-white/20
  bg-gradient-to-r from-[#E8C1C5] to-[#E8C1C5] 
  [font-family:'DM_Sans',Helvetica] font-medium text-[#3E2F56] text-base tracking-[-0.50px] leading-[26px] 
  hover:from-[#d8a8ad] hover:to-[#d8a8ad] 
  transition-all duration-300 ease-in-out 
  mt-4 sm:mt-6">
          Book an Appointment
        </Button>
    </header>
  
    {/* Cards */}
    <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {testimonialData.map((testimonial, index) => (
        <Card
          key={index}
          className="bg-[#080808] rounded-[20px] border-[#ffffff12] p-6 flex flex-col items-center text-center"
        >
          <img
            className="w-16 h-16 rounded-full object-cover mb-4"
            alt={testimonial.name}
            src={testimonial.topImage}
          />
          <img src="/stars.svg" alt="Stars" className="w-24 mx-auto mb-4" />
          <blockquote className="text-[#ffffff80] text-sm sm:text-base leading-relaxed mb-4">
            "{testimonial.quote}"
          </blockquote>
          <div className="flex items-center justify-center gap-2 mb-1">
            <span className="font-semibold text-white">{testimonial.name}</span>
            <div className="w-[3px] h-[3px] bg-white rounded-full" />
            <span className="font-medium text-white">{testimonial.title}</span>
          </div>
          <span className="text-[#ffffff99] text-sm">{testimonial.company}</span>
        </Card>
      ))}
    </div>
  </div>
  
  )
}

export default Testimonial