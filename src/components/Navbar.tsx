import React, { useState } from 'react';
import { FiMenu, FiX } from "react-icons/fi";
import ContactModal from './ui/ContactModal';

export const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openModal,setOpenModal] = useState(false)

const handleModal = ()=>{
  setOpenModal(true)
}
  const navigationItems = [
    { name: "Home", active: true },
    { name: "About", active: false },
    { name: "works", active: false },
    { name: "Contact", active: false },
    { name: "FAQ", active: false },
  ];

  return (
    <header className="fixed w-full top-6 left-0 z-50 flex justify-center"
    data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1000"
    >
      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center gap-8 px-8 py-3 rounded-full 
        backdrop-blur-md bg-white/10 border border-white/20 shadow-lg">
        
        {/* Left Menu */}
        <nav className="flex items-center gap-6 text-white/70 text-lg"
          >
          <span className="cursor-pointer hover:text-white transition">Home</span>
          <span className="text-white/90">•</span>
          <span className="cursor-pointer hover:text-white transition">About</span>
        </nav>

        {/* Center Logo */}
        <div className="w-[100px] h-[35px] rounded-xl flex items-center justify-center">
          <img src="/q.png" alt="Center Icon" className="w-[70px] h-[70px]" />
        </div>

        {/* Right Menu */}
        <nav className="flex items-center gap-6 text-white/70 text-lg">
          <span className="cursor-pointer hover:text-white transition">Gallery</span>
          <span className="text-white/90">•</span>

          <span className="cursor-pointer hover:text-white transition" onClick={handleModal}>Contact</span>
          
        </nav>
     </div>
       
        {/* <ContactModal
        isOpen={openModal}
        onClose={() => setOpenModal(false)}
      
      /> */}

      {/* Mobile Navigation */}
      <div className="absolute flex w-full items-center left-0 -top-6 justify-between px-3 py-3 md:hidden bg-transparent z-50">
  {/* Left - Logo */}
  <div className="flex items-center ml-2"> {/* Moved right */}
    <img src="/q.png" alt="Logo" className="w-[50px] h-[50px]" />
  </div>

  {/* Right - Hamburger */}
  <div className="mr-2"> {/* Moved left */}
    {menuOpen ? (
      <FiX
        className="text-white text-2xl cursor-pointer"
        onClick={() => setMenuOpen(false)}
      />
    ) : (
      <FiMenu
        className="text-white text-2xl cursor-pointer"
        onClick={() => setMenuOpen(true)}
      />
    )}
  </div>
</div>

      {menuOpen && (
  <div className="absolute top-[60px] left-0 w-full bg-black text-white md:hidden">
    <div className="flex flex-col items-center gap-6 py-6 text-lg">
      <span
        className="cursor-pointer hover:text-gray-300"
        onClick={() => setMenuOpen(false)}
      >
        Home
      </span>
      <span
        className="cursor-pointer hover:text-gray-300"
        onClick={() => setMenuOpen(false)}
      >
        Features
      </span>
      <span
        className="cursor-pointer hover:text-gray-300"
        onClick={() => setMenuOpen(false)}
      >
        Gallery
      </span>
      <span
        className="cursor-pointer hover:text-gray-300"
        onClick={() => setMenuOpen(false)}
      >
        Pricing
      </span>
    </div>
  </div>
)}
    </header>
  
  );
};