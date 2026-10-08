// ===== Umuzi Replica - Shared JS =====

// NAV SCROLL
(function() {
  const nav = document.getElementById('mainNav');
  if (!nav) return;
  window.addEventListener('scroll', () => nav.classList.toggle('scrolled', window.scrollY > 20));
})();

// MEGA MENU
(function() {
  const triggers = document.querySelectorAll('[data-mega]');
  const menus = {};
  document.querySelectorAll('.mega-menu').forEach(m => { menus[m.id] = m; });
  let active = null;
  const open = (m) => { if (active) active.classList.remove('open'); m.classList.add('open'); active = m; };
  const close = () => { if (active) active.classList.remove('open'); active = null; };

  triggers.forEach(t => {
    const menu = menus['mega-' + t.dataset.mega];
    if (!menu) return;
    t.addEventListener('mouseenter', () => open(menu));
    t.addEventListener('click', (e) => { if (window.innerWidth <= 991) { e.preventDefault(); active === menu ? close() : open(menu); } });
    menu.addEventListener('mouseleave', close);
  });
  window.addEventListener('scroll', close);
})();

// MOBILE TOGGLE
(function() {
  const toggle = document.getElementById('mobileToggle');
  if (!toggle) return;
  toggle.addEventListener('click', () => {
    document.body.classList.toggle('mobile-nav-open');
    toggle.innerHTML = document.body.classList.contains('mobile-nav-open') ? '<i class="bi bi-x"></i>' : '<i class="bi bi-list"></i>';
  });
})();

// SCROLL REVEAL
(function() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); } });
  }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
})();

// SMOOTH SCROLL
(function() {
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', function(e) {
      const t = document.querySelector(this.getAttribute('href'));
      if (t) { e.preventDefault(); window.scrollTo({ top: t.offsetTop - 80, behavior: 'smooth' }); }
    });
  });
})();
