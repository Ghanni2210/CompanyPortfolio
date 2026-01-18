import React, { useState } from 'react';

const Process = () => {
  const [activeStep, setActiveStep] = useState(1);

  const steps = [
    {
      id: 1,
      title: 'Identification & Analysis',
      metric: 'increase in efficiency',
      description: 'We start by understanding your business needs, challenges, and goals to create a tailored AI strategy that delivers results.',
    },
    {
      id: 2,
      title: 'Strategy & Planning',
      metric: 'faster deployment',
      description: 'We develop a comprehensive roadmap and action plan tailored to your business objectives and technical requirements.',
    },
    {
      id: 3,
      title: 'Development & Implementation',
      metric: 'client satisfaction',
      description: 'Our team builds, tests, and deploys your AI solution with continuous monitoring and optimization for maximum performance.',
    },
  ];

  const stats = [
    { value: '50+', label: 'Projects Completed' },
    { value: '98%', label: 'Success Rate' },
    { value: '10+', label: 'Team Members' },
    { value: '24/7', label: 'Support Available' },
  ];

  return (
    <section id="process" className="py-24 bg-[#050505] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="mb-5">
            <p className="text-[14px] text-[#858585] font-manrope font-normal leading-none tracking-normal text-center rounded-full border border-[#252525] bg-[#050505] px-4 py-1 inline-block">
              OUR PROVEN PROCESS
            </p>
          </div>
          <p className="text-[38px] font-medium tracking-[-0.025em] leading-[1.25em] text-center capitalize text-white mx-auto w-full max-w-[568px] mb-6">
            How We Transform Your Business
          </p>
          <p className="text-base font-normal text-[#aaaaaa] leading-[1.6] text-center max-w-[600px] mx-auto">
            Our structured approach ensures successful AI implementation from concept to deployment.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-[#282828]"></div>
            <div className="space-y-8">
              {steps.map((step, index) => (
                <div
                  key={step.id}
                  className={`process-step relative cursor-pointer transition-all duration-300 group ${
                    activeStep === step.id ? 'opacity-100 active' : 'opacity-60 hover:opacity-80'
                  }`}
                  onClick={() => setActiveStep(step.id)}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <div
                    className={`process-indicator absolute left-4 top-0 bottom-0 w-0.5 transition-all duration-300 ${
                      activeStep === step.id ? 'bg-[#e87811]' : 'bg-transparent'
                    }`}
                  ></div>
                  <div className="pl-12">
                    <div className="mb-4">
                      <p className="text-2xl font-bold text-white mb-2">{step.title}</p>
                      <p className="text-[#e87811] font-medium">{step.metric}</p>
                    </div>
                    <div
                      className={`process-content overflow-hidden transition-all duration-500 ease-in-out ${
                        activeStep === step.id ? 'max-h-32 opacity-100' : 'max-h-0 opacity-0'
                      }`}
                    >
                      <p className="text-gray-400 leading-relaxed pb-4">{step.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden transition-all duration-500 scale-95 opacity-70 hover:scale-100 hover:opacity-100">
              <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] p-4 rounded-2xl border border-[#333] shadow-2xl">
                <div className="relative h-96 bg-gradient-to-br from-[#1f1f1f] to-[#0a0a0a] rounded-xl overflow-hidden border border-[#2a2a2a]">
                  <div className="absolute inset-0 p-8">
                    <div className="flex flex-col h-full">
                      <div className="flex-1 flex items-center justify-center">
                        <div className="grid grid-cols-2 gap-6 w-full max-w-md">
                          <div className="bg-[#2a2a2a] rounded-lg p-4 border border-[#3a3a3a]">
                            <div className="h-32 flex items-end space-x-2">
                              {[60, 80, 40, 47, 90, 50, 80].map((height, i) => (
                                <div
                                  key={i}
                                  className="w-4 bg-[#e87811] rounded-t"
                                  style={{ height: `${height}%` }}
                                ></div>
                              ))}
                            </div>
                          </div>
                          <div className="bg-[#2a2a2a] rounded-lg p-4 border border-[#3a3a3a]">
                            <div className="h-32 flex flex-col items-center justify-center">
                              <svg width="64" height="64" viewBox="0 0 64 64">
                                <circle cx="32" cy="32" r="28" fill="none" stroke="#444" strokeWidth="8" />
                                <path d="M32 32 L32 4 A28 28 0 0 1 60 32 Z" fill="#e87811" />
                                <path d="M32 32 L60 32 A28 28 0 1 1 32 4 Z" fill="#ffb26b" />
                              </svg>
                              <div className="text-xs text-gray-300 mt-2">Data Segments</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-4 right-4">
                    <div className="bg-[#e87811] text-white px-4 py-2 rounded-lg font-bold text-lg shadow-lg">
                      80%
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4 flex items-center space-x-2">
                    <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center shadow-lg">
                      <span className="text-sm">🔍</span>
                    </div>
                    <div className="text-white">
                      <div className="font-bold text-sm">Identification & Analysis</div>
                    </div>
                  </div>
                  <div className="absolute bottom-4 right-4">
                    <div className="bg-[#2a2a2a]/80 backdrop-blur-sm text-white px-3 py-1 rounded-lg border border-[#3a3a3a]">
                      <div className="text-xs opacity-80">1-2 weeks</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={stat.label} className="text-center">
              <p className="text-4xl font-bold text-white mb-2">{stat.value}</p>
              <p className="text-gray-400">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
