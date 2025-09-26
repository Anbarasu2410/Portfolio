// Hamburger Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Contact Form Submission with Formspree
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
    } catch(error){
      showFormMessage("❌ Oops! Something went wrong. Please try again.", "red");
      console.error(error);
    }
  });
}

function showFormMessage(msg, color){
  formMessage.textContent = msg;
  formMessage.style.color = color;
  formMessage.style.opacity = '1';
  setTimeout(() => {
    formMessage.style.opacity = '0';
  }, 5000);
}
