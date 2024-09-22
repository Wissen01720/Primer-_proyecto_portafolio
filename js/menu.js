document.addEventListener('DOMContentLoaded', () => {
    const mainMenuIcon = document.getElementById('menu-icon');
    const mainNavLinks = document.getElementById('nav-links');

    // Toggle del menú hamburguesa
    mainMenuIcon.addEventListener('click', () => {
        mainNavLinks.classList.toggle('show');
    });
});