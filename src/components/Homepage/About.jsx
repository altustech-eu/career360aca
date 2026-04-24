import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Play, Globe, Shield, Zap } from 'lucide-react';

// --- IMPORT LOCAL ASSETS ---
import LegacyImg from '../../assests/1920x700 Hero Banner.jpg';
import TechImg from '../../assests/Ausbildung student-.jpg';
import OpsImg from '../../assests/Nurses Prelimanary interview.jpg';
import GlobalImg from '../../assests/Nurses with Trainer.jpg';

const AboutUsSection = () => {
  const [hoveredIdx, setHoveredIdx] = useState(null);

  const panels = [
    {
      id: 1,
      title: "Legacy & Vision",
      subtitle: "The Foundation",
      img: LegacyImg,
      color: "from-orange-600/40",
    },
    {
      id: 2,
      title: "Tech Ecosystem",
      subtitle: "MAX Innovation",
      img: TechImg,
      color: "from-red-600/40",
    },
    {
      id: 3,
      title: "Core Operations",
      subtitle: "Digital Flow",
      img: OpsImg,
      color: "from-blue-600/40",
    },
    {
      id: 4,
      title: "Global Reach",
      subtitle: "Worldwide Network",
      img: GlobalImg,
      color: "from-purple-600/40",
    }
  ];

  return (
    <div className="bg-white min-h-screen font-sans overflow-hidden">
      
      {/* --- TOP BRAND INTRO SECTION --- */}
      <section className="max-w-[1400px] mx-auto px-8 pt-24 pb-16">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 text-left">
          <div className="max-w-2xl">
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-[10px] font-black uppercase tracking-[0.5em] text-blue-600 mb-6 block"
            >
              Established 2026
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-semibold text-slate-900 tracking-tighter leading-[0.9] mb-8"
            >
              We build the architecture of <span className="italic font-normal">modern careers.</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-slate-500 font-medium leading-relaxed"
            >
              Career360 Academy is more than a recruitment platform. We are a global intelligence 
              hub dedicated to bridging the gap between untapped talent and industry-leading 
              enterprises through data-driven matching and specialized training.
            </motion.p>
          </div>

          <div className="flex flex-col gap-6 border-l border-slate-100 pl-8 lg:mb-2">
            <div className="flex items-center gap-4 text-slate-400">
               <Globe size={18} className="text-blue-600" />
               <span className="text-xs font-bold uppercase tracking-widest">Worldwide Operations</span>
            </div>
            <div className="flex items-center gap-4 text-slate-400">
               <Shield size={18} className="text-blue-600" />
               <span className="text-xs font-bold uppercase tracking-widest">Verified Placement System</span>
            </div>
            <div className="flex items-center gap-4 text-slate-400">
               <Zap size={18} className="text-blue-600" />
               <span className="text-xs font-bold uppercase tracking-widest">AI-Driven Skill Matching</span>
            </div>
          </div>
        </div>
      </section>

      {/* --- REDUCED HEIGHT VERTICAL BENTO PANELS --- */}
      <div className="flex h-[55vh] w-full bg-black overflow-hidden shadow-2xl">
        {panels.map((panel, idx) => (
          <motion.div
            key={panel.id}
            onMouseEnter={() => setHoveredIdx(idx)}
            onMouseLeave={() => setHoveredIdx(null)}
            initial={{ width: '25%' }}
            animate={{ 
              width: hoveredIdx === idx ? '40%' : hoveredIdx === null ? '25%' : '20%',
              filter: hoveredIdx !== null && hoveredIdx !== idx ? 'grayscale(100%) brightness(0.5)' : 'grayscale(0%) brightness(1)'
            }}
            transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
            className="relative h-full group cursor-pointer overflow-hidden"
          >
            {/* Background Image */}
            <motion.img 
              src={panel.img}
              alt={panel.title}
              className="absolute inset-0 h-full w-full object-cover"
              animate={{ scale: hoveredIdx === idx ? 1.05 : 1 }}
              transition={{ duration: 1.2 }}
            />

            {/* Premium Overlays */}
            <div className={`absolute inset-0 bg-gradient-to-t ${panel.color} to-transparent opacity-40 group-hover:opacity-80 transition-opacity`} />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />

            {/* Panel Content */}
            <div className="absolute inset-0 p-8 flex flex-col justify-end">
              <motion.div
                animate={{ y: hoveredIdx === idx ? 0 : 15 }}
                className="relative z-10"
              >
                <span className="text-[9px] font-black uppercase tracking-[0.4em] text-white/60 mb-2 block">
                  {panel.subtitle}
                </span>
                <h3 className="text-xl md:text-2xl font-bold text-white tracking-tighter leading-none mb-4">
                  {panel.title}
                </h3>
                
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ 
                    height: hoveredIdx === idx ? 'auto' : 0,
                    opacity: hoveredIdx === idx ? 1 : 0 
                  }}
                  className="overflow-hidden"
                >
                  <p className="text-xs text-white/50 font-medium mb-4 leading-relaxed max-w-[200px]">
                    Exploring the intersection of technology and human potential within our {panel.subtitle.toLowerCase()}.
                  </p>
                  <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all">
                    <ArrowUpRight size={14} />
                  </div>
                </motion.div>
              </motion.div>
            </div>

            {/* Play Indicator */}
            <div className="absolute top-8 right-8">
               <motion.div 
                 animate={{ opacity: hoveredIdx === idx ? 1 : 0.3, scale: hoveredIdx === idx ? 1 : 0.8 }}
                 className="p-1.5 border border-white/20 rounded-full text-white"
               >
                 <Play size={10} fill="currentColor" />
               </motion.div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* --- SUBTLE FOOTER TAG --- */}
      <div className="py-12 bg-white flex justify-center">
         <span className="text-[10px] font-bold uppercase tracking-[0.8em] text-slate-200">Career360 Intelligence</span>
      </div>

    </div>
  );
};

export default AboutUsSection;