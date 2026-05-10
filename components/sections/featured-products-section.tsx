"use client";

import { FadeImage } from "@/components/fade-image";

const features = [
  {
    title: "Wytłocz własne logo na lodzie",
    description: "STEMPLE DO LODU",
    image: "/images/stempel-do-lodu-lewy.webp",
    alt: "Ekskluzywny stempel do lodu z logo w opakowaniu giftbox",
  },
  {
    title: "Matryce z unikalnymi teksturami",
    description: "PŁYTY BARMAŃSKIE",
    image: "/images/plyta-barmanska-srodek.webp",
    alt: "Mosiężna płyta barmańska do tworzenia wzorów na lodzie",
  },
  {
    title: "Szlachetne materiały i Twój branding",
    description: "EKSKLUZYWNE PODKŁADKI",
    image: "/images/podkladki-zamszowe-prawy.webp",
    alt: "Luksusowe podkładki barmańskie z zamszu i drewna",
  },
];

export function FeaturedProductsSection() {
  return (
    <section id="technology" className="bg-black">
      {/* Section Title */}
      <div className="px-6 py-20 text-center md:px-12 md:py-28 lg:px-20 lg:py-32 lg:pb-20">
        <h2 className="text-3xl font-medium tracking-tight text-white md:text-4xl lg:text-5xl">
          Zaprojektowane by zachwycać.
          <br />
          Stworzone dla Twojej marki.
        </h2>
        <p className="mx-auto mt-6 max-w-md text-sm text-zinc-400">
          Premium Branding
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 gap-4 px-6 pb-20 md:grid-cols-3 md:px-12 lg:px-20">
        {features.map((feature) => (
          <div key={feature.title} className="group">
            {/* Image */}
            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden mb-4">
              <FadeImage
                src={feature.image || "/placeholder.svg"}
                alt={feature.alt}
                fill
                className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* Content */}
            <div className="py-6">
              <p className="mb-2 text-xs uppercase tracking-widest text-zinc-400">
                {feature.description}
              </p>
              <h3 className="text-white text-xl font-semibold">
                {feature.title}
              </h3>
            </div>
          </div>
        ))}
      </div>

      {/* CTA Link */}
      <div className="flex justify-center px-6 pb-28 md:px-12 lg:px-20">
        
      </div>
    </section>
  );
}
