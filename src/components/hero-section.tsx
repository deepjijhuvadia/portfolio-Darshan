"use client";

import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

export default function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20">
      {/* Additional glass effect overlay */}
      <div className="absolute inset-0 -z-5 opacity-50">
        <div className="absolute left-1/4 top-1/4 w-64 h-64 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute right-1/4 bottom-1/4 w-64 h-64 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute left-1/2 top-1/2 w-64 h-64 rounded-full bg-purple-500/10 blur-3xl" />
      </div>

      <div className="container mx-auto px-6 py-12 md:py-24">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center space-y-6"
          >
            <div className="overflow-hidden">
              <motion.div
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              >
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
                  <span className="neon-text animate-glow-pulse">Darshan Jijhuvadia</span>
                </h1>
              </motion.div>
            </div>

            <div className="overflow-hidden">
              <motion.div
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              >
                <h2 className="text-xl md:text-2xl lg:text-3xl font-medium">
                  <TypeAnimation
                    sequence={[
                      "AI Software Engineer",
                      1000,
                      "LLM Specialist",
                      1000,
                      "Model Fine-Tuning Expert",
                      1000,
                    ]}
                    wrapper="span"
                    speed={50}
                    repeat={Infinity}
                    className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400"
                  />
                </h2>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="glass p-6 rounded-xl max-w-2xl mx-auto"
            >
              <p className="text-lg text-muted-foreground">
                I specialize in AI-driven solutions, leveraging machine learning, NLP, and advanced
                model fine-tuning to create intelligent applications and systems. Let's build the future together.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 mt-6"
            >
              <a
                href="#contact"
                className="px-8 py-4 rounded-md bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-medium hover:from-blue-700 hover:to-cyan-700 transition-colors shadow-lg shadow-blue-500/20"
              >
                Get in Touch
              </a>
              <a
                href="#projects"
                className="px-8 py-4 rounded-md glass-card neon-border font-medium"
              >
                View Projects
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll down indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2"
        >
          <motion.div
            animate={{ height: ["0%", "30%", "0%"] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="w-1 bg-cyan-400 rounded-full"
          />
        </motion.div>
        <span className="mt-2 text-xs text-muted-foreground/70">Scroll Down</span>
      </div>
    </section>
  );
} 