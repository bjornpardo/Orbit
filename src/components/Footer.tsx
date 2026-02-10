"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <footer
      ref={ref}
      className="relative py-20 md:py-32 px-6 md:px-12 lg:px-20 border-t border-card-border"
    >
      <div className="absolute top-0 right-20 w-px h-24 bg-gradient-to-b from-accent/30 to-transparent" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1 }}
        className="max-w-4xl"
      >
        <div className="h-2 w-2 bg-accent rotate-45 mb-8" />
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-tight">
          The foundation is built.
          <br />
          <span className="text-accent">It&apos;s time to orbit.</span>
        </h2>
        <p className="text-base text-muted max-w-xl mb-12">
          Orbit Ventures is building the consumer layer on top of
          Teleport&apos;s infrastructure — turning the 3 Powers into a portfolio
          of cross-border ventures across Southeast Asia.
        </p>

        <a
          href="mailto:hello@orbitventures.co"
          className="inline-block text-xs font-mono uppercase tracking-[0.3em] text-accent border border-accent/30 px-8 py-4 hover:bg-accent hover:text-white transition-all duration-300"
        >
          Get in Touch
        </a>
      </motion.div>

      <div className="mt-20 pt-8 border-t border-card-border flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div className="flex items-center gap-3">
          <div className="h-2 w-2 bg-accent rotate-45" />
          <span className="text-xs font-mono uppercase tracking-[0.3em] text-muted">
            Orbit Ventures
          </span>
        </div>
        <div className="flex items-center gap-6">
          <span className="text-xs font-mono text-muted/40">
            A Teleport Venture Studio
          </span>
          <span className="text-xs font-mono text-muted/40">
            &copy; {new Date().getFullYear()}
          </span>
        </div>
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 0.2 } : {}}
        transition={{ duration: 1.5, delay: 0.5 }}
        className="text-xs font-mono text-muted mt-8 tracking-[0.2em] uppercase"
      >
        Doing Risk Responsibly
      </motion.p>
    </footer>
  );
}
