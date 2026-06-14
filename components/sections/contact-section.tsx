"use client";

export function ContactSection() {
  const { formatPolishText } = require("@/lib/utils");
  return (
    <section id="kontakt" className="bg-black px-6 py-24 md:px-12 md:py-32 lg:px-20 lg:py-40">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24">
          
          {/* Copywriting Section */}
          <div className="flex flex-col justify-start">
            <h2 className="text-3xl font-medium tracking-tight text-white md:text-4xl lg:text-5xl font-sans">
              Porozmawiajmy o detalach.
            </h2>
            <p className="mt-6 text-xl text-white">
              Skontaktuj się z nami, aby otrzymać wycenę.
            </p>
            <p className="mt-6 leading-relaxed text-zinc-400">
              {formatPolishText(
                "Opisz krótko swoją markę i potrzeby. Skontaktujemy się z Tobą, aby omówić detale techniczne i przygotować indywidualną wycenę. Pliki graficzne z logotypem ustalimy w kolejnym kroku."
              )}
            </p>
          </div>

          {/* Form Section */}
          <div className="flex items-start">
            <form className="w-full space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-4">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Imię i nazwisko"
                    required
                    className="w-full rounded-md border border-zinc-800 bg-zinc-900/50 px-4 py-3 text-white placeholder-zinc-500 transition-colors focus:border-white focus:outline-none focus:ring-0"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Adres e-mail"
                    required
                    className="w-full rounded-md border border-zinc-800 bg-zinc-900/50 px-4 py-3 text-white placeholder-zinc-500 transition-colors focus:border-white focus:outline-none focus:ring-0"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="company"
                    placeholder="Nazwa lokalu / Marki (Opcjonalnie)"
                    className="w-full rounded-md border border-zinc-800 bg-zinc-900/50 px-4 py-3 text-white placeholder-zinc-500 transition-colors focus:border-white focus:outline-none focus:ring-0"
                  />
                </div>
                <div>
                  <textarea
                    name="message"
                    rows={4}
                    placeholder="Wiadomość"
                    required
                    className="w-full resize-none rounded-md border border-zinc-800 bg-zinc-900/50 px-4 py-3 text-white placeholder-zinc-500 transition-colors focus:border-white focus:outline-none focus:ring-0"
                  />
                </div>
              </div>
              <label className="flex items-center gap-3 cursor-pointer group">
                <input
                  type="checkbox"
                  required
                  className="h-4 w-4 cursor-pointer rounded-sm border-zinc-800 bg-zinc-900/50 accent-white transition-colors"
                />
                <span className="text-sm text-zinc-400 group-hover:text-zinc-300 transition-colors">
                  Akceptuję Regulamin oraz Politykę Prywatności.
                </span>
              </label>
              <button
                type="submit"
                className="inline-flex w-full md:w-auto items-center justify-center rounded-full border border-white/20 bg-zinc-900 px-8 py-3 text-sm font-medium text-white transition-all hover:bg-zinc-800"
              >
                Wyślij zapytanie
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
