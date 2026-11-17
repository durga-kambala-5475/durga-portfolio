
import HeroImage from "./HeroImage";
import HeroWelcome from "./HeroWelcome";
import HeroContent from "./HeroContent";

export default function Hero() {
  return (
    <section id="home" className="overflow-hidden pb-16 pt-28 sm:pt-32 lg:pb-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">

        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-24">
          <HeroImage />
          <HeroWelcome />
        </div>

        <div className="mt-12 grid grid-cols-1 items-start gap-8 lg:mt-8 lg:grid-cols-2 lg:gap-24">
          <div className="hidden justify-center lg:flex lg:justify-start">
            <h2 className="text-4xl font-bold">
              Hello, I'm <span className="inline-block animate-bounce">👋</span>
            </h2>
          </div>

          <div className="lg:col-start-2">
            <div className="mb-5 lg:hidden">
              <h2 className="text-3xl font-bold">
                Hello, I'm <span className="inline-block">👋</span>
              </h2>
            </div>
            <HeroContent />
          </div>
        </div>
      </div>
    </section>
  );
}
