"use client";

import { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";

interface FormState {
  name: string;
  contact: string;
  occasion: string;
  vision: string;
}

export default function BespokeForm() {
  const [fsState, handleFsSubmit, reset] = useForm("moeddjag");
  const [form, setForm] = useState<FormState>({
    name: "",
    contact: "",
    occasion: "",
    vision: "",
  });

  const [errors, setErrors] = useState<Partial<FormState>>({});

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormState]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validate = () => {
    const newErrors: Partial<FormState> = {};
    if (!form.name.trim()) newErrors.name = "Please enter your name.";
    if (!form.contact.trim()) newErrors.contact = "Please enter your email or phone number.";
    if (!form.vision.trim()) newErrors.vision = "Please share a brief description of your design vision.";
    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const data = new FormData();
    data.append("name", form.name);
    data.append("contact", form.contact);
    if (form.occasion) data.append("occasion", form.occasion);
    data.append("vision", form.vision);

    await handleFsSubmit(data);
  };

  const handleReset = () => {
    reset();
    setForm({ name: "", contact: "", occasion: "", vision: "" });
    setErrors({});
  };

  return (
    <div className="max-w-2xl mx-auto bg-surface border border-border/40 p-5 sm:p-8 md:p-12">
      <AnimatePresence mode="wait">
        {!fsState.succeeded ? (
          <motion.form
            key="bespoke-form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="space-y-8"
          >
            <div className="space-y-2">
              <span className="eyebrow text-[9px] text-gold-accent block">The Salon Questionnaire</span>
              <h3 className="font-serif text-2xl text-text-primary font-light">
                Request a Design Commission
              </h3>
              <p className="font-sans text-xs text-text-muted leading-relaxed">
                Fill in the details below. Our concierge will review your vision and connect you with a creative director.
              </p>
            </div>

            {/* Name Input */}
            <div className="relative z-0 w-full group">
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleInputChange}
                className="block py-2.5 px-0 w-full text-sm text-text-primary bg-transparent border-0 border-b border-stone-300 focus:outline-none focus:ring-0 focus:border-gold-accent transition-colors duration-300 peer font-sans"
                placeholder=" "
              />
              <label
                className="peer-focus:font-medium absolute text-xs text-text-muted/70 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-gold-accent peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 eyebrow uppercase tracking-widest"
              >
                Full Name *
              </label>
              {errors.name && (
                <span className="text-[10px] text-red-600 block mt-1 font-sans">{errors.name}</span>
              )}
            </div>

            {/* Contact Input */}
            <div className="relative z-0 w-full group">
              <input
                type="text"
                name="contact"
                value={form.contact}
                onChange={handleInputChange}
                className="block py-2.5 px-0 w-full text-sm text-text-primary bg-transparent border-0 border-b border-stone-300 focus:outline-none focus:ring-0 focus:border-gold-accent transition-colors duration-300 peer font-sans"
                placeholder=" "
              />
              <label
                className="peer-focus:font-medium absolute text-xs text-text-muted/70 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-gold-accent peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 eyebrow uppercase tracking-widest"
              >
                Email Address or Phone *
              </label>
              {errors.contact && (
                <span className="text-[10px] text-red-600 block mt-1 font-sans">{errors.contact}</span>
              )}
              <ValidationError prefix="Contact" field="contact" errors={fsState.errors} className="text-[10px] text-red-600 block mt-1 font-sans" />
            </div>

            {/* Occasion Selection */}
            <div className="relative z-0 w-full group">
              <select
                name="occasion"
                value={form.occasion}
                onChange={handleInputChange}
                className="block py-2.5 px-0 w-full text-sm text-text-primary bg-transparent border-0 border-b border-stone-300 focus:outline-none focus:ring-0 focus:border-gold-accent transition-colors duration-300 peer font-sans cursor-pointer"
              >
                <option value="" className="text-text-muted">Select Occasion</option>
                <option value="Bridal/Wedding">Bridal / Wedding Heirloom</option>
                <option value="Anniversary">Anniversary Statement</option>
                <option value="Engagement">Engagement Rings</option>
                <option value="Modern Silver Statement">Modern Silver Statement</option>
                <option value="Custom Gift">Bespoke Gift Commission</option>
              </select>
              <label
                className="peer-focus:font-medium absolute text-xs text-text-muted/70 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-gold-accent peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 eyebrow uppercase tracking-widest"
              >
                Intended Occasion
              </label>
            </div>

            {/* Describe Vision */}
            <div className="relative z-0 w-full group">
              <textarea
                name="vision"
                rows={3}
                value={form.vision}
                onChange={handleInputChange}
                className="block py-2.5 px-0 w-full text-sm text-text-primary bg-transparent border-0 border-b border-stone-300 focus:outline-none focus:ring-0 focus:border-gold-accent transition-colors duration-300 peer font-sans resize-none"
                placeholder=" "
              />
              <label
                className="peer-focus:font-medium absolute text-xs text-text-muted/70 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-gold-accent peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 eyebrow uppercase tracking-widest"
              >
                Describe Your Vision *
              </label>
              {errors.vision && (
                <span className="text-[10px] text-red-600 block mt-1 font-sans">{errors.vision}</span>
              )}
              <ValidationError prefix="Vision" field="vision" errors={fsState.errors} className="text-[10px] text-red-600 block mt-1 font-sans" />
            </div>

            {/* Form-level errors from Formspree */}
            <ValidationError errors={fsState.errors} className="text-xs text-red-600 block font-sans" />

            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={fsState.submitting}
                className="w-full flex items-center justify-center gap-3 py-4 bg-text-primary text-background eyebrow text-[11px] tracking-[0.25em] hover:bg-gold-accent hover:text-text-primary transition-all duration-400 ease-luxury focus:outline-none disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {fsState.submitting ? (
                  <>
                    <div className="w-4 h-4 border border-background border-t-transparent rounded-full animate-spin" />
                    <span>Transmitting Inquiry...</span>
                  </>
                ) : (
                  <>
                    <span>Submit Commission request</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </div>
          </motion.form>
        ) : (
          <motion.div
            key="bespoke-success"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
            className="text-center py-12 space-y-6"
          >
            <div className="inline-flex items-center justify-center p-4 bg-background border border-gold-accent rounded-full text-gold-accent mx-auto">
              <Check className="w-8 h-8" />
            </div>
            <div className="space-y-3">
              <h3 className="font-serif text-3xl font-light text-text-primary">
                Inquiry Received
              </h3>
              <p className="font-sans text-xs md:text-sm text-text-muted leading-relaxed max-w-sm mx-auto">
                Thank you for sharing your vision. A private salon concierge will contact you within 24 hours to schedule your creative consultation.
              </p>
            </div>
            <div className="pt-4">
              <button
                onClick={handleReset}
                className="eyebrow text-[9px] text-gold-accent border border-gold-accent/20 px-6 py-2.5 hover:bg-gold-accent hover:text-text-primary hover:border-gold-accent transition-colors duration-300"
              >
                Submit another inquiry
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
