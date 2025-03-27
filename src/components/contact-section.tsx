"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Mail, Github, Linkedin, Send, CheckCircle, AlertCircle } from "lucide-react";

export default function ContactSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("submitting");

    try {
      // In a real implementation, you would call an API endpoint here
      // For demo purposes we'll just simulate a successful submission
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setFormStatus("success");
      setFormState({ name: "", email: "", message: "" });
    } catch (error) {
      setFormStatus("error");
      console.error("Error submitting form:", error);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  const linkVariants = {
    initial: { 
      x: 0,
      backgroundColor: "transparent",
    },
    hover: { 
      x: 5,
      backgroundColor: "rgba(255, 92, 0, 0.05)",
      transition: { 
        duration: 0.2,
        ease: "easeOut",
      }
    }
  };

  const iconMotion = {
    initial: { scale: 1 },
    hover: { 
      scale: 1.15,
      transition: { 
        type: "spring",
        stiffness: 500,
        damping: 15
      }
    }
  };

  return (
    <section id="contact" className="py-20 md:py-32 relative">
      {/* Minimal background accent */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute right-0 bottom-0 w-full h-px bg-accent/10"></div>
      </div>

      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto"
        >
          <motion.div 
            variants={itemVariants} 
            className="text-center mb-16"
            whileInView={{ 
              opacity: [0.5, 1],
              y: [10, 0],
              transition: { duration: 0.5 }
            }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="text-2xl md:text-3xl font-bold font-ibm te-crt-distortion">
              Get In Touch
            </h2>
            <motion.div 
              className="mt-3 h-px w-16 bg-accent mx-auto"
              initial={{ width: 0 }}
              whileInView={{ width: "4rem" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            ></motion.div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div 
              variants={itemVariants} 
              className="space-y-6"
            >
              <motion.div 
                className="te-card h-full"
                whileHover={{ 
                  y: -5,
                  transition: { duration: 0.2 }
                }}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ 
                  opacity: 1, 
                  x: 0,
                  transition: { duration: 0.5 }
                }}
                viewport={{ once: true }}
              >
                <motion.h3 
                  className="text-xl font-bold font-ibm mb-4 border-b border-border pb-2"
                  initial={{ opacity: 0 }}
                  whileInView={{ 
                    opacity: 1,
                    transition: { duration: 0.5, delay: 0.2 }
                  }}
                  viewport={{ once: true }}
                >
                  Contact Info
                </motion.h3>

                <div className="space-y-5 mt-2">
                  <motion.a
                    href="mailto:darshanjijhuvadia@gmail.com"
                    className="flex items-center gap-3 p-2 rounded-sm transition-colors"
                    variants={linkVariants}
                    initial="initial"
                    whileHover="hover"
                    onHoverStart={() => setHoveredLink("email")}
                    onHoverEnd={() => setHoveredLink(null)}
                    whileTap={{ scale: 0.98 }}
                  >
                    <motion.div
                      variants={iconMotion}
                      animate={hoveredLink === "email" ? "hover" : "initial"}
                    >
                      <Mail size={18} className="text-accent" />
                    </motion.div>
                    <div>
                      <div className="text-sm font-medium">Email</div>
                      <div className="text-xs text-foreground/70">darshanjijhuvadia@gmail.com</div>
                    </div>
                  </motion.a>

                  <motion.a
                    href="https://github.com/deepjijhuvadia"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-2 rounded-sm transition-colors"
                    variants={linkVariants}
                    initial="initial"
                    whileHover="hover"
                    onHoverStart={() => setHoveredLink("github")}
                    onHoverEnd={() => setHoveredLink(null)}
                    whileTap={{ scale: 0.98 }}
                  >
                    <motion.div
                      variants={iconMotion}
                      animate={hoveredLink === "github" ? "hover" : "initial"}
                    >
                      <Github size={18} className="text-accent" />
                    </motion.div>
                    <div>
                      <div className="text-sm font-medium">GitHub</div>
                      <div className="text-xs text-foreground/70">github.com/deepjijhuvadia</div>
                    </div>
                  </motion.a>

                  <motion.a
                    href="https://www.linkedin.com/in/darshan-jijhuvadia/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-2 rounded-sm transition-colors"
                    variants={linkVariants}
                    initial="initial"
                    whileHover="hover"
                    onHoverStart={() => setHoveredLink("linkedin")}
                    onHoverEnd={() => setHoveredLink(null)}
                    whileTap={{ scale: 0.98 }}
                  >
                    <motion.div
                      variants={iconMotion}
                      animate={hoveredLink === "linkedin" ? "hover" : "initial"}
                    >
                      <Linkedin size={18} className="text-accent" />
                    </motion.div>
                    <div>
                      <div className="text-sm font-medium">LinkedIn</div>
                      <div className="text-xs text-foreground/70">linkedin.com/in/darshan-jijhuvadia</div>
                    </div>
                  </motion.a>
                </div>
              </motion.div>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ 
                opacity: 1, 
                x: 0,
                transition: { duration: 0.5, delay: 0.2 }
              }}
              viewport={{ once: true }}
            >
              <motion.div 
                className="te-card te-scanlines h-full"
                whileHover={{ 
                  y: -5,
                  transition: { duration: 0.2 }
                }}
              >
                <motion.h3 
                  className="text-xl font-bold font-ibm mb-4 border-b border-border pb-2"
                  initial={{ opacity: 0 }}
                  whileInView={{ 
                    opacity: 1,
                    transition: { duration: 0.5, delay: 0.3 }
                  }}
                  viewport={{ once: true }}
                >
                  Send Message
                </motion.h3>
                
                <form onSubmit={handleSubmit} className="space-y-4 font-ibm" suppressHydrationWarning>
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ 
                      opacity: 1, 
                      y: 0,
                      transition: { duration: 0.4, delay: 0.4 }
                    }}
                    viewport={{ once: true }}
                  >
                    <label htmlFor="name" className="block text-xs font-medium mb-1">
                      Name
                    </label>
                    <motion.input
                      whileFocus={{ 
                        boxShadow: "0 0 0 2px rgba(255, 92, 0, 0.2)",
                        borderColor: "hsl(var(--accent))"
                      }}
                      type="text"
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 bg-background border border-border focus:outline-none text-sm transition-colors"
                      disabled={formStatus === "submitting" || formStatus === "success"}
                      suppressHydrationWarning
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ 
                      opacity: 1, 
                      y: 0,
                      transition: { duration: 0.4, delay: 0.5 }
                    }}
                    viewport={{ once: true }}
                  >
                    <label htmlFor="email" className="block text-xs font-medium mb-1">
                      Email Address
                    </label>
                    <motion.input
                      whileFocus={{ 
                        boxShadow: "0 0 0 2px rgba(255, 92, 0, 0.2)",
                        borderColor: "hsl(var(--accent))"
                      }}
                      type="email"
                      id="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 bg-background border border-border focus:outline-none text-sm transition-colors"
                      disabled={formStatus === "submitting" || formStatus === "success"}
                      suppressHydrationWarning
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ 
                      opacity: 1, 
                      y: 0,
                      transition: { duration: 0.4, delay: 0.6 }
                    }}
                    viewport={{ once: true }}
                  >
                    <label htmlFor="message" className="block text-xs font-medium mb-1">
                      Message
                    </label>
                    <motion.textarea
                      whileFocus={{ 
                        boxShadow: "0 0 0 2px rgba(255, 92, 0, 0.2)",
                        borderColor: "hsl(var(--accent))"
                      }}
                      id="message"
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="w-full px-3 py-2 bg-background border border-border focus:outline-none text-sm transition-colors"
                      disabled={formStatus === "submitting" || formStatus === "success"}
                      suppressHydrationWarning
                    ></motion.textarea>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ 
                      opacity: 1, 
                      y: 0,
                      transition: { duration: 0.4, delay: 0.7 }
                    }}
                    viewport={{ once: true }}
                  >
                    <motion.button
                      type="submit"
                      disabled={formStatus === "submitting" || formStatus === "success"}
                      className={`te-button-filled w-full flex items-center justify-center gap-2 te-button-glow ${
                        formStatus === "submitting" ? "opacity-70" : ""
                      }`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      suppressHydrationWarning
                    >
                      <AnimatePresence mode="wait">
                        {formStatus === "idle" && (
                          <motion.div 
                            className="flex items-center gap-2"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                          >
                            <span>Send Message</span>
                            <Send size={14} />
                          </motion.div>
                        )}
                        {formStatus === "submitting" && (
                          <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                          >
                            <motion.span
                              animate={{
                                opacity: [1, 0.5, 1],
                              }}
                              transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                ease: "easeInOut",
                              }}
                            >
                              Sending...
                            </motion.span>
                          </motion.div>
                        )}
                        {formStatus === "success" && (
                          <motion.div 
                            className="flex items-center gap-2"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0 }}
                          >
                            <span>Message Sent</span>
                            <CheckCircle size={14} />
                          </motion.div>
                        )}
                        {formStatus === "error" && (
                          <motion.div 
                            className="flex items-center gap-2"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                          >
                            <span>Try Again</span>
                            <AlertCircle size={14} />
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.button>
                  </motion.div>

                  <AnimatePresence>
                    {formStatus === "success" && (
                      <motion.div 
                        className="text-xs text-accent mt-2 text-center"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.5 }}
                      >
                        Thank you for your message! I&apos;ll get back to you soon.
                      </motion.div>
                    )}

                    {formStatus === "error" && (
                      <motion.div 
                        className="text-xs text-red-500 mt-2 text-center"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.5 }}
                      >
                        There was an error sending your message. Please try again.
                      </motion.div>
                    )}
                  </AnimatePresence>
                </form>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 