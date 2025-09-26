const sections = document.querySelectorAll("section");

// Function to reveal sections
function revealSections() {
  sections.forEach(section => {
    const top = section.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      section.classList.add("visible");
    }
  });
}

// Run on page load
window.addEventListener("DOMContentLoaded", revealSections);

// Run on scroll
window.addEventListener("scroll", revealSections);
