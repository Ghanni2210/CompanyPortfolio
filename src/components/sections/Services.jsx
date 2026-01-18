import React from 'react';

const Services = () => {
  const services = [
    {
      title: 'Automate repetitive tasks',
      description: 'We help you streamline internal operations by automating manual workflows.',
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      ),
    },
    {
      title: 'Extract insights from your data',
      description: 'Transform raw data into actionable insights that drive business growth and decision-making.',
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      ),
    },
    {
      title: 'Scale your operations with AI',
      description: 'Leverage AI-powered solutions to scale your business operations efficiently and effectively.',
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
      ),
    },
    {
      title: 'Reduce operational costs',
      description: 'Cut down on manual labor costs and increase efficiency through intelligent automation.',
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
      ),
    },
    {
      title: 'Enhance customer experience',
      description: 'Improve customer satisfaction through personalized AI-driven interactions and support.',
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      ),
    },
    {
      title: 'Gain competitive advantage',
      description: 'Stay ahead of the competition with cutting-edge AI solutions tailored to your industry.',
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
      ),
    },
  ];

  return (
    <section id="services" className="py-24 bg-[#050505] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="mb-5">
            <p className="text-[14px] text-[#858585] font-manrope font-normal leading-none tracking-normal text-center rounded-full border border-[#252525] bg-[#050505] px-4 py-1 inline-block">
              SERVICES
            </p>
          </div>
          <p className="text-[38px] font-medium tracking-[-0.025em] leading-relaxed text-center capitalize text-white mx-auto w-full max-w-[568px] mb-6 hyphens-auto text-balance">
            Transform your business with AI
          </p>
          <p className="text-base font-normal text-[#aaaaaa] leading-[1.6] text-center max-w-[600px] mx-auto">
            From automation to insights, we help you leverage AI to drive growth and efficiency
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group p-8 rounded-2xl bg-gradient-to-br from-[#2a2a2a] to-[#0a0a0a] border border-[#2a2a2a] hover:border-[#e87811]/50 transition-all duration-300 hover:shadow-lg hover:shadow-[#e87811]/10"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-[#e87811] to-orange-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {service.icon}
                </svg>
              </div>
              <p className="text-xl font-semibold mb-4 text-white group-hover:text-[#e87811] transition-colors">
                {service.title}
              </p>
              <p className="text-gray-400 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
