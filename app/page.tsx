"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import { BRAND_COPY } from "@/lib/constants";

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    setMounted(true);
  }, []);

  const isReduced = mounted && shouldReduceMotion;

  // Parallax Scroll configuration
  const { scrollY } = useScroll();
  const yParallax = useTransform(scrollY, [0, 800], [0, isReduced ? 0 : 120]);

  // Official Expertise tiles data
  const expertiseTiles = [
    {
      title: "Natural Diamond Jewellery",
      subtitle: "Brilliance & Rarity",
      desc: "Featuring certified natural diamonds selected for their brilliance, beauty, and rarity.",
      image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=800&auto=format&fit=crop",
      href: "/collections/natural-diamond",
    },
    {
      title: "Lab-Grown Diamond Jewellery",
      subtitle: "Contemporary Luxury",
      desc: "Contemporary luxury crafted with premium lab-grown diamonds offering exceptional quality and value.",
      image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=800&auto=format&fit=crop",
      href: "/collections/lab-grown-diamond",
    },
    {
      title: "Gold Jewellery",
      subtitle: "Classic & Contemporary",
      desc: "Timeless creations designed in classic and contemporary styles.",
      image: "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?q=80&w=800&auto=format&fit=crop",
      href: "/collections/gold",
    },
    {
      title: "Polki Jewellery",
      subtitle: "Indian Grandeur",
      desc: "Handcrafted pieces celebrating the grandeur of traditional Indian artistry.",
      image: "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?q=80&w=800&auto=format&fit=crop",
      href: "/collections/polki",
    },
    {
      title: "Kundan Jewellery",
      subtitle: "Heritage & Detail",
      desc: "Exquisite heritage-inspired designs crafted with remarkable attention to detail.",
      image: "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?q=80&w=800&auto=format&fit=crop",
      href: "/collections/kundan",
    },
    {
      title: "Custom Jewellery",
      subtitle: "One-of-a-Kind",
      desc: "One-of-a-kind creations tailored exclusively to your vision.",
      image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=800&auto=format&fit=crop",
      href: "/bespoke",
    },
  ];

  return (
    <>
      <Navbar />

      {/* ─── 1. HERO — Full-bleed dark image, bottom-left official tagline & headline ─── */}
      <section
        ref={heroRef}
        className="relative h-screen w-full overflow-hidden bg-[#071711]"
      >
        <motion.div
          style={{ y: yParallax }}
          className="absolute inset-0 w-full h-[115%]"
        >
          <Image
            src="/images/hero_jewellery.png"
            alt="Vernaura Jewels fine jewellery hero"
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-55"
          />
        </motion.div>

        <div className="absolute inset-0 bg-gradient-to-t from-[#071711]/85 via-[#071711]/20 to-[#071711]/30 z-10" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
          className="absolute bottom-8 sm:bottom-16 left-4 sm:left-6 md:left-16 lg:left-24 z-20 max-w-[calc(100%-2rem)] sm:max-w-3xl pr-4"
        >
          <span className="block font-sans text-[9px] sm:text-[10px] uppercase tracking-[0.4em] text-white/60 mb-3 sm:mb-4">
            Vernaura Jewels
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-light leading-[1.1] mb-4 sm:mb-6">
            Timeless Elegance.<br />
            Crafted Without Compromise.
          </h1>
          <p className="font-sans text-xs sm:text-sm md:text-base text-white/75 leading-relaxed tracking-wide max-w-xl mb-6 sm:mb-8">
            {BRAND_COPY.aboutBrief}
          </p>
          <div className="flex flex-col xs:flex-row flex-wrap gap-3 sm:gap-4">
            <Link
              href="/collections"
              className="inline-flex items-center justify-center gap-2 font-sans text-[11px] uppercase tracking-[0.25em] text-white border border-white/40 px-6 sm:px-7 py-3 sm:py-3.5 hover:bg-white hover:text-text-primary transition-all duration-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              Discover Collections
            </Link>
            <Link
              href="/bespoke"
              className="inline-flex items-center justify-center gap-2 font-sans text-[11px] uppercase tracking-[0.25em] text-white/80 hover:text-white transition-colors duration-300 py-3 sm:py-3.5"
            >
              Create Your Custom Jewellery →
            </Link>
          </div>
        </motion.div>

      </section>

      <main className="bg-background text-text-primary">

        {/* ─── 2. WELCOME / INTRO SECTION ─── */}
        <section className="py-24 md:py-36 lg:py-44 px-6 md:px-16 lg:px-24 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-center">

            {/* Left Text */}
            <div className="lg:col-span-7 space-y-7">
              <AnimatedSection className="space-y-7">
                <span className="block font-sans text-[10px] uppercase tracking-[0.35em] text-text-muted">
                  Welcome to Vernaura Jewels
                </span>
                <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-text-primary font-light leading-snug">
                  {BRAND_COPY.welcomeTitle}
                </h2>
                <div className="w-8 h-[1px] bg-gold-accent" />
                <div className="font-sans text-sm text-text-muted leading-relaxed space-y-4 tracking-wide">
                  {BRAND_COPY.welcomeParagraphs.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
                <div className="pt-2">
                  <Link
                    href="/our-story"
                    className="inline-flex items-center gap-3 font-sans text-[11px] uppercase tracking-[0.25em] text-text-primary border-b border-text-primary pb-0.5 hover:text-gold-accent hover:border-gold-accent transition-colors duration-300"
                  >
                    Our Story & Heritage <span className="text-base leading-none">→</span>
                  </Link>
                </div>
              </AnimatedSection>
            </div>

            {/* Right Image with Offset Decorative Frame */}
            <div className="lg:col-span-5 relative">
              <AnimatedSection delay={0.15} className="relative">
                <div className="absolute -top-6 -right-6 w-3/4 h-3/4 bg-surface z-0 hidden sm:block" aria-hidden="true" />
                <div className="relative aspect-[4/5] overflow-hidden z-10">
                  <Image
                    src="https://images.unsplash.com/photo-1619119069152-a2b331eb392a?q=80&w=900&auto=format&fit=crop"
                    alt="Vernaura Jewels atelier craftsmanship"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 45vw"
                    className="object-cover"
                  />
                </div>
              </AnimatedSection>
            </div>

          </div>
        </section>

        {/* ─── 3. OUR EXPERTISE — 6 Tiles arranged in 3-Column Spaced Grid ─── */}
        <section className="py-24 md:py-36">
          <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24">
            <AnimatedSection className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-14">
              <div className="space-y-3">
                <span className="block font-sans text-[10px] uppercase tracking-[0.35em] text-text-muted">
                  Our Expertise
                </span>
                <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light text-text-primary">
                  {BRAND_COPY.expertiseSubtitle}
                </h2>
                <div className="w-8 h-[1px] bg-gold-accent" />
              </div>
              <Link
                href="/collections"
                className="font-sans text-[11px] uppercase tracking-[0.25em] text-text-primary border-b border-text-primary pb-0.5 hover:text-gold-accent hover:border-gold-accent transition-colors duration-300 shrink-0"
              >
                Discover Collections →
              </Link>
            </AnimatedSection>

            {/* 3-Column Grid with Bottom-Left Text Overlays */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {expertiseTiles.map((tile, idx) => (
                <AnimatedSection key={tile.title} delay={idx * 0.07}>
                  <Link href={tile.href} className="group block relative overflow-hidden bg-[#071711]">
                    <div className="relative aspect-[4/5] overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-t from-[#071711]/85 via-[#071711]/20 to-transparent z-10 opacity-85 group-hover:opacity-95 transition-opacity duration-500" />

                      <Image
                        src={tile.image}
                        alt={tile.title}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                      />

                      <div className="absolute bottom-6 left-6 right-6 z-20 transform group-hover:-translate-y-1 transition-transform duration-500 ease-out">
                        <span className="block font-sans text-[9px] uppercase tracking-[0.3em] text-white/70 mb-1">
                          {tile.subtitle}
                        </span>
                        <h3 className="font-serif text-lg md:text-xl text-white font-light leading-snug mb-1">
                          {tile.title}
                        </h3>
                        <p className="font-sans text-[11px] text-white/60 leading-relaxed font-light line-clamp-2">
                          {tile.desc}
                        </p>
                      </div>
                    </div>
                  </Link>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* ─── 4. WHY VERNAURA — A Commitment to Excellence (5-Column Top Hairline Layout) ─── */}
        <section className="py-24 md:py-36 bg-surface">
          <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24">
            <AnimatedSection className="space-y-4 mb-16">
              <span className="block font-sans text-[10px] uppercase tracking-[0.35em] text-text-muted">
                Why Vernaura
              </span>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light text-text-primary">
                {BRAND_COPY.whyTitle}
              </h2>
              <div className="w-8 h-[1px] bg-gold-accent" />
            </AnimatedSection>

            {/* 5-Column Row with Top Hairline Borders */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 md:gap-10">
              {BRAND_COPY.features.map((feat, idx) => (
                <AnimatedSection
                  key={feat.title}
                  delay={idx * 0.07}
                  className="border-t border-border/80 pt-6 space-y-3"
                >
                  <span className="font-serif text-2xl text-text-muted/60 font-light select-none block">
                    0{idx + 1}
                  </span>
                  <h3 className="font-serif text-lg md:text-xl font-light text-text-primary leading-snug">
                    {feat.title}
                  </h3>
                  <p className="font-sans text-xs md:text-sm text-text-muted leading-relaxed tracking-wide">
                    {feat.desc}
                  </p>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* ─── 5. OUR PHILOSOPHY — Luxury Rooted in Authenticity (With Images - Welworth Match) ─── */}
        <section className="py-24 md:py-36 bg-background border-t border-border/40">
          <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24">
            <AnimatedSection className="max-w-3xl space-y-4 mb-16">
              <span className="block font-sans text-[10px] uppercase tracking-[0.35em] text-text-muted">
                OUR PHILOSOPHY
              </span>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light text-text-primary">
                Luxury Rooted in Authenticity
              </h2>
              <div className="w-8 h-[1px] bg-gold-accent" />
              <div className="font-sans text-sm text-text-muted leading-relaxed space-y-3 tracking-wide pt-2">
                <p>
                  At Vernaura Jewels, we believe true luxury is defined not by excess, but by authenticity, craftsmanship, and enduring value.
                </p>
                <p>
                  Every creation begins with carefully selected materials, passes through the hands of skilled artisans, and is finished with uncompromising attention to detail. We believe jewellery should not only captivate today but continue to inspire admiration decades from now.
                </p>
                <p className="font-medium text-text-primary pt-1">
                  Our philosophy is built upon four enduring principles:
                </p>
              </div>
            </AnimatedSection>

            {/* 4-Column Grid with Images & Titles Below (Matching Screenshot) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
              {[
                {
                  title: "Craftsmanship",
                  desc: "Master artisanship remains at the heart of everything we create. Every detail matters, from design conception to final finishing.",
                  image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=600&auto=format&fit=crop"
                },
                {
                  title: "Authenticity",
                  desc: "Whether natural diamonds, lab-grown diamonds, precious metals, or gemstones, we are committed to transparency and integrity in every piece we offer.",
                  image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=600&auto=format&fit=crop"
                },
                {
                  title: "Personalization",
                  desc: "No two stories are alike. We believe jewellery should reflect the individuality of the person who wears it.",
                  image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=600&auto=format&fit=crop"
                },
                {
                  title: "Timelessness",
                  desc: "Trends may evolve, but true elegance endures. We create jewellery designed to remain relevant, beautiful, and meaningful across generations.",
                  image: "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?q=80&w=600&auto=format&fit=crop"
                },
              ].map((pillar, idx) => (
                <AnimatedSection
                  key={pillar.title}
                  delay={idx * 0.08}
                  className="space-y-4"
                >
                  {/* Image container */}
                  <div className="relative aspect-[4/5] overflow-hidden bg-surface">
                    <Image
                      src={pillar.image}
                      alt={pillar.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover transition-transform duration-[1200ms] ease-out hover:scale-105"
                    />
                  </div>

                  {/* Text Content */}
                  <div className="space-y-2">
                    <h3 className="font-serif text-lg text-text-primary font-light">
                      {pillar.title}
                    </h3>
                    <p className="font-sans text-xs text-text-muted leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* ─── 5. VERNAURA JEWELS SILVER TEASER ─── */}
        <section className="py-24 md:py-36 lg:py-44">
          <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-center">

              {/* Image Left */}
              <div className="lg:col-span-7 relative order-2 lg:order-1">
                <AnimatedSection className="relative">
                  <div className="absolute -top-6 -left-6 w-3/4 h-3/4 bg-surface z-0 hidden sm:block" aria-hidden="true" />
                  <div className="relative aspect-[4/3] overflow-hidden z-10">
                    <Image
                      src="/images/silver_teaser.png"
                      alt="Vernaura Jewels Silver collection"
                      fill
                      sizes="(max-width: 1024px) 100vw, 55vw"
                      className="object-cover"
                    />
                  </div>
                </AnimatedSection>
              </div>

              {/* Text Right */}
              <div className="lg:col-span-5 space-y-7 order-1 lg:order-2">
                <AnimatedSection delay={0.1} className="space-y-7">
                  <span className="block font-sans text-[10px] uppercase tracking-[0.35em] text-text-muted">
                    Vernaura Jewels Silver
                  </span>
                  <h2 className="font-serif text-3xl md:text-4xl font-light text-text-primary leading-snug">
                    {BRAND_COPY.silverTitle}
                  </h2>
                  <div className="w-8 h-[1px] bg-gold-accent" />
                  <p className="font-sans text-sm text-text-muted leading-relaxed tracking-wide">
                    {BRAND_COPY.silverBody}
                  </p>
                  <p className="font-sans text-xs text-text-muted/80 tracking-wide uppercase">
                    Explore silver jewellery, home décor, spiritual artifacts, gifting collections, and bespoke silver creations.
                  </p>
                  <Link
                    href="/silver"
                    className="inline-flex items-center gap-3 font-sans text-[11px] uppercase tracking-[0.25em] text-text-primary border-b border-text-primary pb-0.5 hover:text-gold-accent hover:border-gold-accent transition-colors duration-300"
                  >
                    Explore Silver Collection <span className="text-base leading-none">→</span>
                  </Link>
                </AnimatedSection>
              </div>

            </div>
          </div>
        </section>

        {/* ─── 6. BESPOKE JEWELLERY TEASER ─── */}
        <section className="relative py-24 sm:py-36 md:py-52 flex items-end overflow-hidden bg-[#071711]">
          <div className="absolute inset-0 w-full h-full">
            <Image
              src="https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1400&auto=format&fit=crop"
              alt="Bespoke jewellery design studio"
              fill
              sizes="100vw"
              className="object-cover opacity-40"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#071711]/90 to-transparent z-10" />

          <AnimatedSection className="relative z-20 px-6 md:px-16 lg:px-24 max-w-7xl w-full space-y-5">
            <span className="block font-sans text-[10px] uppercase tracking-[0.4em] text-white/50">
              Bespoke Jewellery
            </span>
            <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl text-white font-light leading-[1.1] max-w-2xl">
              {BRAND_COPY.bespokeTitle}
            </h2>
            <div className="space-y-2 max-w-lg">
              {BRAND_COPY.bespokeBody.map((line, i) => (
                <p key={i} className={`font-sans text-sm tracking-wide ${i === 3 ? "text-white/90 font-serif italic text-base pt-1" : "text-white/65 leading-relaxed"}`}>
                  {line}
                </p>
              ))}
            </div>
            <div className="pt-4">
              <Link
                href="/bespoke"
                className="inline-flex items-center gap-2 font-sans text-[11px] uppercase tracking-[0.25em] text-white border border-white/30 px-7 py-3.5 hover:bg-white hover:text-text-primary transition-all duration-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                Create Your Custom Jewellery
              </Link>
            </div>
          </AnimatedSection>
        </section>

        {/* ─── 7. FINAL BRAND STATEMENT ─── */}
        <section className="py-28 md:py-40 px-6 md:px-16 lg:px-24 max-w-4xl mx-auto text-center">
          <AnimatedSection className="space-y-8">
            <div className="flex justify-center">
              <div className="w-1.5 h-1.5 bg-gold-accent rotate-45" />
            </div>
            <p className="font-serif italic text-2xl md:text-3xl text-text-primary font-light leading-relaxed">
              &ldquo;{BRAND_COPY.finalStatement}&rdquo;
            </p>
            <div>
              <span className="block font-sans text-[9px] uppercase tracking-[0.4em] text-gold-accent mb-1">
                VERNAURA JEWELS
              </span>
              <span className="font-sans text-[10px] text-text-muted tracking-widest uppercase">
                Crafted for Generations.
              </span>
            </div>
          </AnimatedSection>
        </section>

      </main>

      <Footer />
    </>
  );
}
