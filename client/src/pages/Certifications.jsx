import SectionWrapper, { SectionHeading } from "../components/SectionWrapper";

const certs = [
  {
    title: "MongoDB Certified Associate Developer",
    issuer: "MongoDB University",
    timeline: "Issued on Feb 13, 2025",
    description:
      "Validates proficiency in building modern applications with MongoDB, including data modeling, CRUD operations, aggregation pipelines, and indexing strategies.",
    icon: "🍃",
  },
  {
    title: "Edge Computing",
    issuer: "NPTEL",
    timeline: "Jan - Mar 2025",
    description:
      "Completed with Elite certification (78/100). Covered edge computing architecture, distributed systems, and low-latency application deployment.",
    icon: "☁️",
  },
  {
    title: "Privacy and Security in Online Social Media",
    issuer: "NPTEL",
    timeline: "Jan - Apr 2025",
    description:
      "Studied privacy risks, cyber threats, and security mechanisms used to protect users on online social platforms.",
    icon: "🔐",
  },
  {
    title: "Entrepreneurship",
    issuer: "NPTEL",
    timeline: "Jul - Oct 2023",
    description:
      "Explored startup ideation, innovation, business models, and entrepreneurial thinking.",
    icon: "🚀",
  },
  {
    title: "Principles of Management",
    issuer: "NPTEL",
    timeline: "Jan - Apr 2023",
    description:
      "Learned core management concepts including planning, organizing, leadership, and decision-making.",
    icon: "📊",
  },
];

const publications = [
  {
    title:
      "CTGAN-Based Heart Disease Prediction with Autoencoder Feature Extraction",
    venue: "IEEE ICIIET 2025",
    timeline: "2025",
    description:
      "Research on using Conditional Tabular GAN (CTGAN) for synthetic data augmentation combined with Autoencoder-based feature extraction to improve heart disease prediction accuracy.",
    icon: "📄",
  },
];

export default function Certifications() {
  return (
    <SectionWrapper className="pt-36">
      <SectionHeading
        label="04 — Credentials"
        title="Certifications & Publications"
      />

      {/* Certifications */}
      <div className="mb-20">
        <p className="font-mono text-teal-400 text-xs tracking-widest uppercase mb-8">
          Certifications
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {certs.map((c, i) => (
            <div
              key={i}
              className="border border-teal-400/20 rounded-2xl p-8 bg-teal-400/5 hover:bg-teal-400/8 hover:border-teal-400/40 transition-all duration-300"
            >
              <div className="text-4xl mb-4">{c.icon}</div>

              <p className="font-mono text-teal-400 text-xs mb-2">
                {c.issuer}
              </p>

              <h3 className="font-display text-white font-bold text-xl mb-3 leading-snug">
                {c.title}
              </h3>

              <p className="font-mono text-white/40 text-xs mb-4">
                {c.timeline}
              </p>

              <p className="text-white/50 text-sm leading-relaxed">
                {c.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Publications */}
      <div>
        <p className="font-mono text-teal-400 text-xs tracking-widest uppercase mb-8">
          Publications
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {publications.map((p, i) => (
            <div
              key={i}
              className="border border-purple-400/20 rounded-2xl p-8 bg-purple-400/5 hover:bg-purple-400/8 hover:border-purple-400/40 transition-all duration-300"
            >
              <div className="text-4xl mb-4">{p.icon}</div>

              <p className="font-mono text-purple-400 text-xs mb-2">
                {p.venue}
              </p>

              <h3 className="font-display text-white font-bold text-xl mb-3 leading-snug">
                {p.title}
              </h3>

              <p className="font-mono text-white/40 text-xs mb-4">
                {p.timeline}
              </p>

              <p className="text-white/50 text-sm leading-relaxed">
                {p.description}
              </p>

              <span className="inline-flex mt-4 font-mono text-xs bg-purple-400/10 text-purple-400 px-3 py-1 rounded-full">
                Peer Reviewed · IEEE
              </span>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}