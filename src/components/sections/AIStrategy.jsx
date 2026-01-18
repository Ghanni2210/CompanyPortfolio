import React from 'react';
import Button from '../common/Button';

const AIStrategy = () => {
  return (
    <section
      id="ai-strategy"
      className="py-24 bg-[#050505] text-white relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="mb-5">
            <p className="text-[14px] text-[#858585] font-manrope font-normal leading-none tracking-normal text-center rounded-full border border-[#252525] bg-[#050505] px-4 py-1 inline-block">
              AI STRATEGY
            </p>
          </div>
          <p className="text-[38px] font-medium tracking-[-0.025em] leading-[1.25em] text-center capitalize text-white mx-auto w-full max-w-[568px] mb-6">
            Strategic AI Implementation
          </p>
          <p className="text-base font-normal text-[#aaaaaa] leading-[1.6] text-center max-w-[600px] mx-auto">
            Expert guidance to implement AI solutions that drive business growth
          </p>
        </div>

        <div className="text-center max-w-5xl mx-auto">
          <blockquote className="text-2xl lg:text-4xl font-semibold text-white mb-12 leading-relaxed hyphens-auto text-balance">
            "We find what to automate, who your users are & how{' '}
            <span className="text-[#e87811]">AI can optimize</span> your workflow. Best part is we also{' '}
            <span className="text-[#e87811]">build and launch</span> real solutions."
          </blockquote>
        </div>

        <div className="flex items-center justify-center gap-6 my-4">
          <div className="w-20 h-20 rounded-full overflow-hidden">
            <img
              alt="AI Strategy Lead"
              loading="lazy"
              width="80"
              height="80"
              className="w-full h-full object-cover"
              src="https://ui-avatars.com/api/?name=Aniket+Vishwakarma&size=256&background=e87811&color=fff"
            />
          </div>
          <div className="text-left">
            <div className="text-[#e87811] font-medium">AI Strategy Lead</div>
            <div className="text-gray-400 text-sm">Aniket Vishwakarma</div>
          </div>
        </div>

        <div className="text-center mt-16 flex justify-center">
          <Button ariaLabel="Book a free call">Book a free call</Button>
        </div>
      </div>
    </section>
  );
};

export default AIStrategy;
