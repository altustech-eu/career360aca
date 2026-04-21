import React, { useState, useEffect } from 'react';
import { BiBookOpen } from 'react-icons/bi'; 
import { HiOutlineUserCircle } from 'react-icons/hi2'; 

const AcademyHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? 'bg-[#0e63ed] shadow-2xl py-2' : 'bg-white border-b border-gray-100 py-4'
      }`}
    >
      <div className="max-w-[1600px] mx-auto flex items-center justify-between px-8 md:px-16">
        
        {/* Left Section: Logo - Minimalist approach */}
        <div className="flex items-center gap-2">
          <div className={`transition-colors duration-300 ${isScrolled ? 'text-white' : 'text-[#0e63ed]'}`}>
            <BiBookOpen className="h-8 w-8" />
          </div>
          <div className={`flex flex-col leading-none transition-colors duration-300 ${isScrolled ? 'text-white' : 'text-slate-900'}`}>
            <span className="text-2xl font-light tracking-tighter uppercase">Career360</span>
            <span className="text-[10px] font-bold tracking-[0.4em] uppercase opacity-70">Academy</span>
          </div>
        </div>

        {/* Right Section: Navigation & Actions */}
        <div className="flex items-center gap-12">
          <nav className="hidden lg:flex items-center gap-10">
            {[
              { name: 'Explore Courses', link: '/courses' },
              { name: 'Mentorship', link: '/mentors' },
              { name: 'Placements', link: '/placements' },
              { name: 'Enterprise', link: '/enterprise' }
            ].map((item) => (
              <a 
                key={item.name} 
                href={item.link} 
                className={`text-[15px] font-light tracking-wide transition-all duration-300 ${
                  isScrolled 
                    ? 'text-white/80 hover:text-white' 
                    : 'text-slate-500 hover:text-[#0e63ed]'
                }`}
              >
                {item.name}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-8">
            {/* Student Portal Trigger */}
            <a 
              href="/login" 
              className={`text-xs font-normal uppercase tracking-widest transition-colors ${
                isScrolled ? 'text-white/70 hover:text-white' : 'text-slate-400 hover:text-slate-900'
              }`}
            >
              Sign In
            </a>

            {/* CTA Button: Thinner font weight and cleaner borders */}
            <button className={`group relative flex items-center gap-3 rounded-full border px-7 py-2.5 text-[13px] font-normal tracking-widest uppercase transition-all duration-500 ${
              isScrolled 
                ? 'bg-white text-[#0e63ed] border-white hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]' 
                : 'bg-[#0e63ed] text-white border-[#0e63ed] hover:bg-slate-900 hover:border-slate-900'
            }`}>
              <span>Get Started</span>
              <div className="w-1.5 h-1.5 rounded-full bg-current group-hover:scale-150 transition-transform" />
            </button>

            {/* Profile */}
            <a href="/profile" className={`transition-all duration-300 ${
              isScrolled ? 'text-white hover:scale-110' : 'text-slate-300 hover:text-[#0e63ed]'
            }`}>
              <HiOutlineUserCircle className="h-8 w-8 stroke-1" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default AcademyHeader;