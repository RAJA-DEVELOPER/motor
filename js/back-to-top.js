/* ============================================
   BACK TO TOP — Scroll-triggered button
   ============================================ */

const BackToTop = {
  init() {
    this.btn = document.querySelector('.back-to-top');
    if (!this.btn) return;

    this.handleScroll();
    this.btn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  },

  handleScroll() {
    let ticking = false;
    window.addEventListener('scroll', () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          if (window.scrollY > 400) {
            this.btn.classList.add('visible');
          } else {
            this.btn.classList.remove('visible');
          }
          ticking = false;
        });
        ticking = true;
      }
    }, { passive: true });
  }
};
