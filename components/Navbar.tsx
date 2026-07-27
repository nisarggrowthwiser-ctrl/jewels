"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NAV_LINKS, BRAND_NAME } from "@/lib/constants";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile nav when changing routes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-background/97 backdrop-blur-sm border-b border-border/50 py-4 shadow-[0_1px_12px_rgba(0,0,0,0.06)]"
            : "bg-transparent border-b border-white/10 py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-16 flex items-center justify-between">
          {/* Logo Left */}
          <Link href="/" className="group z-50 flex items-center">
            <div className="relative h-9 w-[155px] sm:h-11 sm:w-[189px] md:h-16 md:w-[275px] transition-transform duration-300 group-hover:scale-[1.02]">
              {/* Light version (unscrolled over dark background) */}
              <Image
                src="/images/logo-horizontal-light.png"
                alt={BRAND_NAME}
                fill
                priority
                sizes="(max-width: 768px) 189px, 275px"
                className={`object-contain transition-opacity duration-500 ${
                  isScrolled ? "opacity-0" : "opacity-100"
                }`}
              />
              {/* Dark gold version (scrolled over light background) */}
              <Image
                src="/images/logo-horizontal-dark-gold.png"
                alt={BRAND_NAME}
                fill
                priority
                sizes="(max-width: 768px) 189px, 275px"
                className={`object-contain transition-opacity duration-500 ${
                  isScrolled ? "opacity-100" : "opacity-0"
                }`}
              />
            </div>
          </Link>

          {/* Nav Links Right */}
          <nav className="hidden lg:flex items-center space-x-10">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative group font-sans text-[11px] uppercase tracking-[0.25em] transition-colors duration-300 ${
                    isScrolled
                      ? isActive ? "text-gold-accent" : "text-text-primary hover:text-gold-accent"
                      : isActive ? "text-white" : "text-white/80 hover:text-white"
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute -bottom-1.5 left-0 w-full h-[1px] transform scale-x-0 origin-left transition-transform duration-300 ease-out group-hover:scale-x-100 ${
                      isScrolled ? "bg-gold-accent" : "bg-white"
                    } ${
                      isActive ? "scale-x-100" : ""
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          {/* Hamburger Icon */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden transition-colors duration-300 p-3 -mr-3 z-50 touch-manipulation ${
              isScrolled ? "text-text-primary hover:text-gold-accent" : "text-white hover:text-white/70"
            }`}
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer (Smooth Slide-In from Right) */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-stone-900/40 z-40 lg:hidden"
            />

            {/* Slide-in Drawer Container */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
              className="fixed top-0 right-0 bottom-0 w-full max-w-sm bg-background border-l border-gold-accent/15 z-40 lg:hidden flex flex-col justify-between p-8 sm:p-12 pt-28 sm:pt-32 shadow-2xl"
            >
              {/* Background styling blur */}
              <div className="absolute top-1/4 right-0 w-48 h-48 bg-gold-accent/5 rounded-full blur-3xl pointer-events-none" />

              <nav className="flex flex-col space-y-8 relative z-10">
                {NAV_LINKS.map((link, idx) => {
                  const isActive = pathname === link.href;
                  return (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.05, duration: 0.4 }}
                    >
                      <Link
                        href={link.href}
                        className={`text-xl font-serif tracking-wider transition-colors duration-300 hover:text-gold-accent block ${
                          isActive ? "text-gold-accent font-medium" : "text-text-primary"
                        }`}
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  );
                })}
              </nav>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="border-t border-gold-accent/15 pt-8"
              >
                <p className="eyebrow text-gold-accent mb-2">VERNAURA VENTURES</p>
                <p className="text-[11px] text-text-muted leading-relaxed font-sans tracking-wide">
                  Showroom visits by prior appointment only.
                </p>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
