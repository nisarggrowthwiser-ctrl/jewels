import { Metadata } from "next";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import BespokeTimeline from "@/components/BespokeTimeline";
import BespokeForm from "@/components/BespokeForm";
import { BRAND_NAME, BRAND_COMPANY } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Bespoke Jewellery Commission | ${BRAND_NAME}`,
  description: `Collaborate directly with the design directors at ${BRAND_NAME} (unit of ${BRAND_COMPANY}) to craft a unique custom diamond, gold, or polki heirloom statement.`,
  openGraph: {
    title: `Bespoke Jewellery Commission | ${BRAND_NAME}`,
    description: `Collaborate directly with our design directors to craft a unique custom statement.`,
    type: "website",
  },
};

export default function BespokePage() {
  return (
    <>
      <Navbar />

      {/* ─── 1. HERO — Full-bleed dark image, bottom-left headline ─── */}
      <section className="relative min-h-[55vh] sm:min-h-[70vh] md:h-[80vh] w-full overflow-hidden bg-[#071711] flex items-end">
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1200&auto=format&fit=crop"
            alt="Fine jewellery design sketches"
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
              Private Commissions
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-light leading-[1.1] mb-3 sm:mb-6">
              Your Vision.<br />
              Our Craftsmanship.
            </h1>
            <p className="font-sans text-xs sm:text-sm text-white/75 leading-relaxed tracking-wide max-w-lg block">
              Every meaningful piece begins with a story. Our bespoke design service allows clients to collaborate with our design experts to create jewellery that is deeply personal and entirely unique. Because true luxury is never mass produced.
            </p>
          </div>
        </div>
      </section>

      <main className="bg-background text-text-primary">

        {/* ─── 2. THE BESPOKE PROCESS TIMELINE ─── */}
        <section className="py-16 sm:py-24 md:py-32 bg-surface">
          <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12 lg:px-16">
            <AnimatedSection className="space-y-3 mb-8 sm:mb-12 text-center md:text-left">
              <span className="block font-sans text-[10px] uppercase tracking-[0.35em] text-text-muted">
                The Journey
              </span>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light text-text-primary">
                The Bespoke Process
              </h2>
              <div className="w-8 h-[1px] bg-gold-accent mx-auto md:mx-0" />
            </AnimatedSection>

            <BespokeTimeline />
          </div>
        </section>

        {/* ─── 3. BESPOKE QUESTIONNAIRE FORM ─── */}
        <section className="py-16 sm:py-24 md:py-32 max-w-5xl mx-auto px-5 sm:px-8 md:px-12 lg:px-16">
          <BespokeForm />
        </section>

      </main>

      <Footer />
    </>
  );
}
