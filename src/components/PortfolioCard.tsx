import React from 'react';

interface PortfolioFeature {
  icon: string;
  text: string;
}

interface PortfolioCardProps {
  year: string;
  title: string;
  features: PortfolioFeature[];
  tags: string[];
  image1: string;
  image2: string;
}

export const PortfolioCard: React.FC<PortfolioCardProps> = ({
  year,
  title,
  features,
  tags,
  image1,
  image2
}) => {
  return (
    <article className="bg-[#3E2F56]/30 backdrop-blur-lg shadow-[0px_1px_1px_-1px_rgba(0,0,0,0.09)] w-full max-w-[1200px] overflow-hidden rounded-[30px] max-md:max-w-full">
  <div className="border p-2.5 rounded-[30px] border-[rgba(255,255,255,0.07)] border-solid max-md:max-w-full">
    <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
      
      {/* Left column */}
      <div className="w-[33%] max-md:w-full max-md:ml-0">
        <div className="bg-[#3E2F56]/40 backdrop-blur-md grow overflow-hidden font-normal tracking-[-0.2px] w-full rounded-[22px] max-md:mt-5">
          <div className="overflow-hidden">
            <div className="border flex w-full flex-col p-4 rounded-[22px] border-[rgba(79,26,214,0.15)] border-solid">
              
              {/* Year + Title */}
              <div className="flex items-stretch gap-2.5 font-medium tracking-[-0.5px] text-[#E8C1C5]">
                <div className="bg-[#3E2F56]/50 shadow-[0px_0px_1px_0px_rgba(79,26,214,0.08)] overflow-hidden text-base whitespace-nowrap leading-loose rounded-[5px]">
                  <div className="overflow-hidden">
                    <div className="border flex flex-col items-stretch justify-center px-2.5 py-[11px] rounded-[5px] border-[rgba(79,26,214,0.15)] border-solid">
                      <div>{year}</div>
                    </div>
                  </div>
                </div>
                <div className="text-[#E8C1C5] text-lg leading-none basis-auto my-auto">
                  {title}
                </div>
              </div>

              {/* Divider */}
              <div className="self-stretch flex shrink-0 h-px mt-5 bg-[#E8C1C5]/20" />

              {/* Features */}
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-stretch gap-2.5 text-base text-[#E8C1C5] leading-loose mt-[22px]"
                >
                  <img
                    src={feature.icon}
                    className="aspect-[1] object-contain w-[23px] shrink-0"
                    alt=""
                  />
                  <div className="my-auto">{feature.text}</div>
                </div>
              ))}

              {/* Tags */}
              <div className="flex items-stretch gap-2.5 text-base whitespace-nowrap tracking-[-0.5px] leading-loose mt-[21px]">
                {tags.map((tag, index) => (
                  <div key={index} className="bg-[#3E2F56]/50 backdrop-blur-sm overflow-hidden rounded-[40px]">
                    <div className="overflow-hidden">
                      <div className="border flex flex-col items-stretch justify-center px-4 py-3.5 rounded-[40px] border-[rgba(255,255,255,0.05)] border-solid">
                        <div className="text-[#E8C1C5]">{tag}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* Middle image */}
      <div className="w-[33%] ml-5 max-md:w-full max-md:ml-0">
        <img
          src={image1}
          className="aspect-[1.15] object-contain w-full grow rounded-[22px] max-md:mt-5"
          alt="Portfolio project"
        />
      </div>

      {/* Right image */}
      <div className="w-[33%] ml-5 max-md:w-full max-md:ml-0">
        <img
          src={image2}
          className="aspect-[1.15] object-contain w-full grow rounded-[22px] max-md:mt-5"
          alt="Portfolio project"
        />
      </div>
    </div>
  </div>
</article>

  );
};
