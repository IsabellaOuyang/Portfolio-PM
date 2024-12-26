// Toggle the mobile menu with an animated effect
function toggleMenu() {
  const navLinks = document.querySelector('.nav-links');
  navLinks.classList.toggle('active');

  // Burger icon animation
  const burgerIcon = document.querySelector('.mobile-menu-icon');
  burgerIcon.classList.toggle('open');
}

// Smooth scroll with easing
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
});

// Scroll-triggered navbar background change
window.addEventListener('scroll', function() {
  const navbar = document.querySelector('nav.navbar');
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// JavaScript to show/hide navbar on scroll direction
let lastScrollTop = 0;
const navbar = document.querySelector('nav.navbar');

window.addEventListener('scroll', function() {
  let currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (currentScrollTop > lastScrollTop) {
    // Scrolling down
    navbar.classList.add('hidden');
  } else {
    // Scrolling up
    navbar.classList.remove('hidden');
  }

  lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop; // For Mobile or negative scrolling
});


// Scroll reveal animations
window.addEventListener('scroll', function() {
  const reveals = document.querySelectorAll('.reveal');

  for (let i = 0; i < reveals.length; i++) {
    const windowHeight = window.innerHeight;
    const elementTop = reveals[i].getBoundingClientRect().top;
    const elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add('active');
    }
  }
});
