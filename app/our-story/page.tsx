import { Metadata } from "next";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import { BRAND_NAME, BRAND_COMPANY } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Our Story & Heritage | Vernaura Jewels",
  description: `Discover the origins, vision, and design philosophy of ${BRAND_NAME} (unit of ${BRAND_COMPANY}). A legacy of beauty, crafted for generations.`,
  openGraph: {
    title: `Our Story & Heritage | ${BRAND_NAME}`,
    description: `A legacy of beauty, crafted for generations at ${BRAND_NAME}.`,
    type: "website",
  },
};

export default function OurStory() {
  const pillars = [
    {
      title: "Craftsmanship",
      desc: "Master artisanship remains at the heart of everything we create. Every detail matters, from design conception to final finishing.",
    },
    {
      title: "Authenticity",
      desc: "Whether natural diamonds, lab-grown diamonds, precious metals, or gemstones, we are committed to transparency and integrity in every piece we offer.",
    },
    {
      title: "Personalization",
      desc: "No two stories are alike. We believe jewellery should reflect the individuality of the person who wears it.",
    },
    {
      title: "Timelessness",
      desc: "Trends may evolve, but true elegance endures. We create jewellery designed to remain relevant, beautiful, and meaningful across generations.",
    },
  ];

  const values = [
    {
      title: "Uncompromising Quality",
      desc: "Every creation reflects the highest standards of materials, craftsmanship, and finishing.",
    },
    {
      title: "Transparency and Trust",
      desc: "We believe trust is earned through honesty, consistency, and complete transparency in every customer interaction.",
    },
    {
      title: "Personalized Luxury",
      desc: "Every client deserves a jewellery experience tailored to their aspirations, preferences, and personal story.",
    },
    {
      title: "Innovation with Heritage",
      desc: "We honour traditional jewellery-making techniques while embracing modern design, technology, and evolving customer needs.",
    },
    {
      title: "Lasting Relationships",
      desc: "Our goal extends beyond a single purchase. We seek to build lifelong relationships with clients and families who place their trust in the Vernaura name.",
    },
  ];

  return (
    <>
      <Navbar />

      {/* ─── 1. HERO — Full-bleed dark image, bottom-left headline ─── */}
      <section className="relative min-h-[55vh] sm:min-h-[70vh] md:h-[80vh] w-full overflow-hidden bg-[#071711] flex items-end">
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="https://images.unsplash.com/photo-1573408301185-9146fe634ad0?q=80&w=1200&auto=format&fit=crop"
            alt="Master jeweller crafting"
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-50"
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-[#071711]/95 via-[#071711]/30 to-[#071711]/40 z-10" />

        <div className="relative pb-8 sm:pb-14 left-0 px-5 sm:px-8 md:px-12 lg:px-16 z-20 max-w-2xl pt-28">
          <span className="block font-sans text-[9px] sm:text-[10px] uppercase tracking-[0.4em] text-white/60 mb-2 sm:mb-4">
            Our Story
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-light leading-[1.1] mb-3 sm:mb-6">
            A Legacy of Beauty,<br />
            Crafted for Generations
          </h1>
          <p className="font-sans text-xs sm:text-sm md:text-lg text-white/80 leading-relaxed font-light max-w-md block">
            &ldquo;Jewellery has always been more than adornment. It is a reflection of milestones, emotions, traditions, and personal journeys.&rdquo;
          </p>
        </div>
      </section>

      <main className="bg-background text-text-primary">

        {/* ─── 2. OUR STORY NARRATIVE & WHY VERNAURA WAS CREATED ─── */}
        <section className="py-16 sm:py-24 md:py-32 px-5 sm:px-8 md:px-12 lg:px-16 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">

            {/* Left text */}
            <div className="lg:col-span-7 space-y-7">
              <AnimatedSection className="space-y-7">
                <span className="block font-sans text-[10px] uppercase tracking-[0.35em] text-text-muted">
                  Why Vernaura Was Created
                </span>
                <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-text-primary font-light leading-snug">
                  Bridging Industry Expertise & Transparent Luxury
                </h2>
                <div className="w-8 h-[1px] bg-gold-accent" />
                <div className="font-sans text-sm text-text-muted leading-relaxed space-y-4 tracking-wide">
                  <p>
                    The foundation of Vernaura Jewels lies in a simple observation: customers deserve a jewellery experience that is transparent, personalized, and centered around quality.
                  </p>
                  <p>
                    Having spent years in the diamond industry, our founder witnessed the remarkable journey of a diamond—from sourcing and selection to craftsmanship and final creation. This experience revealed an opportunity to build a brand that would combine industry expertise with a customer-first approach.
                  </p>
                  <p>
                    Vernaura Jewels was established to bridge this gap. Our goal was to create a complete jewellery destination where clients could confidently explore certified natural diamonds, premium lab-grown diamonds, gold jewellery, polki and kundan creations, bespoke designs, and silver masterpieces—all backed by professional guidance and uncompromising quality standards.
                  </p>
                  <p>
                    Today, Vernaura continues to be guided by the same principles on which it was founded: trust, craftsmanship, transparency, and the pursuit of excellence.
                  </p>
                </div>
              </AnimatedSection>
            </div>

            {/* Right image with offset decorative frame */}
            <div className="lg:col-span-5 relative">
              <AnimatedSection delay={0.15} className="relative">
                <div className="absolute -top-6 -right-6 w-3/4 h-3/4 bg-surface z-0 hidden sm:block" aria-hidden="true" />
                <div className="relative aspect-[4/5] overflow-hidden z-10">
                  <Image
                    src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=800&auto=format&fit=crop"
                    alt="Vernaura Jewels heirloom craftsmanship"
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover"
                  />
                </div>
              </AnimatedSection>
            </div>

          </div>
        </section>

        {/* ─── 3. OUR VISION SECTION ─── */}
        <section className="py-16 sm:py-24 md:py-32 bg-surface border-y border-border/40">
          <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12 lg:px-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-16 items-center">
              
              <div className="lg:col-span-5 space-y-5">
                <AnimatedSection className="space-y-5">
                  <span className="block font-sans text-[10px] uppercase tracking-[0.35em] text-text-muted">
                    Our Vision
                  </span>
                  <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light text-text-primary leading-tight">
                    To Become a Trusted Name in Fine Jewellery Across Generations
                  </h2>
                  <div className="w-8 h-[1px] bg-gold-accent" />
                </AnimatedSection>
              </div>

              <div className="lg:col-span-7">
                <AnimatedSection delay={0.1} className="font-sans text-sm text-text-muted leading-relaxed space-y-4 tracking-wide">
                  <p>
                    Our vision is to establish Vernaura Jewels as a symbol of excellence, trust, and timeless luxury in the world of fine jewellery.
                  </p>
                  <p>
                    We aspire to create a brand that seamlessly blends traditional craftsmanship with contemporary elegance while maintaining the highest standards of quality, authenticity, and customer experience.
                  </p>
                  <p>
                    By offering exceptional natural diamonds, premium lab-grown diamonds, bespoke creations, and artisanal jewellery collections, we aim to become the preferred destination for discerning clients seeking jewellery that holds both beauty and meaning.
                  </p>
                </AnimatedSection>
              </div>

            </div>
          </div>
        </section>

        {/* ─── 4. OUR PHILOSOPHY (4 PILLARS) ─── */}
        <section className="py-16 sm:py-24 md:py-32 max-w-7xl mx-auto px-5 sm:px-8 md:px-12 lg:px-16">
          <AnimatedSection className="max-w-3xl space-y-4 mb-10 sm:mb-14">
            <span className="block font-sans text-[10px] uppercase tracking-[0.35em] text-text-muted">
              Our Philosophy
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light text-text-primary">
              Luxury Rooted in Authenticity
            </h2>
            <div className="w-8 h-[1px] bg-gold-accent" />
            <p className="font-sans text-sm text-text-muted leading-relaxed tracking-wide pt-2">
              At Vernaura Jewels, we believe true luxury is defined not by excess, but by authenticity, craftsmanship, and enduring value. Every creation begins with carefully selected materials, passes through the hands of skilled artisans, and is finished with uncompromising attention to detail. We believe jewellery should not only captivate today but continue to inspire admiration decades from now.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
            {pillars.map((pillar, idx) => (
              <AnimatedSection
                key={pillar.title}
                delay={idx * 0.08}
                className="border-t border-gold-accent/40 pt-6 space-y-3"
              >
                <span className="font-serif text-2xl text-gold-accent font-light select-none">
                  0{idx + 1}
                </span>
                <h3 className="font-serif text-xl font-light text-text-primary">
                  {pillar.title}
                </h3>
                <p className="font-sans text-xs md:text-sm text-text-muted leading-relaxed">
                  {pillar.desc}
                </p>
              </AnimatedSection>
            ))}
          </div>
        </section>

        {/* ─── 5. WHAT VERNAURA STANDS FOR (5 VALUES) ─── */}
        <section className="py-16 sm:py-24 md:py-32 bg-surface border-t border-border/40">
          <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12 lg:px-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
              <div className="lg:col-span-4 space-y-5">
                <AnimatedSection className="space-y-5">
                  <span className="block font-sans text-[10px] uppercase tracking-[0.35em] text-text-muted">
                    What Vernaura Stands For
                  </span>
                  <h2 className="font-serif text-3xl md:text-4xl font-light text-text-primary leading-snug">
                    Excellence.<br />
                    Trust.<br />
                    Individuality.
                  </h2>
                  <div className="w-8 h-[1px] bg-gold-accent" />
                  <p className="font-sans text-sm text-text-muted leading-relaxed">
                    The name Vernaura represents our commitment to creating jewellery that combines exceptional artistry with genuine value.
                  </p>
                </AnimatedSection>
              </div>

              <div className="lg:col-span-8">
                {values.map((val, idx) => (
                  <AnimatedSection
                    key={val.title}
                    delay={idx * 0.07}
                    className="flex gap-5 sm:gap-8 py-6 sm:py-8 border-b border-border/60 last:border-b-0"
                  >
                    <span className="font-serif text-2xl text-gold-accent font-light select-none shrink-0 pt-0.5 w-8">
                      0{idx + 1}
                    </span>
                    <div className="space-y-2">
                      <h3 className="font-serif text-lg md:text-xl text-text-primary font-light">
                        {val.title}
                      </h3>
                      <p className="font-sans text-sm text-text-muted leading-relaxed">
                        {val.desc}
                      </p>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ─── 6. FOUNDER'S MESSAGE ─── */}
        <section className="py-16 sm:py-24 md:py-32 max-w-5xl mx-auto px-5 sm:px-8 md:px-12 lg:px-16">
          <AnimatedSection className="bg-surface border border-border/50 p-5 sm:p-10 md:p-14 relative space-y-8">
            <div className="space-y-4">
              <span className="block font-sans text-[10px] uppercase tracking-[0.35em] text-text-muted">
                Founder&apos;s Message
              </span>
              <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-light text-text-primary leading-snug">
                Building a Legacy from Passion, Craftsmanship, and Trust
              </h2>
              <div className="w-8 h-[1px] bg-gold-accent" />
            </div>

            <div className="font-sans text-sm text-text-muted leading-relaxed space-y-4 tracking-wide">
              <p>
                Vernaura Jewels was founded with a simple yet powerful vision — to create jewellery that reflects exceptional craftsmanship, uncompromising quality, and genuine trust.
              </p>
              <p>
                As a first-generation entrepreneur, my journey began with years of experience in the diamond industry, where I gained a deep understanding of diamonds, jewellery manufacturing, and craftsmanship. That experience taught me something important: while jewellery is admired for its beauty, it is ultimately purchased on trust.
              </p>
              <p>
                That belief shaped everything about Vernaura. Our goal has always been to build a brand where clients discover not just beautiful jewellery, but a personalized experience built around their individual needs and aspirations. Every piece that bears the Vernaura name — a natural diamond solitaire, a bespoke bridal creation, a heritage-inspired polki masterpiece, or a handcrafted silver artifact — represents countless hours of design, craftsmanship, and attention to detail.
              </p>
              <p>
                We believe jewellery should be as unique as the person who wears it, and that belief drives our passion for customization, transforming ideas and emotions into creations that are truly personal.
              </p>
              <p>
                Building Vernaura Jewels is more than a business — it is the beginning of a legacy. We are deeply grateful for the trust our clients place in us, and remain committed to the values of quality, integrity, and excellence that define this brand.
              </p>
              <p>
                Thank you for being part of the Vernaura story.
              </p>
            </div>

            <div className="pt-6 border-t border-border/60 space-y-1">
              <p className="font-sans text-xs text-text-muted">Warm Regards,</p>
              <p className="font-serif text-lg text-text-primary italic tracking-wide">
                Founder
              </p>
              <p className="font-sans text-[10px] uppercase tracking-[0.3em] text-gold-accent">
                {BRAND_NAME}
              </p>
            </div>
          </AnimatedSection>
        </section>

        {/* ─── 7. CLOSING BRAND COMMITMENT ─── */}
        <section className="py-12 sm:py-16 md:pb-32 max-w-4xl mx-auto px-5 sm:px-8 md:px-12 lg:px-16 text-center">
          <AnimatedSection className="space-y-8">
            <div className="flex justify-center">
              <div className="w-1.5 h-1.5 bg-gold-accent rotate-45" />
            </div>
            <p className="font-serif italic text-2xl md:text-3xl text-text-primary font-light leading-relaxed">
              &ldquo;At Vernaura Jewels, every piece we create is guided by these values and designed to become part of life&apos;s most meaningful moments.&rdquo;
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
