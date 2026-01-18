import React from 'react';
import Button from '../common/Button';
import siteConfig from '../../config/siteConfig';

const Hero = () => {
  const socialLinks = [
    {
      href: siteConfig.social.linkedin,
      icon: (
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      ),
      label: 'LinkedIn',
    },
    {
      href: siteConfig.social.twitter,
      icon: (
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      ),
      label: 'X (Twitter)',
    },
    {
      href: siteConfig.social.instagram,
      icon: (
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      ),
      label: 'Instagram',
    },
    {
      href: `mailto:${siteConfig.contact.email}`,
      icon: (
        <>
          <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
          <rect x="2" y="4" width="20" height="16" rx="2"></rect>
        </>
      ),
      label: 'Email',
      isStroke: true,
    },
  ];

  return (
    <section className="lg:min-h-screen min-h-[calc(50vh)] bg-[#050505] text-white relative overflow-hidden">
      {/* Social Links - Desktop */}
      <div className="fixed left-6 top-1/2 -translate-y-1/2 z-30 hidden lg:flex flex-col gap-4">
        {socialLinks.map((link) => (
          <a
            key={link.label}
            target="_blank"
            rel="noopener noreferrer"
            className="group w-10 h-10 bg-[#1a1a1a] border border-[#585858]/20 rounded-full flex items-center justify-center hover:bg-[#2a2a2a] hover:border-[#e87811] transition-all duration-300"
            href={link.href}
            aria-label={link.label}
          >
            <svg
              className="w-4 h-4 text-gray-400 group-hover:text-[#e87811] transition-colors duration-300"
              fill={link.isStroke ? 'none' : 'currentColor'}
              stroke={link.isStroke ? 'currentColor' : 'none'}
              strokeWidth={link.isStroke ? '2' : '0'}
              strokeLinecap={link.isStroke ? 'round' : undefined}
              strokeLinejoin={link.isStroke ? 'round' : undefined}
              viewBox="0 0 24 24"
            >
              {link.icon}
            </svg>
          </a>
        ))}
      </div>

      <div className="relative min-h-[calc(100vh-300px)] flex items-center justify-center pt-32 pb-8 lg:pb-16">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-40 [background-image:radial-gradient(circle,rgba(255,255,255,0.25)_1.5px,transparent_1.5px)] [background-size:25px_25px]"></div>

        <div className="relative w-full max-w-7xl mb-12 mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-transparent border border-[#585858]/20 text-sm font-medium mb-8 animate-fade-in-up font-manrope">
            <div className="w-2 h-2 bg-emerald-400 rounded-full mr-2 animate-pulse"></div>
            <p className="text-[14px] font-light leading-none text-[#afafaf]">
              {siteConfig.hero.badge}
            </p>
          </div>

          {/* Main Heading */}
          <div className="animate-fade-in-up-delayed">
            <h1 className="font-satoshi font-medium text-[40px] lg:text-[80px] text-[#e87811] mb-8 leading-tight">
              <div className="block mb-2">{siteConfig.hero.title.line1}</div>
              <div className="text-white mb-2 flex flex-wrap items-center justify-center gap-3 lg:gap-6">
                <span>{siteConfig.hero.title.line2}</span>
              </div>
              <div className="block">{siteConfig.hero.title.line3}</div>
            </h1>
          </div>

          {/* Subtitle */}
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
            {siteConfig.hero.subtitle}
          </p>

          {/* CTA Button */}
          <div className="relative mx-auto flex justify-center items-center w-auto h-auto flex-none mt-6">
            <Button ariaLabel={siteConfig.hero.ctaText}>{siteConfig.hero.ctaText}</Button>
          </div>

          {/* Social Media Links (Mobile) */}
          <div className="flex lg:hidden justify-center gap-4 mt-8">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                target="_blank"
                rel="noopener noreferrer"
                className="group w-10 h-10 bg-[#1a1a1a] border border-[#585858]/20 rounded-full flex items-center justify-center hover:bg-[#2a2a2a] hover:border-[#e87811] transition-all duration-300"
                href={link.href}
                aria-label={link.label}
              >
                <svg
                  className="w-4 h-4 text-gray-400 group-hover:text-[#e87811] transition-colors duration-300"
                  fill={link.isStroke ? 'none' : 'currentColor'}
                  stroke={link.isStroke ? 'currentColor' : 'none'}
                  strokeWidth={link.isStroke ? '2' : '0'}
                  strokeLinecap={link.isStroke ? 'round' : undefined}
                  strokeLinejoin={link.isStroke ? 'round' : undefined}
                  viewBox="0 0 24 24"
                >
                  {link.icon}
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
