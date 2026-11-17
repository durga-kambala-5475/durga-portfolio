
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#070b17] px-5 py-8 sm:px-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 text-center sm:flex-row sm:text-left">
        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()}{" "}
          <span className="font-semibold text-violet-400">
            Durga Kambala
          </span>
          . All rights reserved.
        </p>

        <div className="flex gap-5">
          <a
            href="https://github.com/durga-kambala-5475"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-xl text-gray-400 transition hover:text-violet-400"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/durga-kambala-b011072bb"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-xl text-gray-400 transition hover:text-blue-400"
          >
            <FaLinkedin />
          </a>
        </div>

        <a
          href="#home"
          className="text-sm text-gray-400 transition hover:text-violet-400"
        >
          Back to Top ↑
        </a>
      </div>
    </footer>
  );
}
