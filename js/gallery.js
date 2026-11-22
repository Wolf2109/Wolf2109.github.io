(() => {
  const grid = document.getElementById('gallery');
  if (!grid) return;
  const PAGE = 12;
  // HTML je poređan od najstarije ka najnovijoj; prikaz je od najnovije.
  const shots = [...grid.querySelectorAll('.shot')].reverse();
  shots.forEach(s => grid.append(s));
  const chips = [...document.querySelectorAll('.chip')];
  const more = document.getElementById('more');
  let filter = 'all', shown = PAGE;

  const matching = () => shots.filter(s => filter === 'all' || s.dataset.category === filter);
  
  const render = () => {
    const list = matching();
    shots.forEach(s => { s.hidden = true; });
    list.slice(0, shown).forEach(s => { s.hidden = false; });
    
    // Pronađi kontejner .more ili samo dugme
    const moreContainer = document.querySelector('.more') || more;
    if (moreContainer) {
      if (shown >= list.length) {
        moreContainer.style.setProperty('display', 'none', 'important');
      } else {
        moreContainer.style.removeProperty('display');
      }
    }
  };

  chips.forEach(c => {
    const n = shots.filter(s => c.dataset.filter === 'all' || s.dataset.category === c.dataset.filter).length;
    const countEl = c.querySelector('.count');
    if (countEl) countEl.textContent = '(' + n + ')';
    
    c.addEventListener('click', () => {
      chips.forEach(x => x.setAttribute('aria-pressed', String(x === c)));
      filter = c.dataset.filter; 
      shown = PAGE; 
      render();
    });
  });

  if (more) {
    more.addEventListener('click', () => { 
      shown += PAGE; 
      render(); 
    });
  }

  grid.querySelectorAll('img').forEach(img => img.addEventListener('error', () => {
    if (img.dataset.full && img.src.indexOf(img.dataset.full) === -1) img.src = img.dataset.full;
  }));
  
  render();

  // Lightbox
  const lb = document.getElementById('lightbox');
  if (!lb) return;
  const lbImg = lb.querySelector('.lb-stage img');
  const cap = lb.querySelector('.lb-cap');
  let idx = 0, current = [];

  const cache = new Map();
  const fullOf = s => { const i = s.querySelector('img'); return i.dataset.full || i.src; };
  const preload = src => {
    if (!cache.has(src)) {
      const im = new Image();
      im.decoding = 'async';
      im.src = src;
      cache.set(src, im);
    }
    return cache.get(src);
  };

  const show = i => {
    const n = current.length;
    idx = (i + n) % n;
    const my = idx;
    const s = current[idx], img = s.querySelector('img');
    const full = fullOf(s);
    const im = preload(full);

    lbImg.alt = img.alt;
    if (im.complete && im.naturalWidth) {
      lbImg.src = full;                         // već u kešu, prikaz je trenutan
    } else {
      lbImg.src = img.currentSrc || img.src;    // odmah prikaži malu sliku
      im.addEventListener('load', () => { if (idx === my) lbImg.src = full; }, { once: true });
    }

    cap.querySelector('b').textContent = s.querySelector('figcaption b').textContent;
    cap.querySelector('span').textContent = s.querySelector('figcaption span').textContent;
    cap.querySelector('small').textContent = (idx + 1) + ' / ' + n;

    // učitaj unapred sledeću i prethodnu
    preload(fullOf(current[(idx + 1) % n]));
    preload(fullOf(current[(idx - 1 + n) % n]));
  };

  const open = shot => {
    current = matching();
    show(current.indexOf(shot));
    lb.showModal();
    document.body.style.overflow = 'hidden';
  };

  const close = () => lb.close();
  lb.addEventListener('close', () => { document.body.style.overflow = ''; });
  
  grid.addEventListener('click', e => {
    const b = e.target.closest('.shot button');
    if (b) open(b.closest('.shot'));
  });

  lb.querySelector('.lb-close').addEventListener('click', close);
  lb.querySelector('.lb-prev').addEventListener('click', () => show(idx - 1));
  lb.querySelector('.lb-next').addEventListener('click', () => show(idx + 1));
  lb.addEventListener('click', e => { if (e.target === lb || e.target.classList.contains('lb-stage')) close(); });
  
  lb.addEventListener('keydown', e => {
    if (e.key === 'ArrowRight') show(idx + 1);
    if (e.key === 'ArrowLeft') show(idx - 1);
  });

  let x0 = null;
  lb.addEventListener('touchstart', e => { x0 = e.changedTouches[0].screenX; }, { passive: true });
  lb.addEventListener('touchend', e => {
    if (x0 === null) return;
    const d = x0 - e.changedTouches[0].screenX;
    if (Math.abs(d) > 50) show(idx + (d > 0 ? 1 : -1));
    x0 = null;
  });
})();
