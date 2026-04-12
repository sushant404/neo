/**
 * Nepal Economic Observatory — shared behavior
 * Smooth scroll, forms, mobile navigation, back-to-top
 */

function closeMobileNav() {
  const nav = document.querySelector('nav[aria-label="Main navigation"]');
  const toggle = document.querySelector('.nav-toggle');
  if (nav) nav.classList.remove('nav-mobile-open');
  if (toggle) toggle.setAttribute('aria-expanded', 'false');
}

function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (e) => {
      const href = anchor.getAttribute('href');
      if (!href || href === '#') return;
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        closeMobileNav();
      }
    });
  });
}

function initNotifyForms() {
  document.querySelectorAll('.notify-form').forEach((el) => {
    const btn = el.querySelector('button');
    const input = el.querySelector('input[type="email"], input');
    if (!btn || !input) return;

    const handler = (e) => {
      e.preventDefault();
      const v = input.value.trim();
      if (v && v.includes('@')) {
        input.value = '';
        input.placeholder = "✓ You're on the list!";
        input.style.color = 'var(--un-blue)';
        input.style.borderColor = '';
      } else {
        input.style.borderColor = '#e55';
      }
    };

    if (el.tagName === 'FORM') {
      el.addEventListener('submit', handler);
    } else {
      btn.addEventListener('click', handler);
    }
  });
}

function initNewsletterForms() {
  document.querySelectorAll('.newsletter-form').forEach((el) => {
    const btn = el.querySelector('button');
    const input = el.querySelector('input[type="email"], input');
    if (!btn || !input) return;

    const handler = (e) => {
      e.preventDefault();
      const v = input.value.trim();
      if (v && v.includes('@')) {
        input.value = '';
        input.placeholder = '✓ Subscribed! Welcome aboard.';
        input.style.borderColor = '';
      } else {
        input.style.borderColor = 'rgba(255,100,100,0.6)';
      }
    };

    if (el.tagName === 'FORM') {
      el.addEventListener('submit', handler);
    } else {
      btn.addEventListener('click', handler);
    }
  });
}

function initPodcastLaunchNotify() {
  document.querySelectorAll('.podcast-launch-notify').forEach((el) => {
    const btn = el.querySelector('button');
    const input = el.querySelector('input[type="email"], input');
    if (!btn || !input) return;

    const handler = (e) => {
      e.preventDefault();
      const v = input.value.trim();
      if (v && v.includes('@')) {
        input.value = '';
        input.placeholder = "✓ We'll notify you at launch.";
        input.style.color = 'rgba(255,255,255,0.95)';
        input.style.borderColor = '';
      } else {
        input.style.borderColor = 'rgba(255,150,150,0.8)';
      }
    };

    if (el.tagName === 'FORM') {
      el.addEventListener('submit', handler);
    } else {
      btn.addEventListener('click', handler);
    }
  });
}

function initMobileNav() {
  const nav = document.querySelector('nav[aria-label="Main navigation"]');
  const toggle = document.querySelector('.nav-toggle');
  if (!nav || !toggle) return;

  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('nav-mobile-open');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });

  nav.querySelectorAll('.nav-links a').forEach((link) => {
    link.addEventListener('click', () => {
      closeMobileNav();
    });
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeMobileNav();
  });
}

function initBackToTop() {
  const btn = document.querySelector('.back-to-top');
  if (!btn) return;

  const onScroll = () => {
    if (window.scrollY > 300) {
      btn.classList.add('is-visible');
    } else {
      btn.classList.remove('is-visible');
    }
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

function initContactForm() {
  const form = document.getElementById('contact-form');
  const thank = document.getElementById('contact-thankyou');
  if (!form || !thank) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    form.style.display = 'none';
    thank.classList.add('is-visible');
  });
}

function initSuggestTopicForm() {
  const form = document.getElementById('suggest-topic-form');
  const thank = document.getElementById('suggest-thankyou');
  if (!form || !thank) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    thank.classList.add('is-visible');
    form.reset();
  });
}

document.addEventListener('DOMContentLoaded', () => {
  initSmoothScroll();
  initNotifyForms();
  initNewsletterForms();
  initPodcastLaunchNotify();
  initMobileNav();
  initBackToTop();
  initContactForm();
  initSuggestTopicForm();
});
