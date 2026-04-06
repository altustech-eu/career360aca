import React from 'react';
import { 
  Instagram, 
  Linkedin, 
  Twitter, 
  Youtube, 
  Facebook, 
  ChevronRight, 
  ArrowUpCircle,
  LogIn,
  UserPlus
} from 'lucide-react';
import Logo from '../../assests/logo.png'; // Ensure path is correct

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full font-sans">
      
      {/* 1. BLUE REGISTRATION CTA BAR */}
      <div className="bg-[#0e63ed] py-12 md:py-16">
        <div className="max-w-[1600px] mx-auto px-8 md:px-16 flex flex-col md:flex-row items-center justify-between gap-8">
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter leading-tight max-w-2xl text-center md:text-left">
            Register your free account now to see your matching jobs.
          </h2>
          
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-2 bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-bold hover:bg-white hover:text-[#0e63ed] transition-all">
              <UserPlus size={20} />
              Register
            </button>
            <button className="flex items-center gap-2 text-white font-bold hover:opacity-80 transition-opacity">
              <LogIn size={20} />
              Login
            </button>
          </div>
        </div>
      </div>

      {/* 2. MAIN DARK FOOTER */}
      <div className="bg-[#1a1b1e] text-white pt-24 pb-12 relative overflow-hidden">
        
        {/* Decorative Leaf Shape (Bottom Right) */}
        <div className="absolute bottom-0 right-0 opacity-10 pointer-events-none select-none translate-x-1/4 translate-y-1/4">
           <div className="w-[400px] h-[400px] bg-gray-400 rounded-tl-[200px]"></div>
        </div>

        <div className="max-w-[1600px] mx-auto px-8 md:px-16 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-20">
            
            {/* Logo & About Column */}
            <div className="md:col-span-5">
              <div className="mb-8">
                <img src={Logo} alt="GRB Logo" className="h-12 w-auto brightness-0 invert" />
              </div>
              <p className="text-gray-400 text-lg leading-relaxed max-w-md mb-10">
                GRB (Graduate Recruitment Bureau) are part of The GRB Group – an award winning, multi-service early talent solutions recruitment partner.
              </p>
              
              {/* Social Icons */}
              <div className="flex gap-6 mb-12">
                {[
                  { icon: Instagram, href: '/' },
                  { icon: TikTokIcon, href: '/' }, // Using custom TikTok component below
                  { icon: Linkedin, href: '/' },
                  { icon: Twitter, href: '/' },
                  { icon: Youtube, href: '/' },
                  { icon: Facebook, href: '/' }
                ].map((social, i) => (
                  <a key={i} href={social.href} className="text-white hover:text-[#0e63ed] transition-colors">
                    <social.icon size={24} />
                  </a>
                ))}
              </div>

              {/* Back to Top Button */}
              <button 
                onClick={scrollToTop}
                className="flex items-center gap-2 bg-[#0e63ed] text-white px-6 py-3 rounded-full font-bold hover:bg-blue-700 transition-all shadow-lg"
              >
                <ArrowUpCircle size={20} />
                Back to top
              </button>
            </div>

            {/* Sitemap Column */}
            <div className="md:col-span-3">
              <h4 className="text-xl font-bold mb-8 tracking-tight">Sitemap</h4>
              <ul className="space-y-4">
                {['Home', 'Job search', 'Career advice', 'Article hub', 'Featured employers', 'Employer services', 'About us', 'Contact us'].map((item) => (
                  <li key={item}>
                    <a href="/" className="text-gray-400 hover:text-white flex items-center gap-2 text-md transition-colors group">
                      <ChevronRight size={14} className="text-[#0e63ed] group-hover:translate-x-1 transition-transform" />
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal Column */}
            <div className="md:col-span-4">
              <h4 className="text-xl font-bold mb-8 tracking-tight">Legal</h4>
              <ul className="space-y-4">
                {['Privacy policy', 'Data protection', 'Terms & conditions', 'Cookie policy', 'All policies & terms'].map((item) => (
                  <li key={item}>
                    <a href="/" className="text-gray-400 hover:text-white flex items-center gap-2 text-md transition-colors group">
                      <ChevronRight size={14} className="text-[#0e63ed] group-hover:translate-x-1 transition-transform" />
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom Copyright Bar */}
          <div className="border-t border-gray-800 pt-8 flex justify-center">
            <p className="text-gray-500 text-sm font-medium">
              © {currentYear} Graduate Recruitment Bureau
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

// Simple TikTok Icon Placeholder
const TikTokIcon = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);