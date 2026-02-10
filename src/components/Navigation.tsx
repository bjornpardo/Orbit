"use client";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";

const navLinks = [
  { label: "Pattern", href: "#pattern" },
  { label: "Infrastructure", href: "#powers" },
  { label: "Timing", href: "#why-now" },
  { label: "Opportunity", href: "#opportunity" },
];

export default function Navigation() {
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
    setScrolled(latest > 50);
  });

  return (
    <motion.nav
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-black/90 backdrop-blur-sm" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-12">
        <a href="#" className="group flex items-center gap-3">
          <div className="h-3 w-3 bg-accent rotate-45 transition-transform group-hover:rotate-[135deg]" />
          <span className="text-xs font-mono uppercase tracking-[0.3em] text-muted group-hover:text-white transition-colors">
            Orbit
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs font-mono uppercase tracking-[0.2em] text-muted hover:text-white transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="#opportunity"
          className="text-xs font-mono uppercase tracking-[0.2em] text-accent hover:text-white transition-colors border border-accent/30 px-4 py-2 hover:border-accent"
        >
          Learn More
        </a>
      </div>
    </motion.nav>
  );
}
