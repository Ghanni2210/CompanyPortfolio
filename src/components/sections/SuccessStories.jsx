import React from 'react';

const SuccessStories = () => {
  const stories = [
    {
      name: 'Edlern',
      category: 'EdTech platform',
      description: "Edlern is a new EdTech platform that uses AI to automate grading, onboarding, and student support. Teachers spend less time on admin tasks, and students receive instant feedback and personalized learning paths every day.",
      stats: [
        { value: '80%', label: 'Grading Time Saved' },
        { value: '75%', label: 'productivity boost' },
      ],
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      ),
    },
    {
      name: 'Cerope',
      category: 'E-commerce',
      description: "Cerope's AI stylist assistant gives shoppers instant style advice, virtual fit checks, a smart wardrobe organizer, and personalized weekly outfit plans. Shoppers now buy with more confidence, return fewer items, and discover new ways to wear what they own.",
      stats: [
        { value: '76%', label: 'Increase in Customers engaging' },
        { value: '18%', label: 'Higher Average Order Value' },
      ],
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l-1.5 7.5H6.5L5 9z" />
      ),
    },
    {
      name: 'NovaHealth',
      category: 'Healthcare',
      description: "NovaHealth revolutionized patient care by integrating AI-powered scheduling and diagnostics. Their clinics now deliver faster appointments, more accurate diagnoses, and a seamless experience for both staff and patients.",
      stats: [
        { value: '60%', label: 'reduction in wait times' },
        { value: '45%', label: 'increase in diagnostic accuracy' },
      ],
      icon: (
        <>
          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h8M12 8v8" />
        </>
      ),
    },
  ];

  return (
    <section id="success-stories" className="py-24 bg-[#050505] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="mb-5">
            <span className="text-[14px] text-[#858585] font-manrope font-normal leading-none tracking-normal text-left rounded-full border border-[#252525] bg-[#050505] px-4 py-1 inline-block">
              OUR CLIENTS
            </span>
          </div>
          <h2 className="text-[38px] font-medium tracking-[-0.025em] leading-[1.25em] text-center capitalize text-white mx-auto w-full max-w-[568px] mb-6">
            Success Stories to Inspire
          </h2>
          <p className="text-base font-normal text-[#aaaaaa] leading-[1.6] text-center max-w-[600px] mx-auto">
            Discover how businesses and creators achieve results
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {stories.map((story, index) => (
            <div
              key={story.name}
              className="group p-8 rounded-2xl bg-gradient-to-br from-[#2a2a2a] to-[#0a0a0a] border border-[#2a2a2a] hover:border-[#e87811]/50 transition-all duration-300 hover:shadow-lg hover:shadow-[#e87811]/10"
            >
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-medium text-[#e87811] bg-[#e87811]/10 px-3 py-1 rounded-full uppercase tracking-wider">
                  {story.category}
                </span>
                <div className="w-12 h-12 bg-gradient-to-br from-[#e87811] to-orange-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    {story.icon}
                  </svg>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#e87811] transition-colors">
                {story.name}
              </h3>

              <p className="text-gray-400 leading-relaxed mb-8">
                {story.description}
              </p>

              <div className="grid grid-cols-2 gap-4">
                {story.stats.map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className="text-3xl font-bold text-[#e87811] mb-1">{stat.value}</div>
                    <div className="text-xs text-gray-400 uppercase tracking-wide">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
