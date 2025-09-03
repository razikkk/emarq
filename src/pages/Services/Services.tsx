import React from 'react'
import { ServiceCard } from '@/components/ServiceCard';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { HighlightTag } from '@/components/HighlightTag';

const serviceTags = [
  {
    icon: "/icon-22.svg",
    text: "Digital Marketing",
    className: "w-[220px]",
  },
  {
    icon: "/icon-25.svg",
    text: "Social Media Management",
    className: "w-[260px]",
  },
  {
    icon: "/icon-23.svg",
    text: "SEO Optimization",
    className: "w-[200px]",
  },
  {
    icon: "/icon-16.svg",
    text: "Branding & Logo Design",
    className: "w-[260px]",
  },
  {
    icon: "/icon-21.svg",
    text: "Web Development",
    className: "w-[220px]",
  },
  {
    icon: "/icon-31.svg",
    text: "Corporate Website Design",
    className: "w-[280px]",
  },
  {
    icon: "/icon-29.svg",
    text: "E-Commerce Development",
    className: "w-[280px]",
  },
  {
    icon: "/icon-30.svg",
    text: "Photography & Videography",
    className: "w-[280px]",
  },
];
  
  
const Services = () => {
  return (
    <div>
            <hr className="border-0 h-px bg-[#E8C1C5]/30" />

        <div className=" flex w-full flex-col items-center pb-[58px] rounded-[20px] max-md:max-w-full">
        <div className="flex flex-col self-stretch relative min-h-[400px] w-full overflow-hidden items-center pt-[100px] pb-[41px] px-20 max-md:max-w-full max-md:px-5">
  {/* <img
    src="https://api.builder.io/api/v1/image/assets/TEMP/0e856ed630aeb9def5b08fb09d885341e3a4cc59?placeholderIfAbsent=true"
    className="absolute h-full w-full object-cover inset-0 max-md:rounded-t-[30px]" // mobile top radius
    alt=""
  /> */}
  <div className="relative flex w-[565px] max-w-full flex-col items-center">
   
    <div className="flex justify-center">
        <HighlightTag
          variant="dotted"
          className="border-2 border-white/80 rounded-lg shadow-[0_0_15px_rgba(255,255,255,0.3)]"
          title={
            <span className="bg-gradient-to-r from-[#3E2F56] to-[#8A6FB3] bg-clip-text text-transparent">
              Services
            </span>
          }
          icon={  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-gear" viewBox="0 0 16 16">
          <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492M5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0"/>
          <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115z"/>
        </svg>
        }
          
        />
      
      </div>
     

    {/* Heading */}
    <div className="flex flex-col items-center text-center mt-[35px]">
      <div className="flex flex-wrap justify-center gap-[10px] text-[54px] font-normal tracking-[-1.9px] leading-none max-md:text-[28px] max-lg:text-[40px]">
        <span className="text-white">Innovative</span>
        <span className="text-white">Marketing</span>
        <span className="text-white">and</span>
        <span className="text-white">Production</span>
        <span className="text-white">for Growth</span>
      </div>
    </div>

    {/* Paragraphs */}
    <p className="text-gray-500 text-base font-normal leading-relaxed tracking-[-0.2px] text-center mt-[25px] max-w-[90%] mx-auto max-md:text-sm max-md:leading-[22px]">
      We craft powerful marketing and production solutions that captivate audiences,
      impact, and fuel business growth.
    </p>
  </div>
</div>
            <Button  className="w-full sm:w-[195px] h-[46px] rounded-[10px] 
  border border-[#E8C1C5]/30 shadow-sm shadow-white/20
  bg-gradient-to-r from-[#E8C1C5] to-[#E8C1C5] 
  [font-family:'DM_Sans',Helvetica] font-medium text-[#3E2F56] text-base tracking-[-0.50px] leading-[26px] 
  hover:from-[#d8a8ad] hover:to-[#d8a8ad] 
  transition-all duration-300 ease-in-out 
  mt-4 sm:mt-6">
  Book a 15min call
</Button>

            <div className="w-full max-w-[1160px] mt-[60px] max-md:max-w-full max-md:mt-10">
              <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
                <div className="w-[33%] max-md:w-full max-md:ml-0">
                  <ServiceCard
                    icon="https://api.builder.io/api/v1/image/assets/TEMP/ce71df6c9e20255c2c867632ee3ff41eb5a87c29?placeholderIfAbsent=true"
                    title="Branding & Visual Identity"
                    subtitle="Logos & Guidelines"
                    description="Crafting unique brand visuals and consistent identity guidelines."
                    projectImage="https://api.builder.io/api/v1/image/assets/TEMP/6a51da5a7f687662dcf8b03bd2c53b349b362d91?placeholderIfAbsent=true"
                  />
                </div>
                <div className="w-[33%] ml-5 max-md:w-full max-md:ml-0">
                  <ServiceCard
                    icon="https://api.builder.io/api/v1/image/assets/TEMP/2bcebd3bdf022bd60290190522a47011624b60d3?placeholderIfAbsent=true"
                    title="Social Media Strategy & Management"
                    subtitle="Content that Engages"
                    description="From strategy to content creation, we manage social media that connects."
                    projectImage="https://api.builder.io/api/v1/image/assets/TEMP/50557cbaa6732feaadc172ba9f6b0e59dc62e01d?placeholderIfAbsent=true"
                  />
                </div>
                <div className="w-[33%] ml-5 max-md:w-full max-md:ml-0">
                  <ServiceCard
                    icon="https://api.builder.io/api/v1/image/assets/TEMP/70fc8f7f275cf02d8e1ff56d36df0f12a28e2bc2?placeholderIfAbsent=true"
                    title="Performance Marketing & Paid Ads"
                    subtitle="Max ROI"
                    description="Targeted campaigns designed to deliver measurable results."
                    projectImage="https://api.builder.io/api/v1/image/assets/TEMP/6dbfe47f17b74391e7a2c264f9bc9a025b359ed6?placeholderIfAbsent=true"
                  />
                </div>
              </div>
            </div>

            {/* Additional Service Cards */}
            <div className="w-full max-w-[1160px] mt-6 max-md:max-w-full">
              <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
                <div className="w-[33%] max-md:w-full max-md:ml-0">
                  <ServiceCard
                    icon="https://api.builder.io/api/v1/image/assets/TEMP/ca1486dd50cf00c5c3299df16c5cc155b6b50bb9?placeholderIfAbsent=true"
                    title="SEO & Web Development"
                    subtitle="Optimized for Search"
                    description="Responsive websites built to rank high and perform better."
                    projectImage="https://api.builder.io/api/v1/image/assets/TEMP/4dad21d8989b35f5e50726819649217b40608d2d?placeholderIfAbsent=true"
                  />
                </div>
                <div className="w-[33%] ml-5 max-md:w-full max-md:ml-0">
                  <ServiceCard
                    icon="https://api.builder.io/api/v1/image/assets/TEMP/d3d60133ac2c3188a2901716c67ad4b23815279c?placeholderIfAbsent=true"
                    title="Influencer & PR Outreach"
                    subtitle="Expand Your Reach"
                    description="Connecting brands with influencers to drive awareness and trust."
                    projectImage="https://api.builder.io/api/v1/image/assets/TEMP/8ab81735773db384a58f00f187e439ebca54a356?placeholderIfAbsent=true"
                  />
                </div>
                <div className="w-[33%] ml-5 max-md:w-full max-md:ml-0">
                  <ServiceCard
                    icon="https://api.builder.io/api/v1/image/assets/TEMP/5b3cd5696ce42b910099d603c2a5fcf84eff172a?placeholderIfAbsent=true"
                    title="Commercial Photography"
                    subtitle="Visual Storytelling"
                    description="Product, portrait, and event photography that captures attention."
                    projectImage="https://api.builder.io/api/v1/image/assets/TEMP/2395aa2a6a89db11d485bbcd78f38481478665ee?placeholderIfAbsent=true"
                  />
                </div>
              </div>
            </div>

            <div className="w-full max-w-[1160px] mt-6 max-md:max-w-full">
              <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
                <div className="w-[33%] max-md:w-full max-md:ml-0">
                  <ServiceCard
                    icon="https://api.builder.io/api/v1/image/assets/TEMP/ca1486dd50cf00c5c3299df16c5cc155b6b50bb9?placeholderIfAbsent=true"
                    title="High-Quality Videography"
                    subtitle="Impactful Visuals"
                    description="From reels to commercials, our videos inspire and engage."
                    projectImage="https://api.builder.io/api/v1/image/assets/TEMP/4dad21d8989b35f5e50726819649217b40608d2d?placeholderIfAbsent=true"
                  />
                </div>
                <div className="w-[33%] ml-5 max-md:w-full max-md:ml-0">
                  <ServiceCard
                    icon="https://api.builder.io/api/v1/image/assets/TEMP/d3d60133ac2c3188a2901716c67ad4b23815279c?placeholderIfAbsent=true"
                    title="Post-Production & Motion Graphics"
                    subtitle="Polished Perfection"
                    description="Editing, color grading, and animation for a professional finish."
                    projectImage="https://api.builder.io/api/v1/image/assets/TEMP/8ab81735773db384a58f00f187e439ebca54a356?placeholderIfAbsent=true"
                  />
                </div>
                <div className="w-[33%] ml-5 max-md:w-full max-md:ml-0">
                  <ServiceCard
                    icon="https://api.builder.io/api/v1/image/assets/TEMP/5b3cd5696ce42b910099d603c2a5fcf84eff172a?placeholderIfAbsent=true"
                    title="Studio & On-Location Shoots"
                    subtitle="Anywhere, Anytime"
                    description="Flexible production setups for your brand’s needs."
                    projectImage="https://api.builder.io/api/v1/image/assets/TEMP/2395aa2a6a89db11d485bbcd78f38481478665ee?placeholderIfAbsent=true"
                  />
                </div>
              </div>
            </div>

            {/* Service Tags */}
            <div className="relative z-10 flex flex-col items-center gap-4 px-4 sm:px-6 lg:px-[204px] mt-[40px] mb-[60px]">
  {/* First Row */}
  <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-3 sm:mb-4">
    {serviceTags.slice(0, 4).map((tag, index) => (
      <Badge
        key={index}
        className={`${tag.className} h-[56px] sm:h-[62px] bg-[#080808] rounded-[17px] border border-[#ffffff12] px-3 py-2 sm:px-3.5 sm:py-[13px] relative overflow-hidden flex items-center`}
      >
        <div className="absolute inset-0 bg-cover bg-center opacity-50" />
        <img className="w-7 h-7 sm:w-9 sm:h-9 mr-3" alt="Icon" src={tag.icon} />
        <span className="[font-family:'DM_Sans',Helvetica] font-medium text-white text-sm sm:text-base tracking-[-0.50px] leading-[22px] sm:leading-[26px]">
          {tag.text}
        </span>
      </Badge>
    ))}
  </div>

  {/* Second Row */}
  <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
    {serviceTags.slice(4).map((tag, index) => (
      <Badge
        key={index + 4}
        className={`${tag.className} h-[56px] sm:h-[62px] bg-[#080808] rounded-[17px] border border-[#ffffff12] px-3 py-2 sm:px-3.5 sm:py-[13px] relative overflow-hidden flex items-center`}
      >
        <div className="absolute inset-0 bg-cover bg-center opacity-50" />
        <img className="w-7 h-7 sm:w-9 sm:h-9 mr-3" alt="Icon" src={tag.icon} />
        <span className="[font-family:'DM_Sans',Helvetica] font-medium text-white text-sm sm:text-base tracking-[-0.50px] leading-[22px] sm:leading-[26px]">
          {tag.text}
        </span>
      </Badge>
    ))}
  </div>
</div>
          </div>
    </div>
  )
}

export default Services