import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function SocialLinks() {
  return (
    <div className="mt-10 flex flex-wrap gap-5">

      {/* GitHub */}
      <a
        href="https://github.com/durga-kambala-5475"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-5 py-3 transition hover:border-violet-500 hover:bg-violet-500/10"
      >
        <FaGithub className="text-2xl text-white" />
        <div>
          <p className="text-sm text-gray-400">GitHub</p>
          <p className="text-white font-medium">
            durga-kambala-5475
          </p>
        </div>
      </a>

      {/* LinkedIn */}
      <a
        href="https://www.linkedin.com/in/durga-kambala-b011072bb"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-5 py-3 transition hover:border-blue-500 hover:bg-blue-500/10"
      >
        <FaLinkedin className="text-2xl text-blue-400" />
        <div>
          <p className="text-sm text-gray-400">LinkedIn</p>
          <p className="text-white font-medium">
            Durga Kambala
          </p>
        </div>
      </a>

     {/* Email */}
<a
  href="mailto:durgakambala5475@gmail.com"
  className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-5 py-3 transition hover:border-red-500 hover:bg-red-500/10"
>
  <FaEnvelope className="text-2xl text-red-400" />

  <div>
    <p className="text-sm text-gray-400">Email</p>
    <p className="text-white font-medium">
      durgakambala5475@gmail.com
    </p>
  </div>
</a>

    </div>
  );
}