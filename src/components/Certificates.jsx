import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';

// IMPORT GAMBAR (PASTIKAN PATH BENAR)
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

  const certificates = [
    { id: 1, title: 'Artificial Intelligence', issuer: 'Course', date: '2024', image: ai },
    { id: 2, title: 'Basic Programming', issuer: 'Course', date: '2024', image: basic },
    { id: 3, title: 'Copilot Hacks', issuer: 'Course', date: '2024', image: copilot },
    { id: 4, title: 'Dart Programming', issuer: 'Course', date: '2024', image: dart },
    { id: 5, title: 'Developing Website', issuer: 'Course', date: '2024', image: developing },
    { id: 6, title: 'Dicoding Certification', issuer: 'Dicoding', date: '2024', image: dicoding },
    { id: 7, title: 'Financial Literacy', issuer: 'Course', date: '2024', image: financial },
    { id: 8, title: 'Flutter Development', issuer: 'Course', date: '2024', image: flutter },
    { id: 9, title: 'Frontend Web Pemula', issuer: 'Course', date: '2024', image: frontend },
    { id: 10, title: 'IBM Certification', issuer: 'IBM', date: '2024', image: ibm },
    { id: 11, title: 'IGDX Event', issuer: 'Event', date: '2024', image: igdx },
    { id: 12, title: 'Introduction Course', issuer: 'Course', date: '2024', image: introduction },
    { id: 13, title: 'Job Landscape', issuer: 'Course', date: '2024', image: job },
    { id: 14, title: 'JavaScript', issuer: 'Course', date: '2024', image: js },
    { id: 15, title: 'K3 Training', issuer: 'Training', date: '2024', image: k3 },
    { id: 16, title: 'Komdigi Program', issuer: 'Komdigi', date: '2024', image: komdigi },
    { id: 17, title: 'Life with JavaScript', issuer: 'Course', date: '2024', image: lifejs },
    { id: 18, title: 'Task List Web App', issuer: 'Project', date: '2024', image: task },
    { id: 19, title: 'Web Testing', issuer: 'Course', date: '2024', image: webtest },
    { id: 20, title: 'WordPress', issuer: 'Course', date: '2025', image: wordpress },
  ];

  return (
    <section id="certificate" className="py-20">
      <div className="container mx-auto px-6">
        
        {/* TITLE */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-white">My </span>
            <span className="text-red-500">Certificates</span>
          </h2>
          <div className="w-20 h-1 bg-red-500 mx-auto rounded-full" />
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert) => (
            <div
              key={cert.id}
              onClick={() => setSelectedCert(cert)}
              className="rounded-xl overflow-hidden cursor-pointer bg-gray-900 hover:scale-105 transition"
            >
              <img
                src={cert.image}
                alt={cert.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg text-red-500">{cert.title}</h3>
                <p className="text-sm text-gray-400">
                  {cert.issuer} • {cert.date}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* MODAL */}
      {selectedCert && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={() => setSelectedCert(null)}
        >
          <div
            className="bg-gray-900 rounded-2xl p-6 max-w-2xl w-full relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedCert(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-red-500"
            >
              <FaTimes size={24} />
            </button>

            <img
              src={selectedCert.image}
              alt={selectedCert.title}
              className="w-full h-64 object-cover rounded-lg mb-4"
            />

            <h3 className="text-2xl text-red-500 mb-2">
              {selectedCert.title}
            </h3>
            <p className="text-gray-300">
              {selectedCert.issuer} • {selectedCert.date}
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Certificate;
