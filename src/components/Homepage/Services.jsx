import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GraduationCap, Briefcase, Hammer, ArrowRight, CheckCircle2 } from 'lucide-react';
import HeroImage from '../../assests/hero-image.png';

const GermanHero = () => {
  const [activePath, setActivePath] = useState("study");
  const [activeCategory, setActiveCategory] = useState("Everything");

  const germanPaths = [
    { 
      id: "study", 
      label: "Study in Germany", 
      icon: <GraduationCap size={20} />,
      cards: [
        { name: "University", movie: "Bachelors / Masters", color: "bg-red-500" },
        { name: "Language", movie: "B1 / B2 Prep", color: "bg-blue-600" },
        { name: "Pathway", movie: "Foundation Year", color: "bg-green-500" }
      ]
    },
    { 
      id: "apprenticeship", 
      label: "Apprenticeship", 
      icon: <Hammer size={20} />,
      cards: [
        { name: "IT Specialist", movie: "Software Dev", color: "bg-slate-800" },
        { name: "Nursing", movie: "Healthcare", color: "bg-orange-500" },
        { name: "Mechanic", movie: "Industrial", color: "bg-indigo-600" }
      ]
    },
    { 
      id: "work", 
      label: "Work in Germany", 
      icon: <Briefcase size={20} />,
      cards: [
        { name: "Engineer", movie: "Mechanical / IT", color: "bg-emerald-600" },
        { name: "Doctor", movie: "Medical Field", color: "bg-rose-600" },
        { name: "Manager", movie: "Business Ops", color: "bg-amber-500" }
      ]
    }
  ];

  const resources = [
    { title: "German A1 Unlocked", desc: "Start from zero and master basic conversational German." },
    { title: "Visa Mastery", desc: "Step-by-step guide to securing your student or work visa." },
    { title: "University Finder", desc: "How to apply to tuition-free public universities." },
    { title: "Ausbildung Connect", desc: "Finding high-paying apprenticeships across Germany." },
    { title: "CV Optimization", desc: "Rewrite your resume to meet German industry standards." },
    { title: "LinkedIn Unlocked", desc: "Network with German recruiters and secure interviews." },
    { title: "Health Insurance", desc: "Everything you need to know about TK, AOK, and more." },
    { title: "Accommodation", desc: "Secrets to finding student WG or apartments fast." },
    { title: "PR Pathway", desc: "Strategies for long-term residency and citizenship." },
  ];

  const currentCards = germanPaths.find(p => p.id === activePath).cards;

  return (
    <div className="bg-white font-sans">
      {/* 1. TOP TITLE SECTION - ALIGN LEFT, LIGHT WEIGHT */}
      <section className="pt-20 pb-10 px-6 text-left max-w-7xl mx-auto">
        <h1 className="text-2xl font-bold text-slate-800 mb-4 tracking-tight">Who Should Learn German?</h1>
        <p className="text-slate-400 font-medium text-sm">Study in Germany , Apprenticeship in Germany , Work in Germany</p>
      </section>

      {/* 2. ICON NAVIGATION BAR - ALIGN LEFT */}
      <nav className="border-b border-gray-100">
        <div className="max-w-7xl mx-auto flex justify-start gap-6 md:gap-12 px-6">
          {germanPaths.map((path) => (
            <button
              key={path.id}
              onClick={() => setActivePath(path.id)}
              className="flex flex-col items-start group relative pb-6 pt-2 transition-all"
            >
              <div className={`mb-3 transition-colors duration-300 ${activePath === path.id ? 'text-blue-900' : 'text-slate-300 group-hover:text-slate-500'}`}>
                {path.icon}
              </div>
              <span className={`text-[10px] md:text-[11px] font-medium uppercase tracking-widest transition-colors ${activePath === path.id ? 'text-blue-500' : 'text-slate-400'}`}>
                {path.label}
              </span>
              {activePath === path.id && (
                <motion.div layoutId="navIndicator" className="absolute bottom-0 w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-b-[10px] border-b-[#f2f8ff]" />
              )}
            </button>
          ))}
        </div>
      </nav>

      {/* 3. CHARACTER SLIDER PANEL - NO RADIUS */}
      <section className="bg-[#f2f8ff] py-16 md:py-24 relative overflow-hidden px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-8 md:gap-4 justify-start items-end min-h-[320px]">
            <AnimatePresence mode="wait">
              {currentCards.map((card, idx) => (
                <motion.div
                  key={`${activePath}-${card.name}`}
                  initial={{ opacity: 0, y: 20, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: idx === 1 ? 1.05 : 1 }}
                  exit={{ opacity: 0, y: -20, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className={`w-[160px] md:w-[200px] h-[260px] md:h-[300px] rounded-none ${card.color} relative p-6 shadow-2xl shadow-black/10 flex flex-col justify-end group cursor-pointer`}
                >
                  <div className="absolute -top-12 md:-top-16 left-1/2 -translate-x-1/2 w-32 md:w-44 transition-transform duration-500 group-hover:-translate-y-4">
                    <img src={HeroImage} className="w-full h-auto drop-shadow-[0_20px_30px_rgba(0,0,0,0.3)]" alt={card.name} />
                  </div>
                  <div className="relative z-10 text-white text-left">
                    <h4 className="font-medium text-lg md:text-xl leading-tight">{card.name}</h4>
                    <p className="text-white/70 text-[9px] md:text-[10px] uppercase font-light tracking-widest mt-1">{card.movie}</p>
                    <div className="w-full h-1 bg-white/20 rounded-none mt-4 overflow-hidden">
                      <motion.div initial={{ width: 0 }} animate={{ width: "60%" }} className="h-full bg-white/60" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[150px] md:text-[250px] font-black text-blue-500/5 pointer-events-none select-none uppercase">
          {activePath}
        </div>
      </section>

      {/* 4. NEW SECTION: RESOURCE HUB - ALIGN LEFT, LIGHT WEIGHT, NO RADIUS */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          {/* Header */}
          <div className="text-left mb-16">
            <h2 className="text-4xl font-bold text-slate-800">
              <span className="text-[#FFCC00] font-medium">German Career</span> Training
            </h2>
            <div className="w-16 h-1 bg-[#FF5722]/20 my-6" />
            <p className="text-slate-500 text-lg max-w-xl font-medium">
              Guides, templates, and courses to help you land your dream role in Germany.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-12">
            {/* Sidebar Filters - NO RADIUS */}
            <aside className="w-full lg:w-64 flex-shrink-0">
              <div className="border border-slate-100 rounded-none p-8 shadow-sm">
                <h5 className="text-[11px] font-medium uppercase text-slate-400 mb-6 tracking-widest">What do you want to master?</h5>
                <ul className="space-y-4">
                  {["Everything", "Language Prep", "Visa Mastery", "University Admission", "Apprenticeship Tips", "Career Coaching"].map((item) => (
                    <li 
                      key={item}
                      onClick={() => setActiveCategory(item)}
                      className={`text-[13px] font-medium cursor-pointer transition-colors ${activeCategory === item ? 'text-[#FFCC00]' : 'text-slate-400 hover:text-slate-600'}`}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </aside>

            {/* Content Grid - NO RADIUS, ALIGN LEFT */}
            <div className="flex-grow grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {resources.map((res, i) => (
                <motion.div
                  whileHover={{ y: -5 }}
                  key={i}
                  className="bg-white border border-slate-50 rounded-none p-8 shadow-sm hover:shadow-md transition-all group cursor-pointer text-left flex flex-col items-start"
                >
                  <h4 className="text-slate-800 font-light text-lg mb-3 group-hover:text-[#FFCC00] transition-colors tracking-tight">
                    {res.title}
                  </h4>
                  <p className="text-slate-400 text-xs leading-relaxed font-extralight mb-6">
                    {res.desc}
                  </p>
                  <div className="mt-auto flex items-center gap-2 text-[10px] font-light uppercase tracking-widest text-[#FFCC00] opacity-0 group-hover:opacity-100 transition-opacity">
                    Access Resource <ArrowRight size={12} />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GermanHero;