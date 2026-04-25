import React, { useState, useMemo } from 'react';
import { Icon } from '@iconify/react';

export default function GermanyPathwaysUIKit() {
  // --- FUNCTIONALITY: STATE MANAGEMENT ---
  const [activeTab, setActiveTab] = useState(1); // Default to Ausbildung
  const [activeSubFilter, setActiveSubFilter] = useState('Overview');

  const tabs = [
    { 
      name: 'Students', 
      sub: 'Academic Pathway', 
      icon: "solar:graduation-cap-bold", 
      color: 'text-violet-600', 
      bg: 'bg-violet-50', 
      activeBg: 'bg-violet-600',
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
      activeBg: 'bg-emerald-600',
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
      activeBg: 'bg-blue-600',
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
      activeBg: 'bg-orange-600',
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
      activeBg: 'bg-indigo-600',
      heroTitle: "Direct Entry: Skilled Workers",
      heroDesc: "Verified Employer Contracts | Smooth Relocation",
      sideDesc: "Secure stable jobs in high-demand roles with long-term growth and settlement opportunities.",
      filters: ['Overview', 'Mechatronics', 'Construction', 'Logistics', 'Hospitality']
    },
  ];

  // --- REFINED FUNCTIONALITY: 20+ POPULAR SECTORS ACROSS ALL PATHWAYS ---
  const filteredCards = useMemo(() => {
    const allPathwayData = {
      0: [ // Students - 5 Sectors
        { id: 'S1', category: 'Engineering', title: 'Automotive Engineering', sub: 'Mechanical & Systems', img: 'https://images.pexels.com/photos/3807329/pexels-photo-3807329.jpeg?auto=compress&cs=tinysrgb&w=400', points: ['TU9 Top Ranked', 'Industry Internships'], minLvl: 'B2', recLvl: 'C1', icon: "solar:settings-bold", accent: 'bg-violet-600' },
        { id: 'S2', category: 'IT & AI', title: 'Data Science & AI', sub: 'Machine Learning', img: 'https://images.pexels.com/photos/5473955/pexels-photo-5473955.jpeg?auto=compress&cs=tinysrgb&w=400', points: ['English Taught', 'Research Focused'], minLvl: 'A0', recLvl: 'B1', icon: "solar:cpu-bold", accent: 'bg-violet-600' },
        { id: 'S3', category: 'Business', title: 'International Management', sub: 'Global Finance', img: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400', points: ['Global Networking', 'Business Hubs'], minLvl: 'B1', recLvl: 'B2', icon: "solar:chart-square-bold", accent: 'bg-violet-600' },
        { id: 'S4', category: 'Life Sciences', title: 'Biotechnology', sub: 'Molecular Biology', img: 'https://images.pexels.com/photos/3735777/pexels-photo-3735777.jpeg?auto=compress&cs=tinysrgb&w=400', points: ['Advanced Labs', 'Pharma Research'], minLvl: 'B2', recLvl: 'C1', icon: "solar:test-tube-bold", accent: 'bg-violet-600' },
        { id: 'S5', category: 'Arts', title: 'Media & Design', sub: 'Visual Arts', img: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=400', points: ['Creative Studios', 'Portfolio Support'], minLvl: 'B1', recLvl: 'B2', icon: "solar:palette-bold", accent: 'bg-violet-600' },
      ],
      1: [ // Ausbildung - 5 Sectors
        { id: 'A1', category: 'Healthcare', title: 'Nurse Ausbildung', sub: 'Elderly Care', img: 'https://images.pexels.com/photos/3768114/pexels-photo-3768114.jpeg?auto=compress&cs=tinysrgb&w=400', points: ['Patient Interaction', 'Practical Training'], minLvl: 'B1 (Visa)', recLvl: 'B2', icon: "solar:heart-pulse-bold", accent: 'bg-emerald-600' },
        { id: 'A2', category: 'IT', title: 'IT System Integrator', sub: 'Hardware & Networking', img: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=400', points: ['Software Support', 'Logic Development'], minLvl: 'B1 (Visa)', recLvl: 'B1', icon: "solar:laptop-bold", accent: 'bg-blue-600' },
        { id: 'A3', category: 'Retail & Hospitality', title: 'Hotel Specialist', sub: 'Management & Ops', img: 'https://images.pexels.com/photos/4344441/pexels-photo-4344441.jpeg?auto=compress&cs=tinysrgb&w=400', points: ['Guest Relations', 'Premium Chains'], minLvl: 'B1 (Visa)', recLvl: 'B1', icon: "solar:shop-2-bold", accent: 'bg-orange-600' },
        { id: 'A4', category: 'Logistics', title: 'Logistics Technician', sub: 'Supply Chain Ops', img: 'https://images.pexels.com/photos/4481259/pexels-photo-4481259.jpeg?auto=compress&cs=tinysrgb&w=400', points: ['Warehouse Mgt', 'Fast Tracking'], minLvl: 'A2 (Entry)', recLvl: 'B1', icon: "solar:delivery-bold", accent: 'bg-indigo-600' },
        { id: 'A5', category: 'Technical', title: 'Mechatronics Tech', sub: 'Robotics & Control', img: 'https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=400', points: ['Industrial Tech', 'Hands-on Learning'], minLvl: 'B1', recLvl: 'B1', icon: "solar:settings-bold", accent: 'bg-emerald-600' },
      ],
      2: [ // Healthcare - 4 Sectors
        { id: 'H1', category: 'Nurses', title: 'Registered Nurse', sub: 'Clinical Care', img: 'https://images.pexels.com/photos/3825586/pexels-photo-3825586.jpeg?auto=compress&cs=tinysrgb&w=400', points: ['Immediate Placement', 'Deficit Procedure'], minLvl: 'B1', recLvl: 'B2', icon: "solar:user-plus-bold", accent: 'bg-blue-600' },
        { id: 'H2', category: 'Physiotherapists', title: 'Physiotherapist', sub: 'Sports & Rehab', img: 'https://images.pexels.com/photos/4506109/pexels-photo-4506109.jpeg?auto=compress&cs=tinysrgb&w=400', points: ['Rehab Centers', 'Private Practice'], minLvl: 'B2', recLvl: 'B2', icon: "solar:walking-bold", accent: 'bg-blue-600' },
        { id: 'H3', category: 'Doctors', title: 'Specialist Doctor', sub: 'Hospital Medics', img: 'https://images.pexels.com/photos/4225881/pexels-photo-4225881.jpeg?auto=compress&cs=tinysrgb&w=400', points: ['Approbation Path', 'License Verification'], minLvl: 'C1 Medical', recLvl: 'C1', icon: "solar:stethoscope-bold", accent: 'bg-blue-600' },
        { id: 'H4', category: 'Radiology', title: 'Radiology Technician', sub: 'Diagnostic Imaging', img: 'https://images.pexels.com/photos/7088483/pexels-photo-7088483.jpeg?auto=compress&cs=tinysrgb&w=400', points: ['Imaging Tech', 'Lab Standards'], minLvl: 'B2', recLvl: 'B2', icon: "solar:mask-happly-bold", accent: 'bg-blue-600' },
      ],
      3: [ // Jobseekers - 4 Sectors
        { id: 'J1', category: 'Opportunity Card', title: 'Chancenkarte Visa', sub: 'Points-Based Search', img: 'https://images.pexels.com/photos/3810795/pexels-photo-3810795.jpeg?auto=compress&cs=tinysrgb&w=400', points: ['6 Points Required', 'Work-while-search'], minLvl: 'A1', recLvl: 'B1', icon: "solar:card-2-bold", accent: 'bg-orange-600' },
        { id: 'J2', category: 'IT Jobs', title: 'Software Engineer', sub: 'Java / Cloud Tech', img: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=400', points: ['English Speaking', 'Fast-Track Visa'], minLvl: 'A0', recLvl: 'B1', icon: "solar:code-bold", accent: 'bg-orange-600' },
        { id: 'J3', category: 'Engineers', title: 'Mechanical Engineer', sub: 'Industrial Design', img: 'https://images.pexels.com/photos/585418/pexels-photo-585418.jpeg?auto=compress&cs=tinysrgb&w=400', points: ['Auto & Manufacturing', 'EU Blue Card'], minLvl: 'B1', recLvl: 'B2', icon: "solar:settings-bold", accent: 'bg-orange-600' },
        { id: 'J4', category: 'Finance', title: 'Finance Analyst', sub: 'Banking & Audit', img: 'https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=400', points: ['Corporate Roles', 'Investment Firms'], minLvl: 'B2', recLvl: 'B2', icon: "solar:chart-bold", accent: 'bg-orange-600' },
      ],
      4: [ // Direct Employment - 4 Sectors
        { id: 'D1', category: 'Mechatronics', title: 'Electrician (Trade)', sub: 'Industrial Install', img: 'https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=400', points: ['Employer Contract', 'Visa Sponsorship'], minLvl: 'A2', recLvl: 'B1', icon: "solar:bolt-bold", accent: 'bg-indigo-600' },
        { id: 'D2', category: 'Construction', title: 'Civil Specialist', sub: 'Structure & Site', img: 'https://images.pexels.com/photos/585418/pexels-photo-585418.jpeg?auto=compress&cs=tinysrgb&w=400', points: ['PR Pathway', 'Stable Contract'], minLvl: 'B1', recLvl: 'B1', icon: "solar:city-bold", accent: 'bg-indigo-600' },
        { id: 'D3', category: 'Logistics', title: 'Heavy Duty Driver', sub: 'Fleet & Cargo', img: 'https://images.pexels.com/photos/2199293/pexels-photo-2199293.jpeg?auto=compress&cs=tinysrgb&w=400', points: ['Immediate Starts', 'Relocation Help'], minLvl: 'A2', recLvl: 'B1', icon: "solar:delivery-bold", accent: 'bg-indigo-600' },
        { id: 'D4', category: 'Hospitality', title: 'Chef / Cook', sub: 'Culinary Arts', img: 'https://images.pexels.com/photos/4252146/pexels-photo-4252146.jpeg?auto=compress&cs=tinysrgb&w=400', points: ['Professional Kitchens', 'Fixed Contracts'], minLvl: 'A2', recLvl: 'B1', icon: "solar:mask-happly-bold", accent: 'bg-indigo-600' },
      ],
    };

    const currentCards = allPathwayData[activeTab] || [];
    if (activeSubFilter === 'Overview') return currentCards;
    return currentCards.filter(card => card.category === activeSubFilter);
  }, [activeTab, activeSubFilter]);

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
    <div className="min-h-screen bg-slate-50 p-4 lg:p-8 font-sans selection:bg-emerald-100">
      <div className="mx-auto max-w-[1440px] bg-white overflow-hidden border border-slate-200">
        
        {/* 1. TOP GLOBAL TABS */}
        <div className="grid grid-cols-2 md:grid-cols-5 border-b border-slate-200">
          {tabs.map((tab, i) => (
            <button
              key={tab.name}
              onClick={() => {
                  setActiveTab(i);
                  setActiveSubFilter('Overview'); 
              }}
              className={`flex flex-col items-center py-6 px-4 transition-all relative border-r border-slate-100 last:border-0 ${
                activeTab === i ? 'bg-white' : 'bg-[#fcfcfc] hover:bg-slate-50'
              }`}
            >
              <div className={`p-3 mb-2 transition-all ${
                activeTab === i ? tab.activeBg + ' text-white' : tab.bg + ' ' + tab.color
              }`}>
                <Icon icon={tab.icon} className="text-xl" />
              </div>
              <span className={`font-black text-[13px] uppercase tracking-tighter ${activeTab === i ? 'text-slate-900' : 'text-slate-500'}`}>{tab.name}</span>
              <span className="text-[9px] uppercase tracking-widest font-bold opacity-40 mt-0.5">{tab.sub}</span>
              {activeTab === i && <div className={`absolute top-0 left-0 w-full h-1 ${tab.activeBg}`} />}
            </button>
          ))}
        </div>

        <div className="flex flex-col lg:flex-row">
          {/* 2. LEFT SIDEBAR */}
          <aside className="w-full lg:w-[320px] p-8 border-r border-slate-200 bg-[#fbfcfd]">
            <div className="mb-10">
              <div className={`w-14 h-14 ${tabs[activeTab].bg} ${tabs[activeTab].color} flex items-center justify-center mb-6 border border-slate-100 shadow-sm`}>
                 <Icon icon={tabs[activeTab].icon} className="text-3xl" />
              </div>
              <h1 className="text-3xl font-black leading-[1] mb-3 tracking-tight text-slate-900 uppercase">
                {tabs[activeTab].name} <br/> 
                <span className="text-slate-400 font-normal lowercase">in Germany</span>
              </h1>
              <p className="text-[11px] font-black text-slate-500 uppercase tracking-widest mb-6">Learn. Earn. Build Your Future.</p>
              <p className="text-slate-500 text-[13px] leading-relaxed mb-10">
                {tabs[activeTab].sideDesc}
              </p>

              <div className="space-y-6">
                {[
                  { label: 'Earn While You Learn', icon: "solar:dollar-minimalistic-bold" },
                  { label: 'No Tuition Fees', icon: "solar:shield-check-bold" },
                  { label: 'High Demand Careers', icon: "solar:case-bold" },
                  { label: 'Fast PR Pathway', icon: "solar:clock-circle-bold" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 group cursor-default">
                    <div className={`${tabs[activeTab].bg} w-10 h-10 flex items-center justify-center border border-slate-100`}>
                      <Icon icon={item.icon} className={`${tabs[activeTab].color} text-lg`} />
                    </div>
                    <span className="font-bold text-slate-700 text-xs uppercase tracking-tight">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
            <button className="mt-6 w-full py-4 border-2 border-slate-200 font-black flex items-center justify-center gap-3 transition-all uppercase text-[10px] tracking-widest hover:bg-slate-900 hover:text-white hover:border-slate-900">
              <Icon icon="solar:download-bold" /> Download {tabs[activeTab].name} Guide
            </button>
          </aside>

          {/* 3. MAIN DASHBOARD */}
          <main className="flex-grow p-8 lg:p-10">
            {/* SUB-NAV */}
            <div className="flex gap-1 mb-8 overflow-x-auto no-scrollbar border-b border-slate-100 pb-4">
              {tabs[activeTab].filters.map((t) => (
                <button 
                  key={t} 
                  onClick={() => setActiveSubFilter(t)} 
                  className={`px-5 py-2 text-[11px] font-black uppercase tracking-widest transition-all ${
                  activeSubFilter === t ? `${tabs[activeTab].activeBg} text-white shadow-md` : 'text-slate-500 hover:bg-slate-50'
                }`}>
                  {t}
                </button>
              ))}
            </div>

            {/* HERO BANNER BLOCK */}
            <div className="relative w-full h-[220px] bg-slate-100 mb-10 border border-slate-200 flex overflow-hidden">
               <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent z-10 p-10 flex flex-col justify-center">
                  <h2 className="text-2xl font-black text-slate-900 mb-2 uppercase">{tabs[activeTab].heroTitle}</h2>
                  <p className={`${tabs[activeTab].color} font-bold text-sm mb-6 uppercase tracking-widest`}>{tabs[activeTab].heroDesc}</p>
                  <div className="flex gap-8">
                     {[
                       {l: 'Earn Salary', i: "solar:wallet-bold"},
                       {l: 'No Fees', i: "solar:hand-stars-bold"},
                       {l: 'Job Security', i: "solar:shield-up-bold"}
                     ].map((feat, i) => (
                       <div key={i} className="flex items-center gap-2 text-[10px] font-black text-slate-500 uppercase">
                          <Icon icon={feat.i} className="text-sm" />
                          {feat.l}
                       </div>
                     ))}
                  </div>
               </div>
               <img src="https://images.pexels.com/photos/1210273/pexels-photo-1210273.jpeg?auto=compress&cs=tinysrgb&w=1200" className="absolute right-0 top-0 h-full w-1/2 object-cover grayscale brightness-75" alt="Hero" />
            </div>

            <h3 className="text-xs font-black text-slate-900 uppercase tracking-widest mb-6 border-l-4 border-emerald-500 pl-3">
                Popular {tabs[activeTab].name} Sectors
            </h3>

            {/* SECTOR CARDS */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-12 min-h-[400px]">
              {filteredCards.length > 0 ? filteredCards.map((card) => (
                <div key={card.id} className="bg-white border border-slate-200 group flex flex-col h-full shadow-sm hover:border-slate-400 transition-colors">
                  <div className="relative h-44 overflow-hidden border-b border-slate-100">
                    <img src={card.img} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt={card.title} />
                    <div className={`absolute top-3 left-3 w-8 h-8 ${card.accent} flex items-center justify-center shadow-lg`}>
                       <Icon icon={card.icon} className="text-white text-lg" />
                    </div>
                  </div>
                  <div className="p-5 flex-grow">
                    <h4 className="text-sm font-black text-slate-900 mb-1 uppercase tracking-tight">{card.id}. {card.title}</h4>
                    <p className={`${card.accent.replace('bg-', 'text-')} text-[10px] font-bold mb-4 uppercase tracking-wide`}>{card.sub}</p>
                    <ul className="space-y-2 mb-6">
                      {card.points.map((p, i) => (
                        <li key={i} className="text-[11px] text-slate-500 font-medium flex items-center gap-2">• {p}</li>
                      ))}
                    </ul>
                    <div className="flex gap-2 mb-4">
                      <div className="flex-1 bg-slate-50 border border-slate-100 p-2 text-center">
                        <p className="text-[8px] font-black text-slate-400 uppercase mb-1">Min Level</p>
                        <p className={`text-[10px] font-black ${tabs[activeTab].color}`}>{card.minLvl}</p>
                      </div>
                      <div className="flex-1 bg-slate-50 border border-slate-100 p-2 text-center">
                        <p className="text-[8px] font-black text-slate-400 uppercase mb-1">Rec.</p>
                        <p className="text-[10px] font-black text-slate-600">{card.recLvl}</p>
                      </div>
                    </div>
                    <button className={`w-full text-center text-[10px] font-black uppercase tracking-widest hover:underline flex items-center justify-center gap-2 py-2 border-t border-slate-50 mt-2 ${tabs[activeTab].color}`}>
                      View Details <Icon icon="solar:arrow-right-bold" />
                    </button>
                  </div>
                </div>
              )) : (
                <div className="col-span-full flex items-center justify-center text-slate-400 text-sm font-bold uppercase tracking-widest py-20 border-2 border-dashed border-slate-100">
                    Coming Soon for {activeSubFilter}
                </div>
              )}
            </div>

            {/* BOTTOM QUICK GUIDE */}
            <div className="bg-[#fcfcfc] p-6 border border-slate-200">
               <div className="mb-6 flex justify-between items-center border-b border-slate-100 pb-3">
                 <h3 className="text-[11px] font-black text-slate-900 uppercase tracking-widest">Quick Guide: German Language Levels</h3>
                 <span className="text-[9px] font-black text-slate-400 uppercase">CEFR Standard</span>
               </div>
               <div className="flex flex-wrap gap-2">
                  {langLevels.map((item, idx) => (
                    <div key={idx} className={`${item.bg} w-[75px] h-[65px] flex flex-col items-center justify-center shadow-sm border border-black/5 hover:brightness-95 cursor-pointer`}>
                       <span className="text-xl font-bold text-black leading-none">{item.lvl}</span>
                       <span className="text-[8px] font-black text-black/60 uppercase tracking-tighter mt-1">{item.sub}</span>
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