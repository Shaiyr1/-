document.addEventListener('DOMContentLoaded', function() {
    const menu = document.querySelector('.menu');
    const nav = document.querySelector('.header__ul');

    menu.addEventListener('click', function() {
        nav.classList.toggle('header__ul--open');
    });
});