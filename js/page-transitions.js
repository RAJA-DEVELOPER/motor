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

    // Handle browser back/forward (incl. bfcache restores)
    window.addEventListener('pageshow', () => {
      clearTimeout(this._t);
      document.body.classList.remove('page-transitioning');
    });

    // If the user goes back/forward while a transition is pending,
    // cancel it so the browser navigation is not overridden.
    window.addEventListener('popstate', () => {
      clearTimeout(this._t);
      document.body.classList.remove('page-transitioning');
    });

    window.addEventListener('pagehide', () => {
      clearTimeout(this._t);
    });
  },

  navigateTo(url) {
    document.body.classList.add('page-transitioning');

    clearTimeout(this._t);
    this._t = setTimeout(() => {
      window.location.href = url;
    }, 400);
  }
};
