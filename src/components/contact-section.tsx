"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
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
        staggerChildren: 0.1,
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

  return (
    <section id="contact" className="py-20 md:py-32 relative">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute right-0 bottom-0 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute left-0 top-0 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-5xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-ibm-bios">
              <span className="neon-text">Get In Touch</span>
            </h2>
            <div className="mt-3 h-1 w-20 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="retro-window">
                <div className="retro-window-header">
                  <span>CONTACT.EXE</span>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold font-ibm-bios mb-4">C:\Let's Connect</h3>
                  <p className="font-ibm-vga mb-6">
                    I'm currently open to new opportunities and collaborations. Whether you have a question
                    or just want to say hi, I'll try my best to get back to you!
                  </p>

                  <div className="space-y-4 mt-8">
                    <a
                      href="mailto:darshanjijhuvadia@gmail.com"
                      className="flex items-center gap-3 retro-terminal p-4 rounded-lg hover:brightness-110 transition-all"
                    >
                      <div className="p-2">
                        <Mail size={24} className="text-green-400" />
                      </div>
                      <div className="font-ibm-vga">
                        <div className="font-medium">Email:</div>
                        <div className="text-sm text-green-400">darshanjijhuvadia@gmail.com</div>
                      </div>
                    </a>

                    <a
                      href="https://github.com/deepjijhuvadia"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 retro-terminal p-4 rounded-lg hover:brightness-110 transition-all"
                    >
                      <div className="p-2">
                        <Github size={24} className="text-green-400" />
                      </div>
                      <div className="font-ibm-vga">
                        <div className="font-medium">GitHub:</div>
                        <div className="text-sm text-green-400">github.com/deepjijhuvadia</div>
                      </div>
                    </a>

                    <a
                      href="https://www.linkedin.com/in/darshan-jijhuvadia/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 retro-terminal p-4 rounded-lg hover:brightness-110 transition-all"
                    >
                      <div className="p-2">
                        <Linkedin size={24} className="text-green-400" />
                      </div>
                      <div className="font-ibm-vga">
                        <div className="font-medium">LinkedIn:</div>
                        <div className="text-sm text-green-400">linkedin.com/in/darshan-jijhuvadia</div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <div className="retro-window">
                <div className="retro-window-header">
                  <span>MESSAGE.TXT</span>
                </div>
                <div className="p-6">
                  <form onSubmit={handleSubmit} className="space-y-5 font-ibm-vga">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        C:\{'>'}Enter Your Name:
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 retro-terminal font-ibm-vga focus:ring-2 focus:ring-cyan-500 focus:outline-none"
                        disabled={formStatus === "submitting" || formStatus === "success"}
                        suppressHydrationWarning
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        C:\{'>'}Enter Email Address:
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formState.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 retro-terminal font-ibm-vga focus:ring-2 focus:ring-cyan-500 focus:outline-none"
                        disabled={formStatus === "submitting" || formStatus === "success"}
                        suppressHydrationWarning
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-2">
                        C:\{'>'}Enter Message:
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formState.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-4 py-3 retro-terminal font-ibm-vga focus:ring-2 focus:ring-cyan-500 focus:outline-none"
                        disabled={formStatus === "submitting" || formStatus === "success"}
                        suppressHydrationWarning
                      />
                    </div>

                    {formStatus === "success" && (
                      <div className="flex items-center gap-2 text-green-500 bg-green-500/10 p-3 rounded-lg font-ibm-vga">
                        <CheckCircle size={18} />
                        <span>C:\{'>'}Message sent successfully! I'll get back to you soon.</span>
                      </div>
                    )}

                    {formStatus === "error" && (
                      <div className="flex items-center gap-2 text-red-500 bg-red-500/10 p-3 rounded-lg font-ibm-vga">
                        <AlertCircle size={18} />
                        <span>C:\{'>'}ERROR! Something went wrong. Please try again later.</span>
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={formStatus === "submitting" || formStatus === "success"}
                      className={`w-full py-3 px-4 rounded-lg flex items-center justify-center gap-2 ${
                        formStatus === "success"
                          ? "bg-green-500 text-white"
                          : "retro-terminal font-ibm-bios hover:brightness-110"
                      } transition-all`}
                      suppressHydrationWarning
                    >
                      {formStatus === "submitting" ? (
                        <>
                          <div className="animate-spin h-5 w-5 border-2 border-green-400 border-t-transparent rounded-full" />
                          <span>C:\{'>'}SENDING...</span>
                        </>
                      ) : formStatus === "success" ? (
                        <>
                          <CheckCircle size={18} />
                          <span>C:\{'>'}MESSAGE DELIVERED</span>
                        </>
                      ) : (
                        <>
                          <Send size={18} />
                          <span>C:\{'>'}SEND_MESSAGE.EXE</span>
                        </>
                      )}
                    </button>
                  </form>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 