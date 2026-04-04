import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  FaReact, FaNodeJs, FaPython, FaDatabase, 
  FaHtml5, FaCss3Alt, FaJs, FaGitAlt 
} from 'react-icons/fa';
import { SiTailwindcss, SiFirebase, SiMongodb, SiTypescript } from 'react-icons/si';
import { FaFlutter, FaLaravel } from 'react-icons/fa6';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const skills = [
    { name: 'React.js', icon: FaReact, level: 85, color: '#61DAFB' },
    { name: 'JavaScript', icon: FaJs, level: 75, color: '#F7DF1E' },
    { name: 'TailwindCSS', icon: SiTailwindcss, level: 90, color: '#06B6D4' },
    { name: 'HTML5', icon: FaHtml5, level: 95, color: '#E34F26' },
    { name: 'CSS3', icon: FaCss3Alt, level: 90, color: '#1572B6' },
    { name: 'FLutter', icon: FaFlutter, level: 90, color: '#3776AB' },
    { name: 'Git', icon: FaGitAlt, level: 85, color: '#F05032' },
    { name: 'Laravel', icon: FaLaravel, level: 70, color: 'red' },
  ];

  return (
    <section id="skills" className="py-20 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-4">
            <span className="text-white">Technical </span>
            <span className="text-red-500">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-red-500 mx-auto rounded-full shadow-[0_0_10px_red]" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: index * 0.05, duration: 0.5 }}
              whileHover={{ scale: 1.05, x: 5 }}
              className="glass p-6 rounded-xl hover:shadow-[0_0_30px_rgba(255,0,0,0.3)] transition-all"
            >
              <div className="flex items-center gap-4 mb-4">
                <skill.icon className="text-3xl" style={{ color: skill.color }} />
                <h3 className="text-lg font-orbitron text-white">{skill.name}</h3>
              </div>
              <div className="relative h-2 bg-gray-700 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={isInView ? { width: `${skill.level}%` } : {}}
                  transition={{ delay: index * 0.05 + 0.5, duration: 1 }}
                  className="absolute top-0 left-0 h-full bg-gradient-to-r from-red-500 to-red-700 rounded-full"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
              <p className="text-right text-sm text-gray-400 mt-2">{skill.level}%</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;