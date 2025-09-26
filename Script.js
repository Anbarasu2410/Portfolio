// Hamburger toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Highlight active page
document.querySelectorAll('.nav-links li a').forEach(link => {
  if(link.href === window.location.href){
    link.classList.add('active');
  }
});

// Contact Form
const form = document.getElementById('contact-form');
if(form){
  const formMessage = document.getElementById('form-message');
  form.addEventListener('submit', async e => {
    e.preventDefault();
    const formData = new FormData(form);
    try {
      const response = await fetch(form.action, { method: form.method, body: formData, headers: {'Accept':'application/json'} });
      if(response.ok){
        showFormMessage("✅ Message sent successfully!", "green");
        form.reset();
      } else {
        showFormMessage("❌ Something went wrong!", "red");
      }
    } catch(err){
      showFormMessage("❌ Something went wrong!", "red");
      console.error(err);
    }
  });
}

function showFormMessage(msg, color){
  const formMessage = document.getElementById('form-message');
  formMessage.textContent = msg;
  formMessage.style.color = color;
  formMessage.style.opacity = '1';
  setTimeout(()=>{ formMessage.style.opacity='0'; }, 5000);
}
