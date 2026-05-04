import React, { useState, useMemo, useRef } from 'react';
import { Icon } from '@iconify/react';

export default function GermanyPathwaysUIKit() {
  // --- FUNCTIONALITY: STATE MANAGEMENT ---
  const [activeTab, setActiveTab] = useState(1); // Default to Ausbildung
  const [activeSubFilter, setActiveSubFilter] = useState('Overview');
  const scrollRef = useRef(null);

  const tabs = [
    { 
      name: 'Students', 
      sub: 'Academic Pathway', 
      icon: "solar:graduation-cap-bold", 
      color: 'text-violet-600', 
      bg: 'bg-violet-50', 
      activeBg: 'bg-[#DD0000]',
      heroTitle: "Study in Germany: Your Future",
      heroDesc: "100% German Academic Excellence | World Class Research",
      sideDesc: "Germany offers world-class education systems for international students with thousands of English-taught programs.",
      filters: ['Overview', 'Engineering', 'IT & AI', 'Business', 'Life Sciences', 'Arts']
    },
    { 
      name: 'Ausbildung', 
      sub: 'Vocational Training', 
      icon: "solar:mask-happly-bold", 
      color: 'text-emerald-600', 
      bg: 'bg-emerald-50', 
      activeBg: 'bg-[#DD0000]',
      heroTitle: "Ausbildung: Your Career, Our Priority",
      heroDesc: "100% German Ecosystem | Work + Study Model",
      sideDesc: "Ausbildung is Germany's dual vocational training system that combines practical work in a company with classroom learning.",
      filters: ['Overview', 'Healthcare', 'IT', 'Retail & Hospitality', 'Logistics', 'Technical']
    },
    { 
      name: 'Healthcare', 
      sub: 'Healthcare Careers', 
      icon: "solar:heart-pulse-bold", 
      color: 'text-blue-600', 
      bg: 'bg-blue-50', 
      activeBg: 'bg-[#DD0000]',
      heroTitle: "Healthcare Professionals in Germany",
      heroDesc: "Secure Your Future | High Demand Roles",
      sideDesc: "Germany urgently needs skilled healthcare professionals. Build a secure career with excellent growth.",
      filters: ['Overview', 'Nurses', 'Physiotherapists', 'Doctors', 'Radiology']
    },
    { 
      name: 'Jobseekers', 
      sub: 'Work Opportunities', 
      icon: "solar:case-bold", 
      color: 'text-orange-600', 
      bg: 'bg-orange-50', 
      activeBg: 'bg-[#DD0000]',
      heroTitle: "Jobseekers & Direct Employment",
      heroDesc: "Your Path to Work in Germany | Skilled & Technical",
      sideDesc: "Explore flexible immigration and employment options to start your career journey in Germany.",
      filters: ['Overview', 'Opportunity Card', 'IT Jobs', 'Engineers', 'Finance']
    },
    { 
      name: 'Direct Employment', 
      sub: 'Skilled & Blue Collar', 
      icon: "solar:user-speak-bold", 
      color: 'text-indigo-600', 
      bg: 'bg-indigo-50', 
      activeBg: 'bg-[#DD0000]',
      heroTitle: "Direct Entry: Skilled Workers",
      heroDesc: "Verified Employer Contracts | Smooth Relocation",
      sideDesc: "Secure stable jobs in high-demand roles with long-term growth and settlement opportunities.",
      filters: ['Overview', 'Mechatronics', 'Construction', 'Logistics', 'Hospitality']
    },
  ];

  // --- REFINED DATA MAPPING ---
  const filteredCards = useMemo(() => {
    const allPathwayData = {
      0: [ // Students
        { id: 'S1', category: 'Engineering', title: 'Automotive Engineering', sub: 'Mechanical & Systems', img: 'https://images.pexels.com/photos/3807329/pexels-photo-3807329.jpeg?auto=compress&cs=tinysrgb&w=400', points: ['TU9 Top Ranked', 'Industry Internships'], minLvl: 'B2', recLvl: 'C1', icon: "solar:settings-bold", accent: 'bg-[#DD0000]' },
        { id: 'S2', category: 'IT & AI', title: 'Data Science & AI', sub: 'Machine Learning', img: 'https://images.pexels.com/photos/5473955/pexels-photo-5473955.jpeg?auto=compress&cs=tinysrgb&w=400', points: ['English Taught', 'Research Focused'], minLvl: 'A0', recLvl: 'B1', icon: "solar:cpu-bold", accent: 'bg-[#DD0000]' },
        { id: 'S3', category: 'Business', title: 'International Management', sub: 'Global Finance', img: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400', points: ['Global Networking', 'Business Hubs'], minLvl: 'B1', recLvl: 'B2', icon: "solar:chart-square-bold", accent: 'bg-[#DD0000]' },
        { id: 'S4', category: 'Life Sciences', title: 'Biotechnology', sub: 'Molecular Biology', img: 'https://images.pexels.com/photos/3735777/pexels-photo-3735777.jpeg?auto=compress&cs=tinysrgb&w=400', points: ['Advanced Labs', 'Pharma Research'], minLvl: 'B2', recLvl: 'C1', icon: "solar:test-tube-bold", accent: 'bg-[#DD0000]' },
        { id: 'S5', category: 'Arts', title: 'Media & Design', sub: 'Visual Arts', img: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=400', points: ['Creative Studios', 'Portfolio Support'], minLvl: 'B1', recLvl: 'B2', icon: "solar:palette-bold", accent: 'bg-[#DD0000]' },
      ],
      1: [ // Ausbildung
        { id: 'A1', category: 'Healthcare', title: 'Nurse Ausbildung', sub: 'Elderly Care', img: 'https://images.pexels.com/photos/3768114/pexels-photo-3768114.jpeg?auto=compress&cs=tinysrgb&w=400', points: ['Patient Interaction', 'Practical Training'], minLvl: 'B1 (Visa)', recLvl: 'B2', icon: "solar:heart-pulse-bold", accent: 'bg-[#DD0000]' },
        { id: 'A2', category: 'IT', title: 'IT System Integrator', sub: 'Hardware & Networking', img: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=400', points: ['Software Support', 'Logic Development'], minLvl: 'B1 (Visa)', recLvl: 'B1', icon: "solar:laptop-bold", accent: 'bg-[#DD0000]' },
        { id: 'A3', category: 'Retail & Hospitality', title: 'Hotel Specialist', sub: 'Management & Ops', img: 'https://images.pexels.com/photos/4344441/pexels-photo-4344441.jpeg?auto=compress&cs=tinysrgb&w=400', points: ['Guest Relations', 'Premium Chains'], minLvl: 'B1 (Visa)', recLvl: 'B1', icon: "solar:shop-2-bold", accent: 'bg-[#DD0000]' },
        { id: 'A4', category: 'Logistics', title: 'Logistics Technician', sub: 'Supply Chain Ops', img: 'https://images.pexels.com/photos/4481259/pexels-photo-4481259.jpeg?auto=compress&cs=tinysrgb&w=400', points: ['Warehouse Mgt', 'Fast Tracking'], minLvl: 'A2 (Entry)', recLvl: 'B1', icon: "solar:delivery-bold", accent: 'bg-[#DD0000]' },
        { id: 'A5', category: 'Technical', title: 'Mechatronics Tech', sub: 'Robotics & Control', img: 'https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=400', points: ['Industrial Tech', 'Hands-on Learning'], minLvl: 'B1', recLvl: 'B1', icon: "solar:settings-bold", accent: 'bg-[#DD0000]' },
      ],
      2: [ // Healthcare
        { id: 'H1', category: 'Nurses', title: 'Registered Nurse', sub: 'Clinical Care', img: 'https://images.pexels.com/photos/3825586/pexels-photo-3825586.jpeg?auto=compress&cs=tinysrgb&w=400', points: ['Immediate Placement', 'Deficit Procedure'], minLvl: 'B1', recLvl: 'B2', icon: "solar:user-plus-bold", accent: 'bg-[#DD0000]' },
        { id: 'H2', category: 'Physiotherapists', title: 'Physiotherapist', sub: 'Sports & Rehab', img: 'https://images.pexels.com/photos/4506109/pexels-photo-4506109.jpeg?auto=compress&cs=tinysrgb&w=400', points: ['Rehab Centers', 'Private Practice'], minLvl: 'B2', recLvl: 'B2', icon: "solar:walking-bold", accent: 'bg-[#DD0000]' },
        { id: 'H3', category: 'Doctors', title: 'Specialist Doctor', sub: 'Hospital Medics', img: 'https://images.pexels.com/photos/4225881/pexels-photo-4225881.jpeg?auto=compress&cs=tinysrgb&w=400', points: ['Approbation Path', 'License Verification'], minLvl: 'C1 Medical', recLvl: 'C1', icon: "solar:stethoscope-bold", accent: 'bg-[#DD0000]' },
        { id: 'H4', category: 'Radiology', title: 'Radiology Technician', sub: 'Diagnostic Imaging', img: 'https://images.pexels.com/photos/7088483/pexels-photo-7088483.jpeg?auto=compress&cs=tinysrgb&w=400', points: ['Imaging Tech', 'Lab Standards'], minLvl: 'B2', recLvl: 'B2', icon: "solar:mask-happly-bold", accent: 'bg-[#DD0000]' },
      ],
      3: [ // Jobseekers
        { id: 'J1', category: 'Opportunity Card', title: 'Chancenkarte Visa', sub: 'Points-Based Search', img: 'https://images.pexels.com/photos/3810795/pexels-photo-3810795.jpeg?auto=compress&cs=tinysrgb&w=400', points: ['6 Points Required', 'Work-while-search'], minLvl: 'A1', recLvl: 'B1', icon: "solar:card-2-bold", accent: 'bg-[#DD0000]' },
        { id: 'J2', category: 'IT Jobs', title: 'Software Engineer', sub: 'Java / Cloud Tech', img: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=400', points: ['English Speaking', 'Fast-Track Visa'], minLvl: 'A0', recLvl: 'B1', icon: "solar:code-bold", accent: 'bg-[#DD0000]' },
        { id: 'J3', category: 'Engineers', title: 'Mechanical Engineer', sub: 'Industrial Design', img: 'https://images.pexels.com/photos/585418/pexels-photo-585418.jpeg?auto=compress&cs=tinysrgb&w=400', points: ['Auto & Manufacturing', 'EU Blue Card'], minLvl: 'B1', recLvl: 'B2', icon: "solar:settings-bold", accent: 'bg-[#DD0000]' },
        { id: 'J4', category: 'Finance', title: 'Finance Analyst', sub: 'Banking & Audit', img: 'https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=400', points: ['Corporate Roles', 'Investment Firms'], minLvl: 'B2', recLvl: 'B2', icon: "solar:chart-bold", accent: 'bg-[#DD0000]' },
      ],
      4: [ // Direct Employment
        { id: 'D1', category: 'Mechatronics', title: 'Electrician (Trade)', sub: 'Industrial Install', img: 'https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=400', points: ['Employer Contract', 'Visa Sponsorship'], minLvl: 'A2', recLvl: 'B1', icon: "solar:bolt-bold", accent: 'bg-[#DD0000]' },
        { id: 'D2', category: 'Construction', title: 'Civil Specialist', sub: 'Structure & Site', img: 'https://images.pexels.com/photos/585418/pexels-photo-585418.jpeg?auto=compress&cs=tinysrgb&w=400', points: ['PR Pathway', 'Stable Contract'], minLvl: 'B1', recLvl: 'B1', icon: "solar:city-bold", accent: 'bg-[#DD0000]' },
        { id: 'D3', category: 'Logistics', title: 'Heavy Duty Driver', sub: 'Fleet & Cargo', img: 'https://images.pexels.com/photos/2199293/pexels-photo-2199293.jpeg?auto=compress&cs=tinysrgb&w=400', points: ['Immediate Starts', 'Relocation Help'], minLvl: 'A2', recLvl: 'B1', icon: "solar:delivery-bold", accent: 'bg-[#DD0000]' },
        { id: 'D4', category: 'Hospitality', title: 'Chef / Cook', sub: 'Culinary Arts', img: 'https://images.pexels.com/photos/4252146/pexels-photo-4252146.jpeg?auto=compress&cs=tinysrgb&w=400', points: ['Professional Kitchens', 'Fixed Contracts'], minLvl: 'A2', recLvl: 'B1', icon: "solar:mask-happly-bold", accent: 'bg-[#DD0000]' },
      ],
    };

    const currentCards = allPathwayData[activeTab] || [];
    if (activeSubFilter === 'Overview') return currentCards;
    return currentCards.filter(card => card.category === activeSubFilter);
  }, [activeTab, activeSubFilter]);

  // --- NAVIGATION FUNCTIONALITY ---
  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - (clientWidth / 5) : scrollLeft + (clientWidth / 5);
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  const langLevels = [
    { lvl: 'A1', sub: 'ZA1', bg: 'bg-[#ffcc99]' },
    { lvl: 'A1', sub: 'KID A1', bg: 'bg-[#f0ad4e]' },
    { lvl: 'A2', sub: 'ZA2', bg: 'bg-[#ffffcc]' },
    { lvl: 'A2', sub: 'KID A2', bg: 'bg-[#ffd700]' },
    { lvl: 'B1', sub: 'ZDÖ B1', bg: 'bg-[#ec407a]' },
    { lvl: 'B1', sub: 'ZB1', bg: 'bg-[#99cc33]' },
    { lvl: 'B2', sub: 'ZB2', bg: 'bg-[#449d44]' },
    { lvl: 'C1', sub: 'ZC1', bg: 'bg-[#8ec7eb]' },
    { lvl: 'C2', sub: 'ZC2', bg: 'bg-[#00a2e8]' },
  ];

  return (
    <div className="min-h-screen bg-slate-50 p-2 lg:p-4 selection:bg-[#DD0000] selection:text-white font-sans">
      <div className="mx-auto max-w-full bg-white overflow-hidden border border-slate-200 shadow-sm">
        
        {/* 1. TOP GLOBAL TABS */}
        <div className="grid grid-cols-2 md:grid-cols-5 border-b border-slate-200">
          {tabs.map((tab, i) => (
            <button
              key={tab.name}
              onClick={() => { setActiveTab(i); setActiveSubFilter('Overview'); }}
              className={`flex flex-col items-center py-4 px-2 transition-all relative border-r border-slate-100 last:border-0 ${
                activeTab === i ? 'bg-white font-black text-[#DD0000]' : 'bg-[#fcfcfc] hover:bg-slate-50 text-slate-500'
              }`}
            >
              <div className={`p-2 mb-1.5 transition-all ${
                activeTab === i ? tab.activeBg + ' text-white shadow-sm' : tab.bg + ' ' + tab.color
              }`}>
                <Icon icon={tab.icon} className="text-lg" />
              </div>
              <span className={`font-bold text-[11px] uppercase tracking-tight ${activeTab === i ? 'text-[#DD0000]' : 'text-slate-500'}`}>{tab.name}</span>
              <span className="text-[8px] uppercase tracking-widest font-medium opacity-50">{tab.sub}</span>
              {activeTab === i && <div className={`absolute top-0 left-0 w-full h-0.5 ${tab.activeBg}`} />}
            </button>
          ))}
        </div>

        <div className="flex flex-col lg:flex-row">
          {/* 2. LEFT SIDEBAR WITH SECTION BLOCKS */}
          <aside className="w-full lg:w-[300px] border-r border-slate-200 bg-[#fbfcfd] flex flex-col h-full">
            <div className="p-6 flex flex-col gap-6">
              
              {/* Primary Context Block */}
              <div className="bg-white border border-slate-200 p-5 shadow-xs">
                <div className={`w-12 h-12 ${tabs[activeTab].bg} ${tabs[activeTab].color} flex items-center justify-center mb-4 border border-slate-100 shadow-xs`}>
                  <Icon icon={tabs[activeTab].icon} className="text-2xl" />
                </div>
                <h1 className="text-2xl font-medium leading-tight mb-2 tracking-tight text-slate-900 uppercase">
                  {tabs[activeTab].name} <br/> 
                  <span className="text-[#DD0000] font-light lowercase">in Germany</span>
                </h1>
                <p className="text-slate-500 text-[12px] leading-snug opacity-80 mb-4">{tabs[activeTab].sideDesc}</p>
                <button className="w-full py-3 border border-slate-200 font-bold flex items-center justify-center gap-2 transition-all uppercase text-[9px] tracking-widest text-[#DD0000] hover:bg-[#DD0000] hover:text-white">
                  <Icon icon="solar:download-bold" className="text-xs" /> Guide Book
                </button>
              </div>

              {/* Strategic Insights */}
              <div className="bg-white border border-slate-200 p-5 shadow-xs">
                <h3 className="text-[10px] font-black text-slate-900 uppercase tracking-[0.2em] mb-4 border-b border-slate-100 pb-2 flex items-center gap-2">
                  <Icon icon="solar:star-fall-bold" className="text-[#FFCC00]" /> Strategic Insight
                </h3>
                <div className="space-y-4">
                   <div className="p-3 bg-slate-50 border-l-4 border-[#DD0000]">
                      <p className="text-[11px] font-bold text-slate-800 leading-snug">Demand: Germany needs 400k skilled workers annually.</p>
                   </div>
                </div>
              </div>

              {/* Consultation */}
              <div className="bg-white border border-slate-200 p-5 shadow-xs">
                <h3 className="text-[10px] font-black text-slate-900 uppercase tracking-[0.2em] mb-4 border-b border-slate-100 pb-2 flex items-center gap-2">
                  <Icon icon="solar:chat-round-line-bold" className="text-[#FFCC00]" /> Consultation
                </h3>
                <button className="w-full py-3 bg-[#DD0000] text-white text-[9px] font-black uppercase tracking-widest hover:bg-slate-900 transition-colors flex items-center justify-center gap-2">
                  Free Session <Icon icon="solar:arrow-right-up-bold" className="text-xs" />
                </button>
              </div>
            </div>
          </aside>

          {/* 3. MAIN DASHBOARD */}
          <main className="flex-grow p-6 lg:p-8 overflow-hidden">
            {/* Filter Nav with Next Arrows */}
            <div className="flex items-center justify-between mb-6 border-b border-slate-100 pb-3">
              <div className="flex gap-1 overflow-x-auto no-scrollbar">
                {tabs[activeTab].filters.map((t) => (
                  <button 
                    key={t} 
                    onClick={() => setActiveSubFilter(t)} 
                    className={`px-4 py-1.5 text-[10px] font-semibold uppercase tracking-widest transition-all whitespace-nowrap ${
                      activeSubFilter === t ? `${tabs[activeTab].activeBg} text-white shadow-sm font-black` : 'text-slate-500 hover:bg-slate-50 border border-slate-200'
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
              
              {/* SLIDER CONTROLS */}
              <div className="flex gap-2 ml-4 text-[#DD0000]">
                <button onClick={() => scroll('left')} className="p-1.5 border border-slate-200 hover:bg-slate-50 transition-colors"><Icon icon="solar:alt-arrow-left-linear" /></button>
                <button onClick={() => scroll('right')} className="p-1.5 border border-slate-200 hover:bg-slate-50 transition-colors"><Icon icon="solar:alt-arrow-right-linear" /></button>
              </div>
            </div>

            <div className="relative w-full h-[160px] bg-slate-100 mb-8 border border-slate-200 flex overflow-hidden">
               <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent z-10 p-6 flex flex-col justify-center">
                  <h2 className="text-xl font-medium text-slate-900 mb-1 uppercase tracking-tight">{tabs[activeTab].heroTitle}</h2>
                  <p className={`${tabs[activeTab].color} font-black text-xs mb-4 uppercase tracking-widest opacity-90`}>{tabs[activeTab].heroDesc}</p>
               </div>
               <img src="https://images.pexels.com/photos/1210273/pexels-photo-1210273.jpeg?auto=compress&cs=tinysrgb&w=1200" className="absolute right-0 top-0 h-full w-1/2 object-cover grayscale brightness-90" alt="Hero" />
            </div>

            <h3 className="text-[10px] font-black text-slate-900 uppercase tracking-widest mb-4 border-l-2 border-[#DD0000] pl-2">Popular {tabs[activeTab].name} Sectors</h3>

            {/* HORIZONTAL SCROLLING GRID (5 Cards Visible) - Increased Height */}
            <div 
              ref={scrollRef}
              className="flex gap-4 overflow-x-auto no-scrollbar pb-6 -mx-1 px-1 scroll-smooth"
            >
              {filteredCards.length > 0 ? filteredCards.map((card) => (
                <div key={card.id} className="bg-white border border-slate-200 flex-none w-[calc(20%-13px)] min-w-[240px] group flex flex-col shadow-xs hover:border-slate-400 transition-colors h-[480px]">
                  <div className="relative h-44 overflow-hidden border-b border-slate-100">
                    <img src={card.img} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 grayscale-[0.3]" alt={card.title} />
                    <div className={`absolute top-2 left-2 w-6 h-6 ${card.accent} flex items-center justify-center shadow-md`}>
                       <Icon icon={card.icon} className="text-white text-xs" />
                    </div>
                  </div>
                  <div className="p-4 flex-grow flex flex-col justify-between">
                    <div>
                        <h4 className="text-[12px] font-semibold text-slate-900 mb-0.5 uppercase tracking-tight truncate">{card.id}. {card.title}</h4>
                        <p className={`${card.accent.replace('bg-', 'text-')} text-[9px] font-bold mb-3 uppercase tracking-wide`}>{card.sub}</p>
                        <ul className="space-y-1.5 mb-4">
                        {card.points.map((p, i) => (
                            <li key={i} className="text-[10px] text-slate-500 font-light flex items-center gap-1.5 opacity-80">• {p}</li>
                        ))}
                        </ul>
                    </div>
                    <div>
                        <div className="flex gap-2 mb-3">
                        <div className="flex-1 bg-slate-50 border border-slate-100 p-1.5 text-center">
                            <p className="text-[7px] font-semibold text-slate-400 uppercase mb-0.5 tracking-tighter">Min Level</p>
                            <p className="text-[9px] font-bold text-[#FFCC00]">{card.minLvl}</p>
                        </div>
                        <div className="flex-1 bg-slate-50 border border-slate-100 p-1.5 text-center">
                            <p className="text-[7px] font-semibold text-slate-400 uppercase mb-0.5 tracking-tighter">Rec.</p>
                            <p className="text-[9px] font-black text-slate-600">{card.recLvl}</p>
                        </div>
                        </div>
                        <button className={`w-full text-center text-[9px] font-bold uppercase tracking-widest hover:underline flex items-center justify-center gap-1.5 py-2 border-t border-slate-50 mt-1 ${tabs[activeTab].color}`}>
                          Details <Icon icon="solar:arrow-right-bold" className="text-[10px]" />
                        </button>
                    </div>
                  </div>
                </div>
              )) : (
                <div className="w-full flex items-center justify-center text-slate-400 text-[10px] font-bold uppercase tracking-widest py-12 border border-dashed border-slate-100">
                    No sectors available for this filter
                </div>
              )}
            </div>

            <div className="bg-[#fcfcfc] p-4 border border-slate-200 mt-2">
               <div className="mb-4 flex justify-between items-center border-b border-slate-100 pb-2">
                  <h3 className="text-[10px] font-black text-slate-900 uppercase tracking-widest">Quick Guide: Language Levels</h3>
                  <span className="text-[8px] font-bold text-[#DD0000] uppercase">CEFR</span>
               </div>
               <div className="flex flex-wrap gap-1.5 justify-center md:justify-start">
                  {langLevels.map((item, idx) => (
                    <div key={idx} className={`${item.bg} w-[65px] h-[55px] flex flex-col items-center justify-center shadow-xs border border-black/5 hover:brightness-95 cursor-pointer`}>
                       <span className="text-lg font-black leading-none tracking-tighter">{item.lvl}</span>
                       <span className="text-[7px] font-bold text-black/80 uppercase tracking-tighter mt-0.5">{item.sub}</span>
                    </div>
                  ))}
               </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}