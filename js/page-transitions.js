/* ============================================
   PAGE TRANSITIONS — Smooth navigation
   ============================================ */

const PageTransitions = {
  init() {
    // Only apply to internal links
    const links = document.querySelectorAll('a[href]');
    links.forEach(link => {
      const href = link.getAttribute('href');

      // Skip external, anchor, mailto, tel links
      if (!href ||
          href.startsWith('#') ||
          href.startsWith('mailto:') ||
          href.startsWith('tel:') ||
          href.startsWith('http') ||
          href.startsWith('javascript:') ||
          link.hasAttribute('target') ||
          link.hasAttribute('download')) {
        return;
      }

      link.addEventListener('click', (e) => {
        e.preventDefault();
        this.navigateTo(href);
      });
    });

    // Handle browser back/forward
    window.addEventListener('pageshow', (e) => {
      document.body.classList.remove('page-transitioning');
    });
  },

  navigateTo(url) {
    document.body.classList.add('page-transitioning');

    setTimeout(() => {
      window.location.href = url;
    }, 400);
  }
};
