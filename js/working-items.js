document.addEventListener("DOMContentLoaded", async () => {

    const workTrack = document.getElementById("latestWorkTrack");

    // Ako sekcija ne postoji na stranici, prekidamo
    if (!workTrack) return;

    try {

        // Učitavamo galerija.html
        const response = await fetch("galerija.html", {
            cache: "no-store"
        });

        if (!response.ok) {
            throw new Error(`Greška pri učitavanju galerije: ${response.status}`);
        }

        const html = await response.text();

        // Pretvaramo galerija.html u DOM
        const parser = new DOMParser();
        const galleryDocument = parser.parseFromString(html, "text/html");

        // Uzimamo sve stavke iz galerije
        const galleryItems = galleryDocument.querySelectorAll(".galerija-item");

        // Iz svake stavke uzimamo tekst:
        // npr. "BMW 116d F20 | Stage 1"
        const latestWorks = [];

        galleryItems.forEach(item => {

            const textElement = item.querySelector(".galerija-hover-text");

            if (!textElement) return;

            const text = textElement.textContent.trim();

            if (text) {
                latestWorks.push(text);
            }

        });

        // Samo prvih 10
        const latestTen = latestWorks.slice(0, 10);

        // Ako nema podataka
        if (!latestTen.length) {
            console.warn("Nisu pronađeni radovi u galerija.html");
            return;
        }

        // Pravi jednu grupu stavki
        function createWorkGroup() {

            const fragment = document.createDocumentFragment();

            latestTen.forEach((text, index) => {

                const parts = text.split("|");

                const vehicle = parts[0].trim();
                const service = parts.slice(1).join("|").trim();

                const item = document.createElement("div");
                item.className = "work-item";

                // Broj
                const number = document.createElement("span");
                number.className = "work-number";
                number.textContent = String(index + 1).padStart(2, "0");

                // Tekst
                const workText = document.createElement("span");
                workText.className = "work-text";

                workText.appendChild(
                    document.createTextNode(vehicle)
                );

                // Usluga
                if (service) {

                    const serviceElement = document.createElement("b");

                    serviceElement.textContent = service;

                    workText.appendChild(serviceElement);
                }

                item.appendChild(number);
                item.appendChild(workText);

                fragment.appendChild(item);
            });

            return fragment;
        }

        // Očistimo postojeći sadržaj
        workTrack.replaceChildren();

        // Prva grupa
        workTrack.appendChild(createWorkGroup());

        // Druga grupa za beskonačnu traku
        workTrack.appendChild(createWorkGroup());

        console.log(
            `Poslednji radovi: učitano ${latestTen.length} stavki iz galerija.html`
        );

    } catch (error) {

        console.error(
            "Greška kod učitavanja poslednjih radova:",
            error
        );

    }

});