(() => {
  const header = document.querySelector('.site-header');
  const btn = document.querySelector('.menu-toggle');
  if (!header || !btn) return;
  const set = open => {
    header.classList.toggle('open', open);
    btn.setAttribute('aria-expanded', String(open));
  };
  btn.addEventListener('click', () => set(!header.classList.contains('open')));
  header.querySelectorAll('.nav-links a').forEach(a => a.addEventListener('click', () => set(false)));
  document.addEventListener('keydown', e => { if (e.key === 'Escape') set(false); });
})();
