import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Menu } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 glass border-b border-white/5 py-4 px-6 md:px-12">
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
          <a href="#projects" className="hover:text-white transition-colors">Projects</a>
          <a href="#skills" className="hover:text-white transition-colors">Skills</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
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
          <button className="text-gray-300 hover:text-white"><Menu size={24} /></button>
        </div>
      </div>
    </nav>
  );
}
