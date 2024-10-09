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
});
