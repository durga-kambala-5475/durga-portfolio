import HeroButtons from "./HeroButtons";
import SocialLinks from "./SocialLinks";

export default function HeroContent() {
  return (
    <div className="pt-2">

      {/* Name */}
      <h1 className="text-6xl md:text-7xl font-black leading-none">
        Durga
        <br />
        <span className="bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent">
          Kambala
        </span>
      </h1>

      {/* Education */}
      <h3 className="mt-6 text-3xl font-semibold text-violet-400">
        B.Tech CSE (2023–2027)
      </h3>

      {/* Skills */}
      <div className="mt-5 space-y-2">

        <p className="text-xl font-medium text-white">
          Aspiring Software Engineer
        </p>

        <p className="text-lg text-gray-300">
          Java • Python • Machine Learning
        </p>

      </div>

      {/* Open to Work */}
      <div className="mt-8 inline-flex items-center gap-3 rounded-full border border-green-500/30 bg-green-500/10 px-6 py-3">

        <span className="h-3 w-3 rounded-full bg-green-400 animate-pulse"></span>

        <span className="font-medium text-green-400">
          Open to Software Engineering Opportunities
        </span>

      </div>

      {/* About */}
      <p className="mt-8 max-w-2xl text-lg leading-9 text-gray-400">
        A fast learner with a passion for building real-world software
        projects. I enjoy exploring new technologies, transforming ideas
        into meaningful solutions, and believe that consistency,
        continuous learning, and dedication are the keys to becoming
        a better software engineer every day.
      </p>

      {/* Buttons */}
      <div className="mt-10">
        <HeroButtons />
      </div>

      {/* Social Links */}
      <div className="mt-8">
        <SocialLinks />
      </div>

    </div>
  );
}