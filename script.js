let lastScrollY = window.scrollY;
const navbar = document.getElementById('navbar-desktop');

window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        if (window.scrollY > lastScrollY) {
            navbar.style.top = '0';
        }
    } else {
        navbar.style.top = '-100px';
    }
    lastScrollY = window.scrollY;
});
