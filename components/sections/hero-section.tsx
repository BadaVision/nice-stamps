"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";



const sideImages = [
  {
    src: "/images/hero-lewy1.webp",
    alt: "Luksusowe detale barmańskie Nice Stamps",
    position: "left",
    span: 1,
  },
  {
    src: "/images/hero-lewy2.webp",
    alt: "Ekskluzywne serwowanie drinków premium",
    position: "left",
    span: 1,
  },
  {
    src: "/images/hero-prawy1.webp",
    alt: "Personalizacja lodu w lokalach gastronomicznych",
    position: "right",
    span: 1,
  },
  {
    src: "/images/hero-prawy2.webp",
    alt: "Akcesoria Nice Stamps dla branży HoReCa",
    position: "right",
    span: 1,
  },
];

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      
      const rect = sectionRef.current.getBoundingClientRect();
      const scrollableHeight = window.innerHeight * 2;
      const scrolled = -rect.top;
      const progress = Math.max(0, Math.min(1, scrolled / scrollableHeight));
      
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Text fades out first (0 to 0.2)
  const textOpacity = Math.max(0, 1 - (scrollProgress / 0.2));
  
  // Overlay opacity follows text opacity but maxes at 0.5
  const overlayOpacity = textOpacity * 0.5;
  
  // Image transforms start after text fades (0.2 to 1)
  const imageProgress = Math.max(0, Math.min(1, (scrollProgress - 0.2) / 0.8));
  
  // Smooth interpolations
  const centerWidth = 100 - (imageProgress * 58); // 100% to 42%
  const centerHeight = 100 - (imageProgress * 30); // 100% to 70%
  const sideWidth = imageProgress * 22; // 0% to 22%
  const sideOpacity = imageProgress;
  const sideTranslateLeft = -100 + (imageProgress * 100); // -100% to 0%
  const sideTranslateRight = 100 - (imageProgress * 100); // 100% to 0%
  const borderRadius = imageProgress * 24; // 0px to 24px
  const gap = imageProgress * 16; // 0px to 16px
  
  // Vertical offset for side columns to move them up on mobile
  const sideTranslateY = -(imageProgress * 15); // Move up by 15% when fully expanded

  return (
    <section ref={sectionRef} className="relative bg-black">
      {/* Sticky container for scroll animation */}
      <div className="relative h-[100svh] lg:sticky lg:top-0 lg:h-screen overflow-hidden">
        <div className="flex h-full w-full items-center justify-center">
          {/* Bento Grid Container */}
          <div 
            className="relative flex h-full w-full items-stretch justify-center"
            style={{ gap: `${gap}px`, padding: `${imageProgress * 16}px`, paddingBottom: `${60 + (imageProgress * 40)}px` }}
          >
            
            {/* Left Column */}
            <div 
              className="hidden lg:flex flex-col will-change-transform"
              style={{
                width: `${sideWidth}%`,
                gap: `${gap}px`,
                transform: `translateX(${sideTranslateLeft}%) translateY(${sideTranslateY}%)`,
                opacity: sideOpacity,
              }}
            >
              {sideImages.filter(img => img.position === "left").map((img, idx) => (
                <div 
                  key={idx} 
                  className="relative overflow-hidden will-change-transform"
                  style={{
                    flex: img.span,
                    borderRadius: `${borderRadius}px`,
                  }}
                >
                  <Image
                    src={img.src || "/placeholder.svg"}
                    alt={img.alt}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>

            {/* Main Hero Image - Center */}
            <div 
              className="relative overflow-hidden will-change-transform max-lg:!w-full max-lg:!h-full max-lg:!rounded-none max-lg:!translate-y-0"
              style={{
                width: `${centerWidth}%`,
                height: `${centerHeight}%`,
                flex: "0 0 auto",
                borderRadius: `${borderRadius}px`,
              }}
            >
              <video
                src="/hero-video.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 h-full w-full object-cover"
              />
              
              {/* Dynamic Dark Overlay - Fades out alongside text */}
              <div 
                className="absolute inset-0 bg-black z-10 pointer-events-none"
                style={{ opacity: overlayOpacity }}
              />
              
              {/* Overlay Logo and H1 - Fades out first */}
              <div 
                className="absolute inset-0 overflow-hidden pointer-events-none z-20"
                style={{ opacity: textOpacity }}
              >
                <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white font-sans text-lg md:text-2xl uppercase tracking-wide text-center z-20 w-full animate-in fade-in slide-in-from-bottom-12 duration-[3000ms] ease-out">
                  Personalizowane stemple do lodu
                </h1>
                <img 
                  src="/logo-hero.svg" 
                  alt="Nice Stamps Logo" 
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[96vw] max-w-none h-auto z-10 animate-in fade-in slide-in-from-bottom-12 duration-[3000ms] ease-out"
                />
              </div>
            </div>

            {/* Right Column */}
            <div 
              className="hidden lg:flex flex-col will-change-transform"
              style={{
                width: `${sideWidth}%`,
                gap: `${gap}px`,
                transform: `translateX(${sideTranslateRight}%) translateY(${sideTranslateY}%)`,
                opacity: sideOpacity,
              }}
            >
              {sideImages.filter(img => img.position === "right").map((img, idx) => (
                <div 
                  key={idx} 
                  className="relative overflow-hidden will-change-transform"
                  style={{
                    flex: img.span,
                    borderRadius: `${borderRadius}px`,
                  }}
                >
                  <Image
                    src={img.src || "/placeholder.svg"}
                    alt={img.alt}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>

      {/* Scroll space to enable animation */}
      <div className="hidden lg:block h-[200vh]" />

      {/* Tagline Section */}
      <div className="px-6 pt-32 pb-28 md:pt-48 md:px-12 md:pb-36 lg:px-20 lg:pt-56 lg:pb-44">
        <p className="mx-auto max-w-none text-center text-2xl leading-relaxed text-white md:text-3xl lg:text-[2.5rem] lg:leading-snug">
          Ekskluzywny branding lodu i detale,<br />które definiują klasę premium.
        </p>
      </div>
    </section>
  );
}
