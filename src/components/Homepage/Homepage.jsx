import React from 'react';
import Hero from './Hero';
import Infinityscroll from './infinityscrolling';
import Services from './Services';
import About from './About';
import WHOwe from './WHO WE GUARANTE';
import Testimonials from './Testimonials';
import WebinarGallery from './WebinarGallery';
import Ourimage from './Ourimage';
import Reviewvideo1 from './Reviewvideo';
import Reviewvideo2 from './Reviewvideo2';
import Article from './Article';
import Officephoto from './Officephoto';
import OurNetwork from './OurNetwork';
import Magicsection from './magicsection';



export default function Home() {
  return (
    <div className="bg-slate-900 text-white">
     
  
      
    
      <Hero />
      <Infinityscroll />
      <Services />
      <About />
      <WHOwe />
      <Testimonials />
      <WebinarGallery />
      <Ourimage />
      <Reviewvideo1 />
      <Reviewvideo2 />
      <Article />
      <Officephoto />
      <OurNetwork />
      <Magicsection />
    </div>
  );
}