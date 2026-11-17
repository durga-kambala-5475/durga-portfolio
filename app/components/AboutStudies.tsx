import InfoCard from "./InfoCard";

export default function AboutStudies() {
  return (
    <InfoCard
      title="About My Studies"
      icon="📖"
    >
      <p className="text-gray-300 leading-8">
        I am currently pursuing a Bachelor of Technology
        in Computer Science and Engineering at
        <span className="font-semibold text-white">
          {" "}Sri Vasavi Engineering College
        </span>.
        Throughout my academic journey, I have developed
        a strong foundation in Java, Python, Data Structures,
        DBMS, Web Development, and Machine Learning by
        combining classroom learning with practical projects.
      </p>
    </InfoCard>
  );
}