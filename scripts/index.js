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


  // logic for modals of projects details
  // Get all the details buttons
  const detailsButtons = document.querySelectorAll('.details-btn');

  // Add click event to each button
  detailsButtons.forEach(button => {
    button.addEventListener('click', () => {
      const modalId = button.getAttribute('data-modal');
      const modal = document.getElementById(modalId);
      if (modal) {
        // Capture the user's scroll position
        const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        modal.style.top = `${scrollTop}px`;
        modal.style.display = 'block';
        document.body.classList.add('modal-open'); // Disable scrolling
      }
    });
  });

  // Get all the close buttons
  const closeButtons = document.querySelectorAll('.close-btn');

  // Add click event to each close button
  closeButtons.forEach(button => {
    button.addEventListener('click', () => {
      const modal = button.closest('.modal');
      if (modal) {
        modal.style.display = 'none';
        document.body.classList.remove('modal-open'); // Enable scrolling
      }
    });
  });

  // Close the modal when clicking outside of it
  window.addEventListener('click', (event) => {
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
      if (event.target === modal) {
        modal.style.display = 'none';
        document.body.classList.remove('modal-open'); // Enable scrolling
      }
    });
  });
});
