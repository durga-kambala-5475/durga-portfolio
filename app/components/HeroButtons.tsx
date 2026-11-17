
export default function HeroButtons() {
  return (
    <div className="mt-8 flex flex-wrap gap-4">
      <a
        href="#projects"
        className="rounded-full bg-violet-600 px-6 py-3 text-center font-semibold text-white transition hover:bg-violet-700 sm:px-8 sm:py-4"
      >
        Explore Projects
      </a>

      <a
        href="/resume.pdf"
        download="Durga_Kambala_Resume.pdf"
        className="rounded-full border border-white/20 px-6 py-3 text-center font-semibold text-white transition hover:bg-white/10 sm:px-8 sm:py-4"
      >
        Download Resume
      </a>
    </div>
  );
}
