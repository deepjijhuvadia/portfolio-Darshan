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
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute right-0 top-1/4 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute left-0 bottom-1/4 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6">
        <motion.div 
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto"
        >
          <motion.div variants={variants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-ibm-bios">
              <span className="neon-text">About Me</span>
            </h2>
            <div className="mt-3 h-1 w-20 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full" />
          </motion.div>

          <motion.div 
            variants={variants} 
            className="retro-window"
          >
            <div className="retro-window-header">
              <span>ABOUT.TXT</span>
            </div>
            <div className="p-6">
              <motion.p variants={variants} className="text-lg mb-4 font-ibm-vga">
                I&apos;m <span className="text-cyan-400">Darshan Jijhuvadia</span>, an AI Software Engineer specializing in 
                the design and implementation of artificial intelligence solutions.
              </motion.p>

              <motion.p variants={variants} className="mb-4 font-ibm-vga">
                › With expertise in <span className="text-cyan-400">LLMs, model fine-tuning, and AI-driven applications</span>, 
                I build intelligent systems that solve complex problems.
              </motion.p>

              <motion.p variants={variants} className="mb-4 font-ibm-vga">
                › Currently working at <span className="text-cyan-400">Vizh AI Solutions</span>, I spearhead the development of 
                advanced AI-powered APIs, integrating NLP and LLMs into web and software applications.
              </motion.p>

              <motion.p variants={variants} className="mb-4 font-ibm-vga">
                › I hold a <span className="text-cyan-400">Bachelor of Technology degree in Computer Science</span> from 
                Parul University, where I specialized in AI, LLMs, and object detection.
              </motion.p>

              <motion.div variants={variants} className="pt-4 flex justify-center">
                <a 
                  href="#contact" 
                  className="px-8 py-4 retro-terminal font-ibm-bios text-center hover:brightness-110 transition-all"
                >
                  <span>C:\ GET_IN_TOUCH.EXE</span>
                </a>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 