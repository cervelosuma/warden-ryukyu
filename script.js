const reveals=[...document.querySelectorAll('.reveal')];
const io=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.12});
reveals.forEach(el=>io.observe(el));

const btn=document.querySelector('.menu-btn');
const menu=document.querySelector('.mobile-nav');
btn?.addEventListener('click',()=>{
  const open=menu.classList.toggle('open');
  menu.setAttribute('aria-hidden',String(!open));
});
menu?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{
  menu.classList.remove('open'); menu.setAttribute('aria-hidden','true');
}));

window.addEventListener('scroll',()=>{
  const y=window.scrollY;
  const mark=document.querySelector('.guardian-mark');
  if(mark) mark.style.transform=`translateY(${y*.045}px) rotate(${y*.035}deg)`;
},{passive:true});