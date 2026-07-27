"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { BRAND_NAME, BRAND_COMPANY, BRAND_COPY, NAV_LINKS } from "@/lib/constants";
import { Mail, Phone, MapPin, Clock, ArrowRight, Check } from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");
  const year = new Date().getFullYear();

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus("loading");
    // Simulate API request
    setTimeout(() => {
      setStatus("success");
      setEmail("");
    }, 1000);
  };

  return (
    <footer className="bg-[#071711] text-white/60 pt-20 pb-12 relative overflow-hidden">
      {/* Subtle decorative texture */}
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-white/[0.02] rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 relative z-10">
        
        {/* Brand Column */}
        <div className="space-y-6">
          <Link href="/" className="inline-block group">
            <div className="relative w-[200px] h-[100px] transition-transform duration-300 group-hover:scale-[1.02]">
              <Image
                src="/images/logo-vertical-light.png"
                alt={BRAND_NAME}
                fill
                sizes="200px"
                className="object-contain"
              />
            </div>
          </Link>
          <p className="text-xs text-white/40 font-sans leading-relaxed tracking-wide font-light max-w-sm">
            {BRAND_COPY.aboutBrief}
          </p>
        </div>

        {/* Sitemap / Links Column */}
        <div className="space-y-6">
          <h4 className="font-sans text-[10px] uppercase tracking-[0.3em] text-white/40 font-medium">
            Sitemap
          </h4>
          <ul className="space-y-3">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-xs text-white/50 hover:text-white transition-colors duration-300 font-sans tracking-wide"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Concierge details */}
        <div className="space-y-6">
          <h4 className="font-sans text-[10px] uppercase tracking-[0.3em] text-white/40 font-medium">
            Concierge
          </h4>
          <ul className="space-y-3.5 text-xs text-white/50 font-sans tracking-wide">
            <li className="flex items-start gap-2.5">
              <MapPin className="w-3.5 h-3.5 text-white/30 shrink-0 mt-0.5" />
              <span>{BRAND_COPY.contactDetails.address}</span>
            </li>
            <li className="flex items-center gap-2.5">
              <Phone className="w-3.5 h-3.5 text-white/30 shrink-0" />
              <a href={`tel:${BRAND_COPY.contactDetails.phone}`} className="hover:text-white transition-colors">
                {BRAND_COPY.contactDetails.phone}
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <Mail className="w-3.5 h-3.5 text-white/30 shrink-0" />
              <a href={`mailto:${BRAND_COPY.contactDetails.email}`} className="hover:text-white transition-colors">
                {BRAND_COPY.contactDetails.email}
              </a>
            </li>
            <li className="flex items-start gap-2.5 pt-1 border-t border-white/[0.06]">
              <Clock className="w-3.5 h-3.5 text-white/30 shrink-0 mt-0.5" />
              <span className="text-[11px] text-white/30 leading-relaxed">
                {BRAND_COPY.contactDetails.hours}
              </span>
            </li>
          </ul>
        </div>

        {/* Newsletter Signup (Subtle Success State) */}
        <div className="space-y-6">
          <h4 className="font-sans text-[10px] uppercase tracking-[0.3em] text-white/40 font-medium">
            Newsletter
          </h4>
          <p className="text-xs text-white/40 font-sans leading-relaxed tracking-wide">
            Subscribe to receive private previews, bridal lookbooks, and design stories.
          </p>

          <AnimatePresence mode="wait">
            {status !== "success" ? (
              <motion.form
                key="signup-form"
                onSubmit={handleSubscribe}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="relative flex items-center border-b border-white/15 focus-within:border-white/40 transition-colors duration-300 py-1"
              >
                <input
                  type="email"
                  placeholder="Enter email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={status === "loading"}
                  className="bg-transparent border-none text-xs w-full py-1 text-white/80 placeholder-white/20 focus:outline-none font-sans"
                  required
                />
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="text-white/30 hover:text-white transition-colors duration-300 p-1 flex items-center justify-center shrink-0"
                  aria-label="Subscribe"
                >
                  {status === "loading" ? (
                    <div className="w-3.5 h-3.5 border border-stone-400 border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <ArrowRight className="w-4 h-4" />
                  )}
                </button>
              </motion.form>
            ) : (
              <motion.div
                key="signup-success"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="flex items-center gap-2 text-white/60 text-xs font-sans py-1"
              >
                <Check className="w-4 h-4 border border-gold-accent rounded-full p-0.5" />
                <span>Subscription successful. Thank you.</span>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Social Icons */}
          <div className="flex items-center space-x-4 pt-2">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white/25 hover:text-white transition-colors duration-300" aria-label="Instagram">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.01 3.752.054 2.128.1 3.197 1.17 3.3 3.3.047.97.056 1.322.056 3.751 0 2.43-.01 2.784-.056 3.752-.1 2.128-1.17 3.3 3.3-.97.047-1.322.056-3.751.056-2.43 0-2.784-.01-3.752-.056-2.128-.1-3.197-1.17-3.3-3.3-.047-.97-.056-1.322-.056-3.751 0-2.43.01-2.784.056-3.752.1-2.128 1.17-3.197 3.3-3.3.97-.047 1.322-.056 3.751-.056zM12 7.004c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0 8.2c-1.765 0-3.2-1.435-3.2-3.2s1.435-3.2 3.2-3.2 3.2 1.435 3.2 3.2-1.435 3.2-3.2 3.2zM18.006 5.688a1.2 1.2 0 100 2.4 1.2 1.2 0 000-2.4z" clipRule="evenodd" /></svg>
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white/25 hover:text-white transition-colors duration-300" aria-label="Facebook">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white/25 hover:text-white transition-colors duration-300" aria-label="LinkedIn">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" /></svg>
            </a>
          </div>
        </div>

      </div>

      {/* Footer copyright section */}
      <div className="max-w-7xl mx-auto px-6 md:px-16 mt-16 pt-8 border-t border-white/[0.06] flex flex-col md:flex-row items-center justify-between gap-3 relative z-10">
        <p className="text-[11px] text-white/25 font-sans tracking-wider text-center md:text-left">
          &copy; {year} {BRAND_NAME}. All Rights Reserved. Unit of Vernaura Ventures Pvt. Ltd.
        </p>
        <div className="flex space-x-6 text-[11px] text-white/25 font-sans tracking-wider">
          <Link href="/privacy" className="hover:text-white/60 transition-colors">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-white/60 transition-colors">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
