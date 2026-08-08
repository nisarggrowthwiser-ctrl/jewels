import { Metadata } from "next";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import ContactForm from "@/components/ContactForm";
import LocationBox from "@/components/LocationBox";
import { BRAND_NAME, BRAND_COMPANY, BRAND_COPY } from "@/lib/constants";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: `Concierge & Custom Atelier Consultation | ${BRAND_NAME}`,
  description: `Reserve a private bespoke consultation or connect with our design team at ${BRAND_NAME} in Thaltej, Ahmedabad.`,
  openGraph: {
    title: `Concierge & Custom Atelier Consultation | ${BRAND_NAME}`,
    description: `Reserve a private bespoke consultation or connect with our design team in Thaltej, Ahmedabad.`,
    type: "website",
  },
};

export default function ContactPage() {
  return (
    <>
      <Navbar />

      {/* ─── 1. HERO — Full-bleed dark image, bottom-left headline ─── */}
      <section className="relative min-h-[50vh] sm:min-h-[65vh] md:h-[70vh] w-full overflow-hidden bg-[#071711] flex items-end">
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=1200&auto=format&fit=crop"
            alt="Vernaura Jewels Thaltej design atelier"
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-50"
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-[#071711]/95 via-[#071711]/30 to-[#071711]/40 z-10" />

        <div className="w-full max-w-7xl mx-auto px-5 sm:px-8 md:px-12 lg:px-16 z-20 pt-32 sm:pt-36 pb-12 sm:pb-16">
          <div className="max-w-2xl">
            <span className="block font-sans text-[9px] sm:text-[10px] uppercase tracking-[0.4em] text-white/60 mb-2 sm:mb-4">
              Vernaura Jewels — Ahmedabad
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-light leading-[1.1] mb-3 sm:mb-6">
              Contact &<br />
              Consultation
            </h1>
            <p className="font-sans text-xs sm:text-sm text-white/70 leading-relaxed tracking-wide max-w-md block">
              Our concierge team is dedicated to curating your personal fine jewellery acquisitions. Reach out to schedule a private bespoke appointment or send a custom inquiry.
            </p>
          </div>
        </div>
      </section>

      <main className="bg-background text-text-primary">

        {/* ─── 2. CONTACT SPLIT COLUMNS ─── */}
        <section className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12 lg:px-16 py-16 sm:py-24 md:py-32 grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-16 items-stretch">

          {/* Details Left */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-12">
            <AnimatedSection className="space-y-8">
              <div className="space-y-3">
                <span className="block font-sans text-[10px] uppercase tracking-[0.35em] text-text-muted">
                  The Design Atelier
                </span>
                <h2 className="font-serif text-3xl md:text-4xl font-light text-text-primary">
                  Thaltej Design Studio
                </h2>
                <div className="w-8 h-[1px] bg-gold-accent" />
              </div>

              <div className="space-y-6 font-sans text-sm text-text-muted leading-relaxed tracking-wide">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-surface border border-border/40 rounded-full text-gold-accent shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-serif text-text-primary text-base font-light mb-0.5">Address</h3>
                    <p>{BRAND_COPY.contactDetails.address}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-surface border border-border/40 rounded-full text-gold-accent shrink-0 mt-0.5">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-serif text-text-primary text-base font-light mb-0.5">Concierge Line</h3>
                    <a href={`tel:${BRAND_COPY.contactDetails.phone}`} className="hover:text-gold-accent transition-colors block">
                      {BRAND_COPY.contactDetails.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-surface border border-border/40 rounded-full text-gold-accent shrink-0 mt-0.5">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-serif text-text-primary text-base font-light mb-0.5">General Inquiries</h3>
                    <a href={`mailto:${BRAND_COPY.contactDetails.email}`} className="hover:text-gold-accent transition-colors block">
                      {BRAND_COPY.contactDetails.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-surface border border-border/40 rounded-full text-gold-accent shrink-0 mt-0.5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-serif text-text-primary text-base font-light mb-0.5">Business Hours</h3>
                    <p>{BRAND_COPY.contactDetails.hours}</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Social Links */}
            <AnimatedSection className="space-y-3 pt-6 border-t border-border/50">
              <span className="block font-sans text-[9px] uppercase tracking-[0.3em] text-text-muted">
                Follow the House
              </span>
              <div className="flex items-center flex-wrap gap-x-4 gap-y-2 text-xs text-text-primary font-sans uppercase tracking-widest text-[10px]">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gold-accent transition-colors">
                  Instagram
                </a>
                <span className="text-border">/</span>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gold-accent transition-colors">
                  Facebook
                </a>
                <span className="text-border">/</span>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-gold-accent transition-colors">
                  LinkedIn
                </a>
              </div>
            </AnimatedSection>
          </div>

          {/* Form Right */}
          <div className="lg:col-span-7">
            <AnimatedSection delay={0.1} className="h-full">
              <ContactForm />
            </AnimatedSection>
          </div>

        </section>

        {/* ─── 3. EMBEDDED MAP & LOCATION SECTION ─── */}
        <section className="pb-16 sm:pb-24 md:pb-32 max-w-7xl mx-auto px-5 sm:px-8 md:px-12 lg:px-16">
          <AnimatedSection className="space-y-3 mb-8">
            <span className="block font-sans text-[10px] uppercase tracking-[0.35em] text-text-muted">
              Location Coordinates
            </span>
            <h2 className="font-serif text-2xl md:text-3xl font-light text-text-primary">
              Find Us In Thaltej, Ahmedabad
            </h2>
            <div className="w-8 h-[1px] bg-gold-accent" />
          </AnimatedSection>

          <AnimatedSection>
            <LocationBox />
          </AnimatedSection>
        </section>

      </main>

      <Footer />
    </>
  );
}
