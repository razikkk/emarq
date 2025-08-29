import React from 'react';
import { HighlightTag } from './HighlightTag';
import { Button } from './ui/button';

export const HeroSection: React.FC = () => {
  return (
    <header className="relative bg-black flex flex-col items-center pb-[57px] pt-16 px-4 overflow-hidden max-md:pb-8 max-md:pt-8">
    {/* Spacer */}
    <div className="flex w-full max-w-screen-xl h-40 max-md:h-16" />

    {/* Highlight Tag */}
    <div className="self-center relative z-10">
      <HighlightTag year="2025" title="Emarq Studio" />
    </div>

    {/* Heading */}
    <h1 className="relative z-10 text-[86px] font-normal leading-[90px] tracking-[-3.8px] text-center text-white mt-[47px] 
                  max-lg:text-[60px] max-lg:leading-[70px] 
                  max-md:text-[36px] max-md:leading-[44px] max-md:mt-6">
      Where Creativity
      <br />
      Meets Results.
    </h1>

    {/* Subheading */}
    <div className="relative z-10 flex flex-wrap justify-center gap-2 text-base text-gray-500 font-normal text-center tracking-[-0.2px] leading-loose mt-[31px] max-md:mt-4">
      <div>Transforming</div>
      <div>ideas</div>
      <div>into</div>
      <div>impactful</div>
      <div>brand</div>
      <div>stories.</div>
    </div>

    {/* Buttons */}
    <div className="relative z-10 flex flex-wrap justify-center gap-3 font-medium tracking-[-0.5px] mt-[42px] max-md:mt-6">
      <Button variant="default" className="bg-[rgba(239,238,236,1)] text-[rgba(19,19,19,1)] hover:bg-[rgba(239,238,236,0.9)] h-12 px-5 rounded-lg">
        Connect With Us
      </Button>
      <Button variant="cta" className="h-12 px-5 rounded-lg">
        What is Emarq?
      </Button>
    </div>

    {/* Background Image - positioned AFTER text */}
    <img
      src="https://api.builder.io/api/v1/image/assets/TEMP/e5d95a61c1fda13b584bc48b2ff6849b5d7f7907?placeholderIfAbsent=true"
      className="absolute left-0 w-full h-[280px] object-cover top-[calc(100%_-_20rem)] max-md:h-[200px] max-md:top-[calc(100%_-_14rem)]"
      alt="Hero background"
    />  

    {/* Decoration */}
    <div className="relative z-10 w-full max-w-lg mt-5 max-md:mt-3">
      <img
        src="https://api.builder.io/api/v1/image/assets/TEMP/346ba80e40fe720d782e6c494fd1452e0ee98717?placeholderIfAbsent=true"
        className="aspect-[5.38] object-contain w-full"
        alt="Hero bottom decoration"
      />
    </div>
  </header>
  );
};
