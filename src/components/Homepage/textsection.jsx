import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Menu, ArrowRight } from 'lucide-react';
import HeroImage from '../../assests/hero-image.png'; 

const ausbildungRoles = [
  { id: 1, name: "IT Specialist", field: "Fachinformatiker", color: "bg-[#0066FF]", shadow: "shadow-blue-500/30", desc: "Master software development or system integration in Germany's top tech firms." },
  { id: 2, name: "Nursing", field: "Pflegefachmann", color: "bg-[#FF3B30]", shadow: "shadow-red-500/30", desc: "Start a rewarding career in healthcare with a balanced theory-practice approach." },
  { id: 3, name: "Mechatronics", field: "Mechatroniker", color: "bg-[#34C759]", shadow: "shadow-green-500/30", desc: "Combine mechanics, electronics, and computing to build the future of industry." },
  { id: 4, name: "Business", field: "Industriekaufmann", color: "bg-[#5856D6]", shadow: "shadow-indigo-500/30", desc: "Manage commercial-business processes from production to human resources." }
];

// Box-based Timeline Data
const roadmapTasks = [
  { id: 1, title: "Language Prep", sub: "German B2", color: "bg-blue-500", start: 0, width: 25, side: "top", row: 1 },
  { id: 2, title: "Visa Process", sub: "Embassy Clearance", color: "bg-blue-400", start: 20, width: 20, side: "top", row: 2 },
  { id: 3, title: "Matching", sub: "Employer Interviews", color: "bg-blue-300", start: 35, width: 15, side: "top", row: 3 },
  { id: 4, title: "Year 1", sub: "Theory Foundation", color: "bg-orange-400", start: 50, width: 20, side: "bottom", row: 1 },
  { id: 5, title: "Year 2", sub: "Practical Shift", color: "bg-red-400", start: 65, width: 20, side: "bottom", row: 2 },
  { id: 6, title: "Final Exam", sub: "Permanent Residency", color: "bg-green-500", start: 85, width: 15, side: "bottom", row: 1 },
];

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

const AusbildungSlider = () => {
  const [index, setIndex] = useState(1);
  const [direction, setDirection] = useState(0);

  const next = () => { setDirection(1); setIndex((prev) => (prev + 1) % ausbildungRoles.length); };
  const prev = () => { setDirection(-1); setIndex((prev) => (prev - 1 + ausbildungRoles.length) % ausbildungRoles.length); };

  return (
    <div className="relative w-full min-h-screen bg-[#FDFDFD] font-sans overflow-x-hidden flex flex-col">
      
      {/* HEADER */}
      <header className="w-full max-w-[90rem] mx-auto px-8 md:px-16 py-8 flex items-center justify-between z-50">
        <div className="flex flex-col leading-none">
          <span className="text-2xl font-black tracking-tighter text-black uppercase">Ausbildung</span>
          <span className="text-[10px] font-bold tracking-[0.3em] text-blue-600 uppercase mt-1">Matchmaker</span>
        </div>
        <button className="p-3 bg-gray-100 rounded-full hover:bg-black hover:text-white transition-all"><Menu className="w-5 h-5" /></button>
      </header>

      {/* MAIN CONTENT (Slider) */}
      <main className="flex-grow flex items-center justify-center relative px-6 py-12">
        <div className="relative w-full max-w-[1200px] flex items-center justify-center h-[500px]">
          <AnimatePresence mode="popLayout" custom={direction}>
            {ausbildungRoles.map((role, i) => {
              const isActive = i === index;
              const isLeft = i === (index - 1 + ausbildungRoles.length) % ausbildungRoles.length;
              const isRight = i === (index + 1) % ausbildungRoles.length;
              if (!isActive && !isLeft && !isRight) return null;

              return (
                <motion.div
                  key={role.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8, x: direction > 0 ? 100 : -100 }}
                  animate={{ 
                    opacity: isActive ? 1 : 0.4, scale: isActive ? 1 : 0.8,
                    x: isActive ? 0 : isLeft ? -350 : 350, zIndex: isActive ? 40 : 20,
                    filter: isActive ? "blur(0px)" : "blur(2px)"
                  }}
                  exit={{ opacity: 0, scale: 0.5 }}
                  className="absolute cursor-pointer"
                  onClick={() => setIndex(i)}
                >
                  <motion.div
                    animate={{ y: isActive ? [0, -20, 0] : 0 }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -top-36 left-1/2 -translate-x-1/2 z-50 w-56 md:w-72 pointer-events-none"
                  >
                    <img src={HeroImage} alt={role.name} className={`w-full drop-shadow-2xl transition-all duration-1000 ${!isActive && 'grayscale opacity-50'}`} />
                  </motion.div>

                  <div className={`relative w-[280px] md:w-[340px] h-[400px] rounded-[50px] ${role.color} ${role.shadow} p-10 flex flex-col justify-end overflow-hidden`}>
                    <div className="relative z-10 text-white">
                      <p className="text-[10px] font-black uppercase tracking-widest mb-2 opacity-70">{role.field}</p>
                      <h2 className="text-4xl font-bold mb-4 leading-tight">{role.name}</h2>
                      <div className="flex items-center gap-4">
                        <button className="px-6 py-3 bg-white text-black rounded-full text-[10px] font-black uppercase tracking-tighter hover:scale-105 transition-transform">Apply Now</button>
                        <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center"><ArrowRight className="w-4 h-4" /></div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </main>

      {/* BOX-VIEW TIMELINE SECTION */}
      <section className="w-full bg-white pt-20 pb-32 border-t border-gray-100 overflow-x-auto no-scrollbar">
        <div className="max-w-[90rem] mx-auto px-8 md:px-16 min-w-[1000px]">
          <div className="mb-20">
            <h3 className="text-4xl font-black tracking-tighter uppercase italic text-blue-600">Roadmap Calculator</h3>
            <p className="text-gray-400 text-sm tracking-widest uppercase mt-2">Visualizing the 3-Year Journey</p>
          </div>

          <div className="relative">
            
            {/* TOP BOXES (Milestones) */}
            <div className="relative h-44 mb-2">
              {roadmapTasks.filter(t => t.side === 'top').map((task) => (
                <motion.div
                  key={task.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  style={{ 
                    left: `${task.start}%`, 
                    width: `${task.width}%`,
                    bottom: task.row === 1 ? '0px' : task.row === 2 ? '50px' : '100px'
                  }}
                  className={`absolute h-10 ${task.color} rounded-sm flex items-center px-4 shadow-sm group cursor-help`}
                >
                  <div className="flex flex-col">
                    <span className="text-[9px] font-black text-black uppercase leading-none mb-1">{task.title}</span>
                    <span className="text-[8px] text-black/60 font-medium">{task.sub}</span>
                  </div>
                  {/* Anchor Point */}
                  <div className="absolute -bottom-1 left-0 w-1.5 h-1.5 bg-slate-800 rounded-full" />
                </motion.div>
              ))}
            </div>

            {/* CENTRAL AXIS (The Train Track) */}
            <div className="relative h-12 bg-zinc-900 flex items-center rounded-sm overflow-hidden shadow-2xl">
              {months.map((m, idx) => (
                <div key={idx} className="flex-1 text-center border-r border-white/5 last:border-0">
                  <span className="text-[10px] font-bold text-white/40 uppercase tracking-tighter">{m}</span>
                </div>
              ))}
              {/* Dynamic Progress Scrubber */}
              <motion.div 
                initial={{ x: "-100%" }}
                whileInView={{ x: "0%" }}
                transition={{ duration: 3, ease: "easeInOut" }}
                className="absolute inset-0 bg-blue-600/20 pointer-events-none"
              />
            </div>

            {/* BOTTOM BOXES (Phases) */}
            <div className="relative h-44 mt-2">
              {roadmapTasks.filter(t => t.side === 'bottom').map((task) => (
                <motion.div
                  key={task.id}
                  initial={{ opacity: 0, y: -20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  style={{ 
                    left: `${task.start}%`, 
                    width: `${task.width}%`,
                    top: task.row === 1 ? '0px' : '50px'
                  }}
                  className={`absolute h-10 ${task.color} rounded-sm flex items-center px-4 shadow-sm group`}
                >
                  <div className="flex flex-col">
                    <span className="text-[9px] font-black text-black uppercase leading-none mb-1">{task.title}</span>
                    <span className="text-[8px] text-black/60 font-medium">{task.sub}</span>
                  </div>
                  {/* Anchor Point */}
                  <div className="absolute -top-1 left-0 w-1.5 h-1.5 bg-slate-800 rounded-full" />
                </motion.div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* FOOTER CONTROLS */}
      <footer className="w-full max-w-[90rem] mx-auto px-8 md:px-16 py-10 flex items-center justify-between border-t border-gray-50">
        <div className="flex gap-4">
          {ausbildungRoles.map((_, i) => (
            <div key={i} className={`h-1 transition-all duration-500 rounded-full ${i === index ? 'w-8 bg-black' : 'w-2 bg-gray-200'}`} />
          ))}
        </div>
        <div className="flex gap-10">
          <button onClick={prev} className="p-4 rounded-full border border-gray-100 hover:bg-black hover:text-white transition-all"><ChevronLeft size={20}/></button>
          <button onClick={next} className="p-4 rounded-full border border-gray-100 hover:bg-black hover:text-white transition-all"><ChevronRight size={20}/></button>
        </div>
      </footer>
    </div>
  );
};

export default AusbildungSlider;