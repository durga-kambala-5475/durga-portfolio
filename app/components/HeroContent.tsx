
import HeroButtons from "./HeroButtons";
import SocialLinks from "./SocialLinks";

export default function HeroContent() {
  return (
    <div className="pt-2">
      <h1 className="text-5xl font-black leading-tight sm:text-6xl lg:text-7xl">
        Durga
        <br />
        <span className="bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent">
          Kambala
        </span>
      </h1>

      <h3 className="mt-5 text-xl font-semibold text-violet-400 sm:text-3xl">
        B.Tech CSE (2023–2027)
      </h3>

      <div className="mt-5 space-y-2">
        <p className="text-lg font-medium text-white sm:text-xl">
          Aspiring Software Engineer
        </p>
        <p className="text-base text-gray-300 sm:text-lg">
          Java • Python • Machine Learning
        </p>
      </div>

      <div className="mt-7 inline-flex max-w-full items-center gap-3 rounded-full border border-green-500/30 bg-green-500/10 px-4 py-3">
        <span className="h-3 w-3 shrink-0 animate-pulse rounded-full bg-green-400" />
        <span className="text-xs font-medium text-green-400 sm:text-sm">
          Open to Software Engineering Opportunities
        </span>
      </div>

      <p className="mt-7 max-w-2xl text-base leading-8 text-gray-400 sm:text-lg">
        A fast learner with a passion for building real-world software
        projects. I enjoy exploring new technologies, transforming ideas
        into meaningful solutions, and believe that consistency,
        continuous learning, and dedication are the keys to becoming
        a better software engineer every day.
      </p>

      <HeroButtons />

      <div className="mt-8">
        <SocialLinks />
      </div>
    </div>
  );
}
