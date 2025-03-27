"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode, useRef } from 'react';

interface ScrollContextType {
  scrollY: number;
  scrollDirection: 'up' | 'down' | null;
  isScrolling: boolean;
  isAtTop: boolean;
  isAtBottom: boolean;
}

const ScrollContext = createContext<ScrollContextType>({
  scrollY: 0,
  scrollDirection: null,
  isScrolling: false,
  isAtTop: true,
  isAtBottom: false,
});

export const useScrollAnimation = () => useContext(ScrollContext);

interface ScrollAnimationProviderProps {
  children: ReactNode;
}

export default function ScrollAnimationProvider({ children }: ScrollAnimationProviderProps) {
  const [scrollY, setScrollY] = useState(0);
  const [prevScrollY, setPrevScrollY] = useState(0);
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down' | null>(null);
  const [isScrolling, setIsScrolling] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true);
  const [isAtBottom, setIsAtBottom] = useState(false);
  
  // Use useRef for the scroll timer to preserve it between renders
  const scrollTimerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // Only run on client
    if (typeof window === 'undefined') return;
    
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Update scroll position
      setScrollY(currentScrollY);
      
      // Determine scroll direction
      if (currentScrollY > prevScrollY) {
        setScrollDirection('down');
      } else if (currentScrollY < prevScrollY) {
        setScrollDirection('up');
      }
      
      // Set previous scroll position for next comparison
      setPrevScrollY(currentScrollY);
      
      // Check if at top or bottom
      setIsAtTop(currentScrollY <= 0);
      setIsAtBottom(
        window.innerHeight + currentScrollY >= document.body.offsetHeight - 50
      );
      
      // Set scrolling state
      setIsScrolling(true);
      
      // Clear previous timer
      if (scrollTimerRef.current) {
        clearTimeout(scrollTimerRef.current);
      }
      
      // Set new timer to detect when scrolling stops
      scrollTimerRef.current = setTimeout(() => {
        setIsScrolling(false);
      }, 150);
    };
    
    // Add scroll event listener
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Initial check
    handleScroll();
    
    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimerRef.current) {
        clearTimeout(scrollTimerRef.current);
      }
    };
  }, [prevScrollY]);
  
  const contextValue: ScrollContextType = {
    scrollY,
    scrollDirection,
    isScrolling,
    isAtTop,
    isAtBottom,
  };
  
  return (
    <ScrollContext.Provider value={contextValue}>
      {children}
    </ScrollContext.Provider>
  );
} 