import React from "react";
import { Icon } from '@iconify/react';

// Exact import format for all 36 students
import s1 from "../../assests/Ourimage/Rectangle 1334.webp";
import s2 from "../../assests/Ourimage/Rectangle 1335.webp";
import s3 from "../../assests/Ourimage/Rectangle 1336.webp";
import s4 from "../../assests/Ourimage/Rectangle 1337.webp";
import s5 from "../../assests/Ourimage/Rectangle 1338.webp";
import s6 from "../../assests/Ourimage/Rectangle 1339.webp";
import s7 from "../../assests/Ourimage/Rectangle 1340.webp";
import s8 from "../../assests/Ourimage/Rectangle 1341.webp";
import s9 from "../../assests/Ourimage/Rectangle 1357.webp";
import s10 from "../../assests/Ourimage/Rectangle 1358.webp";
import s11 from "../../assests/Ourimage/Rectangle 1360.webp";
import s12 from "../../assests/Ourimage/Rectangle 1361.webp";
import s13 from "../../assests/Ourimage/Rectangle 1362.webp";
import s14 from "../../assests/Ourimage/Rectangle 1363.webp";
import s15 from "../../assests/Ourimage/Rectangle 1364.webp";
import s16 from "../../assests/Ourimage/Rectangle 1365.webp";
import s17 from "../../assests/Ourimage/Rectangle 1366.webp";
import s18 from "../../assests/Ourimage/Rectangle 1367.webp";
import s19 from "../../assests/Ourimage/Rectangle 1368.webp";
import s20 from "../../assests/Ourimage/Rectangle 1369.webp";
import s21 from "../../assests/Ourimage/Rectangle 1370.webp";
import s22 from "../../assests/Ourimage/Rectangle 1371.webp";
import s23 from "../../assests/Ourimage/Rectangle 1372.webp";
import s24 from "../../assests/Ourimage/Rectangle 1373.webp";
import s25 from "../../assests/Ourimage/Rectangle 1374.webp";
import s26 from "../../assests/Ourimage/Rectangle 1375.webp";
import s27 from "../../assests/Ourimage/Rectangle 34624577.webp";
import s28 from "../../assests/Ourimage/Rectangle 34624586.webp";
import s29 from "../../assests/Ourimage/Rectangle 1334.webp";
import s30 from "../../assests/Ourimage/Rectangle 1335.webp";
import s31 from "../../assests/Ourimage/Rectangle 1336.webp";
import s32 from "../../assests/Ourimage/Rectangle 1369.webp";
import s33 from "../../assests/Ourimage/Rectangle 1357.webp";
import s34 from "../../assests/Ourimage/Rectangle 1339.webp";
import s35 from "../../assests/Ourimage/Rectangle 1341.webp";
import s36 from "../../assests/Ourimage/Rectangle 1357.webp";

export default function OurPeople() {
  // Mapping the imports into an array
  const teamMembers = [
    { id: 1, img: s1 }, { id: 2, img: s2 }, { id: 3, img: s3 }, { id: 4, img: s4 }, { id: 5, img: s5 }, { id: 6, img: s6 },
    { id: 7, img: s7 }, { id: 8, img: s8 }, { id: 9, img: s9 }, { id: 10, img: s10 }, { id: 11, img: s11 }, { id: 12, img: s12 },
    { id: 13, img: s13 }, { id: 14, img: s14 }, { id: 15, img: s15 }, { id: 16, img: s16 }, { id: 17, img: s17 }, { id: 18, img: s18 },
    { id: 19, img: s19 }, { id: 20, img: s20 }, { id: 21, img: s21 }, { id: 22, img: s22 }, { id: 23, img: s23 }, { id: 24, img: s24 },
    { id: 25, img: s25 }, { id: 26, img: s26 }, { id: 27, img: s27 }, { id: 28, img: s28 }, { id: 29, img: s29 }, { id: 30, img: s30 },
    { id: 31, img: s31 }, { id: 32, img: s32 }, { id: 33, img: s33 }, { id: 34, img: s34 }, { id: 35, img: s35 }, { id: 36, img: s36 }
  ];

  return (
    <section className="bg-[#0A0A0A] py-16 font-sans">
      <div className="max-w-full mx-auto px-4 lg:px-12">
        
        {/* HEADER SECTION */}
        <div className="flex flex-col items-center text-center mb-16 max-w-xl mx-auto">
           <h2 className="text-[#A3E635] text-3xl font-black uppercase tracking-[0.2em] mb-6">
             Our People
           </h2>
           <p className="text-gray-400 text-xs md:text-sm leading-relaxed font-medium">
             Read the stories of the people of Career360. Or just put a face with the person you’ve been emailing with.
           </p>
        </div>

        {/* PORTRAIT GRID */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-0.5 bg-zinc-900 border border-zinc-900 overflow-hidden shadow-2xl">
          {teamMembers.map((member) => (
            <div 
              key={member.id} 
              className="relative aspect-square group overflow-hidden bg-zinc-800"
            >
              <img 
                src={member.img} 
                alt={`Student ${member.id}`} 
                className="w-full h-full object-cover transition-all duration-700 filter grayscale-[0.2] contrast-125 brightness-90 group-hover:grayscale-0 group-hover:scale-110 group-hover:brightness-100"
              />
              
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-4">
                 <div className="h-0.5 w-8 bg-[#A3E635] mb-2 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
                 <span className="text-white text-[10px] font-black uppercase tracking-widest leading-none">
                   View Profile
                 </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 flex justify-center">
           <button className="flex items-center gap-3 border border-zinc-800 px-10 py-4 text-white text-[10px] font-black uppercase tracking-[0.25em] hover:bg-white hover:text-black transition-all duration-300">
             Join Our Global Team
             <Icon icon="solar:arrow-right-up-bold" className="text-sm" />
           </button>
        </div>

      </div>
    </section>
  );
}
