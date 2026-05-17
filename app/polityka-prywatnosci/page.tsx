import { Header } from "@/components/header";
import { FooterSection } from "@/components/sections/footer-section";
import { formatPolishText } from "@/lib/utils";

export const metadata = {
  title: "Polityka Prywatności | Nice Stamps",
  description: "Polityka prywatności serwisu Nice Stamps. Dowiedz się, jak chronimy i przetwarzamy Twoje dane osobowe.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="bg-black min-h-screen">
      <Header />
      <div className="max-w-4xl mx-auto px-6 pt-40 pb-32 md:pt-48 md:pb-40">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Polityka Prywatności
        </h1>
        <p className="text-sm text-gray-500 mb-12">Ostatnia aktualizacja: Maj 2026</p>

        <section>
          <h2 className="text-2xl font-semibold text-white mt-12 mb-6">
            Administrator Danych Osobowych
          </h2>
          <p className="text-gray-400 leading-relaxed mb-6">
            {formatPolishText(
              "Administratorem Twoich danych osobowych jest firma Mikołaj Wojtkowiak MICKS, z siedzibą przy ul. Armii Krajowej 102, 61-381 Poznań, NIP: 7822433639. W sprawach związanych z przetwarzaniem i ochroną danych osobowych możesz kontaktować się z nami pod adresem e-mail: micks@micks.pl lub telefonicznie: +48 511 211 987."
            )}
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mt-12 mb-6">
            Zakres, cel i podstawa prawna przetwarzania danych
          </h2>
          <p className="text-gray-400 leading-relaxed mb-6">
            {formatPolishText(
              "Przetwarzamy Twoje dane osobowe (imię, nazwisko, adres e-mail, nazwa firmy oraz ewentualny numer telefonu) przekazane dobrowolnie za pomocą formularza kontaktowego lub bezpośredniego kontaktu e-mail. Dane te są przetwarzane wyłącznie w celu:"
            )}
          </p>
          <ul className="list-disc pl-6 text-gray-400 mb-6 space-y-2">
            <li>Udzielenia odpowiedzi na przesłane zapytanie oraz prowadzenia korespondencji biznesowej.</li>
            <li>Przedstawienia oferty handlowej na wyraźne żądanie Użytkownika.</li>
          </ul>
          <p className="text-gray-400 leading-relaxed mb-6">
            {formatPolishText(
              "Podstawą prawną przetwarzania danych jest podjęcie działań na żądanie osoby, której dane dotyczą, przed zawarciem umowy (art. 6 ust. 1 lit. b RODO) oraz nasz prawnie uzasadniony interes polegający na obsłudze zapytań (art. 6 ust. 1 lit. f RODO)."
            )}
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mt-12 mb-6">
            Odbiorcy danych
          </h2>
          <p className="text-gray-400 leading-relaxed mb-6">
            {formatPolishText(
              "Twoje dane osobowe traktujemy z najwyższą poufnością. Nie sprzedajemy ich i nie udostępniamy w celach marketingowych podmiotom trzecim. Odbiorcami danych mogą być jedynie zaufane podmioty przetwarzające dane na nasze polecenie w celu utrzymania infrastruktury technicznej (np. dostawcy usług hostingowych i poczty e-mail), na podstawie stosownych umów powierzenia."
            )}
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mt-12 mb-6">
            Okres przechowywania danych
          </h2>
          <p className="text-gray-400 leading-relaxed mb-6">
            {formatPolishText(
              "Twoje dane osobowe będą przechowywane przez okres niezbędny do obsługi zapytania i prowadzenia korespondencji, a następnie mogą być archiwizowane przez okres wymagany do obrony przed ewentualnymi roszczeniami prawnymi (zgodnie z obowiązującymi przepisami prawa)."
            )}
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mt-12 mb-6">
            Prawa Użytkownika
          </h2>
          <p className="text-gray-400 leading-relaxed mb-6">
            Zgodnie z przepisami RODO, przysługuje Ci prawo do:
          </p>
          <ul className="list-disc pl-6 text-gray-400 mb-6 space-y-2">
            <li>Dostępu do treści swoich danych oraz otrzymania ich kopii.</li>
            <li>Sprostowania (poprawiania) swoich danych.</li>
            <li>Żądania usunięcia danych (prawo do bycia zapomnianym).</li>
            <li>Ograniczenia przetwarzania danych oraz wniesienia sprzeciwu wobec przetwarzania.</li>
            <li>Przenoszenia danych.</li>
          </ul>
          <p className="text-gray-400 leading-relaxed mb-6">
            {formatPolishText(
              "W celu realizacji swoich praw, skontaktuj się z nami na adres: "
            )}
            <a href="mailto:micks@micks.pl" className="text-white hover:text-gray-300 transition-colors">micks@micks.pl</a>
            {formatPolishText(
              ". Przysługuje Ci również prawo wniesienia skargi do organu nadzorczego – Prezesa Urzędu Ochrony Danych Osobowych (PUODO)."
            )}
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mt-12 mb-6">
            Pliki Cookies i Śledzenie
          </h2>
          <p className="text-gray-400 leading-relaxed mb-6">
            {formatPolishText(
              "Szanujemy Twoją prywatność. Nasza strona ma charakter wizerunkowo-informacyjny i nie wykorzystuje inwazyjnych mechanizmów śledzących ani marketingowych plików cookies bez Twojej wyraźnej zgody."
            )}
          </p>
        </section>
      </div>
      <FooterSection />
    </main>
  );
}
