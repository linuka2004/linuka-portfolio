import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import TechStack from './components/TechStack';
import Footer from './components/Footer';

function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    let animationFrameId;
    const handleMouseMove = (e) => {
      animationFrameId = requestAnimationFrame(() => {
        setMousePosition({ x: e.clientX, y: e.clientY });
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="cosmic-bg relative min-h-screen selection:bg-purple-500/30 scroll-smooth">
      {/* Interactive Cursor Physics (Glow overlay that follows the mouse) */}
      <div
        className="pointer-events-none fixed inset-0 z-0 transition-opacity duration-300"
        style={{
          background: `radial-gradient(800px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(168,85,247,0.1), transparent 40%)`
        }}
      />

      <div className="relative z-10 w-full h-full">
        <Navbar />
        <main>
          <Hero />
          <Projects />
          <TechStack />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
