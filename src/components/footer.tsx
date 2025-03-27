"use client";

import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  const year = new Date().getFullYear();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1, 
      transition: { 
        staggerChildren: 0.1,
        duration: 0.6
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.3 }
    }
  };

  return (
    <motion.footer 
      className="py-8 border-t border-border relative"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div 
            className="mb-4 md:mb-0"
            variants={itemVariants}
          >
            <p className="text-sm text-foreground/60 font-ibm">
              © {year} Darshan Jijhuvadia. All rights reserved.
            </p>
          </motion.div>
          
          <div className="flex items-center space-x-4">
            <motion.a
              href="mailto:darshanjijhuvadia@gmail.com"
              aria-label="Email"
              className="p-2 border border-border rounded-sm hover:text-accent hover:border-accent transition-colors"
              variants={itemVariants}
              whileHover={{ 
                scale: 1.1, 
                color: "hsl(var(--accent))",
                borderColor: "hsl(var(--accent))",
                boxShadow: "0 0 8px rgba(255, 92, 0, 0.3)" 
              }}
              whileTap={{ scale: 0.9 }}
            >
              <Mail size={16} />
            </motion.a>
            <motion.a
              href="https://github.com/deepjijhuvadia"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-2 border border-border rounded-sm hover:text-accent hover:border-accent transition-colors"
              variants={itemVariants}
              whileHover={{ 
                scale: 1.1, 
                color: "hsl(var(--accent))",
                borderColor: "hsl(var(--accent))",
                boxShadow: "0 0 8px rgba(255, 92, 0, 0.3)" 
              }}
              whileTap={{ scale: 0.9 }}
            >
              <Github size={16} />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/darshan-jijhuvadia/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-2 border border-border rounded-sm hover:text-accent hover:border-accent transition-colors"
              variants={itemVariants}
              whileHover={{ 
                scale: 1.1, 
                color: "hsl(var(--accent))",
                borderColor: "hsl(var(--accent))",
                boxShadow: "0 0 8px rgba(255, 92, 0, 0.3)" 
              }}
              whileTap={{ scale: 0.9 }}
            >
              <Linkedin size={16} />
            </motion.a>
          </div>
        </div>
      </div>
    </motion.footer>
  );
} 