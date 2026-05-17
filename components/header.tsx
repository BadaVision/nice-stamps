"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-3xl transition-[background-color,border-color,box-shadow] duration-300 ease-in-out border ${isMenuOpen ? "rounded-2xl bg-white/70 backdrop-blur-lg border-white/20" : isScrolled ? "rounded-full bg-white/70 backdrop-blur-lg border-white/20" : "rounded-full bg-transparent border-transparent"}`}
      style={{
        boxShadow: isScrolled ? "rgba(14, 63, 126, 0.04) 0px 0px 0px 1px, rgba(42, 51, 69, 0.04) 0px 1px 1px -0.5px, rgba(42, 51, 70, 0.04) 0px 3px 3px -1.5px, rgba(42, 51, 70, 0.04) 0px 6px 6px -3px, rgba(14, 63, 126, 0.04) 0px 12px 12px -6px, rgba(14, 63, 126, 0.04) 0px 24px 24px -12px" : "none"
      }}
    >
      <div className="flex items-center justify-between transition-all duration-300 px-4 py-3">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <img
            src={isScrolled ? '/logo-menu-black.svg' : '/logo-menu-white.svg'}
            alt="Nice Stamps Logo"
            className="h-10 w-auto object-contain transition-opacity duration-300"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-10 lg:flex">
          <Link
            href="/#products"
            className={`text-lg transition-colors ${isScrolled ? "text-zinc-600 hover:text-zinc-900" : "text-white/70 hover:text-white"}`}
          >
            Produkty
          </Link>
          <Link
            href="/#filozofia"
            className={`text-lg transition-colors ${isScrolled ? "text-zinc-600 hover:text-zinc-900" : "text-white/70 hover:text-white"}`}
          >
            Filozofia
          </Link>
          <Link
            href="/#gallery"
            className={`text-lg transition-colors ${isScrolled ? "text-zinc-600 hover:text-zinc-900" : "text-white/70 hover:text-white"}`}
          >
            Galeria
          </Link>
          <Link
            href="/#o-nas"
            className={`text-lg transition-colors ${isScrolled ? "text-zinc-600 hover:text-zinc-900" : "text-white/70 hover:text-white"}`}
          >
            O nas
          </Link>
        </nav>

        {/* CTA */}
        <div className="hidden items-center gap-6 lg:flex">
          <Link
            href="/#kontakt"
            className={`px-6 py-2.5 text-base font-medium transition-all rounded-full ${isScrolled ? "bg-zinc-900 text-white hover:bg-zinc-800" : "bg-white text-zinc-950 hover:bg-white/90"}`}
          >
            Zapytaj o wycenę
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className={`transition-colors lg:hidden ${isScrolled || isMenuOpen ? "text-zinc-900" : "text-white"}`}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="border-t border-white/20 px-6 py-8 lg:hidden rounded-b-2xl">
          <nav className="flex flex-col gap-6">
            <Link
              href="/#products"
              className="text-xl text-zinc-900"
              onClick={() => setIsMenuOpen(false)}
            >
              Produkty
            </Link>
            <Link
              href="/#filozofia"
              className="text-xl text-zinc-900"
              onClick={() => setIsMenuOpen(false)}
            >
              Filozofia
            </Link>
            <Link
              href="/#gallery"
              className="text-xl text-zinc-900"
              onClick={() => setIsMenuOpen(false)}
            >
              Galeria
            </Link>
            <Link
              href="/#o-nas"
              className="text-xl text-zinc-900"
              onClick={() => setIsMenuOpen(false)}
            >
              O nas
            </Link>
            <Link
              href="/#kontakt"
              className="mt-4 bg-zinc-900 px-5 py-3 text-center text-base font-medium text-white rounded-full"
              onClick={() => setIsMenuOpen(false)}
            >
              Zapytaj o wycenę
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
