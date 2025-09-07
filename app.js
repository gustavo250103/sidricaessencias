// Mobile menu
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const navMenu = document.getElementById('nav-menu');
mobileMenuBtn.addEventListener('click', () => navMenu.classList.toggle('active'));

// Header scroll style
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 100);
});

// Smooth scroll (fecha menu ao clicar)
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const href = a.getAttribute('href');
    const target = document.querySelector(href);
    if (target) {
      e.preventDefault();
      window.scrollTo({ top: target.offsetTop - 80, behavior: 'smooth' });
      navMenu.classList.remove('active');
    }
  });
});

// Skip link para leitores de tela
const skip = document.createElement('a');
skip.href = '#inicio';
skip.className = 'sr-only';
skip.textContent = 'Pular para o conteúdo principal';
Object.assign(skip.style, {
  position: 'absolute', top: '-40px', left: '6px',
  background: 'var(--primary-color)', color: '#fff',
  padding: '8px 16px', borderRadius: '4px', zIndex: '10000',
  textDecoration: 'none'
});
skip.addEventListener('focus', () => skip.style.top = '6px');
skip.addEventListener('blur', () => skip.style.top = '-40px');
document.body.insertBefore(skip, document.body.firstChild);

// Ano no rodapé
document.getElementById('ano')?.textContent = new Date().getFullYear();
