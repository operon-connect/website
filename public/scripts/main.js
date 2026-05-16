// Nav scroll — theme-safe glass via data attribute (styled in Nav.astro / Tailwind)
const nav = document.getElementById('nav');
if (nav) {
  window.addEventListener('scroll', () => {
    const on = scrollY > 60;
    nav.dataset.scrolled = on ? 'true' : 'false';
  });
  nav.dataset.scrolled = scrollY > 60 ? 'true' : 'false';
}

// Reveal on scroll
const obs = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) e.target.classList.add('vis');
    });
  },
  { threshold: 0.1 },
);
document.querySelectorAll('.reveal').forEach((el) => obs.observe(el));
