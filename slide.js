let index = 0;
const slides = document.querySelector('.slides');
const totalSlides = document.querySelectorAll('.slide').length;

function showSlide(i) {
  if (i < 0) index = totalSlides - 1;
  else if (i >= totalSlides) index = 0;
  else index = i;
  slides.style.transform = `translateX(-${index * 100}%)`;
}

// Autoplay
let autoSlide = setInterval(() => {
  showSlide(index + 1);
}, 3000);

// Tombol navigasi
document.querySelector('.prev').addEventListener('click', () => {
  showSlide(index - 1);
  resetAutoSlide();
});

document.querySelector('.next').addEventListener('click', () => {
  showSlide(index + 1);
  resetAutoSlide();
});

// Reset interval saat tombol ditekan
function resetAutoSlide() {
  clearInterval(autoSlide);
  autoSlide = setInterval(() => {
    showSlide(index + 1);
  }, 3000);
}
