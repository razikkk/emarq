import React, { useState } from 'react';

interface FAQItemProps {
  question: string;
  answer?: string;
}

export const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-[rgba(8,8,8,1)] w-full overflow-hidden rounded-[20px] max-md:max-w-full">
      <button
        className="border flex items-stretch gap-5 flex-wrap justify-between px-[30px] py-8 rounded-[20px] border-[rgba(255,255,255,0.07)] border-solid max-md:max-w-full max-md:px-5 w-full text-left hover:border-[rgba(255,255,255,0.1)] transition-colors"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <div className="text-lg text-white font-normal tracking-[-0.5px] leading-none">
          {question}
        </div>
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/98127e9bd9da5d4e7908eff9e1277a06ebab2a7d?placeholderIfAbsent=true"
          className={`aspect-[1] object-contain w-6 shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          alt="Toggle"
        />
      </button>
      {isOpen && answer && (
        <div className="px-[30px] pb-8 text-white text-base leading-relaxed max-md:px-5">
          {answer}
        </div>
      )}
    </div>
  );
};
