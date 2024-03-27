const navbar = document.querySelector(".navbar");
const menuButoon = document.querySelector(".menu-button");

menuButoon.addEventListener('click', () => {
    navbar.classList.toggle('show-menu');
});