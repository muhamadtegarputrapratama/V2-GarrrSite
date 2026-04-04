import React from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FaCode, FaMobile, FaRocket } from "react-icons/fa";
import tegar from "../assets/tegar2.jpg";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const stats = [
    { label: "Projects Completed", value: "5+" },
    { label: "Happy People", value: "300+" },
    { label: "Years Experience", value: "2+" },
    { label: "Code Commits", value: "1000+" },
  ];

  return (
    <section id="about" className="py-20 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-4">
            <span className="text-white">About </span>
            <span className="text-red-500">Me</span>
          </h2>
          <div className="w-20 h-1 bg-red-500 mx-auto rounded-full shadow-[0_0_10px_red]" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-transparent rounded-2xl blur-2xl opacity-50 group-hover:opacity-100 transition-opacity" />
            <img
              src={tegar}
              alt="Profile"
              className="relative rounded-2xl shadow-[0_0_30px_rgba(255,0,0,0.3)] w-full object-cover"
            />
          </motion.div>

          <div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="glass p-6 rounded-2xl mb-6"
            >
              <h3 className="text-2xl font-orbitron text-red-500 mb-4">
                Who Am I?
              </h3>
              <p className="text-gray-300 leading-relaxed">
                I am an active student at SMK Wikrama Bogor majoring in Software
                Development and GIM (PPLG). My current focus is Mobile
                Application Development, specifically using the Flutter
                framework and the Dart programming language. I am dedicated to
                creating performant, aesthetically pleasing, and user-friendly
                mobile applications. With a strong learning spirit, I am ready
                to contribute on an industrial scale.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="glass p-4 rounded-xl text-center hover:shadow-[0_0_20px_rgba(255,0,0,0.3)] transition-all"
              >
                <FaCode className="text-red-500 text-3xl mx-auto mb-2" />
                <p className="text-sm text-gray-400">Clean Code</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="glass p-4 rounded-xl text-center hover:shadow-[0_0_20px_rgba(255,0,0,0.3)] transition-all"
              >
                <FaMobile className="text-red-500 text-3xl mx-auto mb-2" />
                <p className="text-sm text-gray-400">Mobile First</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="glass p-4 rounded-xl text-center hover:shadow-[0_0_20px_rgba(255,0,0,0.3)] transition-all"
              >
                <FaRocket className="text-red-500 text-3xl mx-auto mb-2" />
                <p className="text-sm text-gray-400">Fast Delivery</p>
              </motion.div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.7 + index * 0.1, duration: 0.5 }}
                  className="text-center"
                >
                  <p className="text-2xl font-orbitron text-red-500 font-bold">
                    {stat.value}
                  </p>
                  <p className="text-xs text-gray-400">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
