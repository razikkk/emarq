import React, { useEffect, useState } from 'react';

interface PortfolioFeature {
  icon: string;
  text: string;
}

interface PortfolioCardProps {
  year?: string;
  title: string;
  features: PortfolioFeature[];
  tags: string[];
  image1: string;
  image2: string;
  imageClassName?: string;
}

export const PortfolioCard: React.FC<PortfolioCardProps> = ({
  year,
  title,
  features,
  tags,
  image1,
  image2,
  imageClassName = "",
}) => {
  const [isMobile, setIsMobile] = useState(false);
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768); // md breakpoint
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Switch between image1 & image2 every 3s in mobile
  useEffect(() => {
    if (isMobile) {
      const interval = setInterval(() => {
        setActiveImage((prev) => (prev === 0 ? 1 : 0));
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [isMobile]);

  return (
    <article className="bg-[#3E2F56]/30 backdrop-blur-lg shadow w-full max-w-[1200px] overflow-hidden rounded-[30px] max-md:max-w-full">
      <div className="border p-2.5 rounded-[30px] border-[rgba(255,255,255,0.07)]">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
          
          {/* Left column */}
          <div className="w-[33%] max-md:w-full">
            <div className="bg-[#3E2F56]/40 backdrop-blur-md rounded-[22px] p-4">
              {/* Year + Title */}
              <div className="flex gap-2.5 text-[#E8C1C5] font-medium">
                {year && (
                  <div className="bg-[#3E2F56]/50 px-2.5 py-[11px] rounded-[5px] text-base">
                    {year}
                  </div>
                )}
                <div className="text-lg">{title}</div>
              </div>

              {/* Divider */}
              <div className="h-px mt-5 bg-[#E8C1C5]/20" />

              {/* Features */}
              {features.map((feature, index) => (
                <div key={index} className="flex gap-2.5 text-[#E8C1C5] mt-[22px]">
                  <img src={feature.icon} className="w-[23px]" alt="" />
                  <div>{feature.text}</div>
                </div>
              ))}

              {/* Tags */}
              <div className="flex gap-2.5 mt-[21px] flex-wrap">
                {tags.map((tag, index) => (
                  <div
                    key={index}
                    className="bg-[#3E2F56]/50 px-4 py-2.5 rounded-[40px] text-[#E8C1C5]"
                  >
                    {tag}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Images */}
          {!isMobile ? (
            // Desktop: show both images side by side
            <>
              <div className="w-[33%] flex justify-center overflow-hidden rounded-[22px]">
                <img
                  src={image1}
                  className={`aspect-[1.15] object-cover w-full ${imageClassName}`}
                  alt="Portfolio project 1"
                />
              </div>
              <div className="w-[33%] flex justify-center overflow-hidden rounded-[22px]">
                <img
                  src={image2}
                  className={`aspect-[1.15] object-cover w-full ${imageClassName}`}
                  alt="Portfolio project 2"
                />
              </div>
            </>
          ) : (
            // Mobile: show one image at a time (slider)
            <div className="w-full flex justify-center overflow-hidden rounded-[22px] relative">
              <img
                src={activeImage === 0 ? image1 : image2}
                className={`aspect-[1.2] object-cover w-full transition-all duration-500 ${imageClassName}`}
                alt="Portfolio project"
              />
              {/* Dots indicator */}
              <div className="absolute bottom-2 flex gap-2">
                {[0, 1].map((i) => (
                  <span
                    key={i}
                    onClick={() => setActiveImage(i)}
                    className={`w-2 h-2 rounded-full cursor-pointer ${
                      activeImage === i ? "bg-white" : "bg-gray-500"
                    }`}
                  ></span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </article>
  );
};
