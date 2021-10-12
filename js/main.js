
const hamburger = document.querySelector("div > a");

//Nel momento in cui si clicca sull'hamburger questo si aprirà
hamburger.addEventListener(`click`, function () {
    document.getElementsByClassName("hamburger-menu")[0].style.display = "block";
})




