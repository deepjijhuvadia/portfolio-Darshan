"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { useMotionValue, useSpring } from "framer-motion";

type ScrollContext = {
  scrollY: number;
  scrollYProgress: number;
  scrollDirection: "up" | "down" | null;
  scrollVelocity: number;
};

const ScrollAnimationContext = createContext<ScrollContext>({
  scrollY: 0,
  scrollYProgress: 0,
  scrollDirection: null,
  scrollVelocity: 0,
});

export const useScrollAnimation = () => useContext(ScrollAnimationContext);

export default function ScrollAnimationProvider({ children }: { children: ReactNode }) {
  const [scrollY, setScrollY] = useState(0);
  const [scrollYProgress, setScrollYProgress] = useState(0);
  const [prevScrollY, setPrevScrollY] = useState(0);
  const [scrollDirection, setScrollDirection] = useState<"up" | "down" | null>(null);
  
  const scrollVelocityMotionValue = useMotionValue(0);
  const scrollVelocity = useSpring(scrollVelocityMotionValue, {
    damping: 50,
    stiffness: 400
  });

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const maxScroll = document.body.scrollHeight - window.innerHeight;
      const progress = maxScroll > 0 ? currentScrollY / maxScroll : 0;
      
      // Calculate velocity
      const velocityValue = Math.abs(currentScrollY - prevScrollY);
      scrollVelocityMotionValue.set(velocityValue);
      
      // Determine scroll direction
      if (currentScrollY > prevScrollY) {
        setScrollDirection("down");
      } else if (currentScrollY < prevScrollY) {
        setScrollDirection("up");
      }
      
      setScrollY(currentScrollY);
      setScrollYProgress(progress);
      setPrevScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    
    // Initialize
    handleScroll();
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollY, scrollVelocityMotionValue]);

  return (
    <ScrollAnimationContext.Provider
      value={{
        scrollY,
        scrollYProgress,
        scrollDirection,
        scrollVelocity: scrollVelocity.get(),
      }}
    >
      {children}
    </ScrollAnimationContext.Provider>
  );
} 