document.addEventListener('DOMContentLoaded', () => {
  // Shows hero section text
  setTimeout(() => {
    document.querySelector('.heroTextWrapper').classList.add('reveal');
  }, 1000);

  // Trigger animations for hero tech logos
  setTimeout(() => {
    const topLogos = document.querySelectorAll('.heroLogosTop div');
    const bottomLogos = document.querySelectorAll('.heroLogosBottom div');

    topLogos.forEach(logo => logo.classList.add('animate'));
    bottomLogos.forEach(logo => logo.classList.add('animate'));
  }, 2000);

  // Hamburger
  const hamburgerMenu = document.querySelector('.hamburger-menu');
  const navMenu = document.querySelector('.navMenu');
  const listItems = document.querySelectorAll('.navMenu li');

  hamburgerMenu.addEventListener('click', () => {
    navMenu.classList.toggle('active');
  });

  listItems.forEach(item => {
    item.addEventListener('click', () => {
      navMenu.classList.remove('active');
    });
  });

  // Animation for elements sliding in on scroll
  const elements = document.querySelectorAll('.from_left, .from_right, .from_bottom');

  const isInViewport = (el, offset = 400) => {
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= -offset &&
      rect.left >= -offset &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) + offset &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth) + offset
    );
  };

  const runAnimations = () => {
    elements.forEach(el => {
      if (isInViewport(el)) {
        el.classList.add('visible');
      }
    });
  };

  const body = document.querySelector('body')
  body.addEventListener('scroll', function() {
    runAnimations();
  });
  runAnimations(); // Run animations on page load
});
