
const projects = [
  {
    number: "01",
    title: "ECG Insight",
    subtitle: "Intelligent ECG Analysis and Healthcare Assistant",
    description:
      "Developing an AI-powered healthcare application for ECG signal classification using deep learning and the PTB-XL dataset. Integrating Grad-CAM explainability, FastAPI, and SQLite for interpretable predictions and ECG analysis history management.",
    technologies: ["Python", "FastAPI", "ECGResNet", "Grad-CAM", "SQLite"],
    status: "Ongoing",
    github: "",
  },
  {
    number: "02",
    title: "Risk2Rise",
    subtitle: "Student Risk Prediction and Early Intervention System",
    description:
      "Developed a machine learning application to predict student academic risk using attendance and academic performance data. Implemented Random Forest classification and integrated Flask with SQLite for student data management and prediction results.",
    technologies: ["Python", "Machine Learning", "Random Forest", "Flask", "SQLite"],
    status: "Completed",
    github: "https://github.com/durga-kambala-5475/Risk2Rise",
  },
  {
    number: "03",
    title: "Digital Diet",
    subtitle: "Digital Well-being Web Application",
    description:
      "Developed a web application featuring screen-time tracking, break reminders, and session summaries to promote digital well-being. Implemented interactive frontend features and awareness pages with digital wellness information and statistics.",
    technologies: ["HTML5", "CSS3", "JavaScript"],
    status: "Completed",
    github: "https://github.com/durga-kambala-5475/digital-diet",
  },
  {
    number: "04",
    title: "Bill Management System",
    subtitle: "Desktop Billing Application",
    description:
      "Developed a desktop-based billing application with item selection, automatic bill calculation, and invoice generation using an interactive graphical user interface.",
    technologies: ["Python", "Tkinter"],
    status: "Completed",
    github: "https://github.com/durga-kambala-5475/newcoding",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="bg-[#070b17] py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mb-12 text-center sm:mb-16">
          <h2 className="text-4xl font-bold sm:text-5xl">
            My <span className="text-violet-500">Projects</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-400 sm:text-base">
            A collection of projects where I transform ideas into
            practical applications through technology and creativity.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
          {projects.map((project) => (
            <div
              key={project.number}
              className="group flex h-full flex-col rounded-3xl border border-white/10 bg-white/[0.04] p-5 transition duration-300 hover:-translate-y-1 hover:border-violet-500/60 sm:p-8"
            >
              <div className="mb-6 flex items-center justify-between">
                <span className="text-4xl font-black text-violet-500/40">
                  {project.number}
                </span>

                <span
                  className={`rounded-full border px-4 py-1.5 text-xs font-semibold ${
                    project.status === "Ongoing"
                      ? "border-green-500/30 bg-green-500/10 text-green-400"
                      : "border-blue-500/30 bg-blue-500/10 text-blue-400"
                  }`}
                >
                  {project.status}
                </span>
              </div>

              <h3 className="text-xl font-bold transition group-hover:text-violet-400 sm:text-2xl">
                {project.title}
              </h3>

              <p className="mt-2 text-sm font-medium text-violet-300">
                {project.subtitle}
              </p>

              <p className="mt-5 flex-grow text-sm leading-8 text-gray-400 sm:text-base">
                {project.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-xs text-gray-300"
                  >
                    {technology}
                  </span>
                ))}
              </div>

              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex w-fit items-center gap-3 rounded-xl border border-violet-500/30 bg-violet-500/10 px-5 py-3 font-semibold text-violet-300 transition hover:border-violet-400 hover:bg-violet-500/20"
                >
                  <span aria-hidden="true">⌘</span>
                  View on GitHub ↗
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
