import React, { useState } from "react";
import { Icon } from '@iconify/react';
import { motion, AnimatePresence } from 'framer-motion';

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
  const [selectedMember, setSelectedMember] = useState(null);

  const teamMembers = [
    { id: 1, name: "Priya Sharma", role: "Nursing Candidate", location: "Berlin", journey: "Successfully cleared the B2 exam in 6 months and secured a nursing position.", img: s1 },
    { id: 2, name: "Rahul Verma", role: "IT Professional", location: "Munich", journey: "Completed an Ausbildung in software development with the German Team.", img: s2 },
    { id: 3, name: "Anjali Singh", role: "University Student", location: "Frankfurt", journey: "Transitioned to a tuition-free Masters program in computer science.", img: s3 },
    { id: 4, name: "Vikram Patel", role: "Healthcare Professional", location: "Hamburg", journey: "Cleared the Kenntnisprüfung on the first attempt with our medical modules.", img: s4 },
    { id: 5, name: "Sneha Reddy", role: "Language Student", location: "Cologne", journey: "Advanced from A1 to C1 and joined the university pathway.", img: s5 },
    { id: 6, name: "Amit Kumar", role: "Engineering Intern", location: "Stuttgart", journey: "Secured a paid internship at a leading automobile hub.", img: s6 },
    { id: 7, name: "Pooja Hegde", role: "Nursing Candidate", location: "Berlin", journey: "Successfully cleared the B2 exam in 6 months and secured a nursing position.", img: s7 },
    { id: 8, name: "Karthik Aryan", role: "IT Professional", location: "Munich", journey: "Completed an Ausbildung in software development with the German Team.", img: s8 },
    { id: 9, name: "Deepika Padukone", role: "University Student", location: "Frankfurt", journey: "Transitioned to a tuition-free Masters program in computer science.", img: s9 },
    { id: 10, name: "Ranveer Singh", role: "Healthcare Professional", location: "Hamburg", journey: "Cleared the Kenntnisprüfung on the first attempt with our medical modules.", img: s10 },
    { id: 11, name: "Alia Bhatt", role: "Language Student", location: "Cologne", journey: "Advanced from A1 to C1 and joined the university pathway.", img: s11 },
    { id: 12, name: "Varun Dhawan", role: "Engineering Intern", location: "Stuttgart", journey: "Secured a paid internship at a leading automobile hub.", img: s12 },
    { id: 13, name: "Kiara Advani", role: "Nursing Candidate", location: "Berlin", journey: "Successfully cleared the B2 exam in 6 months and secured a nursing position.", img: s13 },
    { id: 14, name: "Sidharth Malhotra", role: "IT Professional", location: "Munich", journey: "Completed an Ausbildung in software development with the German Team.", img: s14 },
    { id: 15, name: "Katrina Kaif", role: "University Student", location: "Frankfurt", journey: "Transitioned to a tuition-free Masters program in computer science.", img: s15 },
    { id: 16, name: "Vicky Kaushal", role: "Healthcare Professional", location: "Hamburg", journey: "Cleared the Kenntnisprüfung on the first attempt with our medical modules.", img: s16 },
    { id: 17, name: "Kareena Kapoor", role: "Language Student", location: "Cologne", journey: "Advanced from A1 to C1 and joined the university pathway.", img: s17 },
    { id: 18, name: "Saif Ali Khan", role: "Engineering Intern", location: "Stuttgart", journey: "Secured a paid internship at a leading automobile hub.", img: s18 },
    { id: 19, name: "Shraddha Kapoor", role: "Nursing Candidate", location: "Berlin", journey: "Successfully cleared the B2 exam in 6 months and secured a nursing position.", img: s19 },
    { id: 20, name: "Tiger Shroff", role: "IT Professional", location: "Munich", journey: "Completed an Ausbildung in software development with the German Team.", img: s20 },
    { id: 21, name: "Kriti Sanon", role: "University Student", location: "Frankfurt", journey: "Transitioned to a tuition-free Masters program in computer science.", img: s21 },
    { id: 22, name: "Shahid Kapoor", role: "Healthcare Professional", location: "Hamburg", journey: "Cleared the Kenntnisprüfung on the first attempt with our medical modules.", img: s22 },
    { id: 23, name: "Ananya Panday", role: "Language Student", location: "Cologne", journey: "Advanced from A1 to C1 and joined the university pathway.", img: s23 },
    { id: 24, name: "Ishaan Khatter", role: "Engineering Intern", location: "Stuttgart", journey: "Secured a paid internship at a leading automobile hub.", img: s24 },
    { id: 25, name: "Janhvi Kapoor", role: "Nursing Candidate", location: "Berlin", journey: "Successfully cleared the B2 exam in 6 months and secured a nursing position.", img: s25 },
    { id: 26, name: "Kartik Aaryan", role: "IT Professional", location: "Munich", journey: "Completed an Ausbildung in software development with the German Team.", img: s26 },
    { id: 27, name: "Sara Ali Khan", role: "University Student", location: "Frankfurt", journey: "Transitioned to a tuition-free Masters program in computer science.", img: s27 },
    { id: 28, name: "Rakul Preet", role: "Healthcare Professional", location: "Hamburg", journey: "Cleared the Kenntnisprüfung on the first attempt with our medical modules.", img: s28 },
    { id: 29, name: "Disha Patani", role: "Nursing Candidate", location: "Berlin", journey: "Successfully cleared the B2 exam in 6 months and secured a nursing position.", img: s29 },
    { id: 30, name: "Ayushmann Khurrana", role: "IT Professional", location: "Munich", journey: "Completed an Ausbildung in software development with the German Team.", img: s30 },
    { id: 31, name: "Bhumi Pednekar", role: "University Student", location: "Frankfurt", journey: "Transitioned to a tuition-free Masters program in computer science.", img: s31 },
    { id: 32, name: "R Madhavan", role: "Healthcare Professional", location: "Hamburg", journey: "Cleared the Kenntnisprüfung on the first attempt with our medical modules.", img: s32 },
    { id: 33, name: "Suriya Sivakumar", role: "Language Student", location: "Cologne", journey: "Advanced from A1 to C1 and joined the university pathway.", img: s33 },
    { id: 34, name: "Jyothika Saravanan", role: "Engineering Intern", location: "Stuttgart", journey: "Secured a paid internship at a leading automobile hub.", img: s34 },
    { id: 35, name: "Karthi Sivakumar", role: "Nursing Candidate", location: "Berlin", journey: "Successfully cleared the B2 exam in 6 months and secured a nursing position.", img: s35 },
    { id: 36, name: "Fahadh Faasil", role: "IT Professional", location: "Munich", journey: "Completed an Ausbildung in software development with the German Team.", img: s36 }
  ];

  return (
    <section className="bg-[#0A0A0A] py-16 font-sans select-none">
      <div className="max-w-full mx-auto px-4 lg:px-12">
        
        {/* HEADER SECTION */}
        <div className="flex flex-col items-center text-center mb-16 max-w-4xl mx-auto">
           {/* Color changed to Yellow */}
           <h2 className="text-[#FFCC00] text-4xl md:text-5xl font-black uppercase tracking-[0.2em] mb-6">
             Our Success Stories
           </h2>
           <p className="text-gray-400 text-xs md:text-sm leading-relaxed max-w-3xl mx-auto font-medium tracking-wide">
             Meet the students and professionals who turned their German dreams into reality with Career360 Academy. From mastering German to securing Ausbildung, healthcare jobs, and university seats – each face has a journey worth celebrating.
           </p>
        </div>

        {/* PORTRAIT GRID */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-0.5 bg-zinc-900 border border-zinc-900 overflow-hidden shadow-2xl">
          {teamMembers.map((member) => (
            <div 
              key={member.id} 
              className="relative aspect-square group overflow-hidden bg-zinc-800 cursor-pointer"
              onClick={() => setSelectedMember(member)}
            >
              <img 
                src={member.img} 
                alt={`Student ${member.id}`} 
                className="w-full h-full object-cover transition-all duration-700 filter grayscale-[0.2] contrast-125 brightness-90 group-hover:grayscale-0 group-hover:scale-110 group-hover:brightness-100"
              />
              
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-5">
                 {/* Decorative line changed to Red */}
                 <div className="h-0.5 w-8 bg-[#DD0000] mb-3 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
                 <span className="text-white text-[10px] font-black uppercase tracking-widest leading-none mb-1">
                   Germany Bound
                 </span>
                 {/* Text color changed to Red */}
                 <span className="text-[#DD0000] text-[8px] font-medium tracking-wider">
                   View Journey
                 </span>
              </div>
            </div>
          ))}
        </div>

        {/* BOTTOM CTA */}
        <div className="mt-16 flex flex-col items-center gap-3 justify-center text-center">
           {/* Button border and text color updated */}
           <button className="flex items-center gap-3 border border-[#DD0000] px-12 py-5 text-white text-[10px] font-black uppercase tracking-[0.25em] hover:bg-white hover:text-black hover:border-white transition-all duration-500">
             Start Your Germany Journey Today
             <Icon icon="solar:arrow-right-up-bold" className="text-sm" />
           </button>
           {/* Subtext color changed to Red */}
           <p className="text-[#DD0000] text-[9px] uppercase tracking-widest font-semibold mt-2">
             Join 500+ Successful Students
           </p>
        </div>

        {/* Popup Modal */}
        <AnimatePresence>
          {selectedMember && (
            // Decreased backdrop-blur for a more immediate feel
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm" onClick={() => setSelectedMember(null)}>
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                // exit transition defined for image (scale and fade)
                exit={{ 
                  opacity: 0, 
                  scale: 0.8,
                  transition: { 
                    duration: 0.2, // Fast closing
                    ease: [0.4, 0, 1, 1] // Accelerated easing
                  } 
                }}
                // initial opening transition
                transition={{ type: 'spring', damping: 25 }}
                className="relative w-full max-w-lg aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl flex flex-col justify-end group cursor-default"
                onClick={(e) => e.stopPropagation()}
              >
                 <button 
                   onClick={() => setSelectedMember(null)}
                   // text color changed to Red
                   className="absolute top-6 right-6 z-20 text-[#DD0000] hover:text-white transition-colors"
                 >
                   <Icon icon="ic:round-close" className="text-2xl" />
                 </button>

                 <img 
                    src={selectedMember.img} 
                    alt={selectedMember.name} 
                    className="absolute inset-0 w-full h-full object-cover grayscale opacity-50 contrast-125 transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105 group-hover:opacity-100" 
                 />

                 <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent group-hover:via-black/20 transition-all duration-500 z-10" />

                 <div className="relative z-10 p-8 text-white w-full">
                    {/* decorative line changed to Red */}
                    <div className="h-0.5 w-12 bg-[#DD0000] mb-4 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
                    
                    {/* Role color changed to Yellow */}
                    <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#FFCC00] mb-2 block">
                       {selectedMember.role}
                    </span>
                    
                    <h3 className="text-3xl font-extrabold tracking-tight mb-2">
                       {selectedMember.name}
                    </h3>
                    
                    <div className="flex items-center gap-2 text-zinc-400 mb-6">
                        {/* Icon color changed to Yellow */}
                        <Icon icon="fluent:location-24-filled" className="text-[#FFCC00]" />
                        <span className="text-xs font-medium">{selectedMember.location}</span>
                        <span className="text-zinc-600">|</span>
                        <span className="text-[10px] font-bold tracking-widest uppercase">ID: #{selectedMember.id}</span>
                    </div>

                    <p className="text-xs font-medium text-zinc-300 max-w-sm leading-relaxed transform translate-y-2 group-hover:translate-y-0 transition-transform duration-400">
                       "{selectedMember.journey}"
                    </p>
                 </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}