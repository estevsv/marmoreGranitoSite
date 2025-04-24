// SLIDER SCRIPT
document.addEventListener('DOMContentLoaded', () => {
    let slides = document.querySelectorAll('.slide');
    let current = 0;
  
    slides[current].classList.add('active');
  
    function showNextSlide() {
      slides[current].classList.remove('active');
      current = (current + 1) % slides.length;
      slides[current].classList.add('active');
    }
  
    setInterval(showNextSlide, 4000);
  });
  
  // CAROUSEL SCRIPT
  document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.querySelector('.carousel');
    const leftBtn = document.querySelector('.carousel-btn.left');
    const rightBtn = document.querySelector('.carousel-btn.right');
  
    if (carousel && leftBtn && rightBtn) {
      leftBtn.addEventListener('click', () => {
        carousel.scrollBy({ left: -300, behavior: 'smooth' });
      });
  
      rightBtn.addEventListener('click', () => {
        carousel.scrollBy({ left: 300, behavior: 'smooth' });
      });
    }
  });
  