"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const chapters = [
  {
    number: "Chapter 1",
    title: "AirAsia",
    description: "Low-cost airline creates massive belly capacity across SEA.",
    footer: "The foundation was laid.",
    highlighted: false,
  },
  {
    number: "Chapter 2",
    title: "Teleport",
    description:
      "Built a logistics empire on AirAsia's network. 85+ cities. B2B excellence.",
    footer: "A successful business emerged.",
    highlighted: false,
  },
  {
    number: "Chapter 3",
    title: "Orbit",
    description:
      "Consumer ventures built on Teleport's 3 Powers. eCommerce. Cross-border.",
    footer: "Multiple businesses can emerge.",
    highlighted: true,
  },
];

function ChapterCard({
  chapter,
  index,
}: {
  chapter: (typeof chapters)[0];
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50, rotateX: 5 }}
      animate={
        isInView ? { opacity: 1, y: 0, rotateX: 0 } : { opacity: 0, y: 50 }
      }
      transition={{ duration: 0.8, delay: index * 0.15, ease: "easeOut" }}
      className={`relative flex flex-col justify-between p-6 md:p-8 min-h-[300px] border ${
        chapter.highlighted
          ? "bg-accent border-accent text-white"
          : "bg-card border-card-border hover:border-muted/30"
      } transition-colors duration-300 group`}
    >
      {/* Top accent line */}
      <div
        className={`absolute top-0 left-0 right-0 h-px ${
          chapter.highlighted ? "bg-white/20" : "bg-card-border"
        }`}
      />

      <div>
        <span
          className={`text-[10px] font-mono uppercase tracking-[0.3em] ${
            chapter.highlighted ? "text-white/60" : "text-muted/60"
          }`}
        >
          {chapter.number}
        </span>
        <h3 className="text-3xl md:text-4xl font-bold mt-4 mb-6 tracking-tight">
          {chapter.title}
        </h3>
        <p
          className={`text-sm leading-relaxed ${
            chapter.highlighted ? "text-white/80" : "text-muted"
          }`}
        >
          {chapter.description}
        </p>
      </div>

      <div>
        <div
          className={`h-px w-full mb-4 ${
            chapter.highlighted ? "bg-white/20" : "bg-card-border"
          }`}
        />
        <p
          className={`text-xs italic ${
            chapter.highlighted ? "text-white/60" : "text-muted/50"
          }`}
        >
          {chapter.footer}
        </p>
      </div>
    </motion.div>
  );
}

export default function Pattern() {
  const headerRef = useRef(null);
  const insightRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-100px" });
  const isInsightInView = useInView(insightRef, {
    once: true,
    margin: "-80px",
  });

  return (
    <section
      id="pattern"
      className="relative py-24 md:py-32 px-6 md:px-12 lg:px-20"
    >
      {/* Section header */}
      <motion.div
        ref={headerRef}
        initial={{ opacity: 0, x: -30 }}
        animate={isHeaderInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="mb-16"
      >
        <span className="text-xs font-mono text-muted/60 uppercase tracking-[0.3em]">
          01 / The Pattern
        </span>
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mt-4 tracking-tight">
          Foundations Create
          <br />
          Empires
        </h2>
      </motion.div>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="text-base md:text-lg text-muted mb-16 max-w-3xl"
      >
        AirAsia was the foundation that Teleport was built on.{" "}
        <span className="text-accent font-medium">
          Teleport is now the foundation for the next chapter.
        </span>
      </motion.p>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-16">
        {chapters.map((chapter, i) => (
          <ChapterCard key={chapter.title} chapter={chapter} index={i} />
        ))}
      </div>

      {/* Insight callout */}
      <motion.div
        ref={insightRef}
        initial={{ opacity: 0, y: 30 }}
        animate={isInsightInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="relative bg-callout border border-card-border p-6 md:p-8"
      >
        <div className="absolute top-0 left-0 w-1 h-full bg-accent" />
        <p className="text-sm md:text-base leading-relaxed">
          <span className="text-accent font-semibold">The insight: </span>
          <span className="text-muted">
            Teleport has reached the same inflection point AirAsia was at when
            Teleport began. The 3 Powers are in place. It&apos;s time to build.
          </span>
        </p>
      </motion.div>

      {/* Bottom note */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={isInsightInView ? { opacity: 1 } : {}}
        transition={{ duration: 1, delay: 0.5 }}
        className="text-sm text-muted/50 italic mt-12 max-w-4xl"
      >
        Just as Teleport transformed AirAsia&apos;s capacity into a logistics
        powerhouse, Orbit will transform Teleport&apos;s 3 Powers into consumer
        ventures.
      </motion.p>
    </section>
  );
}
