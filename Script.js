// Hamburger Menu
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Smooth Scroll for all anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if(target){
      target.scrollIntoView({ behavior: 'smooth' });
      if(navLinks.classList.contains('active')){
        navLinks.classList.remove('active');
      }
    }
  });
});

// Contact Form
const form = document.getElementById('contact-form');
const formMessage = document.getElementById('form-message');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const formData = new FormData(form);
  try {
    const response = await fetch(form.action, { method: form.method, body: formData, headers: { 'Accept': 'application/json' } });
    if(response.ok){
      showFormMessage("✅ Message sent successfully", "green");
      form.reset();
    } else { showFormMessage("❌ Error sending message", "red"); }
  } catch(err){
    showFormMessage("❌ Error sending message", "red");
    console.error(err);
  }
});

function showFormMessage(msg, color){
  formMessage.textContent = msg;
  formMessage.style.color = color;
  formMessage.style.opacity = '1';
  setTimeout(()=> { formMessage.style.opacity = '0'; }, 5000);
}
