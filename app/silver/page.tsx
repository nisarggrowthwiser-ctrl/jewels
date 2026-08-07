import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import Button from "@/components/Button";
import { BRAND_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Vernaura Jewels Silver | Sterling Silver Collections`,
  description: `Explore structural, modern, and sculptural statement jewellery, home décor, and spiritual artifacts crafted in fine 925 sterling silver by ${BRAND_NAME}.`,
  openGraph: {
    title: `Vernaura Jewels Silver | Sterling Silver Collections`,
    description: `Explore modern structural 925 sterling silver jewellery, décor, and spiritual artifacts by ${BRAND_NAME}.`,
    type: "website",
  },
};

export default function SilverPage() {
  const silverCategories = [
    {
      title: "Silver Jewellery",
      subtitle: "Structural Statement Pieces",
      desc: "Chunky rings, sculptural cuffs, and minimal chains designed for contemporary styling.",
      image: "https://images.unsplash.com/photo-1598560917505-59a3ad559071?q=80&w=600&auto=format&fit=crop",
      href: "/contact?inquiry=silver-jewellery",
    },
    {
      title: "Home Décor",
      subtitle: "Polished Objects of Art",
      desc: "Sterling silver frames, trays, candelabras, and structural bowls that bring quiet luxury to spaces.",
      image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=600&auto=format&fit=crop",
      href: "/contact?inquiry=silver-decor",
    },
    {
      title: "Spiritual Artifacts",
      desc: "Exquisitely detailed silver puja sets, diyas, and coins crafted with astrological purity rules.",
      subtitle: "Heritage & Devotion",
      image: "https://images.unsplash.com/photo-1606293926075-69a00dbfde81?q=80&w=600&auto=format&fit=crop",
      href: "/contact?inquiry=silver-spiritual",
    },
    {
      title: "Gifting Collections",
      desc: "Refined keepsakes, baby rattles, and custom-engraved table objects for corporate or family milestones.",
      subtitle: "Treasured Keepsakes",
      image: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=600&auto=format&fit=crop",
      href: "/contact?inquiry=silver-gifting",
    },
    {
      title: "Bespoke Silver",
      desc: "Commission unique dinnerware sets, architectural trims, or commemorative centerpieces.",
      subtitle: "Custom Commissions",
      image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=600&auto=format&fit=crop",
      href: "/bespoke",
    },
  ];

  return (
    <>
      <Navbar />

      {/* ─── 1. HERO — Full-bleed dark image, bottom-left headline ─── */}
      <section className="relative min-h-[55vh] sm:min-h-[70vh] md:h-[80vh] w-full overflow-hidden bg-[#071711] flex items-end">
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/images/silver_teaser.png"
            alt="Structural Sterling Silver Ring"
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
              Vernaura Jewels Silver
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-light leading-[1.1] mb-3 sm:mb-6">
              Structural. Modern.<br />
              Timeless.
            </h1>
            <p className="font-sans text-xs sm:text-sm text-white/75 leading-relaxed tracking-wide max-w-lg block">
              Vernaura Jewels Silver presents an exclusive range of sterling silver jewellery, luxury gifts, collectibles, and handcrafted artifacts designed for modern living while honoring traditional artistry.
            </p>
          </div>
        </div>
      </section>

      <main className="theme-silver bg-background text-text-primary py-16 sm:py-24 md:py-32">

        {/* ─── 2. CATEGORIES GRID ─── */}
        <section className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12 lg:px-16 mb-10 sm:mb-14">
          <AnimatedSection className="space-y-3">
            <span className="block font-sans text-[10px] uppercase tracking-[0.35em] text-text-muted">
              The Silver Atelier
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light text-text-primary">
              Silver Categories
            </h2>
            <div className="w-8 h-[1px] bg-gold-accent" />
          </AnimatedSection>
        </section>

        {/* 3-Column Spaced Grid with Bottom-Left Image Overlay Titles */}
        <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12 lg:px-16 mb-14 sm:mb-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {silverCategories.map((cat, idx) => (
              <AnimatedSection key={cat.title} delay={idx * 0.08}>
                <Link href={cat.href} className="group block relative overflow-hidden bg-[#071711]">
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-[#071711]/80 via-[#071711]/20 to-transparent z-10 opacity-85 group-hover:opacity-95 transition-opacity duration-500" />

                    <Image
                      src={cat.image}
                      alt={cat.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                    />

                    <div className="absolute bottom-6 left-6 right-6 z-20 transform group-hover:-translate-y-1 transition-transform duration-500 ease-out">
                      <span className="block font-sans text-[9px] uppercase tracking-[0.3em] text-white/70 mb-1">
                        {cat.subtitle}
                      </span>
                      <h3 className="font-serif text-lg md:text-xl text-white font-light leading-snug">
                        {cat.title}
                      </h3>
                    </div>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>

        {/* ─── 3. CLOSING CTA ─── */}
        <section className="max-w-4xl mx-auto px-5 sm:px-8 md:px-12 lg:px-16 text-center">
          <AnimatedSection className="bg-surface border border-border/40 p-5 sm:p-10 md:p-14 space-y-6">
            <span className="block font-sans text-[10px] uppercase tracking-[0.35em] text-text-muted">
              Corporate & Personal Commissions
            </span>
            <h2 className="font-serif text-2xl md:text-3xl font-light text-text-primary">
              Silver Gifting & Custom Orders
            </h2>
            <p className="font-sans text-sm text-text-muted max-w-md mx-auto leading-relaxed">
              We design custom silver coin keepsakes, dinnerware plates, and corporate collections for special events. Reach out to schedule a showroom viewing.
            </p>
            <div className="pt-2">
              <Button href="/contact" variant="secondary">
                Contact Silver Representative
              </Button>
            </div>
          </AnimatedSection>
        </section>

      </main>

      <Footer />
    </>
  );
}
