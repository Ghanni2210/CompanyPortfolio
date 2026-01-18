import React from 'react';
import { useInView } from 'react-intersection-observer';

const Benefits = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const benefits = [
    {
      title: 'Real-Time Intelligence',
      description: 'Access accurate, real-time data to drive smarter decisions',
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      ),
      delay: 0,
    },
    {
      title: 'Measurable Impact',
      description: 'Track performance, uncover insights, and achieve data-backed growth',
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
        />
      ),
      delay: 150,
    },
    {
      title: 'Seamless Integration',
      description: 'Connect tools, teams, and workflows with intelligent automation',
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        />
      ),
      delay: 300,
    },
  ];

  return (
    <section
      id="benefits"
      className="py-12 bg-[#050505] relative overflow-hidden"
      aria-labelledby="benefits-heading"
      ref={ref}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div
            className={`transition-all duration-700 ease-out ${
              inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="mb-5">
              <p className="text-[14px] text-[#858585] font-manrope font-normal leading-none tracking-normal text-center rounded-full border border-[#252525] bg-[#050505] px-4 py-1 inline-block">
                WHY CHOOSE US
              </p>
            </div>
            <h2
              id="benefits-heading"
              className="text-[38px] font-medium tracking-[-0.025em] leading-relaxed text-center capitalize text-white mx-auto w-full max-w-[568px] mb-6"
            >
              Everything you need to succeed
            </h2>
            <p className="text-base font-normal text-[#aaaaaa] leading-[1.6] text-center max-w-[600px] mx-auto">
              Everything you need to automate, optimize, and scale
            </p>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className={`transition-all duration-700 ease-out ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${benefit.delay}ms` }}
            >
              <article className="bg-gradient-to-br from-[#2a2a2a] to-[#0a0a0a] border border-[#2a2a2a] hover:border-[#e87811]/50 transition-all duration-300 hover:shadow-lg hover:shadow-[#e87811]/10 rounded-2xl p-8 h-full group">
                {/* Icon Container */}
                <div className="bg-black/70 border border-gray-700 rounded-xl p-6 mb-6 relative overflow-hidden">
                  <div className="absolute top-3 left-3 flex space-x-1" aria-hidden="true">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="flex justify-center items-center h-24 mt-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-[#e87811] to-[#ff9500] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <svg
                        className="h-8 w-8 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        {benefit.icon}
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="text-center">
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-[#e87811] transition-colors duration-300">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
