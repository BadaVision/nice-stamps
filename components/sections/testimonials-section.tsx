"use client";

import Image from "next/image";
import { ScrollRevealText } from "./technology-section";

export function TestimonialsSection() {
  return (
    <section id="about" className="bg-black">
      {/* Large Text Statement */}
      <div className="px-6 py-24 md:px-12 md:py-32 lg:px-20 lg:py-40">
        <ScrollRevealText 
          className="mx-auto max-w-5xl" 
          text="Za Nice Stamps stoją niemal dwie dekady doświadczeń w zaawansowanym grawerowaniu i frezowaniu matryc poligraficznych. Nie uznajemy kompromisów. Od personalizowanych stempli z logo, przez mosiężne tace, aż po tłoczone na gorąco podkładki – każda realizacja opuszcza nasz park maszynowy dopiero, gdy spełnia rygorystyczne normy perfekcji. Jesteśmy tu po to, aby Twoja marka zostawiła po sobie trwały ślad. Dosłownie." 
        />
      </div>

      {/* About Image */}
      <div className="relative aspect-[16/9] w-full">
        <Image
          src="/images/stempel-do-lodu-luksusowy-drink-realizacja.webp"
          alt="Luksusowy czerwony drink z personalizowaną kostką lodu z gwiazdą Nice Stamps"
          fill
          className="object-cover"
        />
        {/* Fade gradient overlay - black at bottom fading to transparent at top */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
      </div>
    </section>
  );
}
