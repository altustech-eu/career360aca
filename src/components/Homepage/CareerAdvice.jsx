import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

// 1. EXPANDED & RESPONSIVE DATA ARRAY
// Added 'mobileSize' and adjusted coordinates for a tighter mobile view
const galleryImages = [
  { id: 1, src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000", top: "10%", left: "10%", size: "md:w-64 md:h-80 w-32 h-40", index: 0 },
  { id: 2, src: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1000", top: "35%", left: "25%", size: "md:w-56 md:h-72 w-28 h-36", index: 1, showLaser: true },
  { id: 3, src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1000", top: "5%", left: "55%", size: "md:w-80 md:h-96 w-40 h-48", index: 2 },
  { id: 4, src: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1000", top: "55%", left: "5%", size: "md:w-60 md:h-60 w-24 h-24", index: 3 },
  { id: 5, src: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1000", top: "65%", left: "40%", size: "md:w-72 md:h-96 w-36 h-48", index: 4, showLaser: true },
  { id: 6, src: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1000", top: "20%", left: "75%", size: "md:w-64 md:h-80 w-32 h-40", index: 5 },
  { id: 7, src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1000", top: "70%", left: "70%", size: "md:w-56 md:h-80 w-28 h-40", index: 6 },
  { id: 8, src: "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?q=80&w=1000", top: "15%", left: "40%", size: "md:w-48 md:h-48 w-24 h-24", index: 7 },
  { id: 9, src: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1000", top: "45%", left: "80%", size: "md:w-72 md:h-[400px] w-36 h-48", index: 8 },
  { id: 10, src: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=1000", top: "80%", left: "20%", size: "md:w-64 md:h-64 w-32 h-32", index: 9 },
  { id: 11, src: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1000", top: "5%", left: "30%", size: "md:w-40 md:h-56 w-20 h-28", index: 10 },
  { id: 12, src: "https://images.unsplash.com/photo-1503443207922-dff7d543fd0e?q=80&w=1000", top: "85%", left: "60%", size: "md:w-72 md:h-72 w-36 h-36", index: 11 },
];

const ParallaxCard = ({ img, scrollYProgress }) => {
  // Logic remains consistent but index-based offsets are slightly tighter for 12 images
  const scaleEnd = Math.min(0.3 + (img.index * 0.06), 1);
  const opacityStart = Math.min(0.05 + (img.index * 0.06), 0.9);
  const opacityEnd = Math.min(0.6 + (img.index * 0.06), 1);

  // Desktop vs Mobile check would be handled by CSS classes in 'size'
  const scale = useTransform(scrollYProgress, [0, scaleEnd], [0.6, 2.2]);
  const opacity = useTransform(scrollYProgress, [0, opacityStart, opacityEnd], [0, 1, 0]);
  
  // Parallax Y movement: items deeper in the list move faster to create depth
  const yMove = useTransform(scrollYProgress, [0, 1], [0, -400 * (img.index * 0.3 + 1)]);

  return (
    <motion.div
      style={{ scale, opacity, y: yMove, top: img.top, left: img.left }}
      className={`absolute ${img.size} overflow-hidden bg-zinc-900 border border-white/5 shadow-2xl`}
    >
      <img 
        src={img.src} 
        className="w-full h-full object-cover grayscale brightness-75 contrast-125 transition-all duration-700 hover:grayscale-0 hover:brightness-100" 
        alt="editorial portrait" 
      />

      {img.showLaser && (
        <motion.div 
          animate={{ x: ["-100%", "200%"] }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          className="absolute inset-y-0 w-[1.5px] bg-red-600 shadow-[0_0_12px_rgba(220,38,38,0.7)] z-10"
          style={{ left: '50%' }}
        />
      )}
      
      {/* Texture overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%] pointer-events-none opacity-10" />
    </motion.div>
  );
};

const CareerAdvice = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <section ref={containerRef} className="relative h-[250vh] bg-black">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        
        {/* Parallax Viewport */}
        <div className="relative w-full h-full max-w-[1600px] mx-auto">
          {galleryImages.map((img) => (
            <ParallaxCard 
              key={img.id} 
              img={img} 
              scrollYProgress={scrollYProgress} 
            />
          ))}
        </div>

        {/* Cinematic Vignette - Darkens edges to create the 'tunnel' feel */}
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,black_100%)]" />
        
        {/* Subtle Bottom Glow */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent z-50" />
      </div>

      {/* Spacer allows the user to finish the scroll animation */}
      <div className="h-screen bg-black" />
    </section>
  );
};

export default CareerAdvice;