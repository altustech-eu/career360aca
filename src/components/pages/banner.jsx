import React, { useState } from 'react';

const TopNavBanner = () => {
  const [activeTab, setActiveTab] = useState('For Individuals');

  const navItems = [
    'For Individuals',
    'For Businesses',
    'For Universities',
    'For Governments'
  ];

  return (
    <div className="w-full bg-[#0F1113] border-b border-white/5">
      <div className="max-w-full px-6 lg:px-12 flex justify-center lg:justify-start">
        <nav className="flex items-center space-x-8 lg:space-x-12">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => setActiveTab(item)}
              className="relative group py-4 transition-all duration-300 outline-none"
            >
              <span className={`text-[13px] font-bold tracking-tight px-1 ${
                activeTab === item 
                ? 'text-white' 
                : 'text-white/70 hover:text-white'
              }`}>
                {item}
              </span>
              
              {/* Active Indicator Bar (The white line at the bottom) */}
              {activeTab === item && (
                <div className="absolute bottom-0 left-0 w-full h-[3px] bg-white animate-in fade-in duration-300" />
              )}
            </button>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default TopNavBanner;