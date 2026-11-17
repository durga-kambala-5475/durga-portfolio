
import InfoCard from "./InfoCard";

export default function AboutStudies() {
  return (
    <InfoCard title="About My Studies" icon="📖">
      <p className="text-sm leading-8 text-gray-300 sm:text-base">
        I am currently pursuing a Bachelor of Technology in Computer
        Science and Engineering at{" "}
        <span className="font-semibold text-white">
          Sri Vasavi Engineering College
        </span>.
        Throughout my academic journey, I have developed a strong
        foundation in Java, Python, DBMS, Web Development, and
        Machine Learning by combining classroom learning with
        practical projects.
      </p>
    </InfoCard>
  );
}
