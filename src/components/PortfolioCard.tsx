import React from "react";

interface PortfolioFeature {
  icon: string;
  text: string;
}

interface PortfolioCardProps {
  year?: string;
  title: string;
  features: PortfolioFeature[];
  tags: string[];
}

export const PortfolioCard: React.FC<PortfolioCardProps> = ({
  year,
  title,
  features,
  tags,
}) => {
  return (
    <article className="bg-[#3E2F56]/30 backdrop-blur-lg shadow w-full max-w-[900px] overflow-hidden rounded-[20px] mx-auto">
    <div className="border p-4 rounded-[20px] border-[rgba(255,255,255,0.07)]">
      <div className="flex flex-col items-center text-center">
        <div className="bg-[#3E2F56]/40 backdrop-blur-md rounded-[15px] p-6 w-full">
          
          {/* Year + Title */}
          <div className="flex items-center justify-center gap-4 text-[#E8C1C5] font-medium">
            {year && (
              <div className="bg-[#3E2F56]/50 px-4 py-1.5 rounded-md text-base">
                {year}
              </div>
            )}
            <div className="text-2xl font-semibold">{title}</div>
          </div>
  
          {/* Divider */}
          <div className="h-px mt-5 bg-[#E8C1C5]/20" />
  
          {/* Features */}
          <div className="mt-5 space-y-3">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center justify-center gap-3 text-[#E8C1C5]">
                <img src={feature.icon} className="w-[24px]" alt="" />
                <span className="text-base">{feature.text}</span>
              </div>
            ))}
          </div>
  
          {/* Tags */}
          <div className="flex flex-wrap justify-center gap-3 mt-6">
            {tags.map((tag, index) => (
              <div
                key={index}
                className="bg-[#3E2F56]/50 px-4 py-1.5 rounded-full text-[#E8C1C5] text-base"
              >
                {tag}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </article>
  
  );
};
