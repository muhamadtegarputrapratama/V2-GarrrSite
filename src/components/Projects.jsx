import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

// ✅ IMPORT GAMBAR (WAJIB)
import vote from "../assets/vote.png";
import dict from "../assets/dict.png";
import ticket from "../assets/ticket.png";
import cashier from "../assets/cashier.png";
import ig from "../assets/ig.png";
import warteg from "../assets/pemesanan-makanan.png";
import bukutamu from "../assets/bukutamu.png";
import portof from "../assets/portofHtml.png";

const Projects = () => {
  const [filter, setFilter] = useState("all");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const projects = [
    {
      id: 1,
      title: "Music-Chart GarrrTify",
      description:
        "A Laravel-based web application that displays popular music charts.",
      tech: ["Laravel", "MySQL", "Bootstrap"],
      image: vote,
      github: "https://github.com",
      demo: "#",
      category: "web",
    },
    {
      id: 2,
      title: "Dictionary App",
      description:
        "A React-based dictionary app with real-time search.",
      tech: ["React", "Tailwind"],
      image: dict,
      github: "https://github.com",
      demo: "#",
      category: "web",
    },
    {
      id: 3,
      title: "Ticketing App",
      description:
        "Mobile app for ticket management and booking.",
      tech: ["Flutter"],
      image: ticket,
      github: "https://github.com",
      demo: "#",
      category: "mobile",
    },
    {
      id: 4,
      title: "Cashier App",
      description:
        "Simple cashier system with product and cart features.",
      tech: ["Flutter"],
      image: cashier,
      github: "https://github.com",
      demo: "#",
      category: "mobile",
    },
    {
      id: 5,
      title: "Instagram Clone",
      description:
        "Instagram UI clone built using Flutter.",
      tech: ["Flutter"],
      image: ig,
      github: "https://github.com",
      demo: "#",
      category: "mobile",
    },
    {
      id: 6,
      title: "Wartegarrr",
      description:
        "Food ordering UI design made in Figma.",
      tech: ["Figma"],
      image: warteg,
      github: "https://github.com",
      demo: "#",
      category: "figma",
    },
    {
      id: 7,
      title: "Buku Tamu",
      description:
        "A guestbook web application specifically designed for admins to manage visitor data.",
      tech: ["Figma"],
      image: bukutamu,
      github: "https://github.com",
      demo: "#",
      category: "figma",
    },
    {
      id: 8,
      title: "Portfolio Website",
      description:
        "A responsive portfolio website built with Html and CSS",
      tech: ["HTML", "CSS"],
      image: portof,
      github: "https://github.com",
      demo: "#",
      category: "web",
    }
  ];

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="py-20 relative" ref={ref}>
      <div className="container mx-auto px-6">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-white">My </span>
            <span className="text-red-500">Projects</span>
          </h2>

          {/* Filter */}
          <div className="flex gap-4 justify-center flex-wrap">
            {["all", "web", "mobile", "figma"].map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-6 py-2 rounded-lg transition ${
                  filter === category
                    ? "bg-red-500 text-black"
                    : "border border-red-500 text-red-500 hover:bg-red-500 hover:text-black"
                }`}
              >
                {category.toUpperCase()}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-black/40 backdrop-blur-lg rounded-2xl overflow-hidden border border-red-500/20"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />

              <div className="p-5">
                <h3 className="text-red-500 text-lg font-bold mb-2">
                  {project.title}
                </h3>

                <p className="text-gray-400 text-sm mb-3">
                  {project.description}
                </p>

                <div className="flex gap-2 mb-3 flex-wrap">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs bg-red-500/20 text-red-400 px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a href={project.github} target="_blank">
                    <FaGithub className="text-gray-400 hover:text-red-500" />
                  </a>
                  <a href={project.demo} target="_blank">
                    <FaExternalLinkAlt className="text-gray-400 hover:text-red-500" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;