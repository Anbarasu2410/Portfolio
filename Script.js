// Smooth scroll for all anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if(target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Scroll reveal for sections
document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('section');
  
  const revealSections = () => {
    sections.forEach(section => {
      const top = section.getBoundingClientRect().top;
      if(top < window.innerHeight - 100) {
        section.classList.add('visible');
      }
    });
  };
  
  // Initial check
  revealSections();

  // Run on scroll
  window.addEventListener('scroll', revealSections);
});
