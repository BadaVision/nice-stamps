"use client";

import { FadeImage } from "@/components/fade-image";

const productCategories = [
  {
    title: "Stemple do lodu z Twoim logo",
    subtitle: (
      <>
        Wykonujemy wysokiej jakości stemple z Twoim logo.<br />
        <span className="font-bold text-white">Mosiądz</span> - złoty standard w precyzyjnym, wręcz jubilerskim odwzorowaniu szczegółów - zapewnia najlepszy trwały efekt.<br />
        <span className="font-bold text-white">Miedź</span> - szlachetny materiał dla tych, co nie uznają kompromisów - posiada unikalne właściwości fizyczne oraz prestiżowy wygląd. Zaletami miedzi jest również jej antybakteryjność oraz pojemność cieplna, co przekłada się bezpośrednio na konkretne korzyści.<br />
        Wszystkie stemple mocujemy do drewnianego uchwytu, a całość zamykamy w ręcznie wykonanym pudełku.
      </>
    ),
    images: [
      { src: "/images/stempel-do-lodu-lewy.webp", alt: "Ekskluzywny stempel do lodu z logo w opakowaniu giftbox" },
      { src: "/images/stempel-do-lodu-2.webp", alt: "Stempel do lodu detal 1" },
      { src: "/images/stempel-do-lodu-3.webp", alt: "Stempel do lodu detal 2" },
    ]
  },
  {
    title: "Płyty mosiężne z gotowymi wzorami",
    subtitle: "Mosiężne płyty barmańskie to solidne narzędzie w rękach profesjonalnych barmanów. Przenoszą sztukę serwowania drinków i koktajli na nowy poziom. Wybierz wzory rezonujące z Twoją wizją lub postaw na unikalną personalizację. Posiadamy katalog gotowych geometrycznych tekstur, a na życzenie możemy wygrawerować Twój autorski wzór, logotyp, sygnet lub układ graficzny.",
    images: [
      { src: "/images/plyta-barmanska-srodek.webp", alt: "Mosiężna płyta barmańska do tworzenia wzorów na lodzie" },
      { src: "/images/plyta-barmanska-2.webp", alt: "Płyta barmańska detal 1" },
      { src: "/images/plyta-barmanska-3.webp", alt: "Płyta barmańska detal 2" },
    ]
  },
  {
    title: "Ekskluzywne podkładki stołowe",
    subtitle: "Nasze ręcznie wykonane podkładki, zaprojektowane z myślą o najwyższej estetyce i wieloletniej trwałości, są perfekcyjnym dopełnieniem luksusowego baru. Drewniany korpus łączymy z wierzchnią warstwą ze szlachetnego nubuku lub wyselekcjonowanej skóry ekologicznej, na której precyzyjnie tłoczymy Twoje logo. Całość wieńczy spód ze specjalistycznej pianki EVA, gwarantujący ochronę drewnianych lub kamiennych powierzchni. Wszystkie etapy powstawania podkładek są wykonywane na miejscu w naszej pracowni.",
    images: [
      { src: "/images/podkladki-zamszowe-prawy.webp", alt: "Luksusowe podkładki barmańskie z zamszu i drewna" },
      { src: "/images/podkladki-zamszowe-2.webp", alt: "Podkładki zamszowe detal 1" },
      { src: "/images/podkladki-zamszowe-3.webp", alt: "Podkładki zamszowe detal 2" },
    ]
  }
];

export function FeaturedProductsSection() {
  return (
    <section id="technology" className="bg-black">
      {/* Section Title */}
      <div className="px-6 pt-20 pb-32 text-center md:px-12 md:pt-28 md:pb-40 lg:px-20 lg:pt-32 lg:pb-48">
        <h2 className="text-3xl font-medium tracking-tight text-white md:text-4xl lg:text-5xl">
          Zaprojektowane z myślą o Twojej marce - stworzone by zachwycać.
        </h2>
        <p className="mx-auto mt-6 max-w-md text-sm md:text-base uppercase tracking-widest text-zinc-400">
          PREMIUM BRANDING
        </p>
      </div>

      {/* Product Rows */}
      <div className="px-6 pb-28 md:px-12 lg:px-20 flex flex-col gap-24 lg:gap-32">
        {productCategories.map((category, idx) => (
          <div key={idx} className="flex flex-col">
            {/* Row Header */}
            <div className="mb-10 text-center flex flex-col items-center w-full">
              <h3 className="text-white text-3xl md:text-4xl font-semibold mb-4">
                {category.title}
              </h3>
              <p className="text-base md:text-lg text-zinc-400 leading-relaxed max-w-4xl mx-auto text-pretty">
                {category.subtitle}
              </p>
            </div>

            {/* Image Grid */}
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              {category.images.map((img, imgIdx) => (
                <div key={imgIdx} className="group relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-zinc-900/50">
                  <FadeImage
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
