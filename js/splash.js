document.addEventListener('DOMContentLoaded', () => {
    const splash = document.getElementById('splash-screen');
    if (!splash) return;
    let shown = false;
    try {
        shown = sessionStorage.getItem('splashShown') === 'true';
        sessionStorage.setItem('splashShown', 'true');
    } catch (_) {}
    if (shown || matchMedia('(prefers-reduced-motion: reduce)').matches) {
        splash.remove();
        return;
    }
    setTimeout(() => {
        splash.classList.add('hide');
        setTimeout(() => splash.remove(), 650);
    }, 650);
});