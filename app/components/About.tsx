import PersonalInfo from "./PersonalInfo";
import AcademicInfo from "./AcademicInfo";
import AboutStudies from "./AboutStudies";
import AboutPassion from "./AboutPassion";

export default function About() {
  return (
    <section
      id="about"
      className="py-28 bg-[#070b17]"
    >
      <div className="max-w-7xl mx-auto px-8">

        <h2 className="text-5xl font-bold text-center">
          About <span className="text-violet-500">Me</span>
        </h2>

        <p className="text-gray-400 text-center mt-5 mb-16 max-w-3xl mx-auto">
          Get to know more about who I am, my academic
          journey, and my passion for software development.
        </p>

        <div className="grid lg:grid-cols-2 gap-8">

          <PersonalInfo />

          <AcademicInfo />

        </div>

        <div className="mt-8">

          <AboutStudies />

        </div>

        <div className="mt-8">

          <AboutPassion />

        </div>

      </div>
    </section>
  );
}