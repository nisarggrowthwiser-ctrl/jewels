"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface ProductCardProps {
  title: string;
  category: string;
  price?: string;
  image: string;
  href: string;
}

export default function ProductCard({
  title,
  category,
  price = "Price Upon Request",
  image,
  href,
}: ProductCardProps) {
  const [imgSrc, setImgSrc] = useState(image);

  return (
    <Link href={href} className="group block">
      {/* Image container */}
      <div className="relative aspect-[3/4] w-full overflow-hidden bg-surface mb-5">
        {/* Subtle dark overlay on hover */}
        <div className="absolute inset-0 bg-stone-900/0 transition-colors duration-700 group-hover:bg-stone-900/8 z-10" />

        {/* Gold shimmer sweep on hover */}
        <div className="absolute inset-0 z-20 pointer-events-none overflow-hidden">
          <div
            className="absolute top-0 -left-full h-full w-1/2 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-[-20deg] transition-none group-hover:translate-x-[400%] duration-700 ease-in-out"
            style={{ transition: "transform 0.7s cubic-bezier(0.25,1,0.5,1)" }}
          />
        </div>

        {/* Gold bottom reveal bar */}
        <div className="card-gold-bar z-30" />

        {/* Next.js Image */}
        <Image
          src={imgSrc}
          alt={title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.04]"
          priority={false}
          onError={() => setImgSrc("https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=600&auto=format&fit=crop")}
        />
      </div>

      {/* Text content */}
      <div className="space-y-1.5 px-0.5">
        <span className="eyebrow text-[9px] text-gold-accent block tracking-[0.3em]">
          {category}
        </span>
        <h3 className="font-serif text-base sm:text-[17px] text-text-primary group-hover:text-gold-accent transition-colors duration-300 leading-snug">
          {title}
        </h3>
        <div className="flex items-center gap-2 pt-0.5">
          <span className="inline-block w-3 h-[1px] bg-gold-accent/50" />
          <p className="text-[10px] font-sans text-text-muted/70 tracking-[0.2em] uppercase">
            {price}
          </p>
        </div>
      </div>
    </Link>
  );
}
