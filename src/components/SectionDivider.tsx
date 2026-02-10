"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function SectionDivider() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div ref={ref} className="relative h-px mx-6 md:mx-12 lg:mx-20">
      <motion.div
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
        transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="absolute inset-0 bg-gradient-to-r from-card-border via-card-border/50 to-transparent origin-left"
      />
    </div>
  );
}
