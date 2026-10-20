AUTO DIJAGNOSTIKA LAZAREVIĆ – redizajn sajta (oktobar 2026)

Sajt je običan HTML/CSS/JS, bez build koraka. Otpremite ceo folder na hosting kao i ranije.

STRUKTURA
  index.html, usluge.html, cenovnik.html, konfigurator.html, galerija.html, o-nama.html, kontakt.html
  css/style.css          jedini stilski fajl (boje i fontovi su promenljive na vrhu: :root)
  js/                    menu, lamps (lampice na početnoj), gallery, working-hours, working-items, kontaktForma, language-switch
  slike/                 originalne fotografije + slike/mini/ (male verzije za brzo učitavanje)

KAKO DODATI NOVU SLIKU U GALERIJU
  1. Ubacite sliku u slike/ (npr. slika47.jpg). Preporuka: napravite i malu verziju (širina ~560 px) u slike/mini/slika47.jpg.
  2. U galerija.html na KRAJ liste (poslednji <figure>) kopirajte postojeći blok i izmenite ga:
     <figure class="shot" data-category="ecu"> ... </figure>
     data-category je "ecu" ili "dijagnostika". Najnovija slika se prikazuje prva.
  3. Traka "Poslednji radovi" na početnoj strani sama čita poslednjih 10 stavki iz galerija.html.
  (Ako mini verzija ne postoji, sajt automatski koristi veliku sliku.)

CENE
  Cene su na dva mesta: cenovnik.html i spisak "Šta radimo" u index.html.

ENGLESKI PREVOD
  Prevodi su u js/language-switch.js (objekat "tr": srpski tekst -> engleski). Kad menjate tekst na sajtu,
  promenite i ključ u tom objektu, inače se taj tekst neće prevesti. Naslov i opis strane imaju data-en atribut.

FONTOVI
  Barlow Condensed i Public Sans se učitavaju sa Google Fonts (kao i ranije Poppins/Rajdhani).
