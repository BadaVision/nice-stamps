"use client";

import Link from "next/link";
import { Instagram, Facebook, Youtube } from "lucide-react";
import { formatPolishText } from "@/lib/utils";

const footerLinks = [
  { label: "Produkty", href: "#products" },
  { label: "Filozofia", href: "#filozofia" },
  { label: "Galeria", href: "#gallery" },
  { label: "O nas", href: "#o-nas" },
];

export function FooterSection() {
  return (
    <footer className="bg-black">
      {/* Main Footer Content */}
      <div className="border-t border-zinc-800 px-6 py-16 md:px-12 md:py-20 lg:px-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
          {/* Brand */}
          <div className="md:col-span-1 lg:col-span-2">
            <Link href="/" className="text-lg font-medium text-white tracking-widest uppercase">
              Nice Stamps
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-zinc-400">
              {formatPolishText(
                "Personalizowane stemple do lodu, płyty barmańskie oraz ekskluzywne podkładki. Zbuduj bezkompromisowy wizerunek swojej marki w oczach gości."
              )}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="mb-4 text-sm font-medium text-white">Menu</h4>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-zinc-400 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-zinc-800 px-6 py-6 md:px-12 lg:px-20">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-xs text-zinc-400">
            2026 Nice Stamps. Wszystkie prawa zastrzeżone.
          </p>

          

          {/* Social Links */}
          <div className="flex items-center gap-6">
            <Link
              href="#"
              className="text-zinc-400 transition-colors hover:text-white"
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </Link>
            <Link
              href="#"
              className="text-zinc-400 transition-colors hover:text-white"
              aria-label="Facebook"
            >
              <Facebook size={20} />
            </Link>
            <Link
              href="#"
              className="text-zinc-400 transition-colors hover:text-white"
              aria-label="TikTok"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/></svg>
            </Link>
            <Link
              href="#"
              className="text-zinc-400 transition-colors hover:text-white"
              aria-label="YouTube"
            >
              <Youtube size={20} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
