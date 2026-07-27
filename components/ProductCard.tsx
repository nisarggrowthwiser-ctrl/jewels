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
  return (
    <Link href={href} className="group block">
      <div className="relative aspect-[3/4] w-full overflow-hidden bg-stone-100 mb-5">
        {/* Subtle overlay that darkens very slightly on hover */}
        <div className="absolute inset-0 bg-stone-900/0 transition-colors duration-700 group-hover:bg-stone-900/5 z-10" />
        
        {/* Next.js Image with transition */}
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-103"
          priority={false}
        />
      </div>
      
      <div className="space-y-1 px-1">
        <span className="eyebrow text-[9px] text-gold-accent block tracking-[0.25em]">
          {category}
        </span>
        <h3 className="font-serif text-base text-text-primary group-hover:text-gold-accent transition-colors duration-300 leading-snug">
          {title}
        </h3>
        <p className="text-[11px] font-sans text-text-muted/60 tracking-wider">
          {price}
        </p>
      </div>
    </Link>
  );
}
