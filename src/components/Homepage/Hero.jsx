import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Home } from 'lucide-react';
import VickyTsuiImage from '../../assests/hero-image.png'; 

const teamMembers = [
  { name: "Chang Qiu Sheng", role: "CEO", img: VickyTsuiImage, bio: "Strategic leader with over 20 years of experience in aviation management and corporate scaling." },
  { name: "Vicky Tsui", role: "VP of Sales & Marketing", img: VickyTsuiImage, bio: "Ms. Tsui oversees business development, management and marketing in the Asia Pacific region. She plays a leading role in setting up customised business jet programs, providing customers with a flexible high-end service tailored to their specific needs." },
  { name: "Yongyi Zhang", role: "VP of Flight Operation", img: VickyTsuiImage, bio: "Expert in global flight logistics, safety protocols, and international aviation compliance." },
  { name: "Bob Li", role: "VP of Operations", img: VickyTsuiImage, bio: "Driving operational excellence through streamlined workflows and innovative resource management." },
  { name: "David Du", role: "Executive VP", img: VickyTsuiImage, bio: "Spearheading global partnerships and long-term infrastructure development strategies." },
  { name: "Zoe Zhao", role: "VP of Finance", img: VickyTsuiImage, bio: "Managing fiscal health and strategic investments to ensure sustainable corporate growth." },
  { name: "Nicole Chen", role: "VP of HR", img: VickyTsuiImage, bio: "Dedicated to building high-performance teams and fostering a world-class corporate culture." }
];

const Hero = () => {
  const [activeIdx, setActiveIdx] = useState(1);

  const nextMember = () => setActiveIdx((prev) => (prev + 1) % teamMembers.length);
  const prevMember = () => setActiveIdx((prev) => (prev - 1 + teamMembers.length) % teamMembers.length);

  return (
    <section className="relative w-full min-h-screen bg-[#f8fafc] flex flex-col font-sans overflow-hidden">
      
      {/* 1. TOP NAVIGATION */}
      <nav className="w-full max-w-[90rem] mx-auto px-6 md:px-12 pt-8 flex items-center gap-2 text-[10px] md:text-xs text-slate-400 font-medium z-30">
        <Home className="w-3 h-3" />
        <span className="opacity-50">/</span>
        <span className="text-slate-600 tracking-wide uppercase">Management Team</span>
      </nav>

      {/* 2. MAIN CONTENT AREA */}
      <div className="flex-grow flex flex-col lg:flex-row items-center relative w-full max-w-[90rem] mx-auto px-6 md:px-12 pb-32 lg:pb-0">
        
        {/* Navigation Arrows - Only visible on Large Screens */}
        <button 
          onClick={prevMember}
          className="hidden lg:flex absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 items-center justify-center text-slate-300 hover:text-slate-900 transition-colors z-30"
        >
          <ChevronLeft className="w-8 h-8 stroke-[1px]" />
        </button>
        <button 
          onClick={nextMember}
          className="hidden lg:flex absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 items-center justify-center text-slate-300 hover:text-slate-900 transition-colors z-30"
        >
          <ChevronRight className="w-8 h-8 stroke-[1px]" />
        </button>

        {/* Text Side */}
        <div className="w-full lg:w-1/2 pt-12 lg:pt-0 text-center lg:text-left z-10 order-2 lg:order-1">
          <div className="overflow-hidden">
            <h1 className="text-4xl md:text-6xl lg:text-8xl font-extralight text-slate-900 mb-2 tracking-tighter animate-reveal-up">
              {teamMembers[activeIdx].name}
            </h1>
          </div>
          <h2 className="text-sm md:text-lg lg:text-xl text-blue-600 font-medium mb-6 lg:mb-10 tracking-[0.2em] uppercase italic">
            {teamMembers[activeIdx].role}
          </h2>
          
          <div className="max-w-md mx-auto lg:mx-0">
            <p className="text-sm md:text-base leading-relaxed text-slate-500 font-light text-center lg:text-justify opacity-80 transition-opacity duration-500">
              {teamMembers[activeIdx].bio}
            </p>
          </div>
        </div>

        {/* Image Side */}
        <div className="w-full lg:w-1/2 h-[45vh] lg:h-[75vh] flex items-end justify-center relative order-1 lg:order-2">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#f8fafc] lg:hidden z-10 h-full pointer-events-none" />
          <img 
            key={activeIdx}
            src={teamMembers[activeIdx].img} 
            alt={teamMembers[activeIdx].name} 
            className="h-full w-auto object-contain z-0 select-none animate-image-entry drop-shadow-2xl"
          />
        </div>
      </div>

      {/* 3. TEAM SCRUBBER (Bottom Navigation) */}
      <div className="fixed lg:absolute bottom-0 w-full h-24 lg:h-36 flex items-center bg-white/70 backdrop-blur-xl border-t border-slate-200/50 z-40">
        <div className="w-full overflow-x-auto no-scrollbar scroll-smooth">
          <div className="flex gap-6 md:gap-10 items-center px-6 md:px-12 min-w-max mx-auto justify-start lg:justify-center">
            {teamMembers.map((member, idx) => (
              <button 
                key={idx} 
                onClick={() => setActiveIdx(idx)}
                className={`flex flex-col items-center group transition-all duration-300 ${idx === activeIdx ? 'scale-105' : 'opacity-40 grayscale hover:opacity-100 hover:grayscale-0'}`}
              >
                <div className={`w-10 h-10 lg:w-14 lg:h-14 rounded-full overflow-hidden border-2 mb-2 transition-all ${idx === activeIdx ? 'border-blue-500 ring-4 ring-blue-50' : 'border-transparent group-hover:border-slate-300'}`}>
                   <img src={member.img} alt={member.name} className="w-full h-full object-cover" />
                </div>
                <span className={`text-[8px] lg:text-[10px] font-bold uppercase tracking-tighter whitespace-nowrap ${idx === activeIdx ? 'text-slate-900' : 'text-slate-400'}`}>
                  {member.name}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }

        @keyframes reveal-up {
          from { transform: translateY(100%); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }

        @keyframes image-entry {
          from { opacity: 0; transform: scale(0.95) translateX(20px); }
          to { opacity: 1; transform: scale(1) translateX(0); }
        }

        .animate-reveal-up {
          animation: reveal-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .animate-image-entry {
          animation: image-entry 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>
    </section>
  );
};

export default Hero;