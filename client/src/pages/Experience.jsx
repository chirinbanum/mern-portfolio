import SectionWrapper, { SectionHeading } from "../components/SectionWrapper";

const experiences = [
  {
    role: "Web Development Intern",
    company: "CodSoft",
    duration: "Apr 2024 - May 2024",
    location: "Remote",
    points: [
      "Developed responsive and user-friendly web pages using modern frontend technologies.",
      "Identified and resolved bugs to enhance application performance and reliability.",
      "Collaborated effectively with team members to complete tasks within deadlines.",
    ],
    tech: ["HTML", "CSS", "JavaScript", "React"],
  },
];

const inplantTrainings = [
  {
    role: "In-Plant Trainee",
    company: "Chackala Printers",
    duration: "19 Jul 2024 - 23 Jul 2024",
    location: "Thiruvananthapuram, Kerala",
    points: [
      "Completed industrial training as part of academic curriculum.",
      "Observed real-world business operations and workflow management.",
      "Gained exposure to production processes and organizational practices.",
    ],
    tech: ["Industrial Training", "Workflow Management"],
  },
  {
    role: "In-Plant Trainee",
    company: "Techies Around",
    duration: "28 Nov 2024 - 06 Dec 2024",
    location: "Remote",
    points: [
      "Participated in hands-on training focused on web development.",
      "Worked on practical tasks involving frontend and backend technologies.",
      "Strengthened problem-solving skills through real-time assignments.",
    ],
    tech: ["HTML", "CSS", "JavaScript", "React", "Node.js", "MongoDB"],
  },
];

export default function Experience() {
  return (
    <SectionWrapper className="pt-36">
      <SectionHeading label="03 - Experience" title="Where I've Worked" />

      {/* Internship Experience */}
      <div className="space-y-8">
        {experiences.map((exp, i) => (
          <div
            key={i}
            className="border border-white/8 rounded-2xl p-8 bg-surface-800/30 hover:border-teal-400/20 transition-all duration-300"
          >
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
              <div>
                <h3 className="font-display text-white font-bold text-2xl mb-1">
                  {exp.role}
                </h3>
                <p className="text-teal-400 font-mono text-sm">{exp.company}</p>
              </div>

              <div className="text-right">
                <p className="font-mono text-white/40 text-sm">
                  {exp.duration}
                </p>
                <p className="font-mono text-white/30 text-xs mt-1">
                  {exp.location}
                </p>
              </div>
            </div>

            <ul className="space-y-3 mb-6">
              {exp.points.map((point, j) => (
                <li
                  key={j}
                  className="flex gap-3 text-white/60 text-sm leading-relaxed"
                >
                  <span className="text-teal-400 mt-0.5 flex-shrink-0">
                    ▹
                  </span>
                  {point}
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2">
              {exp.tech.map((t) => (
                <span
                  key={t}
                  className="font-mono text-xs bg-teal-400/10 text-teal-400/80 px-3 py-1 rounded-full"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* In-Plant Training */}
      <div className="mt-16 border-t border-white/5 pt-16">
        <p className="font-mono text-teal-400 text-xs tracking-widest uppercase mb-8">
          In-Plant Training
        </p>

        <div className="space-y-8">
          {inplantTrainings.map((training, i) => (
            <div
              key={i}
              className="border border-white/8 rounded-2xl p-8 bg-surface-800/30 hover:border-teal-400/20 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                <div>
                  <h3 className="font-display text-white font-bold text-2xl mb-1">
                    {training.role}
                  </h3>
                  <p className="text-teal-400 font-mono text-sm">
                    {training.company}
                  </p>
                </div>

                <div className="text-right">
                  <p className="font-mono text-white/40 text-sm">
                    {training.duration}
                  </p>
                  <p className="font-mono text-white/30 text-xs mt-1">
                    {training.location}
                  </p>
                </div>
              </div>

              <ul className="space-y-3 mb-6">
                {training.points.map((point, j) => (
                  <li
                    key={j}
                    className="flex gap-3 text-white/60 text-sm leading-relaxed"
                  >
                    <span className="text-teal-400 mt-0.5 flex-shrink-0">
                      ▹
                    </span>
                    {point}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {training.tech.map((t) => (
                  <span
                    key={t}
                    className="font-mono text-xs bg-teal-400/10 text-teal-400/80 px-3 py-1 rounded-full"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Community */}
      <div className="mt-16 border-t border-white/5 pt-16">
        <p className="font-mono text-teal-400 text-xs tracking-widest uppercase mb-8">
          Community
        </p>

        <div className="border border-white/8 rounded-2xl p-8 bg-surface-800/30">
          <h3 className="font-display text-white font-semibold text-lg mb-1">
            Member - Computer Society of India (CSI)
          </h3>
          <p className="text-white/40 text-sm">
            Active member contributing to the tech community through events and
            knowledge sharing.
          </p>
        </div>
      </div>
    </SectionWrapper>
  );
}