import React from 'react'
import { TestimonialCard } from '@/components/TestimonialCard';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';


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
    <div className="relative w-full max-w-[1400px] mx-auto bg-[#080808] rounded-[20px] overflow-hidden px-4 sm:px-6 lg:px-8 py-10">
  
  {/* Background Images */}
  <div className="absolute inset-0">
    <div className="w-full h-[200px] sm:h-[250px] bg-[url('/figure---abstract-dots---1xoqma4saawbcrdkisjfixups-png-14.png')] bg-cover bg-center" />
    <div className="w-full h-[250px] sm:h-[300px] opacity-80 bg-[url('/image-2.png')] bg-cover bg-center absolute top-0 left-0" />
    <img
      src="https://api.builder.io/api/v1/image/assets/TEMP/a182a6219817ff9fcd8d2dea64d18d6591f35661"
      className="absolute top-0 left-0 w-full h-[250px] sm:h-[300px] object-cover"
      alt=""
    />
  </div>
  <div className="flex flex-col relative w-[138px] max-w-full overflow-hidden rounded-[40px] mx-auto">
      <img
        src="https://api.builder.io/api/v1/image/assets/TEMP/5699af9d163fedb6701248d92537d293af8c4415?placeholderIfAbsent=true"
        className="absolute w-full h-auto object-cover object-center"
        alt=""
      />
      <div className="relative border flex shrink-0 h-[41px] rounded-[40px] border-[rgba(255,255,255,0.05)] border-solid" />
    </div>

  {/* Header */}
  <header className="relative z-10 flex flex-col items-center text-center mb-10 pt-16 sm:pt-20">
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

    <Button className="px-5 py-2 rounded-[10px] bg-gradient-to-b from-[#412F59] to-[#8059E3] border-[3px] border-[#ffffff26]">
      <span className="text-white font-medium text-sm sm:text-base">
        Book An Appointment
      </span>
    </Button>
  </header>

  {/* Cards */}
  <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    {testimonialData.map((testimonial, index) => (
      <Card
        key={index}
        className="bg-[#080808] rounded-[20px] border border-[#ffffff12] p-6 flex flex-col items-center text-center"
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