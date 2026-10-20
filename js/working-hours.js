document.addEventListener('DOMContentLoaded', () => {
  const OPEN = { weekday: [15 * 60, 20 * 60], saturday: [9 * 60, 12 * 60] };
  const status = document.querySelector('.status[data-working-hours]');
  const update = () => {
    const now = new Date(), day = now.getDay(), m = now.getHours() * 60 + now.getMinutes();
    document.querySelectorAll('.hours tr[data-days]').forEach(tr =>
      tr.classList.toggle('is-today', tr.dataset.days.split(',').includes(String(day))));
    if (!status) return;
    const isOpen = (day >= 1 && day <= 5 && m >= OPEN.weekday[0] && m < OPEN.weekday[1]) ||
                   (day === 6 && m >= OPEN.saturday[0] && m < OPEN.saturday[1]);
    status.classList.toggle('is-open', isOpen);
    status.classList.toggle('is-closed', !isOpen);
    status.querySelector('.status-text').textContent =
      isOpen ? 'Otvoreno – Pozovite odmah' : 'Van radnog vremena – Pošaljite upit';
  };
  update();
  setInterval(update, 30000);
});
