// =========================
// Hamburger Menu Toggle
// =========================
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// =========================
// Smooth Scroll for Internal Links
// =========================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      // Close mobile menu after click
      if (navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
      }
    }
  });
});

// =========================
// Hover Dropdowns (Skills, Projects, Experience, Achievements)
// =========================
document.querySelectorAll('.dropdown').forEach(drop => {
  drop.addEventListener('mouseenter', () => {
    drop.classList.add('active-dropdown');
  });
  drop.addEventListener('mouseleave', () => {
    drop.classList.remove('active-dropdown');
  });
});

// =========================
// Section Drag-Up Animation
// =========================
const sections = document.querySelectorAll('section');
sections.forEach(section => {
  section.style.opacity = 0;
  section.style.transform = 'translateY(50px)';
});

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.transition = 'all 0.8s ease-out';
      entry.target.style.opacity = 1;
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.2 });

sections.forEach(section => observer.observe(section));

// =========================
// Skills Hover Interaction
// =========================
const skills = document.querySelectorAll('.skill');
skills.forEach(skill => {
  skill.addEventListener('mouseenter', () => {
    skill.style.transform = 'scale(1.1)';
    skill.style.boxShadow = '0 5px 15px rgba(0,0,0,0.2)';
  });
  skill.addEventListener('mouseleave', () => {
    skill.style.transform = 'scale(1)';
    skill.style.boxShadow = 'none';
  });
});

// =========================
// Projects Hover Animation
// =========================
const projects = document.querySelectorAll('.project');
projects.forEach(project => {
  project.addEventListener('mouseenter', () => {
    project.style.transform = 'translateY(-5px)';
    project.style.boxShadow = '0 10px 25px rgba(0,0,0,0.15)';
  });
  project.addEventListener('mouseleave', () => {
    project.style.transform = 'translateY(0)';
    project.style.boxShadow = '0 5px 15px rgba(0,0,0,0.05)';
  });
});

// =========================
// Experience & Achievements Hover Animation
// =========================
const expAchieve = document.querySelectorAll('.experience, .achievement');
expAchieve.forEach(item => {
  item.addEventListener('mouseenter', () => {
    item.style.transform = 'translateY(-3px)';
    item.style.transition = 'all 0.3s ease';
    item.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
  });
  item.addEventListener('mouseleave', () => {
    item.style.transform = 'translateY(0)';
    item.style.boxShadow = 'none';
  });
});

// =========================
// Contact Form Submission (Formspree)
// =========================
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

// =========================
// Show Form Message
// =========================
function showFormMessage(message, color) {
  if (!formMessage) return;
  formMessage.textContent = message;
  formMessage.style.color = color;
  formMessage.style.opacity = '1';
  setTimeout(() => {
    formMessage.style.opacity = '0';
  }, 5000);
}
