
const skillGroups = [
  {
    title: "Programming Languages",
    icon: "💻",
    skills: ["Java", "Python", "C", "SQL"],
  },
  {
    title: "Frontend Development",
    icon: "🎨",
    skills: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Databases",
    icon: "🗄️",
    skills: ["MySQL", "SQLite", "MongoDB"],
  },
  {
    title: "Tools & Platforms",
    icon: "🛠️",
    skills: ["Git", "GitHub", "VS Code", "Salesforce", "SAP ABAP"],
  },
  {
    title: "Core Computer Science",
    icon: "📚",
    skills: [
      "Object-Oriented Programming",
      "DBMS",
      "Operating Systems",
      "Computer Networks",
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="bg-[#030712] py-24">
      <div className="mx-auto max-w-7xl px-8">
        <div className="mb-16 text-center">
          <h2 className="text-5xl font-bold">
            My <span className="text-violet-500">Skills</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-gray-400">
            Technologies and concepts I have learned and worked with
            throughout my academic and project journey.
          </p>
        </div>

        <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="rounded-3xl border border-white/10 bg-white/[0.04] p-7 transition duration-300 hover:-translate-y-2 hover:border-violet-500/60 hover:shadow-[0_0_30px_rgba(139,92,246,0.12)]"
            >
              <h3 className="mb-7 flex items-center gap-3 text-xl font-bold">
                <span className="text-3xl">{group.icon}</span>
                {group.title}
              </h3>

              <div className="flex flex-wrap gap-3">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-violet-500/20 bg-violet-500/10 px-4 py-2 text-sm text-violet-200 transition hover:border-violet-400 hover:bg-violet-500/20"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
