import React from 'react';

const ScrollingTicker = () => {
  const jobs = [
    "Client Support (Wealth) Industrial Placement £27,000",
    "Graduate Commercial Scheme £29,000",
    "Graduate Finance Scheme £32,000",
    "Graduate Customer Service and Reservation Agent £25,000",
    "Project Management Degree Apprenticeship",
  ];

  // We repeat the array 4 times to ensure there is enough content 
  // to fill the screen width during the loop.
  const marqueeItems = [...jobs, ...jobs, ...jobs, ...jobs];

  return (
    <div className="relative flex overflow-hidden bg-[#ccff00] py-4 border-y border-black/5 select-none">
      <div className="flex animate-ticker whitespace-nowrap items-center">
        {marqueeItems.map((job, index) => (
          <div key={index} className="flex items-center mx-10">
            <span className="text-black font-bold text-base md:text-lg tracking-tight uppercase">
              {job}
            </span>
            {/* Signature asterisk separator */}
            <span className="ml-16 text-xl text-black/40">✱</span>
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes ticker {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-ticker {
          animation: ticker 60s linear infinite;
          display: flex;
          width: fit-content;
        }
        /* Pause on hover for better accessibility */
        .animate-ticker:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default ScrollingTicker;