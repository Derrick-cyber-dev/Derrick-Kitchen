// Mobile menu toggle
document.querySelector('.mobile-menu').addEventListener('click', function () {
  document.querySelector('.nav-links').classList.toggle('active');
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth',
    });

    // Close mobile menu if open
    document.querySelector('.nav-links').classList.remove('active');
  });
});
