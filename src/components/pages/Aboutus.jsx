import React, { useEffect, useState } from "react";
import Navigation from "../Homepage/Navigation";
import Footer from "./Footer";
import Tilt from "react-parallax-tilt";
import Lenis from "@studio-freight/lenis";
import { Target, Zap, Users,Lightbulb, MonitorSmartphone, Code, Rocket, ArrowRight, ShieldCheck } from "lucide-react";

// Values section
const values = [
  { icon: Target, title: "Career-Focused", description: "Your professional growth is our mission. We tailor every resource to meet your unique career ambitions." },
  { icon: Zap, title: "Innovation First", description: "We leverage cutting-edge recruitment insights and AI tools to give you a competitive edge." },
  { icon: Users, title: "Community Driven", description: "We believe in the power of networking and connecting early talent with global industry leaders." },
  { icon: ShieldCheck, title: "Trust & Integrity", description: "Excellence and transparency are our standards. We provide verified insights you can rely on." },
];

// Process roadmap
const processSteps = [
  { title: "Skill Mapping", description: "Analyzing your background, strengths, and identifying the ideal career path.", icon: Lightbulb },
  { title: "Strategic Prep", description: "CV optimization, portfolio building, and targeted interview coaching.", icon: MonitorSmartphone },
  { title: "Direct Connection", description: "Matching you with our network of high-growth SMEs and global recruiters.", icon: Code },
  { title: "Career Launch", description: "Securing your role and providing ongoing mentorship for your first 90 days.", icon: Rocket },
];

export default function AboutUs() {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  // Lenis smooth scroll
  useEffect(() => {
    const lenis = new Lenis({ smooth: true, lerp: 0.1, wheelMultiplier: 1.2 });
    function raf(time) { lenis.raf(time); requestAnimationFrame(raf); }
    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

  // Cursor background effect
  useEffect(() => {
    const handleMouseMove = (e) => setCursorPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="bg-[#fcfcfc] font-sans">
      <Navigation />

      {/* 1. HERO SECTION */}
      <section className="relative pt-40 pb-24 overflow-hidden border-b border-gray-100">
        <div className="absolute top-0 left-0 w-full h-1.5 bg-[#ccff00]"></div>
        
        {/* Interactive background glows */}
        <div 
          className="absolute rounded-full w-[600px] h-[600px] bg-blue-100/40 blur-[120px] pointer-events-none transition-transform duration-500 ease-out" 
          style={{ transform: `translate(${cursorPos.x * 0.02}px, ${cursorPos.y * 0.02}px)`, top: '-10%', left: '-10%' }} 
        />

        <div className="relative z-10 max-w-[1600px] mx-auto px-8 md:px-16">
          <div className="max-w-4xl">
            <span className="text-[#0e63ed] font-bold text-xs uppercase tracking-[0.4em] mb-8 block">
              Our Story
            </span>
            <h1 className="text-6xl md:text-[90px] font-bold text-slate-900 leading-[0.85] tracking-tighter mb-12">
              Empowering the next <br />
              <span className="text-[#0e63ed]">generation of talent.</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-500 leading-relaxed max-w-3xl">
              Career360Academy is a dedicated early-talent consultancy. We bridge the gap between academic excellence and professional success by providing students with the strategies needed to secure their ideal roles.
            </p>
          </div>
        </div>
      </section>

      {/* 2. CORE VALUES - TILT CARDS */}
      <section className="py-32 max-w-[1600px] mx-auto px-8 md:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <Tilt key={index} perspective={1000} scale={1.02} className="h-full">
              <div className="group h-full bg-white rounded-[2rem] p-10 border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col">
                <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center text-[#0e63ed] mb-8 group-hover:bg-[#0e63ed] group-hover:text-white transition-colors duration-500">
                  <value.icon size={28} />
                </div>
                <h3 className="text-2xl font-bold text-[#001a33] mb-4 tracking-tight">{value.title}</h3>
                <p className="text-gray-500 leading-relaxed">{value.description}</p>
              </div>
            </Tilt>
          ))}
        </div>
      </section>

      {/* 3. STICKY PROCESS SECTION */}
      <section className="py-32 bg-[#001a33] text-white overflow-hidden">
        <div className="max-w-[1600px] mx-auto px-8 md:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-start">
            
            {/* Sticky Content */}
            <div className="lg:col-span-5 lg:sticky lg:top-32 self-start">
              <span className="text-[#0e63ed] font-bold text-xs uppercase tracking-[0.4em] mb-8 block">
                The Methodology
              </span>
              <h2 className="text-5xl md:text-7xl font-bold tracking-tighter leading-[0.9] mb-10">
                A proven path <br /> to success.
              </h2>
              <p className="text-gray-400 text-xl leading-relaxed mb-12">
                Our development process is designed to be rigorous yet adaptive, ensuring every candidate we represent is fully equipped for the modern workplace.
              </p>
              <button className="flex items-center gap-3 bg-[#0e63ed] text-white px-10 py-5 rounded-full font-bold hover:bg-blue-600 transition-all shadow-xl shadow-blue-900/20">
                Get Started Now <ArrowRight size={20} />
              </button>
            </div>

            {/* Scrolling Steps */}
            <div className="lg:col-span-7 space-y-12">
              {processSteps.map((step, idx) => (
                <div key={idx} className="group relative bg-white/5 backdrop-blur-sm border border-white/10 p-12 rounded-[2.5rem] hover:bg-white/10 transition-all duration-500">
                  <div className="absolute top-10 right-10 text-6xl font-black text-white/5 group-hover:text-[#0e63ed]/20 transition-colors">
                    0{idx + 1}
                  </div>
                  <div className="w-16 h-16 rounded-2xl bg-[#0e63ed] flex items-center justify-center mb-8 shadow-lg shadow-blue-500/20">
                    <step.icon size={32} />
                  </div>
                  <h4 className="text-3xl font-bold mb-4 tracking-tight">{step.title}</h4>
                  <p className="text-gray-400 text-lg leading-relaxed max-w-md">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. IMPACT STATS (Replacing Team) */}
      <section className="py-32 bg-[#fcfcfc]">
        <div className="max-w-[1600px] mx-auto px-8 md:px-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 text-center">
            <div className="space-y-4">
              <h3 className="text-7xl font-bold text-[#001a33] tracking-tighter">30+</h3>
              <p className="text-[#0e63ed] font-bold uppercase tracking-[0.2em] text-sm">Years of Experience</p>
            </div>
            <div className="space-y-4 border-y md:border-y-0 md:border-x border-gray-100 py-12 md:py-0">
              <h3 className="text-7xl font-bold text-[#001a33] tracking-tighter">1M+</h3>
              <p className="text-[#0e63ed] font-bold uppercase tracking-[0.2em] text-sm">Candidates Reached</p>
            </div>
            <div className="space-y-4">
              <h3 className="text-7xl font-bold text-[#001a33] tracking-tighter">98%</h3>
              <p className="text-[#0e63ed] font-bold uppercase tracking-[0.2em] text-sm">Success Rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CALL TO ACTION */}
      <section className="pb-32 px-8">
        <div className="max-w-[1400px] mx-auto bg-[#0e63ed] rounded-[3.5rem] p-12 md:p-24 text-center relative overflow-hidden shadow-2xl">
          {/* Decorative watermark */}
          <div className="absolute -bottom-10 -right-10 opacity-10 pointer-events-none">
            <div className="w-80 h-80 bg-white rounded-tl-[160px]"></div>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tighter leading-tight mb-8 relative z-10">
            Ready to secure your <br className="hidden md:block" /> ideal graduate role?
          </h2>
          <p className="text-blue-100 text-xl mb-12 max-w-2xl mx-auto relative z-10">
            Join thousands of graduates who have transformed their career search with our expert mentorship and recruitment network.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
            <button className="px-12 py-5 bg-[#ccff00] text-[#001a33] rounded-full font-bold text-lg hover:scale-105 transition-all shadow-xl">
              Register Your CV
            </button>
            <button className="px-12 py-5 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-full font-bold text-lg hover:bg-white/20 transition-all">
              Contact Our Team
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}