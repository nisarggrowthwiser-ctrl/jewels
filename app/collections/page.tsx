import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import { CATEGORIES } from "@/lib/categories";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Fine Jewellery Collections | Vernaura Jewels",
  description: "Browse the curated signages of Vernaura Jewels: Natural Diamonds, Lab-Grown Diamonds, precious Gold Heritage, Polki, Kundan, and high-end Bridal Sets.",
  openGraph: {
    title: "Fine Jewellery Collections | Vernaura Jewels",
    description: "Browse the curated signages of Vernaura Jewels.",
    type: "website",
  },
};

export default function CollectionsPage() {
  return (
    <>
      <Navbar />

      {/* ─── 1. HERO — Full-bleed dark image, bottom-left headline ─── */}
      <section className="relative min-h-[55vh] sm:min-h-[70vh] md:h-[80vh] w-full overflow-hidden bg-[#071711] flex items-end">
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="https://images.unsplash.com/photo-1599643477877-530eb83abc8e?q=80&w=1200&auto=format&fit=crop"
            alt="Fine jewellery collections hero"
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
              Our Creations
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-light leading-[1.1] mb-3 sm:mb-6">
              Curated Materials &<br />
              Fine Jewellery
            </h1>
            <p className="font-sans text-xs sm:text-sm text-white/70 leading-relaxed tracking-wide max-w-md block">
              Explore the divisions of Vernaura Jewels — from the geological fire of natural diamonds to traditional polki, kundan, and bespoke creations.
            </p>
          </div>
        </div>
      </section>

      <main className="bg-background text-text-primary py-16 sm:py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12 lg:px-16 mb-10 sm:mb-14">
          <AnimatedSection className="space-y-3">
            <span className="block font-sans text-[10px] uppercase tracking-[0.35em] text-text-muted">
              The Vault
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light text-text-primary">
              All Signatures
            </h2>
            <div className="w-8 h-[1px] bg-gold-accent" />
          </AnimatedSection>
        </div>

        {/* 3-Column Spaced Grid with Bottom-Left Image Overlay Titles */}
        <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12 lg:px-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {CATEGORIES.map((col, idx) => (
              <AnimatedSection key={col.slug} delay={idx * 0.08}>
                <Link href={`/collections/${col.slug}`} className="group block relative overflow-hidden bg-[#071711]">
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-[#071711]/80 via-[#071711]/20 to-transparent z-10 opacity-85 group-hover:opacity-95 transition-opacity duration-500" />

                    <Image
                      src={col.image}
                      alt={col.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                    />

                    <div className="absolute bottom-6 left-6 right-6 z-20 transform group-hover:-translate-y-1 transition-transform duration-500 ease-out">
                      <span className="block font-sans text-[9px] uppercase tracking-[0.3em] text-white/70 mb-1">
                        {col.subtitle}
                      </span>
                      <h3 className="font-serif text-lg md:text-xl text-white font-light leading-snug">
                        {col.title}
                      </h3>
                    </div>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
