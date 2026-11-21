import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import { CATEGORIES } from "@/lib/categories";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Gold & Diamond Creations | Vernaura Jewels",
  description: "Browse the curated fine jewellery creations of Vernaura Jewels: Natural Diamonds, Lab-Grown Diamonds, Polki, and Kundan artistry.",
  openGraph: {
    title: "Gold & Diamond Creations | Vernaura Jewels",
    description: "Browse the curated fine jewellery creations of Vernaura Jewels.",
    type: "website",
  },
};

export default function CollectionsPage() {
  return (
    <>
      <Navbar />

      {/* ─── 1. HERO — Full-bleed dark image, bottom-left headline ─── */}
      <section className="relative min-h-[60vh] sm:min-h-[70vh] md:h-[80vh] w-full overflow-hidden bg-[#071711] flex items-end">
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/images/gd-hero.jpg"
            alt="Gold & Diamond Fine Jewellery Creations Hero"
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-60"
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-[#071711]/95 via-[#071711]/35 to-[#071711]/40 z-10" />

        <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 md:px-12 lg:px-16 z-20 pt-28 sm:pt-36 pb-10 sm:pb-16">
          <div className="max-w-2xl">
            <span className="block font-sans text-[9px] sm:text-[10px] uppercase tracking-[0.35em] text-white/60 mb-2 sm:mb-4">
              Gold & Diamond Creations
            </span>
            <h1 className="font-serif text-2xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-light leading-[1.15] mb-3 sm:mb-5">
              Curated Materials &<br />
              Fine Jewellery
            </h1>
            <p className="font-sans text-xs sm:text-sm text-white/75 leading-relaxed tracking-wide max-w-md block">
              Explore the divisions of Vernaura Jewels — from the geological fire of natural diamonds to traditional polki, kundan, and bespoke creations.
            </p>
          </div>
        </div>
      </section>

      <main className="bg-background text-text-primary py-12 sm:py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-12 lg:px-16 mb-8 sm:mb-12">
          <AnimatedSection className="space-y-3">
            <span className="block font-sans text-[9px] sm:text-[10px] uppercase tracking-[0.35em] text-text-muted">
              The Vault
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-text-primary">
              All Signatures
            </h2>
            <div className="w-8 h-[1px] bg-gold-accent" />
          </AnimatedSection>
        </div>

        {/* 4-Column Balanced Grid: 2 columns on mobile, 4 columns on desktop */}
        <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-12 lg:px-16">
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5 lg:gap-5 xl:gap-6">
            {CATEGORIES.map((col, idx) => (
              <AnimatedSection key={col.slug} delay={idx * 0.08}>
                <Link href={`/collections/${col.slug}`} className="group block relative overflow-hidden bg-[#071711] rounded-sm">
                  <div className="relative aspect-[3/4] sm:aspect-[4/5] overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-[#071711]/95 via-[#071711]/30 to-transparent z-10 opacity-85 group-hover:opacity-95 transition-opacity duration-500" />

                    <Image
                      src={col.image}
                      alt={col.title}
                      fill
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                    />

                    <div className="absolute bottom-3 sm:bottom-5 left-3 sm:left-5 right-3 sm:right-5 z-20 transform sm:group-hover:-translate-y-1 transition-transform duration-500 ease-out">
                      <span className="block font-sans text-[8px] sm:text-[9px] uppercase tracking-[0.22em] sm:tracking-[0.28em] text-white/70 mb-0.5 sm:mb-1 line-clamp-1">
                        {col.subtitle}
                      </span>
                      <h3 className="font-serif text-sm sm:text-xl lg:text-lg xl:text-xl text-white font-light leading-snug">
                        {col.title}
                      </h3>
                      <div className="mt-2 flex items-center gap-1 text-[9px] uppercase tracking-[0.18em] text-gold-accent font-medium">
                        <span>View</span>
                        <span>→</span>
                      </div>
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
