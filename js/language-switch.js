(() => {
  const translations = {
    'Početna':'Home','Usluge':'Services','Cenovnik':'Pricing','Konfigurator':'Vehicle Configurator','Galerija':'Gallery','O nama':'About Us','Kontakt':'Contact', 'npr.':'etc', '© 2026 Auto Dijagnostika Lazarević. Sva prava zadržana.':'© 2026 Auto Dijagnostika Lazarević. All rights reserved.',
    'Cenovnik Usluga':'Service Pricing','Transparentne cene profesionalnih dijagnostičkih i softverskih usluga':'Transparent pricing for professional diagnostics and software services', 'Otvoreno – Pozovite odmah': 'Open - Call us now','Closed' : 'Send us inquiry',
    'Osnovna Dijagnostika':'Basic Diagnostics','Očitavanje i brisanje grešaka, analiza parametara i savetovanje.':'Fault-code reading and clearing, parameter analysis and advice.',
    'DPF / EGR / AdBlue OFF':'DPF / EGR / AdBlue OFF','Softversko gašenje sistema bez grešaka i upozorenja.':'Software deactivation of systems without fault codes or warnings.',
    'Stage 1':'Stage 1','Softversko povećanje snage bez zamene postojećih delova na vozilu.':'Software-based power increase without replacing existing vehicle parts.',
    'Zamena i Kodiranje Senzora':'Sensor Replacement & Coding','Lambda, MAF, NOx, ABS i ostali.':'Lambda, MAF, NOx, ABS and other sensors.','Kodiranje ECU Modula':'ECU Module Coding','Kodiranje, adaptacija i aktivacija funkcija.':'Coding, adaptation and feature activation.',
    'Mobilna Dijagnostika':'Mobile Diagnostics','Dolazak na vašu adresu – grad i okolina.':'We come to your address — city and surrounding area.','po dogovoru':'By arrangement',
    'Potrebna Vam Je Tačna Cena?':'Need an Exact Quote?','Kontaktirajte nas i dobićete ponudu za vaše vozilo':'Contact us for a quote for your vehicle','Kontaktirajte Nas':'Contact Us',
    'Naša Galerija':'Our Gallery','Pogledajte deo našeg rada i vozila koja smo servisirali':'Take a look at our work and the vehicles we have serviced','Sve':'All','ECU tuning i modifikacije':'ECU tuning & modifications','Dijagnostika i ažuriranje softvera':'Diagnostics & software updates',
    'Naše Usluge':'Our Services','Specijalizovani smo za sve aspekte auto dijagnostike i programiranja elektronskih sistema vozila':'We specialise in vehicle diagnostics and electronic system programming',
    'Gašenje DPF / EGR / AdBlue Sistema':'DPF / EGR / AdBlue System Deactivation','Profesionalna Dijagnostika':'Professional Diagnostics','Dolazak Na Adresu':'On-site Service','Rad Sa Svim Markama':'All Makes Supported',
    'Zašto Izabrati Nas':'Why Choose Us','Profesionalnost i iskustvo na koje možete računati':'Professionalism and experience you can rely on','Profesionalna Oprema':'Professional Equipment','Brza Intervencija':'Fast Response','Garancija Na Uslugu':'Service Warranty','Transparentna Komunikacija':'Transparent Communication','Povoljne Cene':'Fair Prices',
    'Kontaktirajte nas':'Contact us','Kontaktirajte Nas':'Contact Us','Kontaktirajte nas i zakažite termin':'Contact us to book an appointment','Kontaktirajte nas i uverite se u naš profesionalan pristup':'Get in touch and experience our professional approach',
    'Kontaktirajte nas i zakažite dolazak na vašu lokaciju.':'Contact us to arrange a visit to your location.','Pozovite nas i zakažite dolazak na vašu lokaciju.':'Call us to arrange a visit to your location.',
    'Kontaktirajte nas i zakažite termin':'Contact us to book an appointment','Potrebna Vam je neka od naših usluga?':'Need one of our services?','Spremni Da Rešimo Vaš Problem':'Ready to Solve Your Problem?','Spremni smo da pomognemo':'WE ARE READY TO HELP','Imate problem sa vozilom?':'Having trouble with your vehicle?','Precizna dijagnostika je prvi korak do pravog rešenja.':'Accurate diagnostics are the first step towards the right solution.',
    'Precizna dijagnostika.':'Accurate diagnostics.','Pametno rešenje.':'Smart solutions.','Precizna dijagnostika, gašenje DPF/EGR/AdBlue sistema, zamena i kodiranje komponenti. Dolazimo na vašu adresu.':'Accurate diagnostics, DPF/EGR/AdBlue system services, component replacement and coding. We come to you.',
    'Zakažite termin':'Book an Appointment','Pogledajte usluge':'Explore Services','JEDNOSTAVAN PROCES':'A SIMPLE PROCESS','Od problema do rešenja':'From Problem to Solution','Bez nepotrebnog komplikovanja — prvo utvrdimo problem, zatim dogovaramo konkretno rešenje.':'No unnecessary complications — first we identify the problem, then agree on a solution.',
    'Poziv':'Call','Opišete problem i dogovaramo termin.':'Tell us about the problem and we will arrange an appointment.','Dijagnostika':'Diagnostics','Proveravamo greške, parametre i rad sistema.':'We check fault codes, parameters and system operation.','Analiza':'Analysis','Objašnjavamo nalaz i predlažemo sledeći korak.':'We explain our findings and recommend the next step.','Rešenje':'Solution','Izvodimo dogovorenu intervenciju i proveru.':'We carry out the agreed work and verification.',
    'Pružamo kompletna rešenja za dijagnostiku i intervencije na svim markama vozila':'Complete diagnostic and repair solutions for vehicles of all makes',
    'Stručno gašenje sistema koji uzrokuju probleme. Legalno kodiranje elektronike vozila uz potpuno funkcionalno rešenje bez grešaka.':'Professional software services for problematic systems, with vehicle electronics coding and a functional solution.',
    'Profesionalna zamena svih vrsta senzora sa preciznim kodiranjem. Lambda sonde, MAF, senzori diferencijalnog pritiska i svi ostali senzori.':'Professional replacement and precise coding of all sensor types, including lambda, MAF and differential-pressure sensors.',
    'Napredna računarska dijagnostika koja otkriva sve greške u vozilu. Rad sa originalnim dijagnostičkim alatima za sve marke.':'Advanced computer diagnostics to identify vehicle faults, using professional diagnostic tools for all makes.',
    'Nudimo mobilnu dijagnostiku - dolazimo na vašu lokaciju sa kompletnom opremom. Bez potrebe za šlepovanjem vozila.':'We offer mobile diagnostics and come to your location with complete equipment, so towing may not be necessary.',
    'Programiranje i kodiranje elektronskih kontrolnih jedinica. Prilagođavanje softvera specifičnim potrebama vozila.':'Programming and coding electronic control units, with software tailored to your vehicle.',
    'Specijalizovani smo za sve proizvođače: VAG grupu, BMW, Mercedes, Renault, Peugeot, Citroën, Fiat i sve ostale.':'We work with all major manufacturers, including the VAG Group, BMW, Mercedes, Renault, Peugeot, Citroën and Fiat.',
    'Koristimo najsavremenije dijagnostičke uređaje i originalne softvere proizvođača vozila.':'We use modern diagnostic equipment and manufacturer software.','Efikasno rešavanje problema bez nepotrebnog odlaganja. Dolazimo na vašu adresu po dogovoru.':'Efficient problem-solving without unnecessary delays. Visits are available by arrangement.',
    'Pružamo garanciju na sve izvršene usluge i kvalitet rada koji izvodimo.':'We stand behind the quality of our work and provide a warranty on our services.','Jasno objašnjavamo probleme i rešenja. Nijedna intervencija bez vaše saglasnosti.':'We explain problems and solutions clearly. No work is carried out without your approval.','Profesionalna usluga po pristupačnim cenama. Kvalitet ne mora biti skup.':'Professional service at fair prices. Quality does not have to be expensive.',
    'Kontaktirajte nas':'Contact us','TU SMO ZA VAS':'WE ARE HERE FOR YOU','Imate problem, grešku na tabli ili želite da proverimo vozilo? Javite nam se i dogovorićemo termin koji vam odgovara.':'Have a problem, a dashboard warning, or want your vehicle checked? Contact us to arrange a convenient appointment.',
    'Pozovite nas':'Call Us','Direktan kontakt':'Direct contact','Pošaljite upit':'Send an Enquiry','Odgovaramo u najkraćem roku':'We reply as soon as possible','Pronađite nas':'Find Us','Otvori mapu':'Open map','Radno vreme':'Opening Hours','Pon–Pet 15:00–20:00':'Mon–Fri 15:00–20:00','Subota 09:00–12:00':'Saturday 09:00–12:00',
    'Auto Dijagnostika Lazarević':'Auto Dijagnostika Lazarević','Profesionalna auto dijagnostika i kodiranje za sve marke vozila. Vaš partner za elektroniku automobila.':'Professional vehicle diagnostics and coding for all makes. Your automotive electronics partner.','Profesionalna dijagnostika i kodiranje za sve marke vozila.':'Professional diagnostics and coding for all vehicle makes.','Brzi Linkovi':'Quick Links','Telefon':'Phone','Email':'Email','Ponedeljak-Petak: 15:00-20:00':'Monday–Friday: 15:00–20:00','Subota: 09:00-12:00':'Saturday: 09:00–12:00','Sva prava zadržana.':'All rights reserved.',
    'O Nama':'About Us','O nama':'About Us','Vaš pouzdan partner za auto dijagnostiku i elektroniku vozila':'Your trusted partner for vehicle diagnostics and automotive electronics','Ko Smo Mi':'Who We Are','Naš Pristup':'Our Approach','Naša Oprema':'Our Equipment','Originalni Dijagnostički Alati':'Original Diagnostic Tools','ECU Programeri':'ECU Programmers','Pristup Bazi Podataka':'Database Access','Mobilna Dijagnostička Stanica':'Mobile Diagnostic Unit','Zašto Baš Mi':'Why Choose Us','Kontinuirana Edukacija':'Continuous Training','Poverenje i Poštenje':'Trust and Integrity','Podrška Nakon Usluge':'After-Service Support','Fleksibilnost':'Flexibility','Želite Da Saznate Više?':'Want to Learn More?',
    'Konfigurator vozila':'Vehicle Configurator','Proverite dostupne opcije za vaše vozilo':'Check the available options for your vehicle',
    'Kontaktirajte Nas':'Contact Us','Stojimo vam na raspolaganju za sva pitanja i zakazivanje termina':'We are available for questions and appointment bookings','Pošaljite Poruku':'Send a Message','Ime i Prezime *':'Full Name *','Telefon *':'Phone *','Marka i Model Vozila *':'Vehicle Make and Model *','Opišite Problem *':'Describe the Problem *','Pošalji Poruku':'Send Message','Pozovite nas ili pošaljite SMS/WhatsApp/Viber':'Call us or send an SMS/WhatsApp/Viber','Odgovaramo u roku od 24 sata':'We respond within 24 hours','Ponedeljak - Petak: 15:00 - 20:00':'Monday–Friday: 15:00–20:00','Nedelja: Po dogovoru':'Sunday: By arrangement','Zakazivanje termina obavezno':'Appointments are required','Dolazimo na vašu adresu':'We come to your address','Pokrivamo ceo grad i okolinu. Bez dodatnih troškova dolaska u gradskoj zoni.':'We cover the city and surrounding area. No extra travel charge within the city.',
    'Često Postavljana Pitanja':'Frequently Asked Questions','Da li radite sa svim markama vozila?':'Do you work with all vehicle makes?','Koliko traje dijagnostika?':'How long does diagnostics take?','Da li dolazite na adresu?':'Do you offer on-site service?','Da li mogu da bude prisutan tokom dijagnostike?':'Can I be present during diagnostics?','Kakva je garancija na vaš rad?':'What warranty do you provide?','Kako mogu da zakažem termin?':'How can I book an appointment?',
    'Šta nudimo:':'What we offer:','Potpuno softversko uklanjanje DPF/EGR/AdBlue sistema':'Software services for DPF/EGR/AdBlue systems','Kodiranje kontrolne jedinice (ECU) bez prijave grešaka':'ECU coding without fault-code alerts','Precizno testiranje nakon intervencije':'Precise testing after the service','Funkcionalno rešenje koje ne ostavlja upozorenja na instrument tabli':'A functional solution without dashboard warnings','Izmena softvera uz očuvanje performansi motora':'Software adjustments while preserving engine performance','Vršimo zamenu i kodiranje:':'Replacement and coding services:','Lambda sonde':'Lambda sensors','MAF senzora':'MAF sensors','Senzora pritiska i temperature':'Pressure and temperature sensors','NOx senzora':'NOx sensors','Senzora nivoa goriva':'Fuel-level sensors','ABS i ESP senzora':'ABS and ESP sensors','Senzora položaja radilice i bregaste osovine':'Crankshaft and camshaft position sensors','Svih ostalih elektronskih senzora u vozilu':'All other electronic vehicle sensors','Profesionalna Auto Dijagnostika':'Professional Vehicle Diagnostics','Šta uključuje dijagnostika:':'What diagnostics include:','Očitavanje grešaka iz svih kontrolnih jedinica (motor, menjač, ABS, klima, itd.)':'Reading faults from all control units (engine, transmission, ABS, climate control, etc.)','Live data monitoring - praćenje rada senzora u realnom vremenu':'Live data monitoring — tracking sensor operation in real time','Testiranje komponenti (aktuatori, senzori, ventili)':'Component testing (actuators, sensors, valves)','Provera istorije grešaka':'Fault history check','Detaljno objašnjenje problema i predlog rešenja':'Detailed explanation of the issue and recommended solution','Servisni reset (servisni intervali, ulje, kočnice)':'Service reset (service intervals, oil, brakes)','Mobilna Dijagnostika - Dolazak Na Adresu':'Mobile Diagnostics — We Come to You','Prednosti mobilne dijagnostike:':'Benefits of mobile diagnostics:','Bez potrebe za šlepovanjem vozila':'No need to tow the vehicle','Ista kvalitetna oprema kao u radionici':'Same high-quality equipment as in a workshop','Dijagnostika i intervencija na licu mesta':'On-site diagnostics and service','Ušteda vremena i novca':'Save time and money','Rad u celom gradu i okolini':'Service throughout the city and surrounding area','Zakazivanje prema vašem rasporedu':'Appointments to suit your schedule','Kodiranje ECU Modula i Elektronike':'ECU Module and Electronics Coding','Naše usluge kodiranja:':'Our coding services:','Kodiranje novih ECU modula nakon zamene':'Coding new ECU modules after replacement','VIN prilagođavanje kontrolnih jedinica':'VIN adaptation for control units','Aktivacija i deaktivacija funkcija u vozilu':'Activation and deactivation of vehicle features','Prilagođavanje softvera specifičnim potrebama':'Software tailored to specific requirements','Programiranje menjača, ABS, klima kontrolnih jedinica':'Programming transmission, ABS and climate-control units','Podržane marke:':'Supported makes:','VAG Grupa:':'VAG Group:','Nemački Proizvođači:':'German Manufacturers:','Francuski Proizvođači:':'French Manufacturers:','Italijanski Proizvođači:':'Italian Manufacturers:','Japanski i Korejski:':'Japanese and Korean:','Američki Proizvođači:':'American Manufacturers:','Originalni Dijagnostički Alati':'Original Diagnostic Tools','Koristimo profesionalne dijagnostičke alate':'We use professional diagnostic tools','Napredni uređaji za čitanje, programiranje i kloniranje ECU modula sa podrškom za sve proizvođače čipova.':'Advanced devices for reading, programming and cloning ECU modules, supporting all major chip manufacturers.','Direktan pristup tehničkim bazama podataka proizvođača.':'Direct access to manufacturers’ technical databases.','Kompletna dijagnostička oprema prilagođena za rad na terenu. Dolazimo do vas sa profesionalnom opremom.':'Complete diagnostic equipment for mobile work. We come to you with professional tools.','Mogućnost otključavanja računara serija MD1 i MG1, kao i rad sa svim dostupnim protokolima uključujući i SID212Evo.':'Support for unlocking MD1 and MG1 control units and working with available protocols, including SID212Evo.','Kontinuirana Edukacija':'Continuous Training','Poverenje i Poštenje':'Trust and Integrity','Podrška Nakon Usluge':'After-Service Support','Fleksibilnost':'Flexibility','Powered by':'Powered by','Šta nudimo:':'What we offer:','Potpuno softversko uklanjanje DPF/EGR/AdBlue sistema':'Software services for DPF/EGR/AdBlue systems','Kodiranje kontrolne jedinice (ECU) bez prijave grešaka':'ECU coding without fault-code alerts','Precizno testiranje nakon intervencije':'Precise testing after the service','Funkcionalno rešenje koje ne ostavlja upozorenja na instrument tabli':'A functional solution without dashboard warnings','Izmena softvera uz očuvanje performansi motora':'Software adjustments while preserving engine performance','Vršimo zamenu i kodiranje:':'Replacement and coding services:','Lambda sonde':'Lambda sensors','MAF senzora':'MAF sensors','Senzora pritiska i temperature':'Pressure and temperature sensors','NOx senzora':'NOx sensors','Senzora nivoa goriva':'Fuel-level sensors','ABS i ESP senzora':'ABS and ESP sensors','Senzora položaja radilice i bregaste osovine':'Crankshaft and camshaft position sensors','Svih ostalih elektronskih senzora u vozilu':'All other electronic vehicle sensors','Profesionalna Auto Dijagnostika':'Professional Vehicle Diagnostics','Šta uključuje dijagnostika:':'What diagnostics include:','Očitavanje grešaka iz svih kontrolnih jedinica (motor, menjač, ABS, klima, itd.)':'Reading faults from all control units (engine, transmission, ABS, climate control, etc.)','Live data monitoring - praćenje rada senzora u realnom vremenu':'Live data monitoring — tracking sensor operation in real time','Testiranje komponenti (aktuatori, senzori, ventili)':'Component testing (actuators, sensors, valves)','Provera istorije grešaka':'Fault history check','Detaljno objašnjenje problema i predlog rešenja':'Detailed explanation of the issue and recommended solution','Servisni reset (servisni intervali, ulje, kočnice)':'Service reset (service intervals, oil, brakes)','Mobilna Dijagnostika - Dolazak Na Adresu':'Mobile Diagnostics — We Come to You','Prednosti mobilne dijagnostike:':'Benefits of mobile diagnostics:','Bez potrebe za šlepovanjem vozila':'No need to tow the vehicle','Ista kvalitetna oprema kao u radionici':'Same high-quality equipment as in a workshop','Dijagnostika i intervencija na licu mesta':'On-site diagnostics and service','Ušteda vremena i novca':'Save time and money','Rad u celom gradu i okolini':'Service throughout the city and surrounding area','Zakazivanje prema vašem rasporedu':'Appointments to suit your schedule','Kodiranje ECU Modula i Elektronike':'ECU Module and Electronics Coding','Naše usluge kodiranja:':'Our coding services:','Kodiranje novih ECU modula nakon zamene':'Coding new ECU modules after replacement','VIN prilagođavanje kontrolnih jedinica':'VIN adaptation for control units','Aktivacija i deaktivacija funkcija u vozilu':'Activation and deactivation of vehicle features','Prilagođavanje softvera specifičnim potrebama':'Software tailored to specific requirements','Programiranje menjača, ABS, klima kontrolnih jedinica':'Programming transmission, ABS and climate-control units','Podržane marke:':'Supported makes:','VAG Grupa:':'VAG Group:','Nemački Proizvođači:':'German Manufacturers:','Francuski Proizvođači:':'French Manufacturers:','Italijanski Proizvođači:':'Italian Manufacturers:','Japanski i Korejski:':'Japanese and Korean:','Američki Proizvođači:':'American Manufacturers:','Originalni Dijagnostički Alati':'Original Diagnostic Tools','Koristimo profesionalne dijagnostičke alate':'We use professional diagnostic tools','Napredni uređaji za čitanje, programiranje i kloniranje ECU modula sa podrškom za sve proizvođače čipova.':'Advanced devices for reading, programming and cloning ECU modules, supporting all major chip manufacturers.','Direktan pristup tehničkim bazama podataka proizvođača.':'Direct access to manufacturers’ technical databases.','Kompletna dijagnostička oprema prilagođena za rad na terenu. Dolazimo do vas sa profesionalnom opremom.':'Complete diagnostic equipment for mobile work. We come to you with professional tools.','Mogućnost otključavanja računara serija MD1 i MG1, kao i rad sa svim dostupnim protokolima uključujući i SID212Evo.':'Support for unlocking MD1 and MG1 control units and working with available protocols, including SID212Evo.','Kontinuirana Edukacija':'Continuous Training','Poverenje i Poštenje':'Trust and Integrity','Podrška Nakon Usluge':'After-Service Support','Fleksibilnost':'Flexibility','Powered by':'Powered by','Šta nudimo:':'What we offer:','Potpuno softversko uklanjanje DPF/EGR/AdBlue sistema':'Software services for DPF/EGR/AdBlue systems','Kodiranje kontrolne jedinice (ECU) bez prijave grešaka':'ECU coding without fault-code alerts','Precizno testiranje nakon intervencije':'Precise testing after the service','Funkcionalno rešenje koje ne ostavlja upozorenja na instrument tabli':'A functional solution without dashboard warnings','Izmena softvera uz očuvanje performansi motora':'Software adjustments while preserving engine performance','Vršimo zamenu i kodiranje:':'Replacement and coding services:','Lambda sonde':'Lambda sensors','MAF senzora':'MAF sensors','Senzora pritiska i temperature':'Pressure and temperature sensors','NOx senzora':'NOx sensors','Senzora nivoa goriva':'Fuel-level sensors','ABS i ESP senzora':'ABS and ESP sensors','Senzora položaja radilice i bregaste osovine':'Crankshaft and camshaft position sensors','Svih ostalih elektronskih senzora u vozilu':'All other electronic vehicle sensors','Profesionalna Auto Dijagnostika':'Professional Vehicle Diagnostics','Šta uključuje dijagnostika:':'What diagnostics include:','Očitavanje grešaka iz svih kontrolnih jedinica (motor, menjač, ABS, klima, itd.)':'Reading faults from all control units (engine, transmission, ABS, climate control, etc.)','Live data monitoring - praćenje rada senzora u realnom vremenu':'Live data monitoring — tracking sensor operation in real time','Testiranje komponenti (aktuatori, senzori, ventili)':'Component testing (actuators, sensors, valves)','Provera istorije grešaka':'Fault history check','Detaljno objašnjenje problema i predlog rešenja':'Detailed explanation of the issue and recommended solution','Servisni reset (servisni intervali, ulje, kočnice)':'Service reset (service intervals, oil, brakes)','Mobilna Dijagnostika - Dolazak Na Adresu':'Mobile Diagnostics — We Come to You','Prednosti mobilne dijagnostike:':'Benefits of mobile diagnostics:','Bez potrebe za šlepovanjem vozila':'No need to tow the vehicle','Ista kvalitetna oprema kao u radionici':'Same high-quality equipment as in a workshop','Dijagnostika i intervencija na licu mesta':'On-site diagnostics and service','Ušteda vremena i novca':'Save time and money','Rad u celom gradu i okolini':'Service throughout the city and surrounding area','Zakazivanje prema vašem rasporedu':'Appointments to suit your schedule','Kodiranje ECU Modula i Elektronike':'ECU Module and Electronics Coding','Naše usluge kodiranja:':'Our coding services:','Kodiranje novih ECU modula nakon zamene':'Coding new ECU modules after replacement','VIN prilagođavanje kontrolnih jedinica':'VIN adaptation for control units','Aktivacija i deaktivacija funkcija u vozilu':'Activation and deactivation of vehicle features','Prilagođavanje softvera specifičnim potrebama':'Software tailored to specific requirements','Programiranje menjača, ABS, klima kontrolnih jedinica':'Programming transmission, ABS and climate-control units','Podržane marke:':'Supported makes:','VAG Grupa:':'VAG Group:','Nemački Proizvođači:':'German Manufacturers:','Francuski Proizvođači:':'French Manufacturers:','Italijanski Proizvođači:':'Italian Manufacturers:','Japanski i Korejski:':'Japanese and Korean:','Američki Proizvođači:':'American Manufacturers:','Originalni Dijagnostički Alati':'Original Diagnostic Tools','Koristimo profesionalne dijagnostičke alate':'We use professional diagnostic tools','Napredni uređaji za čitanje, programiranje i kloniranje ECU modula sa podrškom za sve proizvođače čipova.':'Advanced devices for reading, programming and cloning ECU modules, supporting all major chip manufacturers.','Direktan pristup tehničkim bazama podataka proizvođača.':'Direct access to manufacturers’ technical databases.','Kompletna dijagnostička oprema prilagođena za rad na terenu. Dolazimo do vas sa profesionalnom opremom.':'Complete diagnostic equipment for mobile work. We come to you with professional tools.','Mogućnost otključavanja računara serija MD1 i MG1, kao i rad sa svim dostupnim protokolima uključujući i SID212Evo.':'Support for unlocking MD1 and MG1 control units and working with available protocols, including SID212Evo.','Kontinuirana Edukacija':'Continuous Training','Poverenje i Poštenje':'Trust and Integrity','Podrška Nakon Usluge':'After-Service Support','Fleksibilnost':'Flexibility','Powered by':'Powered by','Sva prava zadržana.':'All rights reserved.','Sva prava zadržana':'All rights reserved','Van radnog vremena':'Outside business hours','Dostupni smo':'Available now','Poslednji radovi':'Latest Work','Poslednjih 10 intervencija':'Latest 10 jobs','AUTO ELEKTRONIKA · DIJAGNOSTIKA · KODIRANJE':'AUTOMOTIVE ELECTRONICS · DIAGNOSTICS · CODING',
    "NASLOV – stil kao Usluge": "PAGE HEADING",
    "od 2.000 RSD": "from RSD 2,000",
    "od 6.000 RSD": "from RSD 6,000",
    "od 10.000 RSD": "from RSD 10,000",
    "od 4.000 RSD": "from RSD 4,000",
    "od 5.000 RSD": "from RSD 5,000",
    "064 933 7958": "064 933 7958",
    "Lazarevac · Otvori mapu": "Lazarevac · Open map",
    "SPREMNI SMO DA POMOGNEMO": "WE ARE READY TO HELP",
    "Pogledajte sve usluge": "View all services",
    "DPF (filter čestica), EGR (recirkulacija izduvnih gasova) i AdBlue sistemi često uzrokuju ozbiljne probleme na modernim dizel vozilima. Kada ovi sistemi postanu nefunkcionalni, vozilo prelazi u bezbednosni režim ili potpuno gubi snagu.": "DPF (diesel particulate filter), EGR (exhaust gas recirculation) and AdBlue systems can cause serious issues in modern diesel vehicles. When these systems malfunction, the vehicle may enter limp mode or lose power.",
    "Rad sa svim markama: VAG grupa, BMW, Mercedes, Renault, Peugeot, Citroën, Fiat, Opel": "All makes supported: VAG Group, BMW, Mercedes, Renault, Peugeot, Citroën, Fiat and Opel",
    "Moderni automobili imaju desetine senzora koji moraju biti pravilno kodirani u vozilu nakon zamene. Nepravilno kodiranje uzrokuje greške, loše performanse ili potpunu nefunkcionalnost novog dela.": "Modern vehicles have dozens of sensors that must be coded correctly after replacement. Incorrect coding can cause faults, poor performance or prevent the new part from working properly.",
    "Koristimo originalne dijagnostičke alate proizvođača što garantuje potpunu kompatibilnost i ispravnost nakon zamene.": "We use manufacturer-grade diagnostic tools to ensure compatibility and correct operation after replacement.",
    "Kompletna računarska dijagnostika koja otkriva sve greške i probleme u vozilu. Koristimo napredne dijagnostičke alate koji omogućavaju pristup svim kontrolnim jedinicama.": "Comprehensive computer diagnostics to identify vehicle faults and issues. Our advanced tools provide access to all control units.",
    "Nakon dijagnostike dobijate detaljan izveštaj sa svim greškama i preporukama za dalju intervenciju.": "After diagnostics, you receive a detailed report listing faults and recommendations for further work.",
    "Vaše vozilo ne može da se pomeri? Bez problema. Dolazimo do vas sa kompletnom dijagnostičkom opremom.": "Can your vehicle not be moved? No problem. We come to you with complete diagnostic equipment.",
    "Programiranje elektronskih kontrolnih jedinica nakon zamene, prilagođavanje softvera ili aktivacija sakrivenih funkcija u vozilu.": "Programming electronic control units after replacement, software adaptation and activation of vehicle features.",
    "Rad Sa Svim Markama Vozila": "All Vehicle Makes",
    "Specijalizovani smo za sve proizvođače automobila. Koristimo originalne dijagnostičke alate za svaku marku.": "We work with all vehicle manufacturers and use suitable professional diagnostic tools for each make.",
    "Volkswagen, Audi, Škoda, Seat": "Volkswagen, Audi, Škoda, SEAT",
    "BMW, Mercedes-Benz, Opel": "BMW, Mercedes-Benz, Opel",
    "Renault, Peugeot, Citroën": "Renault, Peugeot, Citroën",
    "Fiat, Alfa Romeo, Lancia": "Fiat, Alfa Romeo, Lancia",
    "Toyota, Mazda, Honda, Hyundai, Kia": "Toyota, Mazda, Honda, Hyundai, Kia",
    "Ford, Chevrolet, Chrysler, Jeep": "Ford, Chevrolet, Chrysler, Jeep",
    "I sve ostale marke prisutne na našem tržištu": "And all other makes available in our market",
    "Email *": "Email *",
    "Radno Vreme": "Opening Hours",
    "Subota: 09:00 - 12:00": "Saturday: 09:00–12:00",
    "Da, radimo sa apsolutno svim markama i modelima vozila. Imamo dijagnostičku opremu i softvere za VAG grupu (VW, Audi, Škoda, Seat), BMW, Mercedes, Renault, Peugeot, Citroën, Fiat, Opel, Ford, kao i sve ostale proizvođače prisutne na našem tržištu.": "Yes, we work with virtually all vehicle makes and models. Our diagnostic equipment and software support the VAG Group (VW, Audi, Škoda, SEAT), BMW, Mercedes, Renault, Peugeot, Citroën, Fiat, Opel, Ford and other manufacturers available in our market.",
    "Osnovna dijagnostika traje između 10 i 20 minuta. Kompletna dijagnostika obično traje između 30 minuta i 1 sat, zavisno od složenosti problema i broja kontrolnih jedinica koje treba proveriti. Za komplikovanije slučajeve može biti potrebno više vremena.": "Basic diagnostics usually takes 10–20 minutes. A full diagnostic check typically takes 30 minutes to an hour, depending on the issue and the number of control units. Complex cases may take longer.",
    "Da, dolazimo na vašu adresu sa kompletnom dijagnostičkom opremom. Ova usluga je idealna ako vozilo ne može da se pomeri ili želite da izbegnete šlepanje. Pokrivamo grad i okolinu.": "Yes, we come to your address with complete diagnostic equipment. This is ideal if the vehicle cannot be moved or you want to avoid towing. We cover the city and surrounding area.",
    "Apsolutno. Čak to i preporučujemo. Na taj način možete direktno videti šta dijagnostika pokazuje i dobiti objašnjenje na licu mesta. Transparentnost je deo našeg pristupa.": "Absolutely. We even encourage it. You can see the diagnostic results directly and receive an explanation on site. Transparency is part of our approach.",
    "Pružamo garanciju na sve izvršene usluge. Ako se pojavi bilo kakav problem nakon naše intervencije, bićemo tu da ga rešimo bez dodatnih troškova. Precizni uslovi garancije zavise od vrste usluge.": "We provide a warranty on our services. If an issue related to our work arises, we will help resolve it. Exact warranty terms depend on the service performed.",
    "Najbrže je da nas pozovete na telefon. Možete i da popunite kontakt formu na ovoj stranici ili nam pošaljete poruku preko WhatsApp-a. Obično možemo zakazati termin u roku od 1-2 dana.": "The quickest way is to call us. You can also fill in the contact form or message us on WhatsApp. Appointments can usually be arranged within 1–2 days.",
    "Pozovite nas danas i dobijte brzo i profesionalno rešenje za vaše vozilo": "Call us today for a fast, professional solution for your vehicle",
    "Auto Dijagnostika Lazarević je specijalizovana servisna radnja fokusirana isključivo na elektronsku dijagnostiku i programiranje vozila. Naš tim čine stručnjaci sa višegodišnjim iskustvom u radu sa najsavremenijom dijagnostičkom opremom.": "Auto Dijagnostika Lazarević specialises in electronic vehicle diagnostics and programming. Our team has years of experience working with modern diagnostic equipment.",
    "Razumemo da je moderna elektronika vozila kompleksna, te da svaki problem zahteva precizno dijagnostikovanje i stručnu intervenciju. Zato kontinuirano ulažemo u opremu, edukaciju i praćenje najnovijih tehnologija u automobilskoj industriji.": "Modern vehicle electronics are complex, and every issue requires accurate diagnosis and professional work. We continually invest in equipment, training and the latest automotive technologies.",
    "Ne verujemo u \"pokušavanja\" i \"možda će proći\". Svaki problem prvo precizno dijagnostikujemo, zatim jasno objašnjavamo šta je uzrok i koje je rešenje. Tek nakon vaše saglasnosti pristupamo intervenciji.": "We do not rely on guesswork. We diagnose each issue first, explain the cause and recommend a solution. We only proceed with work after your approval.",
    "Radimo transparentno - bez skrivenih troškova, bez nepotrebnih intervencija. Ako problem može da se reši jeftinije, mi ćemo vam to reći.": "We work transparently, with no hidden costs or unnecessary work. If there is a more affordable solution, we will tell you.",
    "Koristimo isključivo profesionalnu dijagnostičku opremu": "We use professional diagnostic equipment only",
    "Magic Motorsport Flex": "Magic Motorsport Flex",
    "Automobilska industrija se brzo razvija. Novi modeli dolaze sa novom elektronikom, novim protokolima i novim sistemima. Zato kontinuirano pratimo tehničke novitete i redovno ažuriramo našu opremu.": "The automotive industry evolves quickly. New models bring new electronics, protocols and systems, so we keep up with technical developments and regularly update our equipment.",
    "Naš posao je izgrađen na poverenju. Mnogi naši klijenti dolaze po preporuci jer znaju da će dobiti pošten odgovor i kvalitetnu uslugu. Ne nudimo rešenja koja ne funkcionišu, ne naplaćujemo usluge koje nisu potrebne.": "Our business is built on trust. Many clients come through recommendations because they know they will receive honest advice and quality service. We do not offer ineffective solutions or charge for unnecessary work.",
    "Naš odnos sa klijentima ne prestaje nakon izvršene usluge. Dostupni smo za sva pitanja, nedoumice ili dodatnu podršku. Ako se pojavi bilo kakav problem, tu smo da ga rešimo.": "Our relationship with clients does not end when the service is complete. We remain available for questions and further support, and we are here to help if an issue arises.",
    "Razumemo da vaše vreme nije uvek usklađeno sa standardnim radnim vremenom. Zato nudimo zakazivanje po dogovoru i dolazak na vašu adresu kada vama odgovara.": "We understand that your schedule may not fit standard business hours. We offer appointments by arrangement and can come to your address at a convenient time.",
    "NASLOV – stil kao Usluge": "SERVICE PRICING",
    "Škoda Octavia vRS | Ažuriranje softvera i mapa RNS 510": "Škoda Octavia vRS | RNS 510 software and map update",
    "Opel Astra H | Dijagnostika i provera parametara": "Opel Astra H | Diagnostics and parameter check",
    "Mercedes W203 | Vraćanje EEPROM memorije na fabričke vrednosti radi adaptacije na novo vozilo": "Mercedes W203 | Restoring EEPROM to factory values for adaptation to another vehicle",
    "Citroen C5 x7 | Reparacija komandi klime": "Citroën C5 X7 | Climate control panel repair",
    "Mercedes Viano | Provera vozila pre kupovine": "Mercedes Viano | Pre-purchase vehicle inspection",
    "Porsche Cayenne 4.8 V8 Turbo | Dijagnostika": "Porsche Cayenne 4.8 V8 Turbo | Diagnostics",
    "Citroen C4 Cactus 1.6 BlueHDI | DPF OFF": "Citroën C4 Cactus 1.6 BlueHDi | DPF OFF",
    "BMW 118d | EGR OFF": "BMW 118d | EGR OFF",
    "Opel Corsa D 1.3 CDTi EcoFlex | DPF OFF": "Opel Corsa D 1.3 CDTi EcoFlex | DPF OFF",
    "VW Passat B6 1.9 TDI | DPF OFF": "VW Passat B6 1.9 TDI | DPF OFF",
    "VW Golf VI 1.6 TDI | DPF OFF": "VW Golf VI 1.6 TDI | DPF OFF",
    "Kia Ceed 1.4 CRDi | DPF OFF": "Kia Ceed 1.4 CRDi | DPF OFF",
    "Ford Fiesta MK6 1.4 TDCi | EGR OFF": "Ford Fiesta MK6 1.4 TDCi | EGR OFF",
    "Opel Astra H 1.7 CDTi | Stage 1": "Opel Astra H 1.7 CDTi | Stage 1",
    "BMW 118d | EGR/DPF OFF": "BMW 118d | EGR/DPF OFF",
    "Ford Focus 1.6 TDCi | EGR/DPF OFF": "Ford Focus 1.6 TDCi | EGR/DPF OFF",
    "VW Passat B6 2.0 TDI BMP | Stage 1": "VW Passat B6 2.0 TDI BMP | Stage 1",
    "VW Golf VI 2.0 TDI | Stage 1": "VW Golf VI 2.0 TDI | Stage 1",
    "VW Passat B6 2.0 TDI BKP | EGR OFF": "VW Passat B6 2.0 TDI BKP | EGR OFF",
    "VW Golf V 1.9 TDI | EGR OFF": "VW Golf V 1.9 TDI | EGR OFF",
    "Fiat Punto Evo 1.3 MultiJet | EGR/DPF Off": "Fiat Punto Evo 1.3 MultiJet | EGR/DPF Off",
    "VW Golf IV 1.9 TDI | HardCut Rev Limiter": "VW Golf IV 1.9 TDI | HardCut Rev Limiter",
    "VW Passat B6 2.0 TDI BMP | ECU Clone": "VW Passat B6 2.0 TDI BMP | ECU cloning",
    "Audi A6 2.5 TDI | Stage 1": "Audi A6 2.5 TDI | Stage 1",
    "Škoda Octavia 1.9 TDI | EGR OFF": "Škoda Octavia 1.9 TDI | EGR OFF",
    "Citroen C5 2.0 HDI | EGR/FAP OFF": "Citroën C5 2.0 HDI | EGR/FAP OFF",
    "Audi A3 2.0 TDI | EGR/DPF OFF": "Audi A3 2.0 TDI | EGR/DPF OFF",
    "Opel Zafira 1.9 CDTi | EGR OFF": "Opel Zafira 1.9 CDTi | EGR OFF",
    "Fiat Doblo 1.3 MultiJet | DPF Off": "Fiat Doblo 1.3 MultiJet | DPF Off",
    "VW Polo 1.9 TDI | Stage 1": "VW Polo 1.9 TDI | Stage 1",
    "Škoda Yeti 2.0 TDI | Stage 1": "Škoda Yeti 2.0 TDI | Stage 1",
    "Peugeot 307 1.6 HDI | DPF OFF": "Peugeot 307 1.6 HDi | DPF OFF",
    "Suzuki Swift 1.2 | CAT OFF": "Suzuki Swift 1.2 | CAT OFF",
    "VW Tiguan 2.0 TDI | DPF OFF": "VW Tiguan 2.0 TDI | DPF OFF",
    "VW Passat B6 1.9 TDI | IMMO OFF": "VW Passat B6 1.9 TDI | IMMO OFF",
    "BMW 320d E90 | DPF OFF": "BMW 320d E90 | DPF OFF",
    "BMW 116d F20 | Stage 1": "BMW 116d F20 | Stage 1",
    "Fiat Qubo 1.3 MultiJet | DPF OFF": "Fiat Qubo 1.3 MultiJet | DPF OFF",
    "Fiat Grande Punto | EGR OFF": "Fiat Grande Punto | EGR OFF",
    "Fiat Grande Punto | DPF OFF": "Fiat Grande Punto | DPF OFF",
    "VW Tiguan 2.0 TDI | EGR/DPF/AdBlue OFF": "VW Tiguan 2.0 TDI | EGR/DPF/AdBlue OFF",
    "Peugeot 308 1.6 HDI | DPF OFF": "Peugeot 308 1.6 HDi | DPF OFF",
    "Škoda Yeti 2.0 TDI | EGR OFF": "Škoda Yeti 2.0 TDI | EGR OFF",
    "Dacia Dokker 1.5 dCi | DPF OFF": "Dacia Dokker 1.5 dCi | DPF OFF",
    "BMW 118d E87 | Stage 1": "BMW 118d E87 | Stage 1",
    "Thumbnail traka": "Thumbnail strip",
  };

  const titleTranslations = { 'Cenovnik | Auto Dijagnostika Lazarević':'Pricing | Auto Dijagnostika Lazarević', 'Galerija | Auto Dijagnostika Lazarević':'Gallery | Auto Dijagnostika Lazarević', 'Auto Dijagnostika Lazarević | Profesionalna Auto Dijagnostika':'Auto Dijagnostika Lazarević | Professional Vehicle Diagnostics', 'Kontakt | Auto Dijagnostika Lazarević':'Contact | Auto Dijagnostika Lazarević', 'O Nama | Auto Dijagnostika Lazarević':'About Us | Auto Dijagnostika Lazarević', 'Usluge | Auto Dijagnostika Lazarević':'Services | Auto Dijagnostika Lazarević', 'Konfigurator vozila | Auto Dijagnostika Lazarević':'Vehicle Configurator | Auto Dijagnostika Lazarević' };
  const attrs = { placeholder: { 'Ime i Prezime':'Full Name','Telefon':'Phone','Email':'Email address','npr. VW Golf 7 1.6 TDI':'e. g. VW Golf 7 1.6 TDI','Detaljno opišite problem sa vozilom...':'Describe the Problem' }, 'aria-label': { 'Poslednji radovi':'Latest work' } };
  const normalize = s => (s || '').replace(/\s+/g, ' ').trim();
  let lang = localStorage.getItem('adl-language') || 'sr';

  const translate = () => {
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    let node;
    while ((node = walker.nextNode())) {
      if (!node.parentElement || node.parentElement.closest('script,style,noscript,textarea,option[data-keep-language]')) continue;
      const original = normalize(node.nodeValue);
      if (!original) continue;
      if (!node.__adlOriginal) node.__adlOriginal = node.nodeValue;
      const key = normalize(node.__adlOriginal);
      if (lang === 'en' && translations[key]) node.nodeValue = node.__adlOriginal.replace(key, translations[key]);
      else if (lang === 'sr') node.nodeValue = node.__adlOriginal;
    }
document.querySelectorAll('input, textarea, button, [aria-label]').forEach(el => {
  ['placeholder', 'aria-label'].forEach(attr => {
    const val = el.getAttribute(attr);
    if (!val) return;

    // Koristi validan ključ za dataset
    const key = attr === 'aria-label'
      ? 'adlAriaLabel'
      : 'adlPlaceholder';

    if (!el.dataset[key]) {
      el.dataset[key] = val;
    }

    const original = el.dataset[key];

    if (lang === 'en' && attrs[attr] && attrs[attr][original]) {
      el.setAttribute(attr, attrs[attr][original]);
    } else if (lang === 'sr') {
      el.setAttribute(attr, original);
    }
  });
});
    const originalTitle = document.title;
    if (!document.documentElement.dataset.adlOriginalTitle) document.documentElement.dataset.adlOriginalTitle = originalTitle;
    const baseTitle = document.documentElement.dataset.adlOriginalTitle;
    document.title = lang === 'en' ? (titleTranslations[baseTitle] || baseTitle) : baseTitle;
    const description = document.querySelector('meta[name="description"]');
    if (description) {
      if (!description.dataset.adlOriginal) description.dataset.adlOriginal = description.content;
      if (lang === 'en') description.content = 'Professional vehicle diagnostics, ECU coding and mobile diagnostic services in Lazarevac and Belgrade. Contact Auto Dijagnostika Lazarević.';
      else description.content = description.dataset.adlOriginal;
    }
    document.documentElement.lang = lang === 'en' ? 'en' : 'sr';
    
    document.querySelectorAll('.language-switch').forEach(el => {
      const checkbox = el.querySelector('input[type="checkbox"]');
      if (checkbox) checkbox.checked = (lang === 'en');
      el.setAttribute('aria-label', lang === 'en' ? 'Choose language' : 'Izaberite jezik');
    });
  };

  const nav = document.querySelector('header nav, nav');
  if (nav) {
    const switcher = document.createElement('label'); 
    switcher.className = 'language-switch'; 
    switcher.setAttribute('aria-label', lang === 'en' ? 'Choose language' : 'Izaberite jezik');
    
    const isChecked = lang === 'en' ? 'checked' : '';
    switcher.innerHTML = `
      <input type="checkbox" ${isChecked} aria-label="Toggle language">
      <span class="slider">
        <span class="lang-text sr">SRB</span>
        <span class="lang-text en">ENG</span>
        <span class="handle"></span>
      </span>
    `;
    
    const hamburger = nav.querySelector('.menu-toggle');
    if (hamburger) nav.insertBefore(switcher, hamburger); else nav.appendChild(switcher);
    
    switcher.querySelector('input').addEventListener('change', e => {
      lang = e.target.checked ? 'en' : 'sr';
      localStorage.setItem('adl-language', lang);
      translate();
    });
  }

  const style = document.createElement('style');
  style.textContent = `
/* =========================================
   PREMIUM LANGUAGE SWITCH — ADL
========================================= */

.language-switch {
    position: relative;
    display: inline-flex;
    align-items: center;
    width: 94px;
    height: 38px;
    margin-left: 16px;
    flex-shrink: 0;
    cursor: pointer;
    vertical-align: middle;
    isolation: isolate;
    -webkit-tap-highlight-color: transparent;
}

.language-switch input {
    position: absolute;
    width: 1px;
    height: 1px;
    opacity: 0;
}

/* Glavna kapsula */
.language-switch .slider {
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 10px;

    overflow: hidden;
    border-radius: 999px;
    background: linear-gradient(
        145deg,
        #111722 0%,
        #080b12 100%
    );

    border: 1px solid rgba(255, 186, 8, 0.24);

    box-shadow:
        inset 0 1px 0 rgba(255, 255, 255, 0.045),
        0 3px 10px rgba(0, 0, 0, 0.22);

    transition:
        border-color 0.25s ease,
        box-shadow 0.25s ease,
        background 0.25s ease;
}

/* Oznake jezika */
.language-switch .lang-text {
    position: relative;
    z-index: 2;
    width: 34px;
    text-align: center;

    font-family: 'Rajdhani', sans-serif;
    font-size: 13px;
    line-height: 1;
    font-weight: 700;
    letter-spacing: 1px;

    user-select: none;
    pointer-events: none;

    transition:
        color 0.25s ease,
        opacity 0.25s ease;
}

/* SRB — aktivan po početnom izboru */
.language-switch .lang-text.sr {
    color: #10131a;
    opacity: 1;
}

.language-switch .lang-text.en {
    color: #8b93a3;
    opacity: 0.85;
}

/* ENG — aktivan kada je checkbox uključen */
.language-switch input:checked ~ .slider .lang-text.sr {
    color: #8b93a3;
    opacity: 0.85;
}

.language-switch input:checked ~ .slider .lang-text.en {
    color: #10131a;
    opacity: 1;
}

/* Pokretni amber indikator */
.language-switch .handle {
    position: absolute;
    z-index: 1;
    top: 4px;
    left: 4px;

    width: 42px;
    height: 28px;
    border-radius: 999px;

    background: linear-gradient(
        135deg,
        #ffd45c 0%,
        #ffba08 58%,
        #f48c06 100%
    );

    box-shadow:
        0 2px 7px rgba(255, 186, 8, 0.22),
        inset 0 1px 0 rgba(255, 255, 255, 0.48);

    transition:
        transform 0.32s cubic-bezier(0.22, 1, 0.36, 1),
        background 0.25s ease,
        box-shadow 0.25s ease;

    pointer-events: none;
}

/* ENG aktivan */
.language-switch input:checked ~ .slider .handle {
    transform: translateX(42px);
    background: linear-gradient(
        135deg,
        #ffd45c 0%,
        #ffba08 58%,
        #e85d04 100%
    );
}

/* Hover — diskretan, u stilu sajta */
.language-switch:hover .slider {
    border-color: rgba(255, 186, 8, 0.65);
    box-shadow:
        inset 0 1px 0 rgba(255, 255, 255, 0.06),
        0 4px 14px rgba(0, 0, 0, 0.3),
        0 0 8px rgba(255, 186, 8, 0.08);
}

.language-switch:hover .handle {
    box-shadow:
        0 3px 10px rgba(255, 186, 8, 0.3),
        inset 0 1px 0 rgba(255, 255, 255, 0.5);
}

/* Tastatura i pristupačnost */
.language-switch input:focus-visible ~ .slider {
    outline: 2px solid #ffba08;
    outline-offset: 3px;
}

/* Mobilni prikaz — pre hamburgera */
@media (max-width: 900px) {
    .language-switch {
        width: 88px;
        height: 36px;
        margin: 0 8px 0 auto;
        order: 0;
    }

    .language-switch .slider {
        padding: 0 8px;
    }

    .language-switch .handle {
        top: 3px;
        left: 3px;
        width: 40px;
        height: 28px;
    }

    .language-switch input:checked ~ .slider .handle {
        transform: translateX(40px);
    }

    .menu-toggle {
        margin-left: 4px !important;
        order: 1;
    }
}

/* Poštovanje sistemskog podešavanja animacija */
@media (prefers-reduced-motion: reduce) {
    .language-switch *,
    .language-switch .slider,
    .language-switch .handle {
        transition: none !important;
    }
}
  `;
  document.head.appendChild(style);

  const observer = new MutationObserver(() => { if (lang === 'en') translate(); });
  observer.observe(document.body, {childList:true,subtree:true});
  translate();
})();
