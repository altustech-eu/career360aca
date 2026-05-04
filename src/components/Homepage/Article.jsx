import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const articles = [
  {
    id: 1,
    title: "CUL2VATE",
    desc: "At Cul2vate, there are two main goals: to grow food and to grow people. Their team completes the first part by...",
    image: "https://images.pexels.com/photos/2255441/pexels-photo-2255441.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: 2,
    title: "THISTLE FARMS",
    desc: "Thistle Farms has been healing, empowering and employing women survivors of trafficking, prostitution and...",
    image: "https://images.pexels.com/photos/1018481/pexels-photo-1018481.jpeg?auto=compress&cs=tinysrgb&w=800",
  }
];

export default function GoldenArticleSection() {
  // German flag-inspired accent colors (Red and Yellow)
  const accentColor = "#DD0000"; // Primary highlight (Red)
  const secondaryColor = "#FFCC00"; // Accent text/line (Yellow)

  return (
    <section className="bg-[#050505] py-24 font-sans relative overflow-hidden selection:bg-yellow-500 selection:text-black">
      
      {/* 1. EDITORIAL HEADING & WATERMARK */}
      <div className="relative mb-32 flex flex-col items-center justify-center overflow-hidden">
        {/* Background Watermark - Massive low-opacity text */}
        <h2 className="absolute inset-0 flex items-center justify-center text-[18vw] font-black text-white/[0.02] uppercase tracking-[0.1em] select-none leading-none">
          Articles
        </h2>
        
        {/* Foreground Content */}
        <div className="relative z-10 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-3 mb-6"
          >
            <div className="h-[1px] w-12 bg-[#DD0000]/50" />
            <span className="text-[#FFCC00] font-bold text-[10px] uppercase tracking-[0.6em]">Journal & Press</span>
            <div className="h-[1px] w-12 bg-[#DD0000]/50" />
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-extralight tracking-tight text-white uppercase leading-none"
          >
            The <span className="font-normal italic text-[#FFCC00]">Article</span> Hub
          </motion.h1>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <div className="flex flex-col gap-16 lg:gap-24">
          {articles.map((article, index) => (
            <motion.div 
              key={article.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group flex flex-col md:flex-row items-center gap-10 lg:gap-20"
            >
              
              {/* Image Block */}
              <div className="w-full md:w-5/12 overflow-hidden border border-white/5 shadow-2xl bg-zinc-900">
                <img 
                  src={article.image} 
                  className="w-full aspect-[4/3] object-cover grayscale-[0.6] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-[1.5s] ease-out" 
                  alt={article.title} 
                />
              </div>

              {/* Text Block */}
              <div className="w-full md:w-7/12 flex flex-col items-start">
                <h3 
                  className="text-3xl lg:text-5xl font-light uppercase tracking-tight mb-5 transition-transform duration-500 group-hover:-translate-y-1"
                  style={{ color: secondaryColor }}
                >
                  {article.title}
                </h3>
                
                <p className="text-gray-400 text-xs md:text-sm leading-relaxed mb-10 max-w-lg font-extralight">
                  {article.desc}
                </p>

                {/* Interactive CTA */}
                <button className="flex items-center gap-5 group/btn outline-none">
                  <span className="text-[10px] font-bold text-white uppercase tracking-[0.4em] group-hover/btn:opacity-60 transition-opacity">
                    View Story
                  </span>
                  <div className="flex items-center">
                    <div 
                      className="h-[1px] w-12 transition-all duration-700 group-hover/btn:w-24"
                      style={{ backgroundColor: accentColor }}
                    />
                    <ArrowRight 
                      size={18} 
                      className="transition-transform duration-700 group-hover/btn:translate-x-3"
                      style={{ color: accentColor }} 
                    />
                  </div>
                </button>
              </div>

            </motion.div>
          ))}
        </div>

        {/* Bottom Explorer Action */}
        <div className="mt-32 flex justify-center">
          <button className="group relative px-16 py-5 overflow-hidden border border-white/10 text-white text-[10px] font-bold tracking-[0.5em] transition-all hover:border-[#DD0000]">
            <span className="relative z-10 group-hover:text-black transition-colors duration-500">Explore All Insights</span>
            <div className="absolute inset-0 bg-[#DD0000] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
          </button>
        </div>
      </div>
    </section>
  );
}