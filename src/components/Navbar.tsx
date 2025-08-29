import React, { useState } from 'react';
import { Button } from './ui/button';

export const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigationItems = [
    { name: "Home", active: true },
    { name: "About", active: false },
    { name: "works", active: false },
    { name: "Contact", active: false },
    { name: "FAQ", active: false },
  ];

  return (
    <header className="fixed w-full h-[70px] md:h-[91px] top-0 left-0 z-50">
    <div className="relative h-[70px] md:h-[91px] overflow-hidden backdrop-blur-[2.5px] backdrop-brightness-[100%] bg-gradient-to-b from-black/74 via-black/60 to-black/30">
      <div className="relative w-full max-w-[1440px] mx-auto h-[70px] md:h-[124px] md:top-[-17px]">
        <div className="flex items-center justify-between w-full max-w-[1360px] h-[46px] mx-auto mt-3 md:mt-10 px-4 md:px-10">
          
          {/* Logo */}
          <div className="w-[80px] h-[40px] md:w-[157px] md:h-[60px] flex items-center">
            <h1 className="font-bebasNeue text-lg md:text-3xl text-white">EMAR</h1>
            <img 
    src="/q.png" 
    alt="Logo" 
    className="w-[40px] h-[40px] md:w-[50px] md:h-[50px] object-contain -ml-[12px] -mt-[7px]"
  />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-[40px]">
            {navigationItems.map((item, index) => (
              <div
                key={index}
                className={`h-6 font-normal text-base tracking-[-0.20px] leading-[26px] whitespace-nowrap cursor-pointer transition-colors duration-300
                  [font-family:'DM_Sans',Helvetica]
                  ${item.active ? "text-white" : "text-gray-400"} 
                  hover:text-white
                `}
              >
                {item.name}
              </div>
            ))}
          </nav>

          {/* Desktop CTA Button */}
          <Button className="hidden md:block w-[125px] h-[46px] rounded-[10px] border border-purple-400/30 
            bg-gradient-to-r from-[#412F59] to-[#8059E3] 
            [font-family:'DM_Sans',Helvetica] font-medium text-white text-base tracking-[-0.50px] leading-[26px] 
            hover:from-[#3a244f] hover:to-[#724dd8] transition-all">
            Get In Touch
          </Button>

          {/* Mobile Menu Button (3 dots) */}
          <button 
            className="md:hidden text-white p-2" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h.01M12 12h.01M19 12h.01" />
            </svg>
          </button>
        </div>

        <div className="w-full h-[70px] md:h-[91px] md:mt-[17px] border-b border-white/10" />
      </div>
    </div>

    {/* Mobile Menu */}
    {mobileMenuOpen && (
      <div className="md:hidden bg-black/95 backdrop-blur-lg absolute top-[70px] w-full p-5 z-40">
        <nav className="flex flex-col gap-5">
          {navigationItems.map((item, index) => (
            <div
              key={index}
              className={`font-normal text-base tracking-[-0.20px] cursor-pointer 
                ${item.active ? "text-white" : "text-gray-400"} hover:text-white`}
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.name}
            </div>
          ))}
          <Button className="mt-4 w-full h-[46px] rounded-[10px] border border-purple-400/30 
            bg-gradient-to-r from-[#412F59] to-[#8059E3] font-medium text-white text-base tracking-[-0.50px] leading-[26px]">
            Get In Touch
          </Button>
        </nav>
      </div>
    )}
  </header>
  );
};