"use client";

import React, { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import { useTheme } from "next-themes";
import { Sun, Moon, Menu, X } from "lucide-react";

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

  // After mounting, we can access the theme
  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!mounted) return null;

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? "py-2 glass shadow-md" : "py-4 bg-transparent"
    }`}>
      <nav className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <div className="flex items-center">
          <ScrollLink
            to="hero"
            smooth={true}
            duration={500}
            className="text-2xl font-bold tracking-tight cursor-pointer neon-text"
          >
            Darshan Jijhuvadia
          </ScrollLink>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8 items-center">
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <ScrollLink
                key={link.name}
                to={link.href}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="text-sm font-medium hover:text-cyan-400 transition-colors cursor-pointer"
                activeClass="text-cyan-400"
              >
                {link.name}
              </ScrollLink>
            ))}
          </div>
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 rounded-full glass-card flex items-center justify-center hover:text-cyan-400 transition-colors"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>

        {/* Mobile Navigation Toggle */}
        <div className="flex md:hidden items-center">
          <button
            onClick={toggleMenu}
            className="p-2 rounded-full glass-card flex items-center justify-center"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden glass">
          <div className="flex flex-col space-y-4 px-4 py-6">
            {navLinks.map((link) => (
              <ScrollLink
                key={link.name}
                to={link.href}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="text-sm font-medium hover:text-cyan-400 transition-colors cursor-pointer py-2"
                activeClass="text-cyan-400"
                onClick={closeMenu}
              >
                {link.name}
              </ScrollLink>
            ))}
            <div className="pt-4 border-t border-white/10">
              <button
                onClick={() => {
                  setTheme(theme === "dark" ? "light" : "dark");
                  closeMenu();
                }}
                className="flex items-center space-x-2 text-sm font-medium hover:text-cyan-400 transition-colors cursor-pointer py-2"
                aria-label="Toggle theme"
              >
                {theme === "dark" ? (
                  <>
                    <Sun size={16} />
                    <span>Light Mode</span>
                  </>
                ) : (
                  <>
                    <Moon size={16} />
                    <span>Dark Mode</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
} 