/* ============================================
   LOGIN — Modal & Interactions
   ============================================ */

const LoginModal = {
  init() {
    this.createModal();
    this.bindEvents();
  },

  createModal() {
    // Avoid duplicate
    if (document.getElementById('login-modal')) return;

    const modal = document.createElement('div');
    modal.className = 'login-modal';
    modal.id = 'login-modal';
    modal.setAttribute('aria-hidden', 'true');
    modal.setAttribute('role', 'dialog');
    modal.setAttribute('aria-modal', 'true');
    modal.setAttribute('aria-labelledby', 'login-modal-title');

    modal.innerHTML = `
      <div class="login-modal__overlay" data-login-close aria-hidden="true"></div>
      <div class="login-modal__dialog" role="document">
        <button class="login-modal__close" aria-label="Close login dialog" data-login-close>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="18" height="18" aria-hidden="true"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
        </button>

        <div class="login-modal__header">
          <div class="login-modal__icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" width="28" height="28"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
          </div>
          <h2 id="login-modal-title">Welcome Back</h2>
          <p>Sign in to your MotorSure account to manage policies & documents</p>
        </div>

        <form class="login-modal__form" data-validate novalidate>
          <div class="form-group">
            <label class="form-label" for="login-email">Email Address</label>
            <input type="email" id="login-email" class="form-input" placeholder="you@example.com" required data-validate-type="email" autocomplete="email">
          </div>
          <div class="form-group">
            <label class="form-label" for="login-password">Password</label>
            <input type="password" id="login-password" class="form-input" placeholder="Enter your password" required data-min-length="6" autocomplete="current-password">
          </div>

          <div class="login-modal__meta">
            <label class="login-modal__remember">
              <input type="checkbox" id="login-remember"> Remember me
            </label>
            <a href="#" class="login-modal__forgot" onclick="event.preventDefault(); alert('Password reset link will be sent to your email.');">Forgot password?</a>
          </div>

          <button type="submit" class="btn btn--primary btn--lg" style="width:100%;">Sign In</button>

          <div class="login-modal__divider">or</div>

          <div style="display:grid;gap:var(--space-3);">
            <button type="button" class="btn btn--ghost" style="width:100%; justify-content:center;" onclick="window.location.href='index.html'">
              <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>
              Continue with Google
            </button>
            <button type="button" class="btn btn--dark" style="width:100%; justify-content:center;" onclick="window.location.href='index.html'" aria-label="Continue with Apple">
              <svg viewBox="0 0 384 512" width="18" height="18" fill="currentColor" aria-hidden="true"><path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/></svg>
              Continue with Apple
            </button>
            <a href="login.html" class="btn btn--ghost" style="width:100%; justify-content:center; gap:var(--space-2);">
              Go to full login page
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16" aria-hidden="true"><path d="M5 12h14"/><path d="M12 5l7 7-7 7"/></svg>
            </a>
          </div>
        </form>

        <div class="login-modal__footer">
          Don't have an account? <a href="signup.html">Sign up</a>
        </div>
      </div>
    `;

    document.body.appendChild(modal);

    this.modal = modal;
    this.dialog = modal.querySelector('.login-modal__dialog');
    this.form = modal.querySelector('form');
    this.firstInput = modal.querySelector('#login-email');

    // Enhance form after injection — hook into existing validator if present
    if (typeof FormValidator !== 'undefined' && this.form) {
      // Let FormValidator handle live validation - re-init for this form
      const inputs = this.form.querySelectorAll('.form-input');
      inputs.forEach(input => {
        input.addEventListener('blur', () => FormValidator.validateField(input));
        input.addEventListener('input', () => {
          if (input.classList.contains('form-input--error')) FormValidator.validateField(input);
        });
      });

      this.form.addEventListener('submit', (e) => {
        e.preventDefault();
        if (FormValidator.validateForm(this.form)) {
          const btn = this.form.querySelector('[type="submit"]');
          const original = btn.textContent;
          btn.disabled = true;
          btn.textContent = 'Signing in...';
          setTimeout(() => {
            btn.disabled = false;
            btn.textContent = original;
            this.form.reset();
            // Redirect to home page after successful sign-in
            window.location.href = 'index.html';
          }, 800);
        }
      });
    }
  },

  bindEvents() {
    // Never restore a stuck-open modal on back/forward navigation
    // (bfcache restores the DOM exactly as left — incl. an open overlay).
    window.addEventListener('pageshow', () => {
      this.close();
    });

    // If navigating away from inside the modal (e.g. "Go to full login
    // page"), close it first so Back restores a clean page.
    document.addEventListener('click', (e) => {
      const navLink = e.target.closest('.login-modal__dialog a[href]');
      if (navLink) {
        const href = navLink.getAttribute('href');
        if (href && !href.startsWith('#') && !href.startsWith('javascript:')) {
          this.close();
        }
      }
    });

    // Open triggers
    document.addEventListener('click', (e) => {
      const trigger = e.target.closest('[data-login-trigger]');
      if (trigger) {
        // If user explicitly wants login.html (e.g., from modal's link to full page), allow navigation
        if (trigger.getAttribute('href') === 'login.html' && trigger.closest('.login-modal__dialog')) {
          return;
        }
        e.preventDefault();
        this.open();
      }
    });

    // Close triggers
    document.addEventListener('click', (e) => {
      if (e.target.closest('[data-login-close]')) {
        this.close();
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.modal && this.modal.classList.contains('open')) {
        this.close();
      }
    });

    // Prevent closing when clicking inside dialog
    if (this.dialog) {
      this.dialog.addEventListener('click', (e) => e.stopPropagation());
    }
  },

  open() {
    if (!this.modal) this.createModal();
    this.modal.classList.add('open');
    this.modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    // Close mobile menu if open
    if (typeof Navbar !== 'undefined' && Navbar.mobileMenu?.classList.contains('open')) {
      Navbar.closeMobile();
    }
    // Focus first input after animation
    setTimeout(() => {
      if (this.firstInput) this.firstInput.focus();
    }, 100);
  },

  close() {
    if (!this.modal) return;
    this.modal.classList.remove('open');
    this.modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }
};

// Auto-init
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => LoginModal.init());
} else {
  LoginModal.init();
}
