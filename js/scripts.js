// Toggle mobile menu
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
  navToggle.classList.toggle('open');
});

// Contact form submission handling (demo only)
const contactForm = document.getElementById('contact-form');
const successMessage = document.getElementById('success-message');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();

  // For demo, just show success message and reset form
  successMessage.style.display = 'block';
  contactForm.reset();

  // Hide the message after 3 seconds
  setTimeout(() => {
    successMessage.style.display = 'none';
  }, 3000);
});
