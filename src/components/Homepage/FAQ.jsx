import { useEffect, useState } from 'react';
import { Plus, Minus, MessageCircle } from 'lucide-react';

const faqs = [
  {
    question: 'How long does a typical project take?',
    answer: 'Project timelines vary based on scope and complexity. A basic website typically takes 4-6 weeks, while complex projects like custom web applications can take 8-12 weeks or more.'
  },
  {
    question: 'What is your design process?',
    answer: 'Our process includes 5 key phases: Discovery, Strategy, Design, Development, and Launch. We involve you at every stage to ensure the final product matches your vision.'
  },
  {
    question: 'Do you provide ongoing support after launch?',
    answer: 'Yes! All our projects include support periods ranging from 3-12 months depending on your plan. We offer flexible maintenance packages to keep your assets updated.'
  },
  {
    question: 'Can you work with our existing brand guidelines?',
    answer: 'Absolutely! We can work within your brand guidelines or help you create new ones, ensuring consistency and modern appeal.'
  },
  {
    question: 'What technologies do you use?',
    answer: 'We use modern, industry-standard technologies including React, Next.js, Node.js, and CMS platforms. Design is done using Figma and Adobe Suite.'
  },
  {
    question: 'Do you offer SEO services?',
    answer: 'Yes, SEO is included in our service offering. We provide keyword research, content strategy, technical SEO, and ongoing optimization.'
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative py-32 bg-[#fcfcfc] overflow-hidden font-sans">
      {/* Subtle Blue Glows */}
      <div
        className="absolute w-[500px] h-[500px] bg-blue-100/40 rounded-full blur-[120px] pointer-events-none transition-transform duration-500 ease-out"
        style={{ transform: `translate(${cursorPos.x * 0.02}px, ${cursorPos.y * 0.02}px)`, top: '10%', left: '-10%' }}
      />

      <div className="relative z-10 max-w-[1600px] mx-auto px-8 md:px-16">
        {/* Header - Matching CareerSpecialisms style */}
        <div className="mb-20">
          <span className="text-[#0e63ed] font-bold text-xs uppercase tracking-[0.3em] mb-6 block">
            Common Inquiries
          </span>
          <h2 className="text-5xl md:text-7xl font-bold text-slate-900 leading-[0.85] tracking-tighter mb-8">
            Frequently Asked <br />
            <span className="text-[#0e63ed]">Questions</span>
          </h2>
          <p className="text-gray-500 text-xl max-w-2xl leading-relaxed">
            Everything you need to know about our recruitment process, timelines, and how we help your business grow.
          </p>
        </div>

        {/* FAQ List */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-8 space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className={`group border-b border-gray-100 transition-all duration-300 ${
                  openIndex === idx ? 'bg-white shadow-xl shadow-blue-900/5 rounded-2xl border-none p-2' : 'bg-transparent'
                }`}
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full px-6 py-8 flex items-center justify-between text-left"
                >
                  <span className={`text-xl md:text-2xl font-bold tracking-tight transition-colors duration-300 ${
                    openIndex === idx ? 'text-[#0e63ed]' : 'text-[#001a33]'
                  }`}>
                    {faq.question}
                  </span>
                  <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                    openIndex === idx ? 'bg-[#0e63ed] rotate-180' : 'bg-gray-100 group-hover:bg-gray-200'
                  }`}>
                    {openIndex === idx ? (
                      <Minus className="w-5 h-5 text-white" />
                    ) : (
                      <Plus className="w-5 h-5 text-[#001a33]" />
                    )}
                  </div>
                </button>

                <div
                  className={`transition-all duration-500 ease-in-out overflow-hidden ${
                    openIndex === idx ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="px-6 pb-10 text-gray-500 text-lg leading-relaxed max-w-3xl">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Side Contact Card */}
          <div className="lg:col-span-4 lg:sticky lg:top-32">
            <div className="bg-[#001a33] rounded-[2.5rem] p-12 text-white relative overflow-hidden">
                <div className="absolute top-[-10%] right-[-10%] w-32 h-32 bg-[#0e63ed] blur-[60px] opacity-50" />
                <MessageCircle className="w-12 h-12 text-[#0e63ed] mb-8" />
                <h3 className="text-3xl font-bold tracking-tight mb-4">Still have questions?</h3>
                <p className="text-gray-400 text-lg mb-10 leading-relaxed">
                    Can't find the answer you're looking for? Please chat to our friendly team.
                </p>
                <button 
                    className="w-full py-5 bg-[#0e63ed] text-white rounded-full font-bold text-lg hover:bg-blue-600 transition-all shadow-lg shadow-blue-900/20"
                >
                    Get in touch
                </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}