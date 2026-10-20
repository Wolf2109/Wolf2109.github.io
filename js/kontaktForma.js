(() => {
  const form = document.querySelector('.contact-form form');
  if (!form || typeof emailjs === 'undefined') return;
  emailjs.init('glBDXl_LGa8ucXVqH');
  const msg = document.getElementById('form-message');
  const btn = form.querySelector('button[type="submit"]');
  const say = (text, kind) => {
    msg.textContent = text;
    msg.className = 'form-message ' + kind;
    setTimeout(() => { msg.textContent = ''; msg.className = 'form-message'; }, 6000);
  };
  form.addEventListener('submit', e => {
    e.preventDefault();
    if (!form.checkValidity()) { form.reportValidity(); return; }
    btn.disabled = true;
    emailjs.sendForm('service_ya1qodf', 'template_o5yr9g5', form)
      .then(() => { say('Mejl je uspešno poslat! Kontaktiraćemo Vas uskoro.', 'success'); form.reset(); })
      .catch(err => { console.error('EmailJS greška:', err); say('Došlo je do greške. Pokušajte ponovo.', 'error'); })
      .finally(() => { btn.disabled = false; });
  });
})();
