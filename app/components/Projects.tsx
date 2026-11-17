
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
    <section id="projects" className="bg-[#070b17] py-24">
      <div className="mx-auto max-w-7xl px-8">
        {/* Section Heading */}
        <div className="mb-16 text-center">
          <h2 className="text-5xl font-bold">
            My <span className="text-violet-500">Projects</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-gray-400">
            A collection of projects where I transform ideas into
            practical applications through technology and creativity.
          </p>
        </div>

        {/* Project Cards */}
        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <div
              key={project.number}
              className="group rounded-3xl border border-white/10 bg-white/[0.04] p-8 transition duration-300 hover:-translate-y-2 hover:border-violet-500/60 hover:shadow-[0_0_35px_rgba(139,92,246,0.12)]"
            >
              {/* Number and Status */}
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

              {/* Project Title */}
              <h3 className="text-2xl font-bold transition group-hover:text-violet-400">
                {project.title}
              </h3>

              <p className="mt-2 text-sm font-medium text-violet-300">
                {project.subtitle}
              </p>

              {/* Description */}
              <p className="mt-5 min-h-28 leading-8 text-gray-400">
                {project.description}
              </p>

              {/* Technologies */}
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

              {/* GitHub Button */}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex items-center gap-3 rounded-xl border border-violet-500/30 bg-violet-500/10 px-5 py-3 font-semibold text-violet-300 transition hover:border-violet-400 hover:bg-violet-500/20"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 .5a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.05c-3.34.73-4.04-1.42-4.04-1.42-.55-1.39-1.33-1.76-1.33-1.76-1.09-.75.08-.74.08-.74 1.2.09 1.83 1.23 1.83 1.23 1.07 1.83 2.8 1.3 3.49.99.11-.77.42-1.3.76-1.6-2.67-.3-5.47-1.34-5.47-5.95 0-1.31.47-2.38 1.23-3.22-.12-.3-.53-1.52.12-3.17 0 0 1-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.29-1.23 3.29-1.23.65 1.65.24 2.87.12 3.17.77.84 1.23 1.91 1.23 3.22 0 4.62-2.8 5.64-5.48 5.94.43.37.81 1.1.81 2.22v3.29c0 .32.22.69.83.57A12 12 0 0 0 12 .5Z" />
                  </svg>
                  View on GitHub
                  <span aria-hidden="true">↗</span>
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
