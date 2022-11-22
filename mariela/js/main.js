"use strict"

document.addEventListener("DOMContentLoaded", () => {

    const burgerBtn = document.querySelector(".menu__btn");
    const burgerMenu = document.querySelector(".header__list");

    function toggleMenu() {
        burgerBtn.classList.toggle("active");
        burgerMenu.classList.toggle("active");
        document.body.classList.toggle("active");
    }

    burgerBtn.addEventListener("click", () => {
        toggleMenu();
    });

    burgerMenu.addEventListener("click", (event) => {
        burgerBtn.classList.remove("active");
        burgerMenu.classList.remove("active");
        document.body.classList.remove("active");
    });
});