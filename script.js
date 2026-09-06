const observer = new IntersectionObserver((entries)=>{
  entries.forEach((entry)=>{if(entry.isIntersecting) entry.target.classList.add('visible')})
},{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));

const heroLogo=document.querySelector('.hero-logo');
window.addEventListener('scroll',()=>{
  const y=window.scrollY;
  if(heroLogo && y<window.innerHeight){heroLogo.style.transform=`translateY(${y*.08}px) scale(${1-y*.00008})`;}
});