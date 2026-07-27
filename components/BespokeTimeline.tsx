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
    <div className="relative w-full max-w-6xl mx-auto px-6 md:px-12 py-16">
      {/* Horizontal Connecting Line (ScaleX animation on scroll) */}
      <div className="absolute top-[82px] left-[15%] right-[15%] h-[1px] bg-border hidden md:block z-0">
        <motion.div
          initial={isReduced ? { scaleX: 1 } : { scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="h-full bg-gold-accent origin-left w-full"
        />
      </div>

      {/* Grid of Steps */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 relative z-10 text-center">
        {steps.map((step, idx) => (
          <motion.div
            key={step.title}
            initial={isReduced ? { opacity: 0 } : { opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: idx * 0.1, ease: "easeOut" }}
            className="flex flex-col items-center space-y-4"
          >
            {/* Step Counter/Dot */}
            <div className="w-10 h-10 rounded-full bg-background border border-gold-accent/30 flex items-center justify-center relative font-serif text-sm text-gold-accent transition-all duration-300">
              {idx + 1}
            </div>
            
            {/* Step Content */}
            <div className="space-y-2">
              <span className="eyebrow text-[9px] text-gold-accent block tracking-[0.25em]">{step.label}</span>
              <h3 className="font-serif text-xl font-medium text-text-primary">{step.title}</h3>
              <p className="font-sans text-xs text-text-muted leading-relaxed max-w-[200px] mx-auto">{step.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
