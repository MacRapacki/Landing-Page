// HEADER SECTION //

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


// CONTACT SECTION //  

const submitFormBtn = document.querySelector(".contact__btn")

submitFormBtn.addEventListener('click', (e) => {
    e.preventDefault();
})

// BACK TO TOP BUTTON //

const goTopBtn = document.querySelector(".back__to__top ")

goTopBtn.addEventListener('click', () => {
    document.documentElement.scrollTop = 0;
})

window.onscroll = () => {
    const currentPos = window.scrollY;
    if (currentPos > 800) {
        goTopBtn.classList.add("back__to__top--active")
    } else {
        goTopBtn.classList.remove("back__to__top--active")
    }
}