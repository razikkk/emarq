import React, { ReactNode } from 'react';

interface HighlightTagProps {
  year?: string;
  title: string | ReactNode;
  icon?: string;
  variant?: 'default' | 'dotted';
  className?:string
}

export const HighlightTag: React.FC<HighlightTagProps> = ({ 
  year, 
  title, 
  icon,
  variant = 'default' 
}) => {
  if (variant === 'dotted') {
    return (
      <div className="w-fit max-w-full overflow-hidden text-base font-normal tracking-[-0.5px] leading-loose rounded-[40px]">
        <div className="border flex items-stretch gap-2.5 p-1.5 rounded-[40px] border-[rgba(255,255,255,0.05)] border-solid">
          {icon && (
            <img
              src={icon}
              className="aspect-[1] object-contain w-[29px] shrink-0 rounded-[30px]"
              alt=""
            />
          )}
          <div className="grow shrink my-auto text-white">
            {title}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-fit max-w-full overflow-hidden tracking-[-0.5px] rounded-full font-dmsans">
    <div className="flex items-center gap-3 px-3 py-1.5 rounded-full border border-white/10 bg-neutral-900">
      
      {/* Year pill */}
      {year && (
        <div className="px-2 py-0.5 rounded-full border border-purple-400/30 bg-gradient-to-r from-[#412F59] to-[#8059E3] shadow-inner">
          <span className="text-white font-bold text-sm">{year}</span>
        </div>
      )}
  
      {/* Title with fade shadow */}
      <div className="relative text-base font-medium text-white/80">
        <span className="bg-gradient-to-r from-white/90 via-white/70 to-transparent bg-clip-text text-transparent">
          {title}
        </span>
      </div>
    </div>
  </div>
  );
};
