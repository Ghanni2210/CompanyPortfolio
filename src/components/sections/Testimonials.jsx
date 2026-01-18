import React from 'react';

const Testimonials = () => {
  const featured = {
    name: 'Zidane Muharto',
    role: 'Chief Technology Officer',
    quote: "Automatix's Fusion Of AI And Innovation Set Our Project Apart. Their Solutions Are Second To None.",
    stats: [
      { value: '73%', label: 'Sales increase in first month' },
      { value: '5X', label: 'Faster customer resolutions' },
    ],
  };

  const testimonials = [
    {
      name: 'Arjun Patel',
      role: 'CTO at TechVenture India',
      quote: "Exceptional AI solutions! Our productivity increased by 65% within the first month. The automation workflows are incredibly intuitive.",
      avatar: 'https://ui-avatars.com/api/?name=Rajesh+Kumar&size=96&background=random&color=fff',
    },
    {
      name: 'Priya Sharma',
      role: 'Product Manager at InnovateLabs Mumbai',
      quote: "Game-changing technology! The AI agents seamlessly integrated with our existing systems. Our team efficiency has never been better.",
      avatar: 'https://ui-avatars.com/api/?name=Priya+Sharma&size=96&background=random&color=fff',
    },
    {
      name: 'Vikash Kumar',
      role: 'Operations Director at StartupHub Delhi',
      quote: "Outstanding results! The AI automation reduced our manual work by 80%. Quick implementation and excellent support throughout.",
      avatar: 'https://ui-avatars.com/api/?name=Amit+Patel&size=96&background=random&color=fff',
    },
    {
      name: 'James Anderson',
      role: 'CEO at TechFlow Solutions, USA',
      quote: "Remarkable AI platform! Our customer response time improved by 70%. The intelligent automation is exactly what we needed.",
      avatar: 'https://ui-avatars.com/api/?name=John+Smith&size=96&background=random&color=fff',
    },
    {
      name: 'Elena Rodriguez',
      role: 'Marketing Director at DigitalCorp Spain',
      quote: "Incredible efficiency boost! The AI agents handle complex tasks flawlessly. Our marketing campaigns are now 3x more effective.",
      avatar: 'https://ui-avatars.com/api/?name=Sarah+Johnson&size=96&background=random&color=fff',
    },
    {
      name: 'David Chen',
      role: 'Tech Lead at FutureSoft Singapore',
      quote: "Brilliant AI solutions! The implementation was smooth and the results immediate. Our development workflow is now completely optimized.",
      avatar: 'https://ui-avatars.com/api/?name=Michael+Brown&size=96&background=random&color=fff',
    },
  ];

  return (
    <section className="py-20 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="mb-5">
            <span className="text-[14px] text-[#858585] font-manrope font-normal leading-none tracking-normal text-left rounded-full border border-[#252525] bg-[#050505] px-4 py-1 inline-block">
              TESTIMONIALS
            </span>
          </div>
          <h2 className="text-[38px] font-medium tracking-[-0.025em] leading-[1.25em] text-center capitalize text-white mx-auto w-full max-w-[568px] mb-6">
            Trusted by Teams Worldwide
          </h2>
          <p className="text-base font-normal text-[#aaaaaa] leading-[1.6] text-center max-w-[600px] mx-auto">
            See how businesses like yours are transforming their operations with our AI automation solutions
          </p>
        </div>

        {/* Featured Testimonial */}
        <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-2xl p-8 mb-12 text-center border border-purple-500/20">
          <blockquote className="text-2xl font-medium mb-6">
            "{featured.quote}"
          </blockquote>
          <div className="flex items-center justify-center space-x-4 mb-6">
            <img
              alt={featured.name}
              loading="lazy"
              width="60"
              height="60"
              className="rounded-full object-cover w-[60px] h-[60px] flex-shrink-0"
              src="https://ui-avatars.com/api/?name=User&size=128&background=random&color=fff"
            />
            <div className="text-left">
              <div className="font-semibold">{featured.name}</div>
              <div className="text-sm text-gray-400">{featured.role}</div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 max-w-md mx-auto">
            {featured.stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-bold text-purple-400">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Grid of Testimonials */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <div key={testimonial.name} className="bg-white/5 rounded-xl p-6 border border-white/10">
              <div className="flex items-center space-x-4 mb-4">
                <img
                  alt={testimonial.name}
                  loading="lazy"
                  width="48"
                  height="48"
                  className="rounded-full object-cover w-[48px] h-[48px] flex-shrink-0"
                  src={testimonial.avatar}
                />
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-sm text-gray-400">{testimonial.role}</div>
                </div>
              </div>
              <p className="text-gray-300 italic">"{testimonial.quote}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
