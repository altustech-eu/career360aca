import React from 'react';

const WordmarkTicker = () => {
  // Editorial Wordmarks (High-end brand names)
  const brands = [
    "Vogue", "Balenciaga", "Prada", "Hermès", "Loewe", 
    "Cartier", "Stüssy", "Supreme", "Off-White"
  ];

  // Doubling the array for the infinite loop logic
  const tickerWords = [...brands, ...brands, ...brands];

  return (
    <div className="relative flex overflow-hidden bg-white py-8 border-y border-black/5 select-none">
      
      {/* Editorial Gradient Overlays */}
      <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-white via-white/80 to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-white via-white/80 to-transparent z-10" />

      <div className="flex animate-ticker whitespace-nowrap items-center">
        {tickerWords.map((word, index) => (
          <div key={index} className="flex items-center mx-8 lg:mx-8 group">
            {/* The Wordmark */}
            <span className="text-2xl md:text-2xl font-black tracking-tighter text-black/20 group-hover:text-black transition-all duration-700 cursor-default uppercase">
              {word}
            </span>
            
            {/* Decorative Separator (Prasanth D Studio Style) */}
            <div className="ml-16 flex gap-1 items-center opacity-10 group-hover:opacity-100 transition-opacity duration-700">
               <div className="w-1.5 h-1.5 rounded-full bg-black" />
               <div className="w-1.5 h-1.5 rounded-full bg-[#ccff00]" />
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes ticker {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
        .animate-ticker {
          animation: ticker 25s linear infinite;
          display: flex;
          width: fit-content;
        }
        .animate-ticker:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default WordmarkTicker;