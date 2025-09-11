import React from 'react'
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { HighlightTag } from '@/components/HighlightTag';

 

const supportFeatures = [
    {
      icon: "/icon.svg",
      title: "Fast Responses",
      description: "Get timely answers to your questions.",
      backgroundImage:
        "/figure---abstract-dots---1xoqma4saawbcrdkisjfixups-png-11.png",
    },
    {
      icon: "/icon-3.svg",
      title: "Expert Guidance",
      description: "Our team understands both design and tech.",
      backgroundImage:
        "/figure---abstract-dots---1xoqma4saawbcrdkisjfixups-png-12.png",
    },
    {
      icon: "/icon-5.svg",
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
  return (
    <div className="relative min-h-[1063px] bg-[url(/light-rays---rays-2.png)] bg-cover bg-center pt-32 sm:pt-36 lg:pt-44">
                  <hr className="border-0 h-px bg-[#E8C1C5]/30 mb-24" />

    
  
    <div className="relative z-10 max-w-6xl mx-auto px-4 text-center space-y-8">
      {/* Highlight tag */}
      <div className="flex justify-center">
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
      </div>
  
      {/* Main Heading */}
      <div className="pt-10">
        <h1 className="text-white text-3xl sm:text-5xl lg:text-[54px] leading-tight tracking-[-1.9px]">
          Here When You
        </h1>
        <h1 className="text-white/60 text-3xl sm:text-5xl lg:text-[54px] leading-tight tracking-[-1.9px]">
          Need Us Most Important.
        </h1>
      </div>
  
      {/* Subtext */}
      <div className="max-w-[520px] mx-auto">
        <p className="text-white/60 text-sm sm:text-base leading-relaxed">
          Emarq comes with dedicated support to help you launch and maintain your site without friction.
        </p>
      </div>
  
      {/* Button */}
      <Button   className="w-full sm:w-[195px] h-[46px] rounded-[10px] 
  border border-[#E8C1C5]/30 shadow-sm shadow-white/20
  bg-gradient-to-r from-[#E8C1C5] to-[#E8C1C5] 
  [font-family:'DM_Sans',Helvetica] font-medium text-[#3E2F56] text-base tracking-[-0.50px] leading-[26px] 
  hover:from-[#d8a8ad] hover:to-[#d8a8ad] 
  transition-all duration-300 ease-in-out 
  mt-4 sm:mt-6">
         Talk To Us
        </Button>
  
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
          <div className="relative z-10 pt-[244px]">
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
    {supportFeatures.map((feature, index) => (
      <Card
        key={index}
        className="backdrop-blur-md border border-white/10 rounded-xl relative overflow-hidden flex flex-col h-auto sm:h-[200px] text-left bg-white/5"
      >
        {/* Background image with overlay blur */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20 blur-sm"
          style={{ backgroundImage: `url(${feature.backgroundImage})` }}
        />

        <CardContent className="relative z-10 p-6 flex flex-col items-start gap-4">
          <img className="w-10 h-10" alt="Icon" src={feature.icon} />

          <div>
            <h3 className="font-semibold text-[#E8C1C5] text-lg mb-2">
              {feature.title}
            </h3>
            <p className="text-[#E8C1C5]/70 text-sm sm:text-base leading-relaxed">
              {feature.description}
            </p>
          </div>
        </CardContent>
      </Card>
    ))}
  </div>
</div>

        </div>
      </div>
    </div>
  
    {/* Bottom divider */}
    {/* <hr className="border-0 h-px bg-[#E8C1C5]/30 mb-24" /> */}

  </div>
  )
}

export default Support