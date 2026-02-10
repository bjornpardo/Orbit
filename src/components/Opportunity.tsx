"use client";

import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const stats = [
  {
    value: 120,
    prefix: "$",
    suffix: "B",
    label: "SEA Cross-Border",
    sublabel: "Growing 25%+ annually",
    highlighted: true,
  },
  {
    value: 85,
    prefix: "",
    suffix: "+",
    label: "Network Cities",
    sublabel: "The Teleport Network reach",
    highlighted: false,
  },
  {
    value: 63,
    prefix: "",
    suffix: "M+",
    label: "Captive Audience",
    sublabel: "AirAsia pax + shippers",
    highlighted: false,
  },
];

function AnimatedCounter({
  value,
  prefix,
  suffix,
  isInView,
}: {
  value: number;
  prefix: string;
  suffix: string;
  isInView: boolean;
}) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, value, {
        duration: 2,
        ease: "easeOut",
      });
      return controls.stop;
    }
  }, [isInView, value, count]);

  useEffect(() => {
    const unsubscribe = rounded.on("change", (v) => setDisplay(v));
    return unsubscribe;
  }, [rounded]);

  return (
    <span>
      {prefix}
      {display}
      {suffix}
    </span>
  );
}

export default function Opportunity() {
  const headerRef = useRef(null);
  const statsRef = useRef(null);
  const gapRef = useRef(null);
  const positionRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-100px" });
  const isStatsInView = useInView(statsRef, { once: true, margin: "-80px" });
  const isGapInView = useInView(gapRef, { once: true, margin: "-80px" });
  const isPositionInView = useInView(positionRef, { once: true, margin: "-80px" });

  return (
    <section
      id="opportunity"
      className="relative py-24 md:py-32 px-6 md:px-12 lg:px-20"
    >
      <motion.div
        ref={headerRef}
        initial={{ opacity: 0, x: -30 }}
        animate={isHeaderInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="mb-20"
      >
        <span className="text-xs font-mono text-muted/60 uppercase tracking-[0.3em]">
          04 / Market Context
        </span>
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mt-4 tracking-tight">
          The Opportunity
        </h2>
      </motion.div>

      <div
        ref={statsRef}
        className="grid grid-cols-1 md:grid-cols-3 gap-0 mb-16 border border-card-border divide-y md:divide-y-0 md:divide-x divide-card-border"
      >
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 40 }}
            animate={isStatsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: i * 0.15 }}
            className="p-8 md:p-10"
          >
            <div
              className={`text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4 ${
                stat.highlighted ? "text-accent" : "text-white"
              }`}
            >
              <AnimatedCounter
                value={stat.value}
                prefix={stat.prefix}
                suffix={stat.suffix}
                isInView={isStatsInView}
              />
            </div>
            <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-white block mb-2">
              {stat.label}
            </span>
            <span className="text-xs text-muted">{stat.sublabel}</span>
          </motion.div>
        ))}
      </div>

      <motion.div
        ref={gapRef}
        initial={{ opacity: 0, y: 30 }}
        animate={isGapInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="relative bg-callout border border-card-border p-6 md:p-8 mb-6"
      >
        <div className="absolute top-0 left-0 w-1 h-full bg-accent" />
        <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-accent block mb-3">
          The Gap
        </span>
        <p className="text-sm md:text-base leading-relaxed text-muted">
          Major platforms optimize for China. Premium origins (Japan, Korea,
          Australia) and intra-SEA trade remain underserved. The Teleport Network
          can serve these routes profitably — with higher yields and better load
          factors.
        </p>
      </motion.div>

      <motion.div
        ref={positionRef}
        initial={{ opacity: 0, y: 30 }}
        animate={isPositionInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="relative bg-accent p-6 md:p-8"
      >
        <p className="text-sm md:text-base leading-relaxed text-white">
          <span className="font-bold">Orbit&apos;s position:</span> The only
          player that can combine the 3 Powers — People, Capabilities, and The
          Teleport Network — from day one.
        </p>
      </motion.div>
    </section>
  );
}
