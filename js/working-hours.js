document.addEventListener("DOMContentLoaded", () => {
  const status = document.querySelector(".status[data-working-hours]");
  if (!status) return;

  const updateStatus = () => {
    const now = new Date();
    const day = now.getDay(); // 0 = nedelja, 6 = subota
    const minutes = now.getHours() * 60 + now.getMinutes();

    const weekdayOpen = 15 * 60;
    const weekdayClose = 20 * 60;
    const saturdayOpen = 9 * 60;
    const saturdayClose = 12 * 60;

    const isOpen =
      (day >= 1 && day <= 5 && minutes >= weekdayOpen && minutes < weekdayClose) ||
      (day === 6 && minutes >= saturdayOpen && minutes < saturdayClose);

    status.classList.toggle("is-open", isOpen);
    status.classList.toggle("is-closed", !isOpen);
    status.querySelector(".status-text").textContent =
      isOpen ? "Otvoreno – Pozovite odmah" : "Van radnog vremena – Pošaljite upit";
  };

  updateStatus();
  setInterval(updateStatus, 30000);
});
