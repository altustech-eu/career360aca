import React, { useState } from "react";
import { Play, X, ChevronLeft, ChevronRight} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const galleryData = [
  { id: "01", code: "CP", title: "Community Impact", subtitle: "Advent partners with local organizations to provide essential resources.", img: "https://images.pexels.com/photos/6646917/pexels-photo-6646917.jpeg?auto=compress&cs=tinysrgb&w=1260", video: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
  { id: "02", code: "ET", title: "Education Tech", subtitle: "Bridging the digital divide for students in rural sectors.", img: "https://images.pexels.com/photos/4144923/pexels-photo-4144923.jpeg?auto=compress&cs=tinysrgb&w=1260", video: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
  { id: "03", code: "ST", title: "Sustainable Future", subtitle: "Implementing green energy solutions in urban environments.", img: "https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg?auto=compress&cs=tinysrgb&w=1260", video: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
  { id: "04", code: "HC", title: "Healthcare Access", subtitle: "Expanding mobile clinics to underserved communities.", img: "https://images.pexels.com/photos/3825586/pexels-photo-3825586.jpeg?auto=compress&cs=tinysrgb&w=1260", video: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
  { id: "05", code: "AI", title: "AI For Good", subtitle: "Utilizing machine learning to predict environmental shifts.", img: "https://images.pexels.com/photos/5473955/pexels-photo-5473955.jpeg?auto=compress&cs=tinysrgb&w=1260", video: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
  { id: "06", code: "UI", title: "Urban Innovation", subtitle: "Designing smarter cities for a more connected population.", img: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1260", video: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
  { id: "07", code: "OC", title: "Ocean Cleanup", subtitle: "Removing plastic waste through autonomous marine robotics.", img: "https://images.pexels.com/photos/1001633/pexels-photo-1001633.jpeg?auto=compress&cs=tinysrgb&w=1260", video: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
  { id: "08", code: "RE", title: "Renewable Energy", subtitle: "Harnessing wind power to fuel commercial districts.", img: "https://images.pexels.com/photos/414837/pexels-photo-414837.jpeg?auto=compress&cs=tinysrgb&w=1260", video: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
  { id: "09", code: "WF", title: "Wildlife Frontiers", subtitle: "Protecting endangered species through safe-passage corridors.", img: "https://images.pexels.com/photos/247431/pexels-photo-247431.jpeg?auto=compress&cs=tinysrgb&w=1260", video: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
  { id: "10", code: "DT", title: "Digital Trust", subtitle: "Securing the future of global information exchange.", img: "https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=1260", video: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
];

export default function CinematicGallery() {
  const [index, setIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [direction, setDirection] = useState(0);

  const activeItem = galleryData[index];
  const nextItem = galleryData[(index + 1) % galleryData.length];
  const prevItem = galleryData[(index - 1 + galleryData.length) % galleryData.length];

  const paginate = (newDirection) => {
    setDirection(newDirection);
    setIndex((prev) => (prev + newDirection + galleryData.length) % galleryData.length);
  };

  return (
    <section className="bg-[#050505] py-24 font-sans overflow-hidden min-h-screen flex flex-col justify-center select-none">
      <div className="max-w-full mx-auto px-4 relative">
        
        {/* SECTION LABEL */}
        <div className="flex justify-center mb-12">
            <div className="flex items-center gap-4">
                <div className="h-[1px] w-12 bg-white/20" />
                <span className="text-[#FFCC00] text-[10px] font-black uppercase tracking-[0.5em]">Video Showcase</span>
                <div className="h-[1px] w-12 bg-white/20" />
            </div>
        </div>

        {/* THREE-PANEL SLIDER GRID */}
        <div className="relative flex items-center justify-center gap-4 lg:gap-12 h-[400px] md:h-[550px]">
          
          {/* SIDE IMAGE LEFT (Muted & Blurred) */}
          <div className="hidden lg:block w-1/4 h-full opacity-30 grayscale blur-[4px] scale-90 transition-all duration-700">
            <img src={prevItem.img} className="w-full h-full object-cover" alt="previous" />
          </div>

          {/* CENTER FEATURED IMAGE (Interactive with Animation) */}
          <div className="relative w-full lg:w-2/4 h-full z-10">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div 
                key={activeItem.id}
                custom={direction}
                initial={{ opacity: 0, x: direction > 0 ? 100 : -100, scale: 0.95 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: direction > 0 ? -100 : 100, scale: 0.95 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                onClick={() => setIsOpen(true)}
                className="relative w-full h-full group cursor-pointer overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.7)] bg-zinc-900"
              >
                <img 
                  src={activeItem.img} 
                  className="w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 transition-all duration-[1.5s] group-hover:scale-105" 
                  alt="Active" 
                />
                
                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 rounded-full bg-[#DD0000]/20 backdrop-blur-xl border border-[#FFCC00]/50 flex items-center justify-center transform scale-90 group-hover:scale-100 transition-all duration-500 shadow-2xl">
                        <Play fill="#FFCC00" size={28} className="text-[#FFCC00] ml-1" />
                    </div>
                </div>

                {/* Bottom Caption Overlay */}
                <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-black/90 to-transparent">
                    <p className="text-[#FFCC00] text-[10px] md:text-[11px] font-medium leading-relaxed max-w-lg mx-auto text-center italic">
                        {activeItem.subtitle}
                    </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* SIDE IMAGE RIGHT (Muted & Blurred) */}
          <div className="hidden lg:block w-1/4 h-full opacity-30 grayscale blur-[4px] scale-90 transition-all duration-700">
            <img src={nextItem.img} className="w-full h-full object-cover" alt="next" />
          </div>

          {/* NAVIGATION CONTROLS */}
          <div className="absolute bottom-[-80px] flex items-center gap-12">
              <button 
                onClick={() => paginate(-1)}
                className="w-12 h-12 flex items-center justify-center text-[#FFCC00] hover:text-[#DD0000] hover:scale-125 transition-all"
              >
                <ChevronLeft size={32} />
              </button>
              <div className="flex flex-col items-center">
                 <span className="text-[#FFCC00] font-black text-xs tracking-[0.4em] mb-1">PROJECT {activeItem.id}</span>
                 <span className="text-white/40 text-[10px] font-bold">OUT OF {galleryData.length}</span>
              </div>
              <button 
                onClick={() => paginate(1)}
                className="w-12 h-12 flex items-center justify-center text-[#FFCC00] hover:text-[#DD0000] hover:scale-125 transition-all"
              >
                <ChevronRight size={32} />
              </button>
          </div>
        </div>
      </div>

      {/* POPUP VIDEO MODAL */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-12"
          >
            <div className="absolute inset-0 bg-black/95 backdrop-blur-3xl" onClick={() => setIsOpen(false)} />
            
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 30 }}
              className="relative w-full max-w-6xl aspect-video bg-black shadow-2xl rounded-sm overflow-hidden z-10 border border-[#FFCC00]/20"
            >
              <button 
                onClick={() => setIsOpen(false)}
                className="absolute top-6 right-6 z-20 text-[#DD0000] hover:text-white transition-all flex items-center gap-3 uppercase text-[10px] font-black tracking-[0.3em]"
              >
                Close View <X size={20} />
              </button>

              <iframe
                src={`${activeItem.video}?autoplay=1`}
                className="w-full h-full"
                allow="autoplay; fullscreen"
                title={activeItem.title}
              />

              <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-black to-transparent">
                  <h3 className="text-[#FFCC00] text-3xl font-black uppercase tracking-tighter mb-1">{activeItem.title}</h3>
                  <div className="flex items-center gap-4">
                     <span className="text-[#DD0000] text-[10px] font-bold tracking-widest uppercase">CAT: {activeItem.code}</span>
                     <div className="h-3 w-[1px] bg-white/10" />
                     <span className="text-white/60 text-[10px] font-bold tracking-widest uppercase">Archive: 2026</span>
                  </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* BOTTOM PROGRESS LINE */}
      <div className="fixed bottom-0 left-0 h-1 bg-white/5 w-full">
         <motion.div 
            className="h-full bg-[#DD0000] shadow-[0_0_15px_rgba(221,0,0,0.6)]"
            animate={{ width: `${((index + 1) / galleryData.length) * 100}%` }}
         />
      </div>
    </section>
  );
}