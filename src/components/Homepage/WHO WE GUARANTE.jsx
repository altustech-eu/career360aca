import React from 'react';
import { Icon } from '@iconify/react';

const SuccessGuarantee = () => {
  const pillars = [
    {
      id: '01',
      title: 'Verified Employer Network',
      desc: 'We partner directly with German enterprises ensuring every placement is backed by a legal contract.',
      icon: 'solar:verified-check-bold-duotone',
      color: 'text-[#DD0000]', // Red
      bg: 'bg-[#FFCC00]/10' // Yellow/Gold tint
    },
    {
      id: '02',
      title: 'End-to-End Visa Mastery',
      desc: 'Our legal experts handle every document, from recognition of degrees to the final consulate interview.',
      icon: 'solar:passport-bold-duotone',
      color: 'text-[#DD0000]',
      bg: 'bg-[#FFCC00]/10'
    },
    {
      id: '03',
      title: 'Precision Language Training',
      desc: 'Tailored German courses focused on your specific sector—ensuring you pass B1/B2 exams on the first attempt.',
      icon: 'solar:translation-bold-duotone',
      color: 'text-[#DD0000]',
      bg: 'bg-[#FFCC00]/10'
    },
    {
      id: '04',
      title: 'Post-Landing Support',
      desc: 'Our success is defined by your settlement. We assist with housing, registration, and health insurance in Germany.',
      icon: 'solar:home-smile-bold-duotone',
      color: 'text-[#DD0000]',
      bg: 'bg-[#FFCC00]/10'
    }
  ];

  return (
    <section className="w-full bg-white py-20 px-6 lg:px-16 font-sans border-t border-slate-100">
      <div className="max-w-[1600px] mx-auto">
        
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-12 bg-[#DD0000]" />
              <span className="text-[11px] font-black uppercase tracking-[0.3em] text-[#DD0000]">Our Commitment</span>
            </div>
            <h2 className="text-4xl lg:text-6xl font-medium tracking-tighter text-slate-900 leading-tight uppercase">
              How We Guarantee <br />
              <span className="text-[#FFCC00] font-light italic">100% Success</span>
            </h2>
          </div>
          <div className="lg:max-w-xs">
            <p className="text-slate-500 text-sm leading-relaxed mb-6">
              Our methodology eliminates the risk of rejection by synchronizing German legal requirements with your professional profile.
            </p>
            <button className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-900 group">
              View Success Stories 
              <Icon icon="solar:arrow-right-bold" className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border border-slate-200">
          {pillars.map((pillar) => (
            <div 
              key={pillar.id} 
              className="p-10 flex flex-col border-b md:border-b-0 md:border-r border-slate-200 last:border-0 hover:bg-slate-50 transition-colors group h-full"
            >
              <div className="flex justify-between items-start mb-12">
                <span className="text-4xl font-light text-slate-200 group-hover:text-slate-300 transition-colors tracking-tighter">
                  {pillar.id}
                </span>
                <div className={`p-4 ${pillar.bg} ${pillar.color} shadow-sm`}>
                  <Icon icon={pillar.icon} className="text-2xl" />
                </div>
              </div>
              
              <h3 className="text-xl font-semibold text-slate-900 mb-4 leading-tight uppercase tracking-tight">
                {pillar.title}
              </h3>
              
              <p className="text-slate-500 text-[13px] leading-relaxed mb-8 flex-grow">
                {pillar.desc}
              </p>

              <div className="h-1 w-0 group-hover:w-full transition-all duration-500 bg-[#FFCC00]" />
            </div>
          ))}
        </div>

        {/* Trust Banner */}
        <div className="mt-16 bg-[#1A1A1A] p-8 lg:p-12 flex flex-col lg:flex-row items-center justify-between gap-8">
           <div className="flex items-center gap-6">
              <div className="w-16 h-16 border border-white/10 flex items-center justify-center">
                 <Icon icon="solar:shield-star-bold-duotone" className="text-[#FFCC00] text-4xl" />
              </div>
              <div>
                 <h4 className="text-white text-xl font-medium uppercase tracking-tight">Risk-Free Transition Policy</h4>
                 <p className="text-white/50 text-xs font-medium uppercase tracking-widest">Legal protection & placement assurance included</p>
              </div>
           </div>
           <button className="px-10 py-4 bg-white text-slate-900 text-[11px] font-black uppercase tracking-[0.2em] hover:bg-[#DD0000] hover:text-white transition-all">
             Start Your Application
           </button>
        </div>

      </div>
    </section>
  );
};

export default SuccessGuarantee;