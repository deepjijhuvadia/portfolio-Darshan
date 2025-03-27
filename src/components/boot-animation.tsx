"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

export default function BootAnimation() {
  const [bootStage, setBootStage] = useState<number>(0);
  const [isComplete, setIsComplete] = useState<boolean>(false);
  const [showCursor, setShowCursor] = useState<boolean>(false);

  // Check if boot animation was already displayed
  useEffect(() => {
    const hasBooted = sessionStorage.getItem("hasBooted");
    if (hasBooted) {
      setIsComplete(true);
      return;
    }

    // Boot sequence timer
    const bootSequence = async () => {
      await new Promise((resolve) => setTimeout(resolve, 300));
      setBootStage(1);
      
      await new Promise((resolve) => setTimeout(resolve, 800));
      setShowCursor(true);
      
      await new Promise((resolve) => setTimeout(resolve, 400));
      setBootStage(2);
      
      await new Promise((resolve) => setTimeout(resolve, 800));
      setBootStage(3);
      
      await new Promise((resolve) => setTimeout(resolve, 600));
      setBootStage(4);
      
      await new Promise((resolve) => setTimeout(resolve, 800));
      setBootStage(5);
      
      await new Promise((resolve) => setTimeout(resolve, 800));
      sessionStorage.setItem("hasBooted", "true");
      setIsComplete(true);
    };

    bootSequence();
  }, []);

  if (isComplete) {
    return null;
  }

  return (
    <AnimatePresence>
      {!isComplete && (
        <motion.div
          className="fixed inset-0 bg-black z-50 flex items-center justify-center"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          <div className="font-ibm text-primary w-full max-w-xl mx-auto p-6 te-boot">
            {bootStage >= 1 && (
              <div className="mb-6">
                <div className="flex">
                  <span className="text-accent">J.A.R.V.I.S</span>
                  <span className="mx-2">:</span>
                  <span>Initializing System for Darshan</span>
                  {showCursor && (
                    <span className="animate-[cursor-blink_1s_infinite]">█</span>
                  )}
                </div>
              </div>
            )}

            {bootStage >= 2 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="mb-6"
              >
                <div className="flex">
                  <span className="text-accent">DISPLAY</span>
                  <span className="mx-2">:</span>
                  <span>Minimal Interface Activated</span>
                </div>

                <div className="mt-1 ml-6 text-primary/70 text-sm">
                  &gt; <TypeAnimation
                      sequence={["Genius, Billionaire, Developer Mode: ENABLED", 500]}
                      wrapper="span"
                      speed={80}
                      cursor={false}
                    />
                </div>
                <div className="mt-1 ml-6 text-primary/70 text-sm">
                  &gt; <TypeAnimation
                      sequence={[
                        800,
                        "Interface style: STARK MINIMALISM"
                      ]}
                      wrapper="span"
                      speed={80}
                      cursor={false}
                    />
                </div>
              </motion.div>
            )}

            {bootStage >= 3 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="mb-6"
              >
                <div className="flex">
                  <span className="text-accent">MEMORY</span>
                  <span className="mx-2">:</span>
                  <span>Portfolio Data Synced</span>
                </div>
                <div className="mt-1 ml-6 text-primary/70 text-sm">
                  &gt; <TypeAnimation
                      sequence={["Projects: Online", 300]}
                      wrapper="span"
                      speed={80}
                      cursor={false}
                    />
                </div>
                <div className="mt-1 ml-6 text-primary/70 text-sm">
                  &gt; <TypeAnimation
                      sequence={[
                        600,
                        "Experience: Verified"
                      ]}
                      wrapper="span"
                      speed={80}
                      cursor={false}
                    />
                </div>
                <div className="mt-1 ml-6 text-primary/70 text-sm">
                  &gt; <TypeAnimation
                      sequence={[
                        900,
                        "Skills: Optimized"
                      ]}
                      wrapper="span"
                      speed={80}
                      cursor={false}
                    />
                </div>
              </motion.div>
            )}
            
            {bootStage >= 4 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="mb-6"
              >
                <div className="flex">
                  <span className="text-accent">J.A.R.V.I.S</span>
                  <span className="mx-2">:</span>
                  <TypeAnimation
                    sequence={["All Systems Functional", 300]}
                    wrapper="span"
                    speed={50}
                    cursor={false}
                  />
                </div>
                <div className="mt-1 ml-6 text-primary/70 text-sm">
                  &gt; <TypeAnimation
                      sequence={[
                        500,
                        "Welcome back, Darshan."
                      ]}
                      wrapper="span"
                      speed={80}
                      cursor={false}
                    />
                </div>
              </motion.div>
            )}

            {bootStage >= 5 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="text-accent font-bold"
              >
                <div className="flex">
                  <TypeAnimation
                    sequence={["SYSTEM READY", 300]}
                    wrapper="span"
                    speed={50}
                    cursor={false}
                  />
                  <span className="ml-2 animate-[cursor-blink_1s_infinite]">█</span>
                </div>
              </motion.div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
} 