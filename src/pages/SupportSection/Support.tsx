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
      src: "/primary-7.svg",
      className: "w-[205px] h-[205px] top-[29px] left-0",
    },
    {
      src: "/primary.svg",
      className: "w-52 h-52 top-0 left-[116px]",
    },
    {
      src: "/primary-1.svg",
      className: "w-[199px] h-[199px] top-4 left-[229px]",
    },
    {
      src: "/primary-2.svg",
      className: "w-[184px] h-[184px] top-6 left-[345px]",
    },
    {
      src: "/primary-4.svg",
      className: "w-[202px] h-[202px] top-[15px] left-[435px]",
    },
    {
      src: "/primary-5.svg",
      className: "w-[205px] h-[205px] top-5 left-[535px]",
    },
    {
      src: "/primary-3.svg",
      className: "w-[223px] h-[223px] top-3 left-[631px]",
    },
  ];
const Support = () => {
  return (
    <div className="relative min-h-[1063px] bg-[url(/light-rays---rays-2.png)] bg-cover bg-center pt-24 sm:pt-28 lg:pt-36">
    {/* Gradient overlay */}
    <img
      src="https://api.builder.io/api/v1/image/assets/TEMP/b8eac3d4b26ed07f548eca35005a6b1d81426adf?placeholderIfAbsent=true"
      className="absolute h-full w-full object-cover inset-0"
      alt=""
    />
  
    <div className="relative z-10 max-w-6xl mx-auto px-4 text-center space-y-8">
      {/* Highlight tag */}
      <div className="flex justify-center">
        <HighlightTag
          variant="dotted"
          className="border-2 border-white/80 rounded-lg shadow-[0_0_15px_rgba(255,255,255,0.3)]"
          title={
            <span className="bg-gradient-to-r from-white to-white/10 bg-clip-text text-transparent">
              24/7 Support
            </span>
          }
          icon="https://api.builder.io/api/v1/image/assets/TEMP/ee60d881afc242b9a3b0e92d5f8322a3f74c021e?placeholderIfAbsent=true"
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
      <Button className="px-6 py-3 rounded-[10px] bg-gradient-to-b from-[#412F59] to-[#8059E3] border-[3px] border-white/15 font-medium text-white text-base tracking-[-0.5px]">
        Talk to Us
      </Button>
  
      {/* Chat bubbles + features */}
      <div className="relative mt-[100px] px-4 sm:px-20">
        <div className="relative w-full max-w-[1280px] mx-auto">
          {/* Chat bubbles */}
          <div className="absolute w-[854px] h-72 top-[-77px] left-1/2 transform -translate-x-1/2">
            <div className="relative w-full h-full">
              <div className="absolute w-[854px] h-[235px] top-[45px] left-0">
                {chatBubbles.map((bubble, index) => (
                  <img
                    key={index}
                    className={`absolute ${bubble.className}`}
                    alt="Primary"
                    src={bubble.src}
                  />
                ))}
              </div>
  
              {/* Sample chat labels */}
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
            <div className="w-full h-px bg-gradient-to-r from-white/5 via-white/10 to-white/5 mb-[41px]" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {supportFeatures.map((feature, index) => (
                <Card
                  key={index}
                  className="bg-[#080808] border border-white/10 rounded-xl relative overflow-hidden flex flex-col h-auto sm:h-[200px] text-left"
                >
                  <div
                    className="absolute inset-0 bg-cover opacity-10"
                    style={{ backgroundImage: `url(${feature.backgroundImage})` }}
                  />
                  <CardContent className="relative z-10 p-6 flex flex-col items-start gap-4">
                    <img className="w-10 h-10" alt="Icon" src={feature.icon} />
                    <div>
                      <h3 className="font-medium text-white text-lg mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-white/50 text-sm sm:text-base">
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
    <div className="absolute bottom-0 left-6 right-6 h-px bg-gradient-to-r from-white/5 via-white/10 to-white/5" />
  </div>
  )
}

export default Support