"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Github, Globe, ArrowUpRight } from "lucide-react";

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
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section id="projects" className="py-20 md:py-32 relative">
      {/* Minimal background accent */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-0 top-0 w-full h-px bg-accent/10"></div>
      </div>

      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-5xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-bold font-ibm">
              Projects
            </h2>
            <div className="mt-3 h-px w-16 bg-accent mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="te-card group te-hover-effect"
              >
                <div className="border-b border-border pb-2 mb-4 flex justify-between items-center">
                  <h3 className="font-bold font-ibm text-lg">{project.title}</h3>
                  <span className="text-xs font-medium text-foreground/60 font-ibm">{project.period}</span>
                </div>
                
                <div className="space-y-4">
                  {project.institution && (
                    <div className="text-sm text-foreground/70">
                      <span>{project.institution}</span>
                    </div>
                  )}
                  
                  <p className="text-sm">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="te-tag"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-4 pt-2 mt-auto">
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-sm font-medium text-accent hover:underline transition-all group"
                      >
                        <Github size={14} />
                        <span>Code</span>
                        <ArrowUpRight size={12} className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-sm font-medium text-accent hover:underline transition-all group"
                      >
                        <Globe size={14} />
                        <span>Demo</span>
                        <ArrowUpRight size={12} className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
} 