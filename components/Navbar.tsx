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
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile nav when changing routes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  return (
    <>
      {/* ─── TOP HEADER BAR ─── */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-background/97 backdrop-blur-sm border-b border-border/50 py-3.5 sm:py-4 shadow-[0_2px_24px_rgba(194,162,97,0.07)]"
            : "bg-transparent border-b border-white/10 py-4 sm:py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12 lg:px-16 flex items-center justify-between">

          {/* Logo */}
          <Link href="/" className="group z-[60] flex items-center relative">
            <div className="relative h-8 w-[135px] sm:h-11 sm:w-[189px] md:h-16 md:w-[275px] transition-transform duration-300 group-hover:scale-[1.02]">
              {/* Light (over dark hero) */}
              <Image
                src="/images/logo-horizontal-light.png"
                alt={BRAND_NAME}
                fill
                priority
                sizes="(max-width: 768px) 189px, 275px"
                className={`object-contain transition-opacity duration-500 ${
                  isScrolled && !isOpen ? "opacity-0" : isOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              {/* Dark-gold (scrolled or menu open) */}
              <Image
                src="/images/logo-horizontal-dark-gold.png"
                alt={BRAND_NAME}
                fill
                priority
                sizes="(max-width: 768px) 189px, 275px"
                className={`object-contain transition-opacity duration-500 ${
                  isScrolled || isOpen ? "opacity-100" : "opacity-0"
                }`}
              />
            </div>
          </Link>

          {/* Desktop Nav Links */}
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
                    className={`absolute -bottom-1.5 left-0 w-full h-[1.5px] transform origin-left transition-transform duration-300 ease-out ${
                      isScrolled ? "bg-gold-accent" : "bg-white/80"
                    } ${isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`}
                  />
                </Link>
              );
            })}
          </nav>

          {/* Hamburger Button (mobile) */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden relative z-[60] p-2.5 -mr-2 touch-manipulation transition-colors duration-300 ${
              isOpen
                ? "text-background"
                : isScrolled
                  ? "text-text-primary hover:text-gold-accent"
                  : "text-white hover:text-white/70"
            }`}
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
          >
            <AnimatePresence mode="wait" initial={false}>
              {isOpen ? (
                <motion.span
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="w-6 h-6 text-white" />
                </motion.span>
              ) : (
                <motion.span
                  key="open"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="w-6 h-6" />
                </motion.span>
              )}
            </AnimatePresence>
          </button>

        </div>
      </header>

      {/* ─── FULL-SCREEN MOBILE MENU ─── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35, ease: [0.25, 1, 0.5, 1] }}
            className="fixed inset-0 z-[55] lg:hidden flex flex-col bg-[#071711] overflow-hidden"
          >
            {/* Ambient gold glows */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-[200px] bg-gold-accent/[0.07] rounded-full blur-[80px] pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-48 h-48 bg-gold-accent/[0.04] rounded-full blur-[60px] pointer-events-none" />

            {/* ── Logo centred ── */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.4 }}
              className="flex justify-center pt-24 pb-10"
            >
              <Link href="/" onClick={() => setIsOpen(false)}>
                <div className="relative h-12 w-[200px] sm:h-14 sm:w-[240px]">
                  <Image
                    src="/images/logo-horizontal-light.png"
                    alt={BRAND_NAME}
                    fill
                    priority
                    sizes="240px"
                    className="object-contain"
                  />
                </div>
              </Link>
            </motion.div>

            {/* Gold ornament */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" }}
              className="flex items-center justify-center gap-3 mb-10"
            >
              <div className="w-10 h-[1px] bg-gold-accent/40 origin-right" />
              <div className="w-1.5 h-1.5 bg-gold-accent/60 rotate-45" />
              <div className="w-10 h-[1px] bg-gold-accent/40 origin-left" />
            </motion.div>

            {/* ── Nav Links centred ── */}
            <nav className="flex flex-col items-center gap-0 flex-1">
              {NAV_LINKS.map((link, idx) => {
                const isActive = pathname === link.href;
                return (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15 + idx * 0.07, duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
                    className="w-full"
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className={`group flex items-center justify-center py-4 w-full border-b border-white/[0.06] transition-colors duration-300 ${
                        isActive ? "text-gold-accent" : "text-white/80 hover:text-white"
                      }`}
                    >
                      <span className="font-serif text-2xl sm:text-3xl font-light tracking-wide group-hover:tracking-widest transition-all duration-500">
                        {link.label}
                      </span>
                      {isActive && (
                        <span className="ml-3 inline-block w-1.5 h-1.5 bg-gold-accent rotate-45 shrink-0" />
                      )}
                    </Link>
                  </motion.div>
                );
              })}
            </nav>

            {/* ── Footer info ── */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="text-center py-8 px-6 space-y-1"
            >
              <p className="font-sans text-[9px] uppercase tracking-[0.35em] text-gold-accent/70">
                Vernaura Jewels · Thaltej, Ahmedabad
              </p>
              <p className="font-sans text-[10px] text-white/30 tracking-wide">
                By Appointment Only
              </p>
            </motion.div>

          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
