/* ============================================
   NAVBAR — Sticky Nav & Mobile Menu
   ============================================ */

const Navbar = {
  init() {
    this.navbar = document.querySelector('.navbar');
    this.hamburger = document.querySelector('.navbar__hamburger');
    this.mobileMenu = document.querySelector('.mobile-menu');
    this.mobileClose = document.querySelector('.mobile-menu__close');
    this.mobileOverlay = document.querySelector('.mobile-menu__overlay');

    if (!this.navbar) return;

    this.handleScroll();
    this.bindEvents();
    this.setActiveLink();
  },

  handleScroll() {
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          if (window.scrollY > 50) {
            this.navbar.classList.add('scrolled');
          } else {
            this.navbar.classList.remove('scrolled');
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll(); // Initial check
  },

  bindEvents() {
    if (this.hamburger) {
      this.hamburger.addEventListener('click', () => this.openMobile());
    }

    if (this.mobileClose) {
      this.mobileClose.addEventListener('click', () => this.closeMobile());
    }

    if (this.mobileOverlay) {
      this.mobileOverlay.addEventListener('click', () => this.closeMobile());
    }

    // Close on escape
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.mobileMenu?.classList.contains('open')) {
        this.closeMobile();
      }
    });

    // Close on resize to desktop
    window.addEventListener('resize', () => {
      if (window.innerWidth > 1024 && this.mobileMenu?.classList.contains('open')) {
        this.closeMobile();
      }
    });
  },

  openMobile() {
    this.mobileMenu?.classList.add('open');
    this.mobileOverlay?.classList.add('visible');
    this.hamburger?.classList.add('active');
    document.body.style.overflow = 'hidden';

    // Focus trap
    const firstFocusable = this.mobileMenu.querySelector('a, button');
    if (firstFocusable) firstFocusable.focus();
  },

  closeMobile() {
    this.mobileMenu?.classList.remove('open');
    this.mobileOverlay?.classList.remove('visible');
    this.hamburger?.classList.remove('active');
    document.body.style.overflow = '';
  },

  setActiveLink() {
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';

    // Desktop nav
    document.querySelectorAll('.navbar__link').forEach(link => {
      const href = link.getAttribute('href');
      if (href === currentPath || (currentPath === '' && href === 'index.html')) {
        link.classList.add('active');
      }
    });

    // Mobile nav
    document.querySelectorAll('.mobile-menu__link').forEach(link => {
      const href = link.getAttribute('href');
      if (href === currentPath || (currentPath === '' && href === 'index.html')) {
        link.classList.add('active');
      }
    });
  }
};
