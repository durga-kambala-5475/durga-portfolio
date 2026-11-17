
export default function HeroButtons() {
  return (
    <div className="flex flex-wrap gap-5 mt-10">

      {/* Explore Projects */}
      <a
        href="#projects"
        className="bg-violet-600 hover:bg-violet-700 transition px-8 py-4 rounded-full font-semibold text-white"
      >
        Explore Projects
      </a>

      {/* Download Resume */}
      <a
        href="/resume.pdf"
        download="Durga_Kambala_Resume.pdf"
        className="border border-white/20 hover:bg-white/10 transition px-8 py-4 rounded-full font-semibold text-white"
      >
        Download Resume
      </a>

    </div>
  );
}
