import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const roles = [
  "Full-Stack Developer",
  "React.js Enthusiast",
  "ML Researcher",
  "IEEE Author",
];

const tech = ["React.js", "Node.js", "Express.js", "MongoDB", "Java", "PostgreSQL"];

export default function Home() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout;
    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setRoleIndex((i) => (i + 1) % roles.length);
    }
    return () => clearTimeout(timeout);
  }, [displayed, deleting, roleIndex]);

  return (
    <div className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(#2DD4BF 1px, transparent 1px), linear-gradient(90deg, #2DD4BF 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />
      {/* Glow orb */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-teal-600/10 blur-[120px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6 pt-32 pb-24 w-full">
        <div className="animate-fade-up stagger-1">
          <span className="inline-flex items-center gap-2 font-mono text-xs text-teal-400 tracking-widest uppercase border border-teal-400/20 rounded-full px-4 py-2 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse" />
            Available for opportunities
          </span>
        </div>

        <h1 className="font-display font-bold text-5xl md:text-7xl lg:text-8xl text-white leading-none mb-6 animate-fade-up stagger-2">
          Chirin<br />
          <span className="text-gradient">Banu M</span>
        </h1>

        <div className="flex items-center gap-3 mb-8 animate-fade-up stagger-3 h-10">
          <span className="font-body text-xl md:text-2xl text-white/60">{displayed}</span>
          <span className="w-0.5 h-7 bg-teal-400 animate-blink" />
        </div>

        <p className="font-body text-white/50 text-lg max-w-xl leading-relaxed mb-12 animate-fade-up stagger-4">
          B.E. CSE student at Kongu Engineering College · Building scalable web apps
          and ML models · Published at IEEE ICIIET 2025.
        </p>

        <div className="flex flex-wrap gap-4 mb-20 animate-fade-up stagger-5">
          <Link
            to="/projects"
            className="font-mono text-sm bg-teal-400 text-surface-900 px-6 py-3 rounded hover:bg-teal-500 transition-all duration-200 font-medium"
          >
            View Projects →
          </Link>
          <Link
            to="/contact"
            className="font-mono text-sm border border-white/20 text-white px-6 py-3 rounded hover:border-teal-400/50 hover:text-teal-400 transition-all duration-200"
          >
            Get in touch
          </Link>
        </div>

        {/* Tech stack pills */}
        <div className="animate-fade-up stagger-5">
          <p className="font-mono text-xs text-white/20 uppercase tracking-widest mb-4">Tech Stack</p>
          <div className="flex flex-wrap gap-2">
            {tech.map((t) => (
              <span
                key={t}
                className="font-mono text-xs text-white/50 border border-white/10 px-3 py-1.5 rounded-full hover:border-teal-400/30 hover:text-teal-400 transition-all duration-200"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-3 gap-6 mt-20 pt-12 border-t border-white/5 animate-fade-up stagger-5">
          {[
            { num: "8.15", label: "CGPA" },
            { num: "4+", label: "Projects" },
            { num: "1", label: "IEEE Paper" },
          ].map(({ num, label }) => (
            <div key={label}>
              <p className="font-display text-3xl md:text-4xl font-bold text-white">{num}</p>
              <p className="font-body text-white/30 text-sm mt-1">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
