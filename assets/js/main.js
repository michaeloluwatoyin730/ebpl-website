// ESSENCE BUSINESS PLATFORM LIMITED
// Corporate Website — Shared JavaScript

document.addEventListener('DOMContentLoaded', function () {

  // ── NAVIGATION ──────────────────────────────────────────
  const hamburger = document.querySelector('.nav__hamburger');
  const mobileNav = document.querySelector('.nav__mobile');

  if (hamburger && mobileNav) {
    hamburger.addEventListener('click', function () {
      mobileNav.classList.toggle('open');
      const spans = hamburger.querySelectorAll('span');
      const isOpen = mobileNav.classList.contains('open');
      if (isOpen) {
        spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
      } else {
        spans[0].style.transform = '';
        spans[1].style.opacity = '';
        spans[2].style.transform = '';
      }
    });
  }

  // Close mobile nav on link click
  document.querySelectorAll('.nav__mobile .nav__link').forEach(link => {
    link.addEventListener('click', () => {
      mobileNav.classList.remove('open');
    });
  });

  // ── SCROLL REVEAL ────────────────────────────────────────
  const reveals = document.querySelectorAll('.reveal');
  if (reveals.length > 0) {
    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    reveals.forEach(el => observer.observe(el));
  }

  // ── ACTIVE NAV LINK ──────────────────────────────────────
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav__link').forEach(link => {
    const href = link.getAttribute('href');
    if (href && (href === currentPage || href.endsWith(currentPage))) {
      link.classList.add('nav__link--active');
    }
  });

  // ── NAV SHADOW ON SCROLL ─────────────────────────────────
  const nav = document.querySelector('.nav');
  if (nav) {
    window.addEventListener('scroll', function () {
      if (window.scrollY > 10) {
        nav.style.boxShadow = '0 2px 20px rgba(0,0,0,0.08)';
      } else {
        nav.style.boxShadow = 'none';
      }
    }, { passive: true });
  }

  // ── YEAR IN FOOTER ───────────────────────────────────────
  document.querySelectorAll('.js-year').forEach(el => {
    el.textContent = new Date().getFullYear();
  });

});
