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

          <a href="login.html" class="btn btn--ghost" style="width:100%; justify-content:center; gap:var(--space-2);">
            Go to full login page
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16" aria-hidden="true"><path d="M5 12h14"/><path d="M12 5l7 7-7 7"/></svg>
          </a>
        </form>

        <div class="login-modal__footer">
          Don't have an account? <a href="contact.html">Contact us to get started</a>
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
