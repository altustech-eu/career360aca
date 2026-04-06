import React from 'react';

const MatchmakingSection = () => {
  return (
    /* Increased py-16 to py-32 and added a minimum height */
    <section className="relative w-full bg-white py-32 md:py-48 min-h-[500px] md:min-h-[600px] flex items-center justify-center overflow-hidden">
      
      {/* Decorative top border in neon yellow */}
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#ccff00]"></div>

      {/* Main text content - Kept max-w-6xl for wide impact */}
      <div className="relative z-10 max-w-7xl w-full px-6 md:px-12 text-left font-sans leading-[1.1] tracking-tight">
        <h2 className="text-4xl md:text-6xl lg:text-7xl text-black">
          {/* First Line */}
          <span className="font-black mr-4">Join our</span>
          <span className="font-medium text-gray-400 mr-4">growing community</span>
          <span className="font-black mr-4">and</span>
          <br className="hidden lg:block" />

          {/* Second Line */}
          <span className="font-black mr-4">experience our</span>
          <span className="font-medium text-gray-400 mr-4">industry-leading</span>
          <br className="hidden lg:block" />

          {/* Third Line */}
          <span className="font-black mr-4">career</span>
          <span className="font-medium text-gray-400 mr-4">matchmaking service</span>
          <span className="font-medium text-gray-400 mr-4">for</span>
          <br className="hidden lg:block" />

          {/* Fourth Line */}
          <span className="font-medium text-gray-400 mr-4">graduates</span>
          <span className="font-black">and students</span>
        </h2>
      </div>

      {/* Oversized decorative comma - Adjusted positioning for the taller container */}
      <div className="absolute -bottom-10 right-0 md:right-20 leading-none">
        <span className="text-[300px] md:text-[500px] font-black text-[#f4f4f4] select-none pointer-events-none tracking-tighter">
          ,
        </span>
      </div>
    </section>
  );
};

export default MatchmakingSection;