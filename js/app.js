/* ============================================
   APP.JS — Main Orchestrator
   ============================================ */

// Import & initialize all modules on DOM ready
document.addEventListener('DOMContentLoaded', () => {
  // Initialize core modules
  ThemeManager.init();
  RTLManager.init();
  Navbar.init();
  ScrollReveal.init();
  BackToTop.init();
  LazyLoad.init();
  PageTransitions.init();

  // Initialize page-specific modules
  if (document.querySelector('.hero-slider')) {
    HeroSlider.init();
  }

  if (document.querySelector('.accordion')) {
    Accordion.init();
  }

  if (document.querySelector('[data-validate]')) {
    FormValidator.init();
  }

  // Initialize tabs
  document.querySelectorAll('.tabs').forEach(tabContainer => {
    initTabs(tabContainer);
  });

  // Initialize checklist
  document.querySelectorAll('.checklist').forEach(list => {
    initChecklist(list);
  });

  // Initialize counters
  initCounters();

  // Initialize lightbox
  initLightbox();
});

// ── Tab Initialization ──
function initTabs(container) {
  const buttons = container.querySelectorAll('.tab-btn');
  const parent = container.parentElement;
  const panels = parent.querySelectorAll('.tab-panel');

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      buttons.forEach(b => b.classList.remove('active'));
      panels.forEach(p => p.classList.remove('active'));

      btn.classList.add('active');
      const target = document.getElementById(btn.dataset.tab);
      if (target) target.classList.add('active');
    });
  });
}

// ── Checklist Initialization ──
function initChecklist(list) {
  const items = list.querySelectorAll('.checklist__item');
  items.forEach(item => {
    item.addEventListener('click', () => {
      item.classList.toggle('checked');
    });

    item.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        item.classList.toggle('checked');
      }
    });
  });
}

// ── Counter Animation ──
function initCounters() {
  const counters = document.querySelectorAll('[data-count]');
  if (!counters.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !entry.target.dataset.counted) {
        entry.target.dataset.counted = 'true';
        animateCounter(entry.target);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(counter => observer.observe(counter));
}

function animateCounter(el) {
  const target = parseInt(el.dataset.count, 10);
  const suffix = el.dataset.suffix || '';
  const duration = 2000;
  const startTime = performance.now();

  function update(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const easeOut = 1 - Math.pow(1 - progress, 3);
    const current = Math.round(target * easeOut);

    el.textContent = current.toLocaleString() + suffix;

    if (progress < 1) {
      requestAnimationFrame(update);
    }
  }

  requestAnimationFrame(update);
}

// ── Lightbox ──
function initLightbox() {
  const lightboxTriggers = document.querySelectorAll('[data-lightbox]');
  if (!lightboxTriggers.length) return;

  // Create lightbox element
  const lightbox = document.createElement('div');
  lightbox.className = 'lightbox';
  lightbox.innerHTML = `
    <div class="lightbox__overlay"></div>
    <div class="lightbox__content">
      <button class="lightbox__close" aria-label="Close lightbox">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
        </svg>
      </button>
      <img class="lightbox__img" src="" alt="">
    </div>
  `;
  document.body.appendChild(lightbox);

  const lightboxImg = lightbox.querySelector('.lightbox__img');
  const lightboxClose = lightbox.querySelector('.lightbox__close');
  const lightboxOverlay = lightbox.querySelector('.lightbox__overlay');

  lightboxTriggers.forEach(trigger => {
    trigger.addEventListener('click', () => {
      lightboxImg.src = trigger.dataset.lightbox || trigger.src;
      lightboxImg.alt = trigger.alt || '';
      lightbox.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  });

  function closeLightbox() {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
  }

  lightboxClose.addEventListener('click', closeLightbox);
  lightboxOverlay.addEventListener('click', closeLightbox);
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightbox.classList.contains('active')) {
      closeLightbox();
    }
  });
}

// Add lightbox styles dynamically
const lightboxStyles = document.createElement('style');
lightboxStyles.textContent = `
  .lightbox {
    position: fixed; inset: 0; z-index: 10000;
    display: flex; align-items: center; justify-content: center;
    opacity: 0; pointer-events: none;
    transition: opacity 0.3s ease;
  }
  .lightbox.active { opacity: 1; pointer-events: all; }
  .lightbox__overlay {
    position: absolute; inset: 0;
    background: rgba(0,0,0,0.9);
  }
  .lightbox__content {
    position: relative; z-index: 1;
    max-width: 90vw; max-height: 90vh;
  }
  .lightbox__img {
    max-width: 90vw; max-height: 85vh;
    object-fit: contain; border-radius: 8px;
    box-shadow: 0 24px 64px rgba(0,0,0,0.5);
  }
  .lightbox__close {
    position: absolute; top: -48px; right: 0;
    width: 40px; height: 40px;
    display: flex; align-items: center; justify-content: center;
    background: transparent; border: 1px solid rgba(255,255,255,0.3);
    border-radius: 50%; cursor: pointer; color: white;
    transition: all 0.3s ease;
  }
  .lightbox__close:hover {
    border-color: #C9A45C; color: #C9A45C;
  }
  .lightbox__close svg { width: 18px; height: 18px; }
`;
document.head.appendChild(lightboxStyles);
