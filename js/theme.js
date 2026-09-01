/* ============================================
   THEME — Light / Dark Mode Toggle
   ============================================ */

const ThemeManager = {
  init() {
    this.storageKey = 'motor-theme';
    this.toggleBtns = document.querySelectorAll('[data-theme-toggle]');

    // Load saved preference or system preference
    const saved = localStorage.getItem(this.storageKey);
    if (saved) {
      this.setTheme(saved, false);
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      this.setTheme('dark', false);
    } else {
      this.setTheme('light', false);
    }

    // Listen for system preference changes
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
      if (!localStorage.getItem(this.storageKey)) {
        this.setTheme(e.matches ? 'dark' : 'light', false);
      }
    });

    // Bind toggle buttons
    this.toggleBtns.forEach(btn => {
      btn.addEventListener('click', () => this.toggle());
    });
  },

  setTheme(theme, save = true) {
    document.documentElement.setAttribute('data-theme', theme);
    this.currentTheme = theme;

    // Update toggle button icons
    this.toggleBtns.forEach(btn => {
      const sunIcon = btn.querySelector('.icon-sun');
      const moonIcon = btn.querySelector('.icon-moon');
      if (sunIcon && moonIcon) {
        if (theme === 'dark') {
          sunIcon.style.display = 'block';
          moonIcon.style.display = 'none';
        } else {
          sunIcon.style.display = 'none';
          moonIcon.style.display = 'block';
        }
      }
      btn.setAttribute('aria-label', `Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`);
    });

    if (save) {
      localStorage.setItem(this.storageKey, theme);
    }
  },

  toggle() {
    const newTheme = this.currentTheme === 'dark' ? 'light' : 'dark';
    this.setTheme(newTheme);
  }
};
