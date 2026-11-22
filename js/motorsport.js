/* Shared, non-blocking UI motion and navigation. */
(() => {
    const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
    const header = document.querySelector('.site-header');
    const bar = document.createElement('span');
    bar.className = 'scroll-progress';
    bar.setAttribute('aria-hidden', 'true');
    if (header) header.append(bar);
    const top = document.createElement('button');
    top.type = 'button';
    top.className = 'top-button';
    top.textContent = '↑';
    top.setAttribute('aria-label', document.documentElement.lang === 'en' ? 'Back to top' : 'Nazad na vrh');
    top.addEventListener('click', () => window.scrollTo({
        top: 0,
        behavior: reduced ? 'instant' : 'smooth'
    }));
    document.body.append(top);
    let pending = false;
    const update = () => {
        const y = window.scrollY,
            max = document.documentElement.scrollHeight - window.innerHeight;
        bar.style.transform = `scaleX(${max>0?Math.min(y/max,1):0})`;
        header?.classList.toggle('scrolled', y > 12);
        top.classList.toggle('is-visible', y > 650);
        pending = false;
    };
    window.addEventListener('scroll', () => {
        if (!pending) {
            pending = true;
            requestAnimationFrame(update);
        }
    }, {
        passive: true
    });
    window.addEventListener('resize', update, {
        passive: true
    });
    update();
    new MutationObserver(() => top.setAttribute('aria-label', document.documentElement.lang === 'en' ? 'Back to top' : 'Nazad na vrh')).observe(document.documentElement, {
        attributes: true,
        attributeFilter: ['lang']
    });
    if ('IntersectionObserver' in window && !reduced) {
        document.documentElement.classList.add('motion-ready');
        const items = document.querySelectorAll('.feature-tile,.step,.svc-article,.why .dl>div,.contact-split .card,.about-photo,.reach img,.page-head + .section .card,.price-table,.embed,.faq details');
        const observer = new IntersectionObserver(entries => entries.forEach(e => {
            if (e.isIntersecting) {
                e.target.classList.add('in-view');
                observer.unobserve(e.target);
            }
        }), {
            threshold: .06
        });
        items.forEach((el, i) => {
            el.classList.add('reveal');
            el.style.setProperty('--delay', `${(i%3)*65}ms`);
            observer.observe(el);
        });
        const countObserver = new IntersectionObserver(entries => entries.forEach(e => {
            if (!e.isIntersecting) return;
            const el = e.target,
                n = +el.dataset.count,
                end = el.textContent,
                start = performance.now();
            countObserver.unobserve(el);

            function tick(t) {
                const p = Math.min(1, (t - start) / 750);
                el.textContent = p === 1 ? end : String(Math.round(n * (1 - Math.pow(1 - p, 3)))).padStart(end.length, '0');
                if (p < 1) requestAnimationFrame(tick);
            }
            requestAnimationFrame(tick);
        }), {
            threshold: .5
        });
        document.querySelectorAll('[data-count]').forEach(el => countObserver.observe(el));
    }
    const toc = [...document.querySelectorAll('.toc a')];
    if (toc.length && 'IntersectionObserver' in window) {
        const obs = new IntersectionObserver(entries => entries.forEach(e => {
            if (e.isIntersecting) toc.forEach(a => a.classList.toggle('is-active', a.hash === '#' + e.target.id));
        }), {
            rootMargin: '-100px 0px -55% 0px'
        });
        document.querySelectorAll('.svc-article').forEach(el => obs.observe(el));
    }
})();