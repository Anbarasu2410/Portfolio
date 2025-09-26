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
      if (navLinks.classList.contains('active')) navLinks.classList.remove('active');
    }
  });
});

// Contact Form Submission (Formspree)
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
      showFormMessage("✅ Message sent successfully!", "green");
      form.reset();
    } else {
      showFormMessage("❌ Something went wrong.", "red");
    }
  } catch (err) {
    showFormMessage("❌ Something went wrong.", "red");
  }
});

function showFormMessage(message, color) {
  formMessage.textContent = message;
  formMessage.style.color = color;
  formMessage.style.opacity = '1';
  setTimeout(() => { formMessage.style.opacity = '0'; }, 5000);
}
