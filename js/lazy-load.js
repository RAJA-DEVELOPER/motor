/* ============================================
   LAZY LOAD — Image lazy loading
   ============================================ */

const LazyLoad = {
  init() {
    // Use native lazy loading as primary, IO as fallback
    if ('loading' in HTMLImageElement.prototype) {
      // Native lazy loading supported, just ensure data-src images are handled
      this.loadDataSrcImages();
    } else {
      // Fallback: Intersection Observer
      this.observeImages();
    }
  },

  loadDataSrcImages() {
    const images = document.querySelectorAll('img[data-src]');
    images.forEach(img => {
      img.src = img.dataset.src;
      if (img.dataset.srcset) {
        img.srcset = img.dataset.srcset;
      }
      img.removeAttribute('data-src');
      img.removeAttribute('data-srcset');
    });
  },

  observeImages() {
    const images = document.querySelectorAll('img[data-src]');
    if (!images.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            if (img.dataset.srcset) {
              img.srcset = img.dataset.srcset;
            }
            img.removeAttribute('data-src');
            img.removeAttribute('data-srcset');
            img.classList.add('loaded');
            observer.unobserve(img);
          }
        });
      },
      {
        rootMargin: '200px 0px'
      }
    );

    images.forEach(img => observer.observe(img));
  }
};
