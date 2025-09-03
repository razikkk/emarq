import React from 'react';
import { HighlightTag } from './HighlightTag';
import { Button } from './ui/button';
import ShinyText from './animations/ShinyText';


export const HeroSection: React.FC = () => {
  return (
    <header className="relative  flex flex-col items-center pb-[57px] pt-16 px-4 overflow-hidden max-md:pb-8 max-md:pt-8">
    {/* Spacer */}
    <div className="flex w-full max-w-screen-xl h-40 max-md:h-16" />

    {/* Highlight Tag */}
    <div className="self-center relative z-10">
      <HighlightTag year="2025" title="Emarq Studio" />
    </div>

    {/* Heading */}
    <h1 className="relative z-10 text-[86px] font-normal leading-[90px] tracking-[-3.8px] text-center text-[#E8C1C5] mt-[47px] 
                  max-lg:text-[60px] max-lg:leading-[70px] 
                  max-md:text-[36px] max-md:leading-[44px] max-md:mt-6">
      Where Creativity
      <br />
      Meets Results.
    </h1>

    {/* Subheading */}
    <div className="relative z-10 flex flex-wrap justify-center gap-2 text-base text-[#E8C1C5] font-normal text-center tracking-[-0.2px] leading-loose mt-[31px] max-md:mt-4">
      <div>Transforming</div>
      <div>ideas</div>
      <div>into</div>
      <div>impactful</div>
      <div>brand</div>
      <div>stories.</div>
    </div>

    {/* Buttons */}
    <div className="relative z-10 flex flex-wrap justify-center gap-3 font-medium tracking-[-0.5px] mt-[42px] max-md:mt-6">
      <Button variant="default" className="bg-white text-[#3E2F56] hover:bg-[#d8a8ad] h-12 px-5 rounded-lg">
        Connect With Us
      </Button>
      <Button variant="cta" className="h-12 px-5 rounded-lg">
       <ShinyText
       text="What is Emarq"
       disabled={false}
       speed={3}
       className='custom-class'/>
      </Button>
    </div>

    {/* Background Image - positioned AFTER text */}
    {/* <img
      src="./bg1.jpg"
      className="absolute left-0 w-full h-[280px] object-cover top-[calc(100%_-_20rem)] max-md:h-[200px] max-md:top-[calc(100%_-_14rem)]"
      alt="Hero background"
    />   */}

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
