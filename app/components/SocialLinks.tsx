
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function SocialLinks() {
  return (
    <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
      <a
        href="https://github.com/durga-kambala-5475"
        target="_blank"
        rel="noopener noreferrer"
        className="flex min-w-0 items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 transition hover:border-violet-500 hover:bg-violet-500/10 sm:px-5"
      >
        <FaGithub className="shrink-0 text-2xl text-white" />
        <div className="min-w-0">
          <p className="text-sm text-gray-400">GitHub</p>
          <p className="break-all font-medium text-white">durga-kambala-5475</p>
        </div>
      </a>

      <a
        href="https://www.linkedin.com/in/durga-kambala-b011072bb"
        target="_blank"
        rel="noopener noreferrer"
        className="flex min-w-0 items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 transition hover:border-blue-500 hover:bg-blue-500/10 sm:px-5"
      >
        <FaLinkedin className="shrink-0 text-2xl text-blue-400" />
        <div className="min-w-0">
          <p className="text-sm text-gray-400">LinkedIn</p>
          <p className="font-medium text-white">Durga Kambala</p>
        </div>
      </a>

      <a
        href="mailto:durgakambala5475@gmail.com"
        className="flex min-w-0 items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 transition hover:border-red-500 hover:bg-red-500/10 sm:px-5"
      >
        <FaEnvelope className="shrink-0 text-2xl text-red-400" />
        <div className="min-w-0">
          <p className="text-sm text-gray-400">Email</p>
          <p className="break-all font-medium text-white">
            durgakambala5475@gmail.com
          </p>
        </div>
      </a>
    </div>
  );
}
