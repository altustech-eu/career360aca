import React, { useState, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, ChevronLeft, ChevronRight } from 'lucide-react';

// Exact import format for Trainer assets
import trainer1 from "../../assests/Trainers/Trainer1.webp";
import trainer2 from "../../assests/Trainers/Trainer2.webp";
import trainer3 from "../../assests/Trainers/Trainer4.webp";

// Carousel 1: Instructional Program Data
const instructors = [
  { 
    name: "German Language Team", 
    lessons: "A1 to C1 Level", 
    title: "Master German. Build Your Future.",
    desc: "Career360 Academy offers expert-led German Training, Ausbildung guidance, Healthcare career support, and Study Abroad assistance – all under one roof. Your journey to Germany starts here.",
    portrait: trainer1,
    bgColor: "#FFCC00", // Slide 1: Yellow (German Flag)
    btnText: "Start Language Training →",
    embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  { 
    name: "Ausbildung Team", 
    lessons: "Vocational Guide", 
    title: "Ausbildung & Study complete complete Guide", 
    desc: "From profile matching to visa support, we guide you through tuition-free university degrees and vocational training positions across Germany, integrated with essential B1/B2 German training.",
    portrait: trainer2,
    bgColor: "#DD0000", // Slide 2: Red (German Flag)
    btnText: "Plan Your Germany Journey →",
    embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  { 
    name: "Healthcare Team", 
    lessons: "Medical Modules", 
    title: "Medical German Professionals career guidance", 
    desc: "Specialized language training for doctors, nurses, and caregivers. Master medical terminology, patient communication, and clear the Kenntnisprüfung with expert-led structured courses.",
    portrait: trainer3,
    bgColor: "#1A1A1A", // Slide 3: Black (German Flag)
    btnText: "Explore Healthcare Track →",
    embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  }
];

const Hero = () => {
  const [activeCourse, setActiveCourse] = useState(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const active = instructors[activeCourse];

  const handleNext = useCallback(() => {
    setActiveCourse((prev) => (prev + 1) % instructors.length);
    setIsVideoPlaying(false);
  }, []);

  const handlePrev = useCallback(() => {
    setActiveCourse((prev) => (prev - 1 + instructors.length) % instructors.length);
    setIsVideoPlaying(false);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 10000); // 10 second auto-cycle
    return () => clearInterval(interval);
  }, [handleNext]);

  return (
    <section 
      style={{ backgroundColor: active.bgColor }}
      className="relative w-full min-h-[75vh] font-sans overflow-hidden flex flex-col justify-between transition-colors duration-1000 selection:bg-white selection:text-black py-10"
    >
      
      {/* 1. TOP SECTION: EDITORIAL HEADLINE & SEARCH */}
      <div className="w-full max-w-[1500px] mx-auto px-6 md:px-16 pt-6 pb-6 z-10 relative">
        <AnimatePresence mode="wait">
          <motion.div
             key={`headline-${activeCourse}`}
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             exit={{ opacity: 0, y: -20 }}
             transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
             className="text-center"
          >
            <div className="flex items-center justify-center gap-4 mb-4">
               <motion.span animate={{ scale: [1, 1.1, 1] }} transition={{ repeat: Infinity, duration: 2 }} className={`w-2 h-2 rounded-full ${activeCourse === 2 ? 'bg-[#FFCC00]' : 'bg-black'}`} />
               <span className={`text-[10px] font-black uppercase tracking-[0.3em] ${activeCourse === 2 ? 'text-white' : 'text-black'}`}>Career360 Intelligence</span>
            </div>

            <h1 className={`text-4xl md:text-6xl font-extrabold tracking-tight leading-none mb-4 ${activeCourse === 2 ? 'text-white' : 'text-black'}`}>
               Master German. Build Your Future in Germany.
            </h1>
            
            <p className={`text-xs md:text-sm font-medium max-w-2xl mx-auto mb-10 leading-relaxed ${activeCourse === 2 ? 'text-white/70' : 'text-black/70'}`}>
               Career360 Academy offers expert-led German Training, Ausbildung guidance, Healthcare career support, and Study Abroad assistance – all under one roof. Your journey to Germany starts here.
            </p>

            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-full max-w-md mx-auto p-1.5 flex gap-3">
               <button className="flex-grow bg-[#D91E1E] text-white px-6 py-3 font-extrabold text-[11px] tracking-wide rounded-full hover:bg-slate-900 transition-all shadow-md">
                 Course Search
               </button>
               <button className="bg-white text-black px-6 py-3 rounded-full font-bold text-[11px] tracking-wide hover:bg-[#FACC15] transition-all">
                 Explore Programs
               </button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* 2. BOTTOM SECTION: 60/40 SEARCH & VIDEO */}
      <div className="grid grid-cols-1 lg:grid-cols-12 h-auto w-full items-end mt-4 max-w-[1500px] mx-auto px-6 md:px-16 gap-6 relative z-10">
        
        {/* Block 1: Left Side Search Info Module */}
        <div className="lg:col-span-5 h-full min-h-[320px] md:min-h-[220px] flex flex-col justify-center p-8 md:p-10 transition-all duration-1000 relative overflow-hidden"
             style={{ backgroundColor: active.bgColor }}
        >
             {/* Search Content */}
             <AnimatePresence mode="wait">
                <motion.div
                   key={`sub-${activeCourse}`}
                   initial={{ opacity: 0, x: -20 }}
                   animate={{ opacity: 1, x: 0 }}
                   exit={{ opacity: 0, x: 20 }}
                   transition={{ duration: 0.6 }}
                   className="text-white"
                >
                    <p className="text-[9px] font-black uppercase tracking-[0.4em] mb-3 text-white/60">Course Search</p>
                    
                    <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight leading-none mb-6">
                       {active.lessons.split(' ')[0]} <br/> 
                       <span className="italic font-light text-white/90">{active.lessons.split(' ').slice(1).join(' ')}</span>
                    </h3>
                    
                    {/* Search Input Box */}
                    <div className="relative w-full max-w-sm mb-4">
                      <input 
                        type="text" 
                        placeholder="Search programs and modules..." 
                        className="w-full px-4 py-3 text-[11px] font-medium text-slate-900 bg-white border border-slate-300 focus:outline-none focus:border-white"
                        style={{ borderRadius: "0px" }}
                      />
                    </div>
                    
                    <p className="text-[10px] font-light leading-relaxed max-w-sm text-white/60">
                       Find out more about how we integrate intensive German training into your chosen {active.name.toLowerCase()}.
                    </p>
                </motion.div>
             </AnimatePresence>

             {/* Bottom Navigation Indicators */}
             <div className="flex justify-between items-center pt-5 border-t" style={{ borderColor: "rgba(0,0,0,0.05)" }}>
               <a href="/programs" className={`text-[8px] font-black uppercase tracking-widest transition-all ${activeCourse === 2 ? 'text-white hover:text-yellow-400' : 'text-black hover:text-[#0e63ed]'}`}>
                 Explore all pathways
               </a>
               <div className="flex gap-1.5">
                 {[0, 1, 2].map((dot) => (
                   <div 
                     key={dot}
                     className={`w-1 h-1 rounded-full transition-all duration-300 ${activeCourse === dot ? 'bg-white w-3' : 'bg-white/30'}`}
                   />
                 ))}
               </div>
             </div>
        </div>

        {/* Block 2: Right Side Video Player (Spans 7 columns) */}
        <div className="lg:col-span-7 bg-white/95 backdrop-blur-xl p-6 md:p-8 rounded-3xl relative min-h-[320px] md:min-h-[360px] flex flex-col justify-between border border-white/10">
          
          <div className="flex items-center justify-between mb-4 border-b border-slate-50 pb-3">
             <div>
               <p className="text-[10px] text-[#0e63ed] font-black uppercase tracking-[0.2em]">Live Learning</p>
               <h4 className="text-xs font-bold text-slate-900 mt-0.5">Instructor Session: {active.name}</h4>
             </div>
             
             {/* Slider Controls */}
             <div className="flex gap-3 bg-slate-50 p-2 rounded-full border border-slate-100 shadow-inner">
               <ChevronLeft onClick={handlePrev} className="w-4 h-4 cursor-pointer text-slate-500 hover:text-[#0e63ed] transition-colors" />
               <ChevronRight onClick={handleNext} className="w-4 h-4 cursor-pointer text-slate-500 hover:text-[#0e63ed] transition-colors" />
             </div>
          </div>

          <div className="relative aspect-video w-full rounded-2xl overflow-hidden group border border-slate-100 flex-grow">
             {isVideoPlaying ? (
                <iframe
                    src={`${active.embedUrl}?autoplay=1`}
                    title="Video Player"
                    className="absolute inset-0 w-full h-full object-cover"
                    frameBorder="0"
                    allow="autoplay; encrypted-media; picture-in-picture"
                    allowFullScreen
                />
             ) : (
                <div className="absolute inset-0 w-full h-full flex items-center justify-center cursor-pointer bg-slate-50" onClick={() => setIsVideoPlaying(true)}>
                   <div className="absolute inset-0 bg-black/5" />
                   <div className="w-12 h-12 rounded-full bg-[#0e63ed] flex items-center justify-center text-white relative z-10 shadow-lg transition-transform hover:scale-110">
                      <Play size={20} fill="currentColor" />
                   </div>
                </div>
             )}
          </div>
        </div>

      </div>

      {/* Decorative Background Text (Faded) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-5 z-0 flex gap-2">
         <span className="font-black text-[120px] text-black">GER</span>
         <span className="font-black text-[120px] text-black">DE</span>
      </div>

      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  );
};

export default Hero;