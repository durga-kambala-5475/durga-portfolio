
import PersonalInfo from "./PersonalInfo";
import AcademicInfo from "./AcademicInfo";
import AboutStudies from "./AboutStudies";
import AboutPassion from "./AboutPassion";

export default function About() {
  return (
    <section id="about" className="bg-[#070b17] py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <h2 className="text-center text-4xl font-bold sm:text-5xl">
          About <span className="text-violet-500">Me</span>
        </h2>

        <p className="mx-auto mb-12 mt-5 max-w-3xl text-center text-sm leading-7 text-gray-400 sm:mb-16 sm:text-base">
          Get to know more about who I am, my academic journey,
          and my passion for building meaningful software solutions.
        </p>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
          <PersonalInfo />
          <AcademicInfo />
        </div>

        <div className="mt-6 sm:mt-8">
          <AboutStudies />
        </div>

        <div className="mt-6 sm:mt-8">
          <AboutPassion />
        </div>
      </div>
    </section>
  );
}
