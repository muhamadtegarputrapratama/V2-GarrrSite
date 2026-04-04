/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/purity */
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Certificate from './components/Certificates';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { motion, AnimatePresence } from 'framer-motion';

function App() {
  const [loading, setLoading] = useState(true);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [cursorDotPosition, setCursorDotPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setTimeout(() => setLoading(false), 3000);

    const handleMouseMove = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
      setTimeout(() => {
        setCursorDotPosition({ x: e.clientX, y: e.clientY });
      }, 50);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  if (loading) {
    return (
      <div className="loading-screen">
        <div className="text-center">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="rocket text-6xl"
          >
            🚀
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, repeat: Infinity }}
            className="text-red-500 font-orbitron mt-4 text-xl"
          >
            Loading...
          </motion.p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-black text-white font-poppins overflow-hidden">
      {/* Custom Cursor */}
      <div
        className="custom-cursor"
        style={{ left: cursorPosition.x - 10, top: cursorPosition.y - 10 }}
      />
      <div
        className="custom-cursor-dot"
        style={{ left: cursorDotPosition.x - 3, top: cursorDotPosition.y - 3 }}
      />

      {/* Particle Background */}
      <div className="fixed inset-0 z-0">
        {[...Array(100)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              y: [null, -100],
              opacity: [1, 0],
            }}
            transition={{
              duration: Math.random() * 5 + 3,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
            style={{
              left: Math.random() * window.innerWidth,
              top: window.innerHeight + 100,
            }}
          />
        ))}
      </div>

      <Navbar />
      <main className="relative z-10">
        <Home />
        <About />
        <Projects />
        <Skills />
        <Certificate />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}

export default App;