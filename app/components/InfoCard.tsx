type InfoCardProps = {
  title: string;
  icon: string;
  children: React.ReactNode;
};

export default function InfoCard({
  title,
  icon,
  children,
}: InfoCardProps) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:border-violet-500 hover:shadow-violet-500/20">

      <h3 className="text-2xl font-bold flex items-center gap-3 mb-6">
        <span className="text-3xl">{icon}</span>
        {title}
      </h3>

      {children}

    </div>
  );
}