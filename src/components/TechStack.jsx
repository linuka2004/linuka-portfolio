import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  // Software & Web
  "React.js", "Node.js", "Express", "MongoDB", "MySQL", "Java", "Spring Boot", 
  "Tailwind CSS", "Framer Motion", "C++", "Python", 
  
  // Tools & Version Control
  "Git", "GitHub", "VS Code", "Postman", "Figma",
  
  // Data & UI Libraries
  "NumPy", "Matplotlib", "Tkinter", 
  
  // Hardware, Electronics & Systems (Updated)
  "Arduino IoT", "ESP32", "Analog Electronics", "Proteus", "KiCad", "EasyEDA", 
  "PCB Design", "SMD Assembly", "BJT Amplifiers", "PID Control", "Hardware Prototyping", 
  "Oscilloscopes", "TCP/IP Sockets"
];

export default function TechStack() {
  return (
    <section id="skills" className="py-24 relative z-10 max-w-7xl mx-auto px-6 border-b border-white/10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-white">
          <span className="text-pink-400">Tech</span> Stack
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto rounded-full"></div>
      </motion.div>

      <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
            whileHover={{ scale: 1.1, y: -5 }}
            className="px-6 py-3 rounded-2xl glass font-medium text-gray-200 cursor-default border border-white/5 hover:border-pink-500/50 hover:text-white transition-all shadow-lg hover:shadow-pink-500/20"
          >
            {skill}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
