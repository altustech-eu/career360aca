import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const PreLoader = () => {
  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => setLoading(false), 500);
          return 100;
        }
        return prev + Math.floor(Math.random() * 12) + 5;
      });
    }, 120);

    return () => clearInterval(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="loader"
          initial={{ y: 0 }}
          exit={{ 
            y: '-100%', 
            transition: { duration: 0.9, ease: [0.85, 0, 0.15, 1] } 
          }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#001a33] text-white overflow-hidden selection:bg-[#0e63ed]"
          style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }} // Premium font style
        >
          {/* Custom Google Font Import */}
          <style>
            {`@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200;0,800;1,800&display=swap');`}
          </style>

          {/* Background Decorative Element */}
          <div className="absolute bottom-[-10%] right-[-10%] opacity-10 pointer-events-none">
            <div className="w-[600px] h-[600px] bg-[#0e63ed] rounded-tl-[300px]" />
          </div>

          <div className="relative z-10 flex flex-col items-center">
            {/* Logo Animation */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <div className="px-6 py-2 border-l-4 border-[#0e63ed] bg-white/5 backdrop-blur-md">
                <span className="text-xl font-extrabold tracking-[0.2em] uppercase italic text-white/90">
                  Career360academy<span className="text-[#0e63ed]">.</span>
                </span>
              </div>
            </motion.div>

            {/* Percentage Counter */}
            <div className="flex flex-col items-center">
              <motion.span 
                className="text-9xl md:text-[12rem] font-extrabold tracking-tighter tabular-nums leading-none"
                style={{ 
                    fontVariantNumeric: 'tabular-nums',
                    letterSpacing: '-0.05em'
                }}
              >
                {progress}
              </motion.span>
              
              <div className="flex items-center gap-5 mt-4">
                {/* Modern Status Line */}
                <div className="h-[1px] w-12 bg-[#0e63ed]" />
                <span className="text-[#0e63ed] font-bold uppercase tracking-[0.5em] text-[10px] md:text-xs">
                  Securing your ideal role
                </span>
                <div className="h-[1px] w-12 bg-[#0e63ed]" />
              </div>
            </div>
          </div>

          {/* Minimalist Progress Line */}
          <div className="absolute bottom-20 left-1/2 -translate-x-1/2 w-40 h-[2px] bg-white/10 overflow-hidden">
             <motion.div 
               className="h-full bg-[#ccff00]" 
               initial={{ width: 0 }}
               animate={{ width: `${progress}%` }}
               transition={{ ease: "linear" }}
             />
          </div>

          {/* Bottom Branding */}
          <div className="absolute bottom-10 text-[10px] text-white/20 font-bold uppercase tracking-widest">
            Early Talent recruitment partner
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PreLoader;