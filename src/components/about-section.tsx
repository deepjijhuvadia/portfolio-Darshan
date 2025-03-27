"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function AboutSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      }
    },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <section id="about" className="py-20 md:py-32 relative">
      {/* Minimal background accent */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-0 top-0 w-full h-px bg-accent/10"></div>
        <div className="absolute left-0 top-0 w-px h-full bg-accent/10"></div>
      </div>

      <div className="container mx-auto px-4">
        <motion.div 
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto"
        >
          <motion.div 
            variants={variants} 
            className="text-center mb-16"
            whileInView={{ 
              opacity: [0.5, 1],
              y: [10, 0],
              transition: { duration: 0.5 }
            }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="text-2xl md:text-3xl font-bold font-ibm te-crt-distortion">
              About Me
            </h2>
            <motion.div 
              className="mt-3 h-px w-16 bg-accent mx-auto"
              initial={{ width: 0 }}
              whileInView={{ width: "4rem" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            ></motion.div>
          </motion.div>

          <motion.div 
            variants={variants} 
            className="te-card te-scanlines"
            whileHover={{ 
              y: -5,
              transition: { duration: 0.2 }
            }}
          >
            <motion.p variants={variants} className="mb-4 font-ibm">
              I&apos;m <span className="text-accent font-medium">Darshan Jijhuvadia</span>, an AI Software Engineer specializing in 
              the design and implementation of artificial intelligence solutions.
            </motion.p>

            <motion.p variants={variants} className="mb-4">
              <span className="text-accent">›</span> With expertise in <span className="font-medium">LLMs, model fine-tuning, and AI-driven applications</span>, 
              I build intelligent systems that solve complex problems.
            </motion.p>

            <motion.p variants={variants} className="mb-4">
              <span className="text-accent">›</span> Currently working at <span className="font-medium">Vizh AI Solutions</span>, I spearhead the development of 
              advanced AI-powered APIs, integrating NLP and LLMs into web and software applications.
            </motion.p>

            <motion.p variants={variants} className="mb-4">
              <span className="text-accent">›</span> I hold a <span className="font-medium">Bachelor of Technology degree in Computer Science</span> from 
              Parul University, where I specialized in AI, LLMs, and object detection.
            </motion.p>

            <motion.div 
              variants={variants} 
              className="pt-4 flex justify-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <a 
                href="#contact" 
                className="te-button-filled w-full flex items-center justify-center gap-2 te-button-glow"
              >
                <span>Get In Touch</span>
              </a>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 