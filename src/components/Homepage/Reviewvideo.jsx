import React, { useState } from "react";
import { Play, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    id: 1,
    title: "Responsive AI tool",
    img: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600",
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ" // Placeholder
  },
  {
    id: 2,
    title: "Dynamic site design with CMS",
    img: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=600",
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: 3,
    title: "3 Dope design elements",
    img: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=600",
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: 4,
    title: "3 Cool no-code interactions",
    img: "https://images.pexels.com/photos/3727459/pexels-photo-3727459.jpeg?auto=compress&cs=tinysrgb&w=600",
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: 5,
    title: "Collaboration tools for teams",
    img: "https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=600",
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  }
];

const scrollItems = [...testimonials, ...testimonials];

export default function VideoTestimonialSection() {
  const [selectedVideo, setSelectedVideo] = useState(null);

  return (
    <section className="bg-white py-20 font-sans overflow-hidden relative">
      
      {/* 1. TOP NAVIGATION BAR */}
      <div className="max-w-[1600px] mx-auto px-6 mb-12 flex flex-col md:flex-row justify-between items-center gap-6">
        <button className="bg-black text-white px-8 py-3 rounded text-sm font-bold hover:scale-105 transition-transform" style={{ borderRadius: "0px" }}>
          Let's go
        </button>
      </div>

      {/* 2. AUTO-SCROLLING VIDEO GRID (Adjusted to 9:16 Aspect Ratio) */}
      <div className="relative flex overflow-hidden">
        <motion.div 
          className="flex gap-6 whitespace-nowrap"
          animate={selectedVideo ? {} : { x: ["0%", "-50%"] }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        >
          {scrollItems.map((item, idx) => (
            <div 
              key={`${item.id}-${idx}`}
              onClick={() => setSelectedVideo(item)}
              className="relative w-[225px] md:w-[250px] aspect-[9/16] overflow-hidden group cursor-pointer border border-gray-100"
              style={{ borderRadius: "0px" }}
            >
              <img src={item.img} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="" />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/40 transition-colors duration-500" />
              
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-xl">
                  <Play size={18} fill="white" className="text-white ml-0.5" />
                </div>
              </div>

              <div className="absolute bottom-0 left-0 w-full p-6 pt-16 bg-gradient-to-t from-black/80 to-transparent">
                <h4 className="text-white font-medium text-sm tracking-tight leading-tight whitespace-normal">
                  {item.title}
                </h4>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* 3. VIDEO POPUP MODAL */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10"
          >
            {/* Dark Backdrop */}
            <div 
              className="absolute inset-0 bg-black/90 backdrop-blur-xl cursor-crosshair"
              onClick={() => setSelectedVideo(null)}
            />

            {/* Modal Content */}
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative w-full max-w-5xl aspect-video bg-black overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)] z-10"
              style={{ borderRadius: "0px" }}
            >
              {/* Close button inside modal */}
              <button 
                onClick={() => setSelectedVideo(null)}
                className="absolute top-6 right-6 z-20 p-3 bg-black/20 backdrop-blur-md rounded text-white hover:bg-white hover:text-black transition-all"
                style={{ borderRadius: "0px" }}
              >
                <X size={20} />
              </button>

              <iframe
                src={`${selectedVideo.video}?autoplay=1`}
                title={selectedVideo.title}
                className="w-full h-full border-none"
                allow="autoplay; fullscreen"
              />

              <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-black via-black/40 to-transparent pointer-events-none">
                 <h3 className="text-white text-xl font-bold uppercase tracking-widest">{selectedVideo.title}</h3>
                 <p className="text-white/50 text-[10px] uppercase tracking-[0.4em] mt-1">Now Playing Success Story</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  );
}