import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
        title: "Company Portfolio Website",
description: "A real client portfolio website built for a company.",
    tech: ["MongoDB", "Express", "React", "Node.js", "Tailwind CSS"],
    github: "https://pjplastic-pvt-ltd.vercel.app/",
    live: "https://pjplastic-pvt-ltd.vercel.app/"
  },
  {
    title: "Full Stack E-Commerce Platform",
    description: "A Complete E-Commerce Platform built using MERN Stack.",
    tech: ["MongoDB", "Express", "React", "Node.js", "Tailwind CSS"],
    github: "https://github.com/linuka2004/i-computers-frontend.git",
    live: "#"
  },
  {
    title: "Safeguard X",
    description: "A vehicle parts anti-theft system developed for my 1st-year Computational Thinking module.",
    tech: ["Arduino IDE", "C++", "Hardware Sensors"],
    github: "https://www.linkedin.com/in/linuka-jayasinghe-45688a2b8",
    live: "#"
  },
  {
    title: "Full-Stack E-Commerce Platform",
    description: "A scalable e-commerce application developed for my Object-Oriented Analysis and Design module.",
    tech: ["React", "Java Spring Boot"],
    github: "https://github.com/linuka2004/pj-plastic-website.git",
    live: "#"
  },
  {
    title: "HR Payroll System",
    description: "A specialized portal for HR professionals for payroll management.",
    tech: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS", "MySQL"],
    github: "https://github.com/linuka2004/HR-Payroll-Frontend.git",
    live: "#"
  },
  {
    title: "Yahtzee Game",
    description: "A console-based Yahtzee game built using C, featuring dice rolling, score calculation, and category-based gameplay.",
    tech: ["C"],
    github: "https://github.com/linuka2004/Yahtzee--C.git",
    live: "#"
  },
  {
    title: "Barcode Generator",
    description: "A console-based barcode generator built using JS and React, featuring barcode creation and display functionality.",
    tech: ["JS", "React", "Tailwind CSS", "Node.js", "Express"],
    github: "https://github.com/linuka2004/Barcode-Generator-Front.git",
    live: "https://barcode-generator-front.vercel.app/"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative z-10 max-w-7xl mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
          Featured <span className="text-purple-400">Projects</span>
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <a href={project.github} target="_blank" rel="noreferrer" key={index} className="block group">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="relative p-8 rounded-3xl glass hover:bg-white/10 transition-colors border border-white/5 hover:border-purple-500/30 overflow-hidden h-full flex flex-col"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
              
              <h3 className="text-2xl font-semibold mb-3 group-hover:text-purple-400 transition-colors">{project.title}</h3>
              <p className="text-gray-400 mb-6 leading-relaxed flex-grow">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-8">
                {project.tech.map((tech, i) => (
                  <span key={i} className="px-3 py-1 text-xs font-medium bg-white/5 text-purple-300 rounded-full border border-white/10">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-4 mt-auto">
                <span className="flex items-center gap-2 text-sm font-medium text-gray-300 group-hover:text-white transition-colors">
                  <Github size={16} /> Code
                </span>
                {project.live !== "#" && (
                  <span onClick={(e) => { e.preventDefault(); window.open(project.live, '_blank'); }} className="flex items-center gap-2 text-sm font-medium text-gray-300 hover:text-purple-400 transition-colors z-10 relative">
                    <ExternalLink size={16} /> Live Demo
                  </span>
                )}
              </div>
            </motion.div>
          </a>
        ))}
      </div>
    </section>
  );
}
