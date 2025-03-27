"use client";

import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { useScrollAnimation } from "./scroll-animation-provider";

export default function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false);
  const { scrollYProgress } = useScroll();
  const { scrollDirection } = useScrollAnimation();
  
  // Parallax effects
  const backgroundParallax = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const titleParallax = useTransform(scrollYProgress, [0, 0.5], [0, -30]);
  const subtitleParallax = useTransform(scrollYProgress, [0, 0.5], [0, -15]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  
  // Staggered animation
  useEffect(() => {
    // Wait for boot animation to complete
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 2800);
    
    return () => clearTimeout(timer);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20">
      {/* Minimal background elements with parallax */}
      <motion.div 
        className="absolute inset-0 -z-5 overflow-hidden"
        style={{ y: backgroundParallax }}
      >
        <div className="absolute left-1/4 top-1/4 w-32 h-1 bg-accent/20"></div>
        <div className="absolute right-1/4 bottom-1/3 w-1 h-32 bg-accent/20"></div>
        <div className="absolute left-1/2 top-1/2 w-2 h-2 bg-accent/50"></div>
      </motion.div>

      <div className="container mx-auto px-4 py-12 md:py-24">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isLoaded ? "visible" : "hidden"}
          className="flex flex-col items-center text-center max-w-2xl mx-auto te-scanlines"
          style={{ opacity: contentOpacity }}
        >
          <motion.div
            className="flex flex-col items-center space-y-6"
          >
            <motion.div 
              variants={itemVariants}
              className="overflow-hidden"
              style={{ y: titleParallax }}
            >
              <motion.h1 
                className="text-4xl md:text-5xl font-bold leading-tight text-accent font-ibm te-crt-distortion"
                animate={{ 
                  filter: [
                    "blur(0px)", 
                    "blur(0.7px)", 
                    "blur(0px)",
                  ],
                }}
                transition={{ 
                  repeat: Infinity, 
                  repeatType: "reverse", 
                  duration: 5, 
                  ease: "linear" 
                }}
              >
                Darshan Jijhuvadia
              </motion.h1>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              className="overflow-hidden border-t border-b py-2 border-border"
              style={{ y: subtitleParallax }}
            >
              <h2 className="text-xl md:text-2xl font-ibm">
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
                  className="te-cursor-blink"
                />
              </h2>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="te-card max-w-xl mx-auto"
              whileHover={{ 
                y: -5, 
                boxShadow: "0 5px 20px rgba(0, 0, 0, 0.1)",
                transition: { duration: 0.3 } 
              }}
            >
              <p className="text-lg text-foreground/80">
                I specialize in AI-driven solutions, leveraging machine learning, NLP, and advanced
                model fine-tuning to create intelligent applications and systems.
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 mt-6"
            >
              <motion.a
                href="#contact"
                className="te-button-filled te-button-glow"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                Get in Touch
              </motion.a>
              <motion.a
                href="#projects"
                className="te-button te-button-glow"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                View Projects
              </motion.a>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Minimal scroll down indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center"
        animate={{ 
          y: [0, 8, 0],
        }}
        transition={{ 
          repeat: Infinity, 
          duration: 2, 
          ease: "easeInOut" 
        }}
      >
        <motion.div
          className="w-5 h-8 border border-border flex justify-center items-center"
          animate={{ borderColor: scrollDirection === "down" ? "hsl(var(--accent))" : "hsl(var(--border))" }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            animate={{ 
              height: ["0%", "30%", "0%"],
              backgroundColor: scrollDirection === "down" ? "hsl(var(--accent))" : "hsl(var(--border))"
            }}
            transition={{ 
              height: { repeat: Infinity, duration: 1.5, ease: "easeInOut" },
              backgroundColor: { duration: 0.3 }
            }}
            className="w-1"
          />
        </motion.div>
        <span className="mt-2 text-xs text-foreground/50 font-ibm">Scroll</span>
      </motion.div>
    </section>
  );
} 