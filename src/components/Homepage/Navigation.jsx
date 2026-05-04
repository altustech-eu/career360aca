import React, { useState, useEffect } from 'react';
import { BiBookOpen, BiChevronDown } from 'react-icons/bi'; 
import { HiOutlineUserCircle } from 'react-icons/hi2'; 

const AcademyHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [language, setLanguage] = useState('En'); // Default language is English

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Function to toggle between languages
  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'En' ? 'De' : 'En'));
  };

  const navLinks = [
    { 
      name: 'Academy', 
      link: '/about-academy',
      dropdown: ['Academy Overview', 'Success Stories', 'Upcoming Batches', 'Demo Class CTA']
    },
    { 
      name: 'German Courses', 
      link: '/courses',
      dropdown: ['A1 German', 'A2 German', 'B1 German', 'B2 German', 'Medical German', 'Ausbildung German', 'Job Interview German', 'Fast-Track German']
    },
    { 
      name: 'Learning Modes', 
      link: '/learning-modes',
      dropdown: ['Online Classes', 'Classroom Training', 'Hybrid Training', 'School-Based Training', 'Native Speaker Sessions', 'Weekend Batches', 'Evening Batches']
    },
    { 
      name: 'Programs', 
      link: '/programs',
      dropdown: ['German for Ausbildung', 'German for Nurses', 'German for Doctors', 'German for IT Jobs', 'German for Commerce Students', 'German for School Students', 'German for Working Professionals']
    },
    { 
      name: 'Ausbildung Pathway', 
      link: '/ausbildung-pathway',
      dropdown: ['What is Ausbildung', 'Eligibility', 'Career Options', 'Timeline', 'German Level Required', 'Documents', 'Visa Support', 'Placement Support']
    },
    { 
      name: 'Student Journey', 
      link: '/journey',
      dropdown: ['Counselling', 'Level Assessment', 'Admission', 'Batch Allocation', 'A1 to B1/B2 Training', 'Internal Assessment', 'Exam Preparation', 'Interview Preparation', 'Visa Documentation', 'Pre-Departure', 'Post-Landing Support']
    },
    { 
      name: 'Exams & Certification', 
      link: '/exams',
      dropdown: ['Goethe Exam Prep', 'TELC Exam Prep', 'ÖSD Exam Prep', 'Internal Mock Tests', 'Speaking Practice', 'Exam Calendar', 'Exam Booking Support']
    },
    { 
      name: 'Trainers', 
      link: '/trainers',
      dropdown: ['Native German Speakers', 'Indian German Trainers', 'Trainer Quality Assurance', 'Speaking Mentors', 'Examiner Feedback', 'Faculty Profiles']
    },
    { 
      name: 'Resources', 
      link: '/resources',
      dropdown: ['German Level Guide', 'Free Worksheets', 'Vocabulary Bank', 'Grammar Notes', 'Speaking Practice Videos', 'Ausbildung Guide', 'Visa Checklist', 'Interview Questions']
    },
    { 
      name: 'Success Stories', 
      link: '/success-stories',
      dropdown: ['Student Testimonials', 'Parent Testimonials', 'Ausbildung Success', 'Nursing Success', 'Before/After German Speaking Progress']
    },
    { 
      name: 'Pricing', 
      link: '/pricing',
      dropdown: ['Course Fees', 'A1–B1 Package', 'A1–B2 Package', 'Ausbildung Package', 'School Partnership Package', 'EMI / Stage-wise Payment']
    },
    { 
      name: 'Contact', 
      link: '/contact',
      dropdown: ['Book Counselling', 'WhatsApp', 'Call Back', 'Campus Location', 'Partner Schools', 'Enquiry Form']
    }
  ];

  return (
    <header 
      className={`sticky top-0 w-full z-50 transition-all duration-500 font-sans border-b bg-white border-slate-100 ${
        isScrolled ? 'shadow-sm py-2' : 'py-3'
      }`}
    >
      <div className="max-w-[1700px] mx-auto flex items-center justify-between px-6 md:px-12">
        
        {/* Left Section: Logo */}
        <a href="/" className="flex items-center gap-3 shrink-0 group cursor-pointer">
          <div className="text-[rgb(231,191,60)] transition-transform duration-500 group-hover:scale-110">
            <BiBookOpen className="h-7 w-7" />
          </div>
          <div className="flex flex-col leading-none text-slate-900">
            <span className="text-[15px] font-black tracking-widest uppercase">Career360</span>
            <span className="text-[9px] font-bold tracking-[0.25em] text-[rgb(231,191,60)] opacity-80 uppercase mt-0.5">
              Academy
            </span>
          </div>
        </a>

        {/* Center Section: Main Navigation */}
        <nav className="hidden xl:flex items-center gap-4">
          {navLinks.map((item) => (
            <div key={item.name} className="group relative py-3">
              <a 
                href={item.link} 
                className="flex items-center gap-0.5 text-[8px] font-black tracking-[0.15em] text-slate-900 uppercase transition-colors duration-300 hover:text-[rgb(231,191,60)]"
              >
                {item.name}
                {item.dropdown && <BiChevronDown className="opacity-60 group-hover:rotate-180 transition-transform duration-300 text-slate-900" />}
              </a>

              {/* Dropdown Menu */}
              {item.dropdown && (
                <div className="absolute top-full left-0 mt-3 w-64 bg-white border border-slate-100 shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-3 group-hover:translate-y-0 rounded-2xl p-2 z-50 max-h-[400px] overflow-y-auto no-scrollbar">
                  {item.dropdown.map((sub) => (
                    <a 
                      key={sub} 
                      href="/" 
                      className="w-full text-left px-4 py-3 rounded-xl text-[9px] text-slate-600 font-bold tracking-wider hover:bg-[#A3E635]/10 hover:text-[rgb(231,191,60)] transition-all duration-300 block"
                    >
                      {sub}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Right Section: Actions */}
        <div className="flex items-center gap-6 shrink-0">
          
          {/* Dual Language Toggle Button */}
          <button 
            onClick={toggleLanguage}
            className="text-[9px] font-black uppercase tracking-[0.2em] text-slate-500 hover:text-[rgb(231,191,60)] transition-colors duration-300 flex items-center gap-1 bg-slate-100 px-3 py-1.5 rounded-full border border-slate-200"
          >
             <span className={language === 'En' ? 'text-[rgb(231,191,60)] font-black' : 'text-slate-400'}>En</span>
             <span className="text-slate-300">/</span>
             <span className={language === 'De' ? 'text-[rgb(231,191,60)] font-black' : 'text-slate-400'}>De</span>
          </button>

          <a 
            href="/profile" 
            className="text-slate-900 hover:text-[rgb(231,191,60)] transition-all duration-300 flex items-center justify-center"
          >
            <HiOutlineUserCircle className="h-6 w-6 stroke-[1.5]" />
          </a>
        </div>
      </div>
    </header>
  );
};

export default AcademyHeader;