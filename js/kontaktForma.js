(() => {
  const form = document.querySelector('.contact-form form');
  if (!form) return;

  // ---------- Tekstovi (SR / EN) ----------
  const T = {
    sr: {
      ime_req: 'Unesite ime i prezime.',
      ime_short: 'Ime i prezime mora imati bar 2 slova.',
      telefon_req: 'Unesite broj telefona.',
      telefon_bad: 'Broj telefona nije ispravan (npr. 064 123 4567).',
      email_req: 'Unesite email adresu.',
      email_bad: 'Email adresa nije ispravna (npr. ime@primer.com).',
      vozilo_req: 'Unesite marku i model vozila.',
      poruka_req: 'Opišite problem sa vozilom.',
      poruka_short: 'Opis je prekratak, napišite bar 10 karaktera.',
      summary: 'Popunite ispravno polja označena crvenom bojom.',
      ok: 'Poruka je uspešno poslata! Kontaktiraćemo Vas uskoro.',
      fail: 'Došlo je do greške pri slanju. Pokušajte ponovo ili nas pozovite.'
    },
    en: {
      ime_req: 'Please enter your full name.',
      ime_short: 'Name must be at least 2 characters.',
      telefon_req: 'Please enter your phone number.',
      telefon_bad: 'Phone number is not valid (e.g. 064 123 4567).',
      email_req: 'Please enter your email address.',
      email_bad: 'Email address is not valid (e.g. name@example.com).',
      vozilo_req: 'Please enter the vehicle make and model.',
      poruka_req: 'Please describe the problem.',
      poruka_short: 'Description is too short, please write at least 10 characters.',
      summary: 'Please correct the fields highlighted in red.',
      ok: 'Message sent successfully! We will contact you soon.',
      fail: 'Something went wrong while sending. Please try again or call us.'
    }
  };
  const getLang = () => {
    try { return localStorage.getItem('adl-language') === 'en' ? 'en' : 'sr'; }
    catch (e) { return 'sr'; }
  };
  const tr = key => T[getLang()][key];

  // ---------- Stil za poruke o greškama ----------
  const style = document.createElement('style');
  style.textContent = `
    .field-error{display:none;margin:6px 0 0;font-size:.85rem;line-height:1.35;color:#ff8a8f;font-weight:600}
    .field-error.is-visible{display:block}
    .field input[aria-invalid="true"],.field textarea[aria-invalid="true"]{border-color:#e3212b!important;box-shadow:0 0 0 1px #e3212b}
  `;
  document.head.appendChild(style);

  // ---------- Pravila validacije ----------
  const rules = {
    ime: v => !v ? 'ime_req' : v.length < 2 ? 'ime_short' : null,
    telefon: v => !v ? 'telefon_req' : (!/^[+()\d][\d\s\-/().]{4,}$/.test(v) || v.replace(/\D/g, '').length < 6) ? 'telefon_bad' : null,
    email: v => !v ? 'email_req' : !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v) ? 'email_bad' : null,
    vozilo: v => !v ? 'vozilo_req' : null,
    poruka: v => !v ? 'poruka_req' : v.length < 10 ? 'poruka_short' : null
  };
  const names = Object.keys(rules);
  const state = {}; // name -> trenutni ključ greške (ili null)

  const fieldEl = name => form.elements[name];
  const errEl = name => {
    let el = document.getElementById('err-' + name);
    if (!el) {
      el = document.createElement('p');
      el.className = 'field-error';
      el.id = 'err-' + name;
      el.setAttribute('role', 'alert');
      const input = fieldEl(name);
      (input.closest('.field') || input.parentNode).appendChild(el);
      input.setAttribute('aria-describedby', el.id);
    }
    return el;
  };

  const render = name => {
    const input = fieldEl(name);
    if (!input) return;
    const el = errEl(name);
    const key = state[name];
    if (key) {
      el.textContent = tr(key);
      el.classList.add('is-visible');
      input.setAttribute('aria-invalid', 'true');
    } else {
      el.textContent = '';
      el.classList.remove('is-visible');
      input.removeAttribute('aria-invalid');
    }
  };

  const check = name => {
    const input = fieldEl(name);
    if (!input) return null;
    state[name] = rules[name](input.value.trim());
    render(name);
    return state[name];
  };

  // ---------- Poruka ispod forme ----------
  const msg = document.getElementById('form-message');
  let msgKey = null, msgKind = '', msgTimer;
  const say = (key, kind, autoHide) => {
    if (!msg) return;
    msgKey = key; msgKind = kind;
    msg.textContent = tr(key);
    msg.className = 'form-message ' + kind;
    clearTimeout(msgTimer);
    if (autoHide) msgTimer = setTimeout(clearMsg, 6000);
  };
  const clearMsg = () => {
    if (!msg) return;
    msgKey = null; msgKind = '';
    msg.textContent = '';
    msg.className = 'form-message';
  };

  // ---------- Događaji ----------
  let submitted = false; // posle prvog pokušaja, greške se ažuriraju dok korisnik kuca
  names.forEach(n => {
    const input = fieldEl(n);
    if (!input) return;
    input.addEventListener('blur', () => { if (input.value.trim() || submitted) check(n); });
    input.addEventListener('input', () => { if (submitted || state[n]) check(n); });
  });

  // Promena jezika: osveži već prikazane poruke
  document.addEventListener('change', e => {
    if (!e.target.closest || !e.target.closest('.language-switch')) return;
    setTimeout(() => {
      names.forEach(render);
      if (msgKey) { msg.textContent = tr(msgKey); }
    }, 0);
  });

  const btn = form.querySelector('button[type="submit"]');
  const sendMail = () => {
    if (typeof emailjs === 'undefined') { say('fail', 'error', true); return Promise.resolve(); }
    emailjs.init('glBDXl_LGa8ucXVqH');
    return emailjs.sendForm('service_ya1qodf', 'template_o5yr9g5', form)
      .then(() => {
        say('ok', 'success', true);
        form.reset();
        submitted = false;
        names.forEach(n => { state[n] = null; render(n); });
      })
      .catch(err => { console.error('EmailJS greška:', err); say('fail', 'error', true); });
  };

  form.addEventListener('submit', e => {
    e.preventDefault();
    submitted = true;
    const invalid = names.filter(n => check(n));
    if (invalid.length) {
      say('summary', 'error', false);
      fieldEl(invalid[0]).focus();
      return;
    }
    clearMsg();
    btn.disabled = true;
    sendMail().finally(() => { btn.disabled = false; });
  });
})();
