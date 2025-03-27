"use client";

import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';

export default function WebGLBackground() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const [isMounted, setIsMounted] = useState(false);
  
  useEffect(() => {
    setIsMounted(true);
  }, []);
  
  if (!isMounted) {
    return null;
  }
  
  return (
    <div className="fixed inset-0 -z-10">
      <div 
        className="w-full h-full"
        style={{ 
          background: isDark ? '#000000' : '#FFFFFF',
        }}
      >
        {/* Minimal grid lines */}
        <div className="absolute inset-0 overflow-hidden opacity-5">
          {/* Horizontal lines */}
          {Array.from({ length: 20 }).map((_, i) => (
            <div 
              key={`h-${i}`} 
              className="absolute h-px w-full bg-accent"
              style={{ top: `${(i + 1) * 5}%` }}
            />
          ))}
          
          {/* Vertical lines */}
          {Array.from({ length: 20 }).map((_, i) => (
            <div 
              key={`v-${i}`} 
              className="absolute w-px h-full bg-accent"
              style={{ left: `${(i + 1) * 5}%` }}
            />
          ))}
        </div>
        
        {/* Minimal accent elements */}
        <div className="absolute top-[15%] left-[10%] w-1 h-20 bg-accent/10"></div>
        <div className="absolute bottom-[25%] right-[15%] w-20 h-1 bg-accent/10"></div>
        <div className="absolute top-[40%] right-[30%] w-2 h-2 bg-accent/20"></div>
        <div className="absolute bottom-[10%] left-[25%] w-2 h-2 bg-accent/20"></div>
        
        {/* Corner accent */}
        <div className="absolute top-0 left-0 w-20 h-px bg-accent/30"></div>
        <div className="absolute top-0 left-0 w-px h-20 bg-accent/30"></div>
        
        <div className="absolute bottom-0 right-0 w-20 h-px bg-accent/30"></div>
        <div className="absolute bottom-0 right-0 w-px h-20 bg-accent/30"></div>
      </div>
    </div>
  );
} 