document.addEventListener('DOMContentLoaded', () => {
    // Menü betöltése
    fetch('/menu.html')
        .then(response => response.text())
        .then(html => {
            const menu = document.getElementById('menu');
            if (menu) {
                menu.innerHTML = html;
            }

            // Ha az oldal URL-jében már van hash, akkor görgetés
            if (window.location.hash) {
                setTimeout(() => {
                    const target = document.querySelector(window.location.hash);
                    if (target) {
                        const top = target.getBoundingClientRect().top + window.scrollY - 100;
                        window.scrollTo({ top, behavior: 'smooth' });
                    }
                }, 100);
            }
        })
        .catch(err => console.error('Menü betöltési hiba:', err));
});

// Hash navigáció működése Bootstrap menü mellett
document.addEventListener('click', function(e) {
    const link = e.target.closest('a[href*="#"]');
    if (!link) return;

    const href = link.getAttribute('href');
    const url = new URL(href, window.location.href);

    // Csak akkor kezeljük, ha ugyanarra az oldalra mutat
    if (url.pathname === window.location.pathname) {
        e.preventDefault();
        const targetId = url.hash.substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            history.pushState(null, '', '#' + targetId);
            const top = targetElement.getBoundingClientRect().top + window.scrollY - 100;
            window.scrollTo({ top, behavior: 'smooth' });
        }

        // Menü bezárása mobilon
        const navbar = document.querySelector('.navbar-collapse.show');
        if (navbar) {
            new bootstrap.Collapse(navbar, { toggle: true }).hide();
        }
    }
});