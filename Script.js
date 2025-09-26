// Hamburger Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Contact Form Submission (Formspree)
const form = document.getElementById('contact-form');
if(form){
  const formMessage = document.getElementById('form-message');
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const response = await fetch(form.action, {
      method: form.method,
      body: formData,
      headers: { 'Accept': 'application/json' }
    });
    if (response.ok) {
      formMessage.textContent = "Thank you! Your message has been sent.";
      form.reset();
    } else {
      formMessage.textContent = "Oops! Something went wrong. Please try again.";
      formMessage.style.color = "red";
    }
  });
}
