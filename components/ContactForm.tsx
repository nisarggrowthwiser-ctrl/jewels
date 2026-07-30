"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function ContactForm() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
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
    if (!form.email.trim()) {
      newErrors.email = "Please enter your email.";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = "Please enter a valid email address.";
    }
    if (!form.message.trim()) newErrors.message = "Please enter your message.";
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setStatus("submitting");

    // Simulate API Submission
    setTimeout(() => {
      console.log("Contact form submitted successfully:", form);
      setStatus("success");
      setForm({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    }, 1500);
  };

  return (
    <div className="bg-surface border border-border/40 p-5 sm:p-8 md:p-12 h-full flex flex-col justify-center">
      <AnimatePresence mode="wait">
        {status !== "success" ? (
          <motion.form
            key="contact-form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="space-y-8"
          >
            <div className="space-y-2">
              <span className="eyebrow text-[9px] text-gold-accent block">Digital Concierge</span>
              <h3 className="font-serif text-2xl text-text-primary font-light">
                Write to the House
              </h3>
              <p className="font-sans text-xs text-text-muted leading-relaxed">
                For custom inquiries, private viewings, or collection details, please send us a message.
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

            {/* Email Input */}
            <div className="relative z-0 w-full group">
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleInputChange}
                className="block py-2.5 px-0 w-full text-sm text-text-primary bg-transparent border-0 border-b border-stone-300 focus:outline-none focus:ring-0 focus:border-gold-accent transition-colors duration-300 peer font-sans"
                placeholder=" "
              />
              <label
                className="peer-focus:font-medium absolute text-xs text-text-muted/70 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-gold-accent peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 eyebrow uppercase tracking-widest"
              >
                Email Address *
              </label>
              {errors.email && (
                <span className="text-[10px] text-red-600 block mt-1 font-sans">{errors.email}</span>
              )}
            </div>

            {/* Subject Input */}
            <div className="relative z-0 w-full group">
              <input
                type="text"
                name="subject"
                value={form.subject}
                onChange={handleInputChange}
                className="block py-2.5 px-0 w-full text-sm text-text-primary bg-transparent border-0 border-b border-stone-300 focus:outline-none focus:ring-0 focus:border-gold-accent transition-colors duration-300 peer font-sans"
                placeholder=" "
              />
              <label
                className="peer-focus:font-medium absolute text-xs text-text-muted/70 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-gold-accent peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 eyebrow uppercase tracking-widest"
              >
                Subject
              </label>
            </div>

            {/* Message Input */}
            <div className="relative z-0 w-full group">
              <textarea
                name="message"
                rows={4}
                value={form.message}
                onChange={handleInputChange}
                className="block py-2.5 px-0 w-full text-sm text-text-primary bg-transparent border-0 border-b border-stone-300 focus:outline-none focus:ring-0 focus:border-gold-accent transition-colors duration-300 peer font-sans resize-none"
                placeholder=" "
              />
              <label
                className="peer-focus:font-medium absolute text-xs text-text-muted/70 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-gold-accent peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 eyebrow uppercase tracking-widest"
              >
                Your Message *
              </label>
              {errors.message && (
                <span className="text-[10px] text-red-600 block mt-1 font-sans">{errors.message}</span>
              )}
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={status === "submitting"}
                className="w-full flex items-center justify-center gap-3 py-4 bg-text-primary text-background eyebrow text-[11px] tracking-[0.25em] hover:bg-gold-accent hover:text-text-primary transition-all duration-400 ease-luxury focus:outline-none"
              >
                {status === "submitting" ? (
                  <>
                    <div className="w-4 h-4 border border-background border-t-transparent rounded-full animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </div>
          </motion.form>
        ) : (
          <motion.div
            key="contact-success"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center py-12 space-y-6"
          >
            <div className="inline-flex items-center justify-center p-4 bg-background border border-gold-accent rounded-full text-gold-accent mx-auto">
              <Check className="w-8 h-8" />
            </div>
            <div className="space-y-3">
              <h3 className="font-serif text-3xl font-light text-text-primary">
                Message Received
              </h3>
              <p className="font-sans text-xs md:text-sm text-text-muted leading-relaxed max-w-xs mx-auto">
                Thank you for contacting us. A client representative will respond to your inquiry via email shortly.
              </p>
            </div>
            <div className="pt-4">
              <button
                onClick={() => setStatus("idle")}
                className="eyebrow text-[9px] text-gold-accent border border-gold-accent/20 px-6 py-2.5 hover:bg-gold-accent hover:text-text-primary hover:border-gold-accent transition-colors duration-300"
              >
                Send another message
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
