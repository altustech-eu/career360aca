import React, { useState, useEffect, useRef, useCallback } from 'react';
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
    img: office1,
    accentColor: "#FFCC00" // Yellow
  },
  {
    id: "02",
    title: "URBAN ZEN",
    subTitle: "Tokyo Corporate Wellness Center",
    img: office2,
    accentColor: "#DD0000" // Red
  },
  {
    id: "03",
    title: "SKY GARDENS",
    subTitle: "London Sustainable Living Hub",
    img: office3,
    accentColor: "#1A1A1A" // Dark Charcoal / Black
  }
];

export default function OfficePhoto() {
  const [index, setIndex] = useState(0);
  const active = projects[index];
  const sectionRef = useRef(null);

  const nextSlide = useCallback(() => {
    if (index < projects.length - 1) {
      setIndex((prev) => prev + 1);
    }
  }, [index]);

  const prevSlide = useCallback(() => {
    if (index > 0) {
      setIndex((prev) => prev - 1);
    }
  }, [index]);

  // Handle Wheel Scroll Events for changing slides or scrolling down
  useEffect(() => {
    const handleWheel = (event) => {
      // Check if the user is scrolling inside our component container
      if (sectionRef.current && sectionRef.current.contains(event.target)) {
        // Scrolling down
        if (event.deltaY > 0) {
          if (index < projects.length - 1) {
            event.preventDefault();
            nextSlide();
          }
          // On the last item, allow scrolling to the next section
        } 
        // Scrolling up
        else {
          if (index > 0) {
            event.preventDefault();
            prevSlide();
          }
        }
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    return () => window.removeEventListener('wheel', handleWheel);
  }, [index, nextSlide, prevSlide]);

  return (
    <section 
      ref={sectionRef}
      className="bg-[#050505] min-h-screen flex items-center justify-center font-sans overflow-hidden py-20 relative select-none"
    >
      
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
              style={{ color: active.accentColor }}
              className="text-[10px] font-light uppercase tracking-[0.4em] mb-4 block"
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
                <h2 className="text-4xl md:text-7xl font-extralight text-white uppercase tracking-tight leading-none mb-4">
                  {active.title}
                </h2>
                <p className="text-white/40 text-[10px] font-extralight uppercase tracking-[0.3em] mb-12">
                  {active.subTitle}
                </p>
              </motion.div>
            </AnimatePresence>

            <div className="flex items-center gap-6 group cursor-pointer w-fit">
               <span className="text-white text-[9px] font-normal uppercase tracking-[0.4em] group-hover:text-[#FFCC00] transition-colors">
                 View Story
               </span>
               <div className="flex items-center">
                  <div className="h-[1px] w-12 bg-white/20 relative overflow-hidden">
                    <div 
                      className="absolute inset-0 -translate-x-full group-hover:translate-x-0 transition-transform duration-500" 
                      style={{ backgroundColor: active.accentColor }}
                    />
                  </div>
                  <ArrowRight size={16} className="text-white/20 group-hover:text-[#FFCC00] transition-colors ml-2" /> 
               </div>
            </div>
          </div>
        </div>

        {/* 3. THE CIRCULAR MAGNIFIER (Fade/Zoom Effect) */}
        <div className="absolute right-[5%] lg:right-[10%] z-20">
          <AnimatePresence mode="wait">
            <motion.div 
              key={active.id + '-lens'}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ type: "tween", duration: 0.5 }}
              className="w-[320px] h-[320px] md:w-[480px] md:h-[480px] rounded-full border-[15px] border-[#0A0A0A] shadow-[0_0_80px_rgba(0,0,0,0.8)] overflow-hidden group"
            >
              <img 
                src={active.img} 
                className="w-full h-full object-cover contrast-125 brightness-110 transition-transform duration-700 group-hover:scale-105"
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