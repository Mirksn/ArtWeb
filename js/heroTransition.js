// Избиране на елемента с клас 'hero'
const heroElement = document.querySelector('.hero');

// Масив с изображенията
const images = [
  '3.jpg',
  'bmw.jpg',
  'cigular.jpg'
];

// Променяне на фоновото изображение
let currentImageIndex = 0;
function changeBackground() {
  heroElement.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url('${images[currentImageIndex]}')`;
  currentImageIndex = (currentImageIndex + 1) % images.length; // Обръща се след последното изображение
}

// Смяна на изображението на всеки 3 секунди
setInterval(changeBackground, 3000);
