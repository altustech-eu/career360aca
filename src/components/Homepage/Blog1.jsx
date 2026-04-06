import React from "react";
import { ArrowRight, BookOpen } from "lucide-react";

const articles = [
  {
    title: "What Is Work Shadowing? A Guide for University Students",
    description: "Choosing a career path can be challenging, especially when it is difficult to understand what different jobs are really like. Work shadowing allows students to...",
    tag: "Employability, Students",
    image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800",
    featured: true,
  },
  {
    title: "How To Bounce Back After Job Rejection as a Graduate",
    description: "Few feelings hit harder than opening a rejection email after putting real effort into an application. But the truth is simple. Rejection is...",
    tag: "Careers advice",
    image: "https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    title: "5 Graduate CV Mistakes and How to Fix Them",
    description: "As a recent graduate, your CV plays a huge role in opening the door to your first professional role. Small mistakes, such as...",
    tag: "Careers advice",
    image: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    title: "How to Secure a Graduate Leadership Scheme",
    description: "If you want early responsibility and a clear path to career growth, graduate leadership schemes are worth exploring. Read our guide...",
    tag: "Careers advice",
    image: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    title: "7 Things to Research for Your Graduate Job Interview",
    description: "Interviews can feel like the most daunting part of any graduate job application. I've sat through my fair share of them, and I know...",
    tag: "Interviews",
    image: "https://images.pexels.com/photos/1181605/pexels-photo-1181605.jpeg?auto=compress&cs=tinysrgb&w=800",
  }
];

export default function ArticleHub() {
  return (
    <section className="bg-[#fcfcfc] py-24 font-sans">
      {/* 1. HEADER SECTION */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 text-center mb-16">
        <h2 className="text-5xl md:text-7xl font-bold text-[#1a1a1a] tracking-tight mb-6">
          Article Hub
        </h2>
        <p className="text-gray-500 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mb-8">
          Get expert career insights, job advice and wellbeing guidance to boost your confidence and success after university.
        </p>
        <button className="inline-flex items-center gap-2 border border-gray-200 px-6 py-2 rounded-full text-sm font-medium text-gray-600 hover:bg-gray-50 transition-all bg-white shadow-sm">
          View all articles <BookOpen size={14} className="text-[#0e63ed]" />
        </button>
      </div>

      {/* 2. GRID CONTAINER */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        {/* TOP ROW: Featured (8 cols) + Side Card (4 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-8">
          
          {/* FEATURED LARGE CARD */}
          <div className="lg:col-span-8 group cursor-pointer overflow-hidden rounded-[2rem] bg-white shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col md:flex-row h-full lg:h-[450px]">
            <div className="w-full md:w-1/2 overflow-hidden">
              <img 
                src={articles[0].image} 
                alt=""
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
            </div>
            <div className="w-full md:w-1/2 bg-[#0e63ed] p-10 flex flex-col justify-center text-white">
              <span className="bg-white/10 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold w-fit mb-4 flex items-center gap-2 uppercase tracking-wider">
                <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
                {articles[0].tag}
              </span>
              <h3 className="text-2xl md:text-3xl font-bold leading-tight tracking-tight mb-4">
                {articles[0].title}
              </h3>
              <p className="text-white/80 text-sm leading-relaxed mb-4">
                {articles[0].description} <span className="font-bold opacity-100 hover:underline">read more</span>
              </p>
              <div className="mt-auto self-end opacity-50 group-hover:opacity-100 transition-opacity">
                <ArrowRight size={20} />
              </div>
            </div>
          </div>

          {/* SECOND CARD (Vertical) */}
          <div className="lg:col-span-4 group cursor-pointer flex flex-col bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-xl transition-all border border-gray-100">
            <div className="h-48 overflow-hidden">
              <img src={articles[1].image} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" alt="" />
            </div>
            <div className="p-8 flex flex-col flex-1">
              <span className="bg-gray-100 text-gray-500 px-3 py-1 rounded-full text-[10px] font-bold w-fit mb-4 uppercase tracking-wider">
                {articles[1].tag}
              </span>
              <h3 className="text-xl font-bold text-gray-900 leading-snug mb-3 group-hover:text-[#0e63ed] transition-colors">
                {articles[1].title}
              </h3>
              <p className="text-gray-500 text-xs leading-relaxed mb-4">
                {articles[1].description} <span className="font-bold text-gray-700">read more</span>
              </p>
              <div className="mt-auto flex justify-end opacity-30 group-hover:opacity-100 transition-opacity">
                <ArrowRight size={16} />
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM ROW: 3 Equal Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.slice(2).map((article, index) => (
            <div key={index} className="group cursor-pointer flex flex-col bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-xl transition-all border border-gray-100">
              <div className="h-48 overflow-hidden">
                <img src={article.image} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" alt="" />
              </div>
              <div className="p-8 flex flex-col flex-1">
                <span className="bg-gray-100 text-gray-500 px-3 py-1 rounded-full text-[10px] font-bold w-fit mb-4 uppercase tracking-wider">
                  {article.tag}
                </span>
                <h3 className="text-xl font-bold text-gray-900 leading-snug mb-3 group-hover:text-[#0e63ed] transition-colors">
                  {article.title}
                </h3>
                <p className="text-gray-500 text-xs leading-relaxed mb-4">
                  {article.description} <span className="font-bold text-gray-700">read more</span>
                </p>
                <div className="mt-auto flex justify-end opacity-30 group-hover:opacity-100 transition-opacity">
                  <ArrowRight size={16} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}