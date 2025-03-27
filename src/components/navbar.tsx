"use client";

import React, { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import { useTheme } from "next-themes";
import { Sun, Moon, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "About", href: "about" },
  { name: "Skills", href: "skills" },
  { name: "Experience", href: "experience" },
  { name: "Projects", href: "projects" },
  { name: "Contact", href: "contact" },
];

export default function Navbar() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [hasScrolledOnce, setHasScrolledOnce] = useState(false);

  // After mounting, we can access the theme
  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 50);
      
      if (currentScrollY > 100 && !hasScrolledOnce) {
        setHasScrolledOnce(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [hasScrolledOnce]);

  // Update active section based on scroll position
  useEffect(() => {
    const handleScrollSpy = () => {
      const sections = navLinks.map(link => document.getElementById(link.href));
      
      const currentSection = sections.reduce((closest, section) => {
        if (!section) return closest;
        
        const sectionTop = section.offsetTop;
        const scrollY = window.scrollY;
        const windowHeight = window.innerHeight;
        
        // Check if the section is in the viewport
        if (
          scrollY >= sectionTop - windowHeight / 3 &&
          scrollY < sectionTop + section.offsetHeight - windowHeight / 3
        ) {
          return section.id;
        }
        
        return closest;
      }, "");
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };
    
    window.addEventListener("scroll", handleScrollSpy);
    // Initial check
    handleScrollSpy();
    
    return () => {
      window.removeEventListener("scroll", handleScrollSpy);
    };
  }, []);

  if (!mounted) return null;

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const navbarVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.4,
        ease: [0.16, 1, 0.3, 1],
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    }
  };
  
  const linkVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <motion.header 
      variants={navbarVariants}
      initial="hidden"
      animate="visible"
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "py-2 te-glass backdrop-blur-md" : "py-4 bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <motion.div 
          variants={linkVariants}
          className="flex items-center"
        >
          <ScrollLink
            to="hero"
            smooth={true}
            duration={500}
            className="text-xl font-bold tracking-tight cursor-pointer text-accent te-switch"
          >
            Darshan Jijhuvadia
          </ScrollLink>
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8 items-center">
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <motion.div
                key={link.name}
                variants={linkVariants}
              >
                <ScrollLink
                  to={link.href}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className={`text-sm font-medium transition-colors cursor-pointer py-1 relative te-link ${
                    activeSection === link.href ? "text-accent" : "hover:text-accent/70"
                  }`}
                  activeClass="text-accent"
                >
                  {link.name}
                  {activeSection === link.href && (
                    <motion.span
                      layoutId="activeNavIndicator"
                      className="absolute -bottom-0.5 left-0 right-0 h-px bg-accent"
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </ScrollLink>
              </motion.div>
            ))}
          </div>
          <motion.button
            variants={linkVariants}
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 rounded-sm border border-border flex items-center justify-center hover:text-accent transition-colors te-switch"
            aria-label="Toggle theme"
            whileTap={{ scale: 0.95 }}
          >
            {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
          </motion.button>
        </div>

        {/* Mobile Navigation Toggle */}
        <div className="flex md:hidden items-center">
          <motion.button
            variants={linkVariants}
            onClick={toggleMenu}
            className="p-2 rounded-sm border border-border flex items-center justify-center te-switch"
            aria-label="Toggle menu"
            whileTap={{ scale: 0.95 }}
          >
            {isOpen ? <X size={16} /> : <Menu size={16} />}
          </motion.button>
        </div>
      </nav>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="md:hidden te-glass backdrop-blur-md"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex flex-col space-y-2 px-4 py-4">
              {navLinks.map((link) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ 
                    duration: 0.3, 
                    ease: [0.16, 1, 0.3, 1],
                    delay: 0.1 * navLinks.indexOf(link)
                  }}
                >
                  <ScrollLink
                    to={link.href}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className={`text-sm font-medium hover:text-accent transition-colors cursor-pointer py-2 border-b border-border te-link ${
                      activeSection === link.href ? "text-accent" : ""
                    }`}
                    activeClass="text-accent"
                    onClick={closeMenu}
                  >
                    {link.name}
                  </ScrollLink>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ 
                  duration: 0.3, 
                  ease: [0.16, 1, 0.3, 1],
                  delay: 0.1 * navLinks.length
                }}
                className="pt-2"
              >
                <button
                  onClick={() => {
                    setTheme(theme === "dark" ? "light" : "dark");
                    closeMenu();
                  }}
                  className="flex items-center space-x-2 text-sm font-medium hover:text-accent transition-colors cursor-pointer py-2 te-switch"
                  aria-label="Toggle theme"
                >
                  {theme === "dark" ? (
                    <>
                      <Sun size={16} />
                      <span className="ml-2">Light Mode</span>
                    </>
                  ) : (
                    <>
                      <Moon size={16} />
                      <span className="ml-2">Dark Mode</span>
                    </>
                  )}
                </button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
} 