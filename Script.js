// Hamburger Menu
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
hamburger.addEventListener('click', () => navLinks.classList.toggle('active'));

// Section Switching
const sections = document.querySelectorAll('.section');
document.querySelectorAll('a[data-target]').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const targetId = link.getAttribute('data-target');
    sections.forEach(sec => sec.classList.remove('active-section'));
    const target = document.getElementById(targetId);
    if (target) target.classList.add('active-section');
    navLinks.classList.remove('active'); // close mobile menu
  });
});

// Contact Form with Formspree
const form = document.getElementById('contact-form');
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
    formMessage.style.color = "green";
    form.reset();
  } else {
    formMessage.textContent = "Oops! Something went wrong.";
    formMessage.style.color = "red";
  }
});
