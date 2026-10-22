/* ==========================================================================
   Auto Dijagnostika Lazarević — Smart Chatbot Engine
   Dvojezični chatbot, prepoznavanje usluga i konteksta razgovora.
   ========================================================================== */

(() => {
  "use strict";

  if (window.ADLChatbot) return;

  const CONFIG = {
    phoneDisplay: "064/933-7958",
    phoneLink: "+381649337958",
    email: "info@autodijagnostikalazarevic.rs",
    address: "Marije Bursać 10, Lazarevac",
    mapUrl: "https://maps.app.goo.gl/uZ2WVoabG2B3FH9A7",
    storageKey: "adl-language"
  };

  const DICTIONARY = {
    sr: {
      title: "Auto Dijagnostika Lazarević",
      subtitle: "Podrška za dijagnostiku i zakazivanje",
      launcher: "Pitajte nas",
      placeholder: "Napišite pitanje (npr. koja vozila radite, cena DPF-a, radno vreme)...",
      footnote: "Automatski odgovori • Za potvrdu termina pozovite nas",
      close: "Zatvori čet",
      send: "Pošalji poruku",
      welcome: "Zdravo! 👋 Dobro došli u Auto Dijagnostiku Lazarević. Kako mogu da vam pomognem? Možete mi postaviti pitanje ili izabrati neku od opcija ispod.",

      quick: [
        ["supported_vehicles", "🚗 Koja vozila radimo"],
        ["location", "🗺️ Gde se nalazimo / Kako doći"],
        ["diagnostics", "💻 Dijagnostika"],
        ["dpf", "⚙️ Gašenje DPF-a"],
        ["egr", "🔄 Gašenje EGR-a"],
        ["adblue", "💧 AdBlue sistem"],
        ["stage1", "🚀 Stage 1 Tuning"],
        ["price", "💶 Cenovnik"],
        ["booking", "📅 Zakazivanje"]
      ],

      contactCard: {
        heading: "Kontakt i lokacija",
        phone: "Telefon",
        email: "E-mail",
        address: "Adresa",
        form: "Otvorite kontakt formu"
      },

      links: {
        pricing: "Cenovnik",
        contact: "Kontakt strana",
        call: "Pozovite " + CONFIG.phoneDisplay
      },

      answers: {
        greeting: "Zdravo! 👋 Kako mogu da vam pomognem danas? Slobodno pitajte za vozila, lokaciju, cene, dijagnostiku ili neku od naših softverskih usluga.",

        supported_vehicles: "Radimo kompjutersku dijagnostiku i softverske usluge za veliki broj evropskih, azijskih i američkih marki automobila i lakih teretnih vozila.\n\n• VAG grupa: Volkswagen, Audi, Škoda, SEAT\n• Nemačka vozila: BMW, Mercedes-Benz, Opel, Porsche\n• Francuska vozila: Peugeot, Citroën, Renault, Dacia\n• Italijanska vozila: Fiat, Alfa Romeo, Lancia\n• Japanska vozila: Toyota, Nissan, Mazda, Honda, Mitsubishi, Subaru, Suzuki\n• Korejska vozila: Hyundai, Kia\n• Ostala vozila: Ford, Volvo, Jaguar, Land Rover, Chevrolet, Jeep i druga.\n\nAko niste sigurni da li podržavamo vaš model, pozovite nas radi provere kompatibilnosti.",

        location: "Nalazimo se u Lazarevcu, na adresi " + CONFIG.address + ". 🗺️ Kliknite na kontakt karticu ispod da otvorite lokaciju u Google Maps navigaciji. Pre dolaska preporučujemo da nas pozovete.",

        diagnostics: "Kompjuterska dijagnostika obuhvata očitavanje i brisanje grešaka, analizu parametara u realnom vremenu i proveru elektronskih sistema vozila. Početna cena dijagnostike je od 2.000 RSD.",

        dpf: "Usluga vezana za DPF obuhvata softversku obradu i proveru povezanih grešaka u zavisnosti od vozila i konkretnog problema. Početna cena usluge je od 6.000 RSD. Preporučujemo da prvo utvrdimo uzrok problema i proverimo stanje sistema.",

        egr: "Usluge vezane za EGR obuhvataju dijagnostiku sistema, proveru grešaka i dostupne softverske intervencije u skladu sa vozilom i važećim propisima. Početna cena navedene softverske usluge je od 5.000 RSD.",

        adblue: "AdBlue/SCR dijagnostika obuhvata proveru grešaka i parametara sistema, kao i procenu potrebne softverske intervencije. Početna cena navedene softverske usluge je od 8.000 RSD.",

        stage1: "Stage 1 je softverska optimizacija ECU mape prilagođena konkretnom motoru i vozilu. Cilj je optimizacija performansi uz uvažavanje tehničkog stanja vozila i ograničenja komponenti. Početna cena je od 10.000 RSD.",

        sensors: "Radimo dijagnostiku, zamenu, adaptaciju i kodiranje podržanih senzora, uključujući Lambda, MAF, NOx, ABS i senzore pritiska. Početna cena usluge je od 4.000 RSD, u zavisnosti od senzora i vozila.",

        ecu: "ECU/TCU usluge mogu da obuhvate kodiranje i adaptaciju modula, kloniranje računara i obradu određenih softverskih grešaka. Početna cena je od 5.000 RSD. Tačna mogućnost rada zavisi od oznake računara i vozila.",

        symptoms: "Ako automobil gubi snagu, trza, dimi, teško pali ili prijavljuje grešku na instrument tabli, preporučujemo da počnemo kompjuterskom dijagnostikom. Početna cena dijagnostike je od 2.000 RSD. Navedite marku, model, godište, motor i simptome radi preciznije procene.",

        dtc_code: "Ako imate konkretan DTC kod greške, pošaljite njegovu oznaku i opis koji prikazuje dijagnostički uređaj. Možemo da vam pomognemo da razumete šta kod označava i koje provere mogu biti potrebne. Početna cena dijagnostike je od 2.000 RSD.",

        price: "Početne cene najtraženijih usluga:\n\n• Kompjuterska dijagnostika: od 2.000 RSD\n• Usluge vezane za EGR: od 5.000 RSD\n• Usluge vezane za DPF: od 6.000 RSD\n• AdBlue/SCR usluge: od 8.000 RSD\n• Stage 1 optimizacija: od 10.000 RSD\n• Dijagnostika i kodiranje senzora: od 4.000 RSD\n• ECU/TCU usluge: od 5.000 RSD\n\nKonačna cena zavisi od vozila, tipa računara i obima posla. Za precizniju procenu pošaljite marku, model, godište i motor.",

        mobile: "Dolazak na adresu i mobilna dijagnostika u Lazarevcu i okolini mogući su po prethodnom dogovoru. Pozovite nas da proverimo dostupnost i cenu dolaska.",

        hours: "Radno vreme radionice:\n\n🕒 Ponedeljak – petak: 15:00–20:00\n🕒 Subota: 09:00–12:00\n🕒 Nedelja: po dogovoru\n\nPre dolaska preporučujemo telefonsku najavu.",

        booking: "Termin možete zakazati pozivom na " + CONFIG.phoneDisplay + ". Da bismo procenili trajanje posla, pripremite marku, model, godište, motor i kratak opis problema.",

        contact: "Možete nas kontaktirati telefonom na " + CONFIG.phoneDisplay + ", putem e-maila ili posetiti radionicu na adresi " + CONFIG.address + ". Kontakt kartica ispod sadrži direktne linkove.",

        thanks: "Nema na čemu! 😊 Ako imate još neko pitanje o vozilu, dijagnostici ili cenama, slobodno nastavite razgovor.",

        goodbye: "Hvala vam na javljanju! 👋 Stojimo vam na raspolaganju za informacije o dijagnostici i softverskim uslugama. Želimo vam bezbednu vožnju!",

        help: "Mogu da vam pružim informacije o:\n\n• Podržanim markama vozila\n• Kompjuterskoj dijagnostici\n• DPF, EGR i AdBlue/SCR sistemima\n• Stage 1 optimizaciji\n• Senzorima i ECU/TCU računarima\n• Početnim cenama usluga\n• Radnom vremenu i lokaciji\n• Dolasku na adresu\n• Zakazivanju termina\n\nNapišite pitanje svojim rečima ili izaberite jednu od ponuđenih opcija.",


        service_scope: "Radimo kompjutersku dijagnostiku, analizu parametara uživo, proveru elektronskih sistema, kodiranje i adaptaciju podržanih komponenti, kao i određene ECU/TCU softverske usluge. Tačna mogućnost rada zavisi od marke, modela, godišta, motora i oznake modula. Ako navedete podatke o vozilu i problem, možemo da vas uputimo na odgovarajuću uslugu.",

        diagnostics_process: "Dijagnostika obično počinje povezivanjem dijagnostičkog uređaja, očitavanjem prijavljenih grešaka i proverom dostupnih parametara uživo. Kod po potrebi proveravamo u kontekstu simptoma i podataka vozila. Sama šifra greške ne znači uvek da je deo koji je prijavio grešku neispravan. Početna cena dijagnostike je od 2.000 RSD.",

        diagnostics_all_modules: "Mogućnost pristupa modulima zavisi od marke, godišta i opreme vozila. Na podržanim vozilima proveravaju se dostupni sistemi kao što su motor, menjač, ABS/ESP, vazdušni jastuci i drugi elektronski moduli. Navedite marku, model, godište i motor da proverimo mogućnosti.",

        clear_faults: "Greške je moguće obrisati kada to podržavaju vozilo i dijagnostički uređaj, ali brisanje samo po sebi ne otklanja uzrok kvara. Ako se greška vrati, potrebno je proveriti kod, prateće parametre i simptome. Početna cena dijagnostike je od 2.000 RSD.",

        check_engine: "Lampica Check Engine može biti povezana sa različitim problemima, od senzora i usisa do sistema emisije izduvnih gasova ili paljenja. Bez očitavanja kodova i provere parametara nije moguće pouzdano odrediti uzrok. Početna cena kompjuterske dijagnostike je od 2.000 RSD.",

        limp_mode: "Ako je vozilo u safe/limp režimu i slabije vuče, upravljačka jedinica je možda ograničila snagu zbog registrovanog problema. Uzrok može biti različit, pa preporučujemo očitavanje grešaka i proveru relevantnih parametara pre zamene delova. Početna cena dijagnostike je od 2.000 RSD.",

        dpf_symptoms: "Česti znaci problema sa DPF sistemom mogu biti upozorenje na instrument tabli, učestale regeneracije, povećana potrošnja ili ograničena snaga. Uzrok treba proveriti dijagnostikom i procenom stanja sistema; sama lampica ne potvrđuje da je filter neispravan. Početna cena dijagnostike je od 2.000 RSD.",

        dpf_regeneration: "Za procenu problema sa DPF regeneracijom potrebno je proveriti greške, diferencijalni pritisak, temperature, procenjenu količinu čađi i druge dostupne parametre. Ne preporučujemo pokretanje regeneracije bez provere uzroka i uslova koje propisuje proizvođač. Početna cena dijagnostike je od 2.000 RSD.",

        egr_symptoms: "Problemi sa EGR sistemom mogu se ispoljiti kroz neravnomeran rad, slabiju vuču, dimljenje ili grešku motora, ali isti simptomi mogu imati i druge uzroke. Pre odluke o popravci potrebno je očitati greške i proveriti rad sistema. Usluge vezane za EGR počinju od 5.000 RSD, u zavisnosti od vozila i obima posla.",

        adblue_symptoms: "Upozorenja AdBlue/SCR sistema mogu biti povezana sa kvalitetom ili nivoom tečnosti, pumpom, grejačem, NOx senzorom, doziranjem ili drugim komponentama. Potrebno je očitati konkretne kodove i proveriti parametre sistema. Početna cena navedene softverske usluge je od 8.000 RSD; konačna procena zavisi od vozila i nalaza.",

        nox_sensor: "NOx senzor je deo sistema za kontrolu emisije i može izazvati upozorenja SCR/AdBlue sistema ako prijavljuje neispravne vrednosti. Pre zamene preporučujemo proveru kodova, instalacije i dostupnih parametara. Rad na podržanim senzorima počinje od 4.000 RSD, zavisno od vozila i potrebnog posla.",

        maf_map_sensor: "MAF (protokomer) meri količinu vazduha, dok MAP senzor meri pritisak u usisnom sistemu. Njihovi problemi mogu biti povezani sa slabijom vučom, nepravilnim radom ili povećanom potrošnjom, ali simptomi nisu dovoljni za potvrdu kvara. Preporučujemo proveru grešaka i parametara uživo.",

        lambda_sensor: "Lambda sonda meri sadržaj kiseonika u izduvnim gasovima i utiče na kontrolu smeše kod vozila koja koriste taj sistem. Greška može biti posledica same sonde, instalacije ili drugog problema. Potrebno je proveriti kod i parametre pre zamene.",

        abs_sensor: "Greška ABS senzora može aktivirati upozorenja ABS/ESP sistema, ali uzrok može biti i instalacija, magnetni prsten, ležaj ili drugi deo sistema. Potrebno je očitati modul i proveriti signal senzora. Početna cena usluge vezane za senzore je od 4.000 RSD, u zavisnosti od posla.",

        tcu_service: "TCU je upravljačka jedinica automatskog menjača. U zavisnosti od vozila, možemo proveriti greške i mogućnosti kodiranja ili adaptacije podržanih modula. Navedite marku, model, godište, motor i tip menjača. Početna cena ECU/TCU usluga je od 5.000 RSD.",

        ecu_cloning: "Kloniranje ECU računara može biti moguće kada su podržani stari i zamenski modul i kada su dostupni odgovarajući podaci. Pre potvrde potrebno je proveriti proizvođača, oznaku hardvera/softvera i broj dela. Početna cena ECU/TCU usluga je od 5.000 RSD, a tačna ponuda zavisi od modula.",

        coding_adaptation: "Kodiranje i adaptacija služe za konfiguraciju ili učenje podržanih elektronskih modula i komponenti. Mogućnost zavisi od vozila, modula i potrebne procedure. Pošaljite marku, model, godište, motor i oznaku dela ili modula radi provere.",

        immobilizer: "Rad na imobilajzeru i uparivanju modula ili ključeva zavisi od marke vozila, generacije sistema i dostupnih bezbednosnih podataka. Ne možemo potvrditi mogućnost samo na osnovu marke; potrebni su model, godište i detalji sistema. Pozovite nas radi provere podrške.",

        used_ecu: "Polovan ECU nije uvek direktno zamenljiv. Mogu biti potrebni odgovarajuća hardverska i softverska verzija, kodiranje, adaptacija ili kloniranje, a kod nekih vozila i uparivanje sa drugim modulima. Pre kupovine pošaljite oznake starog i zamenskog računara.",

        compatibility_check: "Kompatibilnost proveravamo prema marki, modelu, godištu, motoru, menjaču i, kada je potrebno, VIN-u ili oznaci modula. Pošaljite što više ovih podataka, kao i opis željene usluge. Nemojte slati lične dokumente ili druge nepotrebne osetljive podatke.",

        quote_request: "Za što precizniju procenu pošaljite marku i model vozila, godište, motor, menjač ako je relevantan, opis simptoma i željenu uslugu. Ako imate DTC kod ili oznaku ECU/TCU modula, dodajte i njih. Konačna cena se potvrđuje nakon provere obima posla.",

        price_variation: "Cene koje navodimo su početne. Konačna cena može zavisiti od marke i modela, godišta, tipa motora i upravljačkog modula, dostupnosti softverske podrške i obima posla. Za procenu pošaljite podatke o vozilu i navedite tačno šta želite da se proveri ili uradi.",

        payment: "Za informacije o načinu plaćanja i eventualnim dodatnim troškovima najbolje je da nas kontaktirate pre zakazivanja. Način i konačan iznos potvrđuju se u dogovoru za konkretnu uslugu.",

        warranty: "Uslovi garancije zavise od vrste usluge, ugrađenog dela i konkretnog dogovora. Pre početka rada možemo razjasniti šta je obuhvaćeno uslugom i koji uslovi važe za vaš slučaj.",

        appointment_required: "Pre dolaska preporučujemo da pozovete i dogovorite termin. Tako možemo da proverimo dostupnost, potrebnu opremu i da li je usluga podržana za vaše vozilo. Telefon: " + CONFIG.phoneDisplay + ".",

        vehicle_details: "Da bismo preciznije odgovorili, navedite marku, model, godište, zapreminu i oznaku motora ako je znate, kao i simptom ili željenu uslugu. Za pitanja o ECU/TCU računarima korisna je i fotografija ili oznaka sa modula, ali nemojte slati nepotrebne lične podatke.",

        mobile_area: "Mobilna dijagnostika i dolazak na adresu mogući su u Lazarevcu i okolini po prethodnom dogovoru. Dostupnost i eventualni trošak dolaska zavise od lokacije i termina. Pozovite " + CONFIG.phoneDisplay + " radi potvrde.",

        before_visit: "Pre dolaska pripremite podatke o vozilu i kratak opis problema. Ako imate kodove grešaka, zapišite ih ili ponesite izveštaj dijagnostike. Preporučujemo telefonsku najavu kako bismo dogovorili termin.",

        urgent_fault: "Ako vozilo pokazuje crveno upozorenje, pregreva se, gubi pritisak ulja, kočnice ne rade pravilno ili postoji drugi znak neposredne opasnosti, zaustavite se na bezbednom mestu i nemojte nastavljati vožnju dok se ne proceni rizik. Za ostale simptome možemo pomoći da se utvrdi sledeći korak dijagnostikom.",

        emissions_note: "Radovi na sistemima za kontrolu emisije izduvnih gasova mogu biti ograničeni važećim propisima i namenom vozila. Preporučujemo dijagnostiku i popravku uzroka kvara i zadržavanje sistema u skladu sa propisima. Mogućnosti rada procenjujemo za konkretno vozilo.",

        no_exact_answer: "Nemam dovoljno podataka da pouzdano odgovorim na to konkretno pitanje. Mogu da pomognem oko dijagnostike, DPF/EGR/AdBlue sistema, senzora, ECU/TCU modula, cena, radnog vremena i zakazivanja. Napišite marku, model, godište i motor ili pozovite " + CONFIG.phoneDisplay + ".",

        fallback: "Nisam potpuno razumeo pitanje. Pokušajte da navedete konkretnu uslugu, na primer „koliko košta EGR“, „cena DPF-a“, „radite li BMW“ ili „gde se nalazite“. Možete izabrati i neku od opcija ispod."
      }
    },

    en: {
      title: "Auto Dijagnostika Lazarević",
      subtitle: "Diagnostics & ECU Software Support",
      launcher: "Ask us",
      placeholder: "Type your question (e.g. supported vehicles, DPF price, working hours)...",
      footnote: "Automated assistance • Call us to schedule a visit",
      close: "Close chat",
      send: "Send message",
      welcome: "Hello! 👋 Welcome to Auto Dijagnostika Lazarević. How can I help you today? Ask a question or choose an option below.",

      quick: [
        ["supported_vehicles", "🚗 Supported Vehicles"],
        ["location", "🗺️ Location / Directions"],
        ["diagnostics", "💻 Diagnostics"],
        ["dpf", "⚙️ DPF Service"],
        ["egr", "🔄 EGR Service"],
        ["adblue", "💧 AdBlue System"],
        ["stage1", "🚀 Stage 1 Tuning"],
        ["price", "💶 Pricing"],
        ["booking", "📅 Booking"]
      ],

      contactCard: {
        heading: "Contact & Location",
        phone: "Phone",
        email: "Email",
        address: "Address",
        form: "Open contact form"
      },

      links: {
        pricing: "Pricing page",
        contact: "Contact page",
        call: "Call " + CONFIG.phoneDisplay
      },

      answers: {
        greeting: "Hello! 👋 How can I help you today? Ask about supported vehicles, location, pricing, diagnostics, or our software services.",

        supported_vehicles: "We provide computer diagnostics and software services for many European, Asian, and American passenger cars and light commercial vehicles.\n\n• VAG Group: Volkswagen, Audi, Škoda, SEAT\n• German brands: BMW, Mercedes-Benz, Opel, Porsche\n• French brands: Peugeot, Citroën, Renault, Dacia\n• Italian brands: Fiat, Alfa Romeo, Lancia\n• Japanese brands: Toyota, Nissan, Mazda, Honda, Mitsubishi, Subaru, Suzuki\n• Korean brands: Hyundai, Kia\n• Other brands: Ford, Volvo, Jaguar, Land Rover, Chevrolet, Jeep and others.\n\nContact us to confirm compatibility with your specific vehicle.",

        location: "We are located in Lazarevac at " + CONFIG.address + ". 🗺️ Use the contact card below to open our Google Maps location. Please call before visiting.",

        diagnostics: "Computer diagnostics includes reading and clearing fault codes, analysing live data, and checking vehicle electronic systems. Starting price: 2,000 RSD.",

        dpf: "DPF-related services may include software work and checking related fault codes, depending on the vehicle and the problem. Starting price for the listed software service: 6,000 RSD. We recommend checking the cause of the fault and the system condition first.",

        egr: "EGR-related services include system diagnostics, fault checking, and available software work depending on the vehicle and applicable regulations. Starting price for the listed software service: 5,000 RSD.",

        adblue: "AdBlue/SCR diagnostics includes checking fault codes and system parameters and assessing the required software work. Starting price for the listed software service: 8,000 RSD.",

        stage1: "Stage 1 is ECU software optimisation tailored to the specific engine and vehicle. The goal is to optimise performance while considering the vehicle's technical condition and component limits. Starting price: 10,000 RSD.",

        sensors: "We provide diagnostics, replacement, adaptation, and coding for supported sensors, including Lambda, MAF, NOx, ABS, and pressure sensors. Starting price: 4,000 RSD, depending on the vehicle and sensor.",

        ecu: "ECU/TCU services may include module coding and adaptation, ECU cloning, and processing certain software faults. Starting price: 5,000 RSD. Compatibility depends on the vehicle and control unit.",

        symptoms: "If your vehicle loses power, hesitates, produces smoke, is difficult to start, or displays a warning light, we recommend starting with computer diagnostics. Starting price: 2,000 RSD. Send the make, model, year, engine, and symptoms for a more accurate estimate.",

        dtc_code: "If you have a specific DTC fault code, send the code and the description shown by your diagnostic tool. We can help explain what it means and what checks may be needed. Starting price for diagnostics: 2,000 RSD.",

        price: "Starting prices for popular services:\n\n• Computer diagnostics: from 2,000 RSD\n• EGR-related services: from 5,000 RSD\n• DPF-related services: from 6,000 RSD\n• AdBlue/SCR services: from 8,000 RSD\n• Stage 1 optimisation: from 10,000 RSD\n• Sensor diagnostics and coding: from 4,000 RSD\n• ECU/TCU services: from 5,000 RSD\n\nThe final price depends on the vehicle and the work required. Send the make, model, year, and engine for a more accurate estimate.",

        mobile: "Mobile diagnostics in Lazarevac and surrounding areas may be available by appointment. Call us to check availability and travel costs.",

        hours: "Workshop opening hours:\n\n🕒 Monday–Friday: 15:00–20:00\n🕒 Saturday: 09:00–12:00\n🕒 Sunday: By appointment\n\nPlease call before visiting.",

        booking: "To book an appointment, call " + CONFIG.phoneDisplay + ". Please have the vehicle make, model, year, engine, and a short description of the issue ready.",

        contact: "You can contact us by phone at " + CONFIG.phoneDisplay + ", by email, or visit us at " + CONFIG.address + ". The contact card below contains direct links.",

        thanks: "You're welcome! 😊 Feel free to ask if you need more information about a vehicle, diagnostics, or pricing.",

        goodbye: "Thank you for contacting us! 👋 We're happy to help with information about diagnostics and software services. Drive safely!",

        help: "I can provide information about:\n\n• Supported vehicle makes\n• Computer diagnostics\n• DPF, EGR, and AdBlue/SCR systems\n• Stage 1 optimisation\n• Sensors and ECU/TCU control units\n• Starting prices\n• Opening hours and location\n• Mobile service\n• Appointments\n\nAsk your question in your own words or select one of the options below.",


        service_scope: "We provide computer diagnostics, live-data analysis, checks of vehicle electronic systems, coding and adaptation of supported components, and selected ECU/TCU software services. Availability depends on the make, model, year, engine, and control-unit identification. Share your vehicle details and the issue so we can guide you to the relevant service.",

        diagnostics_process: "Diagnostics usually starts by connecting a diagnostic tool, reading stored fault codes, and checking available live data. Codes need to be interpreted alongside the symptoms and vehicle information; a fault code does not always mean the named component has failed. Starting price for diagnostics is 2,000 RSD.",

        diagnostics_all_modules: "Access to control units depends on the vehicle make, year, and equipment. On supported vehicles, available systems may include the engine, transmission, ABS/ESP, airbags, and other electronic modules. Send the make, model, year, and engine so we can check coverage.",

        clear_faults: "Fault codes can be cleared where the vehicle and diagnostic tool support it, but clearing a code does not fix the underlying cause. If it returns, the code, related data, and symptoms should be checked. Starting price for diagnostics is 2,000 RSD.",

        check_engine: "The Check Engine light can be triggered by many issues, including sensors, intake problems, emissions systems, or ignition faults. The cause cannot be confirmed reliably without reading the codes and checking relevant data. Computer diagnostics starts at 2,000 RSD.",

        limp_mode: "If the vehicle enters limp mode or loses power, the control unit may have limited performance because it detected a problem. Causes vary, so we recommend reading the fault codes and checking relevant live data before replacing parts. Diagnostics starts at 2,000 RSD.",

        dpf_symptoms: "Possible DPF-related symptoms include a dashboard warning, frequent regeneration, increased fuel consumption, or reduced power. The cause should be checked through diagnostics and an assessment of the system; a warning light alone does not prove the filter has failed. Diagnostics starts at 2,000 RSD.",

        dpf_regeneration: "To assess DPF regeneration issues, relevant checks may include fault codes, differential pressure, temperatures, estimated soot load, and other available data. Regeneration should not be started without checking the cause and the manufacturer's required conditions. Diagnostics starts at 2,000 RSD.",

        egr_symptoms: "EGR issues may cause rough running, reduced power, smoke, or an engine warning, but these symptoms can have other causes too. We recommend checking the codes and system operation before deciding on a repair. EGR-related services start at 5,000 RSD, depending on the vehicle and work required.",

        adblue_symptoms: "AdBlue/SCR warnings may be related to fluid quality or level, the pump, heater, NOx sensor, dosing system, or other components. The specific codes and system data should be checked. The listed software service starts at 8,000 RSD; the final assessment depends on the vehicle and findings.",

        nox_sensor: "The NOx sensor is part of the emissions-control system and can trigger SCR/AdBlue warnings if it reports incorrect values. Before replacement, the fault codes, wiring, and available data should be checked. Supported sensor services start at 4,000 RSD, depending on the vehicle and work required.",

        maf_map_sensor: "A MAF sensor measures intake-air mass, while a MAP sensor measures intake-manifold pressure. Faults can be associated with reduced power, rough running, or increased consumption, but symptoms alone do not confirm a failed sensor. We recommend checking fault codes and live data.",

        lambda_sensor: "A lambda sensor measures oxygen in the exhaust and helps control the air-fuel mixture in vehicles using this system. A fault may come from the sensor, wiring, or another issue. The code and relevant data should be checked before replacing parts.",

        abs_sensor: "An ABS sensor fault may trigger ABS/ESP warnings, but the cause can also be wiring, a reluctor ring, a wheel bearing, or another part of the system. The module and sensor signal should be checked. Sensor-related services start at 4,000 RSD, depending on the work required.",

        tcu_service: "The TCU is the automatic-transmission control unit. Depending on the vehicle, we may be able to check faults and provide coding or adaptation for supported modules. Send the make, model, year, engine, and transmission type. ECU/TCU services start at 5,000 RSD.",

        ecu_cloning: "ECU cloning may be possible when both the original and replacement units are supported and the required data is available. We need to check the manufacturer, hardware/software identification, and part number first. ECU/TCU services start at 5,000 RSD; the exact quote depends on the unit.",

        coding_adaptation: "Coding and adaptation configure supported electronic modules or allow components to be learned by the vehicle. Availability depends on the vehicle, module, and required procedure. Send the make, model, year, engine, and part or module identification so we can check.",

        immobilizer: "Immobilizer and module/key pairing work depends on the vehicle make, system generation, and available security data. We cannot confirm support from the make alone; the model, year, and system details are needed. Contact us to check compatibility.",

        used_ecu: "A used ECU is not always a direct replacement. Hardware and software versions may need to match, and coding, adaptation, cloning, or pairing with other modules may be required. Send the part numbers of the original and replacement units before purchasing.",

        compatibility_check: "Compatibility is checked using the make, model, year, engine, transmission where relevant, and sometimes the VIN or control-unit identification. Send as many of these details as possible, together with the service you need. Do not send personal documents or unnecessary sensitive information.",

        quote_request: "For a more accurate estimate, send the vehicle make and model, year, engine, transmission if relevant, a description of the symptoms, and the service you need. If available, include the DTC code or ECU/TCU identification. The final price is confirmed after the required work is assessed.",

        price_variation: "Listed prices are starting prices. The final amount may depend on the make and model, year, engine and control unit, software support availability, and the amount of work required. Send your vehicle details and specify exactly what you want checked or done.",

        payment: "For details about payment methods or possible additional costs, please contact us before booking. The method and final amount are confirmed when arranging the specific service.",

        warranty: "Warranty terms depend on the type of service, any fitted parts, and the agreement for the specific job. Before work begins, we can clarify what is included and which terms apply to your case.",

        appointment_required: "Please call before visiting to arrange an appointment. This lets us check availability, required equipment, and whether the service is supported for your vehicle. Phone: " + CONFIG.phoneDisplay + ".",

        vehicle_details: "For a more accurate answer, provide the make, model, year, engine size or engine code if known, and the symptoms or service you need. For ECU/TCU questions, the unit's part number or a photo of its label may help; do not send unnecessary personal information.",

        mobile_area: "Mobile diagnostics and on-site visits may be available in Lazarevac and nearby areas by prior arrangement. Availability and any travel charge depend on the location and time. Call " + CONFIG.phoneDisplay + " to confirm.",

        before_visit: "Before visiting, prepare your vehicle details and a short description of the issue. If you have fault codes, write them down or bring the diagnostic report. Please call ahead so we can arrange a time.",

        urgent_fault: "If the vehicle displays a red warning, overheats, has an oil-pressure warning, has unreliable brakes, or shows another immediate safety risk, stop in a safe place and do not continue driving until the risk has been assessed. For other symptoms, diagnostics can help determine the next step.",

        emissions_note: "Work involving exhaust-emissions control systems may be restricted by applicable regulations and the vehicle's intended use. We recommend diagnosing and repairing the cause while keeping the system compliant with applicable rules. Available work is assessed for each vehicle.",

        no_exact_answer: "I don't have enough information to answer that specific question reliably. I can help with diagnostics, DPF/EGR/AdBlue systems, sensors, ECU/TCU modules, prices, opening hours, and appointments. Send the make, model, year, and engine, or call " + CONFIG.phoneDisplay + ".",

        fallback: "I couldn't fully understand your question. Try mentioning the specific service, for example, “EGR price”, “DPF cost”, “Do you work on BMW?” or “Where are you located?” You can also choose one of the options below."
      }
    }
  };

  /* ==========================================================================
     REČNIK NAMERA I KLJUČNIH REČI
     ========================================================================== */

  const INTENT_RULES = [
    {
      intent: "greeting",
      weight: 10,
      keywords: [
        "zdravo", "cao", "dobar dan", "dobro jutro", "dobro vece",
        "pozdrav", "hello", "hi", "hey"
      ]
    },
    {
      intent: "thanks",
      weight: 10,
      keywords: [
        "hvala", "hvala lepo", "zahvaljujem", "puno hvala",
        "thank you", "thanks", "cheers"
      ]
    },
    {
      intent: "goodbye",
      weight: 10,
      keywords: [
        "dovidjenja", "vidimo se", "prijatno", "cao za sada",
        "bye", "goodbye", "see you"
      ]
    },
    {
      intent: "supported_vehicles",
      weight: 17,
      keywords: [
        "koja vozila", "koje automobile", "koje marke", "koje aute",
        "radite li", "da li radite", "da li moze za", "koje modele",
        "radite li bmw", "radite li audi", "radite li vw",
        "radite li mercedes", "radite li opel", "radite li ford",
        "radite li peugeot", "radite li citroen", "radite li renault",
        "radite li fiat", "radite li toyota", "radite li hyundai",
        "radite li kia", "supported vehicles", "what cars",
        "which cars", "supported models", "do you work on"
      ]
    },
    {
      intent: "location",
      weight: 16,
      keywords: [
        "gde se nalazite", "gde ste", "adresa", "lokacija",
        "gde je servis", "radionica", "lazarevac", "u lazarevcu",
        "koja je adresa", "kako doci", "kako da dodjem",
        "kako stici", "mapa", "gugl mapa", "google maps",
        "put do vas", "gde vam je radionica", "u kojoj ulici",
        "where are you", "location", "address", "how to get"
      ]
    },

    {
      intent: "diagnostics_process",
      weight: 22,
      keywords: ["kako izgleda dijagnostika", "kako radite dijagnostiku", "sta obuhvata dijagnostika", "proces dijagnostike", "live data", "parametri uzivo", "diagnostic process", "how diagnostics works"]
    },
    {
      intent: "diagnostics_all_modules",
      weight: 22,
      keywords: ["svi moduli", "sve module", "kompletna dijagnostika", "full scan", "all modules", "all control units", "abs airbag menjac", "dijagnostika svih sistema"]
    },
    {
      intent: "clear_faults",
      weight: 23,
      keywords: ["brisanje gresaka", "obrisati greske", "obrisi gresku", "brisete greske", "clear fault codes", "clear codes", "erase fault codes"]
    },
    {
      intent: "check_engine",
      weight: 24,
      keywords: ["check engine", "lampica motora", "svetli check", "gori check", "engine warning light", "engine light", "lampica motora svetli"]
    },
    {
      intent: "limp_mode",
      weight: 23,
      keywords: ["safe mode", "limp mode", "safe mod", "nece iz safe moda", "ogranicena snaga", "limp home", "reduced power mode"]
    },
    {
      intent: "dpf_regeneration",
      weight: 24,
      keywords: ["dpf regeneracija", "regeneracija dpf", "ne radi regeneraciju", "cesta regeneracija", "forced regeneration", "dpf regen", "regeneracija filtera"]
    },
    {
      intent: "dpf_symptoms",
      weight: 22,
      keywords: ["simptomi dpf", "problem sa dpf", "dpf lampica", "dpf se puni", "dpf zacepljen", "dpf clogged", "dpf warning", "filter cestica zapusen"]
    },
    {
      intent: "egr_symptoms",
      weight: 22,
      keywords: ["simptomi egr", "problem sa egr", "egr ne radi", "egr fault", "egr error", "egr ventil zaglavljen"]
    },
    {
      intent: "adblue_symptoms",
      weight: 23,
      keywords: ["adblue greska", "adblue problem", "scr greska", "adblue countdown", "adblue odbrojavanje", "no start adblue", "adblue warning", "urea system fault"]
    },
    {
      intent: "nox_sensor",
      weight: 23,
      keywords: ["nox senzor", "nox sensor", "nox greska", "greska nox", "nox probe"]
    },
    {
      intent: "maf_map_sensor",
      weight: 23,
      keywords: ["maf senzor", "map senzor", "protokomer", "maf sensor", "map sensor", "mass air flow", "usisni pritisak"]
    },
    {
      intent: "lambda_sensor",
      weight: 23,
      keywords: ["lambda sonda", "lambda sensor", "oxygen sensor", "sonda kiseonika"]
    },
    {
      intent: "abs_sensor",
      weight: 23,
      keywords: ["abs senzor", "abs sensor", "esp senzor", "senzor tocka", "wheel speed sensor"]
    },
    {
      intent: "tcu_service",
      weight: 22,
      keywords: ["tcu", "automatski menjac", "automatskog menjaca", "menjac adaptacija", "menjac kodiranje", "transmission control unit", "gearbox coding"]
    },
    {
      intent: "ecu_cloning",
      weight: 23,
      keywords: ["kloniranje ecu", "kloniranje racunara", "klonirati ecu", "ecu cloning", "clone ecu", "cloning ecu", "prebacivanje podataka ecu"]
    },
    {
      intent: "coding_adaptation",
      weight: 22,
      keywords: ["kodiranje modula", "adaptacija modula", "kodiranje komponente", "adaptacija komponente", "coding and adaptation", "module coding", "component coding", "basic settings"]
    },
    {
      intent: "immobilizer",
      weight: 22,
      keywords: ["imobilajzer", "immo", "uparivanje kljuca", "kodiranje kljuca", "uparivanje ecu", "immobilizer", "immobiliser", "key programming"]
    },
    {
      intent: "used_ecu",
      weight: 22,
      keywords: ["polovan ecu", "polovan racunar", "zamenski ecu", "zamenski racunar", "used ecu", "replacement ecu", "second hand ecu"]
    },
    {
      intent: "compatibility_check",
      weight: 19,
      keywords: ["da li odgovara", "da li pase", "kompatibilnost", "kompatibilan", "odgovara li", "can it fit", "is it compatible", "compatibility check"]
    },
    {
      intent: "quote_request",
      weight: 19,
      keywords: ["ponuda za", "procena cene", "koliko bi izaslo", "treba mi ponuda", "estimate for", "quote for", "get a quote", "price estimate"]
    },
    {
      intent: "price_variation",
      weight: 18,
      keywords: ["zasto zavisi cena", "od cega zavisi cena", "konacna cena", "da li je to konacna cena", "why does price vary", "final price", "is that the final price"]
    },
    {
      intent: "payment",
      weight: 17,
      keywords: ["placanje", "kako se placa", "nacin placanja", "karticom", "payment method", "how can i pay", "payment options"]
    },
    {
      intent: "warranty",
      weight: 17,
      keywords: ["garancija", "da li dajete garanciju", "uslovi garancije", "warranty", "guarantee"]
    },
    {
      intent: "appointment_required",
      weight: 18,
      keywords: ["treba li zakazati", "moram li da zakazem", "bez zakazivanja", "mogu li samo da dodjem", "pre dolaska", "do i need an appointment", "walk in", "appointment required"]
    },
    {
      intent: "vehicle_details",
      weight: 17,
      keywords: ["koje podatke o autu", "sta od podataka treba", "koji podaci su potrebni", "vehicle details", "what details do you need"]
    },
    {
      intent: "mobile_area",
      weight: 19,
      keywords: ["dolazak u", "dolazite u", "dolazite do", "mobilni servis", "na moju lokaciju", "mobile diagnostics", "do you travel", "service area"]
    },
    {
      intent: "before_visit",
      weight: 17,
      keywords: ["sta da pripremim", "sta poneti", "pre nego sto dodjem", "pre dolaska", "before visiting", "what should i bring"]
    },
    {
      intent: "urgent_fault",
      weight: 22,
      keywords: ["crvena lampica", "pritisak ulja", "pregreva se", "kočnice", "kocnice ne rade", "overheating", "oil pressure warning", "unsafe to drive"]
    },
    {
      intent: "emissions_note",
      weight: 18,
      keywords: ["zakonski", "zakonito", "tehnicki pregled", "emisije", "emissions regulations", "legal requirements", "road legal"]
    },
    {
      intent: "service_scope",
      weight: 14,
      keywords: ["koje usluge nudite", "sta sve radite", "spisak usluga", "vasim uslugama", "services offered", "what services do you offer"]
    },

    {
      intent: "dpf",
      weight: 16,
      keywords: [
        "dpf", "fap", "filter cestica", "particulate filter",
        "gasenje dpf", "skidanje dpf", "uklanjanje dpf",
        "dpf filter", "gasenja dpf", "iskljucivanje dpf"
      ]
    },
    {
      intent: "egr",
      weight: 16,
      keywords: [
        "egr", "egr ventil", "gasenje egr", "skidanje egr",
        "uklanjanje egr", "zatvaranje egr", "gasenja egr",
        "iskljucivanje egr"
      ]
    },
    {
      intent: "adblue",
      weight: 16,
      keywords: [
        "adblue", "ad blue", "scr", "urea", "gasenje adblue",
        "skidanje adblue", "uklanjanje adblue", "adblu",
        "iskljucivanje adblue"
      ]
    },
    {
      intent: "stage1",
      weight: 15,
      keywords: [
        "stage 1", "stage1", "chip tuning", "chiptuning",
        "remap", "remapping", "povecanje snage",
        "optimizacija mape", "tuning", "cipovanje",
        "dodavanje snage"
      ]
    },
    {
      intent: "diagnostics",
      weight: 12,
      keywords: [
        "dijagnostika", "dijagnostiku", "kompjuterska dijagnostika",
        "citanje gresaka", "brisanje gresaka", "dtc", "obd",
        "check engine", "lampica", "svetli lampica",
        "prikljucivanje", "diagnostics", "diagnostic scan"
      ]
    },
    {
      intent: "sensors",
      weight: 14,
      keywords: [
        "senzor", "senzora", "senzori", "maf", "protokomer",
        "lambda", "nox", "abs senzor", "kodiranje senzora",
        "map senzor", "sensor", "sensors"
      ]
    },
    {
      intent: "ecu",
      weight: 14,
      keywords: [
        "ecu", "tcu", "ecm", "pcm", "racunar motora",
        "kompjuter motora", "kodiranje modula", "kloniranje ecu",
        "immo", "control unit", "engine computer"
      ]
    },
    {
      intent: "symptoms",
      weight: 12,
      keywords: [
        "ne vuce", "safe mode", "limp mode", "trokira", "dimi",
        "gubi snagu", "tesko pali", "nece da upali", "trza",
        "secka", "pisti", "pustio ulje", "zvizdi turbina",
        "los rad motora", "gubitak snage", "engine problem",
        "losije vuce"
      ]
    },
    {
      intent: "price",
      weight: 12,
      keywords: [
        "cena", "cene", "cenovnik", "koliko kosta",
        "kolika je cena", "koliko je", "koliko naplacujete",
        "price", "pricing", "cost", "how much"
      ]
    },
    {
      intent: "mobile",
      weight: 13,
      keywords: [
        "teren", "terenu", "dolazak na adresu",
        "mobilna dijagnostika", "dolazite li", "rad na terenu",
        "na adresi", "mobile service", "onsite", "come to me"
      ]
    },
    {
      intent: "hours",
      weight: 13,
      keywords: [
        "radno vreme", "kad radite", "kada radite",
        "otvoreni", "do koliko radite", "otvoreno",
        "subotom", "nedeljom", "hours", "working hours", "open"
      ]
    },
    {
      intent: "booking",
      weight: 13,
      keywords: [
        "zakazivanje", "zakazem", "termin", "slobodan termin",
        "rezervacija", "da dodjem", "zakazati", "booking",
        "appointment", "schedule"
      ]
    },
    {
      intent: "contact",
      weight: 12,
      keywords: [
        "kontakt", "telefon", "broj telefona", "poziv",
        "email", "mejl", "broj", "kako vas dobiti",
        "contact", "phone", "call"
      ]
    },
    {
      intent: "help",
      weight: 10,
      keywords: [
        "sta mozes", "sta radite", "sta sve nudite",
        "pomoc", "opcije", "help", "what can you do"
      ]
    }
  ];

  /* ==========================================================================
     POMOĆNE FUNKCIJE
     ========================================================================== */

  function normalizeText(text) {
    if (!text) return "";

    return String(text)
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/đ/g, "d")
      .replace(/ž/g, "z")
      .replace(/č/g, "c")
      .replace(/ć/g, "c")
      .replace(/š/g, "s")
      .replace(/[^a-z0-9\s.-]+/g, " ")
      .replace(/[.-]+/g, " ")
      .trim()
      .replace(/\s+/g, " ");
  }

  function detectLanguage() {
    try {
      const saved = localStorage.getItem(CONFIG.storageKey);

      if (saved === "en" || saved === "sr") {
        return saved;
      }
    } catch (_) {}

    const htmlLang = document.documentElement.lang || "sr";

    return htmlLang.toLowerCase().startsWith("en") ? "en" : "sr";
  }

  function matchesAny(text, phrases) {
    return phrases.some(phrase => {
      const normalizedPhrase = normalizeText(phrase);
      return normalizedPhrase && text.includes(normalizedPhrase);
    });
  }

  /* ==========================================================================
     CHATBOT IMPLEMENTACIJA
     ========================================================================== */

  class ChatbotEngine {
    constructor() {
      this.language = detectLanguage();
      this.isOpen = false;
      this.hasWelcomed = false;

      this.state = {
        lastIntent: null,
        lastServiceIntent: null
      };

      this.initDOM();
      this.bindEvents();
      this.applyLanguage(this.language);
    }

    initDOM() {
      this.root = document.createElement("div");
      this.root.className = "adl-chatbot";

      this.root.innerHTML = `
        <section
          class="adl-chat-window"
          id="adl-chat-window"
          role="dialog"
          aria-modal="false"
          aria-label="Chatbot"
          hidden
        >
          <header class="adl-chat-header">
            <div class="adl-chat-avatar">
              <img
                src="./slike/icon-512.png"
                alt="Auto Dijagnostika Lazarević Logo"
                style="width:100%;height:100%;object-fit:contain;border-radius:15px;"
              >
            </div>

            <div class="adl-chat-heading">
              <p class="adl-chat-title" data-chat="title"></p>

              <p class="adl-chat-subtitle">
                <span class="adl-chat-online-dot"></span>
                <span data-chat="subtitle"></span>
              </p>
            </div>

            <button
              class="adl-chat-close"
              type="button"
              data-chat-close
              aria-label="Close"
            >
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                  d="m6 6 12 12M18 6 6 18"
                  stroke="currentColor"
                  stroke-width="1.8"
                  stroke-linecap="round"
                />
              </svg>
            </button>
          </header>

          <div
            class="adl-chat-messages"
            id="adl-chat-messages"
            aria-live="polite"
          ></div>

          <form class="adl-chat-compose" id="adl-chat-form">
            <input
              class="adl-chat-input"
              id="adl-chat-input"
              type="text"
              maxlength="500"
              autocomplete="off"
            >

            <button
              class="adl-chat-send"
              type="submit"
              aria-label="Send"
            >
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                  d="m21 3-7.2 18-3.5-7.3L3 10.2 21 3Z"
                  stroke="currentColor"
                  stroke-width="1.8"
                  stroke-linejoin="round"
                />
                <path
                  d="M10.3 13.7 15 9"
                  stroke="currentColor"
                  stroke-width="1.8"
                  stroke-linecap="round"
                />
              </svg>
            </button>
          </form>

          <div class="adl-chat-footnote" data-chat="footnote"></div>
        </section>

        <button
          class="adl-chat-launcher"
          type="button"
          aria-expanded="false"
          aria-controls="adl-chat-window"
        >
          <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
              d="M20 11.5a7.5 7.5 0 0 1-7.5 7.5H6l-3 2v-6.5A7.5 7.5 0 1 1 20 11.5Z"
              stroke="currentColor"
              stroke-width="1.8"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M8 11h8M8 14h5"
              stroke="currentColor"
              stroke-width="1.8"
              stroke-linecap="round"
            />
          </svg>

          <span class="adl-chat-launcher-label" data-chat="launcher"></span>
        </button>
      `;

      document.body.appendChild(this.root);

      this.windowEl = this.root.querySelector(".adl-chat-window");
      this.launcherEl = this.root.querySelector(".adl-chat-launcher");
      this.messagesEl = this.root.querySelector("#adl-chat-messages");
      this.formEl = this.root.querySelector("#adl-chat-form");
      this.inputEl = this.root.querySelector("#adl-chat-input");
    }

    bindEvents() {
      this.launcherEl.addEventListener("click", () => this.toggleChat());

      this.root
        .querySelector("[data-chat-close]")
        .addEventListener("click", () => this.closeChat());

      this.formEl.addEventListener("submit", event => {
        event.preventDefault();

        const text = this.inputEl.value.trim();

        if (!text) return;

        this.handleUserMessage(text);
        this.inputEl.value = "";
        this.inputEl.focus();
      });

      document.addEventListener("keydown", event => {
        if (event.key === "Escape" && this.isOpen) {
          this.closeChat();
        }
      });

      const langObserver = new MutationObserver(() => {
        const nextLanguage = detectLanguage();

        if (nextLanguage !== this.language) {
          this.applyLanguage(nextLanguage, true);
        }
      });

      langObserver.observe(document.documentElement, {
        attributes: true,
        attributeFilter: ["lang"]
      });
    }

    applyLanguage(lang, resetHistory = false) {
      this.language = lang === "en" ? "en" : "sr";

      try {
        localStorage.setItem(CONFIG.storageKey, this.language);
      } catch (_) {}

      const dict = DICTIONARY[this.language];

      this.root
        .querySelectorAll("[data-chat='title']")
        .forEach(element => {
          element.textContent = dict.title;
        });

      this.root
        .querySelectorAll("[data-chat='subtitle']")
        .forEach(element => {
          element.textContent = dict.subtitle;
        });

      this.root
        .querySelectorAll("[data-chat='launcher']")
        .forEach(element => {
          element.textContent = dict.launcher;
        });

      this.root
        .querySelectorAll("[data-chat='footnote']")
        .forEach(element => {
          element.textContent = dict.footnote;
        });

      this.inputEl.placeholder = dict.placeholder;

      if (resetHistory && this.hasWelcomed) {
        this.messagesEl.replaceChildren();
        this.addMessage(dict.welcome, "bot");
        this.addQuickReplies();
      }
    }

    toggleChat() {
      this.isOpen ? this.closeChat() : this.openChat();
    }

    openChat() {
      this.isOpen = true;
      this.windowEl.hidden = false;
      this.launcherEl.setAttribute("aria-expanded", "true");

      // Na mobilnom sakrivamo launcher dok je prozor otvoren.
      if (window.innerWidth <= 768) {
        this.launcherEl.style.display = "none";
      }

      if (!this.hasWelcomed) {
        this.hasWelcomed = true;

        const dict = DICTIONARY[this.language];

        this.addMessage(dict.welcome, "bot");
        this.addQuickReplies();
      }

      // Ne otvaramo automatski mobilnu tastaturu.
      if (window.innerWidth > 768) {
        this.inputEl.focus();
      }
    }

    closeChat() {
      this.isOpen = false;
      this.windowEl.hidden = true;
      this.launcherEl.setAttribute("aria-expanded", "false");
      this.launcherEl.style.display = "";
    }

    scrollToBottom() {
      const messages = this.messagesEl.querySelectorAll(".adl-chat-row");

      if (messages.length > 0) {
        const lastMessage = messages[messages.length - 1];

        lastMessage.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      } else {
        this.messagesEl.scrollTop = this.messagesEl.scrollHeight;
      }
    }

    addMessage(text, sender = "bot") {
      const row = document.createElement("div");

      row.className =
        "adl-chat-row" + (sender === "user" ? " is-user" : "");

      const bubble = document.createElement("div");

      bubble.className = "adl-chat-bubble";
      bubble.textContent = text;

      row.appendChild(bubble);
      this.messagesEl.appendChild(row);

      this.scrollToBottom();
    }

    addContactCard() {
      const cardInfo = DICTIONARY[this.language].contactCard;

      const row = document.createElement("div");
      row.className = "adl-chat-row";

      const card = document.createElement("div");
      card.className = "adl-chat-bubble adl-chat-contact-card";

      const heading = document.createElement("strong");
      heading.className = "adl-chat-contact-heading";
      heading.textContent = cardInfo.heading;

      card.appendChild(heading);

      const appendItem = (label, value, href, external = false) => {
        const paragraph = document.createElement("p");

        paragraph.className = "adl-chat-contact-item";

        const labelElement = document.createElement("strong");
        labelElement.textContent = label + ": ";

        const link = document.createElement("a");
        link.href = href;
        link.textContent = value;

        if (external) {
          link.target = "_blank";
          link.rel = "noopener noreferrer";
        }

        paragraph.append(labelElement, link);
        card.appendChild(paragraph);
      };

      appendItem(
        cardInfo.phone,
        CONFIG.phoneDisplay,
        "tel:" + CONFIG.phoneLink
      );

      appendItem(
        cardInfo.email,
        CONFIG.email,
        "mailto:" + CONFIG.email
      );

      appendItem(
        cardInfo.address,
        CONFIG.address,
        CONFIG.mapUrl,
        true
      );

      const formButton = document.createElement("a");

      formButton.className =
        "adl-chat-action adl-chat-contact-form-link";

      formButton.href = "./kontakt.html";
      formButton.textContent = cardInfo.form;

      card.appendChild(formButton);
      row.appendChild(card);
      this.messagesEl.appendChild(row);

      this.scrollToBottom();
    }

    addActions() {
      const links = DICTIONARY[this.language].links;

      const row = document.createElement("div");
      row.className = "adl-chat-actions";

      const pricing = document.createElement("a");

      pricing.className = "adl-chat-action secondary";
      pricing.href = "./cenovnik.html";
      pricing.textContent = links.pricing;

      const contact = document.createElement("a");

      contact.className = "adl-chat-action secondary";
      contact.href = "./kontakt.html";
      contact.textContent = links.contact;

      const call = document.createElement("a");

      call.className = "adl-chat-action";
      call.href = "tel:" + CONFIG.phoneLink;
      call.textContent = links.call;

      row.append(pricing, contact, call);
      this.messagesEl.appendChild(row);

      this.scrollToBottom();
    }

    addQuickReplies() {
      const quick = DICTIONARY[this.language].quick;

      const row = document.createElement("div");
      row.className = "adl-chat-quick";

      quick.forEach(([intentKey, label]) => {
        const button = document.createElement("button");

        button.type = "button";
        button.textContent = label;

        button.addEventListener("click", () => {
          this.addMessage(label, "user");
          this.processIntent(intentKey);
        });

        row.appendChild(button);
      });

      this.messagesEl.appendChild(row);
      this.scrollToBottom();
    }

    /* ======================================================================
       PREPOZNAVANJE PITANJA
       ====================================================================== */

    analyzeQuery(rawText) {
      const norm = normalizeText(rawText);

      if (!norm) return "fallback";

      const asksPrice = matchesAny(norm, [
        "cena",
        "cene",
        "cenovnik",
        "koliko kosta",
        "kolika je cena",
        "koliko naplacujete",
        "koliko izadje",
        "koliko bi kostalo",
        "price",
        "pricing",
        "cost",
        "how much",
        "cena za", "cene za", "koliko para", "koliko novca", "koliko dodje",
        "kolko kosta", "kolko je", "koja je cena", "price for", "what does it cost"
      ]);

      /*
       * Prvo proveravamo konkretne usluge.
       * Tako "cena EGR-a" ne može da bude pogrešno prepoznata kao DPF.
       */

      const serviceIntents = [
        "dpf", "egr", "adblue", "stage1", "sensors", "ecu", "diagnostics", "symptoms",
        "diagnostics_process", "diagnostics_all_modules", "clear_faults", "check_engine", "limp_mode",
        "dpf_symptoms", "dpf_regeneration", "egr_symptoms", "adblue_symptoms", "nox_sensor",
        "maf_map_sensor", "lambda_sensor", "abs_sensor", "tcu_service", "ecu_cloning",
        "coding_adaptation", "immobilizer", "used_ecu"
      ];

      let matchedService = null;
      let matchedServiceScore = 0;

      INTENT_RULES
        .filter(rule => serviceIntents.includes(rule.intent))
        .forEach(rule => {
          let score = 0;

          rule.keywords.forEach(keyword => {
            const normalizedKeyword = normalizeText(keyword);

            if (normalizedKeyword && norm.includes(normalizedKeyword)) {
              score +=
                rule.weight +
                Math.min(normalizedKeyword.length / 12, 3);
            }
          });

          if (score > matchedServiceScore) {
            matchedServiceScore = score;
            matchedService = rule.intent;
          }
        });

      if (matchedService) {
        return matchedService;
      }

      /*
       * Ako korisnik pita samo "koliko košta?", koristimo prethodnu uslugu
       * iz razgovora. Ako prethodne usluge nema, prikazujemo cenovnik.
       */

      if (asksPrice) {
        return this.state.lastServiceIntent || "price";
      }

      /*
       * Prepoznajemo pozdrave, lokaciju, radno vreme, zakazivanje,
       * kontakt i ostale opšte teme.
       */

      const generalIntents = [
        "greeting",
        "thanks",
        "goodbye",
        "supported_vehicles",
        "location",
        "mobile",
        "hours",
        "booking",
        "contact",
        "help",
        "service_scope", "compatibility_check", "quote_request", "price_variation",
        "payment", "warranty", "appointment_required", "vehicle_details", "mobile_area",
        "before_visit", "urgent_fault", "emissions_note"
      ];

      let bestIntent = null;
      let highestScore = 0;

      INTENT_RULES
        .filter(rule => generalIntents.includes(rule.intent))
        .forEach(rule => {
          let score = 0;

          rule.keywords.forEach(keyword => {
            const normalizedKeyword = normalizeText(keyword);

            if (normalizedKeyword && norm.includes(normalizedKeyword)) {
              score +=
                rule.weight +
                Math.min(normalizedKeyword.length / 12, 3);
            }
          });

          if (score > highestScore) {
            highestScore = score;
            bestIntent = rule.intent;
          }
        });

      /*
       * Kratka dodatna pitanja zadržavaju temu prethodne poruke.
       */

      const followUps = [
        "a koliko",
        "koliko onda",
        "a za moj auto",
        "a moj auto",
        "i cena",
        "a cena",
        "koliko bi bilo",
        "sta jos",
        "a to",
        "moze li",
        "da li moze",
        "a za njega",
        "a koliko je",
        "koliko kosta onda"
      ];

      if (matchesAny(norm, followUps)) {
        if (this.state.lastServiceIntent) {
          return this.state.lastServiceIntent;
        }

        if (norm.includes("auto") || norm.includes("vozilo")) {
          return "supported_vehicles";
        }
      }

      if (bestIntent && highestScore >= 10) {
        return bestIntent;
      }

      if (bestIntent && highestScore >= 7) {
        return bestIntent;
      }

      return "fallback";
    }

    handleUserMessage(text) {
      this.addMessage(text, "user");

      const intent = this.analyzeQuery(text);

      this.processIntent(intent, text);
    }

    /* ======================================================================
       ODGOVORI ZA KONKRETNE CENE
       ====================================================================== */

    getSpecificPriceAnswer(intent) {
      const prices = {
        diagnostics: 2000,
        dpf: 6000,
        egr: 5000,
        adblue: 8000,
        stage1: 10000,
        sensors: 4000,
        ecu: 5000,
        symptoms: 2000
      };

      const priceAliases = {
        diagnostics_process: "diagnostics",
        diagnostics_all_modules: "diagnostics",
        clear_faults: "diagnostics",
        check_engine: "diagnostics",
        limp_mode: "diagnostics",
        dpf_symptoms: "dpf",
        dpf_regeneration: "dpf",
        egr_symptoms: "egr",
        adblue_symptoms: "adblue",
        nox_sensor: "sensors",
        maf_map_sensor: "sensors",
        lambda_sensor: "sensors",
        abs_sensor: "sensors",
        tcu_service: "ecu",
        ecu_cloning: "ecu",
        coding_adaptation: "ecu",
        immobilizer: "ecu",
        used_ecu: "ecu"
      };

      const priceIntent = priceAliases[intent] || intent;

      if (!Object.prototype.hasOwnProperty.call(prices, priceIntent)) {
        return null;
      }

      const amount = new Intl.NumberFormat(
        this.language === "en" ? "en-US" : "sr-RS"
      ).format(prices[priceIntent]);

      if (this.language === "en") {
        const names = {
          diagnostics: "computer diagnostics",
          dpf: "DPF-related service",
          egr: "EGR-related service",
          adblue: "AdBlue/SCR-related service",
          stage1: "Stage 1 tuning",
          sensors: "sensor service",
          ecu: "ECU/TCU service",
          symptoms: "initial diagnostics"
        };

        return (
          `The starting price for ${names[priceIntent]} is ${amount} RSD. ` +
          "The final price depends on the vehicle and the work required. " +
          "For a more accurate estimate, send us the make, model, year and engine."
        );
      }

      const names = {
        diagnostics: "kompjuterske dijagnostike",
        dpf: "usluge vezane za DPF",
        egr: "usluge vezane za EGR",
        adblue: "usluge vezane za AdBlue/SCR",
        stage1: "Stage 1 optimizacije",
        sensors: "usluge vezane za senzore",
        ecu: "ECU/TCU usluge",
        symptoms: "početne dijagnostike"
      };

      return (
        `Početna cena ${names[priceIntent]} je od ${amount} RSD. ` +
        "Konačna cena zavisi od vozila i potrebnog obima posla. " +
        "Za precizniju procenu pošaljite marku, model, godište i motor."
      );
    }

    /* ======================================================================
       OBRADA NAMERE I PRIKAZ ODGOVORA
       ====================================================================== */

    processIntent(intent, userText = "") {
      const dict = DICTIONARY[this.language] || DICTIONARY.sr;
      const answers = dict.answers;
      const norm = normalizeText(userText);

      this.state.lastIntent = intent;

      const serviceIntents = [
        "diagnostics", "dpf", "egr", "adblue", "stage1", "sensors", "ecu", "symptoms",
        "diagnostics_process", "diagnostics_all_modules", "clear_faults", "check_engine", "limp_mode",
        "dpf_symptoms", "dpf_regeneration", "egr_symptoms", "adblue_symptoms", "nox_sensor",
        "maf_map_sensor", "lambda_sensor", "abs_sensor", "tcu_service", "ecu_cloning",
        "coding_adaptation", "immobilizer", "used_ecu"
      ];

      if (serviceIntents.includes(intent)) {
        this.state.lastServiceIntent = intent;
      }

      const asksPrice = matchesAny(norm, [
        "cena",
        "cene",
        "cenovnik",
        "koliko kosta",
        "kolika je cena",
        "koliko naplacujete",
        "koliko izadje",
        "koliko bi kostalo",
        "price",
        "pricing",
        "cost",
        "how much",
        "cena za", "cene za", "koliko para", "koliko novca", "koliko dodje",
        "kolko kosta", "kolko je", "koja je cena", "price for", "what does it cost"
      ]);

      let responseText;

      /*
       * Ako je korisnik pitao cenu konkretne usluge,
       * odgovaramo cenom te usluge umesto opštim odgovorom.
       */

      if (asksPrice && !["price_variation", "quote_request"].includes(intent)) {
        const serviceForPrice =
          serviceIntents.includes(intent)
            ? intent
            : this.state.lastServiceIntent;

        responseText = serviceForPrice
          ? this.getSpecificPriceAnswer(serviceForPrice)
          : answers.price;
      } else if (intent === "price") {
        responseText = answers.price;
      } else {
        responseText = answers[intent] || answers.fallback;
      }

      this.addMessage(responseText, "bot");

      if (["location", "contact"].includes(intent)) {
        this.addContactCard();
      }

      const intentsWithActions = [
        "price",
        "booking",
        "mobile",
        "diagnostics",
        "dpf",
        "egr",
        "adblue",
        "stage1",
        "sensors",
        "ecu",
        "symptoms",
        "diagnostics_process", "diagnostics_all_modules", "clear_faults", "check_engine", "limp_mode",
        "dpf_symptoms", "dpf_regeneration", "egr_symptoms", "adblue_symptoms", "nox_sensor",
        "maf_map_sensor", "lambda_sensor", "abs_sensor", "tcu_service", "ecu_cloning",
        "coding_adaptation", "immobilizer", "used_ecu",
        "location",
        "supported_vehicles"
      ];

      if (intentsWithActions.includes(intent)) {
        this.addActions();
      }

      this.addQuickReplies();
    }
  }

  /* ==========================================================================
     JAVNI API — POZIV IZ DRUGIH SKRIPTI
     ========================================================================== */

  const botInstance = new ChatbotEngine();

  window.ADLChatbot = {
    setLanguage(lang) {
      botInstance.applyLanguage(lang, true);
    },

    open() {
      botInstance.openChat();
    },

    close() {
      botInstance.closeChat();
    }
  };
})();