import React from 'react';
import { ArrowRight, Code, BarChart3, FlaskConical, Briefcase, Users, Monitor, BookOpen, GraduationCap, Upload } from 'lucide-react';

const CareerSection = () => {
  const specialisms = [
    { title: "Software Dev", icon: <Code />, img: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=1000", type: "image" },
    { title: "Industry profile", subtitle: "Learn more", type: "dark" },
    { title: "Analytical", icon: <BarChart3 />, img: "https://images.unsplash.com/photo-1551288049-bbbda536639a?q=80&w=1000", type: "image" },
    { title: "Science", icon: <FlaskConical />, type: "outline" },
    { title: "Industry profile", subtitle: "Learn more", type: "dark" },
    { title: "Sales", icon: <Briefcase />, img: "https://images.unsplash.com/photo-1556740734-7f9a2b77098c?q=80&w=1000", type: "image" },
    { title: "Conference Production", icon: <Users />, img: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=1000", type: "image" },
  ];

  const courses = [
    { name: "Marketing", icon: <Briefcase />, img: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=600" },
    { name: "IT", icon: <Monitor />, img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=600" },
    { name: "Humanities", icon: <BookOpen />, img: "https://images.unsplash.com/photo-1491843351663-8cd11ee0d718?q=80&w=600" },
    { name: "Physics", icon: <GraduationCap />, img: "https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?q=80&w=600" },
  ];

  // We triple the items to ensure the marquee never shows a gap
  const marqueeItems = [...courses, ...courses, ...courses];

  return (
    <div className="bg-[#fcfcfc] font-sans">
      
      {/* --- TOP INTRO SECTOR --- */}
      <section className="max-w-[1700px] mx-auto px-8 md:px-16 py-24">
        <h2 className="text-5xl md:text-7xl font-bold text-[#222] mb-12 tracking-tight text-left">
          Graduate Recruitment Bureau
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start border-t border-gray-100 pt-16">
          <div className="lg:col-span-5">
            <p className="text-2xl md:text-3xl font-medium text-slate-800 leading-[1.2] tracking-tight mb-10 text-left">
              Now in our 30th year, GRB is the UK's highest review-rated early talent recruitment consultancy.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-[#0e63ed] text-white px-10 py-4 rounded-full font-bold flex items-center gap-2 hover:bg-blue-700 transition-all shadow-xl shadow-blue-200">
                Register CV <Upload size={18} />
              </button>
              <button className="bg-white text-slate-700 border-2 border-gray-100 px-10 py-4 rounded-full font-bold hover:bg-gray-50 transition-all text-left">
                Hire talent
              </button>
            </div>
          </div>
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-10 text-gray-500 text-lg leading-relaxed text-left">
            <p>Every day our sector specific teams are contacted by major graduate recruiters, SMEs and exciting start-ups who are looking to hire talented university students and graduates for their graduate schemes, placement years and internships.</p>
            <p>Our team of experts recruit for your course discipline. They carefully analyse your background and strengths, before matching you with the perfect opportunity tailored to your skills and career goals.</p>
          </div>
        </div>
      </section>

      {/* --- SECTION 1: STICKY TEXT & SCROLLING GRID --- */}
      {/* Note: overflow-hidden removed from here to allow sticky to work */}
      <section className="max-w-[1700px] mx-auto px-8 md:px-16 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-20 items-start">
          
          {/* LEFT: STICKY BOX */}
          <div className="lg:col-span-4 lg:sticky lg:top-10 self-start z-10 bg-[#fcfcfc] py-4">
            <span className="text-[#0e63ed] font-bold text-xs uppercase tracking-[0.4em] mb-6 block text-left">
              Featured Specialisms
            </span>
            <h2 className="text-6xl md:text-[80px] font-bold text-slate-900 leading-[0.85] tracking-tighter mb-8 text-left">
              Who is hiring <br />right now?
            </h2>
            <p className="text-gray-500 text-xl leading-relaxed max-w-sm mb-12 text-left">
              Discover exciting opportunities across a range of featured industries that are experiencing growth.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-[#0e63ed] text-white px-10 py-4 rounded-full font-bold hover:bg-blue-700 transition-all shadow-2xl shadow-blue-100 flex items-center gap-3">
                Search all jobs <ArrowRight size={20} />
              </button>
              <button className="border-2 border-gray-100 text-gray-600 px-10 py-4 rounded-full font-bold hover:bg-gray-50 transition-all text-left">
                View industries
              </button>
            </div>
          </div>

          {/* RIGHT: GRID */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6 pb-20">
            <div className="md:col-span-2 bg-[#0e63ed] rounded-[2.5rem] p-12 h-[280px] flex flex-col justify-between group cursor-pointer relative overflow-hidden">
              <h3 className="text-4xl md:text-5xl font-bold text-white max-w-xl relative z-10 tracking-tighter leading-none text-left">
                Explore our featured career specialisms.
              </h3>
              <div className="flex items-center text-white font-bold text-lg gap-2 self-end relative z-10 group-hover:translate-x-4 transition-transform">
                View all industries <ArrowRight size={28} />
              </div>
            </div>

            {specialisms.map((card, i) => (
              <div 
                key={i} 
                className={`relative group rounded-[2rem] overflow-hidden h-[250px] transition-all duration-700 hover:shadow-xl flex flex-col justify-end p-8
                ${card.type === 'dark' ? 'bg-[#001a33]' : 'bg-white border border-gray-100'}`}
              >
                {card.img && (
                  <img src={card.img} className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000" alt={card.title} />
                )}
                {card.img && <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />}

                <div className="relative z-10 group-hover:-translate-y-1 transition-transform text-left">
                  <div className={`mb-3 p-3 rounded-2xl w-fit ${card.type === 'dark' ? 'text-white' : 'bg-blue-50 text-[#0e63ed]'}`}>
                    {card.icon ? React.cloneElement(card.icon, { size: 28 }) : <Briefcase size={28} />}
                  </div>
                  <h4 className={`text-2xl font-bold tracking-tighter ${card.img || card.type === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                    {card.title}
                  </h4>
                  <p className="text-[10px] font-bold uppercase tracking-widest mt-1 opacity-60 text-white">
                    {card.subtitle || "View live jobs →"}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SECTION 2: BROWSE BY COURSE --- */}
      <section className="pt-24 border-t border-gray-100 pb-32 overflow-hidden">
        <div className="text-center mb-16">
          <h2 className="text-6xl md:text-8xl font-bold text-slate-900 tracking-tighter uppercase mb-6">
            Browse jobs by course
          </h2>
          <p className="text-gray-500 text-xl max-w-3xl mx-auto px-6">
            Discover the perfect opportunity by browsing jobs by course discipline.
          </p>
        </div>

        {/* Marquee Animation */}
        <div className="relative w-full overflow-hidden flex py-8 group/marquee">
          <div className="flex animate-marquee group-hover/marquee:[animation-play-state:paused] whitespace-nowrap">
            {marqueeItems.map((course, i) => (
              <div key={i} className="flex-shrink-0 w-[480px] h-[420px] relative rounded-[3rem] overflow-hidden cursor-pointer shadow-xl mx-5 group/card">
                <img src={course.img} className="absolute inset-0 w-full h-full object-cover grayscale-[0.2] transition-transform duration-1000 group-hover/card:scale-110 group-hover/card:grayscale-0" alt={course.name} />
                <div className="absolute inset-0 bg-[#0e63ed]/40 opacity-0 group-hover/card:opacity-100 transition-opacity duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent" />
                <div className="absolute bottom-10 left-10 text-white text-left">
                  <div className="text-4xl mb-5 p-4 bg-white/10 backdrop-blur-3xl rounded-[1.5rem] w-fit border border-white/10">
                    {course.icon ? React.cloneElement(course.icon, { size: 40 }) : <GraduationCap size={40} />}
                  </div>
                  <h3 className="text-3xl font-bold leading-none tracking-tighter uppercase">
                    {course.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center mt-12">
          <button className="bg-[#0e63ed] text-white px-16 py-5 rounded-full font-bold text-lg hover:scale-105 transition-all shadow-2xl shadow-blue-200">
            View all courses
          </button>
        </div>
      </section>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
        .animate-marquee {
          animation: marquee 60s linear infinite;
          display: flex;
          width: fit-content;
        }
      `}</style>
    </div>
  );
};

export default CareerSection;