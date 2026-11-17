
import InfoCard from "./InfoCard";

export default function AcademicInfo() {
  return (
    <InfoCard title="Academic Information" icon="🎓">
      <div className="space-y-5 text-gray-300">
        <div>
          <p className="text-sm text-gray-500">College</p>
          <p className="font-medium">Sri Vasavi Engineering College</p>
        </div>

        <div>
          <p className="text-sm text-gray-500">Degree</p>
          <p>B.Tech</p>
        </div>

        <div>
          <p className="text-sm text-gray-500">Branch</p>
          <p>Computer Science & Engineering</p>
        </div>

        <div>
          <p className="text-sm text-gray-500">Duration</p>
          <p>2023 – 2027</p>
        </div>

        <div>
          <p className="text-sm text-gray-500">Current CGPA</p>
          <p className="font-semibold text-violet-400">9.38 / 10</p>
        </div>
      </div>
    </InfoCard>
  );
}
