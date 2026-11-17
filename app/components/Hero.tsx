import HeroImage from "./HeroImage";
import HeroWelcome from "./HeroWelcome";
import HeroContent from "./HeroContent";

export default function Hero() {
  return (
    <section
      id="home"
      className="pt-32 pb-20"
    >
      <div className="max-w-7xl mx-auto px-8">

        {/* Row 1 */}
        <div className="grid lg:grid-cols-2 gap-24 items-center">

          <HeroImage />

          <HeroWelcome />

        </div>

        {/* Row 2 */}
        <div className="grid lg:grid-cols-2 gap-24 items-start mt-8">

          <div className="flex justify-center lg:justify-start">

            <h2 className="text-4xl font-bold">
              Hello, I'm{" "}
              <span className="animate-bounce inline-block">
                👋
              </span>
            </h2>

          </div>

          <HeroContent />

        </div>

      </div>
    </section>
  );
}