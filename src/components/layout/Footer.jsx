import React from 'react';
import { Github, Linkedin, Mail, Phone, MapPin, Code } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: import.meta.env.VITE_GITHUB_URL || 'https://github.com/Ramasubramaniyan123', label: 'GitHub' },
    { icon: Linkedin, href: import.meta.env.VITE_LINKEDIN_URL || 'https://www.linkedin.com/in/ramasubramaniyan-k-486086255', label: 'LinkedIn' },
    { icon: Code, href: `https://leetcode.com/u/${import.meta.env.VITE_LEETCODE_USERNAME || 'Ramasubramaniyan123'}/`, label: 'LeetCode' },
    { icon: Mail, href: `mailto:${import.meta.env.VITE_EMAIL || 'ramasubramaniyan.k12@gmail.com'}`, label: 'Email' },
  ];

  const contactInfo = [
    { icon: Phone, text: '+91 7871560486' },
    { icon: Mail, text: 'ramasubramaniyan.k12@gmail.com' },
    { icon: MapPin, text: 'Chennai, Tamil Nadu, India' },
  ];

  return (
    <footer className="bg-background dark:bg-slate-900 backdrop-blur-sm border-t border-border dark:border-slate-700">
      <div className="max-w-7xl mx-auto container-padding py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="text-xl font-extrabold tracking-wide text-text-primary dark:text-white">
                R<span className="text-primary">K</span>
              </div>
              <div className="text-sm text-text-secondary dark:text-slate-300">
                Ramasubramaniyan K
              </div>
            </div>
            <p className="text-text-secondary dark:text-slate-300 text-sm">
              Final-year Cybersecurity student passionate about Java, DSA, and building efficient backend systems.
            </p>
            <div className="flex items-center space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="text-text-secondary dark:text-slate-300 hover:text-primary transition-all duration-300 hover:rotate-[15deg]"
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-text-primary dark:text-white">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'About', 'Skills', 'LeetCode', 'Projects', 'Experience', 'Education', 'Certifications', 'Contact'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-text-secondary dark:text-slate-300 hover:text-primary transition-colors duration-200 text-sm"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-text-primary dark:text-white">Contact Info</h4>
            <div className="space-y-3">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-center space-x-3 text-text-secondary dark:text-slate-300 text-sm">
                  <info.icon size={16} className="text-primary" />
                  <span>{info.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 pt-8 border-t border-border dark:border-slate-700 text-center">
          <p className="text-text-secondary dark:text-slate-300 text-sm">
            © {currentYear} Ramasubramaniyan K. All rights reserved. Built with React and Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
