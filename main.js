// HEADER SECTION

const burger = document.querySelector(".header__burger")
const navbar = document.querySelector(".navbar__list")
const links = document.querySelectorAll(".navbar__link")
const bars = document.querySelectorAll(".bar")



burger.addEventListener('click', () => {
    // toggle navlist
    navbar.classList.toggle("navbar__list--active");

    //animate links
    links.forEach((link) => {
        link.classList.toggle("navbar__link--active")
    });

    //animate burger
    bars.forEach((bar) => {
        bar.classList.toggle("bar--active")
    })
})