// Scroll reveal
const sections = document.querySelectorAll('section');
function revealSections() {
  sections.forEach(section => {
    const top = section.getBoundingClientRect().top;
    if(top < window.innerHeight - 100) {
      section.classList.add('visible');
    }
  });
}
window.addEventListener('scroll', revealSections);
window.addEventListener('DOMContentLoaded', revealSections);

// Slider functionality
let slides = document.querySelectorAll('.slide');
let current = 0;

document.querySelector('.next').addEventListener('click', () => {
  slides[current].classList.remove('active');
  current = (current+1) % slides.length;
  slides[current].classList.add('active');
});

document.querySelector('.prev').addEventListener('click', () => {
  slides[current].classList.remove('active');
  current = (current-1+slides.length) % slides.length;
  slides[current].classList.add('active');
});
