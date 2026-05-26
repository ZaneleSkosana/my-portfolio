const fills = document.querySelectorAll('.fill');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.style.width = e.target.dataset.width + '%';
    }
  });
}, { threshold: 0.3 });
fills.forEach(f => observer.observe(f));

document.getElementById('hamburger').addEventListener('click', () => {
  const nav = document.querySelector('.nav-links');
  nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
  nav.style.flexDirection = 'column';
  nav.style.position = 'absolute';
  nav.style.top = '64px';
  nav.style.right = '5%';
  nav.style.background = '#fff';
  nav.style.padding = '1rem 1.5rem';
  nav.style.borderRadius = '12px';
  nav.style.border = '1px solid #E2E8F0';
  nav.style.boxShadow = '0 4px 16px rgba(0,0,0,0.1)';
});

const sections = document.querySelectorAll('section[id]');
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(s => {
    if (window.scrollY >= s.offsetTop - 80) current = s.getAttribute('id');
  });
  document.querySelectorAll('.nav-links a').forEach(a => {
    a.style.color = a.getAttribute('href') === '#' + current ? '#4F46E5' : '';
  });
});

function handleSubmit(e) {
  e.preventDefault();
  alert('Thank you for your message! I will get back to you soon.');
  e.target.reset();
}