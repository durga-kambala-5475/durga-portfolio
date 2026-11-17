
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
    <section id="skills" className="bg-[#030712] py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mb-12 text-center sm:mb-16">
          <h2 className="text-4xl font-bold sm:text-5xl">
            My <span className="text-violet-500">Skills</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-400 sm:text-base">
            Technologies and concepts I have learned and worked with
            throughout my academic and project journey.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 transition duration-300 hover:-translate-y-1 hover:border-violet-500/60 sm:p-7"
            >
              <h3 className="mb-6 flex items-center gap-3 text-lg font-bold sm:text-xl">
                <span className="text-3xl">{group.icon}</span>
                {group.title}
              </h3>

              <div className="flex flex-wrap gap-3">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-violet-500/20 bg-violet-500/10 px-3 py-2 text-xs text-violet-200 sm:text-sm"
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
