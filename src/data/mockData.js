import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaPhp, FaNodeJs, FaGitAlt } from 'react-icons/fa';
import { SiTailwindcss, SiFramer, SiMysql } from 'react-icons/si';

export const skills = [
  { name: 'HTML', icon: <FaHtml5 className="text-[#E34F26]" />, level: 90 },
  { name: 'CSS', icon: <FaCss3Alt className="text-[#1572B6]" />, level: 85 },
  { name: 'JavaScript', icon: <FaJs className="text-[#F7DF1E]" />, level: 85 },
  { name: 'React JS', icon: <FaReact className="text-[#61DAFB]" />, level: 80 },
  { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-[#06B6D4]" />, level: 90 },
  { name: 'Framer Motion', icon: <SiFramer className="text-white" />, level: 75 },
  { name: 'PHP', icon: <FaPhp className="text-[#777BB4]" />, level: 70 },
  { name: 'MySQL', icon: <SiMysql className="text-[#4479A1]" />, level: 65 },
  { name: 'Node.js', icon: <FaNodeJs className="text-[#339933]" />, level: 60 },
  { name: 'Git', icon: <FaGitAlt className="text-[#F05032]" />, level: 85 },
];

export const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce platform with cart and checkout functionalities.',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    github: 'https://github.com',
    demo: 'https://demo.com',
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'A modern Kanban style task management application built with React and Tailwind.',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    github: 'https://github.com',
    demo: 'https://demo.com',
  },
  {
    id: 3,
    title: 'Movie Database Portal',
    description: 'Browse current and upcoming movies using TMDB API integration.',
    image: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    github: 'https://github.com',
    demo: 'https://demo.com',
  },
];

export const certificates = [
  {
    id: 1,
    title: 'React - The Complete Guide',
    issuer: 'Udemy',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    date: 'Jan 2024',
  },
  {
    id: 2,
    title: 'Frontend Web Development',
    issuer: 'Dicoding',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    date: 'Dec 2023',
  },
  {
    id: 3,
    title: 'JavaScript Data Structures',
    issuer: 'FreeCodeCamp',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    date: 'Oct 2023',
  },
];
