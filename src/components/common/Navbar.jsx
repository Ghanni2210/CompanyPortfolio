import React, { useState, useEffect } from 'react';
import Button from './Button';
import siteConfig from '../../config/siteConfig';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = siteConfig.navigation;

  const scrollToSection = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <nav
        className={`fixed max-w-6xl mx-auto w-full px-4 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300 top-4`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div
          className={`border border-white/10 rounded-full px-6 py-3 backdrop-blur-sm transition-all duration-300 bg-black/90 shadow-xl ${
            isScrolled ? 'backdrop-blur-md' : ''
          }`}
        >
          <div className="flex justify-between items-center">
            <a
              className="flex items-center space-x-2 focus:outline-none rounded-md"
              aria-label={`${siteConfig.brand.name} Home`}
              href="/"
            >
              <span className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#e87811] to-[#ff9500]">
                {siteConfig.brand.name}
              </span>
            </a>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-2" role="menubar">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  className="text-gray-400 hover:text-[#e87811] px-3 py-2 font-medium transition-colors text-sm font-manrope focus:outline-none rounded-md"
                  aria-label={`Navigate to ${link.label}`}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* CTA Button - Desktop */}
            <div className="hidden md:block">
              <Button size="compact" ariaLabel={siteConfig.cta.primary.text}>
                {siteConfig.cta.primary.text}
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <button
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all size-9 text-gray-400 hover:text-[#e87811] focus:outline-none"
                aria-expanded={isMobileMenuOpen}
                aria-controls="mobile-menu"
                aria-label="Open menu"
                onClick={() => setIsMobileMenuOpen(true)}
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className={`mobile-menu lg:hidden ${isMobileMenuOpen ? 'active' : ''}`}
      >
        <div className="flex flex-col h-full">
          <div className="flex justify-between items-center p-6 border-b border-white/10">
            <span className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#e87811] to-[#ff9500]">
              {siteConfig.brand.name}
            </span>
            <button
              className="text-gray-400 hover:text-[#e87811] focus:outline-none"
              aria-label="Close menu"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="flex flex-col space-y-6 p-8 pt-12 flex-1">
            {navLinks.map((link, index) => (
              <a
                key={link.href}
                href={link.href}
                className="text-white hover:text-[#e87811] text-xl font-medium transition-colors border-b border-white/10 pb-4"
                onClick={(e) => scrollToSection(e, link.href)}
                style={{ transitionDelay: `${0.1 + index * 0.05}s` }}
              >
                {link.label}
              </a>
            ))}
            <Button ariaLabel={siteConfig.cta.primary.text} className="mt-6 w-full">
              {siteConfig.cta.primary.text}
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
