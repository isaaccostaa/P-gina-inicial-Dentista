export default function SocialProof() {
  const logos = [
    { name: "Acme Corp", width: 120 },
    { name: "GlobalTech", width: 140 },
    { name: "Innovate AI", width: 130 },
    { name: "NextLevel", width: 110 },
    { name: "FutureWeb", width: 125 },
  ];

  return (
    <section className="py-10 border-y border-gray-100 bg-white/50 relative z-10">
      <div className="max-w-7xl lg:max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-medium text-gray-400 mb-8 uppercase tracking-widest">
          Confiado por equipes inovadoras em todo o mundo
        </p>

        <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="flex items-center justify-center font-heading font-bold text-xl text-gray-500 hover:text-primary transition-colors"
              style={{ width: logo.width }}
            >
              {logo.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
