// Contact Form Submission (Google Form via hidden iframe)
const form = document.getElementById('contact-form');
const formMessage = document.getElementById('form-message');

if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Submit form via hidden iframe
    form.submit();

    // Show thank you message
    if (formMessage) {
      formMessage.textContent = "✅ Thank you! Your message has been sent.";
      formMessage.style.color = "green";
      formMessage.style.opacity = "1";
      setTimeout(() => {
        formMessage.style.opacity = "0";
      }, 5000);
    }

    // Reset form
    form.reset();
  });
}
