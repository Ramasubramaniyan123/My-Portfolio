import React from 'react';
import { Github, Linkedin, Mail, ExternalLink, Code } from 'lucide-react';
import Button from '../components/ui/Button';
import TypingEffect from '../components/TypingEffect';

const Hero = () => {
  const socialLinks = [
    { icon: Github, href: 'https://github.com/Ramasubramaniyan123', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/ramasubramaniyan-k-486086255', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:ramasubramaniyan.k12@gmail.com', label: 'Email' },
    { icon: Code, href: 'https://leetcode.com/u/Ramasubramaniyan123/', label: 'LeetCode' },
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-primary">
      {/* Subtle Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-secondary/10" />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, rgba(122, 162, 247, 0.10) 0%, transparent 55%),
                             radial-gradient(circle at 80% 80%, rgba(94, 200, 216, 0.06) 0%, transparent 55%)`
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto container-padding relative z-10">
        <div className="text-center">
          {/* Greeting */}
          <div className="mb-4">
            <span className="text-accent-secondary font-medium text-lg">Hello, I'm</span>
          </div>

          {/* Name */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="gradient-text">Ramasubramaniyan K</span>
          </h1>

          {/* Typing Animation */}
          <div className="mb-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-text-secondary">
              I am <TypingEffect />
            </h2>
          </div>

          {/* Description */}
          <p className="text-lg text-text-secondary mb-12 max-w-2xl mx-auto leading-relaxed">
            Final-year Cybersecurity student passionate about building efficient, secure, and maintainable software systems using Java and modern backend technologies.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              href="#projects"
              className="group"
            >
              View Projects
              <ExternalLink size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="secondary"
              href="#contact"
            >
              Contact Me
              <Mail size={18} className="ml-2" />
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center space-x-6">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="text-text-muted hover:text-accent transition-all duration-300 hover:scale-110 hover:rotate-[15deg]"
              >
                <social.icon size={24} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
