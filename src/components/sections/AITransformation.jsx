import React from 'react';
import Button from '../common/Button';

const AITransformation = () => {
  return (
    <section className="py-24 bg-[#050505] text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-40 [background-image:radial-gradient(circle,rgba(255,255,255,0.05)_1.5px,transparent_1.5px)] [background-size:25px_25px]"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <div className="mb-8">
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-transparent border border-[#585858]/20 text-sm font-medium font-manrope text-[#afafaf]">
              <div className="w-2 h-2 bg-[#e87811] rounded-full mr-2 animate-pulse"></div>
              <p>AI TRANSFORMATION</p>
            </span>
          </div>

          <div className="mb-12">
            <h2 className="font-satoshi font-medium text-[33px] lg:text-[56px] text-white leading-relaxed text-center mx-auto max-w-5xl hyphens-auto text-balance">
              <span className="text-[#aaaaaa]">"Instead of Hiring </span>
              <span className="text-[#e87811]">AI Engineers</span>
              <span className="text-[#aaaaaa]">, Still you can make your company </span>
              <span className="text-[#e87811]">AI Powered</span>
              <span className="text-[#aaaaaa]">."</span>
            </h2>
          </div>

          <div className="flex items-center justify-center gap-6 mb-16">
            <div className="w-20 h-20 rounded-full overflow-hidden">
              <img
                alt="Co-founder & CTO"
                loading="lazy"
                width="80"
                height="80"
                className="w-full h-full object-cover"
                src="https://ui-avatars.com/api/?name=Aryan+Tyagi&size=256&background=e87811&color=fff"
              />
            </div>
            <div className="text-left">
              <div className="text-[#e87811] font-medium">Co-Founder & CTO</div>
              <div className="text-gray-400 text-sm">Aryan Tyagi</div>
            </div>
          </div>

          <div className="w-fit mx-auto">
            <Button ariaLabel="Book a free call">Book a free call</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AITransformation;
