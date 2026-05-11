export default function SectionWrapper({ children, className = "" }) {
  return (
    <section className={`max-w-6xl mx-auto px-6 py-24 ${className}`}>
      {children}
    </section>
  );
}

export function SectionHeading({ label, title }) {
  return (
    <div className="mb-16">
      <p className="font-mono text-teal-400 text-xs tracking-widest uppercase mb-3">
        {label}
      </p>
      <h2 className="font-display text-4xl md:text-5xl font-bold text-white">
        {title}
      </h2>
    </div>
  );
}
