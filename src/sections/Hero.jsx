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
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-background">
      {/* Subtle Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-white" />
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, rgba(34, 197, 94, 0.08) 0%, transparent 55%),
                             radial-gradient(circle at 80% 80%, rgba(249, 115, 22, 0.05) 0%, transparent 55%)`
          }}
        />
      </div>

      <div className="max-w-[1400px] mx-auto container-padding relative z-10">
        <div className="text-center">
          {/* Greeting */}
          <div className="mb-4">
            <span className="text-secondary font-semibold text-lg uppercase tracking-wider">Hello, I'm</span>
          </div>

          {/* Name */}
          <h1 className="font-bold mb-6 text-text-primary" style={{ fontSize: 'clamp(2rem, 5vw, 4rem)' }}>
            Ramasubramaniyan K
          </h1>

          {/* Typing Animation */}
          <div className="mb-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-text-secondary">
              I am <TypingEffect />
            </h2>
          </div>

          {/* Description */}
          <p className="text-lg md:text-xl text-text-secondary mb-12 max-w-3xl mx-auto leading-relaxed">
            Final-year Cybersecurity student passionate about building efficient, secure, and maintainable software systems using <span className="text-primary font-medium">Java</span> and modern <span className="text-primary font-medium">backend technologies</span>.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
          
            <Button 
              variant="secondary"
              href="#contact"
              className="btn-secondary text-black"
            >
              Contact Me
              <Mail size={20} className="ml-2" />
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center space-x-8">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="text-text-secondary hover:text-primary transition-all duration-250 hover:scale-110 hover:rotate-[12deg]"
              >
                <social.icon size={28} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
