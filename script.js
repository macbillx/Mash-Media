const menuToggle = document.querySelector('.menu-toggle');
const primaryNav = document.querySelector('.primary-nav');

menuToggle?.addEventListener('click', () => {
  const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
  menuToggle.setAttribute('aria-expanded', String(!isOpen));
  menuToggle.setAttribute('aria-label', isOpen ? 'Open navigation' : 'Close navigation');
  primaryNav?.classList.toggle('open', !isOpen);
});

primaryNav?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    primaryNav.classList.remove('open');
    menuToggle?.setAttribute('aria-expanded', 'false');
    menuToggle?.setAttribute('aria-label', 'Open navigation');
  });
});

const year = document.querySelector('#year');
if (year) year.textContent = new Date().getFullYear();

const inquiryForm = document.querySelector('#inquiry-form');
inquiryForm?.addEventListener('submit', (event) => {
  event.preventDefault();
  const formData = new FormData(inquiryForm);
  const subject = `Project inquiry: ${formData.get('service')}`;
  const body = [
    `Name: ${formData.get('name')}`,
    `Email: ${formData.get('email')}`,
    `Service: ${formData.get('service')}`,
    '',
    'Project details:',
    formData.get('message'),
  ].join('\n');
  const status = document.querySelector('#form-status');
  window.location.href = `mailto:info@mymash.top?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  if (status) status.textContent = 'Your email draft is ready. Review it in your email app, then choose Send.';
});
