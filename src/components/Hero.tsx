"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-between px-6 md:px-12 lg:px-20 pt-24 pb-8 overflow-hidden">
      {/* Background geometric elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-1/3 h-full border-l border-card-border/30" />
        <div className="absolute top-1/2 left-0 right-0 h-px bg-card-border/20" />
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.05 }}
          transition={{ duration: 2, ease: "easeOut", delay: 1 }}
          className="absolute -right-32 top-1/4 w-96 h-96 border border-accent/20 rotate-45"
        />
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.03 }}
          transition={{ duration: 2.5, ease: "easeOut", delay: 1.5 }}
          className="absolute -right-16 top-1/4 w-96 h-96 border border-accent/10 rotate-45 translate-x-8 translate-y-8"
        />
      </div>

      {/* Top label */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <span className="text-xs md:text-sm font-mono uppercase tracking-[0.3em] text-accent">
          A Teleport Venture Studio
        </span>
      </motion.div>

      {/* Main content */}
      <div className="flex-1 flex flex-col justify-center max-w-5xl">
        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-[clamp(3.5rem,12vw,11rem)] font-bold leading-[0.9] tracking-[-0.04em] mb-8"
        >
          <span className="block">Orbit</span>
          <span className="block">Ventures</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="max-w-2xl"
        >
          <p className="text-lg md:text-xl text-muted leading-relaxed italic">
            Building the next satisfying chapter on Teleport&apos;s foundation.
          </p>
        </motion.div>
      </div>

      {/* Bottom bar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="flex justify-between items-end"
      >
        <span className="text-xs font-mono text-muted/50 tracking-[0.2em] uppercase">
          Doing Risk Responsibly
        </span>
        <span className="text-xs font-mono text-muted/50">2025</span>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-px h-8 bg-gradient-to-b from-transparent to-muted/50"
        />
      </motion.div>
    </section>
  );
}
