// Hamburger Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Smooth scroll and drag-up animation
document.querySelectorAll('section').forEach(section => {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      } else {
        entry.target.classList.remove('visible');
      }
    });
  }, { threshold: 0.2 });

  observer.observe(section);
});

// Contact Form Submission with Formspree
const form = document.getElementById('contact-form');
const formMessage = document.getElementById('form-message');

if (form) {
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
}

// Function to display form message with fade effect
function showFormMessage(message, color) {
  formMessage.textContent = message;
  formMessage.style.color = color;
  formMessage.style.opacity = '1';
  setTimeout(() => {
    formMessage.style.opacity = '0';
  }, 5000);
}
