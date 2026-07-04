/* BULADEV + ASA Construction — one-page site behaviors.
   Vanilla JS only: mobile menu, smooth scroll, scrollspy, FAQ accordion,
   contact-form validation, reveal-on-scroll (IntersectionObserver). */
(function () {
  'use strict';

  var reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

  /* ---------- Sticky header shadow ---------- */
  var header = document.querySelector('.site-header');
  function onScroll() {
    header.classList.toggle('scrolled', window.scrollY > 24);
  }
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  /* ---------- Mobile menu ---------- */
  var toggle = document.querySelector('.nav-toggle');
  var menu = document.getElementById('mobile-menu');
  var lastFocused = null;

  function setMenu(open) {
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    toggle.classList.toggle('open', open);
    menu.hidden = !open;
    document.body.classList.toggle('menu-open', open);
    if (open) {
      lastFocused = document.activeElement;
      var first = menu.querySelector('a');
      if (first) first.focus();
    } else if (lastFocused) {
      lastFocused.focus();
      lastFocused = null;
    }
  }

  toggle.addEventListener('click', function () {
    setMenu(menu.hidden);
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !menu.hidden) setMenu(false);
  });

  /* ---------- Smooth scroll for in-page anchors ---------- */
  document.querySelectorAll('a[href^="#"]').forEach(function (link) {
    link.addEventListener('click', function (e) {
      var hash = link.getAttribute('href');
      if (hash.length < 2) return;
      var target = document.getElementById(hash.slice(1));
      if (!target) return;
      e.preventDefault();
      if (!menu.hidden) setMenu(false);
      target.scrollIntoView({
        behavior: reducedMotion.matches ? 'auto' : 'smooth',
        block: 'start'
      });
      if (history.pushState) history.pushState(null, '', hash);
    });
  });

  /* ---------- Active nav link on scroll (scrollspy) ----------
     Runs only on pages whose nav contains same-page hash links (the
     homepage). Subpages keep their hardcoded .active / aria-current. */
  var navLinks = Array.prototype.slice.call(
    document.querySelectorAll('.site-nav a, .mobile-menu ul a')
  );
  var linkedIds = {};
  navLinks.forEach(function (l) {
    var href = l.getAttribute('href');
    if (href && href.charAt(0) === '#') linkedIds[href] = true;
  });
  var hasHashLinks = Object.keys(linkedIds).length > 0;

  function setActive(href) {
    navLinks.forEach(function (l) {
      var isActive = l.getAttribute('href') === href;
      l.classList.toggle('active', isActive);
      if (isActive) l.setAttribute('aria-current', 'true');
      else l.removeAttribute('aria-current');
    });
  }

  if (hasHashLinks && 'IntersectionObserver' in window) {
    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        var hash = '#' + entry.target.id;
        if (linkedIds[hash]) setActive(hash);
        else setActive('index.html'); // unanchored home sections → Home stays lit
      });
    }, { rootMargin: '-35% 0px -60% 0px' });

    document.querySelectorAll('main section[id]').forEach(function (sec) {
      spy.observe(sec);
    });
  }

  /* ---------- FAQ accordion ---------- */
  document.querySelectorAll('.faq-item').forEach(function (item) {
    var btn = item.querySelector('.faq-q');
    btn.addEventListener('click', function () {
      var isOpen = btn.getAttribute('aria-expanded') === 'true';
      // close any other open item
      document.querySelectorAll('.faq-q[aria-expanded="true"]').forEach(function (other) {
        if (other !== btn) {
          other.setAttribute('aria-expanded', 'false');
          other.closest('.faq-item').classList.remove('open');
        }
      });
      btn.setAttribute('aria-expanded', String(!isOpen));
      item.classList.toggle('open', !isOpen);
    });
  });

  /* ---------- Reveal on scroll (IntersectionObserver only) ---------- */
  var reveals = document.querySelectorAll('.reveal');
  if (reducedMotion.matches || !('IntersectionObserver' in window)) {
    reveals.forEach(function (el) { el.classList.add('in-view'); });
  } else {
    var revealObserver = new IntersectionObserver(function (entries, obs) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });
    reveals.forEach(function (el) { revealObserver.observe(el); });
  }

  /* ---------- Contact form validation ---------- */
  var form = document.getElementById('contact-form');
  if (!form) return;
  var status = document.getElementById('form-status');

  function fieldWrap(input) { return input.closest('.field'); }

  function setError(input, message) {
    var wrap = fieldWrap(input);
    var err = wrap.querySelector('.field-error');
    if (message) {
      wrap.classList.add('invalid');
      input.setAttribute('aria-invalid', 'true');
      err.textContent = message;
      err.hidden = false;
    } else {
      wrap.classList.remove('invalid');
      input.removeAttribute('aria-invalid');
      err.textContent = '';
      err.hidden = true;
    }
  }

  var fields = {
    name: document.getElementById('cf-name'),
    phone: document.getElementById('cf-phone'),
    email: document.getElementById('cf-email'),
    type: document.getElementById('cf-type'),
    location: document.getElementById('cf-location'),
    message: document.getElementById('cf-message')
  };

  var validators = [
    {
      input: fields.name,
      check: function (v) { return v.trim().length >= 2 ? '' : 'Please enter your full name.'; }
    },
    {
      input: fields.phone,
      check: function (v) {
        if (!v.trim()) return '';
        return /^[\d\s()+.\-]{7,20}$/.test(v.trim()) ? '' : 'Please enter a valid phone number.';
      }
    },
    {
      input: fields.email,
      check: function (v) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim()) ? '' : 'Please enter a valid email address.';
      }
    },
    {
      input: fields.type,
      check: function (v) { return v ? '' : 'Please select a project type.'; }
    },
    {
      input: fields.message,
      check: function (v) { return v.trim().length >= 10 ? '' : 'Please tell us a little about your project (at least 10 characters).'; }
    }
  ];

  // clear a field's error as soon as the user fixes it
  validators.forEach(function (v) {
    v.input.addEventListener('input', function () {
      if (fieldWrap(v.input).classList.contains('invalid')) {
        setError(v.input, v.check(v.input.value));
      }
    });
  });

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var firstInvalid = null;

    validators.forEach(function (v) {
      var msg = v.check(v.input.value);
      setError(v.input, msg);
      if (msg && !firstInvalid) firstInvalid = v.input;
    });

    if (firstInvalid) {
      status.classList.add('error');
      status.textContent = 'Please review the highlighted fields.';
      firstInvalid.focus();
      return;
    }

    // no backend on this static site: compose the inquiry as an email
    var lines = [
      'Full Name: ' + fields.name.value.trim(),
      'Phone Number: ' + (fields.phone.value.trim() || '-'),
      'Email Address: ' + fields.email.value.trim(),
      'Project Type: ' + fields.type.value,
      'Project Location: ' + (fields.location.value.trim() || '-'),
      '',
      'Message:',
      fields.message.value.trim()
    ];
    var subject = 'Project inquiry - ' + fields.type.value + ' (' + fields.name.value.trim() + ')';
    var href = 'mailto:bula@BULADEV.com' +
      '?subject=' + encodeURIComponent(subject) +
      '&body=' + encodeURIComponent(lines.join('\n'));

    status.classList.remove('error');
    status.textContent = 'Opening your email app to send the details. Prefer to talk? Call (313) 444-9734.';
    window.location.href = href;
  });
})();
