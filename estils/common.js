document.addEventListener('DOMContentLoaded', function () {
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.main-nav');

  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      const isOpen = nav.classList.toggle('is-open');
      toggle.classList.toggle('is-open', isOpen);
      toggle.setAttribute('aria-expanded', String(isOpen));
    });

    nav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        nav.classList.remove('is-open');
        toggle.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  document.querySelectorAll('.dropdown-toggle').forEach(function (button) {
    button.addEventListener('click', function (event) {
      if (window.innerWidth > 760) return;
      event.preventDefault();
      const parent = button.closest('.dropdown');
      const wasOpen = parent.classList.contains('is-open');

      document.querySelectorAll('.dropdown.is-open').forEach(function (item) {
        item.classList.remove('is-open');
        const btn = item.querySelector('.dropdown-toggle');
        if (btn) btn.setAttribute('aria-expanded', 'false');
      });

      if (!wasOpen) {
        parent.classList.add('is-open');
        button.setAttribute('aria-expanded', 'true');
      } else {
        button.setAttribute('aria-expanded', 'false');
      }
    });
  });

  const form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      window.location.href = 'gracies.html';
    });
  }
});
