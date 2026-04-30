import React, { useState, useCallback, useEffect } from 'react';
import { Play, ChevronLeft, ChevronRight } from 'lucide-react';

// Exact import format for Trainer assets
import trainer1 from "../../assests/Trainers/Trainer1.webp";
import trainer2 from "../../assests/Trainers/Trainer2.webp";
import trainer3 from "../../assests/Trainers/Trainer4.webp";

const instructors = [
  { 
    name: "Jordan Whitfield", 
    lessons: "15 lessons", 
    title: "Studio Portraits", 
    desc: "Jordan Whitfield breaks down professional studio lighting and posing for high-end fashion magazines.",
    portrait: trainer1,
    bgColor: "#FACC15" 
  },
  { 
    name: "Noah Buscher", 
    lessons: "12 lessons", 
    title: "Urban Lighting", 
    desc: "Master the art of cinematic cityscapes and low-light street photography with Noah Buscher.",
    portrait: trainer2,
    bgColor: "#D91E1E" 
  },
  { 
    name: "Sam Burriss", 
    lessons: "16 lessons", 
    title: "B&W Photography", 
    desc: "Sam Burriss teaches how to work with your subject in a minimalist, high-contrast editorial environment.",
    portrait: trainer3,
    bgColor: "#1A1A1A" 
  }
];

const products = [
  { name: "MAX", img: trainer1, color: "#FFCC00" },
  { name: "ZOOM", img: trainer1, color: "#FF0000" },
  { name: "AIR", img: trainer1, color: "#333333" }
];

const newsItems = [
  { title: "Future of Digital Art Direction", date: "MAY 20, 2026" },
  { title: "The Rise of Minimalist Aesthetics", date: "APR 15, 2026" },
  { title: "Sport Footwear Studio Photography", date: "MAR 2, 2026" }
];

const Hero = () => {
  const [activeCourse, setActiveCourse] = useState(0);

  const handleNext = useCallback(() => {
    setActiveCourse((prev) => (prev + 1) % instructors.length);
  }, []);

  const handlePrev = useCallback(() => {
    setActiveCourse((prev) => (prev - 1 + instructors.length) % instructors.length);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000); 
    return () => clearInterval(interval);
  }, [handleNext]);

  return (
    <section 
      style={{ backgroundColor: instructors[activeCourse].bgColor }}
      className="relative w-full h-auto lg:h-[900px] font-sans overflow-hidden flex flex-col transition-colors duration-1000 selection:bg-white selection:text-black"
    >
      
      {/* MAIN HERO CONTENT */}
      <div className="flex-grow grid grid-cols-1 lg:grid-cols-2 items-center px-6 lg:px-16 pt-32 lg:pt-16">
        <div key={`text-${activeCourse}`} className="z-10 py-10 text-center lg:text-left lg:pr-20 animate-in fade-in slide-in-from-left-8 duration-700">
          <h1 className={`text-5xl md:text-6xl lg:text-[100px] font-extralight mb-5 leading-[1] tracking-tighter ${activeCourse === 0 ? 'text-black' : 'text-white'}`}>
            {instructors[activeCourse].title.split(' ')[0]} <br className="hidden lg:block" /> {instructors[activeCourse].title.split(' ')[1]}
          </h1>
          <p className={`text-base lg:text-lg font-medium mb-12 max-w-sm mx-auto lg:mx-0 ${activeCourse === 0 ? 'text-black/60' : 'text-white/30'}`}>
            {instructors[activeCourse].desc}
          </p>
          <button className={`group inline-flex items-center gap-4 rounded-full px-10 py-4 font-bold transition-all duration-300 border-0 ${activeCourse === 0 ? 'bg-black text-white hover:bg-zinc-800' : 'bg-white text-black hover:bg-zinc-200'}`}>
            <Play className="w-4 h-4 fill-current" />
            <span className="text-[11px] uppercase tracking-[0.25em]">Watch trailer</span>
          </button>
        </div>

        <div className="h-[250px] lg:h-[450px] flex items-end justify-center relative mt-10 lg:mt-0 lg:ml-20"> 
          <div key={`img-${activeCourse}`} className="relative h-full w-full flex items-end justify-center animate-in fade-in zoom-in-95 duration-1000 mt-12">
            <img 
              src={instructors[activeCourse].portrait} 
              alt="Lead Instructor" 
              className={`h-full lg:h-[95%] w-auto object-contain transition-all duration-1000 opacity-100`} // Removed grayscale and mix-blend
              style={{
                maskImage: 'linear-gradient(to top, rgba(0,0,0,1) 80%, rgba(0,0,0,0) 100%)',
                WebkitMaskImage: 'linear-gradient(to top, rgba(0,0,0,1) 80%, rgba(0,0,0,0) 100%)'
              }}
            />
          </div>
        </div>
      </div>

      {/* BENTO FOOTER */}
      <div className={`grid grid-cols-1 lg:grid-cols-[1.3fr,1fr,1fr] h-auto w-full items-end`}>
        <div className="bg-white flex items-center justify-end px-10 py-6 lg:py-0 h-full lg:h-[500px] relative">
          <div className="absolute -top-8 right-0 bg-white px-8 py-4 flex gap-6 shadow-2xl z-20">
            <ChevronLeft onClick={handlePrev} className="w-5 h-5 cursor-pointer text-black hover:text-blue-600" />
            <ChevronRight onClick={handleNext} className="w-5 h-5 cursor-pointer text-black hover:text-blue-600" />
          </div>

          <div className="flex gap-6 lg:gap-8 overflow-x-auto no-scrollbar justify-end w-full">
            {instructors.map((person, idx) => (
              <div 
                key={idx}
                className={`transition-all duration-500 cursor-pointer min-w-[130px] lg:min-w-[140px] ${idx === activeCourse ? 'opacity-100' : 'opacity-20 hover:opacity-50'}`}
                onClick={() => setActiveCourse(idx)}
              >
                <div className={`p-4 ${idx === activeCourse ? 'bg-zinc-50' : 'bg-transparent'}`}>
                  <h4 className="text-lg font-bold leading-tight mb-1 text-black">{person.name}</h4>
                  <p className="text-[9px] font-bold text-black/50 uppercase tracking-widest">{person.lessons}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ backgroundColor: products[activeCourse].color }} className="aspect-square w-full flex items-center justify-center relative overflow-hidden group transition-colors duration-1000 shadow-lg">
          <img 
            key={`prod-${activeCourse}`}
            src={products[activeCourse].img} 
            alt="Feature Product" 
            className="w-44 lg:w-60 rotate-[-15deg] drop-shadow-[0_20px_40px_rgba(0,0,0,0.3)] z-10 transition-all duration-700 group-hover:scale-110 animate-in fade-in zoom-in opacity-100" // Removed grayscale
          />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white/10 font-black text-[90px] lg:text-[140px] pointer-events-none italic text-center leading-none uppercase">
            {products[activeCourse].name}
          </div>
        </div>

        <div className={`aspect-square w-full p-10 lg:p-14 flex flex-col justify-between selection:bg-white selection:text-black shadow-2xl transition-colors duration-1000 ${activeCourse === 0 ? 'bg-zinc-900 text-white' : 'bg-black text-white'}`}>
          <div key={`news-${activeCourse}`} className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <p className="text-[9px] font-bold uppercase tracking-[0.6em] text-white/40 mb-4 lg:mb-8">In The News</p>
            <h3 className="text-xl lg:text-3xl font-bold leading-tight max-w-xs cursor-pointer hover:text-blue-400 transition-colors">
              {newsItems[activeCourse].title}
            </h3>
            <p className="text-[10px] text-white/50 mt-3 lg:mt-6 font-bold uppercase">{newsItems[activeCourse].date}</p>
          </div>

          <div className="flex justify-between items-end mt-8 lg:mt-0">
            <a href="/" className="text-[10px] font-black uppercase tracking-widest pb-1 hover:text-blue-400 transition-all">
              Read more
            </a>
            <div className="flex gap-2">
              {[0, 1, 2].map((dot) => (
                <div 
                  key={dot}
                  className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${activeCourse === dot ? 'bg-white w-4' : 'bg-white/30'}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  );
};

export default Hero;