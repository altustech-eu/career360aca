import React from 'react';
import Navigation from './Navigation';
import Hero from './Hero';
import Infinityscroll from './infinityscrolling';
import Services from './textsection';
import About from './About';
import Work from './CareerAdvice';
import Testimonials from './Testimonials';
import Process from './Process';
import Blogsec from './Blog1';
import FAQ from './FAQ';

export default function Home() {
  return (
    <div className="bg-slate-900 text-white">
      <Navigation />
      <Hero />
      <Infinityscroll />
      <Services />
      <About />
      <Work />
       <Testimonials />
      <Process />
      <Blogsec />
      <FAQ />
    
    </div>
  );
}
