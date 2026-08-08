"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { BRAND_COPY } from "@/lib/constants";
import { MapPin, Navigation, Copy, Check, Phone, Clock, ExternalLink, Sparkles, Building2 } from "lucide-react";

export default function LocationBox() {
  const [copied, setCopied] = useState(false);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(BRAND_COPY.contactDetails.address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="w-full bg-[#071711] text-white rounded-2xl overflow-hidden border border-gold-accent/30 shadow-2xl shadow-black/40 relative">
      {/* Subtle Background Glows */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold-accent/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-emerald-900/10 rounded-full blur-3xl pointer-events-none" />

      {/* Main Grid Container */}
      <div className="grid grid-cols-1 lg:grid-cols-12 relative z-10">
        
        {/* Left Information Card (5 cols on lg) */}
        <div className="lg:col-span-5 p-6 sm:p-8 md:p-10 flex flex-col justify-between space-y-8 bg-[#091d16]/90 backdrop-blur-md border-b lg:border-b-0 lg:border-r border-gold-accent/20">
          
          {/* Header & Badges */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-accent/10 border border-gold-accent/30 text-gold-accent text-[10px] uppercase tracking-[0.25em] font-sans">
              <Sparkles className="w-3 h-3" />
              <span>Flagship Atelier</span>
            </div>

            <div>
              <h3 className="font-serif text-2xl sm:text-3xl text-white font-light leading-tight mb-2">
                Thaltej Design Studio
              </h3>
              <p className="font-sans text-xs text-white/60 leading-relaxed font-light">
                Visit our private salon for personalized jewellery consultations, custom design commissions, and exclusive collection viewings.
              </p>
            </div>

            {/* Address Details */}
            <div className="space-y-4 pt-2 border-t border-white/10">
              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-lg bg-gold-accent/10 border border-gold-accent/20 text-gold-accent shrink-0 mt-0.5">
                  <Building2 className="w-4 h-4" />
                </div>
                <div>
                  <span className="block font-sans text-[10px] uppercase tracking-wider text-gold-accent/80 font-medium">
                    Building & Suite
                  </span>
                  <p className="font-serif text-sm text-white font-light">
                    {BRAND_COPY.contactDetails.building} ({BRAND_COPY.contactDetails.suite})
                  </p>
                  <p className="font-sans text-xs text-white/70 font-light mt-0.5">
                    {BRAND_COPY.contactDetails.street}
                  </p>
                  <p className="font-sans text-xs text-white/50 font-light">
                    {BRAND_COPY.contactDetails.area}, {BRAND_COPY.contactDetails.city}, {BRAND_COPY.contactDetails.state} - {BRAND_COPY.contactDetails.pincode}
                  </p>
                </div>
              </div>

              {/* Business Hours */}
              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-lg bg-white/5 border border-white/10 text-white/70 shrink-0 mt-0.5">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <span className="block font-sans text-[10px] uppercase tracking-wider text-white/50 font-medium">
                    Hours & Access
                  </span>
                  <p className="font-sans text-xs text-white/90 font-light">
                    {BRAND_COPY.contactDetails.hours}
                  </p>
                </div>
              </div>

              {/* Phone Line */}
              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-lg bg-white/5 border border-white/10 text-white/70 shrink-0 mt-0.5">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="block font-sans text-[10px] uppercase tracking-wider text-white/50 font-medium">
                    Concierge Direct Line
                  </span>
                  <a
                    href={`tel:${BRAND_COPY.contactDetails.phone}`}
                    className="font-sans text-xs text-gold-accent hover:underline transition-all block font-medium mt-0.5"
                  >
                    {BRAND_COPY.contactDetails.phone}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Action Buttons */}
          <div className="pt-4 border-t border-white/10 space-y-3">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {/* Get Directions */}
              <a
                href={BRAND_COPY.contactDetails.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-gold-accent text-[#071711] font-sans text-xs font-semibold uppercase tracking-wider hover:bg-gold-accent/90 transition-all duration-300 shadow-md group"
              >
                <Navigation className="w-3.5 h-3.5 transition-transform group-hover:rotate-45" />
                <span>Get Directions</span>
              </a>

              {/* Copy Address Button */}
              <button
                onClick={handleCopyAddress}
                type="button"
                className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/15 text-white font-sans text-xs font-medium uppercase tracking-wider transition-all duration-300"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-white/70" />
                    <span>Copy Address</span>
                  </>
                )}
              </button>
            </div>
          </div>

        </div>

        {/* Right Map Box (7 cols on lg) */}
        <div className="lg:col-span-7 relative min-h-[420px] sm:min-h-[480px] lg:min-h-full flex flex-col bg-[#071711]">
          
          {/* Dedicated Clean Map Header Bar (No overlapping over Google Maps UI) */}
          <div className="px-4 py-3 bg-[#071711] border-b border-gold-accent/20 flex items-center justify-between text-white z-10">
            <div className="flex items-center gap-2.5">
              <div className="p-1.5 rounded-lg bg-gold-accent/10 border border-gold-accent/30 text-gold-accent">
                <MapPin className="w-4 h-4" />
              </div>
              <div>
                <span className="block font-sans text-[11px] uppercase tracking-widest text-gold-accent font-semibold">
                  Interstellar · Thaltej
                </span>
                <span className="block font-sans text-[10px] text-white/60">
                  Sindhubhavan to Bagban Road, Ahmedabad
                </span>
              </div>
            </div>
            <a
              href={BRAND_COPY.contactDetails.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gold-accent/10 hover:bg-gold-accent/20 border border-gold-accent/30 text-gold-accent font-sans text-[11px] font-medium transition-all"
              title="Open location in Google Maps"
            >
              <span>Open Map</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          {/* Map Iframe Container - Completely Unobstructed */}
          <div className="w-full flex-1 min-h-[380px] sm:min-h-[440px] relative overflow-hidden bg-stone-900">
            <iframe
              src={BRAND_COPY.contactDetails.googleMapsEmbedUrl}
              width="100%"
              height="100%"
              className="w-full h-full min-h-[380px] sm:min-h-[440px] border-0 opacity-95 hover:opacity-100 transition-opacity duration-300"
              style={{
                filter: "contrast(1.05) saturate(1.05) brightness(0.98)",
              }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Vernaura Jewels Atelier Google Maps Location"
            />
          </div>

          {/* Bottom Bar overlay for Map Controls */}
          <div className="p-3 bg-[#071711] border-t border-gold-accent/20 flex items-center justify-between text-[11px] font-sans text-white/60 px-5">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Studio open for private appointments</span>
            </span>
            <a
              href={BRAND_COPY.contactDetails.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold-accent hover:underline flex items-center gap-1 font-medium text-[11px]"
            >
              <span>Get Live Navigation</span>
              <Navigation className="w-3 h-3" />
            </a>
          </div>

        </div>

      </div>
    </div>
  );
}
