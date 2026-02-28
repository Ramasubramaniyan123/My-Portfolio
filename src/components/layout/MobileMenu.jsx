import React, { useEffect, useRef } from 'react';
import { Github, Linkedin, Mail, X } from 'lucide-react';

const MobileMenu = ({ isOpen, onClose, navItems, activeSection, socialLinks }) => {
  const menuRef = useRef(null);
  const firstFocusableRef = useRef(null);
  const lastFocusableRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      // Focus the first focusable element when menu opens
      if (firstFocusableRef.current) {
        firstFocusableRef.current.focus();
      }

      // Prevent body scroll when menu is open
      document.body.style.overflow = 'hidden';

      const handleKeyDown = (e) => {
        if (e.key === 'Escape') {
          onClose();
        }

        // Focus trapping
        if (e.key === 'Tab') {
          if (e.shiftKey) {
            if (document.activeElement === firstFocusableRef.current) {
              e.preventDefault();
              lastFocusableRef.current?.focus();
            }
          } else {
            if (document.activeElement === lastFocusableRef.current) {
              e.preventDefault();
              firstFocusableRef.current?.focus();
            }
          }
        }
      };

      document.addEventListener('keydown', handleKeyDown);
      return () => {
        document.removeEventListener('keydown', handleKeyDown);
        document.body.style.overflow = 'unset';
      };
    }
  }, [isOpen, onClose]);

  const handleNavClick = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    onClose();
  };

  return (
    <>
      {isOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
            onClick={onClose}
          />

          <div className="fixed top-0 right-0 bottom-0 w-64 bg-primary border-l border-border z-50 md:hidden">
            <div className="flex flex-col h-full">
              <div className="flex items-center justify-between p-4 border-b border-border">
                <span className="text-lg font-semibold text-text-primary">Menu</span>
                <button
                  ref={firstFocusableRef}
                  onClick={onClose}
                  className="text-text-secondary hover:text-text-primary transition-colors"
                  aria-label="Close menu"
                >
                  <X size={24} />
                </button>
              </div>

              <nav className="flex-1 p-4">
                <ul className="space-y-2">
                  {navItems.map((item) => (
                    <li key={item.name}>
                      <button
                        onClick={() => handleNavClick(item.href)}
                        className={`block w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-colors duration-200 ${
                          activeSection === item.href.slice(1)
                            ? 'bg-accent-primary/10 text-accent-primary border-l-2 border-accent-primary'
                            : 'text-text-secondary hover:bg-secondary hover:text-text-primary'
                        }`}
                      >
                        {item.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </nav>

              <div className="p-4 border-t border-border">
                <div className="flex items-center justify-center space-x-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="text-text-secondary hover:text-text-primary transition-all duration-300 hover:rotate-[15deg]"
                      ref={social === socialLinks[socialLinks.length - 1] ? lastFocusableRef : null}
                    >
                      <social.icon size={20} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default MobileMenu;
