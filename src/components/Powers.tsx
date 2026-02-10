"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const powers = [
  {
    number: "1",
    title: "People",
    description: "World-class tech and marketing. Consumer experience. ID90 network.",
    footer: "Execution power.",
    highlighted: false,
  },
  {
    number: "2",
    title: "Capabilities",
    description:
      "Customs expertise. Regulatory relationships. Last-mile. Fulfillment.",
    footer: "Operational excellence.",
    highlighted: false,
  },
  {
    number: "3",
    title: "The Teleport Network",
    description:
      "AirAsia belly + 3rd party airlines + freighters. 85+ cities.",
    footer: "The ultimate moat.",
    highlighted: true,
  },
];

function PowerCard({
  power,
  index,
}: {
  power: (typeof powers)[0];
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.15, ease: "easeOut" }}
      className={`relative flex flex-col justify-between p-6 md:p-8 min-h-[320px] border ${
        power.highlighted
          ? "bg-accent border-accent text-white"
          : "bg-card border-card-border hover:border-muted/30"
      } transition-all duration-300`}
    >
      <div>
        <span
          className={`text-5xl md:text-6xl font-bold block mb-4 ${
            power.highlighted ? "text-white" : "text-accent"
          }`}
        >
          {power.number}
        </span>
        <h3 className="text-2xl md:text-3xl font-bold mb-6 tracking-tight">
          {power.title}
        </h3>
        <p
          className={`text-sm leading-relaxed ${
            power.highlighted ? "text-white/80" : "text-muted"
          }`}
        >
          {power.description}
        </p>
      </div>

      <div>
        <div
          className={`h-px w-full mb-4 ${
            power.highlighted ? "bg-white/20" : "bg-card-border"
          }`}
        />
        <p
          className={`text-xs italic ${
            power.highlighted ? "text-white/70" : "text-muted/50"
          }`}
        >
          {power.footer}
        </p>
      </div>
    </motion.div>
  );
}

export default function Powers() {
  const headerRef = useRef(null);
  const calloutRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-100px" });
  const isCalloutInView = useInView(calloutRef, { once: true, margin: "-80px" });

  return (
    <section
      id="powers"
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
          02 / Infrastructure
        </span>
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mt-4 tracking-tight">
          The 3 Powers
        </h2>
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="text-base md:text-lg text-muted mb-16 max-w-3xl"
      >
        Teleport&apos;s infrastructure isn&apos;t just assets — it&apos;s{" "}
        <span className="text-accent font-medium">
          three interconnected powers
        </span>{" "}
        that no competitor can replicate.
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-16">
        {powers.map((power, i) => (
          <PowerCard key={power.title} power={power} index={i} />
        ))}
      </div>

      <motion.div
        ref={calloutRef}
        initial={{ opacity: 0, y: 30 }}
        animate={isCalloutInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="relative bg-callout border border-card-border p-6 md:p-8"
      >
        <div className="absolute top-0 left-0 w-1 h-full bg-accent" />
        <p className="text-sm md:text-base leading-relaxed">
          <span className="font-semibold text-white">Combined: </span>
          <span className="text-muted">
            Any startup can build an app. Only Orbit has Teleport&apos;s 3
            Powers from day one — the same advantage Teleport had with AirAsia.
          </span>
        </p>
      </motion.div>
    </section>
  );
}
