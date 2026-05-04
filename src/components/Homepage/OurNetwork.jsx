import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Exact import format for the logos from your employerslogo folder
import cityUni from "../../assests/employerslogo/City University.webp";
import deMontfort from "../../assests/employerslogo/De Montfort.webp";
import edinburghNapier from "../../assests/employerslogo/Edinburgh Napier University.webp";
import edinburghUni from "../../assests/employerslogo/Edinburgh university.webp";
import glasgowSchool from "../../assests/employerslogo/Glasgow school of English.webp";
import londonSouthBank from "../../assests/employerslogo/London South Bank University (LSBU).webp";
import loughborough from "../../assests/employerslogo/Loughborough University.webp";
import middlesex from "../../assests/employerslogo/Middlesex .webp";
import navitas from "../../assests/employerslogo/Navitas pathways.webp";
import queenMargaret from "../../assests/employerslogo/Queen Margaret University.webp";
import regentsUni from "../../assests/employerslogo/Regent’s University London.webp";
import staffordshire from "../../assests/employerslogo/Staffordshire University.webp";
import uel from "../../assests/employerslogo/University East London ( UEL).webp";
import bradford from "../../assests/employerslogo/University of Bradford.webp";
import bristol from "../../assests/employerslogo/University of Bristol.webp";
import creativeArts from "../../assests/employerslogo/University of Creative Arts.webp";
import dundee from "../../assests/employerslogo/University of Dundee.webp";
import eastAnglia from "../../assests/employerslogo/University of East Anglia.webp";

const logoGroups = [
  [
    { id: 1, name: "City University", img: cityUni },
    { id: 2, name: "De Montfort", img: deMontfort },
    { id: 3, name: "Edinburgh Napier", img: edinburghNapier },
    { id: 4, name: "Edinburgh University", img: edinburghUni },
    { id: 5, name: "Glasgow School of English", img: glasgowSchool },
    { id: 6, name: "London South Bank", img: londonSouthBank },
    { id: 7, name: "Loughborough University", img: loughborough },
    { id: 8, name: "Middlesex", img: middlesex },
    { id: 9, name: "Navitas Pathways", img: navitas },
  ],
  [
    { id: 10, name: "Queen Margaret", img: queenMargaret },
    { id: 11, name: "Regent's University", img: regentsUni },
    { id: 12, name: "Staffordshire University", img: staffordshire },
    { id: 13, name: "UEL", img: uel },
    { id: 14, name: "Bradford University", img: bradford },
    { id: 15, name: "Bristol University", img: bristol },
    { id: 16, name: "Creative Arts", img: creativeArts },
    { id: 17, name: "Dundee University", img: dundee },
    { id: 18, name: "East Anglia University", img: eastAnglia },
  ]
];

export default function OurNetwork() {
  const [page, setPage] = useState(0);

  const nextSlide = () => setPage((prev) => (prev + 1) % logoGroups.length);
  const prevSlide = () => setPage((prev) => (prev - 1 + logoGroups.length) % logoGroups.length);

  return (
    <section className="bg-white py-32 md:py-48 font-sans overflow-hidden">
      <div className="max-w-[1500px] mx-auto px-6 md:px-16">
        
        {/* HEADING */}
        <div className="mb-24 md:mb-32">
          <h2 className="text-center md:text-left leading-none flex flex-col">
            <span className="text-6xl md:text-6xl font-thin text-slate-300 lowercase tracking-tighter">Our</span>
            <span className="text-7xl md:text-[7rem] font-black text-[#DD0000] uppercase tracking-tighter -mt-4 md:-mt-12">network</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 lg:gap-32 items-stretch">
          
          {/* LOGO GRID */}
          <div className="lg:col-span-7 relative flex flex-col justify-center">
            <div className="absolute left-[-20px] lg:left-[-60px] top-1/2 -translate-y-1/2 z-10">
              <button onClick={prevSlide} className="p-3 bg-[#FFCC00] rounded-full text-black shadow-xl hover:scale-110 transition-all">
                <ChevronLeft size={24} />
              </button>
            </div>

            <div className="bg-slate-50/80 rounded-[3rem] p-12 md:p-20 min-h-[550px] flex flex-col justify-between border border-slate-100 shadow-sm">
              <AnimatePresence mode="wait">
                <motion.div 
                  key={page}
                  initial={{ opacity: 0, scale: 0.98, x: 20 }}
                  animate={{ opacity: 1, scale: 1, x: 0 }}
                  exit={{ opacity: 0, scale: 0.98, x: -20 }}
                  transition={{ duration: 0.5, ease: "circOut" }}
                  className="grid grid-cols-3 gap-x-12 gap-y-16 items-center justify-items-center"
                >
                  {logoGroups[page].map((logo) => (
                    <div key={logo.id} className="w-full h-24 flex items-center justify-center group cursor-pointer">
                      <img 
                        src={logo.img} 
                        alt={logo.name} 
                        className="max-h-16 w-auto grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500 ease-in-out" 
                      />
                    </div>
                  ))}
                </motion.div>
              </AnimatePresence>
              
              {/* Dots */}
              <div className="flex justify-center gap-3 mt-12">
                {logoGroups.map((_, i) => (
                  <button
                    key={i} 
                    onClick={() => setPage(i)}
                    className={`h-2 transition-all duration-500 rounded-full ${i === page ? 'w-12 bg-[#FFCC00]' : 'w-2 bg-slate-300'}`} 
                  />
                ))}
              </div>
            </div>

            <div className="absolute right-[-20px] lg:right-[-60px] top-1/2 -translate-y-1/2 z-10">
              <button onClick={nextSlide} className="p-3 bg-[#FFCC00] rounded-full text-black shadow-xl hover:scale-110 transition-all">
                <ChevronRight size={24} />
              </button>
            </div>
          </div>

          {/* TEXT CONTENT */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <div className="max-w-xl">
              <p className="text-4xl md:text-5xl font-medium text-[#1a365d] leading-[1.2] tracking-tight">
                We offer <span className="text-[#DD0000] font-bold">education that empowers students</span> through our global network.
              </p>
              <p className="mt-8 text-lg text-slate-500 leading-relaxed">
                By uniting prestigious institutions and recruitment experts, we are creating opportunities for scholars around the world.
              </p>
              <div className="mt-16 flex flex-col sm:flex-row gap-6">
                 <button className="bg-[#1a365d] text-white px-10 py-5 rounded-full font-bold text-base hover:bg-[#DD0000] transition-all">
                   Partner With Us
                 </button>
                 <button className="border-2 border-slate-200 text-slate-600 px-10 py-5 rounded-full font-bold text-base hover:border-[#1a365d] hover:text-[#1a365d] transition-all">
                   Explore Institutions
                 </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}