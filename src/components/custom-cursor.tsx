"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only run on client
    if (typeof window === 'undefined') return;

    // Show cursor after a brief delay to prevent flash on initial load
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, 1000);
    
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const updateCursorType = () => {
      const hoveredElement = document.elementFromPoint(mousePosition.x, mousePosition.y);
      const cursorStyle = hoveredElement ? window.getComputedStyle(hoveredElement).cursor : 'auto';
      setIsPointer(cursorStyle === 'pointer');
    };

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mousemove', updateCursorType);
    
    // Hide default cursor
    document.body.style.cursor = 'none';
    
    return () => {
      clearTimeout(timeout);
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mousemove', updateCursorType);
      document.body.style.cursor = 'auto';
    };
  }, [mousePosition.x, mousePosition.y]);
  
  // Don't render on server
  if (typeof window === 'undefined') return null;
  
  return (
    <>
      {isVisible && (
        <>
          {/* Outer circle */}
          <motion.div
            className="fixed pointer-events-none z-50 rounded-full border border-accent/30 mix-blend-difference"
            animate={{
              x: mousePosition.x - 24,
              y: mousePosition.y - 24,
              scale: isPointer ? 1.5 : 1,
              opacity: 0.8,
            }}
            transition={{
              type: "spring",
              mass: 0.3,
              stiffness: 100,
              damping: 10,
              ease: "easeOut",
            }}
            style={{
              width: '48px',
              height: '48px',
            }}
          />
          
          {/* Inner dot */}
          <motion.div
            className="fixed pointer-events-none z-50 rounded-full bg-accent mix-blend-difference"
            animate={{
              x: mousePosition.x - 4,
              y: mousePosition.y - 4,
              scale: isPointer ? 1.2 : 1,
            }}
            transition={{
              type: "spring",
              mass: 0.1,
              stiffness: 200,
              damping: 10,
              ease: "easeOut",
            }}
            style={{
              width: '8px',
              height: '8px',
            }}
          />
        </>
      )}
    </>
  );
} 