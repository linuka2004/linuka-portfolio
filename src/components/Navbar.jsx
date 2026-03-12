import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Menu, X } from 'lucide-react';

const navLinks = [
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' }
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full z-50 glass border-b border-white/5 py-4 px-6 md:px-12 backdrop-blur">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <motion.a
          href="#hero"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500 tracking-wider block"
        >
          LINUKA JAYASINGHE
        </motion.a>

        <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-gray-300">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <a href="https://github.com/linuka2004" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors">
            <Github size={20} />
          </a>
          <a href="https://www.linkedin.com/in/linuka-jayasinghe-45688a2b8" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors">
            <Linkedin size={20} />
          </a>
        </div>

        <div className="md:hidden">
          <button
            type="button"
            className="text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-purple-500 rounded-md"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden border-t border-white/10 mt-3 pt-3 px-1">
          <div className="flex flex-col space-y-3 text-sm font-medium text-gray-300">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-white transition-colors"
                onClick={handleNavClick}
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="flex items-center space-x-4 mt-4">
            <a href="https://github.com/linuka2004" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/linuka-jayasinghe-45688a2b8" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
