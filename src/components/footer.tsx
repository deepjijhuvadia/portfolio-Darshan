import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border relative glass">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-muted-foreground">
              © {year} Darshan Jijhuvadia. All rights reserved.
            </p>
          </div>
          
          <div className="flex items-center space-x-4">
            <a
              href="mailto:darshanjijhuvadia@gmail.com"
              aria-label="Email"
              className="p-2 glass rounded-full hover:text-cyan-400 transition-colors"
            >
              <Mail size={18} />
            </a>
            <a
              href="https://github.com/deepjijhuvadia"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-2 glass rounded-full hover:text-cyan-400 transition-colors"
            >
              <Github size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/darshan-jijhuvadia/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-2 glass rounded-full hover:text-cyan-400 transition-colors"
            >
              <Linkedin size={18} />
            </a>
          </div>
        </div>
      </div>
      
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
      </div>
    </footer>
  );
} 