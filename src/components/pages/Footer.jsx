import React, { useState } from 'react';
import { Linkedin, ArrowUpRight, Mail } from 'lucide-react';
import { Icon } from '@iconify/react';

const locations = [
  { 
    name: "CHENNAI", 
    phone: "+91 98401 23456", 
    address: "Altus Cybersecurity, 12th Floor, Tek Towers, OMR, Chennai, TN 600097" 
  },
  { 
    name: "COIMBATORE", 
    phone: "+91 98402 34567", 
    address: "Altus Cybersecurity, 4th Floor, TIDEL Park, Avinashi Rd, Coimbatore, TN 641014" 
  }
];

export default function Footer() {
  const [activeLoc, setActiveLoc] = useState(0);
  const currentLoc = locations[activeLoc];

  return (
    <footer className="w-full bg-[#050505] text-white font-sans py-16 border-t border-white/5">
      <div className="max-w-[1400px] mx-auto px-8 md:px-16">
        
        {/* 1. TOP SECTION: LOCATION SWITCHER & SOCIALS */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-10 mb-12">
          
          {/* Location Tab Switcher */}
          <div className="flex bg-[#1a1a1a] rounded-full p-1 border border-white/5">
            {locations.map((loc, idx) => (
              <button
                key={loc.name}
                onClick={() => setActiveLoc(idx)}
                className={`px-6 py-2.5 rounded-full text-[11px] font-black tracking-[0.15em] transition-all duration-300 ${
                  activeLoc === idx 
                  ? 'bg-[#DD0000] text-white shadow-lg' 
                  : 'text-gray-500 hover:text-white'
                }`}
              >
                {loc.name}
              </button>
            ))}
          </div>

          {/* Contact & Social Buttons */}
          <div className="flex gap-3">
            <a 
              href="mailto:bloomfieldrealtors@gmail.com" 
              className="w-10 h-10 rounded-full bg-[#1a1a1a] flex items-center justify-center text-gray-400 hover:bg-[#DD0000] hover:text-white transition-all border border-white/5"
              title="Email Us"
            >
              <Mail size={16} />
            </a>
            <a 
              href="https://www.instagram.com/bloomfieldrealtors/" 
              target="_blank" 
              rel="noreferrer"
              className="w-10 h-10 rounded-full bg-[#1a1a1a] flex items-center justify-center text-gray-400 hover:bg-[#DD0000] hover:text-white transition-all border border-white/5"
              title="Instagram"
            >
              <Icon icon="mdi:instagram" className="text-base" />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 rounded-full bg-[#1a1a1a] flex items-center justify-center text-gray-400 hover:bg-[#DD0000] hover:text-white transition-all border border-white/5"
              title="LinkedIn"
            >
              <Linkedin size={16} fill="currentColor" />
            </a>
          </div>
        </div>

        {/* 2. CONTACT INFO BAR */}
        <div className="flex flex-col md:flex-row gap-6 md:gap-12 items-start mb-24 transition-all duration-500">
          <p className="text-lg md:text-xl font-black tracking-tight text-[#FFCC00]">
            {currentLoc.phone}
          </p>
          <p className="text-gray-500 text-sm md:text-base font-medium">
            {currentLoc.address}
          </p>
        </div>

        {/* 3. BOTTOM LEGAL BAR */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-600 text-xs md:text-sm font-medium tracking-tight">
            © 1997-2026 All rights reserved. Intechnic Corporation.
          </p>

          <div className="flex gap-8">
            <a 
              href="https://example.com/terms" 
              className="group flex items-center gap-1.5 text-xs md:text-sm font-bold text-gray-400 hover:text-[#FFCC00] transition-colors"
            >
              Terms and Conditions
              <ArrowUpRight size={14} className="text-gray-600 group-hover:text-[#FFCC00]" />
            </a>
            <a 
              href="https://example.com/privacy" 
              className="group flex items-center gap-1.5 text-xs md:text-sm font-bold text-gray-400 hover:text-[#FFCC00] transition-colors"
            >
              Privacy Policy
              <ArrowUpRight size={14} className="text-gray-600 group-hover:text-[#FFCC00]" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}