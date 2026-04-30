import React, { useState } from 'react';
import { Play, X} from 'lucide-react';

const WebinarGallery = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const webinars = [
    {
      id: "08",
      code: "BB",
      title: "Puerto Rico",
      subtitle: "Puerto Rico Residency",
      year: "2026",
      image: "https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=1260",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Replace with your video
      tag: "RAD MUHAM",
      active: true
    },
    {
      id: "01",
      code: "FO",
      title: "FORMULA 1",
      subtitle: "Formula 1 Paddock Viewing Lounge",
      year: "2026",
      image: "https://images.pexels.com/photos/3912981/pexels-photo-3912981.jpeg?auto=compress&cs=tinysrgb&w=1260",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Replace with your video
      tag: "FORMULA 1",
      active: false
    }
  ];

  return (
    <section className="w-full bg-[#f0f2f5] py-12 font-sans selection:bg-black selection:text-white relative">
      {/* Top Header Labels */}
      <div className="max-w-full px-4 mb-4 flex justify-center">
         <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.3em] text-slate-900">
            <div className="w-2 h-2 bg-black rotate-45" />
            Featured Work
         </div>
      </div>

      <div className="flex flex-col lg:flex-row w-full min-h-[600px] lg:min-h-[750px] overflow-hidden relative">
        
        {webinars.map((item) => (
          <div 
            key={item.id} 
            onClick={() => setSelectedVideo(item)}
            className="relative flex-1 group overflow-hidden border-r border-white/10 last:border-0 cursor-pointer min-h-[500px]"
          >
            {/* Image Layer */}
            <div className="absolute inset-0 bg-black">
              <img 
                src={item.image} 
                className="w-full h-full object-cover opacity-80 group-hover:scale-110 group-hover:opacity-100 transition-all duration-1000" 
                alt={item.title} 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/20" />
            </div>

            {/* Centered Large Branding */}
            <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center z-10">
               <h2 className="text-white text-6xl md:text-8xl lg:text-[120px] font-black leading-none tracking-tighter uppercase mb-2 group-hover:tracking-normal transition-all duration-700">
                 {item.title}
               </h2>
               <div className="mt-4 px-6 py-2 border border-white/20 text-white text-[10px] font-bold uppercase tracking-[0.4em] backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                 Play Video
               </div>
            </div>

            {/* Bottom Metadata Bar */}
            <div className="absolute bottom-0 left-0 w-full p-10 flex items-end justify-between text-white/70 z-10">
               <div className="flex flex-col gap-1">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-white">{item.tag}</span>
                  <p className="text-[10px] max-w-[160px] leading-tight font-medium uppercase">{item.subtitle}</p>
                  <span className="text-[10px] font-medium opacity-50">{item.year}</span>
               </div>
               <div className="text-6xl md:text-7xl font-extralight tracking-tighter text-white/90">{item.code}</div>
               <div className="text-5xl md:text-6xl font-extralight tracking-tighter opacity-80">{item.id}</div>
            </div>

            {/* Play Icon Circle */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                <div className="w-24 h-24 rounded-full bg-white/10 backdrop-blur-xl border border-white/30 flex items-center justify-center transform scale-75 group-hover:scale-100 transition-transform duration-500">
                    <Play fill="white" size={32} className="text-white ml-1" />
                </div>
            </div>
          </div>
        ))}
      </div>

      {/* --- VIDEO POPUP MODAL --- */}
      {selectedVideo && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10">
          {/* Backdrop Blur */}
          <div 
            className="absolute inset-0 bg-black/95 backdrop-blur-2xl"
            onClick={() => setSelectedVideo(null)}
          />
          
          <div className="relative w-full max-w-6xl aspect-video bg-black shadow-2xl rounded-sm overflow-hidden animate-in zoom-in-95 duration-300">
            {/* Close Button */}
            <button 
              onClick={() => setSelectedVideo(null)}
              className="absolute -top-12 right-0 md:top-6 md:right-6 text-white/50 hover:text-white transition-colors z-[110] flex items-center gap-2 uppercase text-[10px] font-bold tracking-widest"
            >
              Close <X size={20} />
            </button>

            {/* Iframe Player */}
            <iframe
              src={`${selectedVideo.videoUrl}?autoplay=1`}
              className="w-full h-full"
              allow="autoplay; encrypted-media"
              allowFullScreen
              title="Video Player"
            />

            {/* Modal Mini Footer */}
            <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black to-transparent pointer-events-none">
                <h3 className="text-white text-2xl font-bold uppercase tracking-tighter">{selectedVideo.title}</h3>
                <p className="text-white/50 text-[10px] uppercase tracking-widest">{selectedVideo.subtitle}</p>
            </div>
          </div>
        </div>
      )}

      {/* Slider Progress Bar */}
      <div className="w-full flex justify-center mt-12 gap-3">
         {[1,2,3,4].map(i => (
           <div key={i} className={`h-[2px] w-16 transition-all duration-500 ${i === 1 ? 'bg-black' : 'bg-slate-300'}`} />
         ))}
      </div>
    </section>
  );
};

export default WebinarGallery;