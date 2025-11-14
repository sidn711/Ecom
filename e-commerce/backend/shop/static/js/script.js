// ===== NAVBAR TOGGLE =====
const menu = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

menu.onclick = () => {
  menu.classList.toggle('bx-x');
  navbar.classList.toggle('open');
};

// ===== STICKY HEADER =====
const header = document.querySelector('header');
window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 50);
});

// ===== SMOOTH SCROLL ANIMATION USING ScrollReveal =====
const sr = ScrollReveal({
  distance: '60px',
  duration: 1000,
  delay: 200,
  easing: 'ease-out',
  reset: false
});
sr.reveal('header', { origin: 'top' });
sr.reveal('.home-text', { origin: 'left' });
sr.reveal('.home-img', { origin: 'right' });
sr.reveal('.row', { origin: 'bottom', interval: 100 });
sr.reveal('.box', { origin: 'bottom', interval: 120 });
sr.reveal('.cta-text', { origin: 'left' });
sr.reveal('.main-contact', { origin: 'bottom' });

// ===== FALLBACK: IntersectionObserver for browsers without ScrollReveal =====
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('show');
  });
}, { threshold: 0.1 });

document.querySelectorAll('section, .row, .box, header').forEach(el => observer.observe(el));
