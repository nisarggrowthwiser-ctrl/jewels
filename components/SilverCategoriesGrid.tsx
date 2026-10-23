"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowUpRight, Check, ChevronDown } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

interface SilverCategoryItem {
  id: string;
  title: string;
  subtitle: string;
  interestValue: string;
  image: string;
}

const SILVER_CATEGORIES: SilverCategoryItem[] = [
  {
    id: "silver-jewellery",
    title: "Silver Jewellery",
    subtitle: "Structural Statement Pieces",
    interestValue: "Sterling Silver Jewellery",
    image: "https://images.unsplash.com/photo-1598560917505-59a3ad559071?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "silver-decor",
    title: "Home Décor",
    subtitle: "Polished Objects of Art",
    interestValue: "Sterling Silver Home Décor",
    image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "silver-spiritual",
    title: "Spiritual Artifacts",
    subtitle: "Heritage & Devotion",
    interestValue: "Spiritual Silver Artifacts",
    image: "https://images.unsplash.com/photo-1606293926075-69a00dbfde81?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "silver-bespoke",
    title: "Bespoke Silver",
    subtitle: "Custom Commissions",
    interestValue: "Bespoke Sterling Silver",
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=800&auto=format&fit=crop",
  },
];

export default function SilverCategoriesGrid() {
  const [selectedCategory, setSelectedCategory] = useState<SilverCategoryItem | null>(null);
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    date: "",
    time: "Any time",
    interest: "Sterling Silver Jewellery",
    message: "",
  });

  const handleOpenModal = (cat: SilverCategoryItem) => {
    setSelectedCategory(cat);
    setStatus("idle");
    setForm((prev) => ({
      ...prev,
      interest: cat.interestValue,
    }));
  };

  const handleCloseModal = () => {
    setSelectedCategory(null);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.phone.trim() || !form.email.trim()) return;

    setStatus("submitting");
    setTimeout(() => {
      setStatus("success");
    }, 1200);
  };

  return (
    <>
      {/* ─── 4-Column Balanced Inline Grid on Desktop ─── */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12 lg:px-16 mb-14 sm:mb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-5 xl:gap-6">
          {SILVER_CATEGORIES.map((cat, idx) => (
            <AnimatedSection key={cat.id} delay={idx * 0.08}>
              <div
                onClick={() => handleOpenModal(cat)}
                className="group block relative overflow-hidden bg-[#071711] rounded-sm cursor-pointer"
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    handleOpenModal(cat);
                  }
                }}
              >
                <div className="relative aspect-[3/4] sm:aspect-[4/5] overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#071711]/95 via-[#071711]/30 to-transparent z-10 opacity-85 group-hover:opacity-95 transition-opacity duration-500" />

                  <Image
                    src={cat.image}
                    alt={cat.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                  />

                  <div className="absolute bottom-5 left-5 right-5 z-20 transform group-hover:-translate-y-1 transition-transform duration-500 ease-out">
                    <span className="block font-sans text-[9px] uppercase tracking-[0.28em] text-white/70 mb-1">
                      {cat.subtitle}
                    </span>
                    <h3 className="font-serif text-lg sm:text-xl lg:text-lg xl:text-xl text-white font-light leading-snug">
                      {cat.title}
                    </h3>

                    {/* View Collection Action */}
                    <div className="mt-3.5 inline-flex items-center gap-1.5 text-[10px] uppercase tracking-[0.22em] text-gold-accent font-medium border-b border-gold-accent/40 pb-0.5 group-hover:border-gold-accent transition-colors">
                      <span>View Our Collection</span>
                      <ArrowUpRight className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>

      {/* ─── Framed Modal: Book an Appointment with Outer Box Border ─── */}
      <AnimatePresence>
        {selectedCategory && (
          <div className="fixed inset-0 z-[120] flex items-center justify-center p-3 sm:p-5 md:p-8 overflow-y-auto">
            {/* Backdrop Blur Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={handleCloseModal}
              className="fixed inset-0 bg-[#040e0a]/80 backdrop-blur-md"
            />

            {/* Outer Box Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 15 }}
              transition={{ duration: 0.35, ease: [0.25, 1, 0.5, 1] }}
              className="relative w-full max-w-xl max-h-[92vh] overflow-y-auto bg-[#FBF9F5] border border-[#D5CCBA] shadow-[0_25px_70px_rgba(0,0,0,0.5)] z-10 p-2.5 sm:p-3.5 scrollbar-none rounded-none"
            >
              {/* Inner Box Border (Exact match to the reference image) */}
              <div className="relative border border-[#D5CCBA] p-6 sm:p-9 md:p-10 bg-[#FAF8F5]">
                {/* Close Button Inside the Framed Box */}
                <button
                  onClick={handleCloseModal}
                  className="absolute top-4 right-4 z-30 p-1 text-text-primary/70 hover:text-text-primary transition-colors cursor-pointer"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Header */}
                <div className="mb-8">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-5 h-[1px] bg-text-muted/60" />
                    <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-text-muted font-medium">
                      Private Viewing
                    </span>
                  </div>
                  <h2 className="font-serif text-3xl sm:text-4xl text-text-primary font-light mb-2">
                    Book an <span className="italic font-normal">Appointment</span>
                  </h2>
                  <p className="font-sans text-xs sm:text-sm text-text-muted leading-relaxed font-light max-w-md">
                    Share a few details and our concierge will confirm your private viewing within one working day.
                  </p>
                </div>

                {status === "success" ? (
                  <div className="py-12 text-center space-y-4">
                    <div className="w-12 h-12 rounded-full bg-gold-accent/20 border border-gold-accent text-gold-accent flex items-center justify-center mx-auto">
                      <Check className="w-6 h-6 text-[#181615]" />
                    </div>
                    <h3 className="font-serif text-2xl text-text-primary font-light">
                      Appointment Requested
                    </h3>
                    <p className="font-sans text-xs sm:text-sm text-text-muted max-w-md mx-auto leading-relaxed">
                      Thank you, <span className="text-text-primary font-medium">{form.name}</span>. Our concierge team will connect with you at <span className="text-text-primary font-medium">{form.phone}</span> to confirm your private viewing for {selectedCategory.title}.
                    </p>
                    <div className="pt-3">
                      <button
                        type="button"
                        onClick={() => setStatus("idle")}
                        className="font-sans text-[11px] uppercase tracking-[0.2em] text-text-primary underline hover:text-gold-accent transition-colors cursor-pointer"
                      >
                        Schedule Another Request
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Row 1: Full Name & Phone */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-5">
                      <div>
                        <label className="block font-sans text-[10px] uppercase tracking-[0.22em] text-text-primary/80 font-medium mb-1">
                          Full Name
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
                          Phone
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

                    {/* Row 2: Email */}
                    <div>
                      <label className="block font-sans text-[10px] uppercase tracking-[0.22em] text-text-primary/80 font-medium mb-1">
                        Email
                      </label>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full bg-transparent border-0 border-b border-text-primary/30 focus:border-text-primary py-2 text-text-primary text-sm focus:outline-none transition-colors rounded-none"
                      />
                    </div>

                    {/* Row 3: Preferred Date & Preferred Time */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-5">
                      <div>
                        <label className="block font-sans text-[10px] uppercase tracking-[0.22em] text-text-primary/80 font-medium mb-1">
                          Preferred Date
                        </label>
                        <input
                          type="date"
                          value={form.date}
                          onChange={(e) => setForm({ ...form, date: e.target.value })}
                          className="w-full bg-transparent border-0 border-b border-text-primary/30 focus:border-text-primary py-2 text-text-primary text-sm focus:outline-none transition-colors rounded-none cursor-pointer"
                        />
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
                          <ChevronDown className="w-4 h-4 text-text-muted absolute right-0 top-2.5 pointer-events-none" />
                        </div>
                      </div>
                    </div>

                    {/* Row 4: Interest */}
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
                          <option value="Sterling Silver Jewellery">Sterling Silver Jewellery</option>
                          <option value="Sterling Silver Home Décor">Sterling Silver Home Décor</option>
                          <option value="Spiritual Silver Artifacts">Spiritual Silver Artifacts</option>
                          <option value="Bespoke Sterling Silver">Bespoke Sterling Silver</option>
                        </select>
                        <ChevronDown className="w-4 h-4 text-text-muted absolute right-0 top-2.5 pointer-events-none" />
                      </div>
                    </div>

                    {/* Row 5: Message (optional) */}
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

                    {/* Verification Box */}
                    <div className="pt-1">
                      <div className="inline-flex items-center gap-2.5 px-3 py-1.5 bg-white border border-[#D5CCBA] rounded-sm text-xs font-sans text-text-primary/80 shadow-[0_1px_3px_rgba(0,0,0,0.03)]">
                        <div className="w-4 h-4 rounded-full bg-emerald-600 flex items-center justify-center">
                          <Check className="w-2.5 h-2.5 text-white stroke-[3]" />
                        </div>
                        <span className="text-[11px] font-medium tracking-wide">Success! Concierge Verified</span>
                      </div>
                    </div>

                    {/* Submit Button & Phone Call */}
                    <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 pt-2">
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
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
