AUTO DIJAGNOSTIKA LAZAREVIĆ – MOTORSPORT REDIZAJN (novembar 2026)

Sajt je običan HTML/CSS/JS, bez build koraka. Otpremite ceo folder na hosting kao i ranije.

STRUKTURA
  index.html, usluge.html, cenovnik.html, konfigurator.html, galerija.html, o-nama.html, kontakt.html
  css/style.css          osnovni raspored i komponente
  css/motorsport.css     novi vizuelni sistem i responsive pravila
  css/chatbot.css        stilovi chatbota
  js/motorsport.js       animacije, indikatori skrolovanja, aktivna navigacija i brojači
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

INSTALACIJA / PROVERA
  1. Napravite rezervnu kopiju trenutnog repozitorijuma.
  2. Raspakujte ZIP i kopirajte njegov sadržaj u glavni direktorijum GitHub Pages repozitorijuma.
  3. Objavite izmenjene fajlove kao i ranije. CNAME i SEO meta podaci ostaju sačuvani.
  4. Za lokalni pregled preporuka: python -m http.server 8000, zatim otvorite http://localhost:8000.
  5. Kontakt forma koristi postojeći EmailJS, konfigurator postojeći STGFiles embed; proverite ih na hostingu.

NAPOMENA
  Broj radova na pocetnoj strani predstavlja broj fotografija u galeriji u trenutku izrade (54).
  Ako dodate radove, azurirajte prvu vrednost data-count i tekst u .spec-strip na index.html.
  Nisu menjani originalni logo, fotografije, cene, telefonski brojevi ni nalog kontakt forme.
  Lokalni linkovi i JS/CSS sintaksa su provereni; testiranje u stvarnom pregledaču i spoljnih servisa ostaje za hosting.
