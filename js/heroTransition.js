const heroElement = document.querySelector(".hero");

const images = ["/img/3.jpg", "/img/bmw.jpg", "/img/cigular.jpg"];

let currentImageIndex = 0;
function changeBackground() {
  heroElement.style.backgroundImage = `url('${images[currentImageIndex]}')`;

  currentImageIndex = (currentImageIndex + 1) % images.length;
}

setInterval(changeBackground, 5000);
