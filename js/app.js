
console.log("app.js loaded at", new Date().toISOString());
console.log("Page URL:", window.location.href);

//hero transition of the background photos
const images = ["3.jpg", "bmw.jpg", "cigular.jpg"];
let index = 0;
const hero = document.querySelector(".hero");

function changeBackground() {
    index = (index + 1) % images.length;
    hero.style.backgroundImage = `url('${images[index]}')`;
    hero.style.opacity = 0.5; // Добавя ефект
    setTimeout(() => hero.style.opacity = 1, 500);
}

setInterval(changeBackground, 3000);