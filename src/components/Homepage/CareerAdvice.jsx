import React from 'react';
import { BookOpen, ArrowRight } from 'lucide-react';

const CareerAdvice = () => {
  return (
    <section className="bg-white py-24 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-8 md:px-16 lg:px-24">
        
        {/* --- HEADER SECTION --- */}
        <div className="mb-20">
          <h2 className="text-6xl md:text-[85px] font-medium text-slate-900 leading-[0.85] tracking-tight mb-16 max-w-8xl">
            We will equip you with the knowledge and strategies to secure your ideal role.
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 border-t border-gray-200 pt-12">
            <div className="lg:col-span-4">
              <p className="text-2xl font-bold text-slate-800 leading-[1.2] tracking-tight">
                Approach your applications with confidence by researching our expert career advice.
              </p>
              <button className="mt-10 bg-[#0e63ed] text-white px-10 py-5 rounded-full font-bold flex items-center gap-3 hover:bg-blue-700 transition-all shadow-xl shadow-blue-100">
                Career advice <BookOpen size={20} />
              </button>
            </div>
            
            <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-12 text-gray-500 text-lg md:text-xl leading-relaxed">
              <p>
                In addition to the support and mentoring our team provides, we have compiled everything you need to understand and optimise the various aspects of the job hunting experience.
              </p>
              <p>
                In our Career Advice archive you will find CV guides and templates, example interview questions, salary insights, and networking strategies to boost your employability. Learn how to craft standout applications, ace assessments, and make a lasting impression on recruiters.
              </p>
            </div>
          </div>
        </div>

        {/* --- UPDATED BENTO GRID SECTION --- */}
        {/* We use a 12-column grid to match the screenshot proportions */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 auto-rows-[280px]">
          
          {/* 1. Large Graduate CV Card (Top Left Corner) */}
          <div className="md:col-span-7 md:row-span-2 relative rounded-tl-[80px] rounded-br-[2rem] rounded-tr-[2rem] rounded-bl-[2rem] overflow-hidden group cursor-pointer shadow-xl">
            <img 
              src="https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=1000" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale-[0.2]" 
              alt="Graduate CV" 
            />
            <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-colors" />
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-12 text-white">
              <span className="italic font-serif text-lg mb-2 opacity-90">Writing the perfect</span>
              <h3 className="text-5xl font-black tracking-tighter mb-4 uppercase">Graduate CV</h3>
              <p className="text-lg opacity-80 max-w-sm mb-8 leading-snug">
                Leverage from extensive experience with our professionally accredited templates and detailed guides on writing the perfect graduate CV.
              </p>
              <button className="border-2 border-white px-8 py-3 rounded-full font-bold flex items-center gap-2 hover:bg-white hover:text-black transition-all">
                Learn more <ArrowRight size={18} />
              </button>
            </div>
          </div>

          {/* 2. Man Pointing (Vertical Middle Card) */}
          <div className="md:col-span-2 md:row-span-2 relative rounded-[2rem] overflow-hidden shadow-lg group">
             <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Mentor" />
          </div>

          {/* 3. Interview Questions (Navy Blue Top Right) */}
          <div className="md:col-span-3 md:row-span-1 bg-[#001a33] rounded-[2rem] p-10 flex flex-col justify-center text-white cursor-pointer hover:bg-[#002a4a] transition-all group">
            <span className="italic font-serif text-gray-400 text-sm mb-1">Industry targeted</span>
            <h3 className="text-3xl font-black tracking-tighter leading-none mb-3">Interview <br /> Questions</h3>
            <span className="text-xs font-bold flex items-center gap-1 group-hover:translate-x-1 transition-transform uppercase tracking-widest">
                Learn more <ArrowRight size={12}/>
            </span>
          </div>

          {/* 4. Small Image Under Interview Questions */}
          <div className="md:col-span-3 md:row-span-1 rounded-[2rem] overflow-hidden shadow-lg group">
              <img src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=600" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Meeting" />
          </div>

          {/* 5. Laptop/Workspace (Bottom Left Vertical) */}
          <div className="md:col-span-4 md:row-span-2 relative rounded-[2rem] overflow-hidden shadow-lg group">
            <img src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=600" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Planning" />
          </div>

          {/* 6. Cover Letters (Navy Blue Middle Row) */}
          <div className="md:col-span-4 md:row-span-1 bg-[#001a33] rounded-[2rem] p-8 flex flex-col justify-center text-white cursor-pointer hover:bg-[#002a4a] transition-all group">
              <span className="italic font-serif text-gray-400 text-sm mb-1">Perfectly pitched</span>
              <h3 className="text-3xl font-black tracking-tighter leading-none mb-3">Cover Letters</h3>
              <span className="text-xs font-bold flex items-center gap-1 group-hover:translate-x-1 transition-transform uppercase tracking-widest">
                Learn more <ArrowRight size={12}/>
              </span>
          </div>

          {/* 7. Smartphone View Card (Top Right Bottom) */}
          <div className="md:col-span-4 md:row-span-1 relative rounded-[2rem] overflow-hidden shadow-lg group">
            <img src="https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=600" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="App" />
          </div>

          {/* 8. Woman with Tablet (Horizontal Bottom Middle) */}
          <div className="md:col-span-5 md:row-span-1 relative rounded-[2rem] overflow-hidden shadow-lg group">
             <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=600" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Tablet" />
          </div>

          {/* 9. View All Career Advice (Bottom Right Corner) */}
          <div className="md:col-span-3 md:row-span-1 bg-[#0e63ed] rounded-tl-[2rem] rounded-bl-[2rem] rounded-tr-[2rem] rounded-br-[80px] p-10 flex flex-col justify-end text-white cursor-pointer hover:bg-blue-700 transition-all group shadow-xl">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] opacity-80 mb-2">View all</span>
              <h3 className="text-3xl font-black tracking-tighter leading-none mb-4">Career Advice</h3>
              <span className="text-xs font-bold flex items-center gap-1 group-hover:translate-x-1 transition-transform uppercase tracking-widest">
                Learn more <ArrowRight size={12}/>
              </span>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CareerAdvice;