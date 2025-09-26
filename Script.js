// Hamburger Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Highlight Active Navigation Link
document.querySelectorAll('.nav-links li a').forEach(link => {
  if(link.href === window.location.href){
    link.classList.add('active');
  }
});

// Contact Form Submission (Formspree)
const form = document.getElementById('contact-form');
const formMessage = document.getElementById('form-message');

if(form){
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: formData,
        headers: { 'Accept': 'application/json' }
      });
      if(response.ok){
        showFormMessage("✅ Thank you! Your message has been sent.", "green");
        form.reset();
      } else {
        showFormMessage("❌ Oops! Something went wrong. Please try again.", "red");
      }
    } catch(err){
      showFormMessage("❌ Oops! Something went wrong. Please try again.", "red");
      console.error(err);
    }
  });
}

// Form message helper
function showFormMessage(msg, color){
  formMessage.textContent = msg;
  formMessage.style.color = color;
  formMessage.style.opacity = '1';
  setTimeout(() => { formMessage.style.opacity = '0'; }, 5000);
}
