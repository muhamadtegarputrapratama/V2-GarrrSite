import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Typed from 'typed.js';

const Home = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: [
        'Frontend Developer',
        'Mobile Developer',
        'UI/UX Enthusiast',
        'Quality Assurance',
      ],
      typeSpeed: 50,
      backSpeed: 30,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  const scrollToSection = (section) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        background:
          'radial-gradient(ellipse at center, rgba(20,0,0,0.5) 0%, rgba(0,0,0,1) 100%)',
      }}
    >
      {/* 🌌 Background Stars */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20"></div>

      {/* 🔴 Animated Planets */}
      <motion.div
        animate={{ y: [0, -50, 0], rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        className="absolute top-20 right-20 w-32 h-32 rounded-full bg-gradient-to-r from-red-500/20 to-transparent blur-xl"
      />

      <motion.div
        animate={{ y: [0, 50, 0], rotate: -360 }}
        transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
        className="absolute bottom-20 left-20 w-48 h-48 rounded-full bg-gradient-to-l from-red-500/10 to-transparent blur-2xl"
      />

      <div className="container mx-auto px-6 text-center z-10">
        {/* 👤 Profile */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <div className="w-32 h-32 mx-auto rounded-full border-4 border-red-500 shadow-[0_0_30px_rgba(255,0,0,0.6)] overflow-hidden">
            <img
              src="src/assets/bla.png"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        {/* 👑 Name */}
        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-5xl md:text-7xl font-bold mb-4"
        >
          <span className="text-white">Muhamad </span>
          <span className="text-red-500 drop-shadow-[0_0_15px_rgba(255,0,0,0.8)]">
            Tegar
          </span>
        </motion.h1>

        {/* ⌨️ Typing Effect */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-2xl md:text-3xl mb-6"
        >
          <span
            ref={typedRef}
            className="text-red-400 drop-shadow-[0_0_10px_rgba(255,0,0,0.8)]"
          ></span>
        </motion.div>

        {/* 📄 Description */}
        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto"
        >
          Building digital experiences that are out of this world. Specializing
          in Flutter, Laravel, and modern web technologies.
        </motion.p>

        {/* 🔘 Buttons */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="flex gap-4 justify-center flex-wrap"
        >
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => scrollToSection('projects')}
            className="px-8 py-3 bg-red-500 text-black font-bold rounded-lg shadow-[0_0_20px_rgba(255,0,0,0.6)] hover:shadow-[0_0_30px_rgba(255,0,0,1)] transition-all"
          >
            🚀 Explore Projects
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => scrollToSection('contact')}
            className="px-8 py-3 border-2 border-red-500 text-red-500 font-bold rounded-lg hover:bg-red-500 hover:text-black transition-all"
          >
            📡 Contact Me
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;