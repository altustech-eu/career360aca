import React, { useState, useEffect } from 'react';
import { BiWinkSmile } from 'react-icons/bi'; 
import { HiOutlineUserCircle } from 'react-icons/hi2'; 

const GrbHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  // Listen to scroll events
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#0e63ed] shadow-lg' : 'bg-white border-b border-gray-200'
      }`}
    >
      <div className="flex h-[80px] w-full items-center justify-between overflow-hidden">
        
        {/* Left Section: Logo */}
        {/* We hide the angled background effect when scrolled to keep the bar clean */}
        <div className={`relative flex h-full items-center pl-8 pr-16 transition-all duration-300 ${
          isScrolled ? 'bg-transparent' : 'bg-[#0e63ed] after:absolute after:top-0 after:right-[-40px] after:h-full after:w-[80px] after:origin-top-left after:-skew-x-[25deg] after:bg-[#0e63ed] after:content-[""]'
        }`}>
          <div className="flex items-baseline text-white z-10">
            <span className="text-4xl font-black tracking-tight font-sans">Career360.</span>
          </div>
        </div>

        {/* Middle Section: Texture Background - Hidden when scrolled */}
        <div className={`relative flex-grow h-full overflow-hidden transition-opacity duration-300 ${
          isScrolled ? 'opacity-0' : 'opacity-100'
        }`}>
          {!isScrolled && (
            <img 
              src="https://www.transparenttextures.com/patterns/clean-gray-paper.png" 
              alt="Texture"
              className="absolute inset-0 h-full w-full object-cover opacity-20 grayscale"
            />
          )}
        </div>

        {/* Right Section: Navigation */}
        <div className={`flex h-full items-center gap-10 px-8 transition-colors duration-300 ${
          isScrolled ? 'bg-transparent' : 'bg-white'
        }`}>
          <nav className="flex items-center gap-8 font-medium">
            {['Job search', 'Job seekers', 'Recruiters', 'About us'].map((item) => (
              <a 
                key={item} 
                href="/" 
                className={`text-[17px] transition-colors ${
                  isScrolled ? 'text-white hover:text-blue-200' : 'text-gray-800 hover:text-[#0e63ed]'
                }`}
              >
                {item}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-6">
            {/* Join Button: Changes style when scrolled to stay visible on blue */}
            <button className={`flex items-center gap-2.5 rounded-full border-2 px-8 py-3 text-[17px] font-bold shadow-md transition-all ${
              isScrolled 
                ? 'bg-white text-[#0e63ed] border-white hover:bg-blue-50' 
                : 'bg-[#0e63ed] text-white border-white hover:bg-[#0c56d1]'
            }`}>
              <span>Join now</span>
              <BiWinkSmile className="h-6 w-6" />
            </button>

            {/* User Icon: Becomes white when background is blue */}
            <a href="/" className={`transition-colors ${
              isScrolled ? 'text-white hover:text-blue-100' : 'text-gray-600 hover:text-gray-900'
            }`}>
              <HiOutlineUserCircle className="h-10 w-10" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default GrbHeader;