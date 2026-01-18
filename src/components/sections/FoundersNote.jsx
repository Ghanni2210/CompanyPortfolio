import React from 'react';

const FoundersNote = () => {
  return (
    <section
      id="founders-note"
      className="py-12 bg-[#050505] text-white relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="transition-all duration-700 ease-out opacity-100 translate-y-0">
            <div className="mb-5">
              <p className="text-[14px] text-[#858585] font-manrope font-normal leading-none tracking-normal text-center rounded-full border border-[#252525] bg-[#050505] px-4 py-1 inline-block">
                OUR VISION
              </p>
            </div>

            <p className="text-[38px] font-medium tracking-[-0.025em] leading-[1.25em] text-center capitalize text-white mx-auto w-full max-w-[568px] mb-6">
              Founder's Vision
            </p>

            <p className="text-base font-normal text-[#aaaaaa] leading-[1.6] text-center max-w-[600px] mx-auto">
              Our commitment to revolutionizing business automation through AI
            </p>
          </div>
        </div>

        <div className="transition-all duration-700 ease-out opacity-100 translate-y-0" style={{ transitionDelay: '200ms' }}>
          <div className="text-center max-w-5xl mx-auto">
            <blockquote className="text-2xl lg:text-4xl font-semibold text-white mb-12 leading-relaxed hyphens-auto text-balance">
              "First, we identify your business needs, show you how AI can help, make a simple plan, then deploy your AI solutions for{' '}
              <span className="text-[#e87811]">real results</span>."
            </blockquote>

            <div className="flex items-center justify-center gap-6 mb-16">
              <div className="w-20 h-20 rounded-full overflow-hidden">
                <img
                  alt="Co-founder & COO"
                  loading="lazy"
                  width="80"
                  height="80"
                  className="w-full h-full object-cover"
                  src="https://ui-avatars.com/api/?name=Gourang+Patidar&size=256&background=e87811&color=fff"
                />
              </div>
              <div className="text-left">
                <div className="text-[#e87811] font-medium">Founder & COO</div>
                <div className="text-gray-400 text-sm">Gourang Patidar</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FoundersNote;
