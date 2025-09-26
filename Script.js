// Hamburger toggle
const hamburger=document.querySelector('.hamburger');
const navLinks=document.querySelector('.nav-links');
hamburger.addEventListener('click',()=>navLinks.classList.toggle('active'));

// SPA navigation
document.querySelectorAll('.nav-links a, .btn').forEach(link=>{
  link.addEventListener('click',e=>{
    e.preventDefault();
    const target=link.dataset.target;
    if(target){
      document.querySelectorAll('.section').forEach(s=>s.classList.remove('active-section'));
      document.getElementById(target).classList.add('active-section');
      if(navLinks.classList.contains('active')) navLinks.classList.remove('active');
      window.scrollTo(0,0);
    }
  });
});

// Contact Form
const form=document.getElementById('contact-form');
const formMessage=document.getElementById('form-message');
form.addEventListener('submit',async e=>{
  e.preventDefault();
  const formData=new FormData(form);
  try{
    const response=await fetch(form.action,{method:form.method,body:formData,headers:{'Accept':'application/json'}});
    if(response.ok){
      formMessage.textContent="✅ Message sent!";formMessage.style.color="green";form.reset();
      setTimeout(()=>formMessage.textContent="",5000);
    }else{
      formMessage.textContent="❌ Error! Try again.";formMessage.style.color="red";
    }
  }catch(err){
    formMessage.textContent="❌ Error! Try again.";formMessage.style.color="red";
  }
});

// Skills animation trigger
const skillsSection=document.getElementById('skills');
const skillsObserver=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      document.querySelectorAll('.skill').forEach((skill,i)=>{
        skill.style.transitionDelay=`${i*0.1}s`;
        skill.classList.add('skill-animate');
      });
    }
  });
},{threshold:0.3});
skillsObserver.observe(skillsSection);
