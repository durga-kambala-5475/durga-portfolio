import InfoCard from "./InfoCard";

export default function AcademicInfo() {
  return (
    <InfoCard
      title="Academic Information"
      icon="🎓"
    >
      <div className="space-y-5 text-gray-300">

        <div>
          <p className="text-gray-500 text-sm">
            College
          </p>
          <p>
            Sri Vasavi Engineering College
          </p>
        </div>

        <div>
          <p className="text-gray-500 text-sm">
            Degree
          </p>
          <p>B.Tech</p>
        </div>

        <div>
          <p className="text-gray-500 text-sm">
            Branch
          </p>
          <p>
            Computer Science & Engineering
          </p>
        </div>

        <div>
          <p className="text-gray-500 text-sm">
            Duration
          </p>
          <p>2023 – 2027</p>
        </div>

        <div>
          <p className="text-gray-500 text-sm">
            Current CGPA
          </p>
          <p>9.38</p>
        </div>

      </div>
    </InfoCard>
  );
}