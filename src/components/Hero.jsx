import React from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Abstract floating background elements */}
      <motion.div
        animate={{ y: [0, -20, 0], x: [0, 10, 0], rotate: [0, 5, -5, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-600/20 rounded-full blur-[80px]"
      />
      <motion.div
        animate={{ y: [0, 30, 0], x: [0, -20, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-600/10 rounded-full blur-[100px]"
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center gap-12">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex-1 text-center md:text-left"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="inline-block px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 text-sm font-semibold mb-6 tracking-wide"
          >
            Full-Stack Web & Embedded Systems Developer
          </motion.div>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-tight">
            Building <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-purple-400 animate-pulse-glow">
              Without Limits
            </span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto md:mx-0 mb-8 leading-relaxed">
            I'm Linuka Jayasinghe, a Computer Systems Engineering undergraduate at SLIIT. I specialize in designing solutions across the entire engineering spectrum—from enterprise full-stack development to custom PCB layouts and ESP32 control systems. Welcome to my portfolio, where scalable software architecture meets precision hardware integration.
            </p>
          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
            <a href="#projects" className="px-8 py-3 rounded-full bg-white text-dark font-semibold hover:bg-gray-200 transition-colors">
              Explore Projects
            </a>
            <a href="#contact" className="px-8 py-3 rounded-full glass text-white font-semibold hover:bg-white/10 transition-colors">
              Contact Me
            </a>
          </div>
        </motion.div>

        <motion.div
          className="flex-1 max-w-md w-full"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.div
            animate={{ y: [-15, 15] }}
            transition={{ duration: 4, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
            className="relative rounded-3xl overflow-hidden glass border border-white/10 shadow-[0_0_40px_rgba(168,85,247,0.15)] aspect-square"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-900/50 to-pink-900/20 mix-blend-overlay z-10 pointer-events-none"></div>
            <img src="/me.jpg" alt="Linuka Jayasinghe" className="w-full h-full object-cover" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
