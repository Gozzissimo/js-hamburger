// 1. quando si clicca su "a.fas fa-bars" bisogna aggiungere la classe "active" ad hamburger menu

const hamburgerButton = document.querySelector('.fa-bars');

const hamburgerMenu = document.querySelector('.hamburger-menu');

hamburgerButton.addEventListener('click', function () {
    hamburgerMenu.classList.add('active');
});

// 2. quando si clicca su "a.close" bisogna togliere la classe active

const closeButton = document.querySelector('.close');

closeButton.addEventListener('click', function () {
    hamburgerMenu.classList.remove('active');
});
