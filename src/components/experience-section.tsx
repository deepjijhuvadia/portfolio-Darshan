"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const experiences = [
  {
    title: "AI Software Engineer",
    company: "Vizh AI Solutions",
    location: "Remote, United States",
    period: "Oct 2024 – Present",
    description: [
      "Spearheaded the development and deployment of advanced AI-powered APIs, integrating NLP, LLMs, and AI-driven solutions into web and software applications.",
      "Fine-tuned open-source models, including LLaMA, LangChain, and YOLO, to align with specific business needs, enhancing performance and accuracy.",
      "Engineered scalable ETL pipelines for seamless data extraction, transformation, and loading, driving real-time analytics and decision-making.",
      "Collaborated with cross-functional teams to implement AI-driven automation, optimizing workflows, reducing operational costs, and improving user experience.",
      "Led AI model optimization initiatives, boosting efficiency in AI-powered solutions for enhanced scalability and reliability.",
    ],
    skills: ["Python", "CI/CD", "Artificial Intelligence", "Machine Learning", "NLP", "LLMs", "LLaMA", "OCR", "API Development", "Model Fine-Tuning", "Data Engineering"],
  },
  {
    title: "Python Developer",
    company: "Freelance",
    location: "Remote",
    period: "Jun 2021 – Oct 2024",
    description: [
      "Designed and implemented scalable microservices using Python, optimizing backend systems, data pipelines, and ML applications.",
      "Deployed and managed containerized applications using Docker and Kubernetes, ensuring portability and high availability.",
      "Developed and optimized relational databases with ORMs for efficient data storage and retrieval.",
      "Conducted in-depth data analysis and visualization using Pandas, NumPy, and Matplotlib, providing actionable insights for clients.",
      "Built AI-driven solutions utilizing Transformer models and Generative AI tools for various automation and data-driven applications.",
    ],
    skills: ["Python", "Microservices", "SQL", "Transformer Models", "Optimization", "Kubernetes", "Data Analysis", "Generative AI", "Model Deployment"],
  },
  {
    title: "Software Engineer Intern",
    company: "HackerRank",
    location: "Remote, Mumbai, India",
    period: "Jul 2023 – Dec 2023",
    description: [
      "Developed data automation scripts to streamline analysis and reporting using Python.",
      "Extracted actionable insights from large-scale datasets using advanced SQL queries and data processing techniques.",
      "Implemented machine learning algorithms for AI-driven solutions, enhancing the platform's analytics capabilities.",
      "Contributed to data-driven projects, integrating Python and SQL databases to support real-time analytics and reporting.",
    ],
    skills: ["Algorithms", "Data Structures", "Hypothesis Testing", "Optimization", "Statistics", "SQL", "Python", "Data Science"],
  },
];

const education = [
  {
    degree: "Bachelor of Technology (BTech), Computer Science",
    institution: "Parul University",
    period: "2020 – 2024",
    description: [
      "Specialized in AI, LLMs, and object detection, mastering advanced machine learning techniques.",
      "Developed expertise in pattern recognition, image processing, and systematic model evaluation.",
    ],
    skills: ["Object Detection", "OOP", "Image Processing", "ChatGPT", "DALL-E", "Pattern Recognition", "Figma", "LLMs", "Mathematics"],
  },
];

export default function ExperienceSection() {
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
    <section id="experience" className="py-20 md:py-32 relative">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute right-0 bottom-1/3 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute left-0 top-1/2 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-5xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-ibm-bios">
              <span className="neon-text">Experience & Education</span>
            </h2>
            <div className="mt-3 h-1 w-20 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full" />
          </motion.div>

          <div className="space-y-12">
            <div>
              <motion.h3 
                variants={itemVariants} 
                className="text-2xl font-bold mb-8 inline-flex items-center gap-3 font-ibm-bios text-cyan-400"
              >
                <span>C:\WORK_EXPERIENCE.EXE</span>
                <div className="h-px w-16 bg-gradient-to-r from-blue-500 to-cyan-500" />
              </motion.h3>

              <div className="relative space-y-8">
                {experiences.map((exp, index) => (
                  <motion.div 
                    key={index}
                    variants={itemVariants}
                    className="relative"
                  >
                    <div className="retro-window">
                      <div className="retro-window-header">
                        <span>{exp.title} at {exp.company}</span>
                      </div>
                      <div className="p-6">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                          <h4 className="text-xl font-bold font-ibm-vga">{exp.title}</h4>
                          <span className="text-cyan-400 text-sm font-medium font-ibm-vga px-3 py-1">
                            {exp.period}
                          </span>
                        </div>
                        <div className="flex flex-col md:flex-row gap-2 mb-4 font-ibm-vga">
                          <span className="font-medium">{exp.company}</span>
                          <span className="hidden md:inline">•</span>
                          <span>{exp.location}</span>
                        </div>
                        <ul className="space-y-2 mb-4 font-ibm-vga">
                          {exp.description.map((item, i) => (
                            <li key={i} className="text-sm md:text-base flex">
                              <span className="mr-2 text-cyan-400">›</span> {item}
                            </li>
                          ))}
                        </ul>
                        <div className="flex flex-wrap gap-2 mt-4">
                          {exp.skills.map((skill) => (
                            <span 
                              key={skill} 
                              className="text-xs px-2 py-1 retro-terminal text-green-400 font-ibm-vga"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div>
              <motion.h3 
                variants={itemVariants} 
                className="text-2xl font-bold mb-8 inline-flex items-center gap-3 font-ibm-bios text-cyan-400"
              >
                <span>C:\EDUCATION.EXE</span>
                <div className="h-px w-16 bg-gradient-to-r from-blue-500 to-cyan-500" />
              </motion.h3>

              <div className="relative">
                {education.map((edu, index) => (
                  <motion.div 
                    key={index}
                    variants={itemVariants}
                    className="relative"
                  >
                    <div className="retro-window">
                      <div className="retro-window-header">
                        <span>{edu.degree}</span>
                      </div>
                      <div className="p-6">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                          <h4 className="text-xl font-bold font-ibm-vga">{edu.degree}</h4>
                          <span className="text-cyan-400 text-sm font-medium font-ibm-vga px-3 py-1">
                            {edu.period}
                          </span>
                        </div>
                        <div className="mb-4 font-ibm-vga">
                          <span className="font-medium">{edu.institution}</span>
                        </div>
                        <ul className="space-y-2 mb-4 font-ibm-vga">
                          {edu.description.map((item, i) => (
                            <li key={i} className="text-sm md:text-base flex">
                              <span className="mr-2 text-cyan-400">›</span> {item}
                            </li>
                          ))}
                        </ul>
                        <div className="flex flex-wrap gap-2 mt-4">
                          {edu.skills.map((skill) => (
                            <span 
                              key={skill} 
                              className="text-xs px-2 py-1 retro-terminal text-green-400 font-ibm-vga"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 