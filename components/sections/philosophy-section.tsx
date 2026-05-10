"use client";

import Image from "next/image";
import { useEffect, useRef, useState, useCallback } from "react";
import { motion } from "framer-motion";
import { formatPolishText } from "@/lib/utils";

export function PhilosophySection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [alpineTranslateX, setAlpineTranslateX] = useState(-100);
  const [forestTranslateX, setForestTranslateX] = useState(100);
  const [titleOpacity, setTitleOpacity] = useState(1);
  const rafRef = useRef<number | null>(null);

  const updateTransforms = useCallback(() => {
    if (!sectionRef.current) return;
    
    const rect = sectionRef.current.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    const sectionHeight = sectionRef.current.offsetHeight;
    
    // Calculate progress based on scroll position
    const scrollableRange = sectionHeight - windowHeight;
    const scrolled = -rect.top;
    const progress = Math.max(0, Math.min(1, scrolled / scrollableRange));
    
    // Alpine comes from left (-100% to 0%)
    setAlpineTranslateX((1 - progress) * -100);
    
    // Forest comes from right (100% to 0%)
    setForestTranslateX((1 - progress) * 100);
    
    // Title fades out as blocks come together
    setTitleOpacity(1 - progress);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      // Cancel any pending animation frame
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
      
      // Use requestAnimationFrame for smooth updates
      rafRef.current = requestAnimationFrame(updateTransforms);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    updateTransforms();
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [updateTransforms]);

  return (
    <section id="products" className="bg-black">
      {/* Scroll-Animated Product Grid */}
      <div ref={sectionRef} className="relative h-[200vh] max-lg:!h-auto">
        <div className="sticky top-0 h-screen flex items-center justify-center max-lg:!relative max-lg:!h-auto max-lg:!pt-24 max-lg:!pb-12">
          <div className="relative w-full flex flex-col lg:block">
            {/* Title - positioned behind the blocks */}
            <div 
              className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 max-lg:!relative max-lg:!mb-16 max-lg:!opacity-100"
              style={{ opacity: titleOpacity }}
            >
              <h2 className="text-[12vw] font-medium leading-[0.95] tracking-tighter text-white md:text-[10vw] lg:text-[8vw] text-center px-6">
                Serwuj doświadczenia.<br />Nie tylko drinki.
              </h2>
            </div>

            {/* Product Grid */}
            <div className="relative z-10 grid grid-cols-1 gap-8 px-6 md:grid-cols-2 md:px-12 lg:px-20 lg:gap-4">
              {/* Alpine Image - comes from left */}
              <div className="max-lg:overflow-hidden rounded-2xl">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6 }}
                  className="h-full w-full lg:!transform-none lg:!opacity-100"
                >
                  <div 
                    className="relative aspect-square lg:aspect-[4/3] overflow-hidden rounded-2xl max-lg:!transform-none"
                    style={{
                      transform: `translate3d(${alpineTranslateX}%, 0, 0)`,
                      WebkitTransform: `translate3d(${alpineTranslateX}%, 0, 0)`,
                      backfaceVisibility: 'hidden',
                      WebkitBackfaceVisibility: 'hidden',
                    }}
                  >
                    <Image
                      src="/images/stempel-pojedynczy-lewy.webp"
                      alt="Mosiężny stempel pojedynczy do lodu Nice Stamps"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute bottom-6 left-6">
                      <span className="backdrop-blur-md px-4 py-2 text-sm font-medium rounded-full bg-[rgba(255,255,255,0.2)] text-white">
                        Stempel pojedynczy
                      </span>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Forest Image - comes from right */}
              <div className="max-lg:overflow-hidden rounded-2xl">
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6 }}
                  className="h-full w-full lg:!transform-none lg:!opacity-100"
                >
                  <div 
                    className="relative aspect-square lg:aspect-[4/3] overflow-hidden rounded-2xl max-lg:!transform-none"
                    style={{
                      transform: `translate3d(${forestTranslateX}%, 0, 0)`,
                      WebkitTransform: `translate3d(${forestTranslateX}%, 0, 0)`,
                      backfaceVisibility: 'hidden',
                      WebkitBackfaceVisibility: 'hidden',
                    }}
                  >
                    <Image
                      src="/images/plyta-barmanska-prawy.webp"
                      alt="Mosiężna płyta barmańska z multi wzorem do lodu"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute bottom-6 left-6">
                      <span className="backdrop-blur-md px-4 py-2 text-sm font-medium rounded-full bg-[rgba(255,255,255,0.2)] text-white">
                        Płyta z multi wzorem
                      </span>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Description */}
      <div className="px-6 py-20 md:px-12 md:py-28 lg:px-20 lg:py-36 lg:pb-14">
        <div className="text-center">
          <p className="text-xs uppercase tracking-widest text-zinc-400">
            Rzemiosło i precyzja
          </p>
          <p className="mt-8 leading-relaxed text-zinc-400 text-3xl text-center">
            {formatPolishText(
              "Nice Stamps to fuzja blisko 20-letniego doświadczenia w precyzyjnej obróbce CNC z pasją do branży premium hospitality. Tworzymy mosiężne stemple do lodu, geometryczne płyty barmańskie i luksusowe podkładki, które zamieniają serwowanie napojów w niezapomniany rytuał."
            )}
          </p>
        </div>
      </div>
    </section>
  );
}
