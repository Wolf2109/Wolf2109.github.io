(function () {
  emailjs.init('glBDXl_LGa8ucXVqH'); // ← ovde ide tvoj Public Key
})();

const contactForm = document.querySelector('.contact-form form');
const formMessage = document.createElement('div'); // kreiramo element za poruku
formMessage.classList.add('form-message');
contactForm.appendChild(formMessage); // dodajemo poruku odmah ispod forme

if (contactForm) {
  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();

    emailjs.sendForm(
      'service_ya1qodf',
      'template_o5yr9g5', // tvoj template ID
      this
    ).then(() => {
      // Prikaz uspešne poruke
      formMessage.textContent = "Mejl je uspešno poslat! Kontaktiraćemo Vas uskoro.";
      formMessage.classList.remove('error');
      formMessage.classList.add('success');

      contactForm.reset();

      // Poruku uklonimo nakon 5 sekundi
      setTimeout(() => {
        formMessage.textContent = '';
        formMessage.classList.remove('success', 'error');
      }, 5000);

    }).catch((error) => {
      console.error('EmailJS greška:', error);

      // Prikaz poruke o grešci
      formMessage.textContent = "Došlo je do greške. Pokušajte ponovo.";
      formMessage.classList.remove('success');
      formMessage.classList.add('error');

      setTimeout(() => {
        formMessage.textContent = '';
        formMessage.classList.remove('success', 'error');
      }, 5000);
    });
  });
}
