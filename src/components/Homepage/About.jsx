import React, { useState } from 'react';
import { ChevronDown, ArrowRight, Search, Plus } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const CareerPathways = () => {
  const [userType, setUserType] = useState('curious human');
  const [interest, setInterest] = useState('all available paths');
  const [location, setLocation] = useState('worldwide');

  const pathways = [
    {
      category: "Ausbildung",
      levels: [
        { name: "Foundational", desc: "No experience required", items: ["IT Essentials", "Nursing Basics", "Mechanical Intro"] },
        { name: "Entry Level", desc: "1-2 years basic training", items: ["Junior Developer", "Assistenz-Pflege", "Technician"] },
        { name: "Specialist", desc: "Core networking knowledge", items: ["Cloud Security", "Mechatroniker", "Senior Dev"] }
      ]
    },
    {
      category: "Study Abroad",
      levels: [
        { name: "Prep Year", desc: "Language & Foundation", items: ["IELTS Prep", "Pathway Program", "Intercultural Comm"] },
        { name: "Undergrad", desc: "University Degree", items: ["BSc Computer Science", "BA Business", "Engineering"] },
        { name: "Master", desc: "Specialized Research", items: ["MSc Data Science", "MBA Global", "Public Health"] }
      ]
    }
  ];

  const jobs = [
    { title: "Administrative Associate (6-Month LTA)", team: "Administration", loc: "New York", desc: "Seeking a proactive associate to join our Administration team supporting global operations." },
    { title: "Head of Facilities", team: "Administration", loc: "New York", desc: "Join Enterprise Operations as the head of facilities to oversee worldwide office infrastructure." },
    { title: "COO Group Associate", team: "COO Group", loc: "Coimbatore", desc: "A creative, critical thinker with project leadership skills to join our core operations group." },
    { title: "Strategic Execution Lead", team: "Corporate Development", loc: "Dubai", desc: "Experienced strategy professional to join the Corporate Development team for growth." },
  ];

  return (
    <div className="bg-[#fcfcfc] min-h-screen font-sans text-slate-900 selection:bg-blue-100">
      
      {/* --- SECTION 1: INTERACTIVE HEADER (D.E. SHAW STYLE) --- */}
      <section className="max-w-7xl mx-auto px-6 pt-32 pb-20">
        <div className="flex items-center gap-3 text-sm font-medium text-slate-400 mb-12">
          <span className="text-slate-900">4.2</span>
          <span>Choose Your Path</span>
        </div>

        <h1 className="text-4xl md:text-7xl font-light leading-[1.1] tracking-tight">
          I am a <InteractiveDrop value={userType} options={['curious human', 'student', 'professional', 'graduate']} onChange={setUserType} /> · 
          interested in <br />
          <InteractiveDrop value={interest} options={['all available paths', 'Ausbildung', 'Study Abroad', 'Job Seeking']} onChange={setInterest} /> · 
          at your <InteractiveDrop value={location} options={['worldwide', 'Coimbatore', 'Germany', 'Dubai']} onChange={setLocation} /> · offices.
        </h1>

        <div className="mt-20 flex items-center justify-between border-b border-slate-200 pb-4">
          <span className="text-sm text-slate-400 font-medium">Viewing <span className="text-blue-600">4</span> of 64 Opportunities</span>
          <div className="flex items-center gap-2 text-slate-400 text-sm italic">
            <Search size={16} /> Search paths...
          </div>
        </div>
      </section>

      {/* --- SECTION 2: PATHWAY GRID (CYBERSECURITY STYLE) --- */}
      <section className="bg-[#0b1221] py-24 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex gap-12 mb-12 overflow-x-auto pb-4 no-scrollbar">
            {['Ausbildung', 'Job Roles', 'Careers', 'Study Abroad'].map((tab) => (
              <button key={tab} className={`text-sm font-bold uppercase tracking-widest whitespace-nowrap ${interest.includes(tab) ? 'text-blue-500' : 'text-slate-500'}`}>
                {tab}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0.5 bg-slate-800 border border-slate-800">
            {pathways[0].levels.map((level, idx) => (
              <div key={idx} className="bg-[#0b1221] p-8">
                <span className="text-blue-500 font-bold text-xs uppercase tracking-tighter mb-1 block">{level.name}</span>
                <p className="text-slate-400 text-sm mb-8">{level.desc}</p>
                
                <div className="flex flex-col gap-3">
                  {level.items.map((item) => (
                    <div key={item} className="bg-[#1a2333] p-4 rounded-sm flex items-center justify-between group cursor-pointer hover:bg-blue-600 transition-colors">
                      <div className="flex flex-col">
                        <span className="text-xs font-bold tracking-tight">{item}</span>
                        <span className="text-[10px] text-slate-500 group-hover:text-blue-100 uppercase mt-1">Learn more</span>
                      </div>
                      <Plus size={14} className="text-slate-500 group-hover:text-white" />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SECTION 3: JOB BUNDLE GRID (LIST STYLE) --- */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-16">
          {jobs.map((job, i) => (
            <div key={i} className="group cursor-pointer">
              <div className="flex items-center justify-between mb-4">
                <div className="flex flex-col">
                  <span className="text-xs font-black uppercase text-slate-900 tracking-tighter">{job.team}</span>
                  <span className="text-xs text-slate-400">{job.loc}</span>
                </div>
                <div className="w-6 h-6 rounded-full border-2 border-blue-500 flex items-center justify-center group-hover:bg-blue-500 transition-all">
                  <div className="w-2 h-2 rounded-full bg-transparent group-hover:bg-white" />
                </div>
              </div>
              
              <div className="flex gap-4">
                <ArrowRight size={20} className="text-slate-900 mt-1 flex-shrink-0 group-hover:translate-x-2 transition-transform" />
                <div>
                  <h3 className="text-xl font-bold underline decoration-slate-200 underline-offset-4 group-hover:decoration-blue-500 transition-colors mb-3">
                    {job.title}:
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed line-clamp-3">
                    {job.desc}
                  </p>
                </div>
              </div>
              <div className="h-px bg-slate-100 w-full mt-12" />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

// Sub-component for the Mad-Lib style dropdowns
const InteractiveDrop = ({ value, options, onChange }) => {
  const [open, setOpen] = useState(false);

  return (
    <span className="relative inline-block mx-1">
      <button 
        onClick={() => setOpen(!open)}
        className="text-slate-400 border-b-[3px] border-slate-200 hover:text-blue-600 hover:border-blue-600 transition-all cursor-pointer font-medium italic inline-flex items-center gap-2"
      >
        {value} <ChevronDown size={24} className={`mt-1 transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>
      
      <AnimatePresence>
        {open && (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute top-full left-0 z-[100] mt-2 bg-white shadow-2xl border border-slate-100 rounded-xl min-w-[240px] overflow-hidden p-2"
          >
            {options.map((opt) => (
              <button
                key={opt}
                onClick={() => { onChange(opt); setOpen(false); }}
                className="w-full text-left px-4 py-3 text-sm font-medium hover:bg-blue-50 rounded-lg transition-colors text-slate-700"
              >
                {opt}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </span>
  );
};

export default CareerPathways;