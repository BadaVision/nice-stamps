"use client";

const specs = [
  { label: "DOŚWIADCZENIE", value: "Blisko 20 lat" },
  { label: "ZREALIZOWANE PROJEKTY", value: "4000+" },
  { label: "PRECYZJA CNC", value: "100%" },
  { label: "CZAS REALIZACJI", value: "3-5 Dni" },
];

export function EditorialSection() {
  return (
    <section id="o-nas" className="bg-black">
      {/* Newsletter Banner */}
      

      {/* Decorative Icons */}
      <div className="flex items-center justify-center gap-6 pb-20">
        
        
      </div>

      {/* Specs Grid */}
      <div className="grid grid-cols-2 border-t border-zinc-800 md:grid-cols-4">
        {specs.map((spec) => (
          <div
            key={spec.label}
            className="border-b border-r border-zinc-800 p-8 text-center last:border-r-0 md:border-b-0"
          >
            <p className="mb-2 text-xs uppercase tracking-widest text-zinc-400">
              {spec.label}
            </p>
            <p className="font-medium text-white text-4xl">
              {spec.value}
            </p>
          </div>
        ))}
      </div>

      {/* Full-width Video */}
      <div className="relative aspect-[16/9] w-full md:aspect-[21/9]">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
          src="/tloczenie-logo-na-lodzie.mp4"
        />
      </div>
    </section>
  );
}
