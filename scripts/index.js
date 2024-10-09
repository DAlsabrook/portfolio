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
});
