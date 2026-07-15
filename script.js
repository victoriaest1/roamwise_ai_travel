
const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{
  if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target)}
}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
const form=document.querySelector('form');
if(form){form.addEventListener('submit',e=>{e.preventDefault();const msg=document.querySelector('.form-message');if(msg)msg.textContent='Thank you — your request has been received.';form.reset();});}
