import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Quote, Activity, Globe, Users } from "lucide-react";

const mainTestimonials = [
  {
    id: "v1",
    name: "Priya Sharma",
    role: "Ausbildung Candidate – Nursing, Berlin",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    thumbnail: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=800",
    quote: "Career360 Academy changed my life. Their German training was so practical that I cleared my B2 exam in just 6 months and got a nursing Ausbildung position in Berlin.",
    stat: "500+",
    statLabel: "Students Placed",
    subStat: "92% Success Rate"
  },
  {
    id: "v2",
    name: "Arjun Mehta",
    role: "Healthcare Professional, Munich",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    thumbnail: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=800",
    quote: "The Medical German module was a game-changer. I passed my Kenntnisprüfung on the first attempt and now work at a top hospital in Munich. Thank you, Career360!",
    stat: "30+",
    statLabel: "Partner Hospitals",
    subStat: "100% Job Assistance"
  },
  {
    id: "v3",
    name: "Neha Verma",
    role: "Masters Student, TU Berlin",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    thumbnail: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=800",
    quote: "From university selection to visa approval – Career360 guided me at every step. Their German training helped me adapt quickly. Now I’m living my dream in Germany.",
    stat: "50+",
    statLabel: "Partner Universities",
    subStat: "0 Tuition Fees*"
  }
];

export default function VideoTestimonialsRedesign() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = mainTestimonials[activeIndex];

  return (
    <div className="bg-[#050505] font-sans selection:bg-[#FFCC00] selection:text-black min-h-screen">
      <section className="py-24 text-white overflow-hidden relative">
        <div className="max-w-[1600px] mx-auto px-6 md:px-16">
          
          {/* HEADER SECTION */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-16 gap-8">
            <div className="flex items-start gap-12">
               <div className="flex flex-col gap-4 pt-2">
                 {mainTestimonials.map((_, i) => (
                   <button 
                    key={i} 
                    onClick={() => setActiveIndex(i)}
                    className={`w-1.5 h-1.5 rounded-full transition-all duration-500 ${activeIndex === i ? 'bg-[#FFCC00] scale-150' : 'bg-white/20 hover:bg-white/40'}`}
                   />
                 ))}
               </div>
               <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-[1px] w-8 bg-[#DD0000]"></div>
                    <span className="text-[#FFCC00] font-bold text-[10px] uppercase tracking-[0.4em]">Success Stories</span>
                  </div>
                  <h2 className="text-4xl md:text-6xl font-extralight tracking-tighter uppercase leading-none">
                    Real Results. Real Dreams.
                  </h2>
                  <p className="text-white/40 text-xs mt-2 uppercase tracking-wider">
                    From German learners to Germany achievers
                  </p>
               </div>
            </div>
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 cursor-pointer transition-colors"><Activity size={18} className="text-white/40" /></div>
              <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 cursor-pointer transition-colors"><Globe size={18} className="text-white/40" /></div>
            </div>
          </div>

          {/* MAIN STATS BENTO GRID */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            
            {/* 1. TOP BLOCK: LARGE HERO STAT (Spans 9 columns) */}
            <div className="lg:col-span-9">
               <motion.div 
                key={`mainstat-${activeIndex}`}
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                className="bg-white/5 border border-white/5 p-12 lg:p-20 relative overflow-hidden flex flex-col justify-center min-h-[400px]"
               >
                 <div className="absolute top-0 right-0 w-24 h-[1px] bg-white/20" />
                 <div className="relative z-10 text-right">
                    <span className="text-[10px] font-black text-[#DD0000]/50 uppercase tracking-[0.5em] block mb-4">Learner Outcome</span>
                    <h1 className="text-7xl md:text-9xl font-extralight tracking-tighter text-white mb-2 leading-none">{active.stat}</h1>
                    <p className="text-[11px] font-bold text-white/40 uppercase tracking-[0.3em]">{active.statLabel}</p>
                 </div>
                 <div className="mt-12 flex justify-end">
                    <button className="group flex items-center gap-6">
                       <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/30 group-hover:text-[#FFCC00] transition-colors">Play Success Story</span>
                       <div className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center group-hover:border-[#FFCC00] group-hover:bg-[#FFCC00] group-hover:text-black transition-all duration-500"><Play size={18} fill="currentColor" /></div>
                    </button>
                 </div>
               </motion.div>
            </div>

            {/* 2. RIGHT SIDE BLOCK: QUOTE BOX (Spans 3 columns) */}
            <div className="lg:col-span-3 h-full">
               <motion.div 
                key={`quote-${activeIndex}`}
                initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}
                className="border border-white/5 p-8 flex flex-col justify-between bg-zinc-900/50 backdrop-blur-md min-h-[400px]"
               >
                  <Quote className="w-8 h-8 text-[#FFCC00] opacity-30 mb-6" />
                  <p className="text-lg font-light leading-relaxed italic text-white/80">"{active.quote}"</p>
                  <div className="mt-8 pt-6 border-t border-white/5">
                    <p className="text-sm font-medium tracking-wide text-white">{active.name}</p>
                    <p className="text-[9px] font-bold text-white/30 uppercase tracking-widest">{active.role}</p>
                  </div>
               </motion.div>
            </div>

            {/* --- BOTTOM ROW --- */}

            {/* 3. BOTTOM LEFT BLOCK: SECONDARY STAT (Spans 3 columns) */}
            <div className="lg:col-start-5 lg:col-span-3">
               <motion.div 
                key={`substat-${activeIndex}`}
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                className="border border-[#DD0000]/30 p-10 flex flex-col justify-center text-center bg-black/40 backdrop-blur-sm min-h-[250px]"
               >
                  <h3 className="text-5xl font-extralight text-[#DD0000] mb-4 tracking-tighter italic">{active.subStat.split(' ')[0]}</h3>
                  <p className="text-[10px] font-bold text-white/50 uppercase tracking-[0.2em] leading-relaxed">
                    {active.subStat.split(' ').slice(1).join(' ')}
                  </p>
               </motion.div>
            </div>

            {/* 4. BOTTOM RIGHT BLOCK: ADDITIONAL IMPACT (Spans 4 columns) */}
            <div className="lg:col-span-4">
               <motion.div 
                initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
                className="bg-white/5 border border-white/5 p-10 flex flex-col justify-center min-h-[250px]"
               >
                  <h4 className="text-4xl font-extralight tracking-tighter text-white mb-2 leading-none">10,000+</h4>
                  <p className="text-[10px] font-bold text-white/30 uppercase tracking-[0.3em]">Active Learners</p>
                  <div className="h-px w-full bg-white/5 my-6" />
                  <p className="text-[11px] font-light text-white/50 leading-relaxed">And growing every day. Join thousands of successful students who trusted Career360 Academy for their Germany journey.</p>
               </motion.div>
            </div>

          </div>

          {/* FOOTER NAVIGATION */}
          <div className="mt-20 flex flex-col md:flex-row gap-4 items-center justify-between border-t border-white/5 pt-12">
            <div className="flex items-center gap-6">
               <Users className="text-white/20" size={24} />
               <p className="text-[10px] font-bold text-white/30 uppercase tracking-[0.2em]">Student Success Stories</p>
            </div>
            <div className="flex gap-4 overflow-x-auto no-scrollbar max-w-full pb-4">
               {mainTestimonials.map((item, idx) => (
                 <button 
                  key={item.id}
                  onClick={() => setActiveIndex(idx)}
                  className={`px-8 py-4 border rounded-full text-[10px] font-bold uppercase tracking-widest transition-all duration-500 whitespace-nowrap ${activeIndex === idx ? 'border-[#DD0000] text-[#DD0000] bg-[#DD0000]/5' : 'border-white/5 text-white/40 hover:border-white/20'}`}
                 >
                   {item.name} - {item.role.split(' – ').pop()}
                 </button>
               ))}
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}