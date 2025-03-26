"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { Github, Globe, ChevronRight } from "lucide-react";

const projects = [
  {
    title: "NexaSync AI",
    period: "Jun 2024 – Present",
    description: "A Streamlit-powered AI application enabling users to interact with PDF documents through natural language queries, utilizing LangChain for intelligent text vectorization.",
    image: "/projects/nexasync.jpg",
    tech: ["Streamlit", "LangChain", "Text Vectorization", "AI-based Document Processing"],
    link: "https://github.com/deepjijhuvadia/NexaSync--AI",
    demo: null,
  },
  {
    title: "Predecto-AI",
    period: "May 2024 – Jun 2024",
    description: "A predictive analytics tool supporting CSV data uploads, preprocessing, and feature selection with multiple regression models and real-time evaluation metrics.",
    image: "/projects/predecto.jpg",
    tech: ["Algorithms", "Artificial Intelligence", "Regression Models", "Data Processing"],
    link: "https://github.com/deepjijhuvadia/Predecto-ai.git",
    demo: null,
  },
  {
    title: "NFT Marketplace",
    period: "Oct 2022 – Mar 2024",
    description: "An intuitive NFT platform for seamless digital asset transactions, enabling artists and traders to explore the NFT ecosystem effortlessly.",
    image: "/projects/nft.jpg",
    tech: ["Non-Fungible Tokens (NFTs)", "Flask", "Computer Vision", "Python", "R&D"],
    link: "https://www.ijcrt.org/viewfull.php?&p_id=IJCRT2403830",
    demo: null,
    institution: "Parul University",
  },
  {
    title: "Likes Microservice",
    period: "Jan 2022 – Apr 2022",
    description: "A scalable microservice to manage and process user engagement data efficiently, leveraging Flask, SQL, and Docker for a high-performance backend architecture.",
    image: "/projects/likes.jpg",
    tech: ["Microservices", "Flask", "SQL", "Docker", "Optimization", "API Design"],
    link: "https://github.com/deepjijhuvadia/likes_microservice",
    demo: null,
  },
];

export default function ProjectsSection() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section id="projects" className="py-20 md:py-32 relative bg-secondary/50">
      {/* Background effect */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_left,transparent_0%,rgba(var(--neon),0.05)_50%,transparent_100%)]" />

      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-ibm-bios">
              <span className="neon-text">Projects</span>
            </h2>
            <div className="mt-3 h-1 w-20 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="retro-window"
                onMouseEnter={() => setHoveredProject(idx)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <div className="retro-window-header">
                  <span>{project.title}</span>
                </div>
                <div className="relative h-48 border-b-4 border-blue-900">
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30 text-white font-ibm-vga">
                    {project.title}
                  </div>
                  {hoveredProject === idx && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6"
                    >
                      <h4 className="text-xl font-bold text-white mb-2 font-ibm-vga">{project.title}</h4>
                      <div className="flex gap-3">
                        {project.link && (
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-full retro-terminal hover:brightness-110 transition-all"
                            aria-label={`GitHub repository for ${project.title}`}
                          >
                            <Github size={20} />
                          </a>
                        )}
                        {project.demo && (
                          <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-full retro-terminal hover:brightness-110 transition-all"
                            aria-label={`Live demo for ${project.title}`}
                          >
                            <Globe size={20} />
                          </a>
                        )}
                      </div>
                    </motion.div>
                  )}
                </div>

                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-bold font-ibm-vga">{project.title}</h3>
                    <span className="text-cyan-400 text-sm font-medium font-ibm-vga">{project.period}</span>
                  </div>
                  
                  {project.institution && (
                    <div className="mb-3 text-sm font-ibm-vga">
                      <span>{project.institution}</span>
                    </div>
                  )}
                  
                  <p className="mb-4 font-ibm-vga text-sm leading-relaxed">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-2 py-1 retro-terminal text-green-400 font-ibm-vga"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  {(project.link || project.demo) && (
                    <div className="flex gap-4 mt-4">
                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-sm font-medium text-cyan-400 hover:text-cyan-300 transition-colors font-ibm-vga"
                        >
                          <span>›</span> View Code 
                        </a>
                      )}
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-sm font-medium text-cyan-400 hover:text-cyan-300 transition-colors font-ibm-vga"
                        >
                          <span>›</span> Live Demo
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            variants={itemVariants}
            className="mt-12 text-center"
          >
            <a
              href="https://github.com/deepjijhuvadia"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 retro-terminal font-ibm-bios hover:brightness-110 transition-all"
            >
              <Github size={18} />
              <span>C:\OPEN_GITHUB.EXE</span>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 