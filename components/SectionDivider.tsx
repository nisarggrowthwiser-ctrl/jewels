export default function SectionDivider({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center my-16 md:my-24 select-none ${className}`}>
      <div className="w-16 h-[1px] bg-gold-accent/20" />
      <div className="mx-4 w-1.5 h-1.5 border border-gold-accent/40 rotate-45 bg-transparent" />
      <div className="w-16 h-[1px] bg-gold-accent/20" />
    </div>
  );
}
