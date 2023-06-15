const burger = document.querySelector('.nav__burger');
const nav = document.querySelector('.nav__list');
const navLogo = document.querySelector('.nav__logo');


function toggleNav() {
    burger.classList.toggle('nav__burger');
    burger.classList.toggle('nav__burger--close');
    nav.classList.toggle('nav__list--active');
}

burger.addEventListener('click', function () {
    toggleNav();
});


navLogo.addEventListener('click', function (){
    window.location.href = "../index.html"
})