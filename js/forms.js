/* ============================================
   FORMS — Validation
   ============================================ */

const FormValidator = {
  init() {
    this.forms = document.querySelectorAll('[data-validate]');
    if (!this.forms.length) return;

    this.forms.forEach(form => {
      form.setAttribute('novalidate', '');

      form.addEventListener('submit', (e) => {
        e.preventDefault();
        if (this.validateForm(form)) {
          this.handleSubmit(form);
        }
      });

      // Live validation on blur
      const inputs = form.querySelectorAll('.form-input');
      inputs.forEach(input => {
        input.addEventListener('blur', () => {
          this.validateField(input);
        });

        input.addEventListener('input', () => {
          if (input.classList.contains('form-input--error')) {
            this.validateField(input);
          }
          // Re-validate confirm-password when the original password changes
          const confirm = form.querySelector(`[data-match="${input.id}"]`);
          if (confirm && confirm.value) {
            this.validateField(confirm);
          }
        });
      });

      // Terms checkbox live feedback
      const requiredChecks = form.querySelectorAll('input[type="checkbox"][required]');
      requiredChecks.forEach(chk => {
        chk.addEventListener('change', () => this.validateField(chk));
      });
    });
  },

  validateForm(form) {
    const inputs = form.querySelectorAll('.form-input[required], .form-input[data-validate-type], input[type="checkbox"][required]');
    let isValid = true;

    inputs.forEach(input => {
      if (!this.validateField(input)) {
        isValid = false;
      }
    });

    return isValid;
  },

  validateField(input) {
    // Required checkbox (e.g. Terms & Conditions)
    if (input.type === 'checkbox') {
      const group = input.closest('.form-group') || input.parentElement;
      if (input.hasAttribute('required') && !input.checked) {
        this.setError(input, 'You must accept the Terms & Conditions');
        return false;
      }
      this.setError(input, '');
      return true;
    }

    const value = input.value.trim();
    const type = input.dataset.validateType || input.type;
    let errorMsg = '';

    // Required check
    if (input.hasAttribute('required') && !value) {
      errorMsg = 'This field is required';
    }
    // Email validation
    else if (type === 'email' && value) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        errorMsg = 'Please enter a valid email address';
      }
    }
    // Phone validation
    else if (type === 'tel' && value) {
      const phoneRegex = /^[\d\s\-+()]{7,15}$/;
      if (!phoneRegex.test(value)) {
        errorMsg = 'Please enter a valid phone number';
      }
    }
    // Min length
    else if (input.dataset.minLength && value.length < parseInt(input.dataset.minLength)) {
      errorMsg = `Minimum ${input.dataset.minLength} characters required`;
    }
    // Confirm-password / field match (e.g. data-match="su-password")
    else if (input.dataset.match) {
      const other = document.getElementById(input.dataset.match);
      if (other && value !== other.value.trim()) {
        errorMsg = 'Passwords do not match';
      }
    }

    // Show / hide error
    this.setError(input, errorMsg);
    return !errorMsg;
  },

  setError(input, message) {
    const group = input.closest('.form-group') || input.parentElement;
    if (!group) return;

    let errorEl = group.querySelector('.form-error');

    if (message) {
      input.classList.add('form-input--error');
      if (!errorEl) {
        errorEl = document.createElement('span');
        errorEl.className = 'form-error';
        errorEl.setAttribute('role', 'alert');
        group.appendChild(errorEl);
      }
      errorEl.textContent = message;
    } else {
      input.classList.remove('form-input--error');
      if (errorEl) errorEl.remove();
    }
  },

  handleSubmit(form) {
    const submitBtn = form.querySelector('[type="submit"]');
    const originalText = submitBtn?.textContent;
    const isSignupForm = form.dataset.formType === 'signup' || form.closest('[data-form-type="signup"]') !== null || (form.querySelector('[data-match]') !== null && form.closest('.login-page') !== null);
    const isLoginForm = form.closest('.login-page') !== null || form.closest('.login-modal') !== null || form.classList.contains('login-modal__form') || isSignupForm;

    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.textContent = isSignupForm ? 'Creating account...' : (isLoginForm ? 'Signing in...' : 'Sending...');
    }

    // Simulate submission
    setTimeout(() => {
      form.reset();
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.textContent = originalText;
      }

      if (isLoginForm) {
        // Redirect to home page after successful sign-in / sign-up
        window.location.href = 'index.html';
      } else {
        // Show success message
        this.showToast('Thank you! Your message has been sent successfully.');
      }
    }, isLoginForm ? 800 : 1500);
  },

  showToast(message) {
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="20" height="20">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
        <polyline points="22 4 12 14.01 9 11.01"/>
      </svg>
      <span>${message}</span>
    `;
    document.body.appendChild(toast);

    // Trigger animation
    requestAnimationFrame(() => toast.classList.add('visible'));

    setTimeout(() => {
      toast.classList.remove('visible');
      setTimeout(() => toast.remove(), 300);
    }, 4000);
  }
};

// Toast styles
const toastStyles = document.createElement('style');
toastStyles.textContent = `
  .toast {
    position: fixed; bottom: 2rem; left: 50%; transform: translateX(-50%) translateY(20px);
    display: flex; align-items: center; gap: 0.75rem;
    padding: 1rem 1.5rem;
    background: #174A4A; color: #F7F5F0;
    border-radius: 8px; box-shadow: 0 8px 32px rgba(0,0,0,0.2);
    font-size: 0.9rem; font-family: var(--font-body);
    z-index: 10000; opacity: 0;
    transition: all 0.3s cubic-bezier(0.16,1,0.3,1);
    white-space: nowrap;
  }
  .toast.visible { opacity: 1; transform: translateX(-50%) translateY(0); }
  .toast svg { color: #C9A45C; flex-shrink: 0; }
  @media (max-width:600px) { .toast { left: 1rem; right: 1rem; transform: translateY(20px); white-space: normal; }
    .toast.visible { transform: translateY(0); } }
`;
document.head.appendChild(toastStyles);
