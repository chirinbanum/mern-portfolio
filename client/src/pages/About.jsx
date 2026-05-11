import SectionWrapper, { SectionHeading } from "../components/SectionWrapper";

const skills = {
  "Languages": ["Java", "C"],
  "Frontend": ["HTML", "CSS", "React.js"],
  "Backend": ["Node.js", "Express.js", "RESTful APIs"],
  "Databases": ["MongoDB", "MySQL", "PostgreSQL"],
  "Tools": ["Git", "Postman", "Figma", "VS Code", "Microsoft Excel"],
  "Concepts": ["DBMS", "Computer Networks", "OOP"],
};

const education = [
  {
    degree: "B.E. Computer Science & Engineering",
    institution: "Kongu Engineering College, Perundurai",
    year: "2022 – 2026",
    score: "CGPA: 8.15",
  },
  {
    degree: "HSC (Class XII)",
    institution: "Government Higher Secondary School",
    year: "2021 – 2022",
    score: "Score: 86%",
  },
  {
    degree: "SSLC (Class X)",
    institution: "Government Higher Secondary School",
    year: "2019 – 2020",
    score: "Score: 89.4%",
  },
];

const achievements = [
  "🥇 First Prize — Ideathon2k23 (Soundless Horn Project)",
  "⚡ Participated in 24-hour Hackathon Hackbuzz24",
  "🏆 CSE Outstanding Sports Achiever 2023–24",
  "📖 Member, Computer Society of India (CSI)",
];

export default function About() {
  return (
    <SectionWrapper className="pt-36">
      <SectionHeading label="01 — About" title="Who I Am" />

      <div className="grid md:grid-cols-2 gap-16 mb-24">
        <div>
          <p className="text-white/60 text-lg leading-relaxed mb-6">
            I'm an aspiring software developer passionate about building things
            that live on the internet. Currently pursuing B.E. CSE at Kongu
            Engineering College with a CGPA of 8.15.
          </p>
          <p className="text-white/60 leading-relaxed mb-6">
            Beyond web development, I explore machine learning — I've published
            research on CTGAN-based heart disease prediction at{" "}
            <span className="text-teal-400">IEEE ICIIET 2025</span>. I hold a{" "}
            <span className="text-teal-400">MongoDB Certified Associate Developer</span>{" "}
            certification.
          </p>
          <p className="text-white/60 leading-relaxed">
            Based in Virudhunagar, Tamil Nadu. Open to internships and full-time
            opportunities starting 2026.
          </p>
        </div>

        <div className="space-y-3">
          {achievements.map((a) => (
            <div
              key={a}
              className="border border-white/8 bg-surface-800/50 rounded-lg px-5 py-4 text-white/70 text-sm"
            >
              {a}
            </div>
          ))}
        </div>
      </div>

      {/* Skills */}
      <div className="mb-24">
        <p className="font-mono text-teal-400 text-xs tracking-widest uppercase mb-10">
          Technical Skills
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(skills).map(([category, items]) => (
            <div
              key={category}
              className="border border-white/8 rounded-xl p-6 hover:border-teal-400/20 transition-all duration-300"
            >
              <p className="font-display text-white font-semibold mb-4">{category}</p>
              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className="font-mono text-xs bg-surface-700 text-teal-400/80 px-3 py-1 rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Education */}
      <div>
        <p className="font-mono text-teal-400 text-xs tracking-widest uppercase mb-10">
          Education
        </p>
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-px bg-white/10" />
          <div className="space-y-10 pl-8">
            {education.map((e, i) => (
              <div key={i} className="relative">
                <div className="absolute -left-10 top-1 w-3 h-3 rounded-full border-2 border-teal-400 bg-surface-900" />
                <p className="font-mono text-teal-400/60 text-xs mb-1">{e.year}</p>
                <h3 className="font-display text-white font-semibold text-lg mb-1">{e.degree}</h3>
                <p className="text-white/40 text-sm mb-1">{e.institution}</p>
                <p className="font-mono text-teal-400 text-sm">{e.score}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
