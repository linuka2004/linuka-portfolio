import React from 'react';

export default function Footer() {
  return (
    <footer id="contact" className="py-12 relative z-10 text-center text-gray-400 border-t border-white/5 bg-black/20 mt-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-2xl font-bold text-white mb-6">Let's Connect</h2>
        <p className="mb-8 max-w-md mx-auto">
          Currently open to part-time or internship opportunities as a full-stack developer. Let's build something weightless together.
        </p>
        <div className="flex justify-center gap-6 mb-8">
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=linukaja2004@gmail.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-purple-400 transition-colors"
          >
            Email
          </a>
          <a href="https://github.com/linuka2004" target="_blank" rel="noreferrer" className="hover:text-purple-400 transition-colors">GitHub</a>
          <a href="https://www.linkedin.com/in/linuka-jayasinghe-45688a2b8" target="_blank" rel="noreferrer" className="hover:text-purple-400 transition-colors">LinkedIn</a>
        </div>
        <div className="text-sm">
          &copy; {new Date().getFullYear()} Linuka Jayasinghe. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
