import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import ProductCard from "@/components/ProductCard";
import Button from "@/components/Button";
import { CATEGORIES } from "@/lib/categories";
import { notFound } from "next/navigation";
import Image from "next/image";
import { ShieldCheck, Award, Eye, FileText } from "lucide-react";

interface PageProps {
  params: Promise<{
    category: string;
  }>;
}

export async function generateStaticParams() {
  return CATEGORIES.map((col) => ({
    category: col.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { category } = await params;
  const col = CATEGORIES.find((c) => c.slug === category);

  if (!col) {
    return {
      title: "Collection Not Found | Vernaura Jewels",
    };
  }

  return {
    title: `${col.title} | Vernaura Jewels`,
    description: col.description,
    openGraph: {
      title: `${col.title} | Vernaura Jewels`,
      description: col.description,
      type: "website",
    },
  };
}

export default async function CategoryPage({ params }: PageProps) {
  const { category } = await params;
  const col = CATEGORIES.find((c) => c.slug === category);

  if (!col) {
    notFound();
  }

  const isDiamond = category === "natural-diamond" || category === "lab-grown-diamond";

  return (
    <>
      <Navbar />

      {/* ─── 1. HERO — Full-bleed dark image, bottom-left headline ─── */}
      <section className="relative min-h-[55vh] sm:min-h-[70vh] md:h-[80vh] w-full overflow-hidden bg-[#071711] flex items-end">
        <div className="absolute inset-0 w-full h-full">
          <Image
            src={col.image}
            alt={col.title}
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-45"
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-[#071711]/95 via-[#071711]/30 to-[#071711]/40 z-10" />

        <div className="relative pb-14 sm:pb-16 left-0 px-5 sm:px-8 md:px-12 lg:px-16 z-20 max-w-2xl pt-28">
          <span className="block font-sans text-[9px] sm:text-[10px] uppercase tracking-[0.4em] text-white/60 mb-2 sm:mb-4">
            {col.subtitle}
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-light leading-[1.1] mb-3 sm:mb-6">
            {col.title}
          </h1>
          <p className="font-sans text-xs sm:text-sm text-white/70 leading-relaxed tracking-wide max-w-md block">
            {col.description}
          </p>
        </div>
      </section>

      <main className="bg-background text-text-primary py-16 sm:py-24 md:py-32">

        {/* ─── 2. PRODUCT CATALOG GRID ─── */}
        <section className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12 lg:px-16 mb-14 sm:mb-20">
          <AnimatedSection className="space-y-3 mb-10 sm:mb-12">
            <span className="block font-sans text-[10px] uppercase tracking-[0.35em] text-text-muted">
              The Catalog
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-light text-text-primary">
              Curated Statements
            </h2>
            <div className="w-8 h-[1px] bg-gold-accent" />
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 md:gap-8">
            {col.products.map((prod, index) => (
              <AnimatedSection key={prod.id} delay={index * 0.08}>
                <ProductCard
                  title={prod.title}
                  category={col.title}
                  price={prod.price}
                  image={prod.image}
                  href={prod.href}
                />
              </AnimatedSection>
            ))}
          </div>
        </section>

        {/* ─── 3. DIAMOND TRUST SECTION (if applicable) ─── */}
        {isDiamond && (
          <section className="py-16 sm:py-24 bg-surface border-y border-border/50 mb-14 sm:mb-20">
            <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12 lg:px-16">
              <AnimatedSection className="max-w-2xl space-y-4 mb-10 sm:mb-14">
                <span className="block font-sans text-[10px] uppercase tracking-[0.35em] text-text-muted">
                  Quality Assurance
                </span>
                <h2 className="font-serif text-3xl md:text-4xl font-light text-text-primary">
                  Certified Diamonds.<br />Uncompromising Standards.
                </h2>
                <div className="w-8 h-[1px] bg-gold-accent" />
                <p className="font-sans text-sm text-text-muted leading-relaxed">
                  We guarantee absolute transparency for every single carat. Our diamonds undergo multi-stage analysis prior to final custom mounting.
                </p>
              </AnimatedSection>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10">
                {[
                  {
                    icon: Award,
                    title: "IGI & GIA Certifications",
                    desc: "Every stone above 0.3 carats comes accompanied by an independent grading report verifying its 4C metrics.",
                  },
                  {
                    icon: ShieldCheck,
                    title: "Laser Inscribed Integrity",
                    desc: "Microscopic verification numbers laser-engraved on the girdle, matching laboratory document listings.",
                  },
                  {
                    icon: FileText,
                    title: "Triple Excellent Cut Grade",
                    desc: "We exclusively select diamonds evaluated as Excellent in Cut, Polish, and Symmetry for maximum brilliance.",
                  },
                  {
                    icon: Eye,
                    title: "Ethical Procurement Vetting",
                    desc: "Sourced through direct channels under strict compliance with the Kimberley Process or carbon-neutral synthesis.",
                  },
                ].map((item, idx) => (
                  <AnimatedSection key={item.title} delay={idx * 0.08} className="space-y-4">
                    <div className="inline-flex items-center justify-center p-3 bg-background border border-gold-accent/20 rounded-full text-gold-accent">
                      <item.icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-serif text-lg font-light text-text-primary">
                      {item.title}
                    </h3>
                    <p className="font-sans text-xs text-text-muted leading-relaxed">
                      {item.desc}
                    </p>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ─── 4. BESPOKE CALLOUT ─── */}
        <section className="max-w-4xl mx-auto px-5 sm:px-8 md:px-12 lg:px-16 text-center">
          <AnimatedSection className="bg-surface border border-border/40 p-5 sm:p-10 md:p-14 space-y-6">
            <span className="block font-sans text-[10px] uppercase tracking-[0.35em] text-text-muted">
              Tailored Artistry
            </span>
            <h2 className="font-serif text-2xl md:text-3xl font-light text-text-primary">
              Desire a Modification?
            </h2>
            <p className="font-sans text-sm text-text-muted max-w-md mx-auto leading-relaxed">
              All collections can be customized to match your metal choices, diamond sizes, or stone specifications in our private salon.
            </p>
            <div className="pt-2">
              <Button href="/bespoke" variant="secondary">
                Request Customization
              </Button>
            </div>
          </AnimatedSection>
        </section>

      </main>

      <Footer />
    </>
  );
}
