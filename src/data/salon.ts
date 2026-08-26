export const BOOKSY_URL =
  "https://booksy.com/pl-pl/100913_salon-fryzjerski-avangarda_fryzjer_15486_lubin#ba_s=seo";
export const FACEBOOK_URL = "https://www.facebook.com/salonfryzjerski.annakobylanska#";
export const PHONE = "693 873 780";
export const ADDRESS = "Cedrowa 1b, 59-300 Lubin";

export type Service = {
  name: string;
  price: string;
  duration: string;
  description?: string;
  variants?: string[];
};

export type ServiceGroup = { title: string; note?: string; items: Service[] };

const priceNote = "Cena może być wyższa w zależności od gęstości włosów oraz zużytego materiału.";

export const serviceGroups: ServiceGroup[] = [
  {
    title: "Strzyżenie i modelowanie",
    items: [
      { name: "Strzyżenie męskie", price: "60,00 zł", duration: "1 g" },
      { name: "Podcięcie grzywki", price: "25,00 zł", duration: "30 min" },
      {
        name: "Mycie, strzyżenie, suszenie — włosy krótkie",
        price: "80,00 zł",
        duration: "2 g",
      },
      {
        name: "Mycie, strzyżenie, suszenie — włosy średnie",
        price: "100,00 zł",
        duration: "2 g",
      },
      {
        name: "Mycie, strzyżenie, suszenie — włosy długie",
        price: "120,00 zł",
        duration: "2 g",
      },
      {
        name: "Mycie, strzyżenie, modelowanie — włosy krótkie",
        price: "100,00 zł",
        duration: "2 g",
      },
      {
        name: "Mycie, strzyżenie, modelowanie — włosy średnie",
        price: "120,00 zł",
        duration: "2 g",
      },
      {
        name: "Mycie, strzyżenie, modelowanie — włosy długie",
        price: "140,00 zł",
        duration: "2 g",
      },
      { name: "Mycie, modelowanie — włosy krótkie", price: "70,00 zł", duration: "1 g 10 min" },
      { name: "Mycie, modelowanie — włosy średnie", price: "90,00 zł", duration: "1 g 30 min" },
      { name: "Mycie, modelowanie — włosy długie", price: "110,00 zł", duration: "1 g 30 min" },
    ],
  },
  {
    title: "Koloryzacja",
    items: [
      {
        name: "Farbowanie 1 kolor — włosy krótkie",
        price: "230,00 zł",
        duration: "od 3 g",
        description: priceNote,
      },
      {
        name: "Farbowanie 1 kolor — włosy średnie",
        price: "270,00 zł",
        duration: "od 3 g",
        description: priceNote,
      },
      {
        name: "Farbowanie 1 kolor — włosy długie",
        price: "310,00 zł",
        duration: "od 3 g",
        description: priceNote,
      },
      {
        name: "Baleyage, strzyżenie, modelowanie — włosy średnie",
        price: "400,00 zł",
        duration: "od 5 g",
        description: priceNote,
      },
      {
        name: "Baleyage, strzyżenie, modelowanie — włosy długie",
        price: "500,00 zł",
        duration: "od 5 g",
        description: priceNote,
      },
      {
        name: "Koloryzacja Air Touch — włosy średnie",
        price: "500,00 zł",
        duration: "od 7 g",
        description: priceNote,
      },
      {
        name: "Koloryzacja Air Touch — włosy długie",
        price: "700,00 zł",
        duration: "od 7 g",
        description: priceNote,
      },
      {
        name: "Dekoloryzacja, farbowanie, strzyżenie, modelowanie — włosy krótkie",
        price: "250,00 zł",
        duration: "od 4 g",
        description: priceNote,
      },
      {
        name: "Dekoloryzacja, farbowanie, strzyżenie, modelowanie — włosy średnie",
        price: "450,00 zł",
        duration: "od 5 g",
        description: priceNote,
      },
      {
        name: "Dekoloryzacja, farbowanie, strzyżenie, modelowanie — włosy długie",
        price: "650,00 zł",
        duration: "od 5 g",
        description: priceNote,
      },
    ],
  },
  {
    title: "Zabiegi pielęgnacyjne",
    items: [
      {
        name: "ZABIEG — Botoks Mila",
        price: "od 150,00 zł",
        duration: "od 2 g 30 min",
        description:
          "Botoks Mila (Mila Professional Rich Therapy Quick Botox) to dwuskładnikowa, ekspresowa kuracja do włosów zniszczonych i osłabionych, która głęboko je odbudowuje i regeneruje. Produkt zawiera keratynę, olej makadamia i cząsteczki złota koloidalnego, aby wygładzić włosy, nadać im blask i miękkość, a także zmniejszyć ich łamliwość i poprawić elastyczność.",
        variants: ["Włosy krótkie — 150 zł", "Włosy średnie — 250 zł", "Włosy długie — 350 zł"],
      },
      {
        name: "ZABIEG — Keratynowa odbudowa włosa ARTEGO",
        price: "od 150,00 zł",
        duration: "od 2 g 30 min",
        description:
          "To profesjonalny zabieg odbudowujący włosy. Dzięki działaniu keratyny i protein jedwabiu zawartych w aktywnych składnikach Twoje włosy będą lśnić jak nigdy dotąd. Kosmetyki dzięki świetnie zbilansowanym składom sprawią, że pasma szybko odzyskają utraconą kondycję. " +
          priceNote,
        variants: ["Włosy krótkie — 150 zł", "Włosy średnie — 200 zł", "Włosy długie — 250 zł"],
      },
      {
        name: "ZABIEG — Regeneracja BAOBAB",
        price: "od 80,00 zł",
        duration: "od 2 g",
        description:
          "Jedna z najlepszych regeneracji. Supreme Baobab szampon regenerująco-nawilżający z organicznym olejkiem baobab — odbudowujący szampon do włosów suchych, porowatych, zniszczonych i rozjaśnionych, o silnych właściwościach regenerujących i nawilżających. Jego delikatna formuła dodaje blasku i miękkości, przeciwdziałając puszeniu się włosów. Supreme Baobab maska regenerująco-nawilżająca wzbogacona olejkiem baobab o właściwościach wzmacniających, odżywczych, nawilżających i przeciwutleniających — nie obciąża włosów, pozostawia je elastyczne, gładkie i lśniące.",
        variants: ["Włosy krótkie — 80 zł", "Włosy średnie — 120 zł", "Włosy długie — 160 zł"],
      },
      {
        name: "ZABIEG — Keratoxx",
        price: "od 100,00 zł",
        duration: "od 2 g",
        description:
          "KERATOXX to szampon przygotowujący i maska wypełniająca z keratyną oraz kwasem hialuronowym — składniki aktywne, które głęboko nawilżają, regenerują i odbudowują włos od wewnątrz. Olejek keratynowy i olejek z pestek moreli zapewniają naturalną objętość, miękkość i lekkość bez obciążenia.",
        variants: ["Włosy krótkie — 100 zł", "Włosy średnie — 150 zł", "Włosy długie — 200 zł"],
      },
      {
        name: "ZABIEG — Nano Botoks z proteinami złota",
        price: "od 100,00 zł",
        duration: "od 2 g 30 min",
        description:
          "Bootox Gold z botuliną kapilarną to linia profesjonalnych produktów przeznaczonych do regeneracji włosów rozwarstwionych, zniszczonych i delikatnych. Kuracja wypełnia włosy, dodaje objętość, gęstość i natychmiastowo zdrowszy wygląd. Wnika głęboko we włókno włosa, wypełniając i restrukturyzując zniszczone warstwy — pozostawia włos wygładzony, miękki i lśniący już od pierwszej aplikacji. Dodaje +30% objętości. " +
          priceNote,
        variants: ["Włosy krótkie — 100 zł", "Włosy średnie — 200 zł", "Włosy długie — 300 zł"],
      },
      {
        name: "Zabieg nawilżający nowoczesną pielęgnacją",
        price: "od 50,00 zł",
        duration: "od 2 g",
        description: "Zabieg nawilżający przy pomocy nowoczesnej pielęgnacji. " + priceNote,
        variants: ["Włosy krótkie — 50 zł", "Włosy średnie — 100 zł", "Włosy długie — 150 zł"],
      },
    ],
  },
];

export const reviews = [
  {
    name: "Ewa Chrapliwa",
    meta: "10 opinii · 3 zdjęcia · 10 miesięcy temu",
    text: "Jestem wieloletnią klientką salonu. Zawsze wychodzę zadowolona z wizyty. Bez względu na to czy odbywa się farbowanie włosów czy zabieg pielęgnacyjny, wszystko odbywa się z zachowaniem wszelkich środków ostrożności, na bazie profesjonalnych kosmetyków i zawsze w miłej i przyjaznej atmosferze. Polecam serdecznie.",
  },
  {
    name: "Jolanta Hreczuch",
    meta: "4 opinie · 1 zdjęcie · 10 miesięcy temu",
    text: "Wszystko na najwyższym poziomie. Pani Ania profesjonalnie i z dużym zaangażowaniem wykonuje na moich włosach farbowanie, baleyage oraz usługi nawilżające. Mój mąż jest bardzo zadowolony ze strzyżenia. TO NASZA ULUBIONA FRYZJERKA, POLECAMY…",
  },
  {
    name: "Krzysztof Białas",
    meta: "Lokalny przewodnik · 14 opinii · 26 zdjęć · 10 miesięcy temu",
    text: "Świetny salon! Pani Ania jest przemiła, a jej podejście do klienta i precyzja w strzyżeniu – na najwyższym poziomie. Fryzjerka z prawdziwą pasją. Zawsze wysłucha i sprawi, że wychodzę z uśmiechem. Zdecydowanie polecam!",
  },
  {
    name: "Izabela W-K",
    meta: "10 opinii · 9 miesięcy temu",
    text: "Koloryzacja, jak zawsze udana. Świetny dobór produktów i fachowe doradztwo. Ścięcie także precyzyjne. Serdecznie polecam. Pani Ania zawsze znajdzie termin.",
  },
];

export const hours = [
  { day: "Poniedziałek", time: "09:00 – 17:00" },
  { day: "Wtorek", time: "09:00 – 17:00" },
  { day: "Środa", time: "09:00 – 17:00" },
  { day: "Czwartek", time: "09:00 – 17:00" },
  { day: "Piątek", time: "09:00 – 17:00" },
  { day: "Sobota", time: "09:00 – 14:00" },
  { day: "Niedziela", time: "Zamknięte" },
];
