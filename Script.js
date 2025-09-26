// Hamburger Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Smooth Scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
      // Close mobile menu after click
      if (navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
      }
    }
  });
});

// Contact Form Submission with Formspree
const form = document.getElementById('contact-form');
const formMessage = document.getElementById('form-message');

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const formData = new FormData(form);

  try {
    const response = await fetch(form.action, {
      method: form.method,
      body: formData,
      headers: { 'Accept': 'application/json' }
    });

    if (response.ok) {
      showFormMessage("✅ Thank you! Your message has been sent.", "green");
      form.reset();
    } else {
      showFormMessage("❌ Oops! Something went wrong. Please try again.", "red");
    }
  } catch (error) {
    showFormMessage("❌ Oops! Something went wrong. Please try again.", "red");
    console.error("Form submission error:", error);
  }
});

// Function to display form message with fade effect
function showFormMessage(message, color) {
  formMessage.textContent = message;
  formMessage.style.color = color;
  formMessage.style.opacity = '1';
  setTimeout(() => {
    formMessage.style.opacity = '0';
  }, 5000); // message disappears after 5 seconds
}
