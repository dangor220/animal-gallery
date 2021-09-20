const slides = document.querySelectorAll('.slide');
let num = (Math.round(Math.random() * (slides.length - 1)));

slides[num].classList.add('active');

slides.forEach((slide) => {
  slide.addEventListener('click', () => {
    removeClassActive();
    slide.classList.add('active');
  })
})

function removeClassActive() {
  slides.forEach((slide) => {
    slide.classList.remove('active');
  })
}