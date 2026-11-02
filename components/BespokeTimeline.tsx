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
      desc: "Meet in our private salon in Thaltej, Ahmedabad or digitally to outline aesthetic inspirations, scale, metal, and gemstone select guidelines.",
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
    <div className="relative w-full max-w-6xl mx-auto py-4 sm:py-10">

      {/* ─── DESKTOP HORIZONTAL TIMELINE (md+) ─── */}
      <div className="hidden md:block relative">
        {/* Horizontal Connecting Line */}
        <div className="absolute top-[86px] left-[12%] right-[12%] h-[1px] bg-border/60 z-0">
          <motion.div
            initial={isReduced ? { scaleX: 1 } : { scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="h-full bg-gradient-to-r from-gold-accent/40 via-gold-accent to-gold-accent/40 origin-left w-full"
          />
        </div>

        {/* Grid of 4 Steps */}
        <div className="grid grid-cols-4 gap-8 relative z-10 text-center">
          {steps.map((step, idx) => (
            <motion.div
              key={step.title}
              initial={isReduced ? { opacity: 0 } : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: idx * 0.12, ease: [0.25, 1, 0.5, 1] }}
              className="flex flex-col items-center space-y-5 group"
            >
              {/* Diamond-shaped step dot */}
              <div className="relative flex items-center justify-center">
                <div className="absolute w-16 h-16 bg-gold-accent/10 rotate-45 rounded-sm blur-sm group-hover:bg-gold-accent/20 transition-all duration-500" />
                <div className="relative w-11 h-11 rotate-45 border border-gold-accent/40 bg-background flex items-center justify-center group-hover:border-gold-accent group-hover:bg-gold-accent/5 transition-all duration-500">
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
                <p className="font-sans text-xs text-text-muted leading-relaxed max-w-[200px] mx-auto">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ─── MOBILE VERTICAL TIMELINE (<md) ─── */}
      <div className="block md:hidden relative pl-6 pr-2">
        {/* Continuous Left Vertical Line */}
        <div className="absolute top-6 bottom-6 left-[39px] w-[1px] bg-border/60 z-0">
          <motion.div
            initial={isReduced ? { scaleY: 1 } : { scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="w-full bg-gradient-to-b from-gold-accent/40 via-gold-accent to-gold-accent/40 origin-top h-full"
          />
        </div>

        {/* Vertical Stack of Steps */}
        <div className="space-y-8 relative z-10">
          {steps.map((step, idx) => (
            <motion.div
              key={step.title}
              initial={isReduced ? { opacity: 0 } : { opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1, ease: "easeOut" }}
              className="flex items-start gap-5 group"
            >
              {/* Left Column: Diamond Badge */}
              <div className="relative shrink-0 flex items-center justify-center pt-1">
                <div className="w-9 h-9 rotate-45 border border-gold-accent/60 bg-background flex items-center justify-center shadow-sm">
                  <span className="-rotate-45 font-serif text-xs text-gold-accent font-medium">
                    0{idx + 1}
                  </span>
                </div>
              </div>

              {/* Right Column: Content Card */}
              <div className="flex-1 bg-background border border-border/60 p-4 sm:p-5 rounded-sm shadow-sm space-y-1.5">
                <div className="flex items-center justify-between">
                  <span className="eyebrow text-[9px] text-gold-accent tracking-[0.3em] font-medium">
                    {step.label}
                  </span>
                  <span className="font-serif text-xs text-gold-accent/50 italic">Step 0{idx + 1}</span>
                </div>
                <h3 className="font-serif text-lg font-light text-text-primary">
                  {step.title}
                </h3>
                <p className="font-sans text-xs text-text-muted leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

    </div>
  );
}
