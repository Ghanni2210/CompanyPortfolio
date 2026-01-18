import React from 'react';

const Features = () => {
  const features = [
    {
      title: 'Workflow Automation',
      description: 'Automate complex business processes to boost speed, clarity, and efficiency.',
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
      ),
    },
    {
      title: 'Custom AI Solutions',
      description: 'Build tailored AI systems that align with your business goals and challenges.',
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      ),
    },
    {
      title: 'AI Assistant',
      description: 'Deploy intelligent virtual agents to streamline tasks.',
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      ),
    },
    {
      title: 'Sales & Marketing',
      description: 'Leverage AI to optimize campaigns, track leads, and personalize outreach.',
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      ),
    },
    {
      title: 'Performance Tracking',
      description: 'Track automation results in real time to improve and scale your workflows.',
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      ),
    },
    {
      title: 'Seamless Integrations',
      description: 'Connect your tools and apps for smooth, unified AI-powered workflows.',
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      ),
    },
  ];

  return (
    <section id="features" className="py-24 bg-[#050505] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="mb-5">
            <p className="text-[14px] text-[#858585] font-manrope font-normal leading-none tracking-normal text-center rounded-full border border-[#252525] bg-[#050505] px-4 py-1 inline-block">
              FEATURES
            </p>
          </div>
          <p className="text-[38px] font-medium tracking-[-0.025em] leading-relaxed text-center capitalize text-white mx-auto w-full max-w-[568px] mb-6 hyphens-auto text-balance">
            All features in one place
          </p>
          <p className="text-base font-normal text-[#aaaaaa] leading-[1.6] text-center max-w-[600px] mx-auto">
            Everything you need to automate operations, boost productivity
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="ease-out opacity-100 translate-y-0 group p-8 rounded-2xl bg-gradient-to-br from-[#2a2a2a] to-[#0a0a0a] border border-[#2a2a2a] hover:border-[#e87811]/50 transition-all duration-300 hover:shadow-lg hover:shadow-[#e87811]/10"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex flex-col items-start">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#e87811] to-orange-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    {feature.icon}
                  </svg>
                </div>
                <p className="text-xl font-bold text-white mb-3 group-hover:text-[#e87811] transition-colors duration-300">
                  {feature.title}
                </p>
                <p className="text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
