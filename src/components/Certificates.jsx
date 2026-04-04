import React, { useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaTimes } from 'react-icons/fa';
import ai from '../assets/ai.png';
import basic from '../assets/basic.png';
import copilot from '../assets/copilot hacks.png';
import dart from '../assets/dart.png';
import developing from '../assets/developing site.png';
import dicoding from '../assets/dicoding.png';
import financial from '../assets/financiall.jpg';
import flutter from '../assets/flutter.png';
import frontend from '../assets/frontend web pemula.png';
import ibm from '../assets/ibm.png';
import igdx from '../assets/IGDX.png';
import introduction from '../assets/introduction.png';
import job from '../assets/job landscape.png';
import js from '../assets/js.png';
import k3 from '../assets/k3.png';
import komdigi from '../assets/komdigi.png';
import lifejs from '../assets/life with js.png';
import task from '../assets/task list web page.png';
import webtest from '../assets/web testing.png';
import wordpress from '../assets/wordpress.jpg';

const Certificate = () => {
  const [selectedCert, setSelectedCert] = useState(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

 const certificates = [
  { id: 1, title: 'Artificial Intelligence', issuer: 'Course', date: '2024', image: ai, description: 'AI fundamentals and implementation' },
  { id: 2, title: 'Basic Programming', issuer: 'Course', date: '2024', image: basic, description: 'Programming basics' },
  { id: 3, title: 'Copilot Hacks', issuer: 'Course', date: '2024', image: copilot, description: 'Using AI tools effectively' },
  { id: 4, title: 'Dart Programming', issuer: 'Course', date: '2024', image: dart, description: 'Dart language for development' },
  { id: 5, title: 'Developing Website', issuer: 'Course', date: '2024', image: developing, description: 'Website development basics' },
  { id: 6, title: 'Dicoding Certification', issuer: 'Dicoding', date: '2024', image: dicoding, description: 'Official certification from Dicoding' },
  { id: 7, title: 'Financial Literacy', issuer: 'Course', date: '2024', image: financial, description: 'Basic financial knowledge' },
  { id: 8, title: 'Flutter Development', issuer: 'Course', date: '2024', image: flutter, description: 'Mobile app development with Flutter' },
  { id: 9, title: 'Frontend Web Pemula', issuer: 'Course', date: '2024', image: frontend, description: 'Frontend basics for beginners' },
  { id: 10, title: 'IBM Certification', issuer: 'IBM', date: '2024', image: ibm, description: 'Certification from IBM' },
  { id: 11, title: 'IGDX Event', issuer: 'Event', date: '2024', image: igdx, description: 'Game development experience' },
  { id: 12, title: 'Introduction Course', issuer: 'Course', date: '2024', image: introduction, description: 'Introduction to tech' },
  { id: 13, title: 'Job Landscape', issuer: 'Course', date: '2024', image: job, description: 'Understanding job market in tech' },
  { id: 14, title: 'JavaScript', issuer: 'Course', date: '2024', image: js, description: 'Core JavaScript skills' },
  { id: 15, title: 'K3 Training', issuer: 'Training', date: '2024', image: k3, description: 'Work safety training' },
  { id: 16, title: 'Komdigi Program', issuer: 'Komdigi', date: '2024', image: komdigi, description: 'Digital skills program' },
  { id: 17, title: 'Life with JavaScript', issuer: 'Course', date: '2024', image: lifejs, description: 'Real-world JS usage' },
  { id: 18, title: 'Task List Web App', issuer: 'Project', date: '2024', image: task, description: 'Simple task management app' },
  { id: 19, title: 'Web Testing', issuer: 'Course', date: '2024', image: webtest, description: 'Testing web applications' },
  { id: 20, title: 'WordPress', issuer: 'Course', date: '2025', image: wordpress, description: 'Building websites with WordPress' },
];

  return (
    <section id="certificate" className="py-20 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-4">
            <span className="text-white">My </span>
            <span className="text-red-500">Certificates</span>
          </h2>
          <div className="w-20 h-1 bg-red-500 mx-auto rounded-full shadow-[0_0_10px_red]" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, scale: 0 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              onClick={() => setSelectedCert(cert)}
              className="glass rounded-xl overflow-hidden cursor-pointer group"
            >
              <div className="relative">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-48 object-cover transition-transform group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-orbitron text-red-500 mb-1">{cert.title}</h3>
                <p className="text-sm text-gray-400">{cert.issuer} • {cert.date}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedCert && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
          onClick={() => setSelectedCert(null)}
        >
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            className="glass rounded-2xl max-w-2xl w-full p-6 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedCert(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-red-500 transition-colors"
            >
              <FaTimes size={24} />
            </button>
            <img
              src={selectedCert.image}
              alt={selectedCert.title}
              className="w-full h-64 object-cover rounded-lg mb-4"
            />
            <h3 className="text-2xl font-orbitron text-red-500 mb-2">{selectedCert.title}</h3>
            <p className="text-gray-300 mb-2">{selectedCert.issuer} • {selectedCert.date}</p>
            <p className="text-gray-400">{selectedCert.description}</p>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default Certificate;