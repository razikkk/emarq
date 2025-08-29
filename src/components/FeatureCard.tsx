import React from 'react';

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col items-stretch mb-6 sm:mb-0">
      <div className="flex items-stretch gap-1.5 text-white font-medium leading-none">
        <img
          src={icon}
          className="aspect-[1] object-contain w-[23px] shrink-0"
          alt=""
        />
        <div className="basis-auto my-auto">
          {title}
        </div>
      </div>
      <div className="text-gray-500 text-sm font-normal leading-[26px] mt-2">
        {description}
      </div>
    </div>
  );
};
