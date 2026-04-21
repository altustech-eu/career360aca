import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Quote, ChevronRight, Volume2, Star } from "lucide-react";

const mainTestimonials = [
  {
    id: "v1",
    name: "David Chen",
    role: "CEO, TechStart Inc.",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    thumbnail: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=800",
    quote: "MUHA transformed our digital presence completely. Their attention to detail and creative approach exceeded our expectations.",
    stat: "+250% Conversion"
  },
  {
    id: "v2",
    name: "Sarah Johnson",
    role: "Marketing Director, GreenLeaf",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    thumbnail: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=800",
    quote: "Working with MUHA was a game-changer. They delivered a stunning website that perfectly captured our brand identity.",
    stat: "100% Brand ROI"
  },
  {
    id: "v3",
    name: "Michael Rodriguez",
    role: "Founder, FinanceHub",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    thumbnail: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=800",
    quote: "The SEO and digital marketing services provided by MUHA have been phenomenal. We saw a 400% increase in traffic.",
    stat: "400% Traffic Growth"
  }
];

const scrollVideos = [
  { id: "s1", name: "Alex Rivera", role: "Founder, Bloom", thumb: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=600" },
  { id: "s2", name: "Jessica Wu", role: "VP, NEXA", thumb: "https://images.pexels.com/photos/3727459/pexels-photo-3727459.jpeg?auto=compress&cs=tinysrgb&w=600" },
  { id: "s3", name: "Marcus Thorne", role: "CEO, Titan", thumb: "https://images.pexels.com/photos/2269872/pexels-photo-2269872.jpeg?auto=compress&cs=tinysrgb&w=600" },
  { id: "s4", name: "Elena Kostic", role: "COO, Aura", thumb: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=600" },
  { id: "s5", name: "David Goggins", role: "Lead, Peak", thumb: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=600" },
  { id: "s6", name: "Sofia Loren", role: "Director, Muse", thumb: "https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=600" },
];

const marqueeItems = [...scrollVideos, ...scrollVideos];

export default function VideoTestimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = mainTestimonials[activeIndex];

  return (
    <div className="bg-[#050505] font-sans">
      <section className="py-24 text-white overflow-hidden">
        <div className="max-w-[1600px] mx-auto px-6 md:px-16">
          
          {/* Header Section */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-[1px] w-12 bg-[#0e63ed]"></div>
              <span className="text-[#0e63ed] font-light text-xs uppercase tracking-[0.5em]">Success Stories</span>
            </div>
            <h2 className="text-5xl md:text-8xl font-thin tracking-tighter leading-[0.85] mb-8">
              Experience the <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0e63ed] to-cyan-400 font-light">MUHA Impact</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* 1. MAIN VIDEO PLAYER */}
            <div className="lg:col-span-7 relative group">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active.id}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.02 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="relative aspect-[9/16] md:aspect-video w-full rounded-[40px] overflow-hidden border border-white/10 shadow-2xl bg-zinc-900"
                >
                  <iframe
                    src={`${active.videoUrl}?autoplay=0&controls=0&rel=0&modestbranding=1`}
                    title={active.name}
                    className="absolute inset-0 w-full h-full object-cover opacity-40 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000"
                  />

                  {/* Overlay Content */}
                  <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-between z-10 pointer-events-none">
                    <div className="flex justify-between items-start">
                      <div className="px-4 py-2 bg-white/5 backdrop-blur-xl rounded-full border border-white/10 flex items-center gap-2">
                        <Volume2 size={14} className="text-cyan-400" />
                        <span className="text-[9px] font-thin uppercase tracking-widest">Customer Story</span>
                      </div>
                      <span className="text-4xl md:text-6xl font-thin text-white/10 italic">0{activeIndex + 1}</span>
                    </div>

                    <div className="max-w-xl">
                      <Quote className="w-10 h-10 text-[#0e63ed] mb-6 fill-current opacity-50" />
                      <p className="text-2xl md:text-4xl font-extralight leading-tight mb-8 tracking-tight">
                        "{active.quote}"
                      </p>
                      <div className="flex items-center gap-4">
                        <div className="h-12 w-12 rounded-full bg-[#0e63ed] flex items-center justify-center shadow-xl">
                          <Play size={18} fill="white" />
                        </div>
                        <div>
                          <p className="text-xl font-light tracking-wide">{active.name}</p>
                          <p className="text-xs font-thin text-gray-500 uppercase tracking-widest">{active.role}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* 2. SIDEBAR PLAYLIST */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              <h3 className="text-gray-500 font-thin uppercase tracking-[0.4em] text-[10px] mb-2">Featured Partners</h3>
              {mainTestimonials.map((item, idx) => (
                <motion.div
                  key={item.id}
                  onClick={() => setActiveIndex(idx)}
                  className={`group cursor-pointer relative p-6 rounded-3xl border transition-all duration-700 ${
                    activeIndex === idx ? 'bg-white/5 border-[#0e63ed]' : 'bg-transparent border-white/5'
                  }`}
                >
                  <div className="flex items-center gap-6">
                    <div className="relative h-20 w-16 rounded-2xl overflow-hidden shrink-0">
                      <img src={item.thumbnail} className={`w-full h-full object-cover transition-all duration-1000 ${activeIndex === idx ? 'scale-110 grayscale-0' : 'grayscale opacity-30'}`} alt="" />
                    </div>
                    <div className="flex-grow">
                      <span className="text-[9px] font-light text-[#0e63ed] uppercase tracking-widest mb-1 block">{item.stat}</span>
                      <h4 className={`text-lg font-light tracking-wide mb-1 ${activeIndex === idx ? 'text-white' : 'text-gray-500'}`}>{item.name}</h4>
                      <p className="text-[10px] font-thin text-gray-600 uppercase tracking-tighter">{item.role}</p>
                    </div>
                    <ChevronRight size={18} className={activeIndex === idx ? 'text-[#0e63ed]' : 'text-gray-800'} />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. CONTINUOUS SCROLLING GALLERY */}
      <div className="py-24 border-t border-white/5 overflow-hidden">
        <div className="max-w-[1600px] mx-auto px-6 mb-12">
          <div className="flex items-center gap-4">
            <span className="text-white/20 font-thin text-xs uppercase tracking-[0.6em]">The Global Collective</span>
            <div className="h-[1px] flex-grow bg-white/5"></div>
          </div>
        </div>

        <div className="flex relative">
          <motion.div 
            className="flex gap-8 whitespace-nowrap"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          >
            {marqueeItems.map((video, idx) => (
              <div 
                key={`${video.id}-${idx}`}
                className="relative w-[280px] md:w-[350px] aspect-[9/16] rounded-[35px] overflow-hidden group cursor-pointer border border-white/5"
              >
                <img 
                  src={video.thumb} 
                  className="absolute inset-0 w-full h-full object-cover grayscale opacity-20 group-hover:grayscale-0 group-hover:opacity-60 transition-all duration-1000 group-hover:scale-105" 
                  alt=""
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90" />
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <div className="mb-4 h-9 w-9 rounded-full bg-white/5 backdrop-blur-md flex items-center justify-center border border-white/10 group-hover:bg-[#0e63ed] transition-colors">
                    <Play size={14} fill="currentColor" />
                  </div>
                  <h4 className="text-white font-light text-base tracking-widest mb-1 uppercase">{video.name}</h4>
                  <p className="text-white/30 font-thin text-[9px] uppercase tracking-[0.2em]">{video.role}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}