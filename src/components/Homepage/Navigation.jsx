import React, { useState, useEffect } from 'react';
import { BiBookOpen, BiChevronDown } from 'react-icons/bi'; 
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

  const navLinks = [
    { 
      name: 'Academy', 
      link: '/about-academy',
      dropdown: ['Office Gallery', 'Training Center', 'Exam Hall', 'University Admissions', 'Recruitment Drives', 'Interviews', 'Events', 'Success Stories', 'Partnerships', 'Certifications']
    },
    { 
      name: 'Training', 
      link: '/training',
      dropdown: ['All Training Programs', 'Certification Hub', 'Live Classes']
    },
    { 
      name: 'Study & Vocational Training', 
      link: '/programs-hub' 
    },
    { 
      name: 'Pricing', 
      link: '/pricing',
      dropdown: ['Pricing & Financing', 'Scholarships', 'Customised Quote Form']
    },
    { 
      name: 'Career Resources', 
      link: '/resources',
      dropdown: ['Resource Center', 'Mentors Hub', 'Mentor Profiles', 'Career Advice']
    },
    { 
      name: 'Jobs', 
      link: '/job-board' 
    }
  ];

  return (
    <header 
      className={`sticky top-0 w-full z-50 transition-all duration-500 font-sans ${
        isScrolled ? 'bg-[#0e63ed] shadow-2xl py-2' : 'bg-white border-b border-gray-100 py-3'
      }`}
    >
      <div className="max-w-[1700px] mx-auto flex items-center justify-between px-6 md:px-12">
        
        {/* Left Section: Logo */}
        <div className="flex items-center gap-2 shrink-0">
          <div className={`transition-colors duration-300 ${isScrolled ? 'text-white' : 'text-[#0e63ed]'}`}>
            <BiBookOpen className="h-8 w-8" />
          </div>
          <div className={`flex flex-col leading-none transition-colors duration-300 ${isScrolled ? 'text-white' : 'text-slate-900'}`}>
            <span className="text-xl font-light tracking-tighter uppercase">Career360</span>
            <span className="text-[9px] font-bold tracking-[0.3em] uppercase opacity-70">Academy</span>
          </div>
        </div>

        {/* Center Section: Main Navigation */}
        <nav className="hidden xl:flex items-center gap-6">
          {navLinks.map((item) => (
            <div key={item.name} className="group relative py-2">
              <a 
                href={item.link} 
                className={`flex items-center gap-1 text-[13px] font-medium tracking-tight transition-all duration-300 ${
                  isScrolled ? 'text-white/80 hover:text-white' : 'text-slate-600 hover:text-[#0e63ed]'
                }`}
              >
                {item.name}
                {item.dropdown && <BiChevronDown className="opacity-50 group-hover:rotate-180 transition-transform" />}
              </a>

              {/* Dropdown Menu */}
              {item.dropdown && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-white border border-gray-100 shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                  <div className="py-2">
                    {item.dropdown.map((sub) => (
                      <a 
                        key={sub} 
                        href="#" 
                        className="block px-4 py-2 text-[12px] text-slate-600 hover:bg-slate-50 hover:text-[#0e63ed] transition-colors"
                      >
                        {sub}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Right Section: Actions */}
        <div className="flex items-center gap-6 shrink-0">
          {/* Language Toggle */}
          <button className={`text-[11px] font-bold uppercase tracking-widest ${isScrolled ? 'text-white/70' : 'text-slate-400'}`}>
            En
          </button>

          <a 
            href="/login" 
            className={`text-[11px] font-semibold uppercase tracking-widest transition-colors ${
              isScrolled ? 'text-white/70 hover:text-white' : 'text-slate-400 hover:text-slate-900'
            }`}
          >
            Log In
          </a>

          {/* CTA: Join Live Class emphasis */}
          <button className={`group relative flex items-center gap-3 rounded-full border px-6 py-2 text-[11px] font-semibold tracking-widest uppercase transition-all duration-500 ${
            isScrolled 
              ? 'bg-white text-[#0e63ed] border-white' 
              : 'bg-[#0e63ed] text-white border-[#0e63ed] hover:bg-slate-900'
          }`}>
            <span>Live Classes</span>
            <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
          </button>

          <a href="/profile" className={`transition-all duration-300 ${
            isScrolled ? 'text-white hover:scale-110' : 'text-slate-300 hover:text-[#0e63ed]'
          }`}>
            <HiOutlineUserCircle className="h-7 w-7 stroke-1" />
          </a>
        </div>
      </div>
    </header>
  );
};

export default AcademyHeader;