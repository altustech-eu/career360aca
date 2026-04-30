import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Share2, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

// Exact import format as requested
import office1 from "../../assests/Ausbildung student-.webp";
import office2 from "../../assests/Ausbildung student-.webp";
import office3 from "../../assests/Ausbildung student-.webp";

const projects = [
  {
    id: "01",
    title: "A NEW MODEL",
    subTitle: "LA Stadium & Entertainment District",
    img: office1
  },
  {
    id: "02",
    title: "URBAN ZEN",
    subTitle: "Tokyo Corporate Wellness Center",
    img: office2
  },
  {
    id: "03",
    title: "SKY GARDENS",
    subTitle: "London Sustainable Living Hub",
    img: office3
  }
];

export default function OfficePhoto() {
  const [index, setIndex] = useState(0);
  const accentColor = "#0e63ed"; 
  const active = projects[index];

  const nextSlide = () => setIndex((prev) => (prev + 1) % projects.length);
  const prevSlide = () => setIndex((prev) => (prev - 1 + projects.length) % projects.length);

  return (
    <section className="bg-[#050505] min-h-screen flex items-center justify-center font-sans overflow-hidden py-20 relative select-none">
      
      {/* 1. LEFT SIDE NAVIGATION */}
      <div className="absolute left-10 top-1/2 -translate-y-1/2 flex flex-col items-center gap-8 z-30">
        <div className="flex flex-col gap-5">
          {projects.map((_, i) => (
            <button 
              key={i} 
              onClick={() => setIndex(i)}
              className={`w-1.5 h-1.5 rounded-full transition-all duration-500 ${i === index ? 'bg-white scale-150 border-[3px] border-white/20' : 'bg-white/20 hover:bg-white/50'}`} 
            />
          ))}
        </div>
        <button className="w-10 h-10 rounded-full bg-[#1a1a1a] flex items-center justify-center text-white/50 hover:bg-[#0e63ed] hover:text-white transition-all shadow-xl">
          <Share2 size={14} />
        </button>
      </div>

      <div className="max-w-[1400px] w-full mx-auto px-6 relative flex items-center justify-center">
        
        {/* 2. BACKGROUND BANNER BLOCK */}
        <div className="relative w-full max-w-5xl h-[350px] border border-white/5 bg-[#0A0A0A] overflow-hidden flex items-center">
          <AnimatePresence mode="wait">
            <motion.img 
              key={active.id + '-bg'}
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.1 }}
              exit={{ opacity: 0 }}
              src={active.img} 
              className="absolute inset-0 w-full h-full object-cover grayscale"
            />
          </AnimatePresence>
          
          <div className="relative z-10 px-12 md:px-20 w-full">
            <motion.span 
              key={`label-${index}`}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              style={{ color: accentColor }}
              className="text-[10px] font-black uppercase tracking-[0.4em] mb-4 block"
            >
              Next Project
            </motion.span>
            
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-6xl md:text-8xl font-black text-white uppercase tracking-tighter leading-none mb-4">
                  {active.title}
                </h2>
                <p className="text-white/30 text-[10px] font-bold uppercase tracking-[0.3em] mb-12">
                  {active.subTitle}
                </p>
              </motion.div>
            </AnimatePresence>

            <div className="flex items-center gap-6 group cursor-pointer w-fit">
               <span className="text-white text-[9px] font-black uppercase tracking-[0.4em] group-hover:text-[#0e63ed] transition-colors">
                 View Story
               </span>
               <div className="flex items-center">
                  <div className="h-[1px] w-12 bg-white/20 relative overflow-hidden">
                    <div 
                      className="absolute inset-0 -translate-x-full group-hover:translate-x-0 transition-transform duration-500" 
                      style={{ backgroundColor: accentColor }}
                    />
                  </div>
                  <ArrowRight size={16} className="text-white/20 group-hover:text-[#0e63ed] transition-colors ml-2" /> 
               </div>
            </div>
          </div>
        </div>

        {/* 3. THE CIRCULAR MAGNIFIER */}
        <div className="absolute right-[5%] lg:right-[10%] z-20">
          <AnimatePresence mode="wait">
            <motion.div 
              key={active.id + '-lens'}
              initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              exit={{ opacity: 0, scale: 1.1, rotate: 10 }}
              transition={{ type: "spring", damping: 20 }}
              className="w-[320px] h-[320px] md:w-[480px] md:h-[480px] rounded-full border-[15px] border-[#0A0A0A] shadow-[0_0_80px_rgba(0,0,0,0.8)] overflow-hidden group"
            >
              <img 
                src={active.img} 
                className="w-full h-full object-cover contrast-125 brightness-110 transition-transform duration-[3s] group-hover:scale-110"
                alt="Project Lens"
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Slide Controls */}
        <div className="absolute bottom-[-60px] flex gap-4">
           <button onClick={prevSlide} className="p-2 text-white/20 hover:text-white transition-colors border border-white/5 hover:border-white/20 rounded-full">
              <ChevronLeft size={20} />
           </button>
           <button onClick={nextSlide} className="p-2 text-white/20 hover:text-white transition-colors border border-white/5 hover:border-white/20 rounded-full">
              <ChevronRight size={20} />
           </button>
        </div>

      </div>
    </section>
  );
}