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
    <section id="experience" className="py-20 md:py-32 relative">
      {/* Minimal background accent */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute right-0 top-0 w-px h-full bg-accent/10"></div>
      </div>
      
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-bold font-ibm">
              Experience & Education
            </h2>
            <div className="mt-3 h-px w-16 bg-accent mx-auto"></div>
          </motion.div>

          <div className="space-y-12">
            <div>
              <motion.h3 
                variants={itemVariants} 
                className="text-xl font-bold mb-6 font-ibm text-accent flex items-center"
              >
                <span className="mr-3">Work Experience</span>
                <div className="h-px flex-grow bg-accent/20"></div>
              </motion.h3>

              <div className="relative space-y-5">
                {/* Timeline connector */}
                <div className="absolute left-0 top-0 bottom-0 w-px bg-border ml-3 hidden md:block"></div>
                
                {experiences.map((exp, index) => (
                  <motion.div 
                    key={index}
                    variants={itemVariants}
                    className="relative"
                  >
                    <div className="md:pl-10 relative">
                      {/* Timeline dot */}
                      <div className="absolute left-0 top-2 w-6 h-6 rounded-sm border border-accent flex items-center justify-center bg-background hidden md:flex">
                        <div className="w-2 h-2 bg-accent"></div>
                      </div>
                      
                      <div className="te-card hover:border-accent/50 transition-colors duration-300">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-3">
                          <h4 className="text-lg font-bold font-ibm">{exp.title}</h4>
                          <span className="text-accent text-sm font-medium px-2 py-0.5 border border-accent/20 font-ibm">
                            {exp.period}
                          </span>
                        </div>
                        <div className="flex flex-col md:flex-row gap-2 mb-4 text-sm text-foreground/70">
                          <span className="font-medium">{exp.company}</span>
                          <span className="hidden md:inline text-foreground/40">•</span>
                          <span>{exp.location}</span>
                        </div>
                        <ul className="space-y-2 mb-4 text-sm">
                          {exp.description.map((item, i) => (
                            <li key={i} className="flex gap-2">
                              <span className="text-accent">›</span> 
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                        <div className="flex flex-wrap gap-1.5 mt-4">
                          {exp.skills.map((skill) => (
                            <span 
                              key={skill} 
                              className="te-tag"
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
                className="text-xl font-bold mb-6 font-ibm text-accent flex items-center"
              >
                <span className="mr-3">Education</span>
                <div className="h-px flex-grow bg-accent/20"></div>
              </motion.h3>

              <div className="relative">
                {education.map((edu, index) => (
                  <motion.div 
                    key={index}
                    variants={itemVariants}
                    className="relative"
                  >
                    <div className="te-card hover:border-accent/50 transition-colors duration-300">
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-3">
                        <h4 className="text-lg font-bold font-ibm">{edu.degree}</h4>
                        <span className="text-accent text-sm font-medium px-2 py-0.5 border border-accent/20 font-ibm">
                          {edu.period}
                        </span>
                      </div>
                      <div className="mb-4 text-sm text-foreground/70">
                        <span className="font-medium">{edu.institution}</span>
                      </div>
                      <ul className="space-y-2 mb-4 text-sm">
                        {edu.description.map((item, i) => (
                          <li key={i} className="flex gap-2">
                            <span className="text-accent">›</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="flex flex-wrap gap-1.5 mt-4">
                        {edu.skills.map((skill) => (
                          <span 
                            key={skill} 
                            className="te-tag"
                          >
                            {skill}
                          </span>
                        ))}
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