import React from 'react'
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { HighlightTag } from '@/components/HighlightTag';
import { Badge } from '@/components/ui/badge';


const featureCards = [
  {
    icon: "/icon-28.svg",
    title: "Tailored Strategies, Measurable Results",
    description:
      "We craft customized marketing and production plans that align with your brand goals, delivering campaigns designed for ROI, audience engagement, and long-term growth.",
    tags: ["Strategy", "ROI Focus"],
    actionLabel: "Assist",
  },
  {
    icon: "/icon-8.svg",
    title: "Creative Excellence from Concept to Completion",
    description:
      "From branding and digital marketing to high-quality photography and videography, we combine innovation with premium execution to bring your brand story to life.",
    tags: ["Creative Production", "Brand Storytelling"],
    actionLabel: "Guide",
  },
  {
    icon: "/icon-15.svg",
    title: "End-to-End Marketing & Production Solutions",
    description:
      "Whether building a brand from scratch or elevating an existing one, we provide full-service support—strategy, content creation, campaign management, and optimization.",
    tags: ["Full-Service Agency", "Growth Focus"],
    actionLabel: "Resolve",
    hasButton: true,
  },
];
const AboutSection = () => {
  return (
    <div>
    <div className="w-full h-px bg-[linear-gradient(90deg,rgba(255,255,255,0.02)_0%,rgba(255,255,255,0.1)_50%,rgba(255,255,255,0.02)_100%)]" />
  
    <div className="w-full h-px bg-[linear-gradient(90deg,rgba(255,255,255,0.02)_0%,rgba(255,255,255,0.1)_50%,rgba(255,255,255,0.02)_100%)] absolute bottom-0" />
  
    <div className="max-w-[1200px] mx-auto px-4 py-[101px]">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="space-y-8">
          <div className="space-y-[71px]">
            <div className="flex justify-center pt-[80px]">
              <HighlightTag
                variant="dotted"
                className="border-2 border-white/80 rounded-lg shadow-[0_0_15px_rgba(255,255,255,0.3)]"
                title={
                  <span className="bg-gradient-to-r from-white to-white/10 bg-clip-text text-transparent">
                    About Emarq
                  </span>
                }
                icon="https://api.builder.io/api/v1/image/assets/TEMP/ee60d881afc242b9a3b0e92d5f8322a3f74c021e?placeholderIfAbsent=true"
              />
            </div>
  
            <div className="space-y-[31px]">
              <div className="space-y-[10px]">
                <div className="flex flex-wrap gap-x-3">
                  <span className="font-normal text-white text-3xl sm:text-4xl md:text-5xl lg:text-[54px] tracking-[-1.90px] leading-tight">
                    Crafting
                  </span>
                  <span className="font-normal text-white text-3xl sm:text-4xl md:text-5xl lg:text-[54px] tracking-[-1.90px] leading-tight">
                    Digital
                  </span>
                  <span className="font-normal text-white text-3xl sm:text-4xl md:text-5xl lg:text-[54px] tracking-[-1.90px] leading-tight">
                    Excellence,
                  </span>
                </div>
                <div className="flex flex-wrap gap-x-3">
                  <span className="font-normal text-[#ffffff99] text-3xl sm:text-4xl md:text-5xl lg:text-[54px] tracking-[-1.90px] leading-tight">
                    Purpose
                  </span>
                  <span className="font-normal text-[#ffffff99] text-3xl sm:text-4xl md:text-5xl lg:text-[54px] tracking-[-1.90px] leading-tight">
                    Into
                  </span>
                  <span className="font-normal text-[#ffffff99] text-3xl sm:text-4xl md:text-5xl lg:text-[54px] tracking-[-1.90px] leading-tight">
                    Ideas!
                  </span>
                </div>
              </div>
  
              <p className="font-normal text-[#ffffff99] text-sm sm:text-base md:text-lg tracking-[-0.20px] leading-6 md:leading-7 max-w-[515px]">
                Emarq is a premium full-service agency helping brands grow through strategy,
                creativity, and data-driven results.
              </p>
            </div>
          </div>
  
          {/* Feature cards */}
          <div className="space-y-[58px]">
            {featureCards.map((card, index) => (
              <Card
                key={index}
                className="bg-[#080808] rounded-[30px] border-[#ffffff12] shadow-[0px_10px_22px_-1.75px_#00000029,0px_2.29px_5.03px_-1.17px_#0000001a,0px_0.6px_1.32px_-0.58px_#00000017] overflow-hidden"
              >
                <CardContent className="p-2">
                  <div className="bg-[#080808] rounded-[22px] border border-[#4f1ad626] shadow-[inset_0px_10px_5px_-1px_#4f1ad626] [background:radial-gradient(50%_50%_at_50%_50%,rgba(15,9,18,0.15)_0%,rgba(12,9,18,1)_100%)] p-[27px] space-y-[74px]">
                    <div className="flex items-start justify-between">
                      <img
                        className="w-[47px] h-[47px]"
                        alt="Icon"
                        src={card.icon}
                      />
                      <Badge className="rounded-[40px] bg-[linear-gradient(0deg,rgba(255,255,255,0.05)_0%,rgba(97,97,97,0.09)_100%)] border-[#ffffff0d] hover:bg-[linear-gradient(0deg,rgba(255,255,255,0.05)_0%,rgba(97,97,97,0.09)_100%)]">
                        <span className="text-[12px] sm:text-[13px] md:text-[14px] font-normal">
                          {card.actionLabel}
                        </span>
                      </Badge>
                    </div>
  
                    <div className="space-y-[27px]">
                      <div className="space-y-2 -mt-10">
                        <h3 className="font-medium text-white text-[14px] sm:text-[15px] md:text-[16px]">
                          {card.title}
                        </h3>
                        <div className="w-[207px] h-px bg-[linear-gradient(90deg,rgba(255,255,255,0)_0%,rgba(255,255,255,0.15)_50%,rgba(255,255,255,0)_100%)]" />
                        <p className="font-normal text-[#ffffff80] text-[13px] sm:text-[14px] md:text-[14.4px]">
                          {card.description}
                        </p>
                      </div>
  
                      <div className="flex flex-wrap gap-3">
                        {card.tags.map((tag, tagIndex) => (
                          <Badge
                            key={tagIndex}
                            className="rounded-[40px] bg-[linear-gradient(0deg,rgba(79,26,214,0.2)_0%,rgba(153,153,153,0.1)_100%)] border-[#ffffff0d] hover:bg-[linear-gradient(0deg,rgba(79,26,214,0.2)_0%,rgba(153,153,153,0.1)_100%)]"
                          >
                            <span className="text-[12px] sm:text-[13px] md:text-[14px] font-normal">
                              {tag}
                            </span>
                          </Badge>
                        ))}
                        {card.hasButton && (
                          <Button className="h-[41px] rounded-[10px] bg-gradient-to-b from-[#412F59] to-[#8059E3] border-[3px] border-[#ffffff26]">
                            <span className="text-[12px] sm:text-[13px] md:text-[14px] font-medium text-white">
                              Book an Appointment
                            </span>
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
  
        <div className="flex justify-center items-start">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/8906a7af66a0e1ac9b36ee68075b2b3a07a56c9b?placeholderIfAbsent=true"
            className="aspect-[0.99] object-contain w-full rounded-[30px] max-md:max-w-full max-md:mt-10"
            alt="About us"
          />
        </div>
      </div>
    </div>
  </div>
  )
}

export default AboutSection