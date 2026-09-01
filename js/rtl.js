/* ============================================
   RTL — Right-to-Left / Left-to-Right Toggle
   ============================================ */

const RTLManager = {
  init() {
    this.storageKey = 'motor-dir';
    this.toggleBtns = document.querySelectorAll('[data-rtl-toggle]');

    // Load saved preference
    const saved = localStorage.getItem(this.storageKey);
    if (saved) {
      this.setDirection(saved, false);
    }

    // Bind toggle buttons
    this.toggleBtns.forEach(btn => {
      btn.addEventListener('click', () => this.toggle());
    });
  },

  setDirection(dir, save = true) {
    document.documentElement.setAttribute('dir', dir);
    this.currentDir = dir;

    // Update button labels
    this.toggleBtns.forEach(btn => {
      btn.setAttribute('aria-label', `Switch to ${dir === 'rtl' ? 'LTR' : 'RTL'} layout`);
      btn.textContent = dir === 'rtl' ? 'LTR' : 'RTL';
    });

    if (save) {
      localStorage.setItem(this.storageKey, dir);
    }
  },

  toggle() {
    const newDir = this.currentDir === 'rtl' ? 'ltr' : 'rtl';
    this.setDirection(newDir);
  }
};
