document.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    document.querySelector('.heroTextWrapper').classList.add('reveal');
  }, 1000); // Adjust delay as needed
});
document.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    const topLogos = document.querySelectorAll('.heroLogosTop div');
    const bottomLogos = document.querySelectorAll('.heroLogosBottom div');

    topLogos.forEach(logo => logo.classList.add('animate'));
    bottomLogos.forEach(logo => logo.classList.add('animate'));
  }, 3000); // 1 second delay
});
