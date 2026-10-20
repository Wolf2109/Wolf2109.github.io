// Traka "Poslednji radovi" čita najnovijih 10 stavki iz galerija.html.
// Nova slika dodata na kraj galerija.html automatski se pojavljuje i ovde.
document.addEventListener('DOMContentLoaded', async () => {
  const list = document.getElementById('latestWorks');
  const wrap = list && list.closest('section');
  if (wrap) {
    wrap.querySelectorAll('.scroll-btns button').forEach(b => b.addEventListener('click', () => {
      list.scrollBy({ left: Number(b.dataset.dir) * 280, behavior: 'smooth' });
    }));
  }
  if (!list) return;
  try {
    const res = await fetch('galerija.html', { cache: 'no-store' });
    if (!res.ok) throw new Error(res.status);
    const doc = new DOMParser().parseFromString(await res.text(), 'text/html');
    const items = [...doc.querySelectorAll('.shot')].reverse().slice(0, 10);
    if (!items.length) return;
    const frag = document.createDocumentFragment();
    items.forEach(f => {
      const img = f.querySelector('img');
      const li = document.createElement('li');
      li.className = 'work';
      const a = document.createElement('a'); a.href = 'galerija.html';
      const im = document.createElement('img');
      im.src = img.getAttribute('src'); im.alt = img.alt; im.width = 560; im.height = 746; im.loading = 'lazy';
      const b = document.createElement('b'); b.textContent = f.querySelector('figcaption b').textContent;
      const s = document.createElement('span'); s.textContent = f.querySelector('figcaption span').textContent;
      a.append(im, b, s); li.append(a); frag.append(li);
    });
    list.replaceChildren(frag);
  } catch (e) { /* ostaje statična lista iz index.html */ }
});
