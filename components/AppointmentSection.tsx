"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ChevronDown } from "lucide-react";

interface AppointmentSectionProps {
  initialInterest?: string;
}

export function normalizeInterest(val?: string): string {
  if (!val) return "Natural Diamonds";
  const lower = val.toLowerCase().trim();
  if (lower.includes("lab-grown") || lower.includes("lab grown")) {
    return "Lab-Grown Diamonds";
  }
  if (lower.includes("kundan")) {
    return "Royal Kundan";
  }
  if (lower.includes("polki")) {
    return "Heritage Polki";
  }
  if (lower.includes("natural")) {
    return "Natural Diamonds";
  }
  if (lower.includes("silver")) {
    return "Sterling Silver Jewellery";
  }
  if (lower.includes("bespoke") || lower.includes("custom")) {
    return "Custom Bespoke Creations";
  }
  return val;
}

export default function AppointmentSection({ initialInterest = "Natural Diamonds" }: AppointmentSectionProps) {
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    date: "",
    time: "Any time",
    interest: normalizeInterest(initialInterest),
    message: "",
  });

  useEffect(() => {
    if (initialInterest) {
      setForm((prev) => ({ ...prev, interest: normalizeInterest(initialInterest) }));
    }
  }, [initialInterest]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.phone.trim() || !form.email.trim()) return;

    setStatus("submitting");
    setTimeout(() => {
      setStatus("success");
    }, 1200);
  };

  const handleReset = () => {
    setForm({
      name: "",
      phone: "",
      email: "",
      date: "",
      time: "Any time",
      interest: normalizeInterest(initialInterest),
      message: "",
    });
    setStatus("idle");
  };

  return (
    <section className="max-w-4xl lg:max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 sm:mb-16">
      <div className="bg-[#FBF9F5] border border-[#D5CCBA] p-2.5 sm:p-3.5 shadow-[0_12px_40px_rgba(24,22,21,0.04)]">
        <div className="border border-[#D5CCBA] px-6 sm:px-10 lg:px-12 py-8 sm:py-11 bg-[#FAF8F5]">
          {/* Header */}
          <div className="mb-7 sm:mb-9">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-5 h-[1px] bg-text-muted/60" />
            <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-text-muted font-medium">
              Private Viewing
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-text-primary font-light mb-2">
            Book an <span className="italic font-normal">Appointment</span>
          </h2>
          <p className="font-sans text-xs sm:text-sm text-text-muted leading-relaxed font-light max-w-xl">
            Share a few details and our concierge will confirm your private viewing within one working day.
          </p>
        </div>

        <AnimatePresence mode="wait">
          {status === "success" ? (
            <motion.div
              key="success-card"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="py-12 text-center space-y-4"
            >
              <div className="w-12 h-12 rounded-full bg-gold-accent/20 border border-gold-accent text-gold-accent flex items-center justify-center mx-auto">
                <Check className="w-6 h-6 text-[#181615]" />
              </div>
              <h3 className="font-serif text-2xl text-text-primary font-light">
                Appointment Requested
              </h3>
              <p className="font-sans text-xs sm:text-sm text-text-muted max-w-md mx-auto leading-relaxed">
                Thank you, <span className="text-text-primary font-medium">{form.name}</span>. Our bespoke concierge team will connect with you at <span className="text-text-primary font-medium">{form.phone}</span> to finalize your private viewing slot.
              </p>
              <div className="pt-4">
                <button
                  type="button"
                  onClick={handleReset}
                  className="font-sans text-[11px] uppercase tracking-[0.2em] text-text-primary underline hover:text-gold-accent transition-colors cursor-pointer"
                >
                  Schedule Another Appointment
                </button>
              </div>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-7">
              {/* Row 1: Full Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
                <div>
                  <label className="block font-sans text-[10px] uppercase tracking-[0.22em] text-text-primary/80 font-medium mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full bg-transparent border-0 border-b border-text-primary/30 focus:border-text-primary py-2 text-text-primary text-sm focus:outline-none transition-colors rounded-none"
                  />
                </div>

                <div>
                  <label className="block font-sans text-[10px] uppercase tracking-[0.22em] text-text-primary/80 font-medium mb-1">
                    Phone *
                  </label>
                  <input
                    type="tel"
                    required
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full bg-transparent border-0 border-b border-text-primary/30 focus:border-text-primary py-2 text-text-primary text-sm focus:outline-none transition-colors rounded-none"
                  />
                </div>
              </div>

              {/* Row 2: Email & Interest */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
                <div>
                  <label className="block font-sans text-[10px] uppercase tracking-[0.22em] text-text-primary/80 font-medium mb-1">
                    Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full bg-transparent border-0 border-b border-text-primary/30 focus:border-text-primary py-2 text-text-primary text-sm focus:outline-none transition-colors rounded-none"
                  />
                </div>

                <div>
                  <label className="block font-sans text-[10px] uppercase tracking-[0.22em] text-text-primary/80 font-medium mb-1">
                    Interest
                  </label>
                  <div className="relative">
                    <select
                      value={form.interest}
                      onChange={(e) => setForm({ ...form, interest: e.target.value })}
                      className="w-full bg-transparent border-0 border-b border-text-primary/30 focus:border-text-primary py-2 text-text-primary text-sm focus:outline-none transition-colors rounded-none cursor-pointer appearance-none pr-6"
                    >
                      <option value="Natural Diamonds">Natural Diamonds</option>
                      <option value="Lab-Grown Diamonds">Lab-Grown Diamonds</option>
                      <option value="Heritage Polki">Heritage Polki</option>
                      <option value="Royal Kundan">Royal Kundan</option>
                      <option value="Custom Bespoke Creations">Custom Bespoke Creations</option>
                      <option value="Sterling Silver Jewellery">Sterling Silver Jewellery</option>
                    </select>
                    <ChevronDown className="w-4 h-4 text-text-muted absolute right-0 top-3 pointer-events-none" />
                  </div>
                </div>
              </div>

              {/* Row 3: Preferred Date & Preferred Time */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
                <div>
                  <label className="block font-sans text-[10px] uppercase tracking-[0.22em] text-text-primary/80 font-medium mb-1">
                    Preferred Date
                  </label>
                  <div className="relative">
                    <input
                      type="date"
                      value={form.date}
                      onChange={(e) => setForm({ ...form, date: e.target.value })}
                      className="w-full bg-transparent border-0 border-b border-text-primary/30 focus:border-text-primary py-2 text-text-primary text-sm focus:outline-none transition-colors rounded-none cursor-pointer"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-sans text-[10px] uppercase tracking-[0.22em] text-text-primary/80 font-medium mb-1">
                    Preferred Time
                  </label>
                  <div className="relative">
                    <select
                      value={form.time}
                      onChange={(e) => setForm({ ...form, time: e.target.value })}
                      className="w-full bg-transparent border-0 border-b border-text-primary/30 focus:border-text-primary py-2 text-text-primary text-sm focus:outline-none transition-colors rounded-none cursor-pointer appearance-none pr-6"
                    >
                      <option value="Any time">Any time</option>
                      <option value="Morning (11:00 AM - 1:00 PM)">Morning (11:00 AM - 1:00 PM)</option>
                      <option value="Afternoon (1:00 PM - 4:00 PM)">Afternoon (1:00 PM - 4:00 PM)</option>
                      <option value="Evening (4:00 PM - 7:00 PM)">Evening (4:00 PM - 7:00 PM)</option>
                    </select>
                    <ChevronDown className="w-4 h-4 text-text-muted absolute right-0 top-3 pointer-events-none" />
                  </div>
                </div>
              </div>

              {/* Row 4: Message (optional) */}
              <div>
                <div className="flex justify-between items-center mb-1">
                  <label className="block font-sans text-[10px] uppercase tracking-[0.22em] text-text-primary/80 font-medium">
                    Message
                  </label>
                  <span className="font-serif italic text-xs text-text-muted">optional</span>
                </div>
                <textarea
                  rows={2}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder=""
                  className="w-full bg-transparent border-0 border-b border-text-primary/30 focus:border-text-primary py-2 text-text-primary text-sm focus:outline-none transition-colors resize-none rounded-none"
                />
              </div>

              {/* Verification Badge */}
              <div className="pt-1">
                <div className="inline-flex items-center gap-2.5 px-3 py-1.5 bg-white border border-[#E5DECD] rounded-sm text-xs font-sans text-text-primary/80 shadow-[0_1px_3px_rgba(0,0,0,0.03)]">
                  <div className="w-4 h-4 rounded-full bg-emerald-600 flex items-center justify-center">
                    <Check className="w-2.5 h-2.5 text-white stroke-[3]" />
                  </div>
                  <span className="text-[11px] font-medium tracking-wide">Concierge Confidentiality Verified</span>
                </div>
              </div>

              {/* Submit & Call section */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 pt-3 border-t border-text-primary/10">
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="bg-[#181615] hover:bg-[#2A2725] text-white font-sans text-[10px] uppercase tracking-[0.25em] font-medium px-8 py-3.5 transition-all duration-300 disabled:opacity-70 flex items-center justify-center gap-2 cursor-pointer"
                >
                  {status === "submitting" ? (
                    <span className="inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : (
                    "Request Appointment"
                  )}
                </button>
                <span className="font-serif italic text-sm text-text-muted">
                  or call{" "}
                  <a
                    href="tel:+919316095950"
                    className="not-italic font-sans text-xs tracking-wider text-text-primary font-medium hover:text-gold-accent transition-colors"
                  >
                    +91 93160 95950
                  </a>
                </span>
              </div>
            </form>
          )}
        </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
