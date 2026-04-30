import React from 'react';
import { motion } from 'framer-motion';

export default function MagicSection() {
  return (
    <section className="bg-[#050505] min-h-[80vh] flex flex-col items-center justify-center font-sans overflow-hidden px-6 relative">
      
      {/* Background Radial Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.03)_0%,transparent_60%)] pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        
        {/* Top Text Line */}
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-white/80 text-lg md:text-xl font-medium tracking-tight mb-4"
        >
          Ultimately, it's not
        </motion.p>

        {/* The "Magic" Heading */}
        <motion.h2 
          initial={{ opacity: 0, filter: "blur(10px)", scale: 0.9 }}
          whileInView={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="text-white text-[18vw] md:text-[11rem] font-black leading-none tracking-tighter mb-8"
        >
          magic<span className="text-white/40">.</span>
        </motion.h2>

        {/* Bottom Text Blocks */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="flex flex-col items-center"
        >
          <p className="text-white/60 text-base md:text-2xl font-light leading-relaxed max-w-lg tracking-wide">
            It's all skill, experience, <br className="hidden md:block" /> and dedication.
          </p>
          
          {/* Subtle Decorative Line */}
          <div className="mt-12 h-[60px] w-[1px] bg-gradient-to-b from-white/20 to-transparent" />
        </motion.div>
      </div>

      {/* Background Floating Particles (Optional for "Cooler" effect) */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
         <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-white rounded-full animate-pulse" />
         <div className="absolute bottom-1/3 right-1/4 w-1.5 h-1.5 bg-white rounded-full animate-ping" />
      </div>

    </section>
  );
}