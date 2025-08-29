import React from 'react';
import { Button } from './ui/button';

interface ServiceCardProps {
  icon: string;
  title: string;
  subtitle: string;
  description: string;
  projectImage: string;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  icon,
  title,
  subtitle,
  description,
  projectImage
}) => {
  return (
    <article className="bg-[rgba(8,8,8,1)] grow overflow-hidden w-full rounded-[20px] max-md:mt-6">
      <div className="border flex flex-col items-stretch rounded-[20px] border-[rgba(255,255,255,0.07)] border-solid p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-600/20 to-blue-600/20 flex items-center justify-center">
              <img
                src={icon}
                className="w-6 h-6 object-contain"
                alt=""
              />
            </div>
            <div>
              <h3 className="text-white text-lg font-medium leading-none tracking-[-0.5px]">
                {title}
              </h3>
              <p className="text-white/70 text-sm mt-1">
                {subtitle}
              </p>
            </div>
          </div>
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/f2e610eb4d7a4c9137964dfaf0fc399dd5bf05c3?placeholderIfAbsent=true"
            className="w-6 h-6 object-contain"
            alt=""
          />
        </div>
        
        <div className="flex w-full h-px bg-white/10 mb-6" />
        
        <p className="text-white/80 text-base leading-[26px] mb-6">
          {description}
        </p>
        
        <img
          src={projectImage}
          className="w-full h-40 object-cover rounded-xl"
          alt="Project preview"
        />
      </div>
    </article>
  );
};
