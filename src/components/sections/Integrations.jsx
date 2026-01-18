import React from 'react';
import Button from '../common/Button';

const Integrations = () => {
  const integrations = {
    row1: [
      { name: 'Slack', icon: 'https://img.icons8.com/color/48/slack-new.png' },
      { name: 'Google Drive', icon: 'https://img.icons8.com/color/48/google-drive--v1.png' },
      { name: 'Notion', icon: 'https://img.icons8.com/color/48/notion--v1.png' },
      { name: 'Zapier', icon: 'https://img.icons8.com/color/48/zapier--v1.png' },
      { name: 'Microsoft Teams', icon: 'https://img.icons8.com/color/48/microsoft-teams.png' },
      { name: 'Salesforce', icon: 'https://img.icons8.com/color/48/salesforce.png' },
    ],
    row2: [
      { name: 'Discord', icon: 'https://img.icons8.com/color/48/discord-logo.png' },
      { name: 'Trello', icon: 'https://img.icons8.com/color/48/trello.png' },
      { name: 'Asana', icon: 'https://img.icons8.com/color/48/project-management.png' },
      { name: 'GitHub', icon: 'https://img.icons8.com/fluency/48/github.png' },
      { name: 'Jira', icon: 'https://img.icons8.com/color/48/jira.png' },
      { name: 'Airtable', icon: 'https://img.icons8.com/color/48/database.png' },
    ],
  };

  const LogoItem = ({ name, icon }) => (
    <div className="flex items-center space-x-4 text-gray-400 hover:text-white transition-all duration-300 whitespace-nowrap w-fit px-4 flex-shrink-0">
      <div className="w-12 h-12 bg-transparent flex items-center justify-center flex-shrink-0 relative">
        <img
          alt={`${name} logo`}
          loading="lazy"
          width="48"
          height="48"
          className="object-contain"
          src={icon}
        />
      </div>
      <span className="font-medium text-xl lg:text-2xl leading-none truncate flex-1">{name}</span>
    </div>
  );

  return (
    <section id="integrations" className="py-24 bg-[#050505] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="mb-5">
            <span className="text-[14px] text-[#858585] font-manrope font-normal leading-none tracking-normal text-left rounded-full border border-[#252525] bg-[#050505] px-4 py-1 inline-block">
              INTEGRATIONS
            </span>
          </div>
          <h2 className="text-[38px] font-medium tracking-[-0.025em] leading-[1.25em] text-center capitalize text-white mx-auto w-full max-w-[568px] mb-6">
            Seamless Integrations
          </h2>
          <p className="text-base font-normal text-[#aaaaaa] leading-[1.6] text-center max-w-[600px] mx-auto">
            Interact with all your favorite software without unnecessary fuss
          </p>
        </div>
      </div>

      <div className="relative bg-[#050505] pb-24">
        {/* First Row - Scrolling Left to Right */}
        <div className="relative overflow-hidden mb-16">
          <div className="flex animate-scroll-logos">
            {/* Triple the logos for seamless loop */}
            {[...Array(3)].map((_, idx) => (
              <div key={idx} className="flex items-center gap-8 shrink-0 px-12">
                {integrations.row1.map((item) => (
                  <LogoItem key={`${item.name}-${idx}`} {...item} />
                ))}
              </div>
            ))}
          </div>
          <div className="absolute left-0 top-0 bottom-0 w-48 bg-gradient-to-r from-[#050505] to-transparent pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-48 bg-gradient-to-l from-[#050505] to-transparent pointer-events-none"></div>
        </div>

        {/* Second Row - Scrolling Right to Left */}
        <div className="relative overflow-hidden">
          <div className="flex animate-scroll-logos-reverse">
            {[...Array(3)].map((_, idx) => (
              <div key={idx} className="flex items-center gap-8 shrink-0 px-12">
                {integrations.row2.map((item) => (
                  <LogoItem key={`${item.name}-${idx}`} {...item} />
                ))}
              </div>
            ))}
          </div>
          <div className="absolute left-0 top-0 bottom-0 w-48 bg-gradient-to-r from-[#050505] to-transparent pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-48 bg-gradient-to-l from-[#050505] to-transparent pointer-events-none"></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="text-center">
          <div className="max-w-4xl mx-auto">
            <blockquote className="text-2xl md:text-3xl font-medium text-white mb-8 leading-tight">
              "We are <span className="text-[#e87811]">TheQuickAI</span>, we help founders like you to{' '}
              <span className="text-[#e87811]">automate their day to day business</span> operations with the help of AI"
            </blockquote>
            <p className="text-gray-400 text-sm">We don't sell AI. We sell Results.</p>
          </div>
          <div className="mt-8">
            <Button ariaLabel="Book a free call">Book a free call</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Integrations;
