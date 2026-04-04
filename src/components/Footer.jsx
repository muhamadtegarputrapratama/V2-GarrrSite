import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram, FaHeart } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="glass py-8 relative z-10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © 2026 GarrrUniverse. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a href="https://github.com/muhamadtegarputrapratama" target="_blank" rel="noopener noreferrer"
               className="text-gray-400 hover:text-red-500 transition-colors">
              <FaGithub size={20} />
            </a>
            <a href="muhamad-tegar-putra-pratama-370767329" target="_blank" rel="noopener noreferrer"
               className="text-gray-400 hover:text-red-500 transition-colors">
              <FaLinkedin size={20} />
            </a>
            <a href="https://www.instagram.com/garrceriaaa/" target="_blank" rel="noopener noreferrer"
               className="text-gray-400 hover:text-red-500 transition-colors">
              <FaInstagram size={20} />
            </a>
          </div>
          <p className="text-gray-400 text-sm flex items-center gap-1">
            Made with <FaHeart className="text-red-500" /> in the GarrrUniverse
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;