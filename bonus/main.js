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


// BONUS

// Pulsante iscrizione
const buttonSubscribe = document.querySelector('a.cta');

buttonSubscribe.addEventListener('click', function () {
    buttonSubscribe.classList.add('subscribed');
    buttonSubscribe.innerHTML = 'Iscritto!';

    const buttonSubscribeClass = document.querySelector('a.cta').className;
    console.log(buttonSubscribeClass);

    if (buttonSubscribeClass == "subscribed") {
        buttonSubscribe.classList.remove('subscribed');
    } else {
        // buttonSubscribeClass.classList.add('subscribed');

        // NON FUNZIONA, CHIEDO INFO
    }
});





