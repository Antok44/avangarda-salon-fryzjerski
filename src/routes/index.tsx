import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Facebook, MapPin, Phone, Star, Clock, Scissors, Heart, Sparkles } from "lucide-react";

import logoAsset from "@/assets/ava_logo.jpeg.asset.json";
import ava1Asset from "@/assets/ava.jpeg.asset.json";
import ava2Asset from "@/assets/ava1.jpeg.asset.json";
import metAsset from "@/assets/ava_met.jpg.asset.json";
import met1Asset from "@/assets/ava_met1.jpg.asset.json";
import { BookButton } from "@/components/salon/BookButton";
import { Expandable } from "@/components/salon/Expandable";
import {
  ADDRESS,
  FACEBOOK_URL,
  PHONE,
  hours,
  reviews,
  serviceGroups,
} from "@/data/salon";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Salon Fryzjerski Avangarda — Fryzjer Lubin, Cedrowa 1b" },
      {
        name: "description",
        content:
          "Salon Fryzjerski Avangarda w Lubinie — koloryzacja, baleyage, Air Touch, zabiegi odbudowujące i precyzyjne strzyżenia. Ocena 4,9★. Rezerwuj online.",
      },
      { property: "og:title", content: "Salon Fryzjerski Avangarda — Lubin" },
      {
        property: "og:description",
        content:
          "Elegancki salon fryzjerski w Lubinie. Koloryzacja, baleyage, zabiegi pielęgnacyjne i strzyżenia damskie oraz męskie u Ani.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const tabs = [
  { id: "home", label: "Start" },
  { id: "stylist", label: "Stylistka" },
  { id: "services", label: "Usługi" },
  { id: "gallery", label: "Galeria" },
  { id: "reviews", label: "Opinie" },
  { id: "contact", label: "Godziny i lokalizacja" },
] as const;

type TabId = (typeof tabs)[number]["id"];

function SectionHeading({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
}) {
  return (
    <header className="mx-auto max-w-2xl text-center">
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mt-4 text-4xl text-foreground sm:text-5xl">{title}</h2>
      {intro && <p className="mt-5 text-sm leading-relaxed text-muted-foreground">{intro}</p>}
    </header>
  );
}

function Index() {
  const [tab, setTab] = useState<TabId>("home");

  return (
    <div className="min-h-screen surface-soft">
      <nav className="sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur-xl">
        <div className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-3 px-4 py-3 sm:flex sm:justify-between sm:px-6">
          <button
            type="button"
            onClick={() => setTab("home")}
            className="flex min-w-0 items-center gap-3 text-left"
          >
            <img
              src={logoAsset.url}
              alt="Logo Salonu Fryzjerskiego Avangarda"
              className="h-10 w-auto shrink-0 rounded-md"
            />
            <span className="sr-only">Salon Fryzjerski Avangarda</span>
          </button>
          <BookButton className="px-5 py-2 text-[0.65rem] sm:order-2">Rezerwuj</BookButton>
          <ul className="col-span-2 -mx-4 flex gap-1 overflow-x-auto px-4 pb-1 sm:order-1 sm:mx-0 sm:overflow-visible sm:px-0 sm:pb-0">
            {tabs.map((t) => (
              <li key={t.id}>
                <button
                  type="button"
                  onClick={() => setTab(t.id)}
                  aria-current={tab === t.id ? "page" : undefined}
                  className={`whitespace-nowrap rounded-full px-4 py-2 text-[0.7rem] uppercase tracking-[0.18em] transition-colors ${
                    tab === t.id
                      ? "bg-accent text-accent-foreground"
                      : "text-muted-foreground hover:text-primary"
                  }`}
                >
                  {t.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <main key={tab} className="fade-rise mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
        {tab === "home" && <HomeTab onServices={() => setTab("services")} />}
        {tab === "stylist" && <StylistTab />}
        {tab === "services" && <ServicesTab />}
        {tab === "gallery" && <GalleryTab />}
        {tab === "reviews" && <ReviewsTab />}
        {tab === "contact" && <ContactTab />}
      </main>

      <Footer />
    </div>
  );
}

function HomeTab({ onServices }: { onServices: () => void }) {
  return (
    <div className="space-y-24">
      <section className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <img
            src={logoAsset.url}
            alt="Logo Salonu Fryzjerskiego Avangarda"
            className="w-64 max-w-full rounded-2xl"
          />
          <h1 className="mt-8 text-5xl leading-[1.05] text-foreground sm:text-6xl">
            Where Every Client
            <span className="block italic text-primary">Leaves Smiling</span>
          </h1>
          <p className="mt-6 max-w-md text-sm leading-relaxed text-muted-foreground">
            Salon fryzjerski w Lubinie, w którym liczy się kondycja włosów, precyzja cięcia i
            spokojna, serdeczna atmosfera. Koloryzacja, baleyage, zabiegi odbudowujące i strzyżenia
            damskie oraz męskie.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <BookButton />
            <button
              type="button"
              onClick={onServices}
              className="text-xs uppercase tracking-[0.22em] text-primary underline-offset-8 hover:underline"
            >
              Zobacz usługi
            </button>
          </div>
          <dl className="mt-10 grid gap-4 sm:grid-cols-3">
            <div className="card-elegant p-5">
              <dt className="eyebrow">Ocena</dt>
              <dd className="mt-2 flex items-center gap-2 text-2xl text-foreground">
                4,9 <Star className="h-4 w-4 fill-primary text-primary" />
              </dd>
              <p className="mt-1 text-xs text-muted-foreground">32 opinie</p>
            </div>
            <div className="card-elegant p-5">
              <dt className="eyebrow">Dziś otwarte</dt>
              <dd className="mt-2 text-lg text-foreground">09:00 – 17:00</dd>
              <p className="mt-1 text-xs text-muted-foreground">Sob. 09:00 – 14:00</p>
            </div>
            <div className="card-elegant p-5">
              <dt className="eyebrow">Telefon</dt>
              <dd className="mt-2 text-lg text-foreground">{PHONE}</dd>
              <p className="mt-1 text-xs text-muted-foreground">{ADDRESS}</p>
            </div>
          </dl>
        </div>
        <div className="relative">
          <img
            src={met1Asset.url}
            alt="Metamorfoza — chłodny blond w falach po zabiegu w salonie Avangarda"
            className="aspect-[4/5] w-full rounded-[2rem] object-cover shadow-lift"
          />
          <img
            src={ava1Asset.url}
            alt="Popielaty blond z delikatnymi falami"
            className="absolute -bottom-8 -left-6 hidden w-40 rounded-2xl border-4 border-background object-cover shadow-soft sm:block"
          />
        </div>
      </section>

      <section className="grid gap-12 lg:grid-cols-2 lg:items-center">
        <img
          src={ava2Asset.url}
          alt="Precyzyjnie ścięte, rozświetlone blond włosy"
          className="aspect-[4/3] w-full rounded-[2rem] object-cover shadow-soft"
        />
        <div>
          <p className="eyebrow">O salonie</p>
          <h2 className="mt-4 text-4xl text-foreground">Miejsce prowadzone przez kobietę, z sercem</h2>
          <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
            Avangarda to niewielki, kameralny salon przy Cedrowej 1b w Lubinie. Pracujemy na
            profesjonalnych kosmetykach, z zachowaniem wszystkich zasad higieny i ostrożności — a
            każda usługa zaczyna się od rozmowy i szczerej diagnozy włosów. Jeśli coś włosom
            zaszkodzi, powiemy to wprost i zaproponujemy lepszą drogę.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            Tu nikt nie musi się tłumaczyć ani dopasowywać — każda osoba jest u nas mile widziana i
            traktowana z taką samą uwagą. Dlatego klientki i klienci wracają do nas latami, często z
            całymi rodzinami.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {[
              { icon: Sparkles, label: "Profesjonalne kosmetyki" },
              { icon: Heart, label: "Szczera, spokojna rozmowa" },
              { icon: Scissors, label: "Precyzja w każdym cięciu" },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="card-elegant p-4">
                <Icon className="h-4 w-4 text-primary" />
                <p className="mt-3 text-xs leading-snug text-muted-foreground">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </div>
  );
}

function StylistTab() {
  return (
    <div className="space-y-16">
      <SectionHeading
        eyebrow="Poznaj stylistkę"
        title="Ania"
        intro="Fryzjerka z pasją, która słucha, doradza i pracuje tak, by włosy były w coraz lepszej kondycji po każdej wizycie."
      />
      <div className="mx-auto max-w-3xl">
        <h3 className="text-3xl text-foreground">Specjalizacje</h3>
        <ul className="mt-6 space-y-4">
          {[
            ["Koloryzacja", "Dobór odcienia do typu urody, tonowanie, odświeżanie koloru."],
            ["Baleyage i Air Touch", "Miękkie rozjaśnienia z naturalnym przejściem i odrostem."],
            [
              "Precyzyjne strzyżenia",
              "Damskie i męskie — linia, która ładnie się układa również w domu.",
            ],
            [
              "Zabiegi odbudowujące",
              "Botoks, keratyna, regeneracja BAOBAB i nawilżanie włosów po rozjaśnianiu.",
            ],
          ].map(([title, desc]) => (
            <li key={title} className="card-elegant p-5">
              <p className="text-lg text-foreground">{title}</p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{desc}</p>
            </li>
          ))}
        </ul>
        <blockquote className="mt-8 border-l-2 border-primary/40 pl-5 text-sm italic leading-relaxed text-muted-foreground">
          „Pani Ania jest przemiła, a jej podejście do klienta i precyzja w strzyżeniu – na
          najwyższym poziomie. Fryzjerka z prawdziwą pasją.”
        </blockquote>
        <BookButton className="mt-8">Zarezerwuj wizytę u Ani</BookButton>
      </div>
    </div>
  );
}


function ServicesTab() {
  return (
    <div className="space-y-14">
      <SectionHeading
        eyebrow="Cennik"
        title="Usługi"
        intro="Ceny mogą się różnić w zależności od gęstości i długości włosów oraz zużytego materiału. Rozwiń opis, aby poznać szczegóły zabiegu."
      />
      {serviceGroups.map((group) => (
        <section key={group.title}>
          <h3 className="text-2xl text-foreground">{group.title}</h3>
          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {group.items.map((item) => (
              <article key={item.name} className="card-elegant flex flex-col p-6">
                <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-4">
                  <h4 className="min-w-0 text-lg leading-snug text-foreground">{item.name}</h4>
                  <p className="shrink-0 text-right text-sm text-primary">{item.price}</p>
                </div>
                <p className="mt-2 text-xs uppercase tracking-[0.18em] text-muted-foreground">
                  {item.duration}
                </p>
                {item.description && (
                  <Expandable
                    text={item.description}
                    {...(item.variants ? { extra: item.variants } : {})}
                  />
                )}
                <BookButton variant="outline" className="mt-6 self-start px-5 py-2 text-[0.65rem]">
                  Umów
                </BookButton>
              </article>
            ))}
          </div>
        </section>
      ))}
      <CtaBand />
    </div>
  );
}

function GalleryTab() {
  const photos = [
    { src: metAsset.url, alt: "Metamorfoza — rozjaśnienie z miękkim przejściem" },
    { src: met1Asset.url, alt: "Metamorfoza — chłodny blond w falach" },
    { src: ava1Asset.url, alt: "Popielaty blond z delikatnymi falami" },
    { src: ava2Asset.url, alt: "Rozświetlony blond i precyzyjna linia cięcia" },
  ];

  return (
    <div className="space-y-12">
      <SectionHeading
        eyebrow="Galeria"
        title="Metamorfozy i prace"
        intro="Kilka efektów pracy w salonie — kolor, rozjaśnienia i pielęgnacja włosów."
      />
      <div className="grid gap-5 sm:grid-cols-2">
        {photos.map((p) => (
          <figure
            key={p.src}
            className="overflow-hidden rounded-[1.75rem] shadow-soft"
          >
            <img
              src={p.src}
              alt={p.alt}
              loading="lazy"
              className="aspect-[4/5] w-full object-cover transition-transform duration-700 hover:scale-[1.04]"
            />
          </figure>
        ))}
      </div>
      <CtaBand />
    </div>
  );
}


function ReviewsTab() {
  return (
    <div className="space-y-12">
      <SectionHeading
        eyebrow="Opinie"
        title="4,9 ★ z 32 opinii"
        intro="Najczęściej powtarzane słowa: precyzja, pasja, spokój i lata zaufania."
      />
      <div className="grid gap-6 md:grid-cols-2">
        {reviews.map((r) => (
          <article key={r.name} className="card-elegant p-7">
            <div className="flex items-center gap-1 text-primary">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-3.5 w-3.5 fill-primary" />
              ))}
            </div>
            <p className="mt-4 text-lg text-foreground">{r.name}</p>
            <p className="mt-1 text-xs uppercase tracking-[0.14em] text-muted-foreground">
              {r.meta}
            </p>
            <Expandable text={r.text} limit={170} />
          </article>
        ))}
      </div>
      <CtaBand />
    </div>
  );
}

function ContactTab() {
  return (
    <div className="space-y-12">
      <SectionHeading eyebrow="Wizyta" title="Godziny i lokalizacja" />
      <div className="grid gap-8 lg:grid-cols-2">
        <div className="card-elegant p-8">
          <h3 className="flex items-center gap-2 text-2xl text-foreground">
            <Clock className="h-4 w-4 text-primary" /> Godziny otwarcia
          </h3>
          <table className="mt-6 w-full text-sm">
            <tbody>
              {hours.map((h) => (
                <tr key={h.day} className="border-b border-border/60 last:border-0">
                  <th scope="row" className="py-3 text-left font-normal text-muted-foreground">
                    {h.day}
                  </th>
                  <td className="py-3 text-right text-foreground">{h.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="mt-8 space-y-3 text-sm">
            <p className="flex items-center gap-2 text-foreground">
              <MapPin className="h-4 w-4 text-primary" /> {ADDRESS}
            </p>
            <a
              href={`tel:+48${PHONE.replace(/\s/g, "")}`}
              className="flex items-center gap-2 text-foreground hover:text-primary"
            >
              <Phone className="h-4 w-4 text-primary" /> {PHONE}
            </a>
            <a
              href={FACEBOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-foreground hover:text-primary"
            >
              <Facebook className="h-4 w-4 text-primary" /> Facebook salonu
            </a>
          </div>
          <BookButton className="mt-8" />
        </div>
        <div className="overflow-hidden rounded-[2rem] shadow-soft">
          <iframe
            title="Mapa — Salon Fryzjerski Avangarda, Cedrowa 1b, Lubin"
            src="https://www.google.com/maps?q=Cedrowa+1b,+59-300+Lubin&output=embed"
            loading="lazy"
            className="h-full min-h-[420px] w-full border-0"
          />
        </div>
      </div>
    </div>
  );
}

function CtaBand() {
  return (
    <section className="surface-plum rounded-[2rem] px-8 py-12 text-center shadow-lift">
      <p className="eyebrow text-primary-foreground/70">Rezerwacja online</p>
      <h2 className="mt-4 text-3xl text-primary-foreground sm:text-4xl">
        Wybierz termin, który Ci pasuje
      </h2>
      <p className="mx-auto mt-4 max-w-md text-sm text-primary-foreground/80">
        Rezerwacja przez Booksy zajmuje chwilę — potwierdzenie dostaniesz od razu.
      </p>
      <a
        href="https://booksy.com/pl-pl/100913_salon-fryzjerski-avangarda_fryzjer_15486_lubin#ba_s=seo"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-8 inline-flex items-center justify-center rounded-full bg-background px-8 py-3 text-xs uppercase tracking-[0.22em] text-primary transition-transform duration-300 hover:-translate-y-0.5"
      >
        Rezerwuj
      </a>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border/70 bg-card/60">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:grid-cols-3 sm:px-6">
        <div>
          <img
            src={logoAsset.url}
            alt="Logo Salonu Fryzjerskiego Avangarda"
            className="w-44 rounded-xl"
          />
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            Salon prowadzony przez kobietę. Miejsce otwarte i przyjazne dla wszystkich — także dla
            osób LGBTQ+.
          </p>
          <p className="mt-3 flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-primary">
            <Heart className="h-3.5 w-3.5 fill-primary" /> Wszyscy są tu mile widziani
          </p>
        </div>
        <div className="text-sm text-muted-foreground">
          <p className="eyebrow">Kontakt</p>
          <p className="mt-4 text-foreground">{ADDRESS}</p>
          <a href={`tel:+48${PHONE.replace(/\s/g, "")}`} className="mt-2 block hover:text-primary">
            {PHONE}
          </a>
          <a
            href={FACEBOOK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-flex items-center gap-2 hover:text-primary"
          >
            <Facebook className="h-3.5 w-3.5" /> Facebook
          </a>
        </div>
        <div className="text-sm text-muted-foreground">
          <p className="eyebrow">Godziny</p>
          <p className="mt-4">Pon. – pt. 09:00 – 17:00</p>
          <p>Sobota 09:00 – 14:00</p>
          <p>Niedziela zamknięte</p>
          <BookButton className="mt-6 px-6 py-2 text-[0.65rem]">Rezerwuj</BookButton>
        </div>
      </div>
      <p className="border-t border-border/60 py-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Salon Fryzjerski Avangarda · Lubin
      </p>
    </footer>
  );
}
