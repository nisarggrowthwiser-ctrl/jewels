"use client";

import { useState, useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";

export default function BespokeTimeline() {
  const [mounted, setMounted] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    setMounted(true);
  }, []);

  const isReduced = mounted && shouldReduceMotion;

  const steps = [
    {
      title: "Consult",
      label: "Phase I",
      desc: "Meet in our private Bandra salon or digitally to outline aesthetic inspirations, scale, metal, and gemstone select guidelines.",
    },
    {
      title: "Design",
      label: "Phase II",
      desc: "Our creative directors draft hand sketches followed by high-definition 3D renders, allowing you to preview proportions perfectly.",
    },
    {
      title: "Craft",
      label: "Phase III",
      desc: "Master goldsmiths and setting artisans handcraft the frame, verify stone placements, and finish detailed metallurgical settings.",
    },
    {
      title: "Deliver",
      label: "Phase IV",
      desc: "Receive your final custom creation nestled inside our signature premium wooden packaging, accompanied by GIA/IGI grading booklets.",
    },
  ];

  return (
    <div className="relative w-full max-w-6xl mx-auto px-4 sm:px-6 md:px-12 py-10 sm:py-16">

      {/* Horizontal Connecting Line (Desktop) */}
      <div className="absolute top-[86px] left-[15%] right-[15%] h-[1px] bg-border/60 hidden md:block z-0">
        <motion.div
          initial={isReduced ? { scaleX: 1 } : { scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="h-full bg-gradient-to-r from-gold-accent/40 via-gold-accent to-gold-accent/40 origin-left w-full"
        />
      </div>

      {/* Vertical Connecting Line (Mobile) */}
      <div className="absolute top-[60px] bottom-[60px] left-1/2 -translate-x-1/2 w-[1px] bg-border/60 block md:hidden z-0">
        <motion.div
          initial={isReduced ? { scaleY: 1 } : { scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="w-full bg-gradient-to-b from-gold-accent/40 via-gold-accent to-gold-accent/40 origin-top h-full"
        />
      </div>

      {/* Grid of Steps */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 relative z-10 text-center">
        {steps.map((step, idx) => (
          <motion.div
            key={step.title}
            initial={isReduced ? { opacity: 0 } : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: idx * 0.12, ease: [0.25, 1, 0.5, 1] }}
            className="flex flex-col items-center space-y-4 sm:space-y-5 group bg-surface/50 sm:bg-transparent p-4 sm:p-0 rounded-lg sm:rounded-none"
          >
            {/* Diamond-shaped step dot */}
            <div className="relative flex items-center justify-center">
              {/* Outer ambient glow */}
              <div className="absolute w-16 h-16 bg-gold-accent/10 rotate-45 rounded-sm blur-sm group-hover:bg-gold-accent/20 transition-all duration-500" />
              {/* Diamond border */}
              <div className="relative w-11 h-11 rotate-45 border border-gold-accent/40 bg-background flex items-center justify-center group-hover:border-gold-accent group-hover:bg-gold-accent/5 transition-all duration-500">
                {/* Counter number (unrotated) */}
                <span className="-rotate-45 font-serif text-sm text-gold-accent font-light">
                  {idx + 1}
                </span>
              </div>
            </div>

            {/* Step Content */}
            <div className="space-y-2">
              <span className="eyebrow text-[9px] text-gold-accent/70 block tracking-[0.3em] group-hover:text-gold-accent transition-colors duration-300">
                {step.label}
              </span>
              <h3 className="font-serif text-xl font-light text-text-primary group-hover:text-gold-accent transition-colors duration-400">
                {step.title}
              </h3>
              <p className="font-sans text-xs text-text-muted leading-relaxed max-w-[240px] md:max-w-[200px] mx-auto">
                {step.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
