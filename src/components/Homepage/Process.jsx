import React from 'react';
import { ArrowRight } from 'lucide-react';

const EmployerServices = () => {
  const scrollingText = "We are trusted by the world's leading employers for supplying first-class talent.";

  return (
    <section className="bg-white overflow-hidden font-sans py-20">
      <div className="max-w-[1600px] mx-auto px-8 md:px-16">
        <div className="flex flex-col lg:flex-row items-stretch bg-white rounded-[3rem] overflow-hidden shadow-2xl min-h-[650px] relative border border-gray-100">
          
          {/* LEFT: ASYMMETRIC IMAGE SECTION */}
          <div className="lg:w-1/2 relative min-h-[400px]">
            {/* The base Black & White Image */}
            <img 
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200" 
              className="absolute inset-0 w-full h-full object-cover grayscale"
              alt="Office meeting"
            />
            {/* The Blue Overlay Clip (Angled) */}
            <div 
              className="absolute inset-0 bg-[#0e63ed] mix-blend-multiply opacity-90"
              style={{ clipPath: 'polygon(0 0, 75% 0, 85% 100%, 0% 100%)' }}
            />
            {/* Vertical Text Label */}
            <div className="absolute bottom-10 right-10 origin-bottom-right -rotate-90 text-white font-bold uppercase tracking-[0.3em] text-sm opacity-80 whitespace-nowrap">
               Inspiring early talent
            </div>
          </div>

          {/* RIGHT: TEXT CONTENT SECTION */}
          <div className="lg:w-1/2 flex flex-col bg-white relative">
            
            {/* INTERNAL AUTOSCROLLING HEADER */}
            <div className="bg-[#f8f9fa] py-4 border-b border-gray-100 overflow-hidden whitespace-nowrap">
              <div className="flex animate-marquee-fast">
                {[...Array(4)].map((_, i) => (
                  <span key={i} className="text-gray-400 text-xs font-bold mx-10 uppercase tracking-[0.2em]">
                    {scrollingText}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-12 md:p-20 flex flex-col justify-center h-full">
              {/* Sector Label */}
              <span className="text-[#0e63ed] font-bold text-xs uppercase tracking-[0.4em] mb-6 block text-left">
                Make a hire
              </span>

              {/* Main Heading */}
              <h2 className="text-5xl md:text-6xl font-bold text-slate-900 leading-[0.85] tracking-tighter mb-10 text-left">
                Employer Services
              </h2>

              {/* Blockquote Section */}
              <div className="relative mb-10 pl-6 border-l-4 border-blue-50">
                <p className="text-2xl md:text-3xl font-medium text-slate-800 leading-tight italic text-left">
                  "Education is the most powerful weapon you can use to change the world."
                </p>
                <footer className="mt-4 text-gray-500 font-medium text-left">— Nelson Mandela</footer>
              </div>

              {/* Description Text */}
              <p className="text-gray-500 text-lg leading-relaxed mb-12 max-w-xl text-left">
                The GRB Group is an award winning, multi-service early talent recruitment solutions partner. 
                Our team of sector-specific recruitment experts uphold our position as the most positively 
                reviewed provider in our industry.
              </p>

              {/* Button */}
              <button className="flex items-center gap-3 bg-[#0e63ed] text-white px-10 py-5 rounded-full font-bold w-fit hover:bg-blue-700 transition-all shadow-xl shadow-blue-100 group">
                Employer services 
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </button>
            </div>

            {/* DECORATIVE WATERMARK (Leaf shape at bottom) */}
            <div className="absolute -bottom-10 -right-10 opacity-[0.03] pointer-events-none">
              <div className="w-80 h-80 bg-slate-900 rounded-tl-[160px]"></div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee-fast {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee-fast {
          animation: marquee-fast 20s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default EmployerServices;