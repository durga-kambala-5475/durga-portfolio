import Image from "next/image";

export default function HeroImage() {
  return (
    <div className="flex justify-center lg:justify-start">

      <div className="relative w-[390px] h-[390px]">

        <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-violet-600 via-purple-500 to-blue-500 blur-3xl opacity-40"></div>

        <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-violet-500 shadow-[0_0_60px_rgba(139,92,246,0.45)]">

          <Image
            src="/images/profile.jpeg"
            alt="Durga Kambala"
            fill
            priority
            sizes="390px"
            className="object-cover"
          />

        </div>

      </div>

    </div>
  );
}