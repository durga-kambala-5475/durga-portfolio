
import Image from "next/image";

export default function HeroImage() {
  return (
    <div className="flex justify-center lg:justify-start">
      <div className="relative aspect-square w-full max-w-[260px] sm:max-w-[340px] lg:max-w-[390px]">
        <div className="absolute -inset-3 rounded-full bg-gradient-to-r from-violet-600 via-purple-500 to-blue-500 blur-3xl opacity-40" />

        <div className="relative h-full w-full overflow-hidden rounded-full border-4 border-violet-500 shadow-[0_0_60px_rgba(139,92,246,0.45)]">
          <Image
            src="/images/profile.jpeg"
            alt="Profile photo"
            fill
            priority
            sizes="(max-width: 640px) 260px, (max-width: 1024px) 340px, 390px"
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
}
