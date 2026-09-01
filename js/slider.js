/* ============================================
   SLIDER — Hero Image Slider
   ============================================ */

const HeroSlider = {
  init() {
    this.slider = document.querySelector('.hero-slider');
    if (!this.slider) return;

    this.track = this.slider.querySelector('.hero-slider__track');
    this.slides = this.slider.querySelectorAll('.hero-slide');
    this.dots = this.slider.querySelectorAll('.hero-slider__dot');
    this.prevBtn = this.slider.querySelector('.hero-slider__arrow--prev');
    this.nextBtn = this.slider.querySelector('.hero-slider__arrow--next');

    this.currentIndex = 0;
    this.totalSlides = this.slides.length;
    this.autoplayInterval = null;
    this.autoplayDelay = 6000;
    this.isTransitioning = false;

    this.bindEvents();
    this.startAutoplay();
    this.updateSlide();
  },

  bindEvents() {
    if (this.prevBtn) {
      this.prevBtn.addEventListener('click', () => this.prev());
    }

    if (this.nextBtn) {
      this.nextBtn.addEventListener('click', () => this.next());
    }

    this.dots.forEach((dot, index) => {
      dot.addEventListener('click', () => this.goTo(index));
    });

    // Pause on hover
    this.slider.addEventListener('mouseenter', () => this.stopAutoplay());
    this.slider.addEventListener('mouseleave', () => this.startAutoplay());

    // Touch support
    let startX = 0;
    let endX = 0;

    this.slider.addEventListener('touchstart', (e) => {
      startX = e.touches[0].clientX;
      this.stopAutoplay();
    }, { passive: true });

    this.slider.addEventListener('touchend', (e) => {
      endX = e.changedTouches[0].clientX;
      const diff = startX - endX;

      if (Math.abs(diff) > 50) {
        if (diff > 0) this.next();
        else this.prev();
      }

      this.startAutoplay();
    }, { passive: true });

    // Keyboard
    this.slider.setAttribute('tabindex', '0');
    this.slider.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowLeft') this.prev();
      if (e.key === 'ArrowRight') this.next();
    });
  },

  goTo(index) {
    if (this.isTransitioning || index === this.currentIndex) return;

    this.isTransitioning = true;
    this.currentIndex = index;
    this.updateSlide();

    setTimeout(() => {
      this.isTransitioning = false;
    }, 700);
  },

  next() {
    const nextIndex = (this.currentIndex + 1) % this.totalSlides;
    this.goTo(nextIndex);
  },

  prev() {
    const prevIndex = (this.currentIndex - 1 + this.totalSlides) % this.totalSlides;
    this.goTo(prevIndex);
  },

  updateSlide() {
    // Move track
    const offset = -this.currentIndex * 100;
    this.track.style.transform = `translateX(${offset}%)`;

    // Update dots
    this.dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === this.currentIndex);
    });

    // Update ARIA
    this.slides.forEach((slide, i) => {
      slide.setAttribute('aria-hidden', i !== this.currentIndex);
    });
  },

  startAutoplay() {
    this.stopAutoplay();
    this.autoplayInterval = setInterval(() => this.next(), this.autoplayDelay);
  },

  stopAutoplay() {
    if (this.autoplayInterval) {
      clearInterval(this.autoplayInterval);
      this.autoplayInterval = null;
    }
  }
};
