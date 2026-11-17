
import InfoCard from "./InfoCard";

export default function PersonalInfo() {
  return (
    <InfoCard title="Personal Information" icon="👤">
      <div className="space-y-5 text-gray-300">
        <div>
          <p className="text-sm text-gray-500">Name</p>
          <p className="break-words text-base font-semibold sm:text-lg">
            Durga Kambala
          </p>
        </div>

        <div>
          <p className="text-sm text-gray-500">Location</p>
          <p className="break-words">
            Jangareddygudem, Andhra Pradesh – 534447
          </p>
        </div>

        <div>
          <p className="text-sm text-gray-500">Languages</p>
          <p>English, Telugu</p>
        </div>

        <div>
          <p className="text-sm text-gray-500">Email</p>
          <p className="break-all">durgakambala5475@gmail.com</p>
        </div>
      </div>
    </InfoCard>
  );
}
