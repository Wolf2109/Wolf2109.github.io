(() => {
  const box = document.getElementById('lamps');
  if (!box) return;
  const lamps = [...box.querySelectorAll('.lamp')];
  const panels = [...document.querySelectorAll('.readout')];
  const select = key => {
    lamps.forEach(l => l.setAttribute('aria-pressed', String(l.dataset.lamp === key)));
    panels.forEach(p => p.classList.toggle('is-active', p.id === 'panel-' + key));
  };
  lamps.forEach(l => l.addEventListener('click', () => select(l.dataset.lamp)));
  // Provera lampica pri paljenju: sve lampice jednom zasvetle, kao pri ukljucivanju kontakta.
  if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    box.classList.add('is-checking');
    setTimeout(() => box.classList.remove('is-checking'), 1700);
  }
})();
