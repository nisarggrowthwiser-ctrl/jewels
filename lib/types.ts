export interface Product {
  id: string;
  title: string;
  price: string;
  image: string;
  href: string;
}

export interface Category {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  products: Product[];
}
