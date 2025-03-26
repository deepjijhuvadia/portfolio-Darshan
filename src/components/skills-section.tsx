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
    <section id="skills" className="py-20 md:py-32 relative bg-secondary/50">
      {/* Background effect */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,transparent_0%,rgba(var(--neon),0.05)_50%,transparent_100%)]" />

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
              <span className="neon-text">TECHNICAL SKILLS</span>
            </h2>
            <div className="mt-3 h-1 w-20 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category) => (
              <motion.div
                key={category.name}
                variants={itemVariants}
                className="retro-window"
              >
                <div className="retro-window-header">
                  <span className="font-bold text-cyan-300">{category.name}</span>
                  <div className="flex gap-1">
                    <div className="w-3 h-3 bg-gray-300"></div>
                    <div className="w-3 h-3 bg-gray-300"></div>
                  </div>
                </div>

                <div className="space-y-4">
                  {category.items.map((skill) => (
                    <div key={skill.name} className="flex items-start gap-2">
                      <div className="mt-1.5 text-cyan-400">›</div>
                      <span>
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            variants={itemVariants}
            className="mt-16 retro-terminal p-6 rounded-lg"
          >
            <div className="text-center mb-4">
              <h3 className="text-xl font-bold font-ibm-bios mb-4">
                ADDITIONAL TECHNOLOGIES
              </h3>
              <div className="inline-block h-0.5 w-full bg-green-500/60 mb-6"></div>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              {["OCR", "NLP", "LLaMA", "LangChain", "Transformer Models", "YOLO", 
               "Computer Vision", "Object Detection", "Flask", "Microservices",
               "Data Analysis", "Pattern Recognition", "Pandas", "NumPy"].map((tech) => (
                <span 
                  key={tech}
                  className="px-3 py-1 border border-green-500/70 rounded text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 