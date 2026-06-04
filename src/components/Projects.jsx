import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: "PID-Based DC Motor Speed Control",
    description: "A closed-loop hardware system designed to precisely regulate DC motor speed using a PID controller. Features an ESP32 microcontroller and a custom Python GUI for real-time telemetry plotting and dynamic over-the-air parameter tuning via TCP/WiFi.",
    tech: ["ESP32", "C++", "Python (Tkinter)", "PID Control", "Control Theory", "L298N Driver", "Hardware Integration"],
    github: "https://github.com/linuka2004/esp32-pid-motor-control.git", 
    live: "#",
    category: "hardware"
  },
  {
    title: "Digital Thermometer PCB Design",
    description: "A hardware temperature measurement system (0°C to 99°C) engineered with an LM35 sensor, TC7107 ADC, and 7-segment displays. The project involved complete lifecycle development, from Proteus circuit simulation to custom PCB routing using KiCad and EasyEDA, featuring precise voltage scaling and analog star point grounding.",
    tech: ["PCB Design", "KiCad", "EasyEDA", "Proteus", "Analog Electronics", "SMD Assembly"],
    github: "#",
    live: "#",
    category: "hardware"
  },
  {
    title: "Analog Signal Conditioning Circuit",
    description: "A multi-stage hardware circuit featuring a BJT common-emitter amplifier and RC band-pass filters, designed to process and amplify AM radio signals.",
    tech: ["Analog Electronics", "Proteus", "BJT Amplifiers", "Hardware Prototyping", "Oscilloscopes"],
    github: "https://drive.google.com/file/d/11Ugw0j1yOJ_LK6ToOAs7QfbkuzrhWPNQ/view?usp=drive_link", 
    live: "#",
    category: "hardware"
  },
  {
    title: "Parallel Computing Demonstration App",
    description: "A Python-based GUI application designed to simulate and evaluate the performance of parallel processing techniques, CPU scheduling, bus contention, and MESI cache coherence.",
    tech: ["Python", "Tkinter", "Multiprocessing", "NumPy", "Matplotlib", "psutil"],
    github: "https://github.com/linuka2004/IE2064_Group02_Code.git",
    live: "#",
    category: "software"
  },
  {
    title: "Company Portfolio Website",
    description: "A real client portfolio website built for a company.",
    tech: ["MongoDB", "Express", "React", "Node.js", "Tailwind CSS"],
    github: "https://pjplastic-pvt-ltd.vercel.app/",
    live: "https://pjplastic-pvt-ltd.vercel.app/",
    category: "software"
  },
  {
    title: "Full Stack E-Commerce Platform",
    description: "A Complete E-Commerce Platform built using MERN Stack.",
    tech: ["MongoDB", "Express", "React", "Node.js", "Tailwind CSS"],
    github: "https://github.com/linuka2004/i-computers-frontend.git",
    live: "#",
    category: "software"
  },
  {
    title: "Safeguard X",
    description: "A vehicle parts anti-theft system developed for my 1st-year Computational Thinking module.",
    tech: ["Arduino IDE", "C++", "Hardware Sensors"],
    github: "https://www.linkedin.com/in/linuka-jayasinghe-45688a2b8",
    live: "#",
    category: "hardware"
  },
  {
    title: "Full-Stack E-Commerce Platform",
    description: "A scalable e-commerce application developed for my Object-Oriented Analysis and Design module.",
    tech: ["React", "Java Spring Boot"],
    github: "https://github.com/linuka2004/pj-plastic-website.git",
    live: "#",
    category: "software"
  },
  {
    title: "HR Payroll System",
    description: "A specialized portal for HR professionals for payroll management.",
    tech: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS", "MySQL"],
    github: "https://github.com/linuka2004/HR-Payroll-Frontend.git",
    live: "#",
    category: "software"
  },
  {
    title: "Yahtzee Game",
    description: "A console-based Yahtzee game built using C, featuring dice rolling, score calculation, and category-based gameplay.",
    tech: ["C"],
    github: "https://github.com/linuka2004/Yahtzee--C.git",
    live: "#",
    category: "software"
  },
  {
    title: "Barcode Generator",
    description: "A console-based barcode generator built using JS and React, featuring barcode creation and display functionality.",
    tech: ["JS", "React", "Tailwind CSS", "Node.js", "Express"],
    github: "https://github.com/linuka2004/Barcode-Generator-Front.git",
    live: "https://barcode-generator-front.vercel.app/",
    category: "software"
  }
];

export default function Projects() {
  const [activeTab, setActiveTab] = useState('hardware');

  const filteredProjects = projects.filter(project => project.category === activeTab);

  return (
    <section id="projects" className="py-24 relative z-10 max-w-7xl mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
          Featured <span className="text-purple-400">Projects</span>
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full mb-8"></div>
      </motion.div>

      {/* Categories Tabs */}
      <div className="flex justify-center mb-16 max-w-full px-4">
        <div className="flex flex-col sm:flex-row p-1 rounded-2xl sm:rounded-full bg-white/5 border border-white/10 backdrop-blur-md relative w-full sm:w-auto gap-1 sm:gap-0 max-w-md sm:max-w-none animate-fade-in">
          <button
            onClick={() => setActiveTab('hardware')}
            className={`relative z-10 px-4 sm:px-6 py-3 sm:py-2.5 rounded-xl sm:rounded-full text-xs sm:text-sm font-semibold transition-colors duration-300 ${
              activeTab === 'hardware' ? 'text-white' : 'text-gray-400 hover:text-gray-200'
            }`}
          >
            <span className="whitespace-nowrap">Hardware & Embedded Systems</span>
            {activeTab === 'hardware' && (
              <motion.div
                layoutId="activeTabGlow"
                className="absolute inset-0 bg-gradient-to-r from-purple-600/40 to-pink-600/40 rounded-xl sm:rounded-full border border-purple-500/30 -z-10 shadow-[0_0_15px_rgba(168,85,247,0.3)]"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
          </button>
          <button
            onClick={() => setActiveTab('software')}
            className={`relative z-10 px-4 sm:px-6 py-3 sm:py-2.5 rounded-xl sm:rounded-full text-xs sm:text-sm font-semibold transition-colors duration-300 ${
              activeTab === 'software' ? 'text-white' : 'text-gray-400 hover:text-gray-200'
            }`}
          >
            <span className="whitespace-nowrap">Software & Full Stack Development</span>
            {activeTab === 'software' && (
              <motion.div
                layoutId="activeTabGlow"
                className="absolute inset-0 bg-gradient-to-r from-purple-600/40 to-pink-600/40 rounded-xl sm:rounded-full border border-purple-500/30 -z-10 shadow-[0_0_15px_rgba(168,85,247,0.3)]"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
          </button>
        </div>
      </div>

      <div className="relative min-h-[400px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <a href={project.github} target="_blank" rel="noreferrer" key={index} className="block group">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ y: -8 }}
                  className="relative p-6 sm:p-8 rounded-3xl glass hover:bg-white/10 transition-colors border border-white/5 hover:border-purple-500/30 overflow-hidden h-full flex flex-col"
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
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
