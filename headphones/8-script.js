document.addEventListener('DOMContentLoaded', function () {
  // Select the hamburger and nav menu
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');

  hamburger.addEventListener('click', function () {
    navLinks.classList.toggle('show');
  });
});
