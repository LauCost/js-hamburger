//Selezioniamo la classe da dovre cliccare
var hamburger = document.querySelector("div > a");

//Selezioniamo la classe a cui cambiarà la proprietà display
var apriChiudi = document.querySelector(".hamburger-menu");

//Nel momento in cui si clicca sull'hamburger il menu si aprirà
hamburger.addEventListener(`click`, function () {
    apriChiudi.style.display = "block";
})


//Selezioniamo la classe da dover cliccare
var chiudi = document.querySelector(".close")

//Nel momento in cui si clicca sulla x il menu verrà chiuso
chiudi.addEventListener(`click`, function () {
    apriChiudi.style.display = "none";
})


