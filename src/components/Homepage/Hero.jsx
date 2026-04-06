import React from 'react';
import { Search, ChevronDown ,ArrowRight } from 'lucide-react';
import GrbGraduatePortrait from '../../assests/hero-image.png'; 

const Hero = () => {
  const tags = [
    "Marketing", "Computer Science", "Graduate Scheme", 
    "Sustainability", "Hybrid Working", "Diversity", "Artificial Intelligence"
  ];

  return (
    <section className="relative w-full h-[900px] min-h-[800px] flex items-center bg-white overflow-hidden font-sans">
      
      {/* 1. ASYMMETRIC BACKGROUND PANELS */}
      <div className="absolute inset-0 flex z-0 pointer-events-none">
        {/* The Blue Left Panel is actually smaller (approx 30%) */}
        <div className="w-[50%] h-full bg-[#0e63ed]"></div>
        <div className="w-[70%] h-full bg-[#f9fafb]"></div>
      </div>

      {/* 2. CENTERED GRADUATE PORTRAIT WITH SLOW ZOOM */}
      <div className="absolute inset-0 z-10 flex justify-center pointer-events-none">
        <div className="relative h-full w-full max-w-[1400px]">
          <img 
            src={GrbGraduatePortrait} 
            alt="Graduate" 
            className="absolute left-[25%] h-full w-auto object-cover grayscale brightness-110 contrast-115 mix-blend-multiply animate-zoom-slow"
          />
        </div>
      </div>

      {/* 3. FOREGROUND CONTENT LAYER */}
      <div className="relative z-30 w-full max-w-[1800px] mx-auto px-8 md:px-16 lg:px-24 flex flex-col justify-center h-full items-start">
        
        <div className="max-w-3xl w-full">
          {/* Main Headline with tight tracking */}
          <h1 className="text-5xl md:text-[80px] font-black text-white md:text-slate-900 leading-[0.8] tracking-tighter mb-12 drop-shadow-sm">
            <span className="text-white">Get the career</span> <br />
            <span className="md:text-slate-900">you deserve</span>
          </h1>

          {/* COMPLEX SEARCH BAR UI */}
          <div className="flex flex-col md:flex-row items-center bg-white rounded-2xl md:rounded-full p-2 shadow-[0_20px_50px_rgba(0,0,0,0.1)] w-full max-w-4xl mb-10 border border-gray-100">
            {/* Field 1: Keywords */}
            <div className="flex-grow flex items-center w-full">
              <input 
                type="text" 
                placeholder="Search jobs" 
                className="w-full bg-transparent pl-8 pr-4 py-5 text-gray-800 outline-none text-xl font-bold placeholder:text-gray-300"
              />
            </div>
            
            {/* Divider */}
            <div className="hidden md:block h-10 w-[1.5px] bg-gray-100"></div>
            
            {/* Field 2: Job Type Dropdown */}
            <div className="relative flex items-center group w-full md:w-[220px]">
              <select className="w-full bg-transparent pl-8 pr-12 py-5 text-[#0e63ed] font-bold text-xl outline-none appearance-none cursor-pointer z-10">
                <option>Graduate</option>
                <option>Internship</option>
                <option>Placement</option>
              </select>
              <ChevronDown className="absolute right-6 text-[#0e63ed] pointer-events-none w-6 h-6 transition-transform group-hover:translate-y-0.5" />
            </div>

            {/* Field 3: Search Action */}
            <button className="w-full md:w-auto bg-[#0e63ed] p-5 rounded-xl md:rounded-full text-white hover:bg-blue-700 transition-all flex items-center justify-center md:ml-2 group">
              <Search size={30} strokeWidth={3} className="group-hover:scale-110 transition-transform" />
            </button>
          </div>

          {/* TRENDING TAGS */}
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <button 
                key={tag} 
                className="bg-[#001a33] hover:bg-[#0e63ed] text-white text-[11px] font-bold uppercase tracking-widest px-6 py-2.5 rounded-full transition-all hover:-translate-y-0.5"
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* 4. SIGNATURE BRAND ELEMENTS */}
      
      {/* The Rotating "Who is Hiring" Badge (Bottom Right) */}
      <div className="absolute bottom-12 right-12 z-40 hidden lg:block">
        <div className="relative w-32 h-32 animate-spin-slow">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <path id="circlePath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="transparent" />
            <text className="text-[9px] font-black uppercase tracking-[0.2em] fill-slate-900">
              <textPath xlinkHref="#circlePath">
                • WHO IS HIRING • WHO IS HIRING • WHO IS HIRING 
              </textPath>
            </text>
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <ArrowRight className="w-6 h-6 text-slate-900 -rotate-45" />
          </div>
        </div>
      </div>

      {/* The Yellow/Blue Slatted Circle Badge */}
      <div className="absolute left-[27%] bottom-16 w-32 h-32 hidden xl:flex items-center justify-center z-40">
        <div className="w-full h-full bg-[#ccff00] rounded-full overflow-hidden flex flex-col justify-center items-center -rotate-45 shadow-lg border-4 border-white">
          {[...Array(7)].map((_, i) => (
            <div key={i} className="w-[180%] h-2.5 bg-[#0e63ed] my-[3px] rounded-full"></div>
          ))}
        </div>
      </div>

      {/* Vertical Side Text */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 z-30 hidden lg:block">
        <div className="rotate-90 origin-right pr-12">
          <span className="text-[13px] font-black uppercase text-slate-900 tracking-[0.4em] whitespace-nowrap opacity-100">
             Early talent experts
          </span>
        </div>
      </div>

      <style jsx>{`
        @keyframes zoom-slow {
          0% { transform: scale(1.05) translateX(0px); }
          100% { transform: scale(1.12) translateX(10px); } 
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-zoom-slow {
          animation: zoom-slow 20s ease-in-out infinite alternate;
        }
        .animate-spin-slow {
          animation: spin-slow 12s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;