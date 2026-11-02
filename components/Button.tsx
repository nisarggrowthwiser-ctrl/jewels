import Link from "next/link";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary";
  className?: string;
  type?: "button" | "submit" | "reset";
}

export default function Button({
  children,
  href,
  onClick,
  variant = "primary",
  className = "",
  type = "button",
}: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center font-sans text-[11px] uppercase tracking-[0.22em] transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-accent focus-visible:ring-offset-2";
  
  const variants = {
    primary: "px-8 py-3.5 bg-text-primary text-background border border-text-primary hover:bg-gold-accent hover:text-text-primary hover:border-gold-accent",
    secondary: "px-8 py-3.5 border border-text-primary/30 text-text-primary hover:bg-text-primary hover:text-background hover:border-text-primary bg-transparent",
  };

  if (href) {
    return (
      <Link href={href} className={`${baseStyles} ${variants[variant]} ${className}`}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
}
