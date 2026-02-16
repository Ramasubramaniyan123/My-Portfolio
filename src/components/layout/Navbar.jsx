import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Menu, X, Code } from 'lucide-react';
import { useScrollSpy } from '../../hooks/useScrollSpy';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const sectionIds = ['home', 'about', 'skills', 'leetcode', 'projects', 'experience', 'education', 'contact'];
  const activeSection = useScrollSpy(sectionIds);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'LeetCode', href: '#leetcode' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    { icon: Github, href: 'https://github.com/Ramasubramaniyan123', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/ramasubramaniyan-k-486086255', label: 'LinkedIn' },
    { icon: Code, href: 'https://leetcode.com/u/Ramasubramaniyan123/', label: 'LeetCode' },
    { icon: Mail, href: 'mailto:ramasubramaniyan.k12@gmail.com', label: 'Email' },
  ];

  const handleNavClick = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'nav-blur shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0 transition-transform duration-300 hover:scale-[1.03]">
            <button
              type="button"
              className="text-2xl font-bold text-text-primary cursor-pointer"
              onClick={() => handleNavClick('#home')}
              aria-label="Go to home"
            >
              <span className="font-extrabold tracking-wide">
                R<span className="text-primary">K</span>
              </span>
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-10">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.href)}
                  className={`relative py-2 text-sm font-semibold transition-colors duration-250 ${
                    activeSection === item.href.slice(1)
                      ? 'text-primary'
                      : 'text-text-secondary hover:text-secondary'
                  }`}
                >
                  {item.name}
                  {activeSection === item.href.slice(1) && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary animate-fade-in" />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Right Section */}
          <div className="flex items-center space-x-6">
            {/* Social Links - Desktop */}
            <div className="hidden md:flex items-center space-x-5">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="text-text-secondary hover:text-secondary transition-all duration-250 hover:rotate-[12deg] hover:scale-110"
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-text-secondary hover:text-primary transition-colors"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-border shadow-xl">
          <div className="px-6 py-8 space-y-6">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.href)}
                className={`block w-full text-left text-base font-semibold transition-colors duration-250 ${
                  activeSection === item.href.slice(1)
                    ? 'text-primary'
                    : 'text-text-secondary hover:text-secondary'
                }`}
              >
                {item.name}
              </button>
            ))}
            
            <div className="flex items-center space-x-6 pt-6 border-t border-border">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="text-text-secondary hover:text-secondary transition-all duration-250 hover:rotate-[12deg]"
                >
                  <social.icon size={24} />
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
