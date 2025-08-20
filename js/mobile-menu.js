const mobileMenu = document.querySelector(".mobile");
const menuBtnOpen = document.querySelector(".menu-btn-open");
const menuBtnClose = document.querySelector(".menu-btn-close");

const toggleMenu = () => mobileMenu.classList.toggle("is-open");

menuBtnOpen.addEventListener("click", toggleMenu);
menuBtnClose.addEventListener("click", toggleMenu);
