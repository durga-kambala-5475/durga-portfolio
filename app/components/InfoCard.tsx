
import type { ReactNode } from "react";

type InfoCardProps = {
  title: string;
  icon: string;
  children: ReactNode;
};

export default function InfoCard({ title, icon, children }: InfoCardProps) {
  return (
    <div className="h-full rounded-3xl border border-white/10 bg-white/5 p-5 shadow-lg backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-violet-500 hover:shadow-violet-500/20 sm:p-8">
      <h3 className="mb-6 flex items-center gap-3 text-xl font-bold sm:text-2xl">
        <span className="text-3xl">{icon}</span>
        {title}
      </h3>

      {children}
    </div>
  );
}
