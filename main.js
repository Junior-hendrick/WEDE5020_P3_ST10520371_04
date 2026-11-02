/* Kemo Citrus Part 3 JavaScript
 * Adds accessible DOM interactions, client-side form checks, AJAX Netlify Forms,
 * product filtering, a gallery lightbox and small scroll-reveal enhancements.
 * Client-side validation improves usability; server-side validation is still required.
 */
'use strict';

document.addEventListener('DOMContentLoaded', () => {
  // Product search filters cards without reloading the page.
  const search = document.querySelector('#product-search');
  const productCards = [...document.querySelectorAll('#product-list [data-product]')];
  const count = document.querySelector('#product-count');
  if (search && productCards.length) {
    const filterProducts = () => {
      const term = search.value.trim().toLowerCase();
      let visible = 0;
      productCards.forEach(card => {
        const matches = (card.dataset.product + ' ' + card.textContent).toLowerCase().includes(term);
        card.hidden = !matches;
        if (matches) visible++;
      });
      if (count) count.textContent = `Showing ${visible} of ${productCards.length} products`;
    };
    search.addEventListener('input', filterProducts);
  }

  // Gallery lightbox: native dialog provides keyboard and backdrop behaviour.
  const lightbox = document.querySelector('#gallery-lightbox');
  if (lightbox) {
    const enlarged = lightbox.querySelector('img');
    const close = lightbox.querySelector('.lightbox-close');
    document.querySelectorAll('.gallery-trigger').forEach(trigger => {
      trigger.addEventListener('click', () => {
        const image = trigger.querySelector('img');
        enlarged.src = image.src;
        enlarged.alt = image.alt;
        if (typeof lightbox.showModal === 'function') lightbox.showModal();
        else window.open(image.src, '_blank', 'noopener');
      });
    });
    close?.addEventListener('click', () => lightbox.close());
    lightbox.addEventListener('click', event => { if (event.target === lightbox) lightbox.close(); });
  }

  // HTML5 validation plus additional phone-number checks and clear feedback.
  document.querySelectorAll('form.js-ajax-form').forEach(form => {
    const status = form.querySelector('.form-status');
    form.addEventListener('submit', async event => {
      event.preventDefault();
      status?.classList.remove('error', 'success');
      if (!form.checkValidity()) {
        form.reportValidity();
        if (status) { status.textContent = 'Please check the highlighted fields and correct the errors.'; status.classList.add('error'); }
        return;
      }
      const phone = form.querySelector('input[type="tel"]');
      if (phone && phone.value.trim() && phone.value.replace(/\D/g, '').length < 7) {
        phone.setCustomValidity('Please enter a valid phone number with at least 7 digits.');
        phone.reportValidity(); phone.setCustomValidity('');
        if (status) { status.textContent = 'Please enter a valid phone number.'; status.classList.add('error'); }
        return;
      }
      // Netlify detects data-netlify forms at deployment. FormData is URL-encoded for its endpoint.
      if (status) status.textContent = 'Sending your message…';
      const formData = new FormData(form);
      const encoded = new URLSearchParams();
      for (const [key, value] of formData.entries()) encoded.append(key, value);
      try {
        const response = await fetch(form.getAttribute('action') || '/', {
          method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, body: encoded.toString()
        });
        if (!response.ok) throw new Error('The form service did not accept the submission.');
        if (status) { status.textContent = 'Thank you. Your message was submitted successfully.'; status.classList.add('success'); }
        form.reset();
      } catch (error) {
        // Useful when opened as a local file or before Netlify deployment.
        if (status) { status.textContent = 'The form could not be sent. Please deploy the site to Netlify and enable form handling, then try again.'; status.classList.add('error'); }
      }
    });
  });

  // Optional progressive enhancement: reveal sections as they enter the viewport.
  // Respect reduced-motion preferences and keep all content visible if unsupported.
  if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const sections = document.querySelectorAll('main .section');
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target); }
      });
    }, { threshold: 0.08 });
    sections.forEach(section => observer.observe(section));
  }
});
