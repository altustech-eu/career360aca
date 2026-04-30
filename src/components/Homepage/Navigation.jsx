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
      className={`sticky top-0 w-full z-50 transition-all duration-500 font-sans border-b ${
        isScrolled 
          ? 'bg-[#050505] border-white/5 py-3' 
          : 'bg-[#0A0A0A] border-white/5 py-4'
      }`}
    >
      <div className="max-w-[1700px] mx-auto flex items-center justify-between px-6 md:px-12">
        
        {/* Left Section: Logo */}
        <a href="/" className="flex items-center gap-3 shrink-0 group cursor-pointer">
          <div className="text-[rgb(231,191,60)] transition-transform duration-500 group-hover:scale-110">
            <BiBookOpen className="h-7 w-7" />
          </div>
          <div className="flex flex-col leading-none text-white">
            <span className="text-[15px] font-black tracking-widest uppercase">Career360</span>
            <span className="text-[8px] font-bold tracking-[0.25em] text-[rgb(231,191,60)] opacity-80 uppercase mt-0.5">
              Academy
            </span>
          </div>
        </a>

        {/* Center Section: Main Navigation */}
        <nav className="hidden xl:flex items-center gap-8">
          {navLinks.map((item) => (
            <div key={item.name} className="group relative py-3">
              <a 
                href={item.link} 
                className="flex items-center gap-1 text-[10px] font-black tracking-[0.2em] text-white/70 uppercase transition-colors duration-300 hover:text-[rgb(231,191,60)]"
              >
                {item.name}
                {item.dropdown && <BiChevronDown className="opacity-50 group-hover:rotate-180 transition-transform duration-300 text-[rgb(231,191,60)]" />}
              </a>

              {/* Dropdown Menu */}
              {item.dropdown && (
                <div className="absolute top-full left-0 mt-3 w-64 bg-[#111111] border border-white/10 shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-3 group-hover:translate-y-0 rounded-2xl p-2 z-50">
                  {item.dropdown.map((sub) => (
                    <button 
                      key={sub} 
                      onClick={() => window.location.href = '#'} 
                      className="w-full text-left px-4 py-3 rounded-xl text-[10px] text-white/60 font-medium tracking-wider hover:bg-[#A3E635]/10 hover:text-[rgb(231,191,60)] transition-all duration-300 block"
                    >
                      {sub}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Right Section: Actions */}
        <div className="flex items-center gap-6 shrink-0">
          {/* Language Toggle */}
          <button className="text-[9px] font-black uppercase tracking-[0.2em] text-white/50 hover:text-[rgb(231,191,60)] transition-colors duration-300">
            En
          </button>

          <a 
            href="/login" 
            className="text-[9px] font-black uppercase tracking-[0.2em] text-white/60 hover:text-[rgb(231,191,60)] transition-colors duration-300"
          >
            Log In
          </a>

          {/* CTA Button */}
          <button className="group relative flex items-center gap-2 rounded-full border border-white/10 px-6 py-2.5 text-[9px] font-black tracking-[0.2em] uppercase text-white bg-transparent hover:border-[rgb(231,191,60)] hover:bg-[rgb(231,191,60)] hover:text-black transition-all duration-500">
            <span>Live Classes</span>
            <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
          </button>

          <a 
            href="/profile" 
            className="text-white/70 hover:text-[rgb(231,191,60)] transition-all duration-300"
          >
            <HiOutlineUserCircle className="h-6 w-6 stroke-[1.5]" />
          </a>
        </div>
      </div>
    </header>
  );
};

export default AcademyHeader;