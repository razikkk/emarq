import React, { ReactNode } from 'react';

interface HighlightTagProps {
  year?: string;
  title: string | ReactNode;
  icon?: string | ReactNode;
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
      <div className="border flex items-stretch gap-3 px-4 py-1.5 rounded-[40px] border-[rgba(255,255,255,0.05)] border-solid bg-[#E8C1C5]">
        
        {icon && (
          <div className="w-[35px] h-[35px] shrink-0 flex items-center justify-center rounded-full  bg-[#3E2F56]">
            {typeof icon === "string" ? (
              <img
                src={icon}
                className="w-[18px] h-[18px] object-contain"
                alt=""
              />
            ) : (
              icon
            )}
          </div>
        )}
    
        <div className="grow shrink my-auto text-white]">
          {title}
        </div>
      </div>
    </div>
    
    );
  }

  return (
    <div className="w-fit max-w-full overflow-hidden tracking-[-0.5px] rounded-full font-dmsans">
    <div className="flex items-center gap-3 px-3 py-1.5 rounded-full border border-[rgba(255,255,255,0.05)] bg-[#E8C1C5]">
      
      {/* Year pill */}
      {year && (
        <div className="px-2 py-0.5 rounded-full border border-purple-400/30 bg-[#3E2F56] shadow-inner">
          <span className="text-white font-bold text-sm">{year}</span>
        </div>
      )}
  
      {/* Title with fade shadow */}
      <div className="relative text-base font-medium text-white/80">
        <span className="bg-gradient-to-r from-[#3E2F56]/90 via-[#3E2F56]/100 to-transparent bg-clip-text text-transparent">
          {title}
        </span>
      </div>
    </div>
  </div>
  );
};
