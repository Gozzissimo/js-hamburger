// 1. quando si clicca su "a.fas fa-bars" bisogna aggiungere la classe "active" ad hamburger menu

const hamburgerButton = document.querySelector('a .fa-bars');

const hamburgerMenu = document.querySelector('.hamburger-menu');

hamburgerButton.addEventListener('click', function () {
    hamburgerMenu.classList.add('active');
});

// 2. quando si clicca su "a.close" bisogna togliere la classe active ad hamburger menu

const closeButton = document.querySelector('a.close');

closeButton.addEventListener('click', function () {
    hamburgerMenu.classList.remove('active');
});
