export interface Category {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export const BRAND_NAME = "Vernaura Jewels";
export const BRAND_COMPANY = "Vernaura Ventures Pvt. Ltd.";
export const BRAND_TAGLINE = "Timeless Elegance. Crafted Without Compromise.";

export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Our Story", href: "/our-story" },
  { label: "Our Creations", href: "/collections" },
  { label: "Bespoke", href: "/bespoke" },
  { label: "Silver Collection", href: "/silver" },
  { label: "Contact", href: "/contact" },
];

export const COLLECTIONS: Category[] = [
  {
    slug: "natural-diamond",
    title: "Natural Diamond Jewellery",
    subtitle: "Brilliance & Rarity",
    description: "Featuring certified natural diamonds selected for their brilliance, beauty, and rarity.",
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=800&auto=format&fit=crop",
  },
  {
    slug: "lab-grown-diamond",
    title: "Lab-Grown Diamond Jewellery",
    subtitle: "Contemporary Luxury",
    description: "Contemporary luxury crafted with premium lab-grown diamonds offering exceptional quality and value.",
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=800&auto=format&fit=crop",
  },
  {
    slug: "gold",
    title: "Gold Jewellery",
    subtitle: "Timeless Radiance",
    description: "Timeless creations designed in classic and contemporary styles.",
    image: "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?q=80&w=800&auto=format&fit=crop",
  },
  {
    slug: "polki",
    title: "Polki Jewellery",
    subtitle: "Grandeur of Artistry",
    description: "Handcrafted pieces celebrating the grandeur of traditional Indian artistry.",
    image: "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?q=80&w=800&auto=format&fit=crop",
  },
  {
    slug: "kundan",
    title: "Kundan Jewellery",
    subtitle: "Heritage & Detail",
    description: "Exquisite heritage-inspired designs crafted with remarkable attention to detail.",
    image: "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?q=80&w=800&auto=format&fit=crop",
  },
  {
    slug: "bridal",
    title: "Custom Jewellery",
    subtitle: "Tailored to Your Vision",
    description: "One-of-a-kind creations tailored exclusively to your vision.",
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=800&auto=format&fit=crop",
  },
];

export const BRAND_COPY = {
  aboutBrief: "Vernaura Jewels is a luxury jewellery house dedicated to creating exceptional diamond, gold, polki, kundan, fine jewellery, and silver creations that celebrate individuality, heritage, and craftsmanship.",
  customTagline: "Bespoke Luxury. Exceptional Value.",
  welcomeTitle: "Where Craftsmanship Meets Luxury",
  welcomeParagraphs: [
    "Vernaura Jewels, a unit of Vernaura Ventures Pvt. Ltd., is built on a simple belief: extraordinary jewellery should combine exceptional craftsmanship, authentic materials, and timeless design.",
    "As a complete jewellery destination, we offer everything from everyday elegance to statement bridal creations, serving clients who seek quality, personalization, and enduring value.",
    "Whether selecting a diamond solitaire, redesigning a family heirloom, or creating a bespoke masterpiece, our clients experience a level of attention and expertise that defines true luxury."
  ],
  expertiseSubtitle: "Fine Jewellery for Every Occasion",
  whyTitle: "A Commitment to Excellence",
  features: [
    {
      title: "Certified Diamonds",
      desc: "Every diamond is carefully sourced and certified for authenticity and quality."
    },
    {
      title: "Master Craftsmanship",
      desc: "Created by skilled artisans with years of expertise in fine jewellery making."
    },
    {
      title: "Bespoke Design Services",
      desc: "Transform your ideas into jewellery designed exclusively for you."
    },
    {
      title: "Complete Jewellery Solutions",
      desc: "From creation and customization to repairs and restoration, all under one roof."
    },
    {
      title: "Trust & Transparency",
      desc: "A customer-first approach built on integrity, quality, and long-term relationships."
    }
  ],
  silverTitle: "Silver Crafted with Distinction",
  silverBody: "Vernaura Jewels Silver presents an exclusive range of sterling silver jewellery, luxury gifts, collectibles, and handcrafted artifacts. Designed for modern living while honoring traditional artistry, our silver creations offer elegance, utility, and timeless appeal.",
  bespokeTitle: "Your Vision. Our Craftsmanship.",
  bespokeBody: [
    "Every meaningful piece begins with a story.",
    "Our bespoke design service allows clients to collaborate with our design experts to create jewellery that is deeply personal and entirely unique.",
    "From engagement rings and bridal sets to anniversary gifts and family heirlooms, each creation is designed and handcrafted to reflect your individual style and sentiment.",
    "Because true luxury is never mass produced."
  ],
  finalStatement: "At Vernaura Jewels, we create more than jewellery. We create symbols of love, achievement, celebration, and legacy—crafted with exceptional artistry and designed to endure the passage of time.",
  contactDetails: {
    address: "203, 204 Interstellar, Sindhubhavan to Bagban Road, Thaltej, Ahmedabad, Gujarat 380059",
    shortAddress: "203, 204 Interstellar, Thaltej, Ahmedabad",
    building: "Interstellar Building",
    suite: "Suite 203 & 204",
    street: "Sindhubhavan to Bagban Road",
    area: "Thaltej",
    city: "Ahmedabad",
    state: "Gujarat",
    pincode: "380059",
    country: "India",
    googleMapsUrl: "https://maps.google.com/?q=203+204+Interstellar+Sindhu+Bhavan+to+Bagban+Road+Thaltej+Ahmedabad+Gujarat+380059",
    googleMapsEmbedUrl: "https://maps.google.com/maps?q=203%2C+204+Interstellar%2C+Sindhubhavan+to+Bagban+Road%2C+Thaltej%2C+Ahmedabad%2C+Gujarat+380059&t=&z=16&ie=UTF8&iwloc=&output=embed",
    phone: "+91 93160 95950",
    email: "info@vernaurajewels.com",
    hours: "Mon - Sat: 11:00 AM - 7:30 PM (By Appointment Only)",
  },
};
