"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const reasons = [
  {
    title: "Now",
    subtitle: "Competitive Window",
    description:
      "No dominant player in premium cross-border SEA. First-mover with the 3 Powers wins.",
    highlighted: true,
  },
  {
    title: "Ready",
    subtitle: "Infrastructure Complete",
    description:
      "People trained. Capabilities proven. The Teleport Network is operational across 85+ cities.",
    highlighted: false,
  },
  {
    title: "Ripe",
    subtitle: "Market Demand",
    description:
      "$120B SEA cross-border market. Platforms focus on China. Premium origins underserved.",
    highlighted: false,
  },
];

function ReasonCard({
  reason,
  index,
}: {
  reason: (typeof reasons)[0];
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.15, ease: "easeOut" }}
      className="relative flex flex-col justify-between p-6 md:p-8 min-h-[260px] bg-[#0d1520] border border-[#1a2535] hover:border-accent/20 transition-colors duration-300"
    >
      <div>
        <h3
          className={`text-3xl md:text-4xl font-bold mb-4 tracking-tight ${
            reason.highlighted ? "text-accent" : "text-white"
          }`}
        >
          {reason.title}
        </h3>
        <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-muted/80 block mb-4">
          {reason.subtitle}
        </span>
        <p className="text-sm leading-relaxed text-muted">{reason.description}</p>
      </div>
    </motion.div>
  );
}

export default function WhyNow() {
  const headerRef = useRef(null);
  const choiceRef = useRef(null);
  const compareRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-100px" });
  const isChoiceInView = useInView(choiceRef, { once: true, margin: "-80px" });
  const isCompareInView = useInView(compareRef, { once: true, margin: "-80px" });

  return (
    <section
      id="why-now"
      className="relative py-24 md:py-32 px-6 md:px-12 lg:px-20"
    >
      <motion.div
        ref={headerRef}
        initial={{ opacity: 0, x: -30 }}
        animate={isHeaderInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="mb-16"
      >
        <span className="text-xs font-mono text-muted/60 uppercase tracking-[0.3em]">
          03 / Timing
        </span>
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mt-4 tracking-tight">
          Why Now?
        </h2>
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="text-base md:text-lg text-muted mb-16 max-w-3xl"
      >
        The 3 Powers are built. The network is flying. The question:{" "}
        <span className="text-accent font-medium">
          who captures the consumer opportunity?
        </span>
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-16">
        {reasons.map((reason, i) => (
          <ReasonCard key={reason.title} reason={reason} index={i} />
        ))}
      </div>

      <motion.div
        ref={choiceRef}
        initial={{ opacity: 0, y: 30, scaleX: 0.95 }}
        animate={isChoiceInView ? { opacity: 1, y: 0, scaleX: 1 } : {}}
        transition={{ duration: 0.8 }}
        className="relative bg-accent p-6 md:p-8 mb-16"
      >
        <p className="text-sm md:text-base leading-relaxed text-white">
          <span className="font-bold">The choice:</span> Activate the 3 Powers
          through Orbit, or watch startups spend years building what Teleport
          already has.
        </p>
      </motion.div>

      <motion.div
        ref={compareRef}
        initial={{ opacity: 0, y: 30 }}
        animate={isCompareInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16"
      >
        <div>
          <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-muted/50 block mb-3">
            Teleport Today
          </span>
          <p className="text-base text-muted">
            &ldquo;Doing Boring Better&rdquo; — B2B logistics excellence
          </p>
        </div>
        <div>
          <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-muted/50 block mb-3">
            Teleport + Orbit
          </span>
          <p className="text-base text-white">
            &ldquo;Doing Risk Responsibly&rdquo; — consumer growth on the same
            foundation
          </p>
        </div>
      </motion.div>
    </section>
  );
}
