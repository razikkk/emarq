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
    <header className="fixed w-full top-6 left-0 z-50 flex justify-center">
    {/* Center Glassmorphic Nav */}
    <div className="flex items-center gap-8 px-8 py-3 rounded-full 
      backdrop-blur-md bg-white/10  border-white/20 shadow-lg">
      
      {/* Menu Items - Left */}
      <nav className="flex items-center gap-6 text-white/90 text-lg">
        <span className="cursor-pointer hover:text-white transition">Home</span>
        <span className="text-white/40">•</span>
        <span className="cursor-pointer hover:text-white transition">Features</span>
      </nav>
  
      {/* Center Icon */}
      <div className="w-[60px] h-[40px] rounded-xl flex items-center justify-center">
        <img src="/q.png" alt="Center Icon" className="w-[105px] h-[70px]" />
      </div>
  
      {/* Menu Items - Right */}
      <nav className="flex items-center gap-6 text-white/90 text-lg">
        <span className="cursor-pointer hover:text-white transition">Gallery</span>
        <span className="text-white/40">•</span>
        <span className="cursor-pointer hover:text-white transition">Pricing</span>
      </nav>
    </div>
  </header>
  
  );
};