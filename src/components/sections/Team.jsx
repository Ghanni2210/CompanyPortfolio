import React from 'react';
import siteConfig from '../../config/siteConfig';

const Team = () => {
  const teamMembers = siteConfig.team.members;

  return (
    <section id="team" className="py-24 bg-[#050505] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="mb-5">
            <span className="text-[14px] text-[#858585] font-manrope font-normal leading-none tracking-normal text-left rounded-full border border-[#252525] bg-[#050505] px-4 py-1 inline-block">
              {siteConfig.team.sectionBadge}
            </span>
          </div>
          <h2 className="text-[38px] font-medium tracking-[-0.025em] leading-[1.25em] text-center capitalize text-white mx-auto w-full max-w-[568px] mb-6">
            {siteConfig.team.sectionTitle}
          </h2>
          <p className="text-base font-normal text-[#aaaaaa] leading-[1.6] text-center max-w-[600px] mx-auto">
            {siteConfig.team.sectionDescription}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {teamMembers.slice(0, 3).map((member, index) => (
            <div
              key={member.name}
              className="bg-white/5 rounded-2xl border border-white/10 overflow-hidden hover:border-[#e87811]/50 transition-all duration-300 hover:scale-105"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="aspect-square overflow-hidden bg-gradient-to-br from-[#e87811]/20 to-[#ff9500]/10">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">{member.name}</h3>
                <p className="text-[#e87811] font-medium mb-3">{member.role}</p>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">{member.bio}</p>
                <div className="flex space-x-3">
                  <a
                    href={member.linkedin}
                    className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#e87811]/20 hover:border-[#e87811] transition-all duration-200"
                    aria-label={`${member.name}'s LinkedIn`}
                  >
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                  <a
                    href={member.twitter}
                    className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#e87811]/20 hover:border-[#e87811] transition-all duration-200"
                    aria-label={`${member.name}'s Twitter`}
                  >
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {teamMembers.slice(3).map((member, index) => (
            <div
              key={member.name}
              className="bg-white/5 rounded-2xl border border-white/10 overflow-hidden hover:border-[#e87811]/50 transition-all duration-300 hover:scale-105"
              style={{ transitionDelay: `${(index + 3) * 100}ms` }}
            >
              <div className="aspect-square overflow-hidden bg-gradient-to-br from-[#e87811]/20 to-[#ff9500]/10">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">{member.name}</h3>
                <p className="text-[#e87811] font-medium mb-3">{member.role}</p>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">{member.bio}</p>
                <div className="flex space-x-3">
                  <a
                    href={member.linkedin}
                    className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#e87811]/20 hover:border-[#e87811] transition-all duration-200"
                    aria-label={`${member.name}'s LinkedIn`}
                  >
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                  <a
                    href={member.twitter}
                    className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#e87811]/20 hover:border-[#e87811] transition-all duration-200"
                    aria-label={`${member.name}'s Twitter`}
                  >
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-400 mb-6">
            {siteConfig.team.hiringText}
          </p>
          <a href="#contact" className="framer-button inline-flex items-center">
            <span className="button-text">{siteConfig.team.hiringButtonText}</span>
            <span className="icon-wrapper">
              <svg
                className="arrow arrow-in"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="rgb(222,222,222)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="7" y1="7" x2="17" y2="17"></line>
                <polyline points="17 7 17 17 7 17"></polyline>
              </svg>
              <svg
                className="arrow arrow-out"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="rgb(222,222,222)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="7" y1="7" x2="17" y2="17"></line>
                <polyline points="17 7 17 17 7 17"></polyline>
              </svg>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Team;
