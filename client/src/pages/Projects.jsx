import SectionWrapper, { SectionHeading } from "../components/SectionWrapper";

const projects = [
  {
    title: "E-Commerce Web Application",
    description:
      "Full-stack e-commerce platform with user authentication, product management, and shopping cart functionality. Built RESTful APIs for efficient frontend-backend communication.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB"],
    type: "Full Stack",
    github: "https://github.com/chirinbanum",
    color: "teal",
  },
  {
    title: "Recipe Finder Website",
    description:
      "Responsive web app with API integration for dynamic recipe search and filtering. Clean, intuitive UI focused on great user experience and efficient data handling.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB"],
    type: "Full Stack",
    github: "https://github.com/chirinbanum",
    color: "teal",
  },
  {
    title: "CTGAN Augmented Heart Disease Prediction",
    description:
      "Predictive model for heart disease using CTGAN for data augmentation and Autoencoders for feature extraction. Published at IEEE ICIIET 2025.",
    tech: ["Python", "CTGAN", "Autoencoders", "ML"],
    type: "ML Research",
    github: "https://github.com/chirinbanum",
    badge: "IEEE Published",
    color: "amber",
  },
  {
    title: "Dual Autoencoder & Gaussian Copula Heart Disease Prediction",
    description:
      "Heart disease classification model leveraging Dual Autoencoders and Gaussian Copula-based data augmentation. Improved performance through advanced feature learning.",
    tech: ["Python", "Dual Autoencoders", "Gaussian Copula", "ML"],
    type: "ML Research",
    github: "https://github.com/chirinbanum",
    color: "amber",
  },
];

const colorMap = {
  teal: {
    badge: "bg-teal-400/10 text-teal-400",
    border: "hover:border-teal-400/30",
    pill: "bg-teal-400/10 text-teal-400/80",
  },
  amber: {
    badge: "bg-amber-400/10 text-amber-400",
    border: "hover:border-amber-400/30",
    pill: "bg-amber-400/10 text-amber-400/80",
  },
};

export default function Projects() {
  return (
    <SectionWrapper className="pt-36">
      <SectionHeading label="02 — Projects" title="Things I've Built" />

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p, i) => {
          const c = colorMap[p.color];
          return (
            <div
              key={i}
              className={`group border border-white/8 rounded-2xl p-8 bg-surface-800/30 transition-all duration-300 ${c.border} flex flex-col`}
            >
              <div className="flex items-start justify-between mb-6">
                <div className="flex gap-2 flex-wrap">
                  <span className={`font-mono text-xs px-3 py-1 rounded-full ${c.badge}`}>
                    {p.type}
                  </span>
                  {p.badge && (
                    <span className="font-mono text-xs px-3 py-1 rounded-full bg-purple-400/10 text-purple-400">
                      {p.badge}
                    </span>
                  )}
                </div>
                <a
                  href={p.github}
                  target="_blank"
                  rel="noreferrer"
                  className="text-white/20 hover:text-white transition-colors text-lg"
                  aria-label="GitHub"
                >
                  ↗
                </a>
              </div>

              <h3 className="font-display text-white font-semibold text-xl mb-3 leading-snug">
                {p.title}
              </h3>
              <p className="text-white/50 text-sm leading-relaxed flex-1 mb-6">
                {p.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <span key={t} className={`font-mono text-xs px-3 py-1 rounded-full ${c.pill}`}>
                    {t}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-12 text-center">
        <a
          href="https://github.com/chirinbanum"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 font-mono text-sm text-white/40 hover:text-teal-400 transition-colors"
        >
          More on GitHub ↗
        </a>
      </div>
    </SectionWrapper>
  );
}
