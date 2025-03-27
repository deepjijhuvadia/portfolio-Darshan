"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const skillCategories = [
  {
    name: "Languages & Frameworks",
    items: [
      { name: "Proficient: Python, JAX" },
      { name: "Learning: Rust" },
      { name: "Libraries: TensorFlow, PyTorch, Hugging Face Transformers" },
    ],
  },
  {
    name: "Machine Learning",
    items: [
      { name: "Multimodal Systems" },
      { name: "Vision-Language Models" },
      { name: "Large Language Models (LLMs)" },
      { name: "Model Fine-Tuning" },
      { name: "Systematic Model Evaluation" },
    ],
  },
  {
    name: "Research Areas",
    items: [
      { name: "Data-driven Experimentation" },
      { name: "Model Debugging" },
      { name: "Post-training Optimization" },
      { name: "Transformer-based NLP" },
    ],
  },
  {
    name: "Infrastructure",
    items: [
      { name: "Distributed Training" },
      { name: "Kubernetes, Docker" },
      { name: "AWS, Google Cloud, Vertex AI" },
      { name: "CI/CD Pipelines" },
    ],
  },
  {
    name: "Data Processing",
    items: [
      { name: "ETL Pipelines" },
      { name: "Feature Engineering" },
      { name: "Dataset Curation" },
      { name: "Synthetic Data Generation" },
      { name: "Real-time Data Streaming" },
    ],
  },
];

export default function SkillsSection() {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
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

  const tagVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: [0.16, 1, 0.3, 1],
      }
    },
    hover: {
      scale: 1.05,
      backgroundColor: "hsl(var(--accent) / 0.15)",
      color: "hsl(var(--accent))",
      transition: {
        duration: 0.2,
        ease: "easeOut",
      }
    }
  };

  return (
    <section id="skills" className="py-20 md:py-32 relative">
      {/* Minimal background accent */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-0 top-0 w-full h-px bg-accent/10"></div>
        <div className="absolute right-0 top-0 w-px h-full bg-accent/10"></div>
      </div>

      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-5xl mx-auto"
        >
          <motion.div 
            variants={itemVariants} 
            className="text-center mb-16"
            whileInView={{ 
              opacity: [0.5, 1],
              y: [10, 0],
              transition: { duration: 0.6 }
            }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="text-2xl md:text-3xl font-bold font-ibm te-crt-distortion">
              Technical Skills
            </h2>
            <motion.div 
              className="mt-3 h-px w-16 bg-accent mx-auto"
              animate={{ width: inView ? "4rem" : "0rem" }}
              transition={{ duration: 0.8, delay: 0.2 }}
            ></motion.div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.name}
                variants={itemVariants}
                className="te-card te-parallax"
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ 
                  opacity: 1, 
                  y: 0,
                  transition: { 
                    duration: 0.5, 
                    delay: categoryIndex * 0.1 
                  }
                }}
                viewport={{ once: true, margin: "-50px" }}
              >
                <motion.div 
                  className="border-b border-border pb-2 mb-4"
                  whileHover={{ borderColor: "hsl(var(--accent))" }}
                >
                  <motion.span 
                    className="font-bold text-accent font-ibm"
                    whileInView={{ 
                      opacity: [0, 1], 
                      x: [-10, 0],
                      transition: { duration: 0.5, delay: 0.2 }
                    }}
                    viewport={{ once: true }}
                  >
                    {category.name}
                  </motion.span>
                </motion.div>

                <div className="space-y-3">
                  {category.items.map((skill, skillIndex) => (
                    <motion.div 
                      key={skill.name} 
                      className="flex items-start gap-2"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ 
                        opacity: 1, 
                        x: 0,
                        transition: { 
                          duration: 0.3, 
                          delay: 0.1 + (skillIndex * 0.08)
                        }
                      }}
                      viewport={{ once: true }}
                    >
                      <motion.div 
                        className="w-4 text-accent"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.3, delay: 0.2 + (skillIndex * 0.1) }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.2 }}
                      >
                        »
                      </motion.div>
                      <motion.span 
                        className="text-sm"
                        whileHover={{ color: "hsl(var(--accent))" }}
                      >
                        {skill.name}
                      </motion.span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            variants={itemVariants}
            className="mt-16 te-terminal p-6 te-scanlines"
            whileHover={{ 
              boxShadow: "0 0 30px rgba(var(--accent), 0.1)", 
              transition: { duration: 0.3 } 
            }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0, transition: { duration: 0.7 } }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div 
              className="text-center mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1, transition: { duration: 0.5, delay: 0.3 } }}
              viewport={{ once: true }}
            >
              <motion.h3 
                className="text-xl font-bold font-ibm mb-4 te-typing"
                initial={{ width: "0%" }}
                whileInView={{ width: "100%", transition: { duration: 1.5 } }}
                viewport={{ once: true }}
              >
                Additional Technologies
              </motion.h3>
              <motion.div 
                className="inline-block h-px w-full bg-accent/40 mb-6"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1, transition: { duration: 0.8, delay: 0.5 } }}
                viewport={{ once: true }}
              ></motion.div>
            </motion.div>
            <div className="flex flex-wrap justify-center gap-2">
              {["OCR", "NLP", "LLaMA", "LangChain", "Transformer Models", "YOLO", 
               "Computer Vision", "Object Detection", "Flask", "Microservices",
               "Data Analysis", "Pattern Recognition", "Pandas", "NumPy"].map((tech, index) => (
                <motion.span 
                  key={tech}
                  className="te-tag"
                  variants={tagVariants}
                  initial="hidden"
                  whileInView="visible"
                  whileHover="hover"
                  viewport={{ once: true }}
                  custom={index}
                  transition={{ delay: 0.5 + (index * 0.05) }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 