"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Check, Sparkles, Phone, User, MessageSquare, Gem } from "lucide-react";
import { BRAND_NAME } from "@/lib/constants";

export default function InquiryPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    category: "Custom Bespoke",
    message: "",
  });
  const [error, setError] = useState("");

  useEffect(() => {
    // Check if user has already dismissed or submitted during this session
    const hasSeen = sessionStorage.getItem("vernaura_inquiry_popup_dismissed");
    if (!hasSeen) {
      // Trigger modal under 2 seconds (1.5 seconds delay)
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    sessionStorage.setItem("vernaura_inquiry_popup_dismissed", "true");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim()) {
      setError("Please provide your name and phone number.");
      return;
    }
    setError("");
    setStatus("submitting");

    // Simulate API lead dispatch
    setTimeout(() => {
      setStatus("success");
      sessionStorage.setItem("vernaura_inquiry_popup_dismissed", "true");
      setTimeout(() => {
        setIsOpen(false);
      }, 3000);
    }, 1200);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center p-0 sm:p-4 md:p-6 overflow-hidden">
          {/* Backdrop Blur Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            onClick={handleClose}
            className="absolute inset-0 bg-[#040e0a]/80 backdrop-blur-md"
          />

          {/* Modal Container — Smooth Bottom-to-Top Animation */}
          <motion.div
            initial={{ opacity: 0, y: 70, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.96 }}
            transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
            className="relative w-full max-w-lg max-h-[88vh] overflow-y-auto bg-[#071711] border border-gold-accent/30 rounded-t-2xl sm:rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.6)] z-10 text-white scrollbar-none"
          >
            {/* Ambient Gold Rays Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-80 h-32 bg-gold-accent/[0.08] rounded-full blur-[60px] pointer-events-none" />

            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-3.5 right-3.5 sm:top-4 sm:right-4 z-20 p-2 text-white/70 hover:text-gold-accent transition-colors duration-300 rounded-full hover:bg-white/5 touch-manipulation"
              aria-label="Close inquiry modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header Content */}
            <div className="p-5 sm:p-8 pb-3 text-center relative z-10">
              <div className="flex items-center justify-center gap-2 mb-2">
                <div className="w-4 h-[1px] bg-gold-accent/60" />
                <span className="w-1.5 h-1.5 bg-gold-accent rotate-45 block" />
                <div className="w-4 h-[1px] bg-gold-accent/60" />
              </div>

              <span className="font-sans text-[9px] uppercase tracking-[0.35em] text-gold-accent/90 block mb-1">
                {BRAND_NAME} Concierge
              </span>

              <h3 className="font-serif text-xl sm:text-3xl text-white font-light leading-snug">
                Bespoke Jewellery Inquiry
              </h3>
              <p className="font-sans text-xs text-white/70 mt-1 font-light leading-relaxed max-w-sm mx-auto">
                Connect directly with our master design team for customized diamond, gold, or heritage creations.
              </p>
            </div>

            {/* Form & Success State */}
            <div className="px-5 sm:px-8 pb-6 sm:pb-7 relative z-10">
              {status === "success" ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-8 text-center space-y-3"
                >
                  <div className="w-12 h-12 rounded-full bg-gold-accent/20 border border-gold-accent text-gold-accent flex items-center justify-center mx-auto">
                    <Check className="w-6 h-6" />
                  </div>
                  <h4 className="font-serif text-xl text-white font-light">Inquiry Received</h4>
                  <p className="font-sans text-xs text-white/70 max-w-xs mx-auto leading-relaxed">
                    Thank you. Our luxury concierge team will get in touch with you shortly to discuss your vision.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3.5">
                  {error && (
                    <div className="text-[11px] text-red-400 bg-red-950/40 border border-red-800/40 px-3 py-1.5 rounded text-center">
                      {error}
                    </div>
                  )}

                  {/* Name */}
                  <div>
                    <label className="block font-sans text-[10px] uppercase tracking-[0.2em] text-white/70 mb-1">
                      Your Name *
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Priyanshu Patel"
                        className="w-full bg-white/[0.05] border border-white/15 focus:border-gold-accent text-white placeholder-white/30 text-sm sm:text-xs px-3.5 py-2.5 rounded-lg outline-none transition-colors"
                      />
                      <User className="w-3.5 h-3.5 text-white/40 absolute right-3 top-3 pointer-events-none" />
                    </div>
                  </div>

                  {/* Phone / WhatsApp */}
                  <div>
                    <label className="block font-sans text-[10px] uppercase tracking-[0.2em] text-white/70 mb-1">
                      Phone / WhatsApp *
                    </label>
                    <div className="relative">
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className="w-full bg-white/[0.05] border border-white/15 focus:border-gold-accent text-white placeholder-white/30 text-sm sm:text-xs px-3.5 py-2.5 rounded-lg outline-none transition-colors"
                      />
                      <Phone className="w-3.5 h-3.5 text-white/40 absolute right-3 top-3 pointer-events-none" />
                    </div>
                  </div>

                  {/* Category / Interest */}
                  <div>
                    <label className="block font-sans text-[10px] uppercase tracking-[0.2em] text-white/70 mb-1">
                      Interest Category
                    </label>
                    <div className="relative">
                      <select
                        value={formData.category}
                        onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                        className="w-full bg-[#0a2018] border border-white/15 focus:border-gold-accent text-white text-sm sm:text-xs px-3.5 py-2.5 rounded-lg outline-none transition-colors appearance-none"
                      >
                        <option value="Custom Bespoke">Custom Bespoke Jewellery</option>
                        <option value="Natural Diamonds">Natural Diamond Jewellery</option>
                        <option value="Lab-Grown Diamonds">Lab-Grown Diamond Jewellery</option>
                        <option value="Gold Jewellery">Gold Jewellery</option>
                        <option value="Polki & Kundan">Polki & Kundan Heritage</option>
                        <option value="Sterling Silver">Sterling Silver</option>
                      </select>
                      <Gem className="w-3.5 h-3.5 text-gold-accent absolute right-3 top-3 pointer-events-none" />
                    </div>
                  </div>

                  {/* Message (Optional) */}
                  <div>
                    <label className="block font-sans text-[10px] uppercase tracking-[0.2em] text-white/70 mb-1">
                      Message / Design Idea (Optional)
                    </label>
                    <div className="relative">
                      <textarea
                        rows={2}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell us what you would like to create..."
                        className="w-full bg-white/[0.05] border border-white/15 focus:border-gold-accent text-white placeholder-white/30 text-sm sm:text-xs px-3.5 py-2 rounded-lg outline-none transition-colors resize-none"
                      />
                      <MessageSquare className="w-3.5 h-3.5 text-white/40 absolute right-3 top-3 pointer-events-none" />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="w-full mt-2 py-3 px-4 bg-gold-accent hover:bg-gold-accent/90 text-[#071711] font-sans text-[11px] uppercase tracking-[0.22em] font-semibold rounded-lg transition-all duration-300 shadow-[0_4px_20px_rgba(194,162,97,0.25)] flex items-center justify-center gap-2"
                  >
                    {status === "submitting" ? (
                      <span className="inline-block w-4 h-4 border-2 border-[#071711] border-t-transparent rounded-full animate-spin" />
                    ) : (
                      "Send Custom Inquiry →"
                    )}
                  </button>

                  <p className="text-[10px] text-white/40 text-center font-light mt-2">
                    Direct Atelier Confidentiality Guaranteed
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
