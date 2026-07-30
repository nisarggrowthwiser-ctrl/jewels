import { Metadata } from "next";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import ContactForm from "@/components/ContactForm";
import { BRAND_NAME, BRAND_COMPANY, BRAND_COPY } from "@/lib/constants";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: `Concierge & Showroom Consultation | ${BRAND_NAME}`,
  description: `Reserve a private viewing or connect with our concierge team at ${BRAND_NAME} (unit of ${BRAND_COMPANY}) in Bandra West, Mumbai.`,
  openGraph: {
    title: `Concierge & Showroom Consultation | ${BRAND_NAME}`,
    description: `Reserve a private viewing or connect with our concierge team in Bandra West, Mumbai.`,
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
            alt="Vernaura Jewels Bandra showroom concierge"
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-50"
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-[#071711]/95 via-[#071711]/30 to-[#071711]/40 z-10" />

        <div className="relative pb-8 sm:pb-14 left-0 px-5 sm:px-8 md:px-12 lg:px-16 z-20 max-w-2xl pt-28">
          <span className="block font-sans text-[9px] sm:text-[10px] uppercase tracking-[0.4em] text-white/60 mb-2 sm:mb-4">
            Bespoke Salon
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-light leading-[1.1] mb-3 sm:mb-6">
            Contact &<br />
            Consultation
          </h1>
          <p className="font-sans text-xs sm:text-sm text-white/70 leading-relaxed tracking-wide max-w-md block">
            Our concierge team is dedicated to curating your personal fine jewellery acquisitions. Reach out to schedule a private showroom appointment or send a custom inquiry.
          </p>
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
                  The Showroom
                </span>
                <h2 className="font-serif text-3xl md:text-4xl font-light text-text-primary">
                  Bandra Salon
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

        {/* ─── 3. EMBEDDED MAP SECTION ─── */}
        <section className="pb-16 sm:pb-24 md:pb-32 max-w-7xl mx-auto px-5 sm:px-8 md:px-12 lg:px-16">
          <AnimatedSection className="space-y-3 mb-8">
            <span className="block font-sans text-[10px] uppercase tracking-[0.35em] text-text-muted">
              Location Coordinates
            </span>
            <h2 className="font-serif text-2xl md:text-3xl font-light text-text-primary">
              Find Us In Bandra West
            </h2>
            <div className="w-8 h-[1px] bg-gold-accent" />
          </AnimatedSection>

          <AnimatedSection className="relative aspect-[4/3] sm:aspect-[16/6] w-full bg-surface overflow-hidden shadow-sm border border-border/40">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.488804675549!2d72.8258333153579!3d19.042222222222222!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c975a5b5b5b5%3A0x5a5b5b5b5b5b5b5b!2sBandra%20West%2C%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1626955555555!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "grayscale(1) contrast(1.1) invert(0.9)" }}
              allowFullScreen={true}
              loading="lazy"
              aria-label="Google Maps Showing Bandra West Mumbai Showroom"
            ></iframe>
          </AnimatedSection>
        </section>

      </main>

      <Footer />
    </>
  );
}
