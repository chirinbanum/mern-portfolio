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
    certificate:
      "https://drive.google.com/file/d/1iVVDq7yI76C9iOEM1iOsIQ_lcqioyioY/view?usp=drive_link",
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
    certificate:
      "https://drive.google.com/file/d/1dNvFxhdGUl00t0r8A4nawoReUQDethkv/view?usp=drive_link",
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
    certificate:
      "https://drive.google.com/file/d/1FglkksN_-zAZ3bH9f90HjDLEW8vAdrJ2/view?usp=drive_link",
  },
];

function ExperienceCard({ item }) {
  return (
    <div className="border border-white/8 rounded-2xl p-8 bg-surface-800/30 hover:border-teal-400/20 transition-all duration-300">
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
        <div>
          <h3 className="font-display text-white font-bold text-2xl mb-1">
            {item.role}
          </h3>
          <p className="text-teal-400 font-mono text-sm">{item.company}</p>
        </div>

        <div className="text-right">
          <p className="font-mono text-white/40 text-sm">{item.duration}</p>
          <p className="font-mono text-white/30 text-xs mt-1">
            {item.location}
          </p>
        </div>
      </div>

      <ul className="space-y-3 mb-6">
        {item.points.map((point, index) => (
          <li
            key={index}
            className="flex gap-3 text-white/60 text-sm leading-relaxed"
          >
            <span className="text-teal-400 mt-0.5 flex-shrink-0">▹</span>
            {point}
          </li>
        ))}
      </ul>

      <div className="flex flex-wrap gap-2 mb-6">
        {item.tech.map((tech) => (
          <span
            key={tech}
            className="font-mono text-xs bg-teal-400/10 text-teal-400/80 px-3 py-1 rounded-full"
          >
            {tech}
          </span>
        ))}
      </div>

      {item.certificate && (
        <a
          href={item.certificate}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 font-mono text-xs bg-teal-400/10 text-teal-400 px-3 py-1.5 rounded-full hover:bg-teal-400/20 transition-all duration-300"
        >
          View Certificate ↗
        </a>
      )}
    </div>
  );
}

export default function Experience() {
  return (
    <SectionWrapper className="pt-36">
      <SectionHeading label="03 - Experience" title="Where I've Worked" />

      {/* Internship Experience */}
      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <ExperienceCard key={index} item={exp} />
        ))}
      </div>

      {/* In-Plant Training */}
      <div className="mt-16 border-t border-white/5 pt-16">
        <p className="font-mono text-teal-400 text-xs tracking-widest uppercase mb-8">
          In-Plant Training
        </p>

        <div className="space-y-8">
          {inplantTrainings.map((training, index) => (
            <ExperienceCard key={index} item={training} />
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