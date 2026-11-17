import InfoCard from "./InfoCard";

export default function PersonalInfo() {
  return (
    <InfoCard
      title="Personal Information"
      icon="👤"
    >
      <div className="space-y-5 text-gray-300">

        <div>
          <p className="text-gray-500 text-sm">Name</p>
          <p className="text-lg font-semibold">
            Durga Kambala
          </p>
        </div>

        <div>
          <p className="text-gray-500 text-sm">Location</p>
          <p>
            Jangareddygudem,
            Andhra Pradesh – 534447
          </p>
        </div>

        <div>
          <p className="text-gray-500 text-sm">Languages</p>
          <p>English, Telugu</p>
        </div>

        <div>
          <p className="text-gray-500 text-sm">Email</p>
          <p>durgakambala5475@gmail.com</p>
        </div>

      </div>
    </InfoCard>
  );
}